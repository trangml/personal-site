import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Matthew Trang's personal website. MIT Lincoln Laboratory. Virginia Tech ECE Graduate. "
      + 'Reinforcement Learning and Robotics enthusiast, avid learner.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A personal portfolio for the work I&apos;ve done.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resum&eacute;</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/trangml/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
