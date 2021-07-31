import React from 'react';
import HeaderINFO from '../../data/Header.json';

const InfoView = () => {
  return (
    <div id="fh5co-about" className="animate-box">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{HeaderINFO.me.aboutMe.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="info">
              <li>
                <span className="first-block">Full Name:</span>
                <span className="second-block">
                  {HeaderINFO.me.aboutMe.fullName}
                </span>
              </li>
              <li>
                <span className="first-block">Email:</span>
                <span className="second-block">
                  {HeaderINFO.me.aboutMe.email}
                </span>
              </li>
              <li>
                <span className="first-block">Website:</span>
                <span className="second-block">
                  <a href={HeaderINFO.me.aboutMe.website} target="_blank">
                    {HeaderINFO.me.aboutMe.websiteTitle}
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2>{HeaderINFO.me.aboutMe.greeting}</h2>
            {HeaderINFO.me.aboutMe.info.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <p>
              <ul className="fh5co-social-icons">
                {HeaderINFO.socialMedia.map((item, index) => (
                  <li key={index} style={{ marginRight: '10px' }}>
                    <a target="_blank" href={item.url}>
                      <i className={item.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoView;
