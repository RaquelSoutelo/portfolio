import React from 'react';

const Education = () => {
    return (
        <div className="education">
            <h3>Education</h3>
            <div className="educationList">
                <ul>
                    <li><i className="fas fa-user-graduate"></i>
                        <span className="school">Junior FullStack Software Developer - Academia de Código</span>
                        <br />
                        <span className="schoolYears">2020-2020</span>
                    </li>
                    <li><i className="fas fa-user-graduate"></i>
                        <span className="school">Mestrado em Arqueologia - Universidade do Minho</span>
                        <br />
                        <span className="schoolYears">2012-2015</span>
                    </li>
                    <li><i className="fas fa-user-graduate"></i>
                        <span className="school">Bacharel e Licenciada em História - Universidade Federal do Estado do Rio de Janeiro</span>
                        <br />
                        <span className="schoolYears">2007-2011</span>
                    </li>
                    <li><i className="fas fa-user-graduate"></i>
                        <span className="school">Intercâmbio em Arqueologia - Universidade de Coimbra</span>
                        <br />
                        <span className="schoolYears">2010-2011</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Education;