import React from 'react';

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isError?: boolean;
  isDisabled?: boolean;
  label?: string;
  description?: string;
  applyBorder?: boolean; 
};

const Radio: React.FC<RadioProps> = ({
  isError = false,
  label,
  description,
  isDisabled = false,
  id,
  applyBorder = false, 
  ...props
}) => {
  const baseStyles = 'inline-flex items-center cursor-pointer';

  const stateClasses = (() => {
    if (isDisabled) {
      return 'bg-action-neutral-light_disabled border-action-border-neutral-light_disabled opacity-50 cursor-not-allowed';
    }
    if (isError) {
      return 'border-action-border-error-normal bg-action-base-white';
    }
    return `border border-action-border-neutral-light_normal bg-action-neutral-light_normal
            hover:border-action-border-neutral-light_hover hover:bg-action-neutral-light_hover
            checked:bg-green-500 checked:border-green-500`;
  })();

  const containerClasses = description
    ? 'w-[230px] h-[56px] pt-[6px] pb-[6px] gap-[8px] mt-[78px]'
    : 'w-[129px] h-[36px] pt-[6px] pb-[6px] gap-[8px] mt-[20px]';

  const wrapperClasses = applyBorder
    ? 'border-[1px] border-action-border-neutral-light_normal rounded-sm p-[12px] w-[258px] h-[68px] gap-[12px]'
 
    : '';

  return (
    <div className={`${containerClasses} ${wrapperClasses}`}>
      {label && <label htmlFor={id} className="block text-base leading-5 font-regular text-fg-neutral-primary">{label}</label>}

      <div className="flex items-center gap-[8px]">
        <div className="relative w-[20px] h-[20px] rounded-full border-[1.25px]">

          <input
            type="radio"
            id={id}
            className={`${baseStyles} ${stateClasses} w-[20px] h-[20px] rounded-full `}
            style={{accentColor: "#4D8C52"}}
            disabled={isDisabled}
            {...props}
          />
        </div>
        <label htmlFor={id} className="text-base leading-5 font-regular text-fg-neutral-primary cursor-pointer">{props.value}</label>
      </div>

      {description && (
        <p className="text-base mt-[4px] leading-5 font-regular text-fg-neutral-secondary pl-[28px]">
          {description}
        </p>
      )}

      {isError && <p className="text-base leading-5 font-regular text-fg-error-secondary">Validation text of warning</p>}
    </div>
  );
};

export default Radio;
