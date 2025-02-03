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
    { name: "NASA Space Grant Recipient" },
    { name: "Member of Pi Mu Epsilon (National Mathematics Honor Society)" },
    { name: "Vice President of Mathematics Unbounded Club" },
    { name: "Vice President of Association for Computing Machinery (ACM)" },
    { name: "Undergraduate Research Opportunity Program (URGO)" }
  ]
}; 