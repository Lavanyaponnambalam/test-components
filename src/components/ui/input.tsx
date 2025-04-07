import { Warning } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";

interface InputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?:
    | "text"
    | "textarea"
    | "tel"
    | "email"
    | "password"
    | "age"
    | "number"
    | "aadhaar";
  variant?: "default" | "outlined" | "filled";
  maxChar?: number;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

const inputStyles = {
  default:
    "bg-action-base-white text-base text-black border border-action-border-neutral-light_normal focus:ring-gray-600 focus:border-gray-300 ",
  outlined:
    "bg-white text-sm text-black border border-action-border-neutral-light_normal focus:ring-gray-500 focus:border-transparent",
  filled:
    "bg-white text-sm text-black border border-transparent focus:ring-transparent focus:border-transparent ",
};

const validateInput = (value: string = "", type: string) => {
  switch (type) {
    case "aadhaar":
      const aadhaarRegex = /^[0-9]{12}$/;
      if (value.trim() === "") {
        return "This field cannot be empty";
      }
      return aadhaarRegex.test(value)
        ? ""
        : "Please enter a valid 12-digit Aadhaar number.";
    case "email":
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value.trim() === "") {
        return "This field cannot be empty";
      }
      return emailRegex.test(value) ? "" : "Please enter a valid email address";
    case "tel":
      const phoneRegex = /^[0-9]{10}$/;
      if (value.trim() === "") {
        return "This field cannot be empty";
      }
      return phoneRegex.test(value)
        ? ""
        : "Please enter a 10-digit phone number.";
    case "password":
      if (value.trim() === "") {
        return "This field cannot be empty";
      }
      return value.length >= 6
        ? ""
        : "Password must be at least 6 characters long";
    case "age":
      if (value.trim() === "") {
        return "This field cannot be empty";
      }
      const numberRegex = /^[0-9]+$/;
      if (!numberRegex.test(value)) {
        return "Please enter a valid number";
      }

      const age = parseInt(value, 10);
      if (isNaN(age)) {
        return "Please enter a valid age";
      }

      if (age < 10 || age > 99) {
        return "Please enter a valid age";
      }
      return "";
    case "text":
    case "textarea":
      return value.trim() === "" ? "This field cannot be empty" : "";
    case "number":
      if (value.trim() === "") {
        return "This field cannot be empty";
      }
      return value.length > 0 ? "" : "Please enter a valid number";
    default:
      return "";
  }
};

export const InputField = ({
  label,
  value = "",
  onChange,
  placeholder = "Type here",
  type = "text",
  variant = "default",
  maxChar,
  required,
  className,
  disabled = false,
}: InputProps) => {
  const [error, setError] = useState<string>("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const baseStyles =
    "block px-3 py-[8.5px] w-full text-base font-normal rounded-sm focus:outline-action-border-brand-normal ";
  const appliedStyles = `${baseStyles} ${inputStyles[variant]} ${
    disabled
      ? " placeholder:text-fg-neutral-secondary cursor-not-allowed "
      : " placeholder:text-fg-neutral-secondary hover:border-action-border-neutral-light_hover"
  }`;

  useEffect(() => {
    console.log("Current value:", value); // Debugging line

    if (isTouched) {
      const validationError = validateInput(value, type);
      setError(validationError);
    }

    if (value === "") {
      setError("");
    }
  }, [value, type, isTouched]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = e.target.value;

    if (
      (type === "tel" ||
        type === "number" ||
        type === "age" || 
        type === "aadhaar"
        ) &&
      /[^0-9]/.test(newValue)
    ) {
      return;
    }


    if (maxChar && newValue.length <= maxChar) {
      onChange(newValue);
    } else if (!maxChar) {
      onChange(newValue);
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      (type === "tel" || type === "number" || type === "age" || type === "aadhaar") &&
      !/[0-9]/.test(e.key)
    ) {
      e.preventDefault();
    }
  };

  const handleFocus = () => {
    setIsTouched(true);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          className={`text-sm font-medium mb-2
            text-fg-neutral-secondary
          `}
        >
          {label}{" "}
          <span className="text-fg-error-primary">
            {required ? "*" : ""}
          </span>
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          rows={4}
          value={value}
          onChange={handleChange}
          className={`${appliedStyles} h-32 resize-none`}
          placeholder={placeholder}
          maxLength={maxChar}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
        />
      ) : null}

      {type === "text" ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={appliedStyles}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
        />
      ) : null}

      {type === "tel" ? (
        <input
          type="tel"
          value={value}
          onChange={handleChange}
          className={appliedStyles}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          maxLength={10}
        />
      ) : null}

      {type === "aadhaar" ? (
        <input
          type="aadhaar"
          value={value}
          onChange={handleChange}
          className={appliedStyles}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          maxLength={12}
        />
      ) : null}

      {type === "number" ? (
        <input
          type="number"
          value={value}
          onChange={handleChange}
          className={appliedStyles}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          maxLength={10}
        />
      ) : null}

      {type === "email" ? (
        <input
          type="email"
          value={value}
          onChange={handleChange}
          className={appliedStyles}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
        />
      ) : null}

      {type === "password" ? (
        <input
          type="password"
          value={value}
          onChange={handleChange}
          className={appliedStyles}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
        />
      ) : null}

      {type === "age" ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={appliedStyles}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          maxLength={2}
        />
      ) : null}

      {maxChar && (
        <p className="text-xs text-fg-neutral-tertiary text-end">
          {value.length}/{maxChar} characters
        </p>
      )}

      {isTouched && error && (
        <p className="text-xs text-fg-error-secondary flex justify-start place-items-center place-self-start gap-1 mt-0.5">
          <Warning size={16} /> <div>{error}</div>
        </p>
      )}
    </div>
  );
};