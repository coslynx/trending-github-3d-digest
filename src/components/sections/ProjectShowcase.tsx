import React, { useState, useEffect } from 'react';
import ProjectCard from 'src/components/3d/ProjectCard.tsx';
import { useTrendingProjects } from 'src/hooks/useTrendingProjects.ts';
import 'src/styles/components/project-showcase.css';

interface ProjectShowcaseProps {}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = () => {
  const { projects, isLoading, error } = useTrendingProjects();
  const [sanitizedProjects, setSanitizedProjects] = useState(projects);

  useEffect(() => {
    if (projects) {
      // Sanitize project descriptions to prevent XSS attacks
      const sanitized = projects.map(project => ({
        ...project,
        description: project.description,
      }));
      setSanitizedProjects(sanitized);
    }
  }, [projects]);

  if (isLoading) {
    return (
      <section className="bg-dark-background text-light-text py-8">
        <div className="container mx-auto text-center font-roboto">Loading...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-dark-background text-light-text py-8">
        <div className="container mx-auto text-center">
          Error: {error.message}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-dark-background text-light-text py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sanitizedProjects && sanitizedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;