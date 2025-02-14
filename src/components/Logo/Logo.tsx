"use client";

import { useEffect, useState } from "react";
import LogoBlanco from "/public/imgs/Logo_blanco.svg";
import LogoAzul from "/public/imgs/Logo_color.svg";

import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar el modo del sistema operativo
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDarkMode.matches);

    // Escuchar cambios en el modo de color del sistema
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches); // Tipar correctamente el evento
    prefersDarkMode.addEventListener("change", handler);

    return () => prefersDarkMode.removeEventListener("change", handler);
  }, []);

  return (
    <div className="logo">
      {/* Mostrar el logo dependiendo del modo */}
      <Image src={isDarkMode ? LogoBlanco : LogoAzul} alt="" />
    </div>
  );
}
