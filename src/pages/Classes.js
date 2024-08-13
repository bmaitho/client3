import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import './Classes.css';

const Classes = () => {
  const { cohortId } = useParams();
  const [classes, setClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/classes?cohort_id=${cohortId}`);

        if (response.ok) {
          const data = await response.json();
          setClasses(data);
        } else {
          console.error('Failed to fetch classes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, [cohortId]);

  const filteredClasses = classes.filter(class_ =>
    class_.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="classes">
      <h2>Classes in Cohort {cohortId}</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="class-list">
        {filteredClasses.map(class_ => (
          <div key={class_.id} className="class-card">
            <Link to={`/projects/${class_.id}`}>{class_.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
