"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme == "system" ? systemTheme : theme;
  return <div>{mounted}</div>;
};
export default ThemeComp;
