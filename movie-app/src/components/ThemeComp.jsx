"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme == "system" ? systemTheme : theme;
  return (
    <div>
      {mounted &&
        (themeMode === "dark" ? (
          <CiDark
            onClick={() => setTheme("light")}
            size={25}
            className="cursor-pointer"
          />
        ) : (
          <CiLight
            onClick={() => setTheme("dark")}
            size={25}
            className="cursor-pointer"
          />
        ))}
    </div>
  );
};
export default ThemeComp;
