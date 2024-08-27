"use client";

import "./websites.css";
import Link from "next/link";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Websites = () => {
  const images1 = [
    "./imgs/plantillas/img1.jpeg",
    "./imgs/plantillas/img2.jpeg",
    "./imgs/plantillas/img3.jpeg",
    "./imgs/plantillas/img4.jpeg",
    "./imgs/plantillas/img5.jpeg",
    "./imgs/plantillas/img6.jpeg",
    "./imgs/plantillas/img7.jpeg",
    "./imgs/plantillas/img8.jpeg",
  ];

  const reversedImages1 = [...images1].reverse();

  const images2 = [
    "./imgs/plantillas/img9.jpeg",
    "./imgs/plantillas/img10.jpeg",
    "./imgs/plantillas/img11.jpeg",
    "./imgs/plantillas/img12.jpeg",
    "./imgs/plantillas/img13.jpeg",
    "./imgs/plantillas/img14.jpeg",
    "./imgs/plantillas/img15.jpeg",
    "./imgs/plantillas/img16.jpeg",
  ];

  useGSAP(() => {
    gsap.to(".marquee1", {
      x: "-25%",
      duration: 1,
      scrollTrigger: {
        trigger: ".marquee1",
        start: "top bottom",
        end: "bottom top",
        scrub: 15,
        // markers: true,
      },
    });
    gsap.from(".marquee2", {
      x: "-25%",
      duration: 1,
      scrollTrigger: {
        trigger: ".marquee2",
        start: "top bottom",
        end: "bottom top",
        scrub: 15,
        //   markers: true,
      },
    });
    gsap.to(".marquee3", {
      x: "-25%",
      duration: 1,
      scrollTrigger: {
        trigger: ".marquee3",
        start: "top bottom",
        end: "bottom top",
        scrub: 15,
        //   markers: true,
      },
    });
  });

  return (
    <div className="websites">
      <div className="websites__titles">
        <h1 className="title">
          <span>Sitios web</span> que reflejan la esencia de tu marca
        </h1>
        <p className="description">
          Nuestro enfoque personalizado asegura que cada aspecto de tu sitio web
          capture y mantenga la atención de tus clientes potenciales
        </p>
        <Link href={"/"} className="button__main">¡Nos poder ayudarte!</Link>
      </div>

      <div className="container__marquees">
        <div className="marquee marquee1">
          {images1.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Imagen ${i + 1}`}
              className="img__marquee"
            />
          ))}
        </div>
        <div className="marquee marquee2">
          {images2.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Imagen ${i + 1}`}
              className="img__marquee"
            />
          ))}
        </div>
        <div className="marquee marquee3">
          {reversedImages1.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Imagen ${i + 1}`}
              className="img__marquee"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Websites;
