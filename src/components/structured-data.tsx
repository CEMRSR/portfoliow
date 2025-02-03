export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kevin Gabriel Maranan",
    url: "https://kegabmaranan.com",
    jobTitle: "Senior Data Scientist & Cloud Solutions Architect",
    description:
      "Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML, GenAI innovation, and cloud architecture. 6x AWS Certified professional.",
    sameAs: [
      "https://github.com/kegabmaranan",
      "https://linkedin.com/in/kegabmaranan",
      "https://orcid.org/0000-0003-3891-5522",
      "https://www.coursera.org/learner/bjorn-melin",
    ],
    knowsAbout: [
      "AWS Cloud Architecture",
      "Serverless Computing",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kevin Gabriel Maranan - Portfolio",
    url: "https://kegabmaranan.com",
    description:
      "Personal portfolio and blog of Kevin Gabriel Maranan, AWS Solutions Architect and Full-Stack Developer.",
    author: {
      "@type": "Person",
      name: "Kevin Gabriel Maranan",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
