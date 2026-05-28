import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const themes = {
  dark: {
    name: "Midnight Blue",
    bg: "#060B18",
    bgCard: "#0F1729",
    border: "#1E2A45",
    text: "#FFFFFF",
    textMuted: "#64748B",
    textSub: "#94A3B8",
    primary: "#1D4ED8",
    accent: "#DC2626",
    accentHover: "#EF4444",
    inputBg: "#0F1729",
    inputBorder: "#1E2A45",
    success: "#22C55E",
  },
  light: {
    name: "Clean White",
    bg: "#F8FAFF",
    bgCard: "#FFFFFF",
    border: "#E2E8F0",
    text: "#0F172A",
    textMuted: "#64748B",
    textSub: "#334155",
    primary: "#1D4ED8",
    accent: "#DC2626",
    accentHover: "#EF4444",
    inputBg: "#FFFFFF",
    inputBorder: "#E2E8F0",
    success: "#16A34A",
  },
};

export function ThemeProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState("dark");
  const theme = themes[activeTheme];

  const switchTheme = (key) => {
    if (themes[key]) setActiveTheme(key);
  };

  return (
    <ThemeContext.Provider value={{ theme, activeTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
