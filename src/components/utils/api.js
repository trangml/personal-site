// utils/api.js
import fm from 'front-matter';

// import raw from 'raw.macro';
// import path from 'path';

// const blogsDirectory = '../data/blog';
const fileName = 'thoughts_on_ethics.md';
// const fp = blogsDirectory + '/' + fileName;
const temp1 = await fetch(
  '/data/blog/thoughts_on_ethics.md',
);
const temp2 = await temp1.text();

const getBlogPosts = async () => {
  // const fileNames = fs.readdirSync(blogsDirectory);
  const posts = [];
  const { attributes, body } = fm(temp2);
  posts.push({
    id: fileName.replace(/\.md$/, ''), // Remove the '.md' extension from the file name
    title: attributes.title,
    body,
    date: attributes.date,
  });
  // for (const fileName of fileNames) {
  //   const filePath = path.join(blogsDirectory, fileName);
  //   // const fileContent = fs.readFileSync(filePath, 'utf8');
  //   const { data, content } = matter(fileContent);

  //   posts.push({
  //     id: fileName.replace(/\.md$/, ''), // Remove the '.md' extension from the file name
  //     title: data.title,
  //     content,
  //     date: data.date
  //   });
  // }

  return posts;
};

export default getBlogPosts;
