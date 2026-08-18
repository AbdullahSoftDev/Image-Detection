<div align="center">

# 🔍 VeriLens — AI Image Authenticity Detector

### AI-Powered Image Analysis & Digital Authenticity Inspection

**Detect potential AI-generated and digitally manipulated images using multimodal AI analysis.**

<br />

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vite.dev/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI-4285F4?style=for-the-badge\&logo=google\&logoColor=white)](https://ai.google.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br />

**Upload → Analyze → Investigate → Understand**

</div>

---

## 📖 About VeriLens

**VeriLens** is a modern AI-powered image authenticity analysis application built to investigate whether an image appears to be **authentic, AI-generated, digitally modified, or uncertain**.

With the rapid growth of generative AI, realistic synthetic images have become increasingly difficult to distinguish from photographs and traditionally edited media. VeriLens provides an accessible interface for experimenting with AI-assisted image inspection.

The application uses **Google Gemini's multimodal vision capabilities** to examine uploaded images and generate a structured analysis containing:

* 🔍 Authenticity classification
* 📊 Confidence percentage
* 🧠 AI-generated assessment
* 🖼️ Digital manipulation assessment
* 📝 Detailed reasoning
* 🚩 Visual indicators
* ⚠️ Uncertainty assessment

Rather than simply displaying an AI prediction, VeriLens attempts to provide **explainable visual evidence** behind its conclusion.

> **VeriLens is an AI-assisted analysis tool and should not be considered a replacement for professional digital-forensics examination.**

---

# 🎯 Why VeriLens?

AI-generated images are becoming increasingly realistic.

Traditional visual inspection can fail to identify subtle:

* Lighting inconsistencies
* Anatomical abnormalities
* Texture irregularities
* Repeated patterns
* Unrealistic shadows
* Rendering artifacts
* Pixel inconsistencies
* Digital manipulation

VeriLens provides a simple workflow for submitting images to a multimodal AI model and receiving an interpretable analysis.

### The goal is simple:

> **Help users look beyond what an image appears to be.**

---

# ✨ Core Features

## 🧠 AI-Powered Image Analysis

VeriLens uses Google's Gemini multimodal AI capabilities to inspect images for visual characteristics associated with:

* AI-generated content
* Digital manipulation
* Image editing
* Synthetic textures
* Unnatural structures
* Lighting inconsistencies
* Anatomical anomalies
* Repetitive patterns
* Rendering artifacts
* Natural camera characteristics

The model receives the image itself rather than relying exclusively on filename or metadata.

---

## 🏷️ Four Analysis Categories

Each image receives one of four primary classifications.

| Verdict             | Meaning                                                                    |
| ------------------- | -------------------------------------------------------------------------- |
| 🟢 **Original**     | Visual characteristics appear broadly consistent with an authentic image.  |
| 🟣 **AI Generated** | Visual characteristics suggest the image may have been generated using AI. |
| 🟠 **Modified**     | The image appears to contain signs of digital manipulation or editing.     |
| ⚪ **Uncertain**     | Available evidence is insufficient for a reliable classification.          |

The **Uncertain** category is important because not every image can be confidently classified from visual information alone.

---

## 📊 Confidence Score

Each analysis includes a numerical confidence score.

Example:

```text
Confidence
█████████████████░░░ 87%

87% Confidence
```

The score provides an intuitive representation of how strongly the AI analysis supports the selected verdict.

---

## 🧠 Explainable Analysis

VeriLens does not stop at:

```text
AI Generated
```

Instead, it provides reasoning describing the visual characteristics that influenced the result.

For example:

```text
Verdict: AI Generated

Confidence: 91%

Reasoning:
The image contains unusually smooth skin textures,
inconsistent fine details, and lighting transitions
that may indicate generative image synthesis.

Indicators:
• Unnatural texture patterns
• Inconsistent lighting
• Over-smoothed details
• Repetitive structures
```

This makes the application more useful for **education, experimentation, and investigation**.

---

# 🚩 Visual Indicators

The AI can identify specific visual characteristics that contributed to its conclusion.

Possible indicators include:

* Inconsistent lighting
* Unnatural shadows
* Anatomical inconsistencies
* Unusual textures
* Repeated patterns
* Strange object boundaries
* Pixel-level irregularities
* Synthetic-looking details
* Unrealistic reflections
* Image-composition inconsistencies

Indicators are presented directly within the analysis result.

---

# 📤 Multiple Image Upload

VeriLens supports analyzing multiple images within a single session.

Users can:

* Select multiple images
* Drag and drop images
* Preview uploaded images
* Remove individual images
* Clear the entire queue
* Analyze all queued images

Supported formats include:

```text
JPEG
PNG
WEBP
```

---

# ⚡ Batch Analysis

Instead of analyzing images one by one, users can queue multiple images and select:

```text
Analyze All
```

Each image maintains its own processing state.

```text
┌───────────────┐
│ Image Queue   │
└───────┬───────┘
        │
        ├── Image 01 → Analyzing → Complete
        │
        ├── Image 02 → Analyzing → Complete
        │
        ├── Image 03 → Waiting
        │
        └── Image 04 → Error
```

This makes the application practical for testing multiple images during a single session.

---

# 🎨 Modern User Interface

VeriLens was designed with a modern dark interface focused on visual clarity and technical aesthetics.

### Interface characteristics

* 🌑 Dark UI
* 🔵 Blue/indigo visual accents
* 📱 Responsive layout
* 🖱️ Drag-and-drop interaction
* 🖼️ Image previews
* 📊 Confidence visualization
* 🔄 Loading and scanning states
* 🚩 Analysis indicators
* ⚙️ Settings modal
* ✨ Smooth UI interactions
* 📐 Responsive cards and layouts

The interface is designed to keep the analysis itself as the primary focus.

---

# 🖼️ Application Preview

> Add screenshots of your deployed application here.

```text
┌─────────────────────────────────────────────────────────────┐
│                         VeriLens                            │
│              AI Image Authenticity Detector                 │
│                                                             │
│       ┌─────────────────────────────────────────┐           │
│       │                                         │           │
│       │       Drag & Drop Image Here            │           │
│       │                                         │           │
│       │              or Browse Files            │           │
│       │                                         │           │
│       └─────────────────────────────────────────┘           │
│                                                             │
│                       Analyze All                           │
└─────────────────────────────────────────────────────────────┘
```


---

# 🏗️ System Architecture

VeriLens follows a lightweight client-side architecture centered around the Gemini API.

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    React Frontend   │
                    │                     │
                    │  Upload / Preview   │
                    │  Queue Management   │
                    │  Results UI         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Image Processing    │
                    │                     │
                    │ File → Base64       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Google Gemini API   │
                    │                     │
                    │ Gemini 2.5 Flash    │
                    │ Multimodal Vision   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Structured JSON     │
                    │                     │
                    │ Verdict             │
                    │ Confidence          │
                    │ Reasoning           │
                    │ Indicators          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Analysis Card     │
                    │                     │
                    │ Result + Evidence   │
                    └─────────────────────┘
```

---

# 🔄 Analysis Workflow

The complete workflow can be summarized as:

```text
1. Upload Image
       ↓
2. Validate File
       ↓
3. Generate Preview
       ↓
4. Add to Analysis Queue
       ↓
5. Convert Image to Base64
       ↓
6. Send Image to Gemini
       ↓
7. Perform Multimodal Analysis
       ↓
8. Receive Structured Response
       ↓
9. Parse Verdict
       ↓
10. Display Confidence
       ↓
11. Display Reasoning
       ↓
12. Display Visual Indicators
```

---

# 🤖 AI Analysis Pipeline

VeriLens uses structured output from Gemini rather than treating the response as ordinary text.

The expected response follows a structure similar to:

```json
{
  "verdict": "ORIGINAL",
  "confidence": 87,
  "reasoning": "The image contains characteristics consistent with a natural photograph.",
  "indicators": [
    "Consistent lighting",
    "Natural texture variation",
    "No obvious manipulation artifacts"
  ]
}
```

### Supported verdict values

```text
ORIGINAL
AI_GENERATED
MODIFIED
UNCERTAIN
```

This structured approach allows the React interface to reliably map the AI response to the appropriate UI components.

---

# 🧩 Project Structure

```text
Image-Detection/
│
├── components/
│   │
│   ├── AnalysisCard.tsx
│   │   ├── Displays analysis results
│   │   ├── Confidence score
│   │   ├── Verdict
│   │   ├── Reasoning
│   │   └── Indicators
│   │
│   ├── SettingsModal.tsx
│   │   └── Gemini API configuration
│   │
│   └── UploadZone.tsx
│       ├── File selection
│       ├── Drag & drop
│       └── Image validation
│
├── services/
│   │
│   └── geminiService.ts
│       └── Gemini API integration
│
├── App.tsx
│   └── Main application
│
├── index.tsx
│   └── React entry point
│
├── index.html
│   └── Application HTML shell
│
├── types.ts
│   └── TypeScript interfaces
│
├── metadata.json
│   └── Application metadata
│
├── package.json
│   └── Dependencies & scripts
│
├── tsconfig.json
│   └── TypeScript configuration
│
├── vite.config.ts
│   └── Vite configuration
│
├── LICENSE
│   └── MIT License
│
└── .gitignore
```

---

# 🧱 Core Components

## `App.tsx`

The central application component.

Responsibilities include:

* Image queue management
* Upload handling
* Image removal
* Batch analysis
* Loading states
* Error handling
* API-key configuration
* Rendering analysis results

---

## `UploadZone.tsx`

Responsible for the image-upload experience.

Features include:

* File browser integration
* Drag-and-drop
* Image validation
* File type checking
* Upload interaction
* Visual upload states

---

## `AnalysisCard.tsx`

Displays the complete analysis for an individual image.

The card can present:

```text
┌─────────────────────────────┐
│        IMAGE PREVIEW        │
├─────────────────────────────┤
│ Verdict                     │
│ AI Generated                │
│                             │
│ Confidence                 │
│ ████████████████░░ 87%      │
│                             │
│ Reasoning                   │
│ ...                         │
│                             │
│ Detected Indicators         │
│ • Indicator 1               │
│ • Indicator 2               │
│ • Indicator 3               │
└─────────────────────────────┘
```

---

## `SettingsModal.tsx`

Provides configuration for the Gemini API key.

The settings interface allows users to configure the API credentials required to perform analysis.

---

## `geminiService.ts`

The AI integration layer.

Responsibilities include:

* Initializing Gemini
* Preparing image data
* Sending multimodal requests
* Defining response structure
* Parsing AI results
* Returning analysis data to the application

---

# 🛠️ Technology Stack

## Frontend

| Technology   | Purpose                     |
| ------------ | --------------------------- |
| React        | User interface              |
| TypeScript   | Type safety                 |
| Vite         | Development & build tooling |
| Tailwind CSS | Styling                     |
| Lucide React | Icons                       |

## Artificial Intelligence

| Technology       | Purpose                       |
| ---------------- | ----------------------------- |
| Google Gemini    | Multimodal AI                 |
| Gemini 2.5 Flash | Image understanding           |
| Structured JSON  | Reliable AI response handling |

## Browser Technologies

| Technology    | Purpose               |
| ------------- | --------------------- |
| File API      | Image handling        |
| FileReader    | Image data processing |
| Local Storage | Local configuration   |
| Object URLs   | Image previews        |

---

# 🚀 Getting Started

## Prerequisites

Before running the project, make sure you have:

* Node.js installed
* npm installed
* A Google Gemini API key
* A modern web browser

---

## 1. Clone the Repository

```bash
git clone https://github.com/AbdullahSoftDev/Image-Detection.git
```

---

## 2. Open the Project

```bash
cd Image-Detection
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

Vite will start the local development server and display the available URL in your terminal.

---

## 5. Configure Gemini API

Launch the application and open the **Settings** interface.

Enter your Gemini API key.

The application uses this key when submitting images for AI analysis.

---

# 🔐 API Key & Security

VeriLens requires a Google Gemini API key.

For development and educational usage, the application provides a client-side configuration mechanism.

However, exposing API credentials directly inside a browser application has security implications.

### Recommended production architecture

For a production deployment, consider:

```text
Browser
   │
   ▼
Secure Backend
   │
   ├── Authentication
   ├── Rate Limiting
   ├── Request Validation
   └── API Key Protection
            │
            ▼
      Google Gemini
```

This prevents a long-lived Gemini API credential from being directly exposed to users.

### Never commit secrets

Do not place real API credentials inside:

```text
GitHub
Public repositories
Screenshots
README files
Frontend source code
```

---

# 🖥️ How to Use VeriLens

### Step 1 — Upload an Image

Drag an image into the upload area or use the file browser.

### Step 2 — Review the Image

The selected image appears in the queue with its preview.

### Step 3 — Add More Images

Upload additional images if you want to perform batch analysis.

### Step 4 — Start Analysis

Click:

```text
Analyze All
```

### Step 5 — Wait for Processing

Each image displays its current processing state.

### Step 6 — Review the Result

The completed analysis contains:

```text
Verdict
   ↓
Confidence
   ↓
Reasoning
   ↓
Detected Indicators
```

### Step 7 — Remove or Clear

Individual images can be removed from the queue, or the complete queue can be cleared.

---

# 📷 Supported Image Formats

VeriLens is designed to work with common browser-supported image formats.

```text
.jpg
.jpeg
.png
.webp
```

The upload interface validates that selected files are images before adding them to the queue.

---

# 📊 Example Analysis

A completed analysis may look conceptually like:

```text
╔══════════════════════════════════════════╗
║              ANALYSIS RESULT             ║
╠══════════════════════════════════════════╣
║                                          ║
║  VERDICT                                 ║
║  🟣 AI GENERATED                         ║
║                                          ║
║  CONFIDENCE                              ║
║  █████████████████░░░  89%               ║
║                                          ║
║  REASONING                               ║
║  The image contains visual patterns      ║
║  that may indicate generative synthesis. ║
║                                          ║
║  DETECTED INDICATORS                     ║
║  • Unusual texture patterns              ║
║  • Inconsistent fine details             ║
║  • Synthetic-looking structures          ║
║                                          ║
╚══════════════════════════════════════════╝
```

---

# 🎓 Educational Value

VeriLens demonstrates several modern software-development concepts in one project.

### Frontend Development

* Component-based architecture
* React state management
* TypeScript interfaces
* Responsive UI
* File handling
* Modal interfaces
* Loading states
* Error states

### AI Integration

* Multimodal AI
* Image-to-AI workflows
* Prompt engineering
* Structured model responses
* AI result interpretation

### Modern Web Development

* Vite
* npm dependency management
* Browser APIs
* Client-side storage
* Responsive design

---

# 🎯 Use Cases

VeriLens can be used for:

### 🎓 Education

Demonstrating how multimodal AI can be integrated into a modern web application.

### 🧪 AI Experimentation

Testing how AI models interpret visual authenticity.

### 🖼️ Media Investigation

Performing an initial AI-assisted inspection of suspicious images.

### 🤖 Generative AI Research

Exploring characteristics commonly associated with synthetic imagery.

### 💻 Portfolio Demonstration

Demonstrating practical experience with:

* React
* TypeScript
* AI APIs
* Multimodal models
* Modern UI development

---

# ⚠️ Limitations

VeriLens should **not** be considered a professional forensic verification system.

No AI-based image classifier can guarantee authenticity solely from visual inspection.

Results may be affected by:

* Image compression
* Image resizing
* Re-encoding
* Screenshots
* Low resolution
* Heavy editing
* New generative models
* Unusual photography conditions
* Ambiguous visual evidence
* Model limitations

An image classified as **Original** may still be manipulated.

An image classified as **AI Generated** may still be authentic.

Therefore:

> **Always treat VeriLens results as AI-assisted indicators rather than definitive forensic conclusions.**

---

# 🔮 Future Roadmap

VeriLens can be expanded into a more comprehensive digital image-forensics platform.

## 🔬 Forensic Analysis

* [ ] EXIF metadata inspection
* [ ] JPEG quantization analysis
* [ ] Error Level Analysis
* [ ] Pixel-level anomaly detection
* [ ] Noise-pattern analysis
* [ ] Clone detection
* [ ] Copy-move detection
* [ ] Image hashing
* [ ] Perceptual hashing

## 🤖 AI Improvements

* [ ] Multiple AI detection models
* [ ] Model comparison
* [ ] Confidence calibration
* [ ] Specialized deepfake detection
* [ ] Face manipulation detection
* [ ] AI-generated text detection inside images

## 📊 Reporting

* [ ] Export results as PDF
* [ ] Generate forensic-style reports
* [ ] Analysis history
* [ ] Downloadable reports
* [ ] Shareable analysis links

## 👤 User System

* [ ] User authentication
* [ ] Personal dashboards
* [ ] Saved analysis
* [ ] Usage statistics
* [ ] User preferences

## ☁️ Production Infrastructure

* [ ] Secure backend API
* [ ] Server-side Gemini integration
* [ ] Rate limiting
* [ ] Request logging
* [ ] Secure API-key management
* [ ] Cloud storage
* [ ] Scalable processing queue

---

# 📈 Future Architecture

A more advanced production version could evolve into:

```text
                       ┌───────────────┐
                       │     User      │
                       └───────┬───────┘
                               │
                               ▼
                    ┌───────────────────┐
                    │   React Frontend  │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │   Backend API     │
                    ├───────────────────┤
                    │ Authentication    │
                    │ Rate Limiting     │
                    │ Validation        │
                    │ Job Management    │
                    └─────────┬─────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
                ▼             ▼             ▼
         ┌───────────┐ ┌────────────┐ ┌────────────┐
         │  Gemini   │ │ Forensics  │ │ Metadata   │
         │ AI Model  │ │  Engine    │ │  Engine    │
         └─────┬─────┘ └──────┬─────┘ └──────┬─────┘
               │              │              │
               └──────────────┼──────────────┘
                              ▼
                    ┌───────────────────┐
                    │ Analysis Engine   │
                    └─────────┬─────────┘
                              │
                              ▼
                    ┌───────────────────┐
                    │ Final Report      │
                    └───────────────────┘
```

---

# 📋 Project Highlights

| Category     | Details                                        |
| ------------ | ---------------------------------------------- |
| Project      | VeriLens                                       |
| Type         | AI Image Authenticity Analyzer                 |
| Frontend     | React                                          |
| Language     | TypeScript                                     |
| Build Tool   | Vite                                           |
| Styling      | Tailwind CSS                                   |
| AI           | Google Gemini                                  |
| Vision Model | Gemini 2.5 Flash                               |
| Input        | Image files                                    |
| Formats      | JPEG, PNG, WEBP                                |
| Analysis     | AI-generated / Modified / Original / Uncertain |
| Output       | Verdict + Confidence + Reasoning + Indicators  |
| UI           | Responsive Dark Interface                      |
| License      | MIT                                            |

---

# 📚 Technical Concepts Demonstrated

This project demonstrates practical implementation of:

```text
React Component Architecture
        ↓
TypeScript Type Safety
        ↓
File Upload & Validation
        ↓
Image Preview Generation
        ↓
Base64 Image Processing
        ↓
Multimodal AI Integration
        ↓
Structured JSON Responses
        ↓
Asynchronous Processing
        ↓
Loading & Error States
        ↓
Responsive UI Rendering
```

---

# 🌐 Project Repository

**GitHub Repository**

[github.com/AbdullahSoftDev/Image-Detection](https://github.com/AbdullahSoftDev/Image-Detection)

---

# 👨‍💻 Author

<div align="center">

## Abdullah SoftDev

**Computer Science Student & Software Developer**

Building modern web applications, AI-powered systems, and practical software solutions.

<br />

[![GitHub](https://img.shields.io/badge/GitHub-AbdullahSoftDev-181717?style=for-the-badge\&logo=github)](https://github.com/AbdullahSoftDev)

</div>

---

# ⭐ Contributing

Contributions, ideas, bug reports, and feature suggestions are welcome.

### Contribution workflow

```bash
# Fork the repository

# Clone your fork
git clone https://github.com/YOUR_USERNAME/Image-Detection.git

# Create a feature branch
git checkout -b feature/your-feature

# Make your changes

# Commit
git commit -m "Add: your feature"

# Push
git push origin feature/your-feature

# Open a Pull Request
```

---

# 📄 License

This project is released under the **MIT License**.

See the [LICENSE](LICENSE) file for complete details.

---

<div align="center">

# 🔍 VeriLens

### **See Beyond the Pixels.**

AI-powered image authenticity analysis built with **React, TypeScript, and Google Gemini**.

<br />

⭐ **Star the repository if you found it useful.**

</div>
