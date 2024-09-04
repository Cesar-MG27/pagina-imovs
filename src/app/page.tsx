"use client";
import dynamic from "next/dynamic";
const VideoPlayer = dynamic(() => import("@/components/VideoPlayer/VideoPlayer.js") )

import Link from "next/link";
import Menu from "@/components/Menu/Menu.js";

import Software from "@/app/Software/Software.js";
import Integraciones from "@/app/Integraciones/Integraciones.js";
import Websites from "@/app/Websites/Websites.js";
import Tiendas from "@/app/Tiendas/Tiendas.js";
import AppsMobiles from "@/app/AppsMobiles/AppsMobiles.js";
import Contact from "@/app/Contact/Contact.js";

// En cualquier componente o archivo donde necesites GSAP
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
      <Menu />
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
      <Contact />
    </div>
  );
}
