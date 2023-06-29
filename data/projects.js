// TODO Add a couple lines about each project
const data = [
  {
    title: 'Multi-Task Reinforcement Learning: Single-Agent to Multi-Agent Systems',
    subtitle: 'M.S. Thesis at Virginia Tech',
    link: 'https://vtechworks.lib.vt.edu/handle/10919/113085',
    image: '/images/projects/multi-task_drones.png',
    date: '2021-10-05',
    desc:
      'Thesis work on multi-task reinforcement learning. Used novel multi-task incremental learning algorithm'
      + 'IL-SOAR (Incremental Learning with Second-Order Approximation Regularization) to mitigate some of the effects of catastrophic forgetting.',
  },
  {
    title: 'DARPA Gamebreaker',
    subtitle: 'Heron Systems Gamebreaker AI Exploration Program breaks the game',
    link: 'https://www.youtube.com/watch?v=tt5nxCi423U',
    image: '/images/projects/heron_starcraft.gif',
    date: '2021-10-05',
    desc:
      'Used machine learning to quantitatively assess game balance in Starcraft II to identify parameters which control balance. '
      + 'Developed and analyzed massive datasets for machine learning using SC2, and programmed an interactive dashboard. '
      + 'Trained a model with accurately predicted the win probabilities using only army compositions. ',
  },
  {
    title: 'DARPA ADT',
    subtitle: 'Heron Systems AI Fighter Jet Agent destroys the competition',
    link: 'https://www.youtube.com/watch?v=IIdE5XFTA88',
    image: '/images/projects/heron_adt.jpg',
    date: '2020-06-26',
    desc:
      'Developed AI fighter jet technology that beat out other competitors and an elite Air Force pilot. '
      + 'Contributed novel agents and reward schemes for training our agent in a RL league. '
      + 'Winner of the DARPA ADT competition. ',
  },
  {
    title: 'The Clicker Band',
    subtitle: 'An Assistive Device made to help a wheelchair-bound student. 1st Place, SourceAmerica Competiton',
    link: 'https://www.youtube.com/watch?v=O4sNfvVjaj8&t=3s',
    image: '/images/projects/winners_source.jpg',
    date: '2019-06-26',
    desc:
      'Developed a wearable assistive technology device which allowed helped a student with disability use his computer. '
      + 'Winner of the SourceAmerica Design Challenge with ~$5000 in prize money. ',
  },
  // {
  //   title: 'SmartSleeve',
  //   subtitle: 'Wearable biomechanical and physiology monitor for
  // injury prevention and rehabilitation',
  //   image: '/images/projects/smartsleeve_1.jpg',
  //   link: 'https://patents.google.com/patent/US11284838B2/en?inventor=matthew+trang&oq=matthew+trang',
  //   date: '2018-07-20',
  //   desc:
  //     'Built as part of the Aspiring Scientists Summer Internship Program (ASSIP) at GMU. '
  //     + 'Provided a non-invasive way to monitor a patient during a rehabilitation period. '
  //     + 'Patent was awarded March 29, 2022',
  // },
];

export default data;
