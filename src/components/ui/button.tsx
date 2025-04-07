import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react";

type ButtonCategory =
  | "primary"
  | "primary-soft"
  | "danger"
  | "danger-soft"
  | "secondary"
  | "neutral"
  | "tertiary";

type ButtonSize = "sm" | "md" | "lg" | "xlg";

type ButtonProps = {
  category?: ButtonCategory;
  size?: ButtonSize;
  icon?: keyof typeof PhosphorIcons;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  children: React.ReactNode;
  onClick: (e: React.FormEvent) => void;
};

const categoryStyles: Record<ButtonCategory, string> = {
  primary:
    "bg-action-brand-normal text-action-fg-base-white hover:bg-action-brand-hover hover:border hover:border-1 hover:border-action-fg-base-white active:bg-action-brand-active active:border active:border-1 active:border-action-fg-base-white active:shadow-[inset_0px_2px_12px_1px_#0000001A] disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed focus:outline-none focus:outline-2 focus:border-transparent focus:shadow-[inset_0px_2px_12px_1px_#0000001A] w-full",
  "primary-soft":
    "bg-action-brand-light_normal text-fg-brand-primary hover:bg-action-brand-light_hover hover:text-action-fg-brand-normal outline-none text-action-fg-brand-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A] disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed",
  secondary:
    "text-action-fg-neutral-normal border border-action-border-neutral-light_normal hover:bg-action-neutral-light_hover hover:text-action-fg-neutral-normal outline-none text-action-fg-neutral-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A] disabled:text-action-fg-neutral-disabled disabled:border-action-border-neutral-light_normal disabled:cursor-not-allowed",
  neutral:
    "bg-action-neutral-light_normal text-action-fg-neutral-normal hover:bg-action-neutral-light_hover hover:text-action-fg-neutral-normal outline-none text-action-fg-neutral-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A] disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed",
  tertiary: "text-action-fg-neutral-normal hover:bg-action-neutral-light_hover hover:text-action-fg-neutral-normal  outline-none text-action-fg-neutral-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A] disabled:text-action-fg-neutral-disabled disabled:cursor-not-allowed ",
  danger:"bg-action-error-normal text-action-fg-base-white hover:bg-action-error-hover hover:text-action-fg-base-white  active:shadow-[inset_0px_2px_12px_1px_#0000001A] disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed",
  "danger-soft": "bg-action-error-light_normal text-fg-error-secondary hover:bg-action-error-light_hover hover:text-fg-error-secondary outline-none focus:outline-error-light-normal text-error-normal active:shadow-[inset_0px_2px_12px_1px_#0000001A] disabled:bg-action-neutral-disabled disabled:text-action-fg-base-white disabled:cursor-not-allowed",
};

const Button: React.FC<ButtonProps> = ({
  category = "primary",
  size = "md",
  icon,
  iconPosition,
  disabled = false,
  children,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-normal rounded-[7px] transition-all duration-200 focus:outline-none";
  const sizeStyles = {
    sm: "min-w-fit px-3 py-1.5 text-sm",
    md: "p-[10px] text-sm",
    lg: "px-6 py-3 text-md",
    xlg: " px-7 py-4 text-md",
  };

  const IconComponent = icon
    ? (PhosphorIcons[icon as keyof typeof PhosphorIcons] as React.ElementType)
    : null;

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${
        categoryStyles[category]
      } ${disabled ? "cursor-not-allowed opacity-50" : ""} `}
      onClick={onClick}
      disabled={disabled}
    >
      {IconComponent && iconPosition === "left" && (
        <IconComponent size={20} className="mr-[10px] " />
      )}
      {children}
      {IconComponent && iconPosition === "right" && (
        <IconComponent size={20} className="ml-[10px]" />
      )}
    </button>
  );
};

export default Button;
