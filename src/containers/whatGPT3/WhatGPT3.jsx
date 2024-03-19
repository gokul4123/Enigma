/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="cont_main">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="ABOUT ENIGMA" text="" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Enigma stands as the pulsating core of JAIN FET's Computer Science and Engineering (CSE) Department, embodying a commitment to academic excellence that serves as our bedrock</h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Our Priority" text="Beyond mere scholarly pursuits, we prioritize the holistic development of our students, amplifying their social skills and fostering a growth mindset" />
        <Feature title="Talent Recognition" text="At Enigma, we believe in spotlighting and nurturing a diverse array of talents, recognizing that true brilliance emerges from well-rounded individuals." />
        <Feature title="Skill Analysis" text="By joining us, students become part of a community dedicated to forging a smarter, more vibrant future, where innovation, creativity, and collaboration flourish." />
      </div>
    </div>
  </div>
);

export default WhatGPT3;
