import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Courses from '../components/Resume/Courses';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import References from '../components/Resume/References';
import Skills from '../components/Resume/Skills';
import PDF from '../components/Resume/PDF';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import { categories, skills } from '../data/resume/skills';
import work from '../data/resume/work';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
  PDF: () => <PDF />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Matthew Trang's Resume. MITLL, Shield AI, Collins Aerospace, Virginia Tech, Moog."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
