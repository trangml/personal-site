/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'MIT Lincoln Laboratory',
    position: 'Autonomous Systems Engineer',
    url: 'https://ll.mit.edu',
    startDate: '2023-03-01',
    endDate: undefined,
    summary: 'Designed Autonomous Systems at MIT Lincoln Laboratory\'s Advanced Capabilities and Systems Group. Utilized 3D Scene Graphs for outdoor data to execute complex tasks on a Boston Dynamics SPOT Robot. Trained CLIP-based models for Automatic Target Recognition (ATR) and explored counter methods to zero-shot ATR techniques.',
    highlights: [
      'Designed Autonomous Systems at MIT Lincoln Laboratory, applying cutting-edge technologies and methodologies.',
      'Utilized 3D Scene Graphs to analyze outdoor data and successfully executed complex tasks on a Boston Dynamics SPOT Robot.',
      'Trained CLIP-based models for Automatic Target Recognition (ATR), contributing to advancements in the field.',
      'Explored innovative counter methods to zero-shot ATR techniques, enhancing the accuracy and reliability of ATR systems.',
    ],
  },
  {
    name: 'Heron Systems, A Shield AI Subsidiary',
    position: 'Machine Learning Engineer',
    url: 'https://shield.ai',
    startDate: '2019-12-01',
    endDate: '2022-08-01',
    summary: 'Served as a Machine Learning Engineer at Heron Systems, a subsidiary of Shield AI. Played a key role in training Reinforcement Learning (RL) agents for government defense contracts, focusing on transfer learning, trustworthy AI, and complex control systems. Developed RL testing environments to create generalized transfer learning algorithms for multiple testing environments with configurable difficulties.',
    highlights: [
      'Trained Reinforcement Learning (RL) agents for government defense contracts, incorporating transfer learning and ensuring trustworthy AI.',
      'Developed a RL testing environment with configurable difficulties, enabling the creation of generalized transfer learning algorithms.',
      'Created custom neural network modules to validate game balance for DARPA Gamebreaker, achieving a 90% accurate win probability classifier for Starcraft II.',
      'Devised novel reward schemes and neural networks for RL AI Fighter Jet Agents, leading to a 1st place finish in the DARPA ADT competition.',
    ],
  },
  {
    name: 'Virginia Tech ECE Department',
    position: 'Reinforcement Learning Researcher',
    url: 'https://vt.edu',
    startDate: '2021-12-01',
    endDate: '2022-12-01',
    summary: 'Conducted research on Multi-Agent Generalized Reinforcement Learning (RL) for Autonomous Systems at the Virginia Tech ECE Department. Utilized PyBullet to simulate collaborative systems and developed drone collaboration simulation environments along with a data processing pipeline for testing RL algorithms.',
    highlights: [
      'Researched Multi-Agent Generalized Reinforcement Learning (RL) for Autonomous Systems, contributing to advancements in the field.',
      'Utilized PyBullet to simulate collaborative systems, enabling the development of realistic testing environments.',
      'Created drone collaboration simulation environments and a data processing pipeline, facilitating rapid testing and evaluation of RL algorithms.',
    ],
  },
  {
    name: 'Virginia Tech ECE Department',
    position: 'Graduate Teaching Assistant',
    url: 'https://vt.edu',
    startDate: '2022-01-01',
    endDate: '2022-12-01',
    summary: 'Served as a Graduate Teaching Assistant at the Virginia Tech ECE Department. Collaborated with professors and TAs to develop comprehensive software design curriculum and projects. Taught subject matter and provided assistance to students in two classes, utilizing C++ and Qt.`',
    highlights: [
      'Collaborated with professors and TAs to develop a comprehensive software design curriculum and engaging projects.',
      'Taught subject matter and provided guidance to students in two classes, fostering their understanding of software development concepts.',
      'Utilized C++ and Qt to facilitate hands-on learning and practical application of software design principles.',
    ],
  },
  {
    name: 'PowerHAUS, Virginia Tech ECE Department',
    position: 'Senior Design Team Member',
    url: 'https://www.futurehaus.tech',
    startDate: '2021-02-01',
    endDate: '2021-12-01',
    summary: 'Contributed to the PowerHAUS senior design team at the Virginia Tech ECE Department. Designed a TF2 object detection image classifier and a mobile app for controlling smart devices in a smarthome environment with limited data. Validated the safety and functionality of power electronics cartridges for high-voltage systems, such as solar panel arrays and inverters, prior to deployment at the Dubai Expo 2022.',
    highlights: [
      'Designed a TF2 object detection image classifier and a mobile app, enabling intuitive control of smart devices in a smarthome environment.',
      'Implemented a novel approach to overcome limited data availability, enhancing the accuracy and reliability of the image classifier.',
      'Validated the safety and functionality of power electronics cartridges, ensuring the reliability of high-voltage systems for deployment at the Dubai Expo 2022.',
    ],
  },
  {
    name: 'Collins Aerospace',
    position: 'Embedded UAV Software Engineering Intern',
    url: 'https://www.collinsaerospace.com',
    startDate: '2020-05-01',
    endDate: '2020-08-01',
    summary: 'Served as an Embedded UAV Software Engineering Intern at Collins Aerospace. Programmed a multi-camera visual navigation pipeline for a GPS-denied UAV using MATLAB Simulink and C++. Collaborated remotely with a team of interns to demonstrate vision-based autonomous landing with fiducial markers.',
    highlights: [
      'Developed a multi-camera visual navigation pipeline for a GPS-denied UAV, enhancing its autonomous capabilities.',
      'Utilized MATLAB Simulink and C++ to implement robust and efficient algorithms for real-time visual navigation.',
      'Collaborated remotely with a team of interns to successfully demonstrate vision-based autonomous landing using fiducial markers.',
    ],
  },
  {
    name: 'Team Juvo, Virginia Tech',
    position: 'Design Lead and Upperclassman Mentor',
    url: 'https://www.sourceamerica.org/newsroom/press-releases/virginia-tech-takes-first-place-in-sourceamerica-2019-college-design',
    startDate: '2018-09-01',
    endDate: '2020-08-01',
    summary: 'Served as the Design Lead and Upperclassman Mentor for Team Juvo at Virginia Tech. Led the design, prototyping, and 3D printing of a Wearable Mouse Band assistive device to help a disabled student use a computer. Significantly improved the computer navigation speeds and accuracy for the user, positively impacting their academic performance.',
    highlights: [
      'Led the design, prototyping, and 3D printing of a Wearable Mouse Band assistive device, addressing the needs of a disabled student.',
      'Implemented innovative solutions to improve computer navigation speeds by 30% and click accuracy by 80%, enhancing the user\'s productivity and accessibility.',
      'Mentored and supported underclassmen team members, fostering their growth and development as engineers and designers.',
    ],
  },
];

export default work;
