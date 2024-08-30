import "./appsmobiles.css";

import Spline from "@splinetool/react-spline";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const AppsMobiles = () => {
  useGSAP(() => {
    gsap.to(".apps", {
      scrollTrigger: {
        trigger: ".apps",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: ".canvas_apps",
        // markers: true,
      },
    });

    gsap.to(".apps", {
      scrollTrigger: {
        trigger: ".apps",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: ".apps__content",
        // markers: true,
      },
    });

    gsap.from(".appsi1", {
      opacity: 0,
      ease: 1,
      scrollTrigger: {
        trigger: ".appsi1",
        start: "top top",
        end: "25% top",
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from(".apps_s2", {
      opacity: 0,
      ease: 1,
      scrollTrigger: {
        trigger: ".apps_s2",
        start: "50% top",
        end: "75% top",
        // markers: true,
        toggleActions: "play nopne play reverse",
      },
    });
  });
  return (
    <div className="apps">
      <div className="canvas_apps">
        <Spline scene="https://prod.spline.design/QakZR1qPL0wj1gxL/scene.splinecode" />
      </div>

      <div className="apps__content">
        <div className="apps_s2">
          <div className="apps_info appsi2">
            <h1 className="title">
              Alcanza nuevos clientes con una <span>tienda en línea</span>
            </h1>
            <p className="description">
              ¡Ahora es tu oportunidad! Desde la gestión de productos hasta la
              experiencia de pago, nos encargamos de todos los detalles para que
              tu tienda en línea sea un éxito.
            </p>
          </div>
        </div>
        <div className="apps_s1">
          <div className="apps_info appsi1">
            <h1 className="title">
              <span>Apps personalizadas</span> que conectan tu marca con el
              mundo
            </h1>
            <div className="question__container">
              <h2 className="question">
                ¿Te imaginas que tu negocio tenga presencia en línea, donde tú
                decides qué vender y cómo hacerlo?
              </h2>
              <p className="description">
                En el mundo actual, tener presencia en dispositivos móviles es
                fundamental. Una aplicación móvil puede ofrecerte una ventaja
                competitiva y abrirte nuevas oportunidades de negocio.
              </p>
            </div>
            <div className="list__container">
              <h2 className="list__title">Con una app, podrás:</h2>
              <ul className="list">
                <li>
                  <span>·</span> Mejora la experiencia del cliente y fideliza a
                  tu audiencia
                </li>
                <li>
                  <span>·</span> Ofrece funcionalidades exclusivas y un canal de
                  comunicación directo
                </li>
                <li>
                  <span>·</span> Aumenta la visibilidad de tu marca y genera
                  nuevas vías de ingresos
                </li>
                <li>
                  <span>·</span> Recopila datos valiosos sobre tus usuarios para
                  mejorar tu estrategia
                </li>
              </ul>
            </div>
            <Link className="button__main" href={"/"}>
              Contáctanos para discutir tus ideas y objetivos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsMobiles;
