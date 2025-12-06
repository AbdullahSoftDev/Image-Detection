import React, { useRef, useState } from 'react';
import { UploadCloud, ImagePlus } from 'lucide-react';

interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void;
}

const UploadZone: React.FC<UploadZoneProps> = ({ onFilesSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    const filesArray = Array.from(fileList).filter(file => file.type.startsWith('image/'));
    if (filesArray.length > 0) {
      onFilesSelected(filesArray);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
    // Reset input so same files can be selected again if needed
    if (fileInputRef.current) {
        fileInputRef.current.value = '';
    }
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleButtonClick}
      className={`
        relative group cursor-pointer 
        border-2 border-dashed rounded-2xl p-10 
        flex flex-col items-center justify-center 
        transition-all duration-300 ease-in-out
        bg-slate-900/50 hover:bg-slate-900
        ${isDragging 
          ? 'border-blue-500 bg-blue-500/10 scale-[1.01]' 
          : 'border-slate-700 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10'
        }
      `}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleInputChange} 
        className="hidden" 
        accept="image/*" 
        multiple 
      />
      
      <div className={`
        p-4 rounded-full bg-slate-800 mb-4 transition-transform duration-300
        ${isDragging ? 'scale-110 bg-blue-500/20 text-blue-400' : 'text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-800/80'}
      `}>
        {isDragging ? <UploadCloud className="w-10 h-10" /> : <ImagePlus className="w-10 h-10" />}
      </div>
      
      <h3 className="text-xl font-semibold text-slate-200 mb-2">
        {isDragging ? 'Drop images here' : 'Upload Images to Analyze'}
      </h3>
      
      <p className="text-slate-500 text-center max-w-sm text-sm">
        Drag & drop your images here, or click to browse.
        <br />
        <span className="text-xs text-slate-600 mt-2 block">Supports JPEG, PNG, WEBP</span>
      </p>
    </div>
  );
};

export default UploadZone;
