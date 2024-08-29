"use client";
import "./tiendas.css";
import Image from "next/image";
import Link from "next/link";

import ImacDerecho from "./imgs/imac_r.png";
import ImacIzquierdo from "./imgs/imac_l.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Tiendas = () => {
  useGSAP(() => {
    gsap.to(".shop__info", {
      scrollTrigger: {
        trigger: ".shops",
        start: "top top",
        end: "bottom 80%",
        scrub: 1,
        pin: ".shop__info",
        // markers: true,
      },
    });
   
    gsap.to(".imac_r", {
      scrollTrigger: {
        trigger: ".shops",
        start: "top top",
        end: "bottom 80%",
        // scrub: 1,
        pin: ".imac_r",
        // markers: true,
      },
    });

    gsap.to(".imac_l", {
        scrollTrigger: {
          trigger: ".shops",
          start: "top top",
          end: "bottom 80%",
          // scrub: 1,
          pin: ".imac_l",
        //   markers: true,
        },
      });

    gsap.to(".imac_l", {
      x: "105%",
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 0.8,
        // markers: true,
      },
    });

    gsap.to(".shop__info", {
        x: "100%",
        scrollTrigger: {
          trigger: ".shops",
          start: "50% 50%",
          end: "50% 25%",
          scrub: 0.8,
        //   markers: true,
        },
      });

      gsap.to(".imac_r", {
        x: "105%",
        scrollTrigger: {
          trigger: ".shops",
          start: "50% 50%",
          end: "50% 25%",
          scrub: 0.8,
        //   markers: true,
        },
      });

      gsap.to(".imac_r", {
        y: "-100%",
        scrollTrigger: {
          trigger: ".shops",
          start: "50% 20%",
          end: "bottom 80%",
          scrub: 1,
        //   markers: true,
        },
      });

      gsap.to(".shop__info", {
        y: "-100%",
        scrollTrigger: {
          trigger: ".shops",
          start: "50% 5%",
          end: "bottom 80%",
          scrub: 1,
        //   markers: true,
        },
      });
     
  
  });
  return (
    <div className="shops">
      <div className="shops__content">
        <Image src={ImacIzquierdo} className="imac imac_l" />
        <div className="shop__info">
          <h1 className="title">
            Alcanza nuevos clientes con una <span>tienda en línea</span>
          </h1>
          <div className="shop__description">
            <h2 className="question">
              ¿Te imaginas que tu negocio tenga presencia en línea, donde tú
              decides qué vender y cómo hacerlo?
            </h2>
            <p className="description">
              ¡Ahora es tu oportunidad! Desde la gestión de productos hasta la
              experiencia de pago, nos encargamos de todos los detalles para que
              tu tienda en línea sea un éxito. ¡Empieza a vender online con una
              tienda que maximiza tus oportunidades de negocio!
            </p>
            <Link href={"/"} className="button__main">
              ¡Nos encantaría poder ayudarte!
            </Link>
          </div>
        </div>
        <Image src={ImacDerecho} className="imac imac_r" />
      </div>
    </div>
  );
};

export default Tiendas;
