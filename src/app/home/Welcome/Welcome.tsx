import Link from "next/link";
import dynamic from "next/dynamic";
import "./Welcome.css";
import SplineComponent from "@splinetool/react-spline";

import { gsap, useGSAP } from "@/libs/gsapConfig.js";

const VideoPlayer = dynamic(
  () => import("@/components/VideoPlayer/VideoPlayer.js")
);

export default function Welcome() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home__video",
        start: "top bottom",
        end: "+=1400",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(".home__video video", {
      y: "-135%",
    }).from(".home__video video", {
      width: "250px",
      borderRadius: 25,
      duration: 2, // Aumentamos la duración para que sea más suave
      ease: "power2.out", // Un easing más natural y suave
    });

    gsap.to(".home__description-group", {
      y: "-500px",
      scrollTrigger: {
        trigger: ".home__content",
        start: "top top",
        end: "+=1400",
        scrub: 1,
      },
    });
  });

  return (
    <div>
      <div className="home__content">
        <div className="home__title">
          <h1>
            Fábrica de <br /> <span>Software</span>
          </h1>
        </div>
        <div className="home__description">
          <div className="home__description-group">
            <span>¡Nos encantaría ayudarte!</span>
            <p className="">
              Desarrollamos soluciones tecnológicas para empresas que buscan
              optimizar sus procesos, mejorar su eficiencia y mantenerse
              competitivas. Hacemos uso de la tecnología para mejorar tu
              rendimiento, trabaja con expertos en desarrollo de software y
              obtienen soluciones innovadoras.
            </p>
          </div>
        </div>
        <div className="home_canvas">
          {" "}
          <SplineComponent scene="https://prod.spline.design/CKVyg2ux3S7Nx7Ua/scene.splinecode" />
        </div>
      </div>
      <div className="home__video">
        <VideoPlayer />
      </div>
    </div>
  );
}
