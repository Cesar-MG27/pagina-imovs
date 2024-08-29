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
    gsap.to(".shop__info-container", {
      scrollTrigger: {
        trigger: ".shops",
        start: "top top",
        end: "bottom 80%",
        scrub: 1,
        pin: ".shop__info-container",
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

    gsap.to(".shop_des1", {
      x: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 0.8,
        //   markers: true,
      },
    });

    gsap.from(".shop_des2", {
      x: 300,
      opacity: 0,
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
        scrub: 2,
        //   markers: true,
      },
    });

    gsap.to(".shop__info-container", {
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
        <div className="shop__info-container">
          <div className="shop-des shop_des1">
            <h1 className="title">
              Alcanza nuevos clientes con una <span>tienda en línea</span>
            </h1>
            <div className="shop__description-container">
              <h2 className="question">
                ¿Te imaginas que tu negocio tenga presencia en línea, donde tú
                decides qué vender y cómo hacerlo?
              </h2>
              <p className="description">
                ¡Ahora es tu oportunidad! Desde la gestión de productos hasta la
                experiencia de pago, nos encargamos de todos los detalles para
                que tu tienda en línea sea un éxito. ¡Empieza a vender online
                con una tienda que maximiza tus oportunidades de negocio!
              </p>
              <Link href={"/"} className="button__main">
                ¡Nos encantaría poder ayudarte!
              </Link>
            </div>
          </div>
          <div className="shop-des shop_des2">
            <h1 className="title">
              Nuestra <span>tiendas online</span> garantizan
            </h1>
            <div className="shop__description-container">
              <ul className="list">
                <li>
                  <span>·</span> Diseño Atractivo: Una tienda con un diseño
                  moderno y fácil de navegar, optimizada para convertir
                  visitantes en clientes.
                </li>
                <li>
                  <span>·</span> Inventario Listo: Acceso a un inventario de
                  productos de alta calidad, listos para ser vendidos.
                </li>
                <li>
                  <span>·</span> Plataforma Segura: Utilizamos las mejores
                  herramientas de pago y seguridad para que tus clientes compren
                  con confianza.
                </li>
                <li>
                  <span>·</span> Soporte Continuo: Te ofrezco asistencia para
                  que puedas gestionar tu tienda sin complicaciones.
                </li>
              </ul>

              <Link href={"/"} className="button__main">
                ¡Nos encantaría poder ayudarte!
              </Link>
            </div>
          </div>
        </div>
        <Image src={ImacDerecho} className="imac imac_r" />
      </div>
    </div>
  );
};

export default Tiendas;
