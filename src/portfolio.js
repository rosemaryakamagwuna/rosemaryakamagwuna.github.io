/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import powerBi from "./assets/icons/power.svg"
import tableau from "./assets/icons/tableau.svg"

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
  username: "Rosemary Tosanwumi",
  title: "Hi, I'm Rosemary",
  subTitle: emoji(
    "Rosemary Tosanwumi is a PhD candidate in Energy and Mineral Engineering at Pennsylvania State University. With a focus on machine learning for sequential decision-making in geosteering, she possesses over two years of industry experience in data science, predictive modeling, and optimization, applied to well intervention and reservoir engineering. Proficient in Python, R, and SQL, with expertise in real-time data assimilation, ensemble-based geostatistical modeling, and multi-objective optimization. Committed to leveraging AI and data-driven methodologies to enhance decision-making in energy exploration and production."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1hhWWJAbu27HHxqeHl4pv97MCSz_lt8cx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rosemaryakamagwuna",
  linkedin: "https://www.linkedin.com/in/rosemary-akamagwuna",
  gmail: "rca5255@psu.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@rosemarytosanwumi",
  // twitter: "https://twitter.com/t_jolomi",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const devicon_base_url = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const skillsSection = {
  title: emoji(" Skills 🛠️"),
  subTitle: "I am Interested in Using AI and data-driven insights to enhance decision-making in energy exploration and production.. I am proficient in the following:",
  skills: [
    emoji(
      "⚡ AI"
    ),
    emoji(
      "⚡ Data Science"
    ),
    emoji("⚡ Machine Learning"),
    emoji(
      "⚡ Deep Learning"
    ),
    // emoji("⚡ Reinforcement Learning"),
    emoji(
      "⚡ Data Analytics"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      skillPath: devicon_base_url + "python/python-original.svg"
    },
    {
      skillName: "SQL",
      skillPath: devicon_base_url + "azuresqldatabase/azuresqldatabase-original.svg"
    },
    {
      skillName: "R",
      skillPath: devicon_base_url + "r/r-original.svg"
    },
    {
      skillName: "Tensorflow",
      skillPath: devicon_base_url + "tensorflow/tensorflow-original.svg"
    },
    {
      skillName: "Keras",
      skillPath: devicon_base_url + "keras/keras-original.svg"
    },
    {
      skillName: "Pytorch",
      skillPath: devicon_base_url + "pytorch/pytorch-original.svg"
    },
    // {
    //   skillName: "PySpark",
    //   skillPath: devicon_base_url + "apachespark/apachespark-original.svg"
    // },
    // {
    //   skillName: "AWS",
    //   skillPath: devicon_base_url + "amazonwebservices/amazonwebservices-original-wordmark.svg"
    // },
    // {
    //   skillName: "GCP",
    //   skillPath: devicon_base_url + "googlecloud/googlecloud-original.svg"
    // },
    {
      skillName: "Power BI",
      skillPath: powerBi
    },
    {
      skillName: "Tableau",
      skillPath: tableau
    },
    {
      skillName: "Numpy",
      skillPath: devicon_base_url + "numpy/numpy-original.svg"
    },
    {
      skillName: "Pandas",
      skillPath: devicon_base_url + "pandas/pandas-original.svg"
    },
    {
      skillName: "Matplotlib",
      skillPath: devicon_base_url + "matplotlib/matplotlib-original.svg"
    },
    {
      skillName: "Scikitlearn",
      skillPath: devicon_base_url + "scikitlearn/scikitlearn-original.svg"
    },
    {
      skillName: "MATLAB",
      skillPath: devicon_base_url + "matlab/matlab-original.svg"
    },
    {
      skillName: "git",
      skillPath: devicon_base_url + "git/git-original.svg"
    },
    {
      skillName: "HTML",
      skillPath: devicon_base_url + "html5/html5-original.svg"
    },
    {
      skillName: "CSS",
      skillPath: devicon_base_url + "css3/css3-original.svg"
    },
    // {
    //   skillName: "JavaScript",
    //   skillPath: devicon_base_url + "javascript/javascript-original.svg"
    // },
    // {
    //   skillName: "Docker",
    //   skillPath: devicon_base_url + "docker/docker-original.svg"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pennsylvania State University",
      logo: require("./assets/images/Penn-State-University-Logo.png"),
      subHeader: "PhD in Energy and Mineral Engineering | Minor in Computational Science",
      duration: "2022 - Present",
      desc: "Research Area: Sequential Decision-Making in Geosteering.",
      // descBullets: [
      //   <span>Tosanwumi J. et al (2024). <a href='https://tscluster.readthedocs.io/en/latest/' target="_blank" rel="noopener noreferrer"><i>tscluster</i></a>: A python package for the optimal temporal clustering framework. <i>Environment and Planning B: Urban Analytics and City Science, 0(0). <a href='https://doi.org/10.1177/23998083241293833' target="_blank" rel="noopener noreferrer">https://doi.org/10.1177/23998083241293833</a>.</i></span>,
      //   <span>Tosanwumi J. et al (2024). Predictive Time Series Clustering with Granger Causality. <i>(Manuscript submitted for publication)</i>.</span>
      // ]
    },
    {
      schoolName: "University of Benin",
      logo: require("./assets/images/Uniben-logo.png"),
      subHeader: "Bachelor of Engineering in Petroleum Engineering",
      duration: "March 2014 - October 2018",
      desc: "Ranked top 1% in the program. Best Graduating Student Award"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
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
      role: "Graduate Researcher",
      company: "Penn State University – Initiative for Geostatistics & Geomodelling Applications (PSIGGMA)",
      companyURL: "https://sites.psu.edu/psggmaimp/",
      companylogo: require("./assets/images/Penn-State-University-Logo.png"),
      date: "2023 – Present",
      descBullets: [
      "Developed real-time geosteering decision support systems integrating machine learning and multi-objective optimization (NSGA-II, DMOPSO) to enhance wellbore placement.",
      "Implemented ensemble-based geostatistical model updating (EnKF, SGSIM) to reduce subsurface uncertainty and improve reservoir characterization",
      // "Designed data assimilation workflows using continuous LWD/MWD updates, improving model predictability and reducing drilling risks.",
      "Applied Python-based geospatial analysis for optimizing well trajectory and maximizing reservoir contact."
    ]
},

{
  role: "Graduate Teaching Assistant",
  company: "Penn State University – Department of Energy and Mineral Engineering",
  companyURL: "https://www.eme.psu.edu/",
  companylogo: require("./assets/images/Penn-State-University-Logo.png"),
  date: "2022 – 2023",
  descBullets: [
  "Taught reservoir simulation and modeling (CMG) to undergraduates, guiding them in setting up numerical models for production forecasting and uncertainty quantification.",
  "Provided hands-on training in data-driven decision-making for reservoir engineering applications."
]
},

{
  role: "Operations Engineer / Project Support",
  company: "Bonitas Energy Solutions Limited",
  companyURL: "https://bonitasenergy.com/",
  companylogo: require("./assets/images/Bonitas-Oil-Gas-Ltd.png"),
  date: "2019 – 2021",
  descBullets: [
  "Developed data-driven intervention strategies for offshore well optimization using predictive analytics.",
  "Led the design and deployment of an automated inventory management system using Power BI, reducing operational inefficiencies by 20%.",
  // "Conducted pressure control and fluid monitoring for slickline and e-line operations, applying real-time data analytics for performance tracking.",
  "Applied Earned Value Management (EVM) techniques to track project costs, achieving 10% cost savings in well intervention operations.",
  // "Developed data-driven well intervention strategies, integrating probabilistic risk assessments for offshore operations."
]
},

{
  role: "Software Developer Intern",
  company: "Acumen Digital",
  companyURL: "https://www.acumen.digital/",
  companylogo: require("./assets/images/acumen-digital-logo.png"),
  date: "2021",
  descBullets: [
  "Gained hands-on experience in front-end development, designing and building responsive web interfaces.",
  "Utilized HTML, CSS, and JavaScript frameworks to develop scalable and interactive applications."
]
},

{
  role: "Petroleum Engineer Intern",
  company: "Cypher Crescent Limited",
  companyURL: "https://www.cyphercrescent.com/",
  companylogo: require("./assets/images/cybercrescent.png"),
  date: "2021",
  descBullets: [
  "Gained experience into utilizing SEPAL well, reservoir and facility management software for integrated asset management."
]
},

{
  role: "Drilling Fluids Laboratory Intern",
  company: "Schlumberger",
  companyURL: "https://www.slb.com/",
  companylogo: require("./assets/images/schlumberger.png"),
  date: "2017",
  descBullets: [
  "Collaborated with Mud Engineers in developing drilling fluid systemsfor offshore drilling projects. Responsible for drilling fluids pilot testing including rheology checks, retort analysis, HPHT testing, Filtration analysis etc. Carried out equipment maintenance, calibration and QAQC testing."
]
},

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Volunteer Activities 🙋🏾‍♀️"),
  subtitle: "Some Organizations I am a Volunteer at / have Volunteered for",
  projects: [
    {
      image: require("./assets/images/Penn-State-University-Logo.png"),
      projectName: "The Pennsylvania State University",
      projectDesc: "EMS Sustainability Council Student Committee Member (2024 – 2025)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.ems.psu.edu/about/strategic-initiatives/sustainability/about-sustainability-ems"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/Penn-State-University-Logo.png"),
      projectName: "The Pennsylvania State University",
      projectDesc: "Treasurer for the Graduate Women in Engineering (2024 – 2025)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sites.psu.edu/gradwie/"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/Penn-State-University-Logo.png"),
      projectName: "The Pennsylvania State University",
      projectDesc: "Media Chair of the Energy and Mineral Engineering Graduate Student Council (2023 – 2024)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.ems.psu.edu/graduate-student-council"
        }
        //  you can add extra buttons here.
      ]
    },

    // {
    //   image: require("./assets/images/SPE_logo.png"),
    //   projectName: "Society of Petroleum Engineers International",
    //   projectDesc: "Technical Team Member, Section 103 (2019)",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://www.spe.org/en/"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Honors & Awards 🏅 "),
  subtitle:
    "Some of my awards",

  achievementsCards: [
    {
      title: "Women’s Auxiliary to the American Institute of Mining Engineers Scholarship (2023)",
      subtitle:
        "",
      image: require("./assets/images/WAAIME_logo.png"),
      imageAlt: "Women’s Auxiliary to the American Institute of Mining Engineers Logo",
      footerLink: [
        {
          name: "Scholarship",
          url: "https://www.waaime.org/AboutUs.aspx"
        },
      ]
    },
    
    {
      title: "Bonitas Energy Solutions Limited Employee Award for Innovation (2020)",
      subtitle:
        "",
      image: require("./assets/images/Bonitas-Oil-Gas-Ltd.png"),
      imageAlt: "Bonitas-Oil-Gas-Ltd Logo",
      footerLink: [
        {
          name: "Award",
          url: ""
        },
      ]
    },

    {
      title: "Best Graduating Student, Department of Petroleum Engineering, University of Benin (2019)",
      subtitle:
        "",
      image: require("./assets/images/Uniben-logo.png"),
      imageAlt: "Uniben-logo Logo",
      footerLink: [
        {
          name: "Award",
          url: ""
        },
      ]
    },

    // {
    //   title: "Society of Petroleum Engineers (SPE) Uniben Award of Academic Excellence (2018)",
    //   subtitle:
    //     "",
    //   image: require("./assets/images/SPE_logo.png"),
    //   imageAlt: "SPE_logo Logo",
    //   footerLink: [
    //     {
    //       name: "Award",
    //       url: ""
    //     },
    //   ]
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: emoji("Blogs ✍🏾"),
  subtitle:
    "With Love for Data Science, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
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
  subtitle: "Feel free to have a look at my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "",
  email_address: "rca5255@psu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
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
