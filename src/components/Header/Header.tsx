import "./header.css";
import Logo from "@/components/Logo/Logo";
import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";

export default function Header() {
  const playerRefs = useRef<(Player | null)[]>([]);

  useEffect(() => {
    playerRefs.current.forEach((player) => player?.playFromBeginning());
  }, []);

  return (
    <div>
      <header>
        <Logo />

        <div className="hamburguer">
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
  );
}
