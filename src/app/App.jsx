import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import InfoView from '../components/InfoView';
import HistoryLine from '../components/HistoryLine';
import ServiceView from '../components/ServiceView';
import SkillsView from '../components/SkillsView';
import PortafolioView from '../components/PortafolioView';
import BlogView from '../components/BlogView';

const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000);
  }, []);

  return (
    <div className="page--wrapper">
      {loader ? <div className="fh5co-loader"></div> : null}
      <div id="page">
        <Header />
        <InfoView />
        <HistoryLine />
        <ServiceView />
        <SkillsView />
        <PortafolioView />
        <BlogView />
        <div class="gototop js-top">
          <a href="#" class="js-gotop">
            <i class="icon-arrow-up22"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
