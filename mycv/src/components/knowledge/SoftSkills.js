import React from 'react';

const SoftSkills = () => {
    return (
        <div className="softSkills">
            <h3>Soft Skills</h3>
            <div className="skillList">
                <ul>
                    <li>
                        <i className="fas fa-hands-helping"></i>
                        <span> Teamwork</span>
                    </li>
                    <li>
                        <i className="fas fa-comment"></i>
                        <span> Good communicator</span>
                    </li>
                    <li>
                        <i className="fas fa-mountain"></i>
                        <span> Resilience</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i className="fas fa-brain"></i>
                        <span> Critical and analytical thinking</span>
                    </li>
                    <li>
                        <i className="fas fa-book-reader"></i>
                        <span> Eager to learn</span>
                    </li>

                    <li>
                        <i className="fas fa-stopwatch"></i>
                        <span> Time management</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i className="fas fa-handshake"></i>
                        <span> Conflict Management</span>
                    </li>
                    <li>
                        <i className="fas fa-sitemap"></i>
                        <span> Organization</span>
                    </li>
                    <li>
                        <i className="fas fa-paint-brush"></i>
                        <span> Creativity</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SoftSkills;