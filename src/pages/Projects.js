import React, { useEffect, useState } from 'react';
import { authFetch } from '../components/authFetch';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await authFetch('http://127.0.0.1:5000/api/projects');
        setProjects(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {error && <p className="error">{error}</p>}
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
