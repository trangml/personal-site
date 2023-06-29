// utils/api.js
import fm from 'front-matter';

export const getBlogPosts = async () => {
  const response = await fetch('/data/blog/');
  const fileNames = await response.text();
  console.log(fileNames);

  const blogPosts = await Promise.all(
    fileNames.map(async (fileName) => {
      const files = await fetch(`/data/blog/${fileName}`);
      const fileContent = await files.text();
      const { attributes, body } = fm(fileContent);
      const blogPost = {
        id: fileName.replace(/\.md$/, ''), // Remove the '.md' extension from the file name
        title: attributes.title,
        body,
        date: attributes.date,
      };
      return blogPost;
    }),
  );

  return blogPosts;
};

export default getBlogPosts;
