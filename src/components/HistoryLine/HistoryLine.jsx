import React from 'react';
import EmploymentsDATA from '../../data/Employments.json';
import StudiesDATA from '../../data/Studies.json';

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
              {EmploymentsDATA.map((item, index) => (
                <li
                  className={`${
                    index % 2 === 1 ? 'timeline-inverted' : 'timeline-unverted'
                  } animate-box`}
                  key={index}
                >
                  <div className="timeline-badge">
                    <i className="icon-suitcase"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">{item.role}</h3>
                      <span className="company">
                        {item.company} - {item.startWork} - {item.endWork}
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>{item.details}</p>
                    </div>
                  </div>
                </li>
              ))}
              <br />
              <li className="timeline-heading text-center animate-box">
                <div>
                  <h3>Estudios</h3>
                </div>
              </li>
              {StudiesDATA.map((item, index) => (
                <li
                  className={`${
                    index % 2 === 1 ? 'timeline-inverted' : 'timeline-unverted'
                  } animate-box`}
                  key={index}
                >
                  <div className="timeline-badge">
                    <i className="icon-suitcase"></i>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h3 className="timeline-title">{item.degree}</h3>
                      <span className="company">
                        {item.company} - {item.startWork} - {item.endWork}
                      </span>
                    </div>
                    <div className="timeline-body">
                      <p>{item.details}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLine;
