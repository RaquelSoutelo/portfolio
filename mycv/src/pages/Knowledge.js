import React from 'react';
import SideBar from '../components/SideBar';
import OtherTechnicalSkills from '../components/knowledge/OtherTechnicalSkills';
import SoftSkills from '../components/knowledge/SoftSkills';
import MainTechnicalSkills from '../components/knowledge/MainTechnicalSkills';

const Knowledge = () => {
    return (
        <div className="knowledge">
            <SideBar />
            <div className="knowledgeContent">
                <MainTechnicalSkills />
                <OtherTechnicalSkills />
                <SoftSkills />
            </div>

        </div>
    );
};

export default Knowledge;