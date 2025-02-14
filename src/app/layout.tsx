"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { createContext, useEffect, useState } from "react";
// import ScreenCharge from "@/components/ChargeScreen/ChagerScreen";

const montserrat = Montserrat({ subsets: ["latin"] });

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Leer la preferencia de tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <html lang="en" className={montserrat.className}>
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <body className={`layout__container ${isDarkMode ? "dark" : ""}`}>
          <Header />
          <div className={`layout__container`}>{children}</div>
        </body>
      </ThemeContext.Provider>
    </html>
  );
}
