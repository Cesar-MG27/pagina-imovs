import "./About.css";
import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";
import Icon1 from "/public/icons/radial_bar_chart.json";
import Icon2 from "/public/icons/web_analytics.json";

export default function About() {
  const playerRefs = useRef<(Player | null)[]>([]);

  useEffect(() => {
    playerRefs.current.forEach((player) => player?.playFromBeginning());
  }, []);

  return (
    <div className="about">
      <div className="about__slogan">
        <span>Potenciamos tu empresa con estrategias innovadoras,</span> tecnología de
        vanguardia y un equipo experto, asegurando que alcances tus metas más
        ambiciosas y destaques en tu industria.
      </div>

      <div className="about__des">
        <span>Nosotros</span>
        <p className="">
          Ofrecemos servicios que van desde el desarrollo de software
          personalizados hasta la integración de sistemas, enfocados siempre en
          la calidad del resultado y en una grata experiencia de usuario.
          Estamos seguros de que nuestro equipo de profesionales potencializarán
          al máximo las capacidades de tu negocio o proyecto.
        </p>
      </div>
    </div>
  );
}
