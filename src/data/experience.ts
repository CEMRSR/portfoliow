export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Mercury Development",
    location: "Miami, Florida, United States",
    startDate: "Mar 2022",
    endDate: "Present",
    isRemote: true,
    achievements: [
      { text: "Led AWS infrastructure migration, achieving 60% cost reduction and creating scalable solutions for manufacturing teams" },
      { text: "Developed Python libraries for Spectra processing and Plotly Dash components, reducing dependency loads by 80%" },
      { text: "Built machine learning models with 95%+ accuracy, improving property uniformity by 20%" },
      { text: "Standardized IaC with CloudFormation templates, reducing deployment times by 60%" },
      { text: "Modernized CI/CD pipelines with GitHub Actions, increasing deployment reliability by 50%" },
      { text: "Created reusable Docker images, reducing deployment time by 50%" }
    ],
    skills: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "Django" },
      { name: "Express.js" },
      { name: "GraphQL" },
      { name: "AWS Lambda" },
      { name: "AWS S3" },
      { name: "Docker" },
      { name: "Leadership" },
      { name: "Mentoring" }
    ]
  },
  {
    title: "Full-Stack Developer",
    company: "Netguru",
    location: "Poznan, Wielkopolskie, Poland",
    startDate: "Jul 2020",
    endDate: "Feb 2020",
    isRemote: true,
    achievements: [
      { text: "Led a critical project impacting $750M in revenue, developing digital solutions for instrument assessment and validation" },
      { text: "Implemented ML models for instrument comparison and data normalization across manufacturing plants" }
    ],
    skills: [
      { name: "Data Science" },
      { name: "Machine Learning" },
      { name: "Plotly Dash" },
      { name: "AWS" },
      { name: "Databricks" }
    ]
  },
  {
    title: "Software Developer",
    company: "Saperium",
    location: "National Capital Region, Philippines",
    startDate: "Apr 2018",
    endDate: "Jun 2020",
    isRemote: false,
    achievements: [
      { text: "Implemented secure AWS S3 cloud storage architecture for University of Chicago collaboration" },
      { text: "Founded \"Python Plotly Dash Working Group\", creating reusable templates and component libraries" },
      { text: "Developed AHP Python Plotly Dash tool for company-wide prioritization" },
      { text: "Led deployment of 10 new Dash web applications across Corporate Research Labs" }
    ],
    skills: [
      { name: "AWS" },
      { name: "Python" },
      { name: "Plotly Dash" },
      { name: "Data Engineering" }
    ]
  },
  {
    title: "Back-End Developer",
    company: "",
    location: "",
    startDate: "Sep 2017",
    endDate: "Mar 2018",
    achievements: [
      { text: "Led development of cloud-based enterprise system for R&D documentation" },
      { text: "Managed Agile engineering team and delivered project ahead of schedule" },
      { text: "Received 3M Circle of Technical Excellence & Innovation Award" },
      { text: "Implemented microservice architecture using Spring Framework and AWS services" }
    ],
    skills: [
      { name: "Java" },
      { name: "AWS" },
      { name: "Spring" },
      { name: "Angular" },
      { name: "Microservices" }
    ]
  }
];

export const previousExperiences: Experience[] = [
  {
    title: "Back-End Developer Intern",
    company: "Capgemini",
    location: "Singapore, Singapore",
    startDate: "Oct 2016",
    endDate: "Jul 2017",
    achievements: [],
    skills: [],
  }
]; 