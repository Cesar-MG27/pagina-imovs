import { useState } from "react";
import "./contact.css";
import FormContact from "@/components/FormContact/FormContact.js"

const Contact = () => {

  return (
    <div className="contact">
      <div className="contact__content">
        <h1 className="title">Hablemos</h1>
        <div className="formulario__container">
          <FormContact/>
        </div>

        <div className="info__contact">
          <div className="info__group">
            <h4 className="">Escíbenos</h4>
            <a>mail@example.com.mx</a>
            <a>mail@example.com.mx</a>
          </div>
          <div className="info__group">
            <h4 className="">Ubicación</h4>
            <a>
              Av. Patriotismo 767, San Juan, Benito Juárez, 03730 Ciudad de
              México, CDMX
            </a>
          </div>
          <div className="info__group">
            <h4 className="">Teléfono</h4>
            <a>56 33344 5566</a>
            <a>56 33344 5566</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
