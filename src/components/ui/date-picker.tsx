import React, { useEffect, useRef, useState } from 'react';
import * as PhosphorIcons from "@phosphor-icons/react";


type DatePickerType =
  | 'date-field'
  | 'time-field'
  | 'date-select'
  | 'time-select'
  | 'datetime-picker';

type DatePickerProps = {
  type?: DatePickerType;
  iconPosition?: "left" | "right";
  icon?: keyof typeof PhosphorIcons;
  isError?: boolean;
  isDisabled?: boolean;
  label?: string;
  description?: string;
  className?: string;
  rightIcon?: React.ReactNode;
  value?: string;
  onChange?: (value: string) => void;
};


const DatePicker: React.FC<DatePickerProps> = ({
  type = 'date-field',
  icon,
  iconPosition,
  isError = false,
  isDisabled = false,
  label,
  description,
  className,
  rightIcon,
  value,
  onChange,
  ...props
}) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [datetimeValue, setDatetimeValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const baseInputClass =
    'rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-action-border-brand-normal disabled:opacity-50 disabled:cursor-not-allowed';

  const stateClass = isDisabled
    ? 'bg-action-neutral-light_disabled border-action-border-neutral-light_disabled'
    : isError
    ? 'bg-action-base-white border-fg-action-error-normal'
    : 'bg-action-base-white border-action-border-neutral-light_normal';

  const filledClass = 'text-fg-neutral-primary';

  const generateOptions = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i).map((num) => (
      <option key={num} value={num.toString().padStart(2, '0')}>
        {num.toString().padStart(2, '0')}
      </option>
    ));
  };

  // Sync external value to internal state
  useEffect(() => {
    if (!value) return;

    if (type.includes('date') && type !== 'datetime-picker') {
      const [yyyy, mm, dd] = value.split('-');
      if (yyyy && mm && dd) {
        setYear(yyyy);
        setMonth(mm);
        setDay(dd);
        setDateValue(`${yyyy}-${mm}-${dd}`);
      }
    }

    if (type.includes('time') && type !== 'datetime-picker') {
      const [hh, min] = value.split(':');
      if (hh && min) {
        setHour(hh);
        setMinute(min);
        setTimeValue(`${hh}:${min}`);
      }
    }

    if (type === 'datetime-picker') {
      setDatetimeValue(value);
    }
  }, [value, type]);

  useEffect(() => {
    if (type === 'date-select' && day && month && year) {
      const selected = `${year}-${month}-${day}`;
      onChange?.(selected);
    }
  }, [day, month, year]);

  useEffect(() => {
    if (type === 'time-select' && hour && minute) {
      const selected = `${hour}:${minute}`;
      onChange?.(selected);
    }
  }, [hour, minute]);

    const IconComponent = icon
      ? (PhosphorIcons[icon as keyof typeof PhosphorIcons] as React.ElementType)
      : null;

  return (
    <div className={`w-full relative ${className ?? ''}`}>
      {label && <label className="block mb-1 text-sm font-medium text-fg-neutral-secondary">{label}</label>}

      {/* DATE FIELD */}
      {type === 'date-field' && (
        <div className={`relative flex items-center ${baseInputClass} ${dateValue ? filledClass : ''} ${stateClass}`}>
          <input
            type="date"
            value={dateValue}
            onChange={(e) => {
              setDateValue(e.target.value);
              onChange?.(e.target.value);
            }}
            className="bg-transparent outline-none flex-1 appearance-none w-full"
            onFocus={(e) => {
              e.target.showPicker && e.target.showPicker();
            }}
            disabled={isDisabled}
            {...props}
          />
        </div>
      )}

      {/* TIME FIELD */}
      {type === 'time-field' && (
        <div className={`relative flex items-center ${baseInputClass} ${timeValue ? filledClass : ''} ${stateClass}`}>
          <input
            type="time"
            value={timeValue}
            onChange={(e) => {
              setTimeValue(e.target.value);
              onChange?.(e.target.value);
            }}
            className="bg-transparent outline-none flex-1 appearance-none w-full"
            onFocus={(e) => {
              e.target.showPicker && e.target.showPicker();
            }}
            disabled={isDisabled}
            {...props}
          />
        </div>
      )}

      {/* DATETIME PICKER */}
      {type === 'datetime-picker' && (
        <div className={`relative flex items-center ${baseInputClass} ${datetimeValue ? filledClass : ''} ${stateClass}`}>
          <input
            ref={inputRef}
            type="datetime-local"
            value={datetimeValue}
            onChange={(e) => {
              setDatetimeValue(e.target.value);
              onChange?.(e.target.value);
            }}
            className="bg-transparent outline-none flex-1 appearance-none w-full"
            onFocus={(e) => {
              e.target.showPicker && e.target.showPicker();
            }}
            disabled={isDisabled}
            {...props}
          />
        </div>
      )}

      {/* DATE SELECT */}
      {type === 'date-select' && (
        <div className="flex gap-2">
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={`${baseInputClass} ${day ? filledClass : ''} ${stateClass}`}
            disabled={isDisabled}
          >
            <option value="">Day</option>
            {generateOptions(1, 31)}
          </select>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className={`${baseInputClass} ${month ? filledClass : ''} ${stateClass}`}
            disabled={isDisabled}
          >
            <option value="">Month</option>
            {generateOptions(1, 12)}
          </select>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`${baseInputClass} ${year ? filledClass : ''} ${stateClass}`}
            disabled={isDisabled}
          >
            <option value="">Year</option>
            {generateOptions(1900, new Date().getFullYear())}
          </select>
        </div>
      )}

      {/* TIME SELECT */}
      {type === 'time-select' && (
        <div className="flex gap-2">
          <select
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className={`${baseInputClass} ${hour ? filledClass : ''} ${stateClass}`}
            disabled={isDisabled}
          >
            <option value="">HH</option>
            {generateOptions(0, 23)}
          </select>
          <select
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            className={`${baseInputClass} ${minute ? filledClass : ''} ${stateClass}`}
            disabled={isDisabled}
          >
            <option value="">MM</option>
            {generateOptions(0, 59)}
          </select>
        </div>
      )}

      {/* Right Icon */}
      {/* {rightIcon && (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
          {rightIcon}
        </span>
      )} */}
            {/* {children} */}
      {IconComponent && iconPosition === "right" && (
        <IconComponent size={20} className="ml-[10px]" />
      )}

      {/* Optional Description */}
      {description && <p className="text-xs text-fg-neutral-secondary mt-1">{description}</p>}
    </div>
  );
};

export default DatePicker;
