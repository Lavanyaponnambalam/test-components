import { Check, Minus } from '@phosphor-icons/react';
import React, { useState, useEffect, useRef } from 'react';

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> & {
  isError?: boolean;
  isDisabled?: boolean;
  label?: string;
  description?: string;
  applyBorder?: boolean;
  isIndeterminate?: boolean;
  value?: string | number;
  checked?: boolean; // controlled
  defaultChecked?: boolean; // uncontrolled
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  isError = false,
  isDisabled = false,
  isIndeterminate = false,
  label,
  description,
  id,
  applyBorder = false,
  value,
  checked,
  defaultChecked,
  onChange,
  ...props
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [internalChecked, setInternalChecked] = useState(defaultChecked || false);

  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalChecked(e.target.checked);
    }
    onChange?.(e);
  };

  const baseStyles = 'transition-colors cursor-pointer flex items-center';

  const stateClasses = (() => {
    if (isDisabled) {
      return 'bg-action-neutral-light_disabled border-action-border-neutral-light_disabled opacity-50 cursor-not-allowed';
    }
    if (isError) {
      return 'border-action-border-error-normal bg-action-base-white';
    }
    if (currentChecked || isIndeterminate) {
      return 'bg-action-brand-normal text-action-fg-base-white';
    }
    return 'bg-white border-gray-400 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400';
  })();

  const containerClasses = description
    ? 'w-[230px] h-[56px] py-2 gap-2 mt-2'
    : 'w-[129px] h-[36px] py-2 gap-2 mt-2';

  const wrapperClasses = applyBorder
    ? 'border border-gray-300 rounded-sm p-3 w-[258px] h-[68px] gap-3'
    : '';

  return (
    <div className={`${containerClasses} ${wrapperClasses}`}>
      {label && (
        <label htmlFor={id} className="block text-md font-medium text-fg-neutral-primary">
          {label}
        </label>
      )}

      <div className="flex items-center gap-2">
        <div
          className={`relative w-[20px] h-[20px] rounded-[3.33px] border-2 flex items-center justify-center ${stateClasses}`}
        >
          <input
            type="checkbox"
            id={id}
            ref={checkboxRef}
            className={`${baseStyles} w-[20px] h-[20px] appearance-none`}
            disabled={isDisabled}
            checked={currentChecked}
            onChange={handleChange}
            value={value}
            {...props}
          />

          {!isDisabled && (
            <span className="absolute pointer-events-none text-[12px] text-action-fg-base-white">
              {isIndeterminate ? (
                <Minus weight="bold" size={12} />
              ) : currentChecked ? (
                <Check weight="bold" size={12} />
              ) : null}
            </span>
          )}
        </div>

        {value && (
          <label htmlFor={id} className="text-md font-medium text-fg-neutral-primary cursor-pointer">
            {value}
          </label>
        )}
      </div>

      {description && (
        <p className="text-md text-fg-neutral-secondary mt-1 pl-[28px]">{description}</p>
      )}

      {isError && (
        <p className="text-md text-fg-error-secondary mt-1">Validation text of warning</p>
      )}
    </div>
  );
};

export default Checkbox;
