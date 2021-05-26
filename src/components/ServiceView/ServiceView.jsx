import React from 'react';

const ServiceView = () => {
  return (
    <div id="fh5co-features" className="animate-box">
      <div className="container">
        <div className="services-padding">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Servicios</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-briefcase"></i>
                </span>
                <div className="feature-copy">
                  <h3>Web Development</h3>
                  <p>
                    Desarrollo de aplicaciones web de pequeño, mediano y alto
                    impacto. Utilizando Wordpress, Laravel, Express, ReactJs,
                    Angular, NetCore, Spring o Flutter.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-genius"></i>
                </span>
                <div className="feature-copy">
                  <h3>Movil Development</h3>
                  <p>
                    Diseño, desarrollo y despliegue en plataformas de
                    aplicaciones móviles desarrolladas en Java, Kotlin, React
                    Native o Flutter.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-paintbrush"></i>
                </span>
                <div className="feature-copy">
                  <h3>UI/UX Design</h3>
                  <p>
                    Diseño de interfaces web/movil/desktop, generación de
                    experiencias de usuario y flujos de proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-search"></i>
                </span>
                <div className="feature-copy">
                  <h3>Mantenimiento de software</h3>
                  <p>
                    Mantenimiendo y creación de adecuaciones a sistemas
                    funcionales para empresas, bajo Java, Spring, .Net, NetCore,
                    PHP, Laravel, Android, iOS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-chat"></i>
                </span>
                <div className="feature-copy">
                  <h3>Soporte y mentoría</h3>
                  <p>
                    Soporte y mentoría en el manejo de tecnologías de
                    información. Enseñanza especializada acerca de programación
                    y desarrollo de software.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="feature-left">
                <span className="icon">
                  <i className="icon-bargraph"></i>
                </span>
                <div className="feature-copy">
                  <h3>Data Analist</h3>
                  <p>Generación de reportes a nivel Script y dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceView;
