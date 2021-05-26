import React from 'react';

const BlogView = () => {
  return (
    <div id="fh5co-blog">
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Posts</h2>
            <p>Algunos de los post que publiqué en mi pagina principal</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="fh5co-blog animate-box">
              <a
                href="https://programadordeconfianza.com/blog/react-primeros-pasos"
                target="_blank"
                className="blog-bg"
                style={{
                  backgroundImage:
                    'url(https://programadordeconfianza.com/content/react-primeros-pasos/banner.png);',
                }}
              ></a>
              <div className="blog-text">
                <span className="posted_on">Abril 01, 2020</span>
                <h3>
                  <a
                    href="https://programadordeconfianza.com/blog/react-primeros-pasos"
                    target="_blank"
                  >
                    ReactJS! Primeros pasos
                  </a>
                </h3>
                <p>Ritual de iniciación para crear aplicaciones con ReactJS.</p>
                <ul className="stuff">
                  <li>
                    <a
                      href="https://programadordeconfianza.com/blog/react-primeros-pasos"
                      target="_blank"
                    >
                      Leer más<i className="icon-arrow-right22"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fh5co-blog animate-box">
              <a
                href="https://programadordeconfianza.com/blog/crear-repositorio-git"
                target="_blank"
                className="blog-bg"
                style={{
                  backgroundImage:
                    'url(https://programadordeconfianza.com/content/crear-repositorio-git/banner.jpg);',
                }}
              ></a>
              <div className="blog-text">
                <span className="posted_on">Abril 01, 2020</span>
                <h3>
                  <a
                    href="https://programadordeconfianza.com/blog/crear-repositorio-git"
                    target="_blank"
                  >
                    ¿Qué es Git?
                  </a>
                </h3>
                <p>Creando nuestro primer repositorio con Git.</p>
                <ul className="stuff">
                  <li>
                    <a
                      href="https://programadordeconfianza.com/blog/crear-repositorio-git"
                      target="_blank"
                    >
                      Leer más<i className="icon-arrow-right22"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
