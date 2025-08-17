import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

export const useTheme = () => {
  const { isDarkMode, setTheme } = useThemeStore();

  useEffect(() => {
    // 시스템 테마 변경 감지
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [setTheme]);

  return { isDarkMode };
};
