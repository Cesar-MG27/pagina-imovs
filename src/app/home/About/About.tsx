import "./About.css";
import SplitType from "split-type";
import { gsap, useGSAP } from "@/libs/gsapConfig.js";

export default function About() {
  useGSAP(() => {
    // Divide el texto del slogan
    const slogan = new SplitType(".about__slogan span", { types: "chars" });

    // Timeline inicial con ScrollTrigger
    const tlScroll = gsap.timeline({
      scrollTrigger: {
        trigger: ".about__slogan",
        start: "top 75%",
        toggleActions: "play none none none",
      },
      onComplete: () => startLoopAnimation(), // Se mueve aquí
    });

    // Primera animación con scroll
    tlScroll
      .fromTo(
        slogan.chars,
        {
          backgroundImage:
            "linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          rotateX: "-360deg",
        },
        {
          backgroundImage:
            "linear-gradient(90deg,rgb(156, 21, 201),rgb(134, 17, 242))",
          stagger: 0.05,
          duration: 1.5,
          ease: "power2.out",
          rotateX: "0deg",
        }
      )
      .to(
        slogan.chars,
        {
          backgroundImage:
            "linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255))",
          stagger: 0.05,
          duration: 1.5,
          ease: "power2.out",
        },
        "<1"
      );

    // Función para iniciar la animación en loop
    const startLoopAnimation = () => {
      gsap
        .timeline({ repeat: -1, repeatDelay: 2 })
        .fromTo(
          slogan.chars,
          {
            backgroundImage:
              "linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            rotateX: "-360deg",
          },
          {
            backgroundImage:
              "linear-gradient(90deg,rgb(156, 21, 201),rgb(134, 17, 242))",
            stagger: 0.05,
            duration: 1.5,
            ease: "power2.out",
            rotateX: "0deg",
          }
        )
        .to(
          slogan.chars,
          {
            backgroundImage:
              "linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255))",
            stagger: 0.05,
            duration: 1.5,
            ease: "power2.out",
          },
          "<1"
        );
    };

    const paragraphs =
      document.querySelectorAll<HTMLElement>(".about__paragraph");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        toggleActions: "play play reverse reverse",
        pin: ".about",
      },
    });

    paragraphs.forEach((paragraph, index) => {
      const text = new SplitType(paragraph, { types: "lines,words,chars" });

      if (index === 0) {
        // El primer párrafo inicia visible
        gsap.set(text.lines, { opacity: 1 });
      } else {
        // Los demás inician invisibles
        gsap.set(text.lines, { opacity: 0 });
      }

      if (index > 0) {
        tl.to(paragraphs[index - 1], {
          opacity: 0,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "end",
          },
        });
      }

      tl.to(text.lines, {
        opacity: 1,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "end",
        },
      });

      // Si no es el último, lo oculta antes de pasar al siguiente
      if (index !== paragraphs.length - 1) {
        tl.to(
          text.lines,
          {
            opacity: 0,
            duration: 1,
            stagger: {
              each: 0.1,
              from: "end",
            },
          },
          "+=0.5"
        );
      }
    });

    const titles = document.querySelectorAll<HTMLElement>(".about__title");

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=2000",
        scrub: 1,
        toggleActions: "play play reverse reverse",
      },
    });

    titles.forEach((paragraph, index) => {
      const text = new SplitType(paragraph, { types: "lines,words,chars" });

      if (index === 0) {
        // El primer párrafo inicia visible
        gsap.set(text.chars, { opacity: 1 });
      } else {
        // Los demás inician invisibles
        gsap.set(text.chars, { opacity: 0 });
      }

      if (index > 0) {
        tl2.to(paragraphs[index - 1], {
          opacity: 0,
          duration: 1,
          stagger: {
            each: 0.1,
            from: "end",
          },
        });
      }

      tl2.to(text.chars, {
        opacity: 1,
        duration: 1,
        stagger: {
          each: 0.1,
          from: "end",
        },
      });

      // Si no es el último, lo oculta antes de pasar al siguiente
      if (index !== titles.length - 1) {
        tl2.to(
          text.chars,
          {
            opacity: 0,
            duration: 1,
            stagger: {
              each: 0.1,
              from: "end",
            },
          },
          "+=0.5"
        );
      }
    });
  }, []);

  return (
    <div className="about">
      <div className="about__slogan">
        <span>Potenciamos tu empresa</span> con estrategias innovadoras,
        tecnología de vanguardia y un equipo experto,{" "}
        <span>asegurando que alcances tus metas</span> más ambiciosas{" "}
        <span>y destaques en tu industria.</span>
      </div>

      <div className="about__des">
        <div className="about__titles">
          <h2 className="about__title title2">
            <span></span>Nosotros
          </h2>
          <h2 className="about__title title2">
            <span></span>Visión
          </h2>
          <h2 className="about__title title2">
            <span></span>Misión
          </h2>
        </div>
        <div className="about__des-paragraphs">
          <p className="about__paragraph">
            Ofrecemos servicios que van desde el desarrollo de software
            personalizados hasta la integración de sistemas, enfocados siempre
            en la calidad del resultado y en una grata experiencia de usuario.
            Estamos seguros de que nuestro equipo de profesionales
            potencializarán al máximo las capacidades de tu negocio o proyecto.
          </p>
          <p className="about__paragraph">
            Nuestra visión es innovar en cada solución que entregamos,
            asegurando que cada cliente obtenga el máximo valor de nuestras
            estrategias y tecnologías avanzadas.
          </p>
          <p className="about__paragraph">
            Con un equipo altamente capacitado y una metodología de trabajo
            ágil, estamos comprometidos en impulsar el crecimiento y la
            transformación digital de cada empresa con la que colaboramos.
          </p>
        </div>
      </div>
    </div>
  );
}
