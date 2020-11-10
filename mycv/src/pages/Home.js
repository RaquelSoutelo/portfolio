import React from 'react';
import SideBar from '../components/SideBar';

const Home = () => {
    return (
        <div className="home">
            <SideBar />
            <div className="homeContent">
                <div className="content">
                    <h1>Raquel Soutelo</h1>
                    <h2>Junior FullStack Software Developer</h2>
                </div>
                <div className="text">
                    <p>Junior FullStack Software Developer, Historian, Archaeologist, Teacher and Researcher. After years of finding out about other cultures and languages, I chose to change my life, and after some digging, I discovered a new culture, the digital one, for which I'm now passionate about. I'm a jack of many trades in a quest to master coding.</p>
                    <p>Always curious, eager to learn and hard-working, I'm ready for new challenges! Are you?</p>
                </div>
                <div className="cv-content">
                    <div className="cv">
                        <a href="./media/Raquel Soutelo_CV.pdf" target="_blank" rel="noopener noreferrer" download>Download CV in .pdf</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;