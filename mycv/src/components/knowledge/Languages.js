import React from 'react';

const Languages = () => {
    return (
        <div>
            <div className="languages">
                <h3>Languages</h3>
                <div className="languagesList">
                    <ul>
                        <li><i className="fas fa-check-circle"></i>
                            <span className="language">English - C2</span>
                        </li>
                        <li><i className="fas fa-check-circle"></i>
                            <span className="language">Portuguese - C2</span>
                        </li>
                        <li><i className="fas fa-check-circle"></i>
                            <span className="language">French - A1</span>
                        </li>
                        <li><i className="fas fa-check-circle"></i>
                            <span className="language">Spanish - A1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Languages;