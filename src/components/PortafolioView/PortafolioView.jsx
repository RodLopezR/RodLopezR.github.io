import React from 'react';

const PortafolioView = () => {
  return (
    <div id="fh5co-work" className="fh5co-bg-dark">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Portafolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://programadordeconfianza.com"
              target="_blank"
              className="work"
              style={{
                backgroundImage:
                  'url(https://visor.programadordeconfianza.com/projects/proyecto2.jpg);',
              }}
            >
              <div className="desc">
                <h3>ProgramadorDeConfianza</h3>
                <span>Blog</span>
              </div>
            </a>
          </div>
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://maker.programadordeconfianza.com"
              target="_blank"
              className="work"
              style={{
                backgroundImage:
                  'url(https://visor.programadordeconfianza.com/projects/proyecto1.jpg);',
              }}
            >
              <div className="desc">
                <h3>PortafolioMaker</h3>
                <span>ReactApp</span>
              </div>
            </a>
          </div>
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://visor.programadordeconfianza.com/rodrigo"
              target="_blank"
              className="work"
              style={{
                backgroundImage:
                  'url(https://visor.programadordeconfianza.com/projects/proyecto3.jpg);',
              }}
            >
              <div className="desc">
                <h3>PortafolioViewer</h3>
                <span>WebApp</span>
              </div>
            </a>
          </div>
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="exp://exp.host/@rodo25/nanito-speedy"
              target="_blank"
              className="work"
              style={{ backgroundImage: 'url(images/Nanito.png);' }}
            >
              <div className="desc">
                <h3>AppDelivery</h3>
                <span>ReactNativeApp</span>
              </div>
            </a>
          </div>
          <div className="col-md-3 text-center col-padding animate-box">
            <a
              href="https://play.google.com/store/apps/details?id=pe.gob.iiap.amazonia&hl=es_PE"
              target="_blank"
              className="work"
              style={{ backgroundImage: 'url(images/Amazonia.png);' }}
            >
              <div className="desc">
                <h3>Amazonía</h3>
                <span>Android App</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortafolioView;
