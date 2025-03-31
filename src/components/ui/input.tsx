import React, { useState } from "react";

type InputType =
  | "basic"
  | "addon-left"
  | "addon-right"
  | "select-left"
  | "select-right"
  | "plus-minus";
type InputSize = "small" | "medium" | "large";

type InputOption = {
  label: string;
  description?: string;
  value: string | number;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputType?: InputType;
  size?: InputSize;
  isError?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  label?: string;
  description?: string;
  options?: InputOption[];
};

const sizeClasses: Record<InputSize, string> = {
  small: "h-9 text-sm w-96 h-xl rounded-xs ",
  medium: "h-10 text-md w-96 h-2xl rounded-sm",
  large: "h-12 text-lg w-96 h-3xl rounded-sm",
};

const iconSizeClasses: Record<InputSize, string> = {
  small: "w-5 h-5 ",
  medium: "w-6 h-6",
  large: "w-6 h-6",
};

const paddingClasses: Record<InputSize, string> = {
  small: "pl-10 pr-3",
  medium: "pl-12 pr-4",
  large: "pl-14 pr-5",
};

const addonSizeClasses: Record<InputSize, string> = {
  small: "h-9 w-fit gap-1 px-2 text-sm flex-shrink-0",
  medium: "h-10 w-fit gap-1 px-4 text-md flex-shrink-0",
  large: "h-12 w-fit gap-1 px-4 text-lg flex-shrink-0",
};

const stateClasses = {
  default:
    "border action-border-neutral-light_normal bg-action-base-white hover:border-action-border-neutral-light_hover focus:outline-none focus:ring-2 focus:ring-action-border-brand-normal",
  error: "border action-border-error-normal bg-action-base-white",
  disabled:
    "bg-action-neutral-light_disabled border action-border-neutral-light_disabled opacity-50 cursor-not-allowed",
  filled:
    "border border-action-border-neutral-light_normal text-fg-neutral-primary",
};

const Input: React.FC<InputProps> = ({
  inputType = "basic",
  size = "medium",
  isError = false,
  isDisabled = false,
  leftIcon,
  rightIcon,
  leftAddon,
  rightAddon,
  label,
  description,
  className,
  value,
  options = [],
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState<number>(Number(value) || 0);

  const handleIncrement = () => {
    if (!isDisabled) setCurrentValue((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (!isDisabled) setCurrentValue((prev) => prev - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      setCurrentValue(newValue);
    }
  };

  const stateClass = isDisabled
    ? stateClasses.disabled
    : isError
    ? stateClasses.error
    : value
    ? stateClasses.filled
    : stateClasses.default;

    const plusMinusInputSizeClasses: Record<InputSize, string> = {
      small: "w-44  h-12 text-sm",
      medium: "w-14 h-10 text-md",
      large: "w-16 h-12 text-lg",
    }
  
  

  return (
    <div className="full">
      {label && (
        <label className="block mb-1 text-sm font-medium text-fg-neutral-secondary">
          {label}
        </label>
      )}
      {description && (
        <p className="block mb-1 text-sm font-medium text-fg-neutral-tertiary">
          {description}
        </p>
      )}

      {/* Container with unified border */}
      <div
        className={`relative flex items-center ${stateClass} ${
          sizeClasses[size as keyof typeof sizeClasses]
        } rounded-sm overflow-hidden ${className} focus-within:ring-2  focus-within:ring-action-border-brand-normal focus-within:border-action-border-brand-normal`}
      >
        {/* Plus-Minus Controls with Input */}
        
        {inputType === "plus-minus" && (
          <>
            <button
              type="button"
              onClick={handleDecrement}
              disabled={isDisabled}
              className="px-3 py-2 bg-neutral-subtle text-fg-neutral-primary"
            >
              -
            </button>
            <input
              className={`text-center bg-transparent outline-none ${plusMinusInputSizeClasses[size as keyof typeof plusMinusInputSizeClasses]}`}
              disabled={isDisabled}
              value={currentValue}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={handleIncrement}
              disabled={isDisabled}
              className="px-3 py-2 bg-neutral-subtle text-fg-neutral-primary"
            >
              +
            </button>
          </>
        )}
        {/* Left Addon with Icon or Dropdown */}
        {inputType === "addon-left" && (
          <span
            className={`bg-neutral-subtle text-fg-neutral-primary flex items-center ${
              addonSizeClasses[size as keyof typeof addonSizeClasses]
            }`}
          >
            {leftIcon && (
              <span
                className={`mr-1 -ml-1 text-fg-neutral-secondary ${
                  iconSizeClasses[size as keyof typeof iconSizeClasses]
                }`}
              >
                {leftIcon}
              </span>
            )}
            {leftAddon}
          </span>
        )}

        {inputType === "select-left" && (
          <span
            className={`bg-neutral-subtle text-fg-neutral-primary flex items-center ${
              addonSizeClasses[size as keyof typeof addonSizeClasses]
            }`}
          >
            <select className="border-none bg-transparent text-fg-neutral-primary focus:outline-none appearance-none w-full">
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </span>
        )}

        {inputType === "select-right" && (
          <span
            className={`absolute right-0 bg-neutral-subtle text-fg-neutral-primary flex items-center ${
              addonSizeClasses[size as keyof typeof addonSizeClasses]
            }`}
          >
            <select className="border-none bg-transparent text-fg-neutral-primary focus:outline-none appearance-none w-full">
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </span>
        )}

        {/* Left Icon */}
        {inputType === "basic" && leftIcon && (
          <span
            className={`absolute left-2 top-1/2 -translate-y-1/2 text-fg-neutral-secondary ${
              iconSizeClasses[size as keyof typeof iconSizeClasses]
            }`}
          >
            {leftIcon}
          </span>
        )}

{/* Input Field */}
{inputType !== "plus-minus" && (
  <input
    className={`flex-1 min-w-0 ${
      (inputType === "addon-left" || inputType === "select-left") &&
      leftIcon
        ? "pl-2"
        : inputType === "addon-left" || inputType === "select-left"
        ? "pl-2"
        : leftIcon
        ? paddingClasses[size as keyof typeof paddingClasses]
        : "pl-3"
    } bg-transparent outline-none`}
    disabled={isDisabled}
    value={value}
    {...props}
  />
)}

        {/* Right Icon */}
        {inputType === "basic" && rightIcon && (
          <span
            className={`absolute right-3 top-1/2 -translate-y-1/2 bg-action-brand-light_normal text-action-fg-brand-normal rounded-xs flex items-center justify-center ${
              iconSizeClasses[size as keyof typeof iconSizeClasses]
            }`}
          >
            {rightIcon}
          </span>
        )}

        {/* Right Addon */}
        {(inputType === "addon-right" || inputType === "select-right") && (
          <span
            className={` bg-neutral-subtle text-fg-neutral-primary flex items-center ${
              addonSizeClasses[size as keyof typeof addonSizeClasses]
            }`}
          >
            {rightAddon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
