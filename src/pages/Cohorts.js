import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import './Cohorts.css';
import { authFetch } from '../components/authFetch';

const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const data = await authFetch('http://127.0.0.1:5000/api/cohorts');
        setCohorts(data);
      } catch (error) {
        console.error('Error fetching cohorts:', error);
        navigate('/login'); // Redirect to login if fetch fails
      }
    };

    fetchCohorts();
  }, [navigate]);

  const filteredCohorts = cohorts.filter(cohort =>
    cohort.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cohorts">
      <h2>Cohorts</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="cohort-list">
        {filteredCohorts.map(cohort => (
          <div key={cohort.id} className="cohort-card">
            <Link to={`/classes/${cohort.id}`}>{cohort.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cohorts;