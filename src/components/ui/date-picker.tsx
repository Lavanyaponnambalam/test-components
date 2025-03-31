import React, { useState } from 'react';

type DatePickerType = 'date-field' | 'time-field' | 'date-select' | 'time-select';
type DatePickerSize = 'sm' | 'md' | 'lg';

type DatePickerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: DatePickerType;
  size?: DatePickerSize;
  isError?: boolean;
  isDisabled?: boolean;
  label?: string;
  description?: string;
  rightIcon?: React.ReactNode;
};

const sizeClasses: Record<DatePickerSize, string> = {
  sm: 'w-[400px] h-[32px] text-sm rounded-sm',
  md: 'w-[400px] h-[40px] text-md rounded-sm',
  lg: 'w-[400px] h-[48px] text-lg rounded-sm',
};

const typographyClasses: Record<DatePickerSize, string> = {
  sm: 'font-inter font-regular text-sm leading-base',
  md: 'font-inter font-regular text-md leading-md ',
  lg: 'font-inter font-regular text-md leading-md ',
};

const stateClasses = {
  default: 'border border-gray-300 bg-white hover:border-gray-400 focus:ring-2 focus:ring-blue-500',
  error: 'border border-red-500 bg-white',
  disabled: 'border border-gray-200 bg-gray-100 cursor-not-allowed',
};

const formatDate = (dateString: string, inputType: string) => {
  if (!dateString) return inputType === 'date' ? 'Choose Date' : 'Choose Time';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

const DatePicker: React.FC<DatePickerProps> = ({
  type = 'date-field',
  size = 'md',
  isError = false,
  isDisabled = false,
  label,
  description,
  className,
  rightIcon,
  ...props
}) => {
  const [value, setValue] = useState<string>('');

  const stateClass = isDisabled
    ? stateClasses.disabled
    : isError
    ? stateClasses.error
    : stateClasses.default;

  const inputType = type.includes('date') ? 'date' : 'time';
  const formattedValue = formatDate(value, inputType);

  return (
    <div className="w-full relative">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      {description && <p className="mb-1 text-sm text-gray-500">{description}</p>}
      <input
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full pl-8 ${sizeClasses[size as keyof typeof sizeClasses]} ${typographyClasses[size as keyof typeof typographyClasses]} ${stateClass} ${className}`}
        disabled={isDisabled}
        placeholder={formattedValue}
        {...props}
      />
      {rightIcon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2">{rightIcon}</span>
      )}
    </div>
  );
};

export default DatePicker;
