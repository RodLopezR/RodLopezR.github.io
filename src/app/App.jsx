import React, { useEffect, useState } from 'react';
import Config from '../data/Config.json';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import HistoryLine from '../components/HistoryLine';
import ServiceView from '../components/ServiceView';
import SkillsView from '../components/SkillsView';
import PortafolioView from '../components/PortafolioView';
import BlogView from '../components/BlogView';

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => setTimeout(() => setLoader(false), 1000), []);

  return (
    <div className="page--wrapper">
      {loader ? <div className="fh5co-loader"></div> : null}
      <div id="page">
        {Config.header.show && <Header />}
        {Config.aboutme.show && <AboutMe />}
        <HistoryLine />
        {Config.portfolio.show && <PortafolioView />}
        {Config.skills.show && <SkillsView />}
        {Config.services.show && <ServiceView />}
        {Config.blog.show && <BlogView />}
        <div className="gototop js-top">
          <a href="#" className="js-gotop">
            <i className="icon-arrow-up22"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
