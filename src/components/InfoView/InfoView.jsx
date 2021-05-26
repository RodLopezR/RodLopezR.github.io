import React from 'react';

const InfoView = () => {
  return (
    <div id="fh5co-about" class="animate-box">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Acerca de mi</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <ul class="info">
              <li>
                <span class="first-block">Full Name:</span>
                <span class="second-block">Nemecio Rodrigo López Rojas</span>
              </li>
              <li>
                <span class="first-block">Email:</span>
                <span class="second-block">rlopez2512@gmail.com</span>
              </li>
              <li>
                <span class="first-block">Website:</span>
                <span class="second-block">
                  <a href="https://programadordeconfianza.com" target="_blank">
                    ProgramadorDeConfianza
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <h2>Hola!</h2>
            <p>
              Soy ingeniero informático de profesión, desde mis inicios me
              apasionó el desarrollo de software, comencé haciendo aplicaciones
              PHP hace más de 6 años y desde entonces he utilizado muchas
              tecnologías, librerías, frameworks en pro de generar soluciones
              tecnológicas de alto impacto.
            </p>
            <p>
              He trabajado en instituciones de banca y seguros proporcionando
              soluciones móviles, web e integración de pasarelas de pagos con
              múltiples tecnologías. Además de cumplir roles de análisis de
              datos y generación de reportes de alto valor para la toma de
              decisiones.
            </p>
            <p>
              Me fascina aprender y conocer cosas nuevas todos los días, me
              encanta la sensación de satisfacción tras conocer como funcionan
              las cosas. Respeto mucho el tiempo de las personas y valoro la
              puntualidad. Guitarrista renegado amante del rock y géneros
              fusión.
            </p>
            <p>
              <ul class="fh5co-social-icons">
                <li>
                  <a target="_blank" href="https://twitter.com/RodLopezDev">
                    <i class="icon-twitter2"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/rodrigolop3z"
                  >
                    <i class="icon-facebook2"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/rodrigo-lopez-rojas/"
                  >
                    <i class="icon-linkedin2"></i>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoView;
