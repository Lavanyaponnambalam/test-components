import React from "react";

type DropdownProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  size?: "sm" | "md" | "lg";
  isError?: boolean;
  isDisabled?: boolean;
  isFilled?: boolean;
  label?: string;
  description?: string;
  options: { value: string; label: string }[];
  rightIcon?: React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({
  size = "md",
  isError = false,
  isDisabled = false,
  isFilled = false,
  label,
  description,
  options,
  rightIcon, 
  ...props
}) => {
  const baseStyles =
    "w-full font-sm font-regular rounded-sm transition duration-200 ease-in-out border block appearance-none pb-1";

  const sizeClasses = {
    sm: "max-w-[400px] h-[32px] text-sm px-3 rounded-xs pr-8", 
    md: "max-w-[400px] h-[40px] text-md px-3 rounded-sm pr-8",
    lg: "max-w-[400px] h-[48px] text-lg px-4 rounded-sm pr-8",
  };

  const stateClasses = (() => {
    if (isDisabled) {
      return "bg-action-base-white border-action-error-normal opacity-50 cursor-not-allowed";
    }
    if (isError) {
      return "border-red-500 bg-white";
    }
    if (isFilled) {
      return "border-action-border-neutral-light_normal bg-action-base-white";
    }
    return "border-action-neutral-light_normal bg-action-base-white hover:border-action-border-neutral-light_hover bg-action-base-white  active:border-action-brand-normal focus:ring-2 focus:ring-border-action-brand-normal focus-within:border-action-border-brand-normal action-bg-base-white";
  })();

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm font-medium text-fg-neutral-secondary">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <select
          className={`${baseStyles} ${stateClasses} ${sizeClasses[size as keyof typeof sizeClasses]}`}
          disabled={isDisabled}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {rightIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-fg-neutral-secondary pointer-events-none">
            {rightIcon}
          </span>
        )}
      </div>
      {description && (
        <p className="mt-1 text-sm text-fg-neutral-secondary">{description}</p>
      )}
      {isError && (
        <p className="mt-1 text-sm text-fg-error-secondary">
          Error: Invalid selection
        </p>
      )}
    </div>
  );
};

export default Dropdown;
