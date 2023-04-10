import { FaUniversity } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
export const projectExperience = [
  {
    name: "Kao Yuan University",
    Skills: "Mechatronic Engineering 2019-23",
    Description:[
      "Proficiency in computer-aided design (CAD) software such as AutoCAD, SolidWorks, and CATIA ",
      "Understanding of robotics and automation, including kinematics, dynamics, and programming ",
      "Experience working with microcontrollers such as Arduino, including programming, circuit design, and interfacing with sensors and actuators ",
      "Proficiency in computer numerical control (CNC) machining, including knowledge of G-code programming and machine operation"
    ],
    icon: FaUniversity,
    bg: "#286F6C",
  },
  {
    name: "Asian Institute of Computer Studies",
    Skills: "Information Communication Technology 2017-19",
    Description:"Proficient in programming languages including Java, C++, C#, and Arduino, with experience designing and programming microcontrollers. Skilled in database management systems, particularly Oracle. Knowledgeable in information and communication technology concepts and principles.",
    icon: FaUniversity,
    bg: "#286F6C",
  },

{
  name: "Zero to Mastery Online Bootcamp",
  Skills: "The Complete Web Developer in 2023",
  Description:"Completed 'The Complete Web Developer in 2023: Zero to Mastery' online boot camp, gaining comprehensive knowledge and hands-on experience in web development. Proficient in front-end technologies including HTML, CSS, and JavaScript, as well as popular frameworks such as React and Angular. Skilled in back-end development using Node.js and Express, with knowledge of database management systems such as MongoDB.Familiar with best practices in web development.",
  icon: MdOutlineComputer,
  bg: "#F26440",
},
];

export const AboutMe = [
  "Hello, my name is Dan in english and 狄亞志 in chinese. When i was a child, I stumbled upon the inspect element button in my browser, and that was the moment that sparked my passion for software. In 2017, I enrolled in a program in Information Communication Technology, which was my first formal education in software. Which Led me to pursue a degree in Mechatronic Engineering in college, Since then I've been self-learning web development, honing my skills and gaining experience in this exciting field..",
  "I am dedicated to keeping myself up-to-date with the latest trends and techniques in software development. I strongly believe that my curiosity, creativity, and unwavering dedication will enable me to achieve my goals in this field. Thank you for taking the time to read about my journey in software development,I am excited to collaborate with all of you soon!",
];

export const workExp = [
  {
    place: "長亨精密股份有限公司",
    tenure: "4th year 2nd semester Internship",
    role: "Intern Machine Operator",
    detail:
      "Operated pressing machines for an aeronautical company, ensuring efficient and accurate production of aerospace components through machine setup, maintenance, and quality control",
  },
  {
    place: "ZOENG CHANG INDUSTRY CO., LTD. ",
    tenure: "4th year first semester Internship",
    role: "Intern CNC operator",
    detail:
      "Operated CNC machines for automobile companies, ensuring the efficient production of high-quality automotive parts through machine setup, monitoring, and maintenance. Responsibilities also included selecting appropriate tools and materials, keeping production records, and collaborating with team members to optimize workflow.",
  },
  {
    place: "Hosintex",
    tenure: "2019 - 2020",
    role: "Quality Control Inspector",
    detail:
      "Conducted inspections and testing as a Quality Control Inspector to ensure that finished products met the required quality standards. Identified and reported any defects or issues, communicated with team members to resolve problems, and maintained accurate records of inspection results. Collaborated with other departments to improve production processes and ensure overall product quality.",
  },
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
