const commonStyles = {
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif",
    code: "source-code-pro, Menlo, Monaco, Consolas, \"Courier New\", monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
  },
  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    full: "9999px",
  },
  transitions: {
    fast: "0.1s ease-in-out",
    normal: "0.2s ease-in-out",
    slow: "0.3s ease-in-out",
  },
};

export const lightTheme = {
  ...commonStyles,
  colors: {
    primary: "#0066FF",
    primaryHover: "#0052CC",
    background: "#FFFFFF",
    surface: "#F5F5F5",
    surfaceHover: "#EBEBEB",
    text: "#1A1A1A",
    textSecondary: "#666666",
    border: "#E5E5E5",
    error: "#FF4D4D",
    success: "#00C853",
    warning: "#FFB800",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.05)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.05)",
  },
};

export const darkTheme = {
  ...commonStyles,
  colors: {
    primary: "#ffffff",
    primaryHover: "#66B2FF",
    background: "#000000",
    surface: "#2A2A2A",
    surfaceHover: "#333333",
    text: "#8a8f98",
    textSecondary: "#A0A0A0",
    border: "#404040",
    error: "#FF6B6B",
    success: "#00E676",
    warning: "#FFC400",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.2)",
    md: "0 4px 6px rgba(0, 0, 0, 0.2)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.2)",
  },
};

export type Theme = typeof lightTheme;