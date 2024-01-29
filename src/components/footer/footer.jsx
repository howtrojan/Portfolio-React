import React from "react";
import "./footer.css";
import email from "../../assets/email.png";
import local from "../../assets/black-placeholder-variant.png";
import telefone from "../../assets/whatsapp.png";

export const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <h3 id="contact">Contato</h3>
        <div className="contact-info-msg">
          <img
            id="icone"
            src={local}
            alt=""
          ></img>
          <p>Presidente Prudente - SP</p>
        </div>
        <div className="contact-info-msg">
          <img
            id="icone"
            src={email}
            alt=""
          ></img>
          <p>andre.braga.asb@gmail.com</p>
        </div>
        <div className="contact-info-msg">
          <img
            id="icone"
            src={telefone}
            alt=""
          ></img>
          <p>(18) 997682790</p>
        </div>
      </div>
    </footer>
  );
};


