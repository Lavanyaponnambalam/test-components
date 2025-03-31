import React, { useState } from 'react';

type SearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: 'sm' | 'md' | 'lg';
  onSearch?: (value: string) => void;
  leftIcon?: React.ReactNode;
  isDisabled?: boolean;
  isFilled?: boolean;
  label?: string;
  description?: string;
};

const Search: React.FC<SearchProps> = ({
  size = 'md',
  onSearch,
  leftIcon,
  isDisabled = false,
  isFilled = false,
  label,
  description,
  ...props
}) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };



  const baseStyles =
    'w-full font-sm font-regular rounded-sm transition duration-200 ease-in-out block resize-none';

  const sizeClasses = {
    sm: 'w-[400px] h-[32px] text-sm px-3',
    md: 'w-[400px] h-[40px] text-base px-4',
    lg: 'w-[400px] h-[48px] text-lg px-5',
  };

  const iconSizeClasses: Record<string, string> = {
    sm: 'w-[18px] h-[18px]',
    md: 'w-6 h-6',
    lg: 'w-6 h-6',
  };

  const stateClasses = (() => {
    if (isDisabled) {
      return 'bg-action-neutral-light_disabled border action-border-neutral-light_disabled opacity-50 cursor-not-allowed';
    }
    if (isFilled) {
      return 'border-action-border-neutral-light_normal text-fg-neutral-primary shadow-[0px_0px_2px_0px_#0A0D1217]';
    }
    return 'border action-border-neutral-light_normal bg-action-base-white hover:border-action-border-neutral-light_hover focus:ring-2 focus:ring-action-border-brand-normal focus-within:border-action-border-brand-normal shadow-[0px_2px_4px_0px_#0A0D120A] focus-within:hover:border-action-border-brand-normal';
  })();


  
  return (
    <div className="w-full">
      {label && <label className="block mb-2  text-sm font-medium text-fg-neutral-secondary">{label}</label>}
      <div className={`relative flex items-center ${baseStyles} ${sizeClasses[size as keyof typeof sizeClasses]} ${stateClasses}`}>
        {leftIcon && <span className={`absolute left-3 text-fg-neutral-secondary ${iconSizeClasses[size]}`}>{leftIcon}</span>}
        <input
          type="text"
          className={`pl-8 pr-4 w-full bg-transparent outline-none ${isDisabled ? 'cursor-not-allowed' : ''}`}
          value={value}
          onChange={handleInputChange}
          disabled={isDisabled}
          {...props}
        />
      </div>

      {description && <p className="mt-1 text-sm text-fg-muted">{description}</p>}
    </div>
  );
};

export default Search;
