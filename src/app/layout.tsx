"use client";

import { Montserrat } from "next/font/google";
import "./globals.css";
// import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

// El contexto de tema
// export const ThemeContext = createContext({
//   isDarkMode: false,
//   toggleTheme: () => {},
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // Leer la preferencia de tema desde localStorage
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   if (savedTheme === "dark") {
  //     setIsDarkMode(true);
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = !isDarkMode;
  //   setIsDarkMode(newTheme);
  //   localStorage.setItem("theme", newTheme ? "dark" : "light");

  // };

  return (
    <html lang="en" className={montserrat.className}>
      <body >
        {/* <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}> */}
          {/* <div className={`layout__container ${isDarkMode ? "dark" : ""}`}> */}
          <div className={`layout__container`}>
            {children}
          </div>
        {/* </ThemeContext.Provider> */}
      </body>
    </html>
  );
}
