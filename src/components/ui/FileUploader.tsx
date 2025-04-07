import { Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface FileUploaderProps<T> {
  onFilesChange: (files: File | null, field: keyof T) => void;
  field: keyof T;
  label: string;
  disabled?: boolean;
  required?: boolean;
  file: File | null;
  accept?: string; // optional - to filter file types
}

const FileUploader = <T,>({
  onFilesChange,
  field,
  label,
  disabled = false,
  required = false,
  file,
  accept,
}: FileUploaderProps<T>) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isImage, setIsImage] = useState<boolean>(false);

  useEffect(() => {
    if (file) {
      const imageType = file.type.startsWith("image/");
      setIsImage(imageType);
      if (imageType) {
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
      } else {
        setPreview(null);
      }
    } else {
      setPreview(null);
      setIsImage(false);
    }
  }, [file]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const selectedFile = event.target.files?.[0] || null;
    onFilesChange(selectedFile, field);
  };

  const handleRemoveFile = () => {
    onFilesChange(null, field);
  };

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-fg-neutral-secondary">
        {label} <span className="text-fg-error-primary">{required ? "*" : ""}</span>
      </label>

      <div className="w-full flex flex-col space-y-2 mt-2 font-normal text-base">
        {file ? (
          isImage ? (
            <div className="flex flex-col items-center rounded-sm p-2 gap-2 border border-neutral-subtle">
              <img src={preview!} alt="Uploaded preview" className="object-cover w-full h-40 rounded-sm" />
              <div className="flex bg-neutral-subtle w-full p-2 gap-2 items-center rounded-sm">
                <p className="text-sm font-normal text-fg-neutral-primary truncate w-full text-start">
                  {file.name}
                </p>
                <button
                  className="text-fg-error-primary bg-base-white p-[6px] text-xs flex items-center justify-center rounded-sm border border-action-neutral-light_normal"
                  onClick={handleRemoveFile}
                  disabled={disabled}
                >
                  <Trash size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-center border rounded-sm px-3 py-[7px] w-full border-action-border-neutral-light_normal bg-neutral-subtle">
              <p className="text-sm font-normal text-fg-neutral-primary truncate w-full text-start">
                {file.name}
              </p>
              <button
                onClick={handleRemoveFile}
                className="text-fg-error-primary bg-base-white p-[6px] text-xs flex items-center justify-center rounded-sm border border-action-neutral-light_normal"
                disabled={disabled}
              >
                <Trash size={16} />
              </button>
            </div>
          )
        ) : (
          <label
            htmlFor={`file-input-${String(field)}`}
            className={`border rounded-sm px-3 py-[7px] w-full flex justify-between items-center border-action-border-neutral-light_normal ${
              disabled
                ? "cursor-not-allowed text-action-fg-base-white bg-action-neutral-disabled"
                : "cursor-pointer text-fg-neutral-primary-light hover:border-action-border-neutral-light_normal"
            }`}
          >
            <span className="text-sm font-normal text-fg-neutral-secondary">
              Choose file to upload
            </span>

            <span
              className={`px-2 py-[5px] rounded-xs text-xs font-medium ${
                disabled
                  ? "text-action-fg-base-white bg-action-neutral-disabled"
                  : "text-action-fg-brand-normal bg-action-brand-light_normal"
              }`}
            >
              Upload
            </span>

            <input
              id={`file-input-${String(field)}`}
              type="file"
              className="hidden"
              onChange={handleFileChange}
              disabled={disabled}
              required={required}
              accept={accept}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
