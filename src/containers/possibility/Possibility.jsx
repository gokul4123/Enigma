import React from 'react';
import banner from '../../assets/banner.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={banner} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Events to be held all through the year. Events include both Technical Events and Non-Technical. Entertaining Workshops and Immersive Activities.</p>
    </div>
  </div>
);

export default Possibility;
