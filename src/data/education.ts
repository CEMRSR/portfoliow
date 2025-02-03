export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  // gpa: string;
  honors: Honor[];
  activities: Activity[];
}

export const education: Education = {
  degree: "Bachelor of Science - BS, Computer Science",
  school: "Singapore Institute of Management",
  location: "Singapore, Singapore",
  startDate: "2013",
  endDate: "2017",
  // gpa: "3.54",
  honors: [
    { name: "Algorithms and Data Structures" },
    { name: "Software Engineering" },
    { name: "Database Systems" },
    { name: "Operating Systems" },
    { name: "Artificial Intelligence and Machine Learning" }
  ],
  activities: [
    { name: "Participated in several coding competitions and hackathons, solving real-world challenges." },
    { name: "Attended and helped organize workshops on emerging tech like AI and machine learning." },
    { name: "Collaborated in the university's tech club, working on projects and exchanging ideas with peers." },
    { name: "Gained hands-on experience through internships at local tech companies." },
    { name: "Worked with classmates on group projects to develop software and applications for coursework." }
  ]
}; 