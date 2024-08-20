"use client";
import "./software.css";

import Link from "next/link";
import Image from "next/image";
import Imac from "./iMAC.png";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Software = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".software",
        scrub: true,
        pin: true, // Mantiene el elemento fijo durante el desplazamiento
        start: "top top", // Empieza cuando el .software llega al top de la pantalla
        end: "+=1000", // Define cuánto tiempo se mantendrá el pin. Aumenta este valor según sea necesario.
        markers: true, // Solo para depuración, puedes quitarlo en producción
      },
    });
  }, []);

  return (
    <div className="software">
      <div>
        <div className="software__titles">
          <h1 className="title">
            Optimiza tus procesos con un <span>software personalizado</span>
          </h1>
          <h2 className="question">
            ¿Buscas una herramienta tecnológica que se ajuste a las
            particularidades de tu negocio?{" "}
          </h2>
          <p className="description">
            En Imovs, sabemos que cada negocio es único y que los sistemas
            personalizados optimizan la eficiencia y el éxito. Nuestras
            soluciones innovadoras se integran a la perfección con tus
            operaciones, resolviendo problemas específicos y elevando tu
            competitividad. Desde la planificación hasta la implementación,
            alineamos cada detalle con tus objetivos.
          </p>
          <Link href={"/"} className="button__text">
            ¡Haz que su negocio sea más eficiente y más exitoso! Clic
          </Link>
        </div>
        {/* <div className="software__titles">
          <h1 className="title">
            Realiza una <span>actualización de software</span>
          </h1>
          <h2 className="question">
            ¿Tu software antiguo ya no cumple con tus expectativas?
          </h2>
          <p className="description">
            Un software antiguo puede ser una barrera para el crecimiento de tu
            empresa. Revitaliza tu software antiguo con nuestras actualizaciones
            especializadas con las cuales nuestro equipo transforma y moderniza
            tus herramientas tecnológicas. Evaluamos tu sistema actual y
            aplicamos las mejoras necesarias para optimizar su rendimiento,
            seguridad y compatibilidad. No permitas que la tecnología obsoleta
            limite tu negocio. Actualiza tu software y vuelve a disfrutar de la
            eficiencia y funcionalidad.
          </p>
          <Link href={"/"} className="button__text">
            Da el siguiente paso hacia la modernización y optimiza tus
            operaciones con nuestra ayuda.
          </Link>
        </div> */}
      </div>

      <Image src={Imac} alt="" className="iMAC" />
    </div>
  );
};

export default Software;
