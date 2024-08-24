"use client";
import "./software.css";

import Link from "next/link";
import Image from "next/image";
import imacMockup from "./imac_mockup.png";
import imacMockup2 from "./imac_mockup2.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Software = () => {
  useGSAP(() => {
    gsap.to(".pinSection", {
      // height: 0,
      // duration: 4,
      scrollTrigger: {
        trigger: ".pinSection",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 4,
        pin: ".pinSection",
        // toggleActions: "restart none none none",
        // markers: true,
      },
    });

    gsap.to(".pimg1", {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
      scrollTrigger: {
        trigger: ".pinSection",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 1,
        // markers: true
      },
    });

    gsap.to(".bgimg1", {
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
      scrollTrigger: {
        trigger: ".pinSection",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 0.5,
        // markers: true
      },
    });

    // gsap.to(".pinbox1", {
    //   scrollTrigger: {
    //     trigger: ".pinbox1",
    //     start: "top 0%",
    //     end: "bottom 0%",
    //     toggleClass: "bg__black",
    //     scrub: 0.5,
    //     markers: true,
    //   },
    // });

    gsap.to(".software__descriptions", {
      // height: 0,
      // duration: 4,
      scrollTrigger: {
        trigger: ".software__descriptions",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 4,
        pin: ".software__descriptions",
        // markers: true,
      },
    });

    gsap.to(".sd1", {
      opacity: 0,
      y: -800,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".software__descriptions",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.from(".sd2", {
      opacity: 0,
      y: 800,
      delay: 1,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".software__descriptions",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="software">
      <div class="software__pinbox pinbox1">
        <div class="pinSection">
          <div className="imgs_z1">
            <Image src={imacMockup} className="pin__image pimg1" />
            <Image src={imacMockup2} className="pin__image pimg2" />
          </div>
        </div>
        <div className="software__descriptions">
          <div className="sdescription sd1">
            <h1 className="title">
              Optimiza tus procesos con un <span>software personalizado</span>
            </h1>
            <p className="description">
              Tu también puedes hacer hacer uso de la conectividad para el éxito
              de tu negocio, transforma la manera en que operas y manténte a la
              vanguardia.
            </p>
            <Link className="button__text" href={"/"}>
              Haz que su negocio sea más eficiente y más exitoso{" "}
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

          <div className="sdescription sd2">
            <h1 className="title">
              Manten al dia tus procesos con una{" "}
              <span>actualización de software</span>
            </h1>
            <p className="description">
              Un software antiguo puede ser una barrera para el crecimiento de
              tu empresa. Revitaliza tu software antiguo con nuestras
              actualizaciones especializadas con las cuales nuestro equipo
              transforma y moderniza tus herramientas tecnológicas.  
            </p>
            <Link className="button__text" href={"/"}>
              Da el siguiente paso hacia la modernización{" "}
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
        </div>
      </div>
    </div>
  );
};

export default Software;