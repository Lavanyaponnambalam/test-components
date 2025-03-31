import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: 'md' | 'lg';
  isError?: boolean;
  isDisabled?: boolean;
  isFilled?: boolean;
  label?: string;
  description?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  size = 'md',
  isError = false,
  isDisabled = false,
  isFilled = false,
  label,
  description,
  ...props
}) => {
  const baseStyles =
    'w-full font-sm font-regular rounded-sm transition duration-200 ease-in-out border block resize-none';

  const sizeClasses = {
    md: 'w-[400px] h-[90px] text-md p-5',
    lg: 'w-[400px] h-[140px] text-lg p-4',

  };

  const stateClasses = (() => {
    if (isDisabled) {
      return 'bg-action-neutral-light_disabled border action-border-neutral-light_disabled opacity-50 cursor-not-allowed';
    }
    if (isError) {
      return 'border action-border-error-normal bg-action-base-white shadow-[0px_0px_2px_0px_#0A0D1217]';
    }
    if (isFilled) {
      return 'border action-border-neutral-light_normal text-fg-neutral-primary shadow-[0px_0px_2px_0px_#0A0D1217]';
    }
    return 'border action-border-neutral-light_normal bg-action-base-white hover:border-action-border-neutral-light_hover focus:outline-action-border-brand-normal focus:shadow-[0px_2px_4px_0px_#0A0D120A]';
  })();

  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm font-medium text-fg-neutral-secondary ">{label}</label>}
      <textarea
        className={`${baseStyles} ${stateClasses} ${sizeClasses[size]}`}
        disabled={isDisabled}
        {...props}
      />
      {description && <p className="mt-1 text-sm text-fg-muted">{description}</p>}
      {isError && <p className="mt-1 text-sm text-fg-error">Error: Invalid input</p>}
    </div>
  );
};

export default Textarea;
