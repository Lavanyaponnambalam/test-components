import { Note, Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface ImagePreview {
  file: File;
  preview: string;
}

export default function MultipleImageUploader({
  formData,
  setFormData,
  disabled,
  required,
  label,
  imageName
}: {
  formData: any;
  setFormData: (data: any) => void;
  disabled: boolean;
  required: boolean;
  label?: string;
  imageName:string
}) {
  const [images, setImages] = useState<ImagePreview[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || disabled) return;
    
    const files = Array.from(event.target.files).filter((file) => {
      const validTypes = ["image/png", "image/jpeg"];
      const isValidSize = file.size <= 10 * 1024 * 1024; 
      return validTypes.includes(file.type) && isValidSize;
    });

    const newImages: ImagePreview[] = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
    setFormData({ ...formData, [imageName]: [...(formData[imageName] || []), ...files] });

  };

  const removeImage = (index: number) => {
    if (disabled) return;
    
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      setFormData({ ...formData, [imageName]: updatedImages.map((img) => img.file) });
      return updatedImages;
    });
  };

  useEffect(() => {
    if (!formData[imageName] || formData[imageName].length === 0) {
      setImages([]);
    }
  }, [formData[imageName]]);

  // Cleanup object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, [images]);

  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-fg-neutral-secondary">
        {label ? label : "Attach Image"}{" "}
        {required && <span className="text-fg-error-primary">*</span>}
      </label>
      <div
        className={`border-2 border-action-border-neutral-light_normal border-dashed py-8 text-center rounded-sm ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          className="hidden"
          id="imageUpload"
          onChange={handleImageUpload}
          disabled={disabled}
        />
        <label
          htmlFor={!disabled ? "imageUpload" : undefined}
          className={`mx-0 items-center ${
            disabled ? "pointer-events-none" : "cursor-pointer"
          }`}
        >
          <Note
            size={42}
            weight="fill"
            className={`w-full mb-3 ${
              disabled
                ? "text-fg-neutral-secondary"
                : "text-action-bg-neutral-normal"
            }`}
          />
          <p
            className={`text-sm ${
              disabled
                ? "text-fg-neutral-secondary"
                : "text-fg-neutral-secondary"
            }`}
          >
            {images.length === 0
              ? "Drag & Drop or Choose to Upload"
              : "Drag & Drop or Add More Uploads"}
          </p>
          <p
            className={`text-xs ${
              disabled
                ? "text-fg-neutral-secondary"
                : "text-fg-neutral-tertiary"
            }`}
          >
            PNG, JPG (max 10MB)
          </p>
          <div className="w-full flex justify-center">
            <p
              className={`px-3 py-2 text-base font-medium mt-3 rounded-lg w-fit ${
                disabled
                  ? "text-fg-neutral-secondary bg-action-brand-light_hover"
                  : "text-action-fg-brand-normal bg-action-brand-light_normal"
              }`}
            >
              Upload Files
            </p>
          </div>
        </label>
      </div>

      {images.length > 0 && (
        <p className="mt-6 text-sm font-medium text-fg-neutral-secondary">
          {images.length > 1 ? "Attached Images" : "Attached Image"}
        </p>
      )}

      <div className="mt-2 grid grid-cols-2 gap-2 justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg p-2 gap-2 border border-border-neutral-subtle"
          >
            <img
              src={img.preview}
              alt={`Uploaded preview ${index + 1}`}
              className="object-cover w-full h-32 rounded-lg"
            />
            <div className="flex bg-neutral-subtle-light w-full p-2 gap-2 items-center rounded-lg">
              <p className="text-sm font-normal text-fg-neutral-primary truncate w-full text-start">
                {img.file.name}
              </p>
              <button
                className="text-fg-error-primary-light bg-white p-[6px] text-xs flex items-center justify-center rounded border border-action-border-neutral-light_normal-light"
                onClick={() => removeImage(index)}
                disabled={disabled}
                aria-label="Remove image"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}