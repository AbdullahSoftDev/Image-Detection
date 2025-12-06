import React, { useState, useCallback, useEffect } from 'react';
import UploadZone from './components/UploadZone';
import AnalysisCard from './components/AnalysisCard';
import SettingsModal from './components/SettingsModal';
import { ImageItem, AnalysisStatus } from './types';
import { analyzeImage } from './services/geminiService';
import { ScanLine, ShieldCheck, Settings } from 'lucide-react';

// Simple ID generator since we shouldn't rely on external heavy libs if not needed
const generateId = () => Math.random().toString(36).substr(2, 9);

const App: React.FC = () => {
  const [items, setItems] = useState<ImageItem[]>([]);
  const [isGlobalAnalyzing, setIsGlobalAnalyzing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');

  // Load API key from local storage on mount
  useEffect(() => {
    const storedKey = localStorage.getItem('gemini_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const handleSaveKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
  };

  const handleFilesSelected = useCallback((files: File[]) => {
    const newItems: ImageItem[] = files.map(file => ({
      id: generateId(),
      file,
      previewUrl: URL.createObjectURL(file),
      status: AnalysisStatus.IDLE
    }));

    setItems(prev => [...newItems, ...prev]);
  }, []);

  const handleRemove = useCallback((id: string) => {
    setItems(prev => {
        const itemToRemove = prev.find(item => item.id === id);
        if (itemToRemove) {
            URL.revokeObjectURL(itemToRemove.previewUrl);
        }
        return prev.filter(item => item.id !== id);
    });
  }, []);

  const runAnalysis = async (id: string) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, status: AnalysisStatus.ANALYZING, error: undefined } : item
    ));

    const item = items.find(i => i.id === id);
    if (!item) return;

    try {
      const result = await analyzeImage(item.file, apiKey);
      setItems(prev => prev.map(i => 
        i.id === id ? { ...i, status: AnalysisStatus.COMPLETED, result } : i
      ));
    } catch (error: any) {
      setItems(prev => prev.map(i => 
        i.id === id ? { ...i, status: AnalysisStatus.ERROR, error: error.message || 'Analysis failed' } : i
      ));
    }
  };

  const handleAnalyzeAll = async () => {
    setIsGlobalAnalyzing(true);
    const idleItems = items.filter(item => item.status === AnalysisStatus.IDLE || item.status === AnalysisStatus.ERROR);
    
    // Run concurrently but not all at once to avoid rate limits if many
    // For this demo, we'll run them all.
    await Promise.allSettled(idleItems.map(item => runAnalysis(item.id)));
    setIsGlobalAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-blue-500/30">
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        onSave={handleSaveKey}
        currentKey={apiKey}
      />

      {/* Header */}
      <header className="border-b border-slate-800 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
                <ScanLine className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              VeriLens
            </span>
          </div>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 text-slate-400 text-xs mr-2">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span className="hidden sm:inline">Secure Analysis</span>
             </div>
             <div className="w-px h-4 bg-slate-700"></div>
             <button 
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2"
                title="API Configuration"
             >
                <Settings className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">Settings</span>
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-10 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                Detect AI & <span className="text-blue-500">Tampered</span> Images
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Upload images to instantly analyze them for signs of generative AI, Photoshop manipulation, 
                or digital tampering using advanced Gemini computer vision.
            </p>
        </div>

        {/* Upload Area */}
        <div className="mb-12">
            <UploadZone onFilesSelected={handleFilesSelected} />
        </div>

        {/* Action Bar */}
        {items.length > 0 && (
            <div className="flex items-center justify-between mb-6 sticky top-20 z-40 bg-[#0f172a]/95 p-4 rounded-xl border border-slate-800 shadow-xl backdrop-blur-lg">
                <div className="text-slate-400 text-sm">
                    <span className="text-white font-medium">{items.length}</span> images in queue
                </div>
                <div className="flex gap-3">
                    <button 
                        onClick={() => setItems([])}
                        className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
                        disabled={isGlobalAnalyzing}
                    >
                        Clear All
                    </button>
                    <button 
                        onClick={handleAnalyzeAll}
                        disabled={isGlobalAnalyzing || items.every(i => i.status === AnalysisStatus.COMPLETED)}
                        className={`
                            px-6 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-blue-900/20
                            flex items-center gap-2 transition-all
                            ${isGlobalAnalyzing || items.every(i => i.status === AnalysisStatus.COMPLETED)
                                ? 'bg-slate-700 text-slate-500 cursor-not-allowed' 
                                : 'bg-blue-600 hover:bg-blue-500 text-white hover:scale-105 active:scale-95'
                            }
                        `}
                    >
                        {isGlobalAnalyzing ? (
                             <>
                                <ScanLine className="w-4 h-4 animate-spin" />
                                Analyzing...
                             </>
                        ) : (
                             <>
                                <ScanLine className="w-4 h-4" />
                                Analyze All
                             </>
                        )}
                    </button>
                </div>
            </div>
        )}

        {/* Results Grid */}
        <div className="space-y-6">
            {items.map(item => (
                <AnalysisCard 
                    key={item.id} 
                    item={item} 
                    onRemove={handleRemove} 
                />
            ))}
        </div>

        {items.length === 0 && (
            <div className="mt-20 text-center">
                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 mb-4 border border-slate-800">
                    <ShieldCheck className="w-8 h-8 text-slate-600" />
                 </div>
                 <h3 className="text-slate-500 font-medium">Ready for inspection</h3>
            </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800 bg-slate-950 py-8 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} VeriLens. Powered by Gemini Pro Vision.</p>
      </footer>

    </div>
  );
};

export default App;