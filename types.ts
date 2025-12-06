export enum AnalysisStatus {
  IDLE = 'IDLE',
  ANALYZING = 'ANALYZING',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR'
}

export enum VerdictType {
  ORIGINAL = 'Original',
  AI_GENERATED = 'AI Generated',
  MODIFIED = 'Modified/Tampered',
  UNCERTAIN = 'Uncertain'
}

export interface AnalysisResult {
  verdict: VerdictType;
  confidence: number;
  reasoning: string;
  indicators: string[];
}

export interface ImageItem {
  id: string;
  file: File;
  previewUrl: string;
  status: AnalysisStatus;
  result?: AnalysisResult;
  error?: string;
}
