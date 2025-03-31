
    export const agnikulUIConfig = {
      colors: {
  base: {
    white: "var(--base-white)",
    white_inverted: "var(--base-white_inverted)"
  },
  brand: {
    soft_surface: "var(--brand-soft_surface)",
    default: "var(--brand-default)",
    subtle: "var(--brand-subtle)",
    muted: "var(--brand-muted)",
    emphasized: "var(--brand-emphasized)"
  },
  neutral: {
    soft_surface: "var(--neutral-soft_surface)",
    subtle: "var(--neutral-subtle)",
    muted: "var(--neutral-muted)",
    default: "var(--neutral-default)",
    emphasized: "var(--neutral-emphasized)",
    strong: "var(--neutral-strong)",
    strong_alt: "var(--neutral-strong_alt)"
  },
  error: {
    soft_surface: "var(--error-soft_surface)",
    default: "var(--error-default)",
    subtle: "var(--error-subtle)",
    emphasized: "var(--error-emphasized)"
  },
  success: {
    soft_surface: "var(--success-soft_surface)",
    default: "var(--success-default)",
    subtle: "var(--success-subtle)",
    emphasized: "var(--success-emphasized)"
  },
  warning: {
    soft_surface: "var(--warning-soft_surface)",
    default: "var(--warning-default)",
    subtle: "var(--warning-subtle)",
    emphasized: "var(--warning-emphasized)"
  },
  fg: {
    brand: {
      primary: "var(--fg-brand-primary)",
      secondary: "var(--fg-brand-secondary)",
      tertiary: "var(--fg-brand-tertiary)"
    },
    neutral: {
      primary: "var(--fg-neutral-primary)",
      secondary: "var(--fg-neutral-secondary)",
      tertiary: "var(--fg-neutral-tertiary)",
      quadernary: "var(--fg-neutral-quadernary)"
    },
    error: {
      primary: "var(--fg-error-primary)",
      secondary: "var(--fg-error-secondary)",
      tertiary: "var(--fg-error-tertiary)"
    },
    information: {
      primary: "var(--fg-information-primary)",
      secondary: "var(--fg-information-secondary)",
      tertiary: "var(--fg-information-tertiary)"
    },
    success: {
      primary: "var(--fg-success-primary)",
      secondary: "var(--fg-success-secondary)",
      tertiary: "var(--fg-success-tertiary)"
    },
    warning: {
      primary: "var(--fg-warning-primary)",
      secondary: "var(--fg-warning-secondary)",
      tertiary: "var(--fg-warning-tertiary)"
    }
  },
  border: {
    brand: {
      xsubtle: "var(--border-brand-xsubtle)",
      subtle: "var(--border-brand-subtle)",
      default: "var(--border-brand-default)"
    },
    neutral: {
      xsubtle: "var(--border-neutral-xsubtle)",
      subtle: "var(--border-neutral-subtle)",
      muted: "var(--border-neutral-muted)",
      default: "var(--border-neutral-default)"
    },
    error: {
      subtle: "var(--border-error-subtle)",
      default: "var(--border-error-default)"
    },
    success: {
      subtle: "var(--border-success-subtle)",
      default: "var(--border-success-default)"
    },
    warning: {
      subtle: "var(--border-warning-subtle)",
      default: "var(--border-warning-default)"
    }
  },
  action: {
    base: {
      white: "var(--action-base-white)",
      white_inverted: "var(--action-base-white_inverted)",
      disable: "var(--action-base-disable)"
    },
    brand: {
      normal: "var(--action-brand-normal)",
      hover: "var(--action-brand-hover)",
      focussed: "var(--action-brand-focussed)",
      active: "var(--action-brand-active)",
      disabled: "var(--action-brand-disabled)",
      light_normal: "var(--action-brand-light_normal)",
      light_hover: "var(--action-brand-light_hover)",
      light_focussed: "var(--action-brand-light_focussed)",
      light_active: "var(--action-brand-light_active)",
      light_disabled: "var(--action-brand-light_disabled)"
    },
    neutral: {
      normal: "var(--action-neutral-normal)",
      hover: "var(--action-neutral-hover)",
      focussed: "var(--action-neutral-focussed)",
      active: "var(--action-neutral-active)",
      disabled: "var(--action-neutral-disabled)",
      light_normal: "var(--action-neutral-light_normal)",
      light_hover: "var(--action-neutral-light_hover)",
      light_focussed: "var(--action-neutral-light_focussed)",
      light_active: "var(--action-neutral-light_active)",
      light_disabled: "var(--action-neutral-light_disabled)"
    },
    error: {
      normal: "var(--action-error-normal)",
      hover: "var(--action-error-hover)",
      focussed: "var(--action-error-focussed)",
      active: "var(--action-error-active)",
      disabled: "var(--action-error-disabled)",
      light_normal: "var(--action-error-light_normal)",
      light_hover: "var(--action-error-light_hover)",
      inverted_light_hover: "var(--action-error-inverted_light_hover)",
      light_focussed: "var(--action-error-light_focussed)",
      light_active: "var(--action-error-light_active)",
      inverted_light_active: "var(--action-error-inverted_light_active)",
      light_disabled: "var(--action-error-light_disabled)"
    },
    success: {
      normal: "var(--action-success-normal)",
      hover: "var(--action-success-hover)",
      focussed: "var(--action-success-focussed)",
      active: "var(--action-success-active)",
      disabled: "var(--action-success-disabled)",
      light_normal: "var(--action-success-light_normal)",
      light_hover: "var(--action-success-light_hover)",
      light_focussed: "var(--action-success-light_focussed)",
      light_active: "var(--action-success-light_active)",
      light_disabled: "var(--action-success-light_disabled)"
    },
    warning: {
      normal: "var(--action-warning-normal)",
      hover: "var(--action-warning-hover)",
      focussed: "var(--action-warning-focussed)",
      active: "var(--action-warning-active)",
      disabled: "var(--action-warning-disabled)",
      light_normal: "var(--action-warning-light_normal)",
      light_hover: "var(--action-warning-light_hover)",
      light_focussed: "var(--action-warning-light_focussed)",
      light_active: "var(--action-warning-light_active)",
      light_disabled: "var(--action-warning-light_disabled)"
    },
    fg: {
      base: {
        white: "var(--action-fg-base-white)",
        white_inverted: "var(--action-fg-base-white_inverted)"
      },
      brand: {
        normal: "var(--action-fg-brand-normal)",
        hover: "var(--action-fg-brand-hover)",
        focussed: "var(--action-fg-brand-focussed)",
        active: "var(--action-fg-brand-active)",
        disabled: "var(--action-fg-brand-disabled)",
        inverted_normal: "var(--action-fg-brand-inverted_normal)",
        inverted_hover: "var(--action-fg-brand-inverted_hover)",
        inverted_focussed: "var(--action-fg-brand-inverted_focussed)",
        inverted_active: "var(--action-fg-brand-inverted_active)",
        inverted_disabled: "var(--action-fg-brand-inverted_disabled)"
      },
      neutral: {
        normal: "var(--action-fg-neutral-normal)",
        normal_light: "var(--action-fg-neutral-normal_light)",
        hover: "var(--action-fg-neutral-hover)",
        focussed: "var(--action-fg-neutral-focussed)",
        active: "var(--action-fg-neutral-active)",
        disabled: "var(--action-fg-neutral-disabled)"
      },
      error: {
        normal: "var(--action-fg-error-normal)",
        hover: "var(--action-fg-error-hover)",
        inverted_hover: "var(--action-fg-error-inverted_hover)",
        focussed: "var(--action-fg-error-focussed)",
        active: "var(--action-fg-error-active)",
        inverted_active: "var(--action-fg-error-inverted_active)",
        disabled: "var(--action-fg-error-disabled)",
        inverted_disabled: "var(--action-fg-error-inverted_disabled)"
      },
      success: {
        normal: "var(--action-fg-success-normal)",
        hover: "var(--action-fg-success-hover)",
        focussed: "var(--action-fg-success-focussed)",
        active: "var(--action-fg-success-active)",
        disabled: "var(--action-fg-success-disabled)",
        inverted_disabled: "var(--action-fg-success-inverted_disabled)"
      },
      warning: {
        normal: "var(--action-fg-warning-normal)",
        hover: "var(--action-fg-warning-hover)",
        focussed: "var(--action-fg-warning-focussed)",
        active: "var(--action-fg-warning-active)",
        disabled: "var(--action-fg-warning-disabled)",
        inverted_disabled: "var(--action-fg-warning-inverted_disabled)"
      }
    },
    border: {
      brand: {
        normal: "var(--action-border-brand-normal)",
        hover: "var(--action-border-brand-hover)",
        focussed: "var(--action-border-brand-focussed)",
        active: "var(--action-border-brand-active)",
        disabled: "var(--action-border-brand-disabled)"
      },
      neutral: {
        normal: "var(--action-border-neutral-normal)",
        hover: "var(--action-border-neutral-hover)",
        focussed: "var(--action-border-neutral-focussed)",
        active: "var(--action-border-neutral-active)",
        disabled: "var(--action-border-neutral-disabled)",
        light_normal: "var(--action-border-neutral-light_normal)",
        light_hover: "var(--action-border-neutral-light_hover)",
        light_focussed: "var(--action-border-neutral-light_focussed)",
        light_active: "var(--action-border-neutral-light_active)",
        light_disabled: "var(--action-border-neutral-light_disabled)"
      },
      error: {
        normal: "var(--action-border-error-normal)",
        hover: "var(--action-border-error-hover)",
        focussed: "var(--action-border-error-focussed)",
        active: "var(--action-border-error-active)",
        disabled: "var(--action-border-error-disabled)",
        light_normal: "var(--action-border-error-light_normal)",
        light_hover: "var(--action-border-error-light_hover)",
        light_focussed: "var(--action-border-error-light_focussed)",
        light_active: "var(--action-border-error-light_active)",
        light_disabled: "var(--action-border-error-light_disabled)"
      },
      success: {
        normal: "var(--action-border-success-normal)",
        hover: "var(--action-border-success-hover)",
        focussed: "var(--action-border-success-focussed)",
        active: "var(--action-border-success-active)",
        disabled: "var(--action-border-success-disabled)",
        light_normal: "var(--action-border-success-light_normal)",
        light_hover: "var(--action-border-success-light_hover)",
        light_focussed: "var(--action-border-success-light_focussed)",
        light_active: "var(--action-border-success-light_active)",
        light_disabled: "var(--action-border-success-light_disabled)"
      },
      warning: {
        normal: "var(--action-border-warning-normal)",
        hover: "var(--action-border-warning-hover)",
        focussed: "var(--action-border-warning-focussed)",
        active: "var(--action-border-warning-active)",
        disabled: "var(--action-border-warning-disabled)",
        light_normal: "var(--action-border-warning-light_normal)",
        light_hover: "var(--action-border-warning-light_hover)",
        light_focussed: "var(--action-border-warning-light_focussed)",
        light_active: "var(--action-border-warning-light_active)",
        light_disabled: "var(--action-border-warning-light_disabled)"
      }
    }
  }
},
      boxShadow: {
  "xs": "0px 0px 2px 0px #0a0d1217",
  "dark-xs": "0px 0px 2px 0px #0a0d1217",
  "sm": "0px 0px 2px 0px #0a0d1217, 0px 4px 2px 0px #0a0d120A",
  "dark-sm": "0px 0px 2px 0px #0a0d1217, 0px 4px 2px 0px #0a0d120A",
  "md": "0px 0px 2px 0px #0a0d120A, 0px 3px 8px 0px #0a0d1217",
  "dark-md": "0px 0px 2px 0px #0a0d120A, 0px 3px 8px 0px #0a0d1217",
  "lg": "0px 0px 2px 0px #0a0d120A, 0px 6px 12px 0px #0a0d1217",
  "dark-lg": "0px 0px 2px 0px #0a0d120A, 0px 6px 12px 0px #0a0d1217",
  "xl": "0px 0px 6px 0px #0a0d120A, 0px 8px 16px 0px #0a0d1217",
  "dark-xl": "0px 0px 6px 0px #0a0d120A, 0px 8px 16px 0px #0a0d1217",
  "2xl": "0px 0px 12px 0px #0a0d120A, 0px 12px 20px 0px #0a0d1217",
  "dark-2xl": "0px 0px 12px 0px #0a0d120A, 0px 12px 20px 0px #0a0d1217",
  "3xl": "0px 0px 16px 4px #0a0d120A, 0px 16px 32px 4px #0a0d1217",
  "dark-3xl": "0px 0px 16px 4px #0a0d120A, 0px 16px 32px 4px #0a0d1217",
  "xs-brand": "0px 0px 2px 0px #4D8C5217",
  "dark-xs-brand": "0px 0px 2px 0px #4D8C5217",
  "sm-brand": "0px 0px 2px 0px #4D8C5217, 0px 4px 2px 0px #4D8C520A",
  "dark-sm-brand": "0px 0px 2px 0px #4D8C5217, 0px 4px 2px 0px #4D8C520A",
  "md-brand": "0px 0px 2px 0px #4D8C520A, 0px 3px 8px 0px #4D8C5217",
  "dark-md-brand": "0px 0px 2px 0px #4D8C520A, 0px 3px 8px 0px #4D8C5217",
  "lg-brand": "0px 0px 2px 0px #4D8C520A, 0px 6px 12px 0px #4D8C5217",
  "dark-lg-brand": "0px 0px 2px 0px #4D8C520A, 0px 6px 12px 0px #4D8C5217",
  "xl-brand": "0px 0px 6px 0px #4D8C520A, 0px 8px 16px 0px #4D8C5217",
  "dark-xl-brand": "0px 0px 6px 0px #4D8C520A, 0px 8px 16px 0px #4D8C5217",
  "2xl-brand": "0px 0px 12px 0px #4D8C520A, 0px 12px 20px 0px #4D8C5217",
  "dark-2xl-brand": "0px 0px 12px 0px #4D8C520A, 0px 12px 20px 0px #4D8C5217",
  "3xl-brand": "0px 0px 16px 4px #4D8C520A, 0px 16px 32px 4px #4D8C5217",
  "dark-3xl-brand": "0px 0px 16px 4px #4D8C520A, 0px 16px 32px 4px #4D8C5217"
},
      borderRadius: {
  "none": "0px",
  "xs": "4px",
  "sm": "8px",
  "md": "16px",
  "lg": "24px",
  "xl": "32px",
  '2xl': "40px",
  '3xl': "48px",
  '4xl': "56px",
  '5xl': "64px",
  '6xl': "72px",
  '7xl': "80px",
  "full": "10000px"
},
      spacing: {
  "none": "0px",
  "xs": "4px",
  "sm": "8px",
  "md": "16px",
  "lg": "24px",
  "xl": "32px",
  '2xl': "40px",
  '3xl': "48px",
  '4xl': "56px",
  '5xl': "64px",
  '6xl': "72px",
  '7xl': "80px",
  "full": "10000px"
},
      grid: {},
      gutter: {},
      fontSize: {
  "2xs": "0.5rem",
  "xs": "0.75rem",
  "sm": "0.875rem",
  "md": "1rem",
  "lg": "1.125rem",
  "xl": "1.25rem",
  '2xl': "1.5rem",
  '3xl': "1.875rem",
  '4xl': "2.25rem",
  '5xl': "3rem",
  '6xl': "3.75rem",
  '7xl': "4.5rem",
  '8xl': "6rem",
  '9xl': "8rem",
  'h1': "48px",
  'h2': "40px",
  'h3': "32px",
  'h4': "24px",
  'h5': "20px",
  'h6': "16px"
},
      fontWeight: {
  regular: "400",
  medium: "500",
  semibold: "600"
},
      letterSpacing: {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
},
      lineHeight: {
  "sm": "14px",
  "base": "16px",
  "md": "20px",
  "lg": "24px",
  "xl": "32px",
  '2xl': "40px",
  '3xl': "48px",
  '4xl': "56px"
},
    }