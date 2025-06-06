"use client";

import styles from "./preloader.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

const binaryScramble = (element, finalText, duration = 1.5) => {
  const chars = ["0", "1", "0", "1"];
  const length = finalText.length;
  let frame = 0;
  const totalFrames = duration * 25;

  return new Promise((resolve) => {
    function update() {
      let displayText = "";
      for (let i = 0; i < length; i++) {
        // Si ya ha pasado más tiempo que el porcentaje de la letra, revelamos el texto original
        if (frame / totalFrames > i / length) {
          displayText += finalText[i];
          
          // Aplicar animación de color cuando la letra se revele
          const charElement = element.children[i];
          
          // Animamos el color de la letra al color deseado
          gsap.to(charElement, {
            color: "red", // Cambiar este valor por el color que prefieras
            duration: 0.1, // Duración de la animación de color
          });
        } else {
          displayText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      element.textContent = displayText;

      frame++;
      if (frame <= totalFrames) {
        requestAnimationFrame(update);
      } else {
        element.textContent = finalText;
        resolve();
      }
    }
    update();
  });
};


const Preloader = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Desactivar el scroll al iniciar la animación
    document.body.classList.add("no-scroll");

    return () => {
      // Restaurar el scroll cuando el componente se desmonta o cuando la animación se completa
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useGSAP(() => {
    const iElements = logoRef.current.querySelectorAll(`.${styles.letter__i}`);
    const iPointElements = logoRef.current.querySelectorAll(
      `.${styles.letter__i_point}`
    );
    const oElements = logoRef.current.querySelectorAll(`.${styles.letter__o}`);
    const oPointElements = logoRef.current.querySelectorAll(
      `.${styles.letter__o_point}`
    );

    const centerX = 500;
    const centerY = 150;

    // Caja de bounding box para los elementos "i"
    const iGroupBBox = (() => {
      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;
      iElements.forEach((el) => {
        const bb = el.getBBox();
        minX = Math.min(minX, bb.x);
        minY = Math.min(minY, bb.y);
        maxX = Math.max(maxX, bb.x + bb.width);
        maxY = Math.max(maxY, bb.y + bb.height);
      });
      return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
    })();

    // Configuración inicial de los elementos
    gsap.set(
      [...iElements, ...iPointElements, ...oElements, ...oPointElements],
      { opacity: 0 }
    );
    gsap.set(iElements, {
      x:
        centerX -
        (iElements[0]?.getBBox().x + iElements[0]?.getBBox().width / 2),
      y:
        centerY -
        (iElements[0]?.getBBox().y + iElements[0]?.getBBox().height / 2),
    });
    gsap.set(oElements, {
      x:
        centerX -
        (oElements[0]?.getBBox().x + oElements[0]?.getBBox().width / 2) +
        iGroupBBox.width -
        600,
      y:
        centerY -
        (oElements[0]?.getBBox().y + oElements[0]?.getBBox().height / 2),
    });

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Paso 1: Animar la palabra "uno"
    tl.call(() => binaryScramble(textRef.current, "uno", 1.5));
    tl.to(textRef.current, { opacity: 1, duration: 0.8 });

    // Animación de la letra "i" con máscara (revelar de abajo hacia arriba)
    tl.to(iElements, { opacity: 1, scale: 1, duration: 1.5 }, "<");
    tl.set(iElements, { mask: "url(#mask-i)" }, "<.5"); // Aplicamos la máscara

    tl.to(
      "#mask-i rect",
      {
        attr: { y: "0%" }, // La máscara sube desde abajo
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );
    tl.to(iElements, { x: "-=110", duration: 0.5 }, "+=1");

    // Animación de la letra "o" con máscara (revelar de derecha a izquierda)
    tl.set(oElements, { mask: "url(#mask-o)" }, "<-.2"); // Aplicar la máscara de la letra "o"
    tl.to(oElements, { opacity: 1, scale: 1, x: "0", duration: 0.7 }, "<");

    // Animación de la máscara de la letra "o"
    tl.to(
      "#mask-o rect",
      {
        attr: { x: "0%" }, // La máscara se mueve de derecha a izquierda
        duration: 2,
        ease: "power2.out",
      },
      "<"
    ); // Esto asegura que ambas animaciones (de "i" y "o") empiecen al mismo tiempo

    // Paso 2: Cambio de texto a "excelencia"
    // Cambio de texto a "excelencia" cuando la animación de la "i" comienza a moverse
    tl.to(textRef.current, { opacity: 0, duration: 0.3 }, "<");
    tl.call(() => binaryScramble(textRef.current, "excelencia", 1.5), [], "<"); // Cambio de texto a "excelencia"
    tl.to(textRef.current, { opacity: 1, duration: 0.3 }, "<0.1");

    // Paso 3: Movimiento a posición original
    tl.to(
      [...iElements, ...oElements],
      { x: 0, y: 0, duration: 0.5, ease: "power2.inOut" },
      "<1"
    );

    // Paso 4: Mostrar los puntos de las letras
    tl.to(oPointElements, { opacity: 1, y: 0, duration: 0.4 }, "-=0.5");
    tl.to(iPointElements, { opacity: 1, y: 0, duration: 0.5 }, ">0.3");

    // Paso 5: Animación de la máscara (otras letras)
    tl.to(
      ["#mask-m rect", "#mask-v rect", "#mask-s rect"],
      {
        attr: { width: 1000 },
        duration: 1.5,
        ease: "power2.inOut",
      },
      "-=1.0"
    );

    // Animación de posicionamiento del logo
    tl.to(
      logoRef.current,
      {
        duration: 1,
        x: "25px",
        y: "10px",
        top: 0,
        left: 0,
        width: "200px",
        ease: "power2.inOut",
      },
      "+=.05"
    );

    // Animación del fondo y texto
    tl.to(
      bgRef.current,
      {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        ease: "power2.inOut",
      },
      "<"
    );
    tl.to(
      textRef.current,
      { duration: 1, y: -100, opacity: 0, ease: "power2.inOut" },
      "<"
    );

    // Ocultar contenedor 2 segundos después de finalizar
    tl.eventCallback("onComplete", () => {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }

        // Restaurar el scroll al terminar la animación
        document.body.classList.remove("no-scroll");
      }, 1000);
    });
  }, []);

  return (
    <div className={styles.page__pageload} ref={containerRef}>
      <div ref={bgRef} className={styles.background__preloader}></div>
      <svg
        className={styles.logo}
        ref={logoRef}
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 1000 300"
      >
        <defs>
          {/* Máscara para letra I*/}
          <mask id="mask-i" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="100%" width="100%" height="100%" fill="white" />
          </mask>
          {/* Máscara para letra M */}
          <mask id="mask-m" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="0" height="300" fill="white" />
          </mask>
          {/* Máscara para letra O*/}
          <mask id="mask-o" x="0" y="0" width="100%" height="100%">
            <rect x="100%" y="0" width="100%" height="100%" fill="white" />
          </mask>
          {/* Máscara para letra V */}
          <mask id="mask-v" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="0" height="300" fill="white" />
          </mask>
          {/* Máscara para letra S */}
          <mask id="mask-s" x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="0" height="300" fill="white" />
          </mask>
        </defs>

        <rect
          className={`${styles.st0} ${styles.letter__i_point}`}
          x="69.5"
          y="62.45"
          width="28.65"
          height="28.45"
        />
        <rect
          className={`${styles.st0} ${styles.letter__i}`}
          x="69.5"
          y="104.21"
          width="28.65"
          mask="url(#mask-i)"
          height="88.83"
        />
        <path
          className={`${styles.st0} ${styles.letter__m} ${styles.draw}`}
          mask="url(#mask-m)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M181.39,94.59c-8.83-4.78-16.57-4.2-23.22,1.74-6.65,5.94-9.98,16.41-9.98,31.42v64.88h-24.67v-64.88c0-10.64,1.39-20.23,4.17-28.76,2.78-8.53,6.5-15.38,11.16-20.57,4.65-5.18,9.91-9.07,15.78-11.67,5.86-2.59,12.06-3.61,18.59-3.07,6.53.55,12.88,2.53,19.05,5.94,5.08,2.87,9.82,6.96,14.24,12.28,4.41,5.32,8.07,10.95,10.97,16.89,2.9,5.94,5.86,12.25,8.89,18.93,3.02,6.69,5.74,12.86,8.16,18.52,2.42,5.66,5.23,10.82,8.43,15.45,3.2,4.64,6.56,7.92,10.07,9.82,7.37,4.09,14.69,4.09,21.95,0,4.11-2.18,8.01-6.31,11.7-12.38,3.69-6.07,7.1-12.82,10.25-20.26,3.14-7.44,6.41-14.94,9.79-22.51,3.38-7.57,7.59-14.74,12.61-21.49,5.02-6.75,10.49-11.84,16.42-15.25,6.17-3.41,12.52-5.39,19.05-5.94,6.53-.54,12.76.48,18.68,3.07,5.92,2.59,11.21,6.48,15.87,11.67,4.65,5.19,8.34,12.04,11.06,20.57,2.72,8.53,4.08,18.11,4.08,28.76v64.88h-24.67v-64.88c0-15.01-3.33-25.48-9.98-31.42-6.65-5.94-14.33-6.51-23.04-1.74-4.11,2.32-8.01,6.52-11.7,12.59-3.69,6.07-7.11,12.83-10.25,20.26-3.15,7.44-6.41,14.94-9.79,22.51-3.39,7.57-7.59,14.74-12.61,21.49-5.02,6.75-10.49,11.84-16.42,15.25-14.63,8.05-29.27,8.05-43.9,0-6.05-3.41-11.58-8.49-16.6-15.25-5.02-6.75-9.22-13.92-12.61-21.49-3.39-7.57-6.62-15.08-9.7-22.51-3.08-7.44-6.5-14.19-10.25-20.26-3.75-6.07-7.62-10.27-11.61-12.59Z"
        />
        <path
          className={`${styles.st0} ${styles.letter__o}`}
          mask="url(#mask-o)"
          d="M618.58,75.55c-8.67-8.6-19-12.89-31.01-12.89h-112.16c-12.15,0-22.51,4.3-31.11,12.89-8.6,8.6-12.89,18.97-12.89,31.11s4.3,22.51,12.89,31.11c8.6,8.6,18.96,12.89,31.11,12.89h112.16c12.01,0,22.34-4.3,31.01-12.89,8.66-8.6,13-18.96,13-31.11s-4.33-22.51-13-31.11ZM598.83,118.13c-3.14,3.14-6.89,4.71-11.26,4.71h-112.16c-4.5,0-8.33-1.57-11.46-4.71-3.14-3.14-4.71-6.92-4.71-11.36s1.57-8.25,4.71-11.46c3.14-3.2,6.96-4.81,11.46-4.81h112.16c2.18,0,4.26.44,6.24,1.33,1.98.89,3.68,2.05,5.12,3.48,1.43,1.43,2.56,3.14,3.38,5.12.82,1.98,1.23,4.06,1.23,6.24,0,4.5-1.57,8.32-4.71,11.46Z"
        />
        <rect
          className={`${styles.st0} ${styles.letter__o_point}`}
          x="517.37"
          y="164.79"
          width="28.04"
          height="27.84"
        />
        <path
          className={`${styles.st0} ${styles.letter__v} ${styles.draw}`}
          mask="url(#mask-v)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M781.8,62.66h25.97c-3.29,10.92-8.72,26.34-16.3,46.26-7.58,19.92-12.51,33.16-14.79,39.71-3.41,9.96-7.74,18.46-12.99,25.48-5.25,7.03-10.78,12.15-16.59,15.35-5.81,3.2-11.98,4.81-18.48,4.81s-12.77-1.67-18.77-5.01c-6-3.34-11.72-8.49-17.16-15.45-5.44-6.96-10.05-15.35-13.84-25.18-.76-1.77-2.53-6.27-5.31-13.51-2.78-7.23-4.68-12.25-5.69-15.04-1.01-2.79-2.72-7.33-5.12-13.61-2.4-6.27-4.27-11.36-5.59-15.25-1.33-3.89-2.88-8.46-4.64-13.71-1.77-5.25-3.35-10.2-4.74-14.84h25.97l30.9,85.96c1.9,4.37,4.42,8.02,7.58,10.95,3.16,2.94,6.57,4.78,10.24,5.53,3.66.75,7.33.72,11-.1,3.66-.82,7.04-2.66,10.14-5.53,3.1-2.87,5.53-6.48,7.3-10.85l30.9-85.96Z"
        />
        <path
          className={`${styles.st0} ${styles.letter__s} ${styles.draw}`}
          mask="url(#mask-s)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M925.65,164.76c-2.74-5.37-6.82-10.32-12.24-14.87-5.42-4.54-11.17-8.35-17.25-11.42-6.08-3.06-12.1-6.02-18.07-8.87-5.97-2.85-11.39-5.94-16.26-9.28-4.87-3.34-8.24-6.87-10.1-10.6-3.83-7.89-3.37-14.84,1.4-20.86,4.76-6.02,13.17-9.04,25.22-9.04h52.08v-22.34h-52.08c-8.54,0-16.24,1.23-23.08,3.7-6.84,2.46-12.35,5.81-16.51,10.02-4.16,4.22-7.28,9.01-9.36,14.38-2.08,5.37-2.9,11.01-2.46,16.92.44,5.91,2.03,11.66,4.76,17.25,2.74,5.37,6.82,10.32,12.24,14.87,5.42,4.55,11.17,8.35,17.25,11.42,6.08,3.07,12.1,6.02,18.07,8.87,5.97,2.85,11.39,5.94,16.26,9.28,4.87,3.34,8.19,6.87,9.94,10.6,3.29,6.57,3.29,13.2,0,19.88-1.53,3.18-4.16,6.22-7.89,9.12-3.72,2.9-7.86,5.45-12.4,7.64-4.54,2.19-9.5,4.66-14.87,7.39-5.37,2.74-10.43,5.42-15.2,8.05-2.52,1.39-4.97,2.99-7.36,4.77l24.86,10.9c1.78-.95,3.6-1.88,5.5-2.77,5.97-2.79,11.99-5.72,18.07-8.79,6.08-3.06,11.83-6.87,17.25-11.42,5.42-4.54,9.5-9.55,12.24-15.03,6.46-13.25,6.46-26.5,0-39.76Z"
        />
      </svg>
      <p ref={textRef} className={styles.logo__text}></p>
    </div>
  );
};

export default Preloader;
