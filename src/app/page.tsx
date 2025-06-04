"use client";

import Welcome from "./home/Welcome/Welcome";
import About from "./home/About/About";
import Software from "@/app/home/Software/Software.js";
import Integraciones from "@/app/home/Integraciones/Integraciones.js";
import Websites from "@/app/home/Websites/Websites.js";
import Tiendas from "@/app/home/Tiendas/Tiendas.js";
import AppsMobiles from "@/app/home/AppsMobiles/AppsMobiles.js";
import Contact from "@/app/home/Contact/Contact.js";
import Preloader from "@/components/Preloader/Preloader.js";
import { gsap, useGSAP } from "@/libs/gsapConfig.js";

export default function Home() {
  useGSAP(() => {
    gsap.from(".home__page", {
      scrollTrigger: {
        trigger: ".websites",
        start: "top 75%",
        endTrigger: ".shops",
        end: "bottom 75%",
        scrub: 4,
        toggleClass: {
          targets: "body",
          className: "dark",
        },
        // markers: true,
      },
    });
  });

  return (
    <div className="home__page">
      <Welcome />
      <About />
      <Integraciones />
      <Software />
      <Websites />
      <Tiendas />
      <AppsMobiles />
      <Contact />
      <Preloader />
    </div>
  );
}
