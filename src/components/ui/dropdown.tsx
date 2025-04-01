import React from "react";

type DropdownProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  size?: "sm" | "md" | "lg";
  isError?: boolean;
  isDisabled?: boolean;
  isFilled?: boolean;
  label?: string;
  description?: string;
  options: { value: string; label: string }[];
};

const Dropdown: React.FC<DropdownProps> = ({
  size = "md",
  isError = false,
  isDisabled = false,
  isFilled = false,
  label,
  description,
  options,
  ...props
}) => {
  const baseStyles =
    "w-full font-sm font-regular rounded-sm transition duration-200 ease-in-out border block";

  const sizeClasses = {
    sm: "min-w-[400px] max-w-[400px] h-[32px] text-sm px-3 rounded-xs",
    md: "min-w-[400px] max-w-[400px] h-[40px] text-md px-3 rounded-sm",
    lg: "min-w-[400px] max-w-[400px] h-[48px] text-lg px-4 rounded-sm",
  };

  const stateClasses = (() => {
    if (isDisabled) {
      return 'bg-gray-200 border-gray-400 opacity-50 cursor-not-allowed'; 
    }
    if (isError) {
      return 'border-red-500 bg-white'; 
    }
    if (isFilled) {
      return "border-action-border-neutral-light_normal bg-action-base-white "; 
    }
    return 'border-blue-500 bg-white hover:border-action-border-neutral-light_hover bg-action-base-white hover:bg-blue-50 active:border-blue-800 focus:ring-2 focus:ring-blue-500 focus-within:border-action-border-brand-normal action-bg-base-white'; // Default state with blue border and hover effect
  })();

  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <select
        className={`${baseStyles} ${stateClasses} ${sizeClasses[size as keyof typeof sizeClasses]} hover:border-action-border-neutral-light_hover bg-action-base-white`} // Added hover directly here
        disabled={isDisabled}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {description && <p className="mt-1 text-sm text-gray-600">{description}</p>}
      {isError && <p className="mt-1 text-sm text-red-500">Error: Invalid selection</p>}
    </div>
  );
};

export default Dropdown;
