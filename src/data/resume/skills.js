// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Machine Learning, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git/Subversion',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['Python', 'Machine Learning'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['Python', 'Machine Learning'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Machine Learning', 'Python', 'Machine Learning', 'Robotics'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages', 'Robotics'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Simulink',
    competency: 3,
    category: ['Languages', 'Robotics'],
  },
  {
    title: 'Data Visualization (Matplotlib, Seaborn, Plotly)',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages', 'Robotics'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: '3D Modeling (Autodesk Inventor, SolidWorks, Blender)',
    competency: 4,
    category: ['Tools', 'Robotics'],
  },
  {
    title: 'Robot Operating System (ROS)',
    competency: 3,
    category: ['Tools', 'Robotics'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Python', 'Machine Learning', 'Robotics'],
  },
  {
    title: 'Stable Baselines/RLLib',
    competency: 4,
    category: ['Python', 'Machine Learning'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
// const colors = [
//   '#6968b3',
//   '#37b1f5',
//   '#40494e',
//   '#515dd4',
//   '#e47272',
//   '#cc7b94',
//   '#3896e2',
//   '#c3423f',
//   '#d75858',
//   '#747fff',
//   '#64cb7b',
// ];
const colors = [
  '#f5bde6',
  '#c6a0f6',
  '#ee99a0',
  '#a6da95',
  '#8bd5ca', // teal
  '#89dceb',
  '#f5a97f',
  '#eed49f',
  '#f4dbd6',
  '#f0c6c6',
  '#ed8796',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
