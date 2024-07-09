"use client";
import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme,
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderTheme = {
  children: React.ReactNode
}

export default function ThemeContextProvider({
  children
}: ThemeContextProviderTheme) {

  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    console.log('localTheme', localTheme)
    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context == null) {
    throw new Error("useTheme must be used within a ThemeContextProvider")
  }

  return context;
}
