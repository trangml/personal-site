import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../components/Blog/BlogPost';
import getBlogPosts from '../components/utils/api'; // Assuming you have a separate utility file for API functions
import Main from '../layouts/Main';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <Main title="Blog" description="Matthew Trang's blog">
      <article className="post markdown" id="blog">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
            <p>Here I attempt to present my thoughts in a coherent form</p>
          </div>
        </header>
        {blogPosts.map((blogPost) => (
          <article>
            <BlogPost key={blogPost.id} blogPost={blogPost} />
          </article>
        ))}
      </article>
    </Main>
  );
};

export default Blog;
