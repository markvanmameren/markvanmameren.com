import {
  faAngular,
  faCss3Alt,
  faGit,
  faGoogle,
  faHtml5,
  faJs,
  faMicrosoft,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBoxArchive,
  faDatabase,
  faMicroscope,
  faMobileScreenButton,
  faRotate,
} from '@fortawesome/free-solid-svg-icons';
import { IResumeRow } from '../../interfaces/resume-row.interface';
import { IResumeSkill } from '../../interfaces/resume-skill.interface';

export const employers: IResumeRow[] = [
  {
    logo: {
      src: 'assets/images/workhistory/uwv.png',
      alt: 'UWV',
    },
    startDate: new Date(2023, 3),
    title: 'Front-end Developer',
    institution: 'UWV',
    description:
      'I started at the UWV as an Angular developer for a very innovative project, which had as a goal to merge over 200 UWV websites into a single Angular application. The UWV always had separate websites where users could, for example, sick reports can be submitted or benefits can be applied for. In the past it used to be a major investment to maintain all these packages, but with this new system these sites can be realtime generated with a simple JSON file. My job description is mainly building new components, unit testing and add NgRX functionality. In addition, I’m building a website builder that business analists can use to create or edit websites using a drag & drop system, which can export the necessary JSON file.',
  },
  {
    logo: {
      src: 'assets/images/workhistory/divotion.png',
      alt: 'Divotion',
    },
    startDate: new Date(2023, 11),
    title: 'Front-end Developer',
    institution: 'Divotion',
    description:
      'In december 2023, I started as a front-end developer at IT consultancy Divotion in Nieuwegein. I continued my employment as a front-end developer for UWV to start work on my own Angular project within that organisation, called the KIB-builder.',
  },
  {
    logo: {
      src: 'assets/images/workhistory/kvk.png',
      alt: 'Chamber of Commerce',
    },
    startDate: new Date(2022, 9),
    endDate: new Date(2022, 11),
    title: 'Front-end Developer',
    institution: 'Chamber of Commerce',
    description:
      'For Chamber of Commerce I worked within a DevOps team as a front-end developer in Angular and Typescript I worked on a platform where big corporates can create challenges that entrepreneurs can offer their services for. My main task was programming Angular components and their corresponding unit tests. I also helped updating the entire project to the latest version of Angular, which involved rewriting part of the codebase as well as all the end-to-end tests.',
  },
  {
    logo: {
      src: 'assets/images/workhistory/sogeti.png',
      alt: 'Sogeti',
    },
    startDate: new Date(2022, 6),
    endDate: new Date(2023, 11, 31),
    title: 'Front-end Developer',
    institution: 'Sogeti',
    description:
      'In June 2022 I started in the position of front-end developer at Sogeti Netherlands. Here I followed a large selection of courses in subjects like Agile/Scrum, Cloud Computing, Angular, HTML, CSS, Javascript, Typescript and Git. In addition, I helped creating a mobile app for iOS and Android to help new employees in the onboarding process. This app was created in React Native in combination with Typescript. ',
  },
  {
    logo: {
      src: 'assets/images/workhistory/manglemoose.png',
      alt: 'Manglemoose',
    },
    startDate: new Date(2016, 1),
    endDate: new Date(2022, 6),
    title: 'Front-end Developer & Owner',
    institution: 'Manglemoose',
    description:
      'In 2016 I started my own company together with 5 other founders. This company offered audio-postproduction for media-companies, like video-production houses, advertising agencies and game developers. Leading a company taught me many lessons, like sales, finance and creating a business model. I also gained a lot of experience building websites, like www.manglemoose.com and www.voiceoveropnames.nl, both of which I created myself from scratch. While programming and maintaining websites daily, I learned a lot about Javascript, PHP, WordPress, and HTML/CSS. The end goal always was to create a responsive website that would function on any device and browser, while the back end would stay easily maintainable by my colleagues.',
  },
  {
    logo: {
      src: 'assets/images/workhistory/dondiablo.png',
      alt: 'Don Diablo',
    },
    startDate: new Date(2014, 10),
    endDate: new Date(2015, 9),
    title: 'Front-end Developer & Tourmanager',
    institution: 'Don Diablo',
    description:
      'For famous Dutch dj Don Diablo I was a tour manager for a year. My main job was to organize performances and their corresponding communication regarding equipment, planning and transport. This also meant that I had to be present with all performances and thus travelled around the world almost daily. In addition to tour management, I also created his web shop for merchandise. My assignment hereby was to realize not only the site itself, but also link it to stock management and payment systems like PayPal and Mastercard. This website is still online and visitable at shop.dondiablo.com',
  },
];

export const schools: IResumeRow[] = [
  {
    logo: {
      src: 'assets/images/education/ohio.jpg',
      alt: 'Ohio University',
    },
    startDate: new Date(2022, 7),
    endDate: new Date(2022, 8),
    title: 'Ohio Business Course',
    institution: 'Ohio Business Course',
  },
  {
    logo: {
      src: 'assets/images/education/hku.png',
      alt: 'Utrecht School of Arts',
    },
    startDate: new Date(2012, 9),
    endDate: new Date(2016, 8),
    title: 'Composition & Music Technology',
    institution: 'Utrecht School of Arts',
  },
  {
    logo: {
      src: 'assets/images/education/vu.svg',
      alt: 'VU Amsterdam',
    },
    startDate: new Date(2010, 9),
    endDate: new Date(2011, 4),
    title: 'Minor Entrepreneurship',
    institution: 'VU Amsterdam',
  },
  {
    logo: {
      src: 'assets/images/education/vu.svg',
      alt: 'VU Amsterdam',
    },
    startDate: new Date(2008, 9),
    endDate: new Date(2011, 8),
    title: 'Public Administration & Organisation',
    institution: 'VU Amsterdam',
  },
];

export const certificates: IResumeRow[] = [
  {
    logo: {
      src: 'assets/images/certificates/ibm.png',
      alt: 'IBM',
    },
    startDate: new Date(2023, 11),
    title: 'Front-end Developer',
    institution: 'IBM',
  },
  {
    logo: {
      src: 'assets/images/certificates/ibm.png',
      alt: 'IBM',
    },
    startDate: new Date(2023, 11),
    title: 'Developing Front-End Apps with React',
    institution: 'IBM',
  },
  {
    logo: {
      src: 'assets/images/certificates/ibm.png',
      alt: 'IBM',
    },
    startDate: new Date(2023, 11),
    title: 'Developing Cloud Native Applications',
    institution: 'IBM',
  },
  {
    logo: {
      src: 'assets/images/certificates/meta.png',
      alt: 'Meta',
    },
    startDate: new Date(2023, 11),
    title: 'Front-end Developer',
    institution: 'Meta',
  },
  {
    logo: {
      src: 'assets/images/certificates/psd1.png',
      alt: 'Professional Scrum Developer 1',
    },
    startDate: new Date(2022, 11),
    title: 'Professional Scrum Developer 1',
    institution: 'Scrum',
  },
  {
    logo: {
      src: 'assets/images/certificates/psm1.png',
      alt: 'Professional Scrum Master 1',
    },
    startDate: new Date(2023, 6),
    title: 'Professional Scrum Master 1',
    institution: 'Scrum',
  },
  {
    logo: {
      src: 'assets/images/certificates/w3c.png',
      alt: 'W3C',
    },
    startDate: new Date(2023, 6),
    title: 'Web Accessibility',
    institution: 'W3C',
  },
  {
    logo: {
      src: 'assets/images/certificates/coursera.webp',
      alt: 'Coursera',
    },
    startDate: new Date(2023, 1),
    title: 'Front-end Javascript Frameworks - Angular',
    institution: 'Coursera',
  },
  {
    logo: {
      src: 'assets/images/certificates/az900.png',
      alt: 'Microsoft AZ-900',
    },
    startDate: new Date(2023, 6),
    title: 'Azure AZ-900',
    institution: 'Microsoft',
  },
  {
    logo: {
      src: 'assets/images/workhistory/sogeti.png',
      alt: 'Sogeti',
    },
    startDate: new Date(2023, 9),
    title: 'Angular Foundation',
    institution: 'Sogeti',
  },
  {
    logo: {
      src: 'assets/images/workhistory/sogeti.png',
      alt: 'Sogeti',
    },
    startDate: new Date(2023, 7),
    title: 'Front-end Learning Track',
    institution: 'Sogeti',
  },
];

export const skills: IResumeSkill[] = [
  { icon: faAngular, title: 'Angular' },
  { icon: faDatabase, title: 'NgRx' },
  { icon: faBoxArchive, title: 'RxJs' },
  { icon: faJs, title: 'JavaScript' },
  { icon: faJs, title: 'Typescript' },
  { icon: faHtml5, title: 'HTML' },
  { icon: faCss3Alt, title: 'CSS' },
  { icon: faSass, title: 'Sass' },
  { icon: faMicroscope, title: 'Unit Testing' },
  { icon: faGit, title: 'Git' },
  { icon: faMicrosoft, title: 'VS Code' },
  { icon: faMobileScreenButton, title: 'Responsiveness' },
  { icon: faGoogle, title: 'SEO / SEA' },
  { icon: faRotate, title: 'Agile / Scrum' },
];
