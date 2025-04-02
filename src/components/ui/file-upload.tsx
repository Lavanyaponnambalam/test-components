import React, { useState, useRef } from 'react';
import Button from './button';

type UploadType = 'field' | 'area' | 'files-only';
type UploadState = 'default' | 'filled' | 'error';

type FileUploadProps = {
  size?: 'sm' | 'md' | 'lg';
  type?: UploadType;
  state?: UploadState;
  label?: string;
  description?: string;
  isDisabled?: boolean;
  accept?: string;
  onFileChange?: (files: FileList | null) => void;
};

const FileUpload: React.FC<FileUploadProps> = ({
  size = 'md',
  type = 'field',
  state = 'default',
  label,
  isDisabled = false,
  accept,
  onFileChange,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Format file size (e.g., "1MB", "23GB")
  const formatFileSize = (size: number): string => {
    if (size < 1024) return `${size}B`;
    const units = ['KB', 'MB', 'GB', 'TB'];
    let index = -1;
    let fileSize = size;
    do {
      fileSize /= 1024;
      index++;
    } while (fileSize >= 1024 && index < units.length - 1);
    return `${fileSize.toFixed(1)}${units[index]}`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    if (onFileChange) {
      onFileChange(files);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Base styles
  const baseStyles =
    'relative w-full flex items-center border rounded-sm transition duration-200 ease-in-out cursor-pointer overflow-hidden';

  // Size styles
  const sizeClasses: Record<'sm' | 'md' | 'lg', Record<'field', string>> & { area: string } = {
    sm: {
      field: 'w-[400px] h-[32px] text-sm rounded-sm p-2 border',
    },
    md: {
      field: 'w-[400px] h-[40px] text-md rounded-sm p-2 border',
    },
    lg: {
      field: 'w-[400px] h-[48px] text-lg rounded-sm p-2 border',
    },
    area: 'w-[474px] h-[216px] rounded-sm border border-gray-300 p-[18px_8px] flex flex-col items-center justify-center gap-5 border-dashed',
  };
  

  // State styles
  const stateClasses: { [key in UploadState]: string } = {
    default: 'border-action-border-neutral-light_normal bg-action-base-white',
    filled: 'border-action-border-neutral-light_normal bg-action-base-white',
    error: 'border-error-default bg-base-white',
  };

  return (
    <div className="w-full">
      {type !== 'files-only' && label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      )}

      {/* Field Type */}
      {type === 'field' && (
  <div className={`${baseStyles} ${stateClasses[state]} ${sizeClasses[size].field}`}>
    <input
      ref={fileInputRef}
      type="file"
      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
      disabled={isDisabled}
      accept={accept}
      onChange={handleChange}
    />
    <span className="flex-1 truncate px-3 text-gray-600">
      {selectedFiles
        ? `${selectedFiles[0].name} (${formatFileSize(selectedFiles[0].size)})`
        : 'Choose a file...'}
    </span>
    <div className="ml-auto">
      <Button onClick={triggerFileInput} variant="primary_soft" size={size}>
        Upload
      </Button>
    </div>
  </div>
)}

{type === 'area' && (
  <div className={`${baseStyles} ${stateClasses[state]} ${sizeClasses.area} flex flex-col justify-center items-center border-dashed`}>
    <p className="text-gray-600 text-sm">Drag and drop files here or click to upload</p>
    <input
      ref={fileInputRef}
      type="file"
      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
      disabled={isDisabled}
      accept={accept}
      onChange={handleChange}
    />
  </div>
)}


      {/* Files-Only Type (Simple File Input) */}
      {type === 'files-only' && (
        <input
          ref={fileInputRef}
          type="file"
          disabled={isDisabled}
          accept={accept}
          onChange={handleChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
        />
      )}

      {state === 'error' && <p className="mt-1 text-sm text-red-500">Error: Invalid file type</p>}
    </div>
  );
};

export default FileUpload;
