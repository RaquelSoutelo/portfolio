import React from 'react';

const Certifications = () => {
    return (
        <div className="certifications">
            <h3>Certifications</h3>
            <div className="certificationsList">
                <ul>
                    <li><i className="fas fa-certificate"></i>
                        <span className="certificate">Creating your first Spring Boot Microservice - LinkedIn</span>
                        <br />
                        <span className="year">2020</span>
                    </li>
                    <li><i className="fas fa-certificate"></i>
                        <span className="certificate">Learning React.js - LinkedIn</span>
                        <br />
                        <span className="year">2020</span>
                    </li>
                </ul>
                <ul>
                    <li><i className="fas fa-certificate"></i>
                        <span className="certificate">Code Challenge - Code Institute</span>
                        <br />
                        <span className="year">2020</span>
                    </li>
                    <li><i className="fas fa-certificate"></i>
                        <span className="certificate">IELTS - Academic Level - BandScore 8.0</span>
                        <br />
                        <span className="year">2019</span>
                    </li>
                </ul>
                <ul>
                    <li><i className="fas fa-certificate"></i>
                        <span className="certificate">Fotografia, Domínio Total da Luz. Segurança ao Fotografar - Udemy</span>
                        <br />
                        <span className="year">2019</span>
                    </li>
                    <li><i className="fas fa-certificate"></i>
                        <span className="certificate">Michigan English Proficiency test - Academic Level - University of Michigan - Ann Arbor</span>
                        <br />
                        <span className="year">2007</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Certifications;