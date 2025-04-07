import { CaretDown, Warning } from "@phosphor-icons/react";
import React, { useState, useEffect, useRef } from "react";

interface DropdownProps<T extends { [key: string]: any } | string> {
  label?: string;
  values: T[];
  placeholder?: string;
  className?: string;
  config?: { [key: string]: any };
  value?: string | null;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  configKey?: string;
  required?: boolean;
  errorMessage?: string;
  showError?: boolean;
  disabled?: boolean;
  searchable?: boolean;
}

const Dropdown = <T extends { [key: string]: any } | string>(
  props: DropdownProps<T>
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.value || null);
  const [error, setError] = useState<string | null>(null);
  const [isTouched, setIsTouched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null); // Ref for input field

  useEffect(() => {
    if (isOpen && props.searchable && searchInputRef.current) {
      searchInputRef.current.focus(); // Focus on input when dropdown opens
    }
  }, [isOpen]);

  const validateDropdown = (
    value: string | null,
    required: boolean
  ): string => {
    if (required && !value) {
      return "This field is required";
    }
    return "";
  };

  useEffect(() => {
    if (props.value !== selectedValue) {
      setSelectedValue(props.value ?? null);
    }
  }, [props.value, selectedValue]);

  useEffect(() => {
    if (isTouched) {
      const validationError = validateDropdown(
        selectedValue,
        props.required || false
      );
      setError(validationError);
    }
  }, [selectedValue, isTouched, props.required]);

  const handleDropdownToggle = () => {
    if (!props.disabled) {
      setIsOpen(!isOpen);
      setSearchTerm("");
    }
  };

  const handleOptionSelect = (value: T) => {
    let newValue: string | null;

    if (typeof value === "object" && props.configKey) {
      newValue = (value as { [key: string]: string })[props.configKey] || null;
    } else {
      newValue = value as string;
    }

    setSelectedValue(newValue);

    if (props.onChange) {
      const event = {
        target: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>;

      props.onChange(event);
    }

    setIsOpen(false);
  };

  const filteredValues = props.values.filter((val) => {
    const displayText =
      typeof val === "string"
        ? val
        : (val as { [key: string]: any })[props.configKey || ""]?.toString() ||
          val;

    return displayText?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className={`relative ${props.className || ""}`}>
      {props.label && (
        <label className="text-sm font-medium text-fg-neutral-secondary">
          {props.label}{" "}
          <span className="text-fg-error-primary">
            {props.required ? "*" : ""}
          </span>
        </label>
      )}

      <div
        className={`border rounded-sm px-3 py-[8.5px] w-full flex justify-between items-center mt-2 font-normal text-base border-action-border-neutral-light normal-light ${
          props.disabled
            ? "cursor-not-allowed text-fg-neutral-quadernary"
            : `cursor-pointer text-fg-neutral-primary-light ${
                isOpen ? "border-primary border-2" : "hover:border-action-border-neutral-light_hover-light"
              }`
        }`}
        onClick={handleDropdownToggle}
        style={{ cursor: props.disabled ? "not-allowed" : "pointer" }}
      >
        <span>{selectedValue || "Select"}</span>
        <CaretDown className="mr-3" weight="bold" />
      </div>

      {isOpen && !props.disabled && (
        <div className="absolute bg-base-white shadow-lg rounded-sm mt-1 w-full border z-10">
          {props.searchable && (
            <input
              type="text"
              className="w-full px-3 py-2 border-b focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              ref={searchInputRef} // Assign ref to input field
            />
          )}

          <ul className="max-h-60 overflow-auto">
            {filteredValues.length > 0 ? (
              filteredValues.map((val, index) => {
                const displayText =
                  typeof val === "string"
                    ? val
                    : (val as { [key: string]: any })[props.configKey || ""] ||
                      val;

                return (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 cursor-pointer hover:bg-neutral-soft_surface"
                    onClick={() => handleOptionSelect(val)}
                  >
                    <span>
                      {typeof displayText === "object"
                        ? displayText.description
                        : displayText}
                    </span>
                  </li>
                );
              })
            ) : (
              <li className="p-2 text-fg-brand-secondary text-center">No results found</li>
            )}
          </ul>
        </div>
      )}

      {isTouched && error && (
        <p className="text-xs text-fg-error-secondary justify-start place-items-center place-self-start gap-1 mt-0.5">
          <Warning size={16} /> <div>{error}</div>
        </p>
      )}
    </div>
  );
};

export default Dropdown;







// import React, { useState, useRef, useEffect } from "react";
// import Checkbox from "./checkbox"; 

// type DropdownProps = {
//   size?: "sm" | "md" | "lg";
//   isError?: boolean;
//   isDisabled?: boolean;
//   isFilled?: boolean;
//   label?: string;
//   description?: string;
//   options: { value: string; label: string }[];
//   multiSelect?: boolean; 
// };

// const Dropdown: React.FC<DropdownProps> = ({
//   size = "md",
//   isError = false,
//   isDisabled = false,
//   isFilled = false,
//   label,
//   description,
//   options,
//   multiSelect = false, 
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValues, setSelectedValues] = useState<string[]>([]);
//   const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const toggleDropdown = () => {
//     if (!isDisabled) setIsOpen(!isOpen);
//   };

//   // Handle selection logic
//   const handleSelection = (value: string, label: string) => {
//     if (multiSelect) {
//       setSelectedValues((prev) =>
//         prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
//       );
//     } else {
//       setSelectedLabel(label);
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const baseStyles =
//     "w-full font-sm font-regular rounded-sm transition duration-200 ease-in-out border block cursor-pointer flex items-center";

//   const sizeClasses = {
//     sm: "min-w-[400px] max-w-[400px] h-[32px] text-sm px-3 rounded-xs",
//     md: "min-w-[400px] max-w-[400px] h-[40px] text-md px-3 rounded-sm",
//     lg: "min-w-[400px] max-w-[400px] h-[48px] text-lg px-4 rounded-sm",
//   };

//   const stateClasses = (() => {
//     if (isDisabled) {
//       return 'bg-action-neutral-light_disabled border-action-border-neutral-normal text-fg-neutral-primary opacity-50 cursor-not-allowed';
//     }
//     if (isError) {
//       return 'border action-border-error-normal bg-action-base-white shadow-[0px_0px_2px_0px_#0A0D1217]';
//     }
//     if (isOpen) {
//       return 'border-action-border-brand-normal shadow-[0px_2px_4px_0px_#0A0D120A]';
//     }
//     if (isFilled) {
//       return 'bg-action-neutral-light_hover text-fg-neutral-tertiary border-action-border-neutral-light_normal';
//     }
//     return 'border action-border-neutral-light_normal bg-action-base-white text-fg-neutral-tertiary hover:border-action-border-neutral-light_hover focus:outline-action-border-brand-normal focus:shadow-[0px_2px_4px_0px_#0A0D120A]';
//   })();

//   return (
//     <div className="relative w-full" ref={dropdownRef}>
//       {label && (
//         <label className="block mb-2 text-sm font-medium text-fg-neutral-secondary">
//           {label}
//         </label>
//       )}

//       {/* Input Field (Shows Selected Options) */}
//       <div
//         className={`${baseStyles} ${stateClasses} ${sizeClasses[size]} ${
//           multiSelect && selectedValues.length > 0 ? "bg-action-brand-light_selected text-fg-brand-primary" : ""
//         }`} 
//         onClick={toggleDropdown}
//       >
//         {multiSelect ? (
//           selectedValues.length > 0 ? (
//             <div className="flex flex-wrap gap-2">
//               {options
//                 .filter((opt) => selectedValues.includes(opt.value))
//                 .map((opt) => (
//                   <span
//                     key={opt.value}
//                     className="bg-action-neutral-light_hover text-fg-neutral-primary px-2 py-1 rounded-xs"
//                   >
//                     {opt.label}
//                   </span>
//                 ))}
//             </div>
//           ) : (
//             "Select options"
//           )
//         ) : (
//           selectedLabel || "Select an option"
//         )}
//       </div>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute left-0 w-full mt-1 bg-base-white border-neutral-subtle rounded-md z-10">
//           <ul className="p-2">
//             {options.map((option) => (
//               <li
//                 key={option.value}
//                 className={`flex items-center gap-2 p-2 cursor-pointer ${
//                   selectedValues.includes(option.value) ? "bg-action-brand-light_selected" : "hover:bg-neutral-subtle"
//                 }`}
//                 onClick={() => handleSelection(option.value, option.label)} 
//               >
//                 {multiSelect ? (
//                   <Checkbox
//                     value={option.value} 
//                     checked={selectedValues.includes(option.value)} 
//                     onChange={() => handleSelection(option.value, option.label)} 
//                   />
//                 ) : (
//                   <span>{option.label}</span>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {description && (
//         <p className="mt-1 text-sm text-fg-neutral-secondary">{description}</p>
//       )}
//       {isError && (
//         <p className="mt-1 text-sm text-fg-error-secondary">Error: Invalid selection</p>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
