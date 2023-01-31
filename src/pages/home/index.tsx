import React from 'react';

import './styles.css';
import News from "../../widgets/news";

const HomePage = () => {

  return (
    <section className="home-page">
      <div className="home-page__title">
        <h2>Hello, this is the test project :)</h2>
        <h3>Here you can find example of popup window with input component, couple pages and a very nice dropdown with data fetching</h3>
        <h3>Also you can run storybook to check list of available components</h3>
      </div>

      <div className="home-page__content">
        <News />
      </div>
    </section>
  );
}

export default HomePage;
