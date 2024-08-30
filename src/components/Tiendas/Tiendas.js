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
        // markers: true,
      },
    });

    // Mover imac_l en el eje X
    gsap.to(".imac_l", {
      x: "105%",
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 1,
      },
    });

    // Desvanecer y mover el elemento shop_des1
    gsap.to(".shop_des1", {
      x: -300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 1,
      },
    });

    // Animar la entrada del elemento shop_des2
    gsap.from(".shop_des2", {
      x: 300,
      opacity: 0,
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 1,
      },
    });

    // Mover imac_r en el eje X
    gsap.to(".imac_r", {
      x: "105%",
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 1,
      },
    });

    // Mover imac_r en el eje Y
    gsap.to(".imac_r", {
      y: "-100%",
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 20%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    // Mover shop__info-container en el eje Y
    gsap.to(".shop__info-container", {
      y: "-100%",
      scrollTrigger: {
        trigger: ".shops",
        start: "50% 5%",
        end: "bottom 80%",
        scrub: 1,
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
              Conquista nuevos mercados con tu <span>tienda en línea</span>
            </h1>
            <div className="question__container">
              <h2 className="question">
                ¿Te imaginas que tu negocio tenga presencia en línea, donde tú
                decides qué vender y cómo hacerlo?
              </h2>
              <p className="description">
                ¡Ahora es tu oportunidad! Desde la gestión de productos hasta la
                experiencia de pago, nos encargamos de todos los detalles para
                que tu tienda en línea sea un éxito.
              </p>
            </div>

            <Link href={"/"} className="button__text">
              Empieza a vender online{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </Link>
          </div>
          <div className="shop-des shop_des2">
            <h1 className="title">
              Nuestra <span>tiendas online</span> garantizan
            </h1>
            <div className="shops__benefits">
              <div className="sbenefit">
                <figure>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-rainbow"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.5a7 7 0 0 0-7 7 .5.5 0 0 1-1 0 8 8 0 1 1 16 0 .5.5 0 0 1-1 0 7 7 0 0 0-7-7m0 2a5 5 0 0 0-5 5 .5.5 0 0 1-1 0 6 6 0 1 1 12 0 .5.5 0 0 1-1 0 5 5 0 0 0-5-5m0 2a3 3 0 0 0-3 3 .5.5 0 0 1-1 0 4 4 0 1 1 8 0 .5.5 0 0 1-1 0 3 3 0 0 0-3-3m0 2a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 4 0 .5.5 0 0 1-1 0 1 1 0 0 0-1-1" />
                  </svg>
                </figure>
                <h3>Diseño atractivo</h3>
                <p>Una tienda con un diseño moderno y fácil de navegar</p>
              </div>
              <div className="sbenefit">
                <figure>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-cart-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                  </svg>
                </figure>
                <h3>Inventario Listo</h3>
                <p>Acceso a un inventario de productos de alta calidad</p>
              </div>
              <div className="sbenefit">
                <figure>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-shield-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                    <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  </svg>
                </figure>
                <h3>Plataforma Segura</h3>
                <p>Utilizamos las mejores herramientas de pago y seguridad</p>
              </div>
              <div className="sbenefit">
                <figure>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-wrench-adjustable-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z" />
                  </svg>
                </figure>
                <h3>Soporte 24/7</h3>
                <p>
                  Asistencia para que puedas gestionar tu tienda sin
                  complicaciones
                </p>
              </div>
            </div>

            <Link href={"/"} className="button__text">
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
