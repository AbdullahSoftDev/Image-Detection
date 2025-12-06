import React from 'react';
import { ImageItem, AnalysisStatus, VerdictType } from '../types';
import { AlertCircle, CheckCircle, Loader2, BrainCircuit, ScanSearch, FileImage } from 'lucide-react';

interface AnalysisCardProps {
  item: ImageItem;
  onRemove: (id: string) => void;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({ item, onRemove }) => {
  
  const getStatusColor = (verdict?: VerdictType) => {
    switch (verdict) {
      case VerdictType.ORIGINAL:
        return 'text-green-400 border-green-500/50 bg-green-500/10';
      case VerdictType.AI_GENERATED:
        return 'text-purple-400 border-purple-500/50 bg-purple-500/10';
      case VerdictType.MODIFIED:
        return 'text-orange-400 border-orange-500/50 bg-orange-500/10';
      case VerdictType.UNCERTAIN:
        return 'text-gray-400 border-gray-500/50 bg-gray-500/10';
      default:
        return 'text-slate-400 border-slate-700 bg-slate-800';
    }
  };

  const getVerdictIcon = (verdict?: VerdictType) => {
    switch (verdict) {
      case VerdictType.ORIGINAL:
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case VerdictType.AI_GENERATED:
        return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case VerdictType.MODIFIED:
        return <AlertCircle className="w-5 h-5 text-orange-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row transition-all hover:border-slate-600">
      
      {/* Image Preview Section */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto bg-black flex items-center justify-center overflow-hidden group">
        <img 
          src={item.previewUrl} 
          alt="Analysis target" 
          className="w-full h-full object-contain"
        />
        <div className="absolute top-2 right-2">
            <button 
                onClick={() => onRemove(item.id)}
                className="bg-black/50 hover:bg-red-500/80 text-white p-1 rounded-full transition-colors backdrop-blur-sm"
                title="Remove image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>
        {item.status === AnalysisStatus.ANALYZING && (
           <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center backdrop-blur-sm">
             <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
                <ScanSearch className="w-12 h-12 text-blue-400 animate-pulse relative z-10" />
             </div>
             <p className="mt-3 text-blue-200 font-mono text-sm tracking-widest uppercase">Scanning...</p>
           </div>
        )}
      </div>

      {/* Analysis Details Section */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-start justify-between mb-4">
            <div>
                <h3 className="text-slate-200 font-medium truncate max-w-[200px]" title={item.file.name}>
                    {item.file.name}
                </h3>
                <p className="text-slate-500 text-xs mt-1">
                    {(item.file.size / 1024 / 1024).toFixed(2)} MB • {item.file.type}
                </p>
            </div>
            {item.status === AnalysisStatus.COMPLETED && item.result && (
                <div className={`px-3 py-1 rounded-full border flex items-center gap-2 text-sm font-semibold ${getStatusColor(item.result.verdict)}`}>
                    {getVerdictIcon(item.result.verdict)}
                    <span>{item.result.verdict.toUpperCase()}</span>
                </div>
            )}
            {item.status === AnalysisStatus.ERROR && (
                <div className="px-3 py-1 rounded-full border border-red-500/50 bg-red-500/10 text-red-400 text-sm font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>ERROR</span>
                </div>
            )}
        </div>

        {item.status === AnalysisStatus.IDLE && (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-500 space-y-2 opacity-50">
                <FileImage className="w-10 h-10" />
                <p className="text-sm">Ready to analyze</p>
            </div>
        )}

        {item.status === AnalysisStatus.ANALYZING && (
            <div className="flex-1 flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-slate-800 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-20 bg-slate-800 rounded animate-pulse w-full"></div>
                </div>
            </div>
        )}

        {item.status === AnalysisStatus.COMPLETED && item.result && (
            <div className="flex-1 flex flex-col space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                
                {/* Confidence Meter */}
                <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Confidence Score</span>
                        <span>{item.result.confidence}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div 
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                item.result.confidence > 80 ? 'bg-green-500' : 
                                item.result.confidence > 50 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${item.result.confidence}%` }}
                        ></div>
                    </div>
                </div>

                {/* Reasoning */}
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {item.result.reasoning}
                    </p>
                </div>

                {/* Indicators */}
                <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Detected Indicators
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {item.result.indicators.length > 0 ? (
                            item.result.indicators.map((indicator, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700">
                                    {indicator}
                                </span>
                            ))
                        ) : (
                            <span className="text-slate-600 text-xs italic">No specific artifacts detected.</span>
                        )}
                    </div>
                </div>
            </div>
        )}

        {item.status === AnalysisStatus.ERROR && (
             <div className="flex-1 flex items-center justify-center">
                <p className="text-red-400 text-sm text-center">
                    {item.error || "An error occurred while analyzing this image."}
                </p>
             </div>
        )}

      </div>
    </div>
  );
};

export default AnalysisCard;
