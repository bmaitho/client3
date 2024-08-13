import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <h1>ArteDante.</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cohorts">Cohorts</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
