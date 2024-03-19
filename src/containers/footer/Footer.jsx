import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Step Into The World Of ENIGMA</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <pre><p><FontAwesomeIcon icon={faInstagram} /> <a href="https://www.instagram.com/ju_enigma?utm_source=qr&igsh=N3pyZm9xZnB2cDc5">INSTAGRAM </a>    </p></pre>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>085-132567</p>
        <p>enigmaclub.jainuniversity.ac.in</p>
      </div>
    </div>

  </div>
);

export default Footer;
