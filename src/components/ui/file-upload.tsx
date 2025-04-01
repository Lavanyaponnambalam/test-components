import React, { useState } from 'react';
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
  showDeleteIcon?: boolean;
  showRemoveIcon?: boolean;
  showUploadedContent?: boolean;
  onFileChange?: (files: FileList | null) => void;
};

const FileUpload: React.FC<FileUploadProps> = ({
  size = 'md',
  type = 'field',
  state = 'default',
  label,
  description,
  isDisabled = false,
  accept,
  showDeleteIcon = false,
  showRemoveIcon = false,
  showUploadedContent = true,
  onFileChange,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedFiles(files);
    if (onFileChange) {
      onFileChange(files);
    }
  };

  const handleRemove = () => setSelectedFiles(null);

  const baseStyles =
    'w-full flex items-center justify-between border rounded-sm transition duration-200 ease-in-out cursor-pointer';

    const sizeClasses = {
        sm: 'max-w-[474px] h-[32px] text-sm p-2 rounded-xs ',
        md: 'max-w-[474px] h-[40px] text-md p-4',
        lg: 'max-w-[474px] h-[48px] text-lg p-5',
      };
    

  const stateClasses: { [key in UploadState]: string } = {
    default: 'border-action-border-neutral-light_normal bg-action-base-white ',
    filled: 'border-action-border-neutral-light_normal bg-action-base-white ',
    error: 'border-error-default bg-base-white ',
  };

  // Set button size based on the file upload field size (sm, md, lg)
  const buttonSize = size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg';

  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}

      {/* File Input area or field */}
      {type === 'area' ? (
        <label className={`${baseStyles} ${stateClasses[state]} ${sizeClasses[size]} p-6`}>
          <input
            type="file"
            className="hidden"
            disabled={isDisabled}
            accept={accept}
            onChange={handleChange}
          />
          <span className="text-gray-600">{selectedFiles ? `Uploaded ${selectedFiles.length} file(s)` : 'Drag & Drop or Click to Upload'}</span>
        </label>
      ) : (
        <div className={`${baseStyles} ${stateClasses[state]} ${sizeClasses[size]} p-2`}>
          <input
            type="file"
            className="hidden"
            disabled={isDisabled}
            accept={accept}
            onChange={handleChange}
          />

          <div className="ml-auto">
            <Button
              onClick={() => document.querySelector('input[type="file"]')?.click()}
              variant="primary_soft"
              size={buttonSize} 
            >
              Upload
            </Button>
          </div>
        </div>
      )}

      {/* Show Uploaded Content */}
      {showUploadedContent && selectedFiles && (
        <div className="mt-2 flex items-center gap-2">
          <p className="text-sm text-gray-700">{selectedFiles[0].name}</p>
          {showRemoveIcon && (
            <button onClick={handleRemove} className="text-gray-500 hover:text-gray-700">
              {/* Space for Remove Icon */}
              <span className="text-xl">[Remove Icon]</span>
            </button>
          )}
          {showDeleteIcon && (
            <button onClick={handleRemove} className="text-red-500 hover:text-red-700">
              {/* Space for Delete Icon */}
              <span className="text-xl">[Delete Icon]</span>
            </button>
          )}
        </div>
      )}

      {/* Description */}
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}

      {/* Error State */}
      {state === 'error' && <p className="mt-1 text-sm text-red-500">Error: Invalid file type</p>}
    </div>
  );
};

export default FileUpload;
