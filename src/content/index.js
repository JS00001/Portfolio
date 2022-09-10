import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from 'react-icons/ri'

export default {
  Hero: {
    title: 'Software Developer',
    subtitle:
      'Software developer with a passion for innovation. Collaborator, communicator, and continuous learner with an interest in entrepreneurship. ',
  },
  Process: {
    subject: 'How I work',
    title: 'Design Process',
    subtitle:
      'Design applications with a focus on user experience and usability. How can I help to improve the user experience of your product?',
    strategies: [
      {
        title: 'Planning',
        description:
          'Before beginning any development, I work with other collaborators to create a plan for the project. This plan includes developing a specialized team, timeline, budget, and features for the MVP.',
      },
      {
        title: 'Prototyping',
        description:
          'After the plan is complete, I work with the team to create a prototype of the product. This prototype is used to test the functionality of the product and to determine the best way to implement the MVP.',
      },
      {
        title: 'Development',
        description:
          'After the prototype is complete, I work with the team to develop the product. This includes creating the user interface, developing the backend, and integrating the frontend with the backend.',
      },
      {
        title: 'Testing',
        description:
          'After the product is complete, I work with the team to extensively test the product. This includes creating a test plan, writing tests, and running tests. I also work with the team to ensure the product is ready for release.',
      },
    ],
  },
  Projects: {
    subject: 'Some of My Work',
    title: 'Previous Projects',
  },
  About: {
    subject: 'Nice to meet you',
    title: "Hi there, I'm Jack",
    subtitle:
      'My name is Jack Senyitko. I am a Frontend and Backend developer based in the United States.',
    footer: 'Design inspired by: https://danielkorpai.com',
    paragraphs: [
      "I am currently looking for an internship or entry-level job in an environment that can further the company's mission along with my career as a software developer.",
      'When I am not working on freelance projects, I am usually spending my time learning new technologies and exploring new ideas. I am a developer with a passion for learning and problem solving.',
      'I am a self-motivated individual who is always looking for new challenges and opportunities to grow as a developer. I am a team player who is always willing to learn new technologies and improve my skills.',
      'If you would like to know more about me, please feel free to contact me.',
      '- Jack Senyitko',
    ],
    socials: [
      {
        icon: <RiInstagramLine size={28} />,
        link: 'https://www.instagram.com/jack_senyitko/',
        text: 'Instagram',
      },
      {
        icon: <RiLinkedinBoxFill size={28} />,
        link: 'https://www.linkedin.com/in/jack-senyitko/',
        text: 'LinkedIn',
      },
      {
        icon: <RiGithubFill size={28} />,
        link: 'https://github.com/JS00001',
        text: 'Github',
      },
    ],
  },
  Contact: {
    subject: 'How can I help you?',
    title: "Let's Get in Contact",
    subtitle:
      "If you have an employment opportunity, or just want to chat, feel free to get in touch. I'm always looking for new opportunities and ways to grow. My average time to respond is less than a day. I look forward to hearing from you.",
  },
  Navigation: {
    items: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/#about',
      },
      {
        text: 'Projects',
        link: '/#projects',
      },
      {
        text: 'Resume',
        link: 'https://docs.google.com/document/d/1dirJV-LcQimD1P7tUs7pWKG-JbILDkChkWZlfocgsFg/edit?usp=sharing',
      },
    ],
  },
}
