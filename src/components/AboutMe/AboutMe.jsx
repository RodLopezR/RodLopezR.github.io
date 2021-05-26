import React from 'react';
import HeaderINFO from '../../data/Header.json';

const InfoView = () => {
  return (
    <div id="fh5co-about" class="animate-box">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>{HeaderINFO.me.aboutMe.title}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <ul class="info">
              <li>
                <span class="first-block">Full Name:</span>
                <span class="second-block">
                  {HeaderINFO.me.aboutMe.fullName}
                </span>
              </li>
              <li>
                <span class="first-block">Email:</span>
                <span class="second-block">{HeaderINFO.me.aboutMe.email}</span>
              </li>
              <li>
                <span class="first-block">Website:</span>
                <span class="second-block">
                  <a href={HeaderINFO.me.aboutMe.website} target="_blank">
                    {HeaderINFO.me.aboutMe.websiteTitle}
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <h2>{HeaderINFO.me.aboutMe.greeting}</h2>
            {HeaderINFO.me.aboutMe.info.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            <p>
              <ul class="fh5co-social-icons">
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
