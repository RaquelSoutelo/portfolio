import React from 'react';
import Experience from '../components/knowledge/Experience';
import Education from '../components/knowledge/Education';
import Certifications from '../components/knowledge/Certifications';
import Languages from '../components/knowledge/Languages';
import SideBar from '../components/SideBar';

const ProfessionalBackgroundAndEducation = () => {
    return (
        <div className="background">
            <SideBar />
            <div className="backgroundContent">
                <Experience />
                <Education />
                <Certifications />
                <Languages />
            </div>

        </div>
    );
};

export default ProfessionalBackgroundAndEducation;