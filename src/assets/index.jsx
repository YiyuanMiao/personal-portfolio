// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedinLineIcon from "remixicon-react/LinkedinLineIcon";
import BilibiliLineIcon from "remixicon-react/BilibiliLineIcon";
import NeteaseCloudMusicLineIcon from "remixicon-react/NeteaseCloudMusicLineIcon";

/* eslint-disable react/jsx-key */
export const heroIcons = [
  {
    icon: <InstagramLineIcon />,
    url: "https://www.instagram.com/cicimiao1?igsh=MWpwaTAzdHNrdG10Mw%3D%3D&utm_source=qr",
  },
  { icon: <NeteaseCloudMusicLineIcon />, url: "https://163cn.tv/ZxO2BG5" },
  {
    icon: <LinkedinLineIcon />,
    url: " http://linkedin.com/in/cici-miao-0b7b8132a",
  },
  { icon: <BilibiliLineIcon />, url: "https://b23.tv/s3QOQm4" },
  { icon: <GithubLineIcon />, url: "https://github.com/YiyuanMiao" },
];

// About Me

import AwardLineIcon from "remixicon-react/AwardLineIcon";

import CodeBoxLineIcon from "remixicon-react/CodeBoxLineIcon";
import StackLineIcon from "remixicon-react/StackLineIcon";
import BookLineIcon from "remixicon-react/BookLineIcon";

export const aboutData = [
  {
    title: "Undergrad GPA",
    amount: 3.97,
    // GPA -> Graduation Cap
    icon: <AwardLineIcon />,
  },
  {
    title: "LeetCode Solved",
    amount: "150+",
    // LeetCode -> Code Box
    icon: <CodeBoxLineIcon />,
  },
  {
    title: "Tech Stack",
    amount: "10+",
    // Tech Stack -> Stack
    icon: <StackLineIcon />,
  },
  {
    title: "Course Projects",
    amount: "5+",
    // Projects -> Book
    icon: <BookLineIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText = (
  <div>
    <p>
      Hello! I’m <span className="font-bold">Cici (Yiyuan) Miao</span>.
    </p>

    <p>
      I am currently a Master’s student in Computer and Information Technology
      (MCIT) at the{" "}
      <span className="font-bold">University of Pennsylvania</span>.
    </p>

    <p>
      My path to engineering was unconventional. Originally an English major and
      Econ & Finance minor at{" "}
      <span className="font-bold">Tsinghua University</span> (with an exchange
      at <span className="font-bold">Cornell</span>), I discovered my passion
      for technology when I wrote C codes to help classmates memorize
      vocabulary, as well as applying algorithms in Cornell Mathematical
      Modeling Contest. This interest solidified during my time as a Data
      Analytics intern at <span className="font-bold">DiDi</span>, where I
      realized I preferred the creativity of building software over the
      repetition of traditional auditing & IBD work.
    </p>

    <p>
      Beyond the screen, I am a creative at heart—an award-winning
      singer-songwriter in Tsinghua Singing Contest and former choir section
      leader.
    </p>

    <p>
      I am now fully transitioning into a career as a{" "}
      <span className="font-bold">Software Development Engineer (SDE)</span>. I
      aim to leverage my diverse background to build impactful solutions.
      Meanwhile, I have a particular interest in AI for translation and music
      generation, which may become the future path I pursue.
    </p>
  </div>
);

//" Hi, I'm Nick, a web developer & designer. I blend the technical  skills of web development with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites, while also using design tools like Photoshop and Figma to create visually appealing and user-friendly  interfaces. My role allows me to ensure that websites not only work well but also look great and provide an excellent user experience.";
// End of About Me

// Experience
export const experienceData = [
  {
    year: 2021,
    title: "High School Graduation & Univeristy Entrance",
    education: [
      "High School Diploma: Shanghai Foreign Language School Affiliated to SISU, China",
      "University Admission: Tsinghua University",
    ],
    experience: [
      "Admitted to Tsinghua University via guaranteed admission, ranking 1st in the grade and 8th nationwide in the qualifying exam.",
      "Third Prize in Technology Innovation Contest: Utilized the Arduino platform for microcontroller development, designing a sitting posture adjustment warning device aimed at the prevention of scoliosis.",
      "Composed graduation song, gaining 8000+ plays on NetEase Music.",
    ],
  },
  {
    year: 2023,
    title: "Exchange Program",
    education:
      "Cornell Univeristy Exchange Program: Enroll in a one-semester exchange program at Cornell.",
    experience: [
      "Courses accomplished: Applied Econometrics, Intermediate Microeconomic Theory, Mathematical Modeling, Introduction to Ordinary Differential Equations, Short Course in Python",
      "Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.",
    ],
  },
  {
    year: 2024,
    title: "Intern & Knowledge Expansion",
    education: "Tsinghua Univeristy",
    experience: [
      "Data Analysis Internship at Didi: Utilized knowledge of statistics and coding to provide business analysts with information through examining observational study models; Conducted group seminars on Observational Studies",
      "Online Coursework: UCLA: Machine Learning; UCB: Introduction to SQL, Multivariable Calculus",
    ],
  },
  {
    year: 2025,
    title: "Entering UPenn MCIT",
    education: [
      "Graduation from Tsinghua University",
      "Admitted into UPenn MCIT",
    ],
    experience: [
      "Finished Java, Computing Systems, and Discrete Maths courses with a total GPA of 3.9.",
    ],
  },
];

// Skills
export const skillsData = [
  {
    name: "Java",
    icon: "/skills/java.png",
  },
  {
    name: "SpringBoot",
    icon: "/skills/springBoot.png",
  },
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "AI",
    icon: "/skills/ai.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
  {
    name: "Python",
    icon: "/skills/python.png",
  },
  {
    name: "PostgreSQL",
    icon: "/skills/postgreSQL.png",
  },
];

// Photos
export const photoData = [
  {
    photo: "/photoAlbum/thu_gate.jpg",
    text: "Grad Pics at Tsinghua University",
  },
  {
    photo: "/photoAlbum/huludao.JPG",
    text: "Self-driving Tour to HuLuDao, LiaoNing Province, China",
  },
  {
    photo: "/photoAlbum/sand.JPG",
    text: "Self-driving Tour to Echo Sand Mountain, GanSu Province, China",
  },
  {
    photo: "/photoAlbum/colorful_pond.JPG",
    text: "Self-driving Tour to GanSu Province, China",
  },
  {
    photo: "/photoAlbum/elegant.JPG",
    text: "Vintage Chinese Style Portrait",
  },
  {
    photo: "/photoAlbum/song_contest.PNG",
    text: "THU Original Song Contest",
  },
];
// Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const reviewsData = [
  {
    image: "/reviews/client-4.png",
    name: "Mark T., Freelance Graphic Designer",
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-2.png",
    name: "Sarah B., E-commerce Store Owner",
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-3.png",
    name: "Emily R., CEO of Tech Startup",
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client-1.png",
    name: "Bob W., Lifestyle Blogger",
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client-5.png",
    name: "David H., Director of Non-Profit Organization",
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1],
  },
];

// Projects
export const projectsData = [
  {
    name: "SparkleGrove.com",
    desc: "A lifestyle blog featuring DIY crafts, home decor ideas, and inspiration for creating a cozy and stylish living space.",
    url: "/projects/image-1.jpg",
    tech: ["Figma", "Photoshop", "HTML"],
  },
  {
    name: "TechTrekker.net",
    desc: "A technology news and review site covering the latest gadgets, software updates, and trends in the tech industry.",
    url: "/projects/image-2.jpg",
    tech: ["Figma", "Photoshop"],
  },
  {
    name: "CozyNestHomes.org",
    desc: "A resource for homeowners and renters alike, offering tips on interior design, home improvement projects, and sustainable living practices.",
    url: "/projects/image-3.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "WanderLuxeTravels.co",
    desc: "A travel website that provides luxury travel guides, destination reviews, and tips for planning unforgettable vacations.",
    url: "/projects/image-4.jpg",
    tech: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
  },
  {
    name: "ByteBoosters.io",
    desc: "A tech startup specializing in software development, offering innovative solutions and services for businesses looking to enhance their digital presence.",
    url: "/projects/image-5.jpg",
    tech: ["Figma", "ReactJS", "TailwindCSS", "CSS"],
  },
  {
    name: "GreenLeafGardens.biz",
    desc: "An online store and community hub for gardening enthusiasts, featuring a wide range of plants, gardening tools, and expert advice.",
    url: "/projects/image-6.jpg",
    tech: ["ReactJS", "TailwindCSS", , "CSS", "FramerMotion"],
  },
  {
    name: "PixelPerfectDesigns.info",
    desc: "A graphic design portfolio showcasing the work of a freelance designer, including branding, web design, and illustration projects.",
    url: "/projects/image-7.jpg",
    tech: ["NextJS", "FramerMotion"],
  },
  {
    name: "HarmonyHealthHub.com",
    desc: " A wellness website focused on holistic health, offering articles on nutrition, fitness, mental health, and alternative therapies.",
    url: "/projects/image-8.jpg",
    tech: ["NextJS", "ReactJS", "FramerMotion"],
  },
  {
    name: "StellarSkiesAstronomy.org",
    desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
    url: "/projects/image-9.jpg",
    tech: ["ReactJS", "JavaScript", "ThreeJS"],
  },
  {
    name: "UrbanEatsDelights.com",
    desc: "An educational site dedicated to astronomy, providing resources for amateur astronomers, star maps, and information on celestial events.",
    url: "/projects/image-10.jpg",
    tech: ["NextJS", "ThreeJS"],
  },
];

export const projectsButton = [
  "All",
  "Figma",
  "Photoshop",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "ThreeJS",
];

// Pricing Plans
export const pricingPlans = [
  {
    title: "Basic",
    pricing: "$500 - $1,000",
    features: [
      "Up to 5 pages",
      "Responsive design ",
      "Basic SEO ",
      "Contact form",
      "Social media links",
      "1 month support",
    ],
    recommended: "Small businesses, personal websites, bloggers",
  },
  {
    title: "Premium",
    pricing: "$5,000 - $10,000",
    features: [
      "Unlimited pages",
      "Responsive design",
      "Comprehensive SEO",
      "Contact form ",
      "Social media links",
      "Advanced security",
      "E-commerce (unlimited products)",
      "Blog setup",
      "Google Analytics with custom reports",
      "6 months support",
    ],
    recommended: "Medium-sized businesses, online stores, service providers",
  },
  {
    title: "Standard",
    pricing: "$1,500 - $3,000",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Advanced SEO",
      "CContact form",
      "Social media links",
      "E-commerce (20 products)",
      "Blog setup",
      "Google Analytics",
      "3 months support",
    ],
    recommended:
      "Large businesses, complex e-commerce sites, custom web applications",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

// Q & A
export const questions = [
  {
    question: "How much do you charge for a website?",
    answer:
      "Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.",
  },
  {
    question: "Why are you so expensive?",
    answer:
      "he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.",
  },
  {
    question: "How do we communicate throughout the website build?",
    answer:
      "Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.",
  },
  {
    question: "What will you need from me?",
    answer:
      "It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…",
  },
  {
    question: "What if I don’t like the website?",
    answer:
      "You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.",
  },
  {
    question: "Do you offer a payment schedule?",
    answer:
      "Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.",
  },
  {
    question: "Can I make the final payment when the site is ready to go live?",
    answer:
      "No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.",
  },
  {
    question: "Can I update the website myself once it’s been built?",
    answer:
      "Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.",
  },
  {
    question:
      "What if I don’t want to manage the website at all. Can you do it all for me?",
    answer:
      "Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";
import RobotLineIcon from "remixicon-react/RobotLineIcon";
import CameraLineIcon from "remixicon-react/CameraLineIcon";
import Music2LineIcon from "remixicon-react/Music2LineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  /*{
    id: "reviews",
    name: "Reviews",
    icon: <UserStarLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: <PriceTag3LineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: "questions",
    name: "Questions",
    icon: <QuestionAnswerLineIcon />,
  },*/
  {
    id: "photoBook",
    name: "Photos",
    icon: <CameraLineIcon />,
  },
  {
    id: "songPlayer",
    name: "Music",
    icon: <Music2LineIcon />,
  },
  {
    id: "aiChat",
    name: "Cici AI",
    icon: <RobotLineIcon />,
  },
];

// Toggle
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
