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
      { text: "Led the development of a major application that improved client operations, resulting in a 30% reduction in load time for key features." },
      { text: "Collaborated with the product team to design a user interface that simplified client interactions, leading to a 40% improvement in user satisfaction." },
      { text: "Mentored a team of junior developers, guiding them through complex project challenges while ensuring timely delivery." },
      { text: "Introduced a new testing framework that streamlined the quality assurance process and cut down manual testing by 40%." },
      { text: "Worked closely with clients to gather feedback, integrating their suggestions into project iterations that enhanced the overall user experience." },
      { text: "Played a key role in optimizing backend systems to meet growing business demands, ensuring smooth scalability." }
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
      { text: "Led the development of a key project for a client in the e-commerce industry, improving their website's performance and reducing page load times by 20%." },
      { text: "Collaborated with cross-functional teams to address client pain points, resulting in a more responsive user interface." },
      { text: "Delivered a series of successful product updates within tight deadlines, meeting all client expectations." },
      { text: "Contributed to optimizing internal workflows, enabling the team to complete projects more efficiently." }
    ],
    skills: [
      { name: "React" },
      { name: "Django" },
      { name: "Tailwind CSS" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "Redis" },
      { name: "Amazon EC2" },
      { name: "Amazon S3" },
      { name: "End-to-End Testing" },
      { name: "TDD" }
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
      { text: "Collaborated with the team to resolve performance bottlenecks, ensuring the application could handle increased traffic without issues." },
      { text: "Contributed to enhancing an existing system, reducing the time required for processing key tasks by 25%." },
      { text: "Assisted in troubleshooting complex issues that affected user experience, reducing downtime." }
    ],
    skills: [
      { name: "C#" },
      { name: ".NET" },
      { name: "Angular" },
      { name: "REST APIs" },
      { name: "Database Optimization" },
      { name: "Scrum" },
    ]
  },
  {
    title: "Back-End Developer",
    company: "",
    location: "",
    startDate: "Sep 2017",
    endDate: "Mar 2018",
    achievements: [
      { text: "Worked closely with front-end teams to ensure smooth API integrations, contributing to a seamless user experience." },
      { text: "Optimized database queries, resulting in a 25% faster response time for critical features." },
      { text: "Played a key role in designing the backend architecture for a scalable system that met future business needs." }
    ],
    skills: [
      { name: "Java" },
      { name: "Javascript" },
      { name: "Spring" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "MySQL" },
      { name: "MongoDB" },
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