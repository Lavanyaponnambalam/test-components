import React, { useState } from 'react';

type DatePickerType = 'date-field' | 'time-field' | 'date-select' | 'time-select';
type DatePickerSize = 'sm' | 'md' | 'lg';

type DatePickerProps = {
  type?: DatePickerType;
  size?: DatePickerSize;
  isError?: boolean;
  isDisabled?: boolean;
  label?: string;
  description?: string;
  className?: string;
  rightIcon?: React.ReactNode;
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
  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [dateValue, setDateValue] = useState<string>('');
  const [timeValue, setTimeValue] = useState<string>('');

  const sizeClasses: Record<DatePickerSize, Record<DatePickerType, string>> = {
    sm: {
      'date-field': 'w-[400px] h-[32px] text-sm rounded-sm p-2',
      'time-field': 'w-[400px] h-[32px] text-sm rounded-sm p-2',
    'date-select': 'w-[128px] h-[32px] text-sm  rounded-sm p-2',
    'time-select': 'w-[120px] h-[32px] text-sm rounded-sm p-2', 
    },
    md: {
      'date-field': 'w-[400px] h-[40px] text-md rounded-sm p-2',
      'time-field': 'w-[400px] h-[40px] text-md rounded-sm p-2',
      'date-select': 'w-[128px] h-[40px] text-md rounded-sm p-2',
      'time-select': 'w-[128px] h-[40px] text-md rounded-sm p-2',
    },
    lg: {
      'date-field': 'w-[400px] h-[48px] text-lg rounded-sm p-2',
      'time-field': 'w-[400px] h-[48px] text-lg rounded-sm p-2',
      'date-select': 'w-[110px] h-[48px] text-lg rounded-sm p-2',
      'time-select': 'w-[103px] h-[48px] text-lg rounded-sm p-2',
    },
  };
  
  const stateClasses = {
    default: 'border border-action-border-neutral-light_normal bg-action-base-white text-fg-neutral-tertiary hover:border-action-border-neutral-light_hover focus:outline-action-border-brand-normal focus:text-fg-neutral-primary focus:shadow-[0px_2px_4px_0px_#0A0D120A]',
    error: 'border border-fg-action-error-normal bg-action-base-white focus-within:border-2 focus-within:border-fg-action-error-normal shadow-[0px_2px_4px_0px_#0A0D120A]',
    disabled: 'border border-action-border-neutral-light_disabled bg-action-neutral-light_disabled opacity-50 cursor-not-allowed',
    filled: 'border border-action-border-neutral-light_hover bg-action-base-white text-fg-neutral-primary focus:outline-action-border-brand-normal focus:shadow-[0px_2px_4px_0px_#0A0D120A]', 
  };
  
  

  const stateClass = isDisabled
    ? stateClasses.disabled
    : isError
    ? stateClasses.error
    : stateClasses.default;

  const generateOptions = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((num) => (
      <option key={num} value={num}>{num}</option>
    ));
  };

return (
  <div className="w-full relative">
    {label && <label className="block mb-1 text-sm font-medium text-fg-neutral-secondary ">{label}</label>}
    
    {type === 'date-field' && (
  <div className={`relative flex items-center ${sizeClasses[size][type]} ${dateValue ? stateClasses.filled : stateClass} focus-within:border-action-brand-normal`}>
    <input
      type="date"
      value={dateValue}
      onChange={(e) => setDateValue(e.target.value)}
      className="bg-transparent outline-none flex-1 p-2 appearance-none "
      onFocus={(e) => {
        e.target.parentElement!.style.marginBottom = "8px"; 
        e.target.showPicker && e.target.showPicker();
      }}
      onBlur={(e) => (e.target.parentElement!.style.marginBottom = "0px")}
      disabled={isDisabled}
      {...props}
    />
  </div>
)}

{type === 'time-field' && (
  <div className={`relative flex items-center ${sizeClasses[size][type]} ${timeValue ? stateClasses.filled : stateClass} focus-within:border-action-brand-normal`}>
    <input
      type="time"
      value={timeValue}
      onChange={(e) => setTimeValue(e.target.value)}
      className="bg-transparent outline-none flex-1 p-2 appearance-none "
      onFocus={(e) => {
        e.target.parentElement!.style.marginBottom = "8px"; 
        e.target.showPicker && e.target.showPicker();
      }}
      onBlur={(e) => (e.target.parentElement!.style.marginBottom = "0px")}
      disabled={isDisabled}
      {...props}
    />
  </div>
)}



{type === 'date-select' && (
  <div className="flex gap-2">
    <select
      value={day}
      onChange={(e) => setDay(e.target.value)}
      className={`${sizeClasses[size]['date-select']} ${
        day ? stateClasses.filled : stateClass
      } focus:border-action-brand-normal focus:outline`}
      disabled={isDisabled}
    >
      <option value="">Day</option>
      {generateOptions(1, 31)}
    </select>
    
    <select
      value={month}
      onChange={(e) => setMonth(e.target.value)}
      className={`${sizeClasses[size]['date-select']} ${
        month ? stateClasses.filled : stateClass
      } focus:border-action-brand-normal focus:outline`}
      disabled={isDisabled}
    >
      <option value="">Month</option>
      {generateOptions(1, 12)}
    </select>
    
    <select
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className={`${sizeClasses[size]['date-select']} ${
        year ? stateClasses.filled : stateClass
      } focus:border-action-brand-normal focus:outline`}
      disabled={isDisabled}
    >
      <option value="">Year</option>
      {generateOptions(1900, new Date().getFullYear())}
    </select>
  </div>
)}

{type === 'time-select' && (
  <div className="flex gap-2">
    <select
      value={hour}
      onChange={(e) => setHour(e.target.value)}
      className={`${sizeClasses[size]['time-select']} ${
        hour ? stateClasses.filled : stateClass
      } focus:border-action-brand-normal focus:outline`}
      disabled={isDisabled}
    >
      <option value="">HH</option>
      {generateOptions(0, 23)}
    </select>
    
    <select
      value={minute}
      onChange={(e) => setMinute(e.target.value)}
      className={`${sizeClasses[size]['time-select']} ${
        minute ? stateClasses.filled : stateClass
      } focus:border-action-brand-normal focus:outline`}
      disabled={isDisabled}
    >
      <option value="">MM</option>
      {generateOptions(0, 59)}
    </select>
  </div>



      )}
      {rightIcon && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2">{rightIcon}</span>
      )}
    </div>
  );
};

export default DatePicker;