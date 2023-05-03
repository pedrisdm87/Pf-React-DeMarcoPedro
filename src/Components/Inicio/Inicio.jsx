import React from "react";
import "./inicio.css";

function Inicio(params) {
  return (
    <>
      <h2 className="titulo">
        ¿Cómo funciona una <strong>cortadora láser?</strong>
      </h2>

      <p className="titulo">
        Las cortadoras láser generan un rayo láser muy potente y focalizado que
        proyectan a través de un material para cortarlo. La forma en que se
        genera el láser depende de la tecnología utilizada por la máquina en
        cuestión. En todos los casos, el láser rebota sobre la superficie de un
        espejo, desviándose, y luego pasa a través de una lente que lo focaliza
        antes de incidir sobre el material en el espacio de trabajo. Una vez que
        el láser entra en contacto con el material, lo quema, funde o incluso
        vaporiza. El rayo atraviesa la superficie del material y comienza a
        cortarlo, siguiendo el control numérico computerizado (CNC) o el código
        G que le indican dónde cortar. Siguiendo el archivo vectorial que
        contiene el diseño 2D, el rayo láser corta el material hasta completar
        la imagen.
      </p>

      <div className="video-responsive titulo">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ovn7Y0VW__c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default Inicio;
