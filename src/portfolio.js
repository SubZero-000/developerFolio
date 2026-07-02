/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jayden Chan",
  title: "Kia ora korua, I'm Jayden",
  subTitle: emoji(
    "A passionate Data Analyst / Full Stack Software Developer 🚀 having an experience of converting data into useful insights and creating web applications using various frameworks"
  ),
  resumeLink:
    "", // Set to empty to hide the button **real link at: https://drive.google.com/file/d/1dtZze-ubVb4RUcap24YXZ9gKD3rW8b_j/view?usp=sharing
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/jayden-chan-71527a294/",
  email: "jayden.nznz@outlook.com",
  instagram: "https://www.instagram.com/jayden_cgt/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ANALYST / Developer THAT WHO WANTS TO EXPLORE EVERY MODERN TOOLS",
  skills: [
    emoji("⚡ Transform your data into actionable insights"),
    emoji(
      "⚡ Develop highly interactive web and mobile applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },    
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "QGIS",
      fontAwesomeClassname: "fas fa-map-marked-alt"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Massey University",
      logo: require("./assets/images/masseyLogo.png"),
      subHeader: "Master of Information Science",
      duration: "Feb 2025 - July 20126",
      desc: "Current CGPA 8.0/9.0 (Grade A). Took courses about Machine Learning, Intelligent Systems, Big Data, etc.",
      descBullets: [
        "Deepened knowledge in developing, training, and evaluating ML models. Focused on implementing intelligent systems and algorithms for automation and prediction.",
        "Gained expertise in handling and analyzing large, complex datasets. Applied statistical methods to extract meaningful patterns, correlations, and insights from big data environments.",
        "Developed skills in spatial data analysis, mapping, and utilizing GIS tools to solve location-based problems, adding a valuable dimension to data interpretation."
      ]
    },
    {
      schoolName: "Swinburne University of Technology",
      logo: require("./assets/images/swinburneLogo.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "Aug 2021 - Nov 2023",
      desc: "CGPA 77.71%; Five-time recipient of the Excellence and Merit Awards (2021–2023) for consistent academic performance",
      descBullets: [
        "Strong focus on Data Science (analysis and machine learning) and Software Engineering (Agile methodologies).",
        "Awarded Grade A for industry placement, recognized for high autonomy and contribution to production-level code.",
        "Applied modern software engineering practices across multiple languages (Laravel, C#, JQuery) to deliver iterative, collaborative projects."
      ]
    }    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science Tools", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Masssey Guide",
      company: "Massey University",
      companylogo: require("./assets/images/masseyLogo.png"),
      date: "Jan 2026 – June 2026",
      desc: "Main task is to help new students transition into university life",
      descBullets: [
        "Serve as a primary point of contact for incoming students, responding to enquiries and providing clear guidance on university services, systems, and campus navigation. ",
        "Assisted with event logistics including setup, coordination, and pack-down for large-scale university events such as Open Days and Orientation Days  ",
        "Operated POS systems to process merchandise sales during graduation ceremonies, handling cash and card transactions accurately and efficiently. "
      ]
    },

    {
      role: "Web Developer",
      company: "WGA Marketing",
      companylogo: require("./assets/images/swotLogo.png"),
      date: "Jan 2024 – Nov 2024",
      desc: "Started as an intern, worked as a Full Stack Web Developer after internship ended",
      descBullets: [
        "Developed and maintained responsive web applications using Laravel (PHP) and WordPress, ensuring robust backend logic and scalable architecture. ",
        "Designed and implemented UI/UX solutions for diverse projects, including e-commerce platforms, NFC-integrated sites, and blogs, improving user engagement. ",
        "Collaborated in an Agile environment, participating in requirement gathering and stakeholder meetings to ensure alignment with project milestones. "
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME PROJECTS I CREATED",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Job Market Dashboard",
      projectDesc: "This is a final project for my masters degree in Massey University. It uses a US job dataset and NLP to determine the job trends",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://job-market-dashboard-158888.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "AI Data Analyst",
      projectDesc: "A simple website that uses AI to perform data cleaning and detect outliers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ai-data-analyst-2026.streamlit.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm more than happy to discuss any work opportunity. Let's connect!",
  number: "+64-22 684 7857",
  email_address: "jayden.nznz@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
