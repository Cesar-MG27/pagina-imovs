"use client";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.js";
import Link from "next/link";
import Software from "@/components/Software/Software.js";
import Integraciones from "@/components/Integraciones/Integraciones.js";
import Websites from "@/components/Websites/Websites.js";
import Tiendas from "@/components/Tiendas/Tiendas.js";
import AppsMobiles from "@/components/AppsMobiles/AppsMobiles.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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
      <div className="home__title">
        <h1 className="title">
          Fábrica de <span>software</span>
        </h1>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
          tenetur suscipit modi ullam magni, praesentium non laudantium
          molestias suscipit modi ullam magni
        </p>
        <Link href={"/"} className="button__main">
          ¡Nos encantaría ayudarte!
        </Link>
      </div>
      <div className="home__video">
        <VideoPlayer />
      </div>
      <div className="about">
        <h1 className="title">
          En <span>imovs</span> impulsamos a tu empresa para lograr sus{" "}
          <span>objetivos</span>
        </h1>
        <p className="description">
          Ofrecemos servicios que van desde el desarrollo de software
          personalizados hasta la integración de sistemas, enfocados siempre en
          la calidad del resultado y en una grata experiencia de usuario.
          Estamos seguros de que nuestro equipo de profesionales potencializarán
          al máximo las capacidades de tu negocio o proyecto.
        </p>
        <Link href={"/"} className="button__main">
          ¡Contáctanos!
        </Link>
      </div>
      <Integraciones />
      <Software />
      <Websites />
      <Tiendas />
      <AppsMobiles />
      <div className="relleno"></div>
    </div>
  );
}
