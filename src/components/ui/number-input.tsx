import { Minus, Plus } from '@phosphor-icons/react';
import React from 'react';

type NumberInputProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  isDisabled?: boolean;
  isError?: boolean;
  className?: string;
};

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  isDisabled = false,
  isError = false,
  className,
}) => {
  const handleDecrement = () => {
    if (!isDisabled && value > min) {
      onChange(value - step);
    }
  };

  const handleIncrement = () => {
    if (!isDisabled && value < max) {
      onChange(value + step);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  const baseInputClass =
    'border w-full text-center text-sm rounded px-8 py-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  const stateClass = isDisabled
    ? 'bg-action-neutral-light_disabled border-action-border-neutral-light_disabled'
    : isError
    ? 'bg-action-base-white border-fg-action-error-normal'
    : 'bg-action-base-white border-action-border-neutral-light_normal';

  return (
    <div className={`relative w-[120px] ${className ?? ''}`}>
      {/* Decrement Button */}
      <button
        type="button"
        onClick={handleDecrement}
        disabled={isDisabled || value <= min}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-fg-neutral-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Minus size={14} />
      </button>

      {/* Input */}
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        disabled={isDisabled}
        className={`${baseInputClass} ${stateClass}`}
      />

      {/* Increment Button */}
      <button
        type="button"
        onClick={handleIncrement}
        disabled={isDisabled || value >= max}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-fg-neutral-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};

export default NumberInput;
