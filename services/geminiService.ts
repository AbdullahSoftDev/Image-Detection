import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AnalysisResult, VerdictType } from "../types";

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    verdict: {
      type: Type.STRING,
      enum: [
        VerdictType.ORIGINAL,
        VerdictType.AI_GENERATED,
        VerdictType.MODIFIED,
        VerdictType.UNCERTAIN
      ],
      description: "The conclusion on whether the image is original, AI-generated, or modified."
    },
    confidence: {
      type: Type.INTEGER,
      description: "Confidence score between 0 and 100."
    },
    reasoning: {
      type: Type.STRING,
      description: "A detailed explanation of why this verdict was reached."
    },
    indicators: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "List of specific visual artifacts or signs detected (e.g., 'warped fingers', 'inconsistent lighting', 'metadata anomalies')."
    }
  },
  required: ["verdict", "confidence", "reasoning", "indicators"]
};

// Helper to convert File to Base64
const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove data url prefix (e.g., "data:image/jpeg;base64,")
      const base64Data = base64String.split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type
        }
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const analyzeImage = async (file: File, apiKey?: string): Promise<AnalysisResult> => {
  try {
    const finalApiKey = apiKey?.trim() || process.env.API_KEY;
    
    if (!finalApiKey) {
      throw new Error("API Key is missing. Please configure it in settings.");
    }

    // Initialize client with the specific key for this request
    const ai = new GoogleGenAI({ apiKey: finalApiKey });

    const imagePart = await fileToGenerativePart(file);

    const prompt = `
      You are a world-class digital forensics expert and AI image detection specialist. 
      Analyze the provided image meticulously for any signs of:
      1. AI Generation (Midjourney, DALL-E, Stable Diffusion artifacts, glossiness, anatomical errors, structural inconsistencies).
      2. Digital Tampering/Modification (Photoshop usage, warping, cloning, inconsistent shadows/lighting, noise pattern irregularities).
      3. Authenticity (Natural camera noise, consistent physics, realistic textures).

      Provide a strict verdict, a confidence score based on the evidence, a summary of your reasoning, and a list of key visual indicators you found.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Using Pro model for complex reasoning and visual analysis
      contents: {
        parts: [
          imagePart,
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 0.2, // Lower temperature for more analytical/deterministic output
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response from Gemini");
    }

    return JSON.parse(text) as AnalysisResult;

  } catch (error) {
    console.error("Error analyzing image:", error);
    throw error;
  }
};
