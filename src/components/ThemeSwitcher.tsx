"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonStar, SunDimIcon } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        defaultSelected
        isSelected={theme === "dark" ? true : false}
        onValueChange={(e) => setTheme(e ? "dark" : "light")}
        size="lg"
        color="success"
        startContent={<SunDimIcon />}
        endContent={<MoonStar />}
      ></Switch>
    </div>
  );
}
