import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/headshot_1.jpg`} alt="" />
      </Link>
      <header>
        <h2>Matthew Trang</h2>
        <p><a href="mailto:mattluutrang@gmail.com">mattluutrang@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Matthew.
        I am a Computer Engineering graduate student at <a href="https://ece.vt.edu/">Virginia Tech</a> studying Machine Learning.
        I am currently working as a Machine Learning Engineer at <a href="https://shield.ai/">Shield AI</a>, developing AI Fighter Pilots using Reinforcement Learning.
        Previously, I&apos;ve been at <a href="https://collinsaerospace.com">Collins Aerospace</a>
        , <a href="https://moog.com">Moog</a>
        , <a href="https://vsgi.gmu.edu">Virginia Serious Games Institute</a>
        , <a href="https://gmu.edu">George Mason University</a>
        , and  <a href="https://naturalhistory.si.edu/">the Smithsonian Institute</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Matthew Trang <Link to="/">trangml.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
