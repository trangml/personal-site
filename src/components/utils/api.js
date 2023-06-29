// utils/api.js
import fm from 'front-matter';
import blogFileNames from '../../data/blog/blogFileNames.json';

const getBlogPosts = async () => {
  const blogsDirectory = '../data/blog';

  const fetchPromises = blogFileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map(async (fileName) => {
      const filePath = `${blogsDirectory}/${fileName}`;
      const fileResponse = await fetch(filePath);
      const fileContent = await fileResponse.text();

      const { attributes, body } = fm(fileContent);

      return {
        id: fileName.replace(/\.md$/, ''),
        title: attributes.title,
        body,
        date: attributes.date,
      };
    });

  const posts = await Promise.all(fetchPromises);

  return posts;
};

export default getBlogPosts;
