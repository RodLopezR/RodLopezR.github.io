import React from 'react';

const HistoryLine = () => {
  return (
    <div
      id="fh5co-resume"
      className="fh5co-bg-color"
      style={{ paddingTop: '0rem' }}
    >
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Mi historia</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline">
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>Experiencia de trabajo</h3>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Full-Stack Engineer</h3>
                    <span className="company">
                      Continuum HQ - 07/2020 - Actualidad
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Encargado de liderar el proyecto ReactJS para agendamiento
                      de citas para Teleconsulta. Respetando las métricas de
                      calidad y cobertura de codigo, despliegue continuo, AB
                      Testing, accesibilidad, usabilidad. Parte del equipo
                      encargado de desarrollar el proyecto Back-End con
                      DynamoDB, ExpressJS y envío de mails en una arquitectura
                      serverless.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Software Engineer</h3>
                    <span className="company">INDRA - 10/2019 - 07/2020</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Soporte, mantenimiento e implementación de mejoras.
                      Implementación de pasarelas de pago. Scrum, JavaEE,
                      Spring, PL/SQL, Oracle, AWS Lambda, Api Gateway.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Fullstack Developer</h3>
                    <span className="company">
                      CMAC Maynas - 02/2017 - 09/2019
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Soporte, mantenimiento e implementación de mejoras. VB6.0,
                      ASP.NET, ASP MVC4, Net.CORE, Android Development, JAVA
                      SDK24, JavaEE, Reporting Services, MS SQL.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-suitcase"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Web Developer</h3>
                    <span className="company">IIAP - 2015 - 2016</span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Desarrollo aplicación móvil/web "Amazonía - Glosario
                      Móvil", Desarrollo Sistema de reportes para el monitoreo
                      de calidad de Agua. Desarrollo de Módulo Elearning. PHP,
                      ASP MVC 4, LAravel, Android Development,
                      HTML/CSS/Javascript.
                    </p>
                  </div>
                </div>
              </li>

              <br />
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>Estudios</h3>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Ingles</h3>
                    <span className="company">
                      Michigan Corp - 02/2020 - Actualidad
                    </span>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted animate-box">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Maestría</h3>
                    <span className="company">
                      POSTGRADO/UNAP - 2018 - Actualidad
                    </span>
                  </div>
                  <div className="timeline-body">
                    <p>
                      Maestría en Gestión de Tecnologías de Información e
                      Ingeniería del Software.
                    </p>
                  </div>
                </div>
              </li>
              <li className="animate-box timeline-unverted">
                <div className="timeline-badge">
                  <i className="icon-graduation-cap"></i>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Bachillerato</h3>
                    <span className="company">UNAP - 2012 - 2016</span>
                  </div>
                  <div class="timeline-body">
                    <p>
                      Ingeniería de Sistemas e Informática en Universidad
                      Nacional de la Amazonía Peruana.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLine;
