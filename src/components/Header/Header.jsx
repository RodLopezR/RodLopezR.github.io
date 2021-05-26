import React from 'react';

const Header = () => {
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
      style={{ backgroundImage: 'url(assets/images/cover_bg_3.jpg)' }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t js-fullheight">
              <div
                className="display-tc js-fullheight animate-box"
                data-animate-effect="fadeIn"
              >
                <div
                  className="profile-thumb"
                  style={{ background: 'url(assets/images/user-3.png)' }}
                ></div>
                <h1>
                  <span>Rodrigo López Rojas</span>
                </h1>
                <h3>
                  <span>Full-Stack Developer / Movil Developer</span>
                </h3>
                <span>
                  <ul className="fh5co-social-icons">
                    <li>
                      <a target="_blank" href="https://twitter.com/RodLopezDev">
                        <i className="icon-twitter2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/rodrigolop3z"
                      >
                        <i className="icon-facebook2"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/rodrigo-lopez-rojas/"
                      >
                        <i className="icon-linkedin2"></i>
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
