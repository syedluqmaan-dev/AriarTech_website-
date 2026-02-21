import React from 'react';
import SEO from '../components/SEO';
import Projects from '../components/sections/Projects';

const ProjectsPage = () => {
  return (
    <>
      <SEO
        title="Our Web & Mobile App Development Projects | Ariar Technology"
        description="Explore Ariar Technology' portfolio of web development, React applications, and mobile app development projects built for startups and businesses in Bangalore."
        canonical="https://www.ariartech.com/projects"
        ogTitle="Our Web & App Development Projects | Ariar Technology"
        ogDescription="Discover scalable websites and mobile applications developed by Ariar Technology in Bangalore."
        ogImage="https://www.ariartech.com/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Web & Mobile App Development Projects",
          "url": "https://www.ariartech.com/projects",
          "about": {
            "@type": "Thing",
            "name": "Web Development and Mobile App Projects"
          }
        }}
      />

      <div style={{ paddingTop: '100px', textAlign: 'center' }}>
        <h1>
          Our Web & Mobile App Development Projects
        </h1>

        <p style={{ maxWidth: '700px', margin: '0 auto 40px' }}>
          A collection of scalable websites, mobile applications,
          and digital products built for startups and businesses in Bangalore.
        </p>
      </div>

      <Projects />
    </>
  );
};

export default ProjectsPage;
