"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: " Inicio" },
  { path: "/integraciones", label: "Integraciones" },
  { path: "/software", label: "Software" },
  { path: "/websites", label: "Websites" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0,100% 0%, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href={"/"}>
            <svg
              className="logo__imovs"
              id="Capa_2"
              data-name="Capa 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 526.1 196.15"
            >
              <g id="Capa_12" data-name="Capa 12">
                <g>
                  <path
                    className="letter__m"
                    d="M295,156.13v38.64h-46.15v-68.39c0-19.12-7.77-27.21-19.92-27.21-13.36,0-23.07,9.07-23.07,29.66v65.94h-46.15v-68.39c0-19.12-7.53-27.21-19.92-27.21-13.6,0-23.32,9.07-23.32,29.66v65.94h-46.15V61.91h43.96v13.97c9.96-10.79,23.8-16.18,39.35-16.18,17.97,0,33.28,6.62,42.51,20.84,10.44-13.24,26.72-20.84,45.66-20.84,25.52,0,44.95,11.85,50.87,39.86-14.27,8.64-20.13,42.27,2.32,56.56Z"
                  />
                  <path
                    className="letter__i"
                    d="M.53,21.75C.53,9.77,8.78.53,21.34.53s20.81,8.61,20.81,20.59c0,12.6-8.25,21.85-20.81,21.85S.53,33.72.53,21.75ZM2.86,61.35h36.97l-28.08,37.82h28.08v96.2H2.86V61.35Z"
                  />
                  <path
                    className="letter__v"
                    d="M456.33,61.94l-54.83,132.66h-47.97s-15.89-39.39-21.5-53.03c5.68-17-.68-41.84-18.77-44.84-3.73-9.07-14.31-34.79-14.31-34.79h47.73l31.82,81.02,33.53-81.02h44.3Z"
                  />
                  <path
                    className="letter__s"
                    d="M404.21,181.33l13.5-30.8c11.85,7.34,29.14,11.85,44.77,11.85s20.14-3.32,20.14-8.77c0-17.29-75.81,2.37-75.81-49.04,0-24.16,22.27-42.64,62.54-42.64,18,0,37.9,3.79,50.69,10.9l-13.5,30.56c-12.79-7.11-25.59-9.48-36.96-9.48-15.16,0-20.61,4.26-20.61,9,0,17.77,75.57-1.42,75.57,49.51,0,23.69-21.79,42.17-63.49,42.17-21.8,0-44.3-5.45-56.85-13.27Z"
                  />
                  <path
                    className="letter__o"
                    d="M272.46,67.61c9.29,5.49,17.62,17.55,20.3,31.97-3.24,1.94-12.14,9.84-12.73,27.59-.02,15.45,8.01,24.51,14.98,28.92,0,4.63.02,37.52.01,38.51-10.27-1.81-29.27-9.01-46.21-30.85-.05-12.12-.18-31.62-.24-40.34-.09-13.49-5.53-18-7.93-20.68,3.24-10.51,16.78-29.51,31.82-35.12Z"
                  />
                  <path
                    className="letter__o"
                    d="M298.83,61.86c1.26,0,10.14.08,21.31.08,17.59,2.12,31.42,12.43,31.42,12.43l25.84,65.8s-3.33,23.12-30,39.27c-4.01-9.53-15.37-37.86-15.37-37.86,0,0,10.41-34.07-18.79-44.67-7.42-18.04-14.41-35.03-14.41-35.03Z"
                  />
                  <polygon
                    className="number__one"
                    points="40.76 61.35 68.81 61.15 68.72 195.17 40.59 195.17 40.92 97.61 13.8 97.71 40.76 61.35"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="#">X&#8599;</a>
              <a href="#">Instagram&#8599;</a>
              <a href="#">LinkedIn&#8599;</a>
              <a href="#">Behance&#8599;</a>
              <a href="#">Dribbble&#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>info@codegrid.com</p>
              <p>23 2323 2323</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
