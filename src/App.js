import React, { Suspense, lazy } from 'react';
// import TagManager from 'react-gtm-module';
import {
  BrowserRouter,
  Route, Routes,
} from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

// const tagManagerArgs = {
//   gtmId: 'G-9FRJY3ZWZG',
// };

// TagManager.initialize(tagManagerArgs);

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
// const Blog = lazy(() => import('./pages/Blog'));
const ExternalLink = () => {
  // Use window.location.href to navigate to an external URL
  // Replace the URL with your desired external link
  window.location.replace('https://www.blog.trangml.com');
  // Or use window.open() to open the link in a new tab/window
  // window.open('https://www.example.com', '_blank');
  // Note: You can choose either window.location.href or window.open() based on your requirements
  return null;
};
const isBrowser = typeof window !== 'undefined';
const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/blog" element={<Navigate to="http://www.blog.trangml.com" replace />} /> */}
        {isBrowser && <Route path="/blog" element={<ExternalLink />} />}
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
