import React from 'react';
import JSON_Data from './../../data/Portfolio.json';
import "./style.css";

const PortafolioView = () => {
  return (
    <div id="fh5co-work" className="fh5co-bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Portafolio</h2>
          </div>
        </div>
        <div className="row">
          {JSON_Data.map((item, index) => (
            <div 
              className="col-md-3 text-center col-padding" 
              key={index}
            >
              <a
                href={item.link}
                target="_blank"
                className="work-portfolio"
              >
                <img src={item.img}/>
                <div className="desc">
                  <h3>{item.name}</h3>
                  <span>{item.type}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortafolioView;
