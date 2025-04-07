import React from 'react'

type SwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
  size?: 'sm' | 'md' | 'lg'
  colorScheme?: 'primary' | 'secondary'
  label?: string
  description?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const sizeClasses = {
  sm: 'w-10 h-5',
  md: 'w-12 h-6',
  lg: 'w-14 h-7',
}

const thumbSize = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
}

const colorClasses = {
  primary: 'bg-blue-500',
  secondary: 'bg-green-500',
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  size = 'md',
  colorScheme = 'primary',
  label,
  description,
  className = '',
  ...props
}) => {
  return (
    <label className="flex flex-col gap-1 cursor-pointer">
      {/* Label */}
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}

      {/* Switch Button */}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative flex items-center ${sizeClasses[size]} 
          ${checked ? colorClasses[colorScheme] : 'bg-gray-300'} 
          rounded-full transition-colors focus:outline-none ${className}`}
        {...props}
      >
        <span
          className={`absolute left-1 top-1 bg-white rounded-full shadow-md 
            transition-transform ${thumbSize[size]} 
            ${checked ? 'translate-x-[110%]' : 'translate-x-0'}`}
        />
      </button>

      {/* Description */}
      {description && <span className="text-xs text-gray-500">{description}</span>}
    </label>
  )
}

export default Switch
