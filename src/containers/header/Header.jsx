import React from 'react';
import enigma from '../../assets/logo.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Enigma Club: Where innovation meets collaboration.</h1>
      <p> Join us for hands-on learning, dynamic workshops, and a vibrant community of tech enthusiasts.</p>
    </div>

    <div className="gpt3__header-image">
      <img src={enigma} />
    </div>
  </div>
);

export default Header;
