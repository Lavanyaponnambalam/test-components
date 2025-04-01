import React from 'react';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'primary_soft' | 'secondary' | 'neutral' |'tertiary' | 'danger' | 'danger_soft';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  isLoading?: boolean;
  isDisabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconOnly?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary', 
  size = 'medium', 
  isLoading = false,
  isDisabled = false,
  children,
  iconLeft,
  iconRight,
  iconOnly,
  ...props
}) => {
  const baseStyles = 'font-medium py-2 px-4 rounded-sm transition duration-200 ease-in-out inline-flex items-center justify-center gap-2';
  const variantClasses = {
    primary: {
      background: 'bg-action-brand-normal text-action-fg-base-white',
      hover: 'hover:bg-action-brand-hover hover:text-action-fg-base-white',
      focused: 'focus:outline-2 text-action-fg-base-white active:shadow-[inset_0px_2px_12px_1px_#0000001A]',
      disabled: 'disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed disabled:hover:action-bg-neutral-disabled',
    },
    primary_soft: {
      background: 'bg-action-brand-light_normal text-action-fg-brand-normal',
      hover: 'hover:bg-action-brand-light_hover hover:text-action-fg-brand-normal',
      focused: 'focus:outline-2 text-action-fg-brand-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A]',
      disabled: 'disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed disabled:hover:action-bg-neutral-disabled',
    },
    secondary: {
      background: 'text-action-fg-neutral-normal border border-action-border-neutral-light_normal',
      hover: 'hover:bg-action-neutral-light_hover hover:text-action-fg-neutral-normal hover:action-border-neutral-light_normal',
      focused: 'focus:outline-2  text-action-fg-neutral-normal action-border-neutral-light_normal active:shadow-[inset_0px_2px_12px_1px_#0000001A]',
      disabled: 'disabled:text-action-fg-neutral-disabled disabled:action-border-neutral-light_normal disabled:cursor-not-allowed disabled:hover:action-bg-neutal-light_normal',
    },
    neutral: {
      background: 'bg-action-neutral-light_normal text-action-fg-neutral-normal',
      hover: 'hover:bg-action-neutral-light_hover hover:text-action-fg-neutral-normal',
      focused: 'focus:outline-2 text-action-fg-neutral-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A]',
      disabled: 'disabled:bg-action-neutral-disabled border-action-border-neutral-light_normaled disabled:text-action-fg-base-white disabled:cursor-not-allowed disabled:hover:action-bg-neutral-disabled',
    },
    tertiary: {
      background: 'text-action-fg-neutral-normal',
      hover: 'hover:bg-action-neutral-light_hover hover:text-action-fg-neutral-normal',
      focused: 'focus:outline-2 text-action-fg-neutral-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A]',
      disabled: 'disabled:text-action-fg-neutral-disabled disabled:cursor-not-allowed ',
    },
    danger: {
      background: 'bg-action-error-normal text-action-fg-base-white',
      hover: 'hover:bg-action-error-hover hover:text-action-fg-base-white',
      focused: 'focus:outline-2 active:shadow-[inset_0px_2px_12px_1px_#0000001A]',
      disabled: 'disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed disabled:hover:bg-action-neutral-disabled',
    },
    danger_soft: {
      background: 'bg-action-error-light_normal text-fg-error-secondary',
      hover: 'hover:bg-action-error-light_hover hover:text-fg-error-secondary',
      focused: 'focus:outline-2 focus:outline-error-light-normal text-error-normal border-neutral-light-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A]',
      disabled: 'disabled:bg-action-neutral-disabled border action-border-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed disabled:hover:bg-action-neutral-disabled',
    },
  
  };

  const sizeClasses = {
    small: 'h-9 min-w-9 text-sm px-[14px] gap-2 ',
    medium: 'h-10 min-w-10 text-sm px-4 gap-2',
    large: 'h-11 min-w-11 text-md px-[18px] gap-',
    xlarge: 'h-12 min-w-12 text-md px-5 gap-[10px]'
  };

  const loadingClasses = isLoading ? 'opacity-50 cursor-wait' : '';
  const disabledClasses = isDisabled ? 'opacity-30 cursor-not-allowed' : '';

  const { background, hover,  focused, disabled } = variantClasses[variant];

  
  const buttonClassNames = [
    baseStyles,
    background,
    hover && hover,
    focused && focused,
    isDisabled ? disabled : '',
    sizeClasses[size],
    loadingClasses,
    disabledClasses,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={buttonClassNames} disabled={isLoading || isDisabled} {...props}>
      {isLoading ? 'Loading...' : (
        iconOnly ? (
          iconOnly
        ) : (
          <>
            {iconLeft && <span>{iconLeft}</span>}
            {children}
            {iconRight && <span>{iconRight}</span>}
          </>
        )
      )}
    </button>
  );
};

export default Button;
