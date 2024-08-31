import "./appsmobiles.css";
import dynamic from "next/dynamic";
import Link from "next/link";

const SplineComponent = dynamic(() => import("@splinetool/react-spline") )

import { gsap, useGSAP } from "@/libs/gsapSetUp.js";

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
        start: "top 10%",
        end: "25% 10%",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from(".apps_s2", {
      opacity: 0,
      ease: 1,
      scrollTrigger: {
        trigger: ".apps_s2",
        start: "60% top",
        end: "80% top",
        // markers: true,
        toggleActions: "play none play reverse",
      },
    });
  });
  return (
    <div className="apps">
      <div className="canvas_apps">
        <SplineComponent scene="https://prod.spline.design/QakZR1qPL0wj1gxL/scene.splinecode" />
      </div>

      <div className="apps__content">
        <div className="apps_s2">
          <div className="apps_info appsi2">
            <h1 className="title">
              <span>imovs crea la app</span> perfecta para tu negocio
            </h1>
            <p className="description">
              ¡Ahora es tu oportunidad! Desde la gestión de productos hasta la
              experiencia de pago, nos encargamos de todos los detalles para que
              tu tienda en línea sea un éxito.
            </p>
            <div className="list__container">
              <h2 className="list__title">Nuestro proceso creativo incluye:</h2>
              <ul className="list">
                <li>
                  <span>·</span> Análisis de requisitos y definición de la
                  estrategia
                </li>
                <li>
                  <span>·</span> Diseño de la interfaz de usuario (UI) y
                  experiencia (UX)
                </li>
                <li>
                  <span>·</span> Desarrollo nativo para iOS y Android o híbrido
                  multiplataforma
                </li>
                <li>
                  <span>·</span> Integración con tus sistemas y bases de datos
                  existentes
                </li>
                <li>
                  <span>·</span> Pruebas exhaustivas y aseguramiento de la
                  calidad
                </li>
                <li>
                  <span>·</span> Publicación en App Store y Google Play Store
                </li>
                <li>
                  <span>·</span> Mantenimiento y actualizaciones periódicas
                </li>
              </ul>
            </div>
            <Link className="button__main" href={"/"}>
              Contáctanos para discutir tus ideas y objetivos
            </Link>
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
