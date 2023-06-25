// BlogPost.js
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ blogPost }) => (
  <div className="blog-post">
    <h3>{blogPost.title}</h3>
    {/* <p>{blogPost.date.toString()}</p>
    <div className="body">{blogPost.body}</div> */}
    <ReactMarkdown
      source={blogPost.body}
      // renderers={{
      //   Link: LinkRenderer,
      // }}
      escapeHtml={false}
    />
  </div>
);

//   <div className="blog-container">
//     <article className="mini-post">
//       <header>
//         <h3><a href={data.link} target="_blank" rel="noopener noreferrer">{data.title}</a></h3>
//       </header>
//       <a href={data.link} target="_blank" rel="noopener noreferrer" className="image">
//         <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
//       </a>
//       <div className="description">
//         <p>{data.desc}</p>
//       </div>
//     </article>

BlogPost.propTypes = {
  blogPost: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default BlogPost;
