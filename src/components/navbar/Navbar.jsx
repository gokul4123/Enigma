import React from 'react';

// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => (
  <div className="gpt3__navbar">
    <div className="gpt3__navbar-links">
      {/* <div className="gpt3__navbar-links_logo">
        <img src={logo} />
</div> */}
      <div className="gpt3__navbar-links_container">
        <p><a href="#home">HOME</a></p>
        <p><a href="#wgpt3">ABOUT ENIGMA</a></p>
        <p><a href="#features">EVENTS</a></p>
        <p><a href="#blog">MEMBERS</a></p>
        <p><a href="#possibility">FUTURE</a></p>
      </div>
    </div>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.gpt3__navbar');
  const top = navbar.offsetTop;
  function stickynavbar() {
    if (window.scrollY >= top) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }
  window.addEventListener('scroll', stickynavbar);
});

export default Navbar;
