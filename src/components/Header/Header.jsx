import React from 'react';
import HeaderINFO from '../../data/Header.json';

const Header = () => {
  return (
    <header
      id="fh5co-header"
      className="fh5co-cover js-fullheight"
      role="banner"
      style={{
        backgroundImage: 'url(assets/images/cover_bg_3.jpg)',
        height: '100vh',
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container" style={{ paddingTop: '16vh' }}>
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
                  <span>{HeaderINFO.me.fullName}</span>
                </h1>
                <h3>
                  <span>
                    {HeaderINFO.roles.reduce((prev, curr) => {
                      return `${prev}${prev === '' ? '' : ' / '}${curr}`;
                    }, '')}
                  </span>
                </h3>
                <div style={{ marginTop: '20px' }}>
                  <ul className="fh5co-social-icons">
                    {HeaderINFO.socialMedia.map((item, index) => (
                      <li key={index}>
                        <a target="_blank" href={item.url}>
                          <i className={item.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
