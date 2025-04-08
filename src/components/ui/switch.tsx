import React from 'react'

type SwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  description?: string
  value?: string
  applyBorder?: boolean
  isError?: boolean
  isDisabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  description,
  value,
  applyBorder = false,
  isError = false,
  isDisabled = false,
  className = '',
  ...props
}) => {
  const baseBorder = isError
    ? 'border border-action-border-error-normal'
    : 'border border-gray-300'

  const containerClasses = `
    flex flex-col justify-center gap-1 mt-2 
    ${applyBorder ? `${baseBorder} p-3 rounded-sm` : ''}
  `

  return (
    <div className={containerClasses}>
      {label && (
        <label className="text-md font-medium text-fg-neutral-primary">{label}</label>
      )}

      <div className="flex items-center justify-between gap-4">
        {value && (
          <span className="text-md font-medium text-fg-neutral-primary">{value}</span>
        )}

        <button
          type="button"
          role="switch"
          aria-checked={checked}
          disabled={isDisabled}
          onClick={() => !isDisabled && onChange(!checked)}
          className={`
            relative inline-flex items-center
            h-6 w-12
            rounded-full
            transition-colors duration-300
            ${checked ? 'bg-action-brand-normal' : 'bg-action-neutral-light_hover'}
            ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            focus:outline-none
            ${className}
          `}
          {...props}
        >
          <span
            className={`
              inline-block w-5 h-5 transform bg-action-base-white rounded-full shadow-md transition-transform duration-300 ease-in-out
              ${checked ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </button>
      </div>

      {description && (
        <p className="text-md text-fg-neutral-secondary mt-1">{description}</p>
      )}

      {isError && (
        <p className="text-md text-fg-error-secondary mt-1">Validation text of warning</p>
      )}
    </div>
  )
}

export default Switch
