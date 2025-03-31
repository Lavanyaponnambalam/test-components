import React, { useState, useEffect, useRef } from 'react';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  isDisabled?: boolean;
  label?: string;
  description?: string;
  applyBorder?: boolean;
  isIndeterminate?: boolean;
  value?: string; 
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
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current && isIndeterminate) {
      checkboxRef.current.indeterminate = true;
    }
  }, [isIndeterminate]);

  const baseStyles = 'transition-colors cursor-pointer flex items-center';

  const stateClasses = (() => {
    if (isDisabled) {
        return 'bg-action-neutral-light_disabled border-action-border-neutral-light_disabled opacity-50 cursor-not-allowed';
    }
    if (isError) {
        return 'border-action-border-error-normal bg-action-base-white';
    }
    if (checked || isIndeterminate) {
      return 'bg-action-brand-normal text-action-fg-base-white';
    }
    return 'bg-white border-gray-400 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400';
  })();

  const containerClasses = description
    ? 'w-[230px] h-[56px] py-2 gap-2 mt-2'
    : 'w-[129px] h-[36px] py-2 gap-2 mt-2';

  const wrapperClasses = applyBorder
    ? 'border border-gray-300 rounded-md p-3 w-[258px] h-[68px] gap-3'
    : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div className={`${containerClasses} ${wrapperClasses}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-800"
        >
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
            checked={checked}
            onChange={handleChange}
            {...props}
          />
          {!isDisabled && (
            <span className={`absolute text-[12px] text-white`}>
              {checked ? '✓' : isIndeterminate ? '-' : ''}
            </span>
          )}
        </div>

        {value && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-800 cursor-pointer"
          >
            {value} 
          </label>
        )}
      </div>

      {description && (
        <p className="text-sm text-gray-600 mt-1 pl-[28px]">{description}</p>
      )}

      {isError && (
        <p className="text-sm text-red-500 mt-1">Validation text of warning</p>
      )}
    </div>
  );
};

export default Checkbox;
