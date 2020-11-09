import React from 'react';
import SideBar from '../components/SideBar';
import ProjectList from '../components/portfolio/ProjectList';


const Portfolio = () => {
    return (
        <div className="portfolio">
            <SideBar />
            <ProjectList />
        </div>
    );
};

export default Portfolio;