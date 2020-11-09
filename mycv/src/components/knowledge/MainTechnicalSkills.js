import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class MainTechnicalSkills extends Component {
    state = {
        languages: [
            { id: 1, value: "Java", xp: 7 },
            { id: 2, value: "JavaScript", xp: 7 },
            { id: 3, value: "HTML", xp: 7 },
            { id: 4, value: "CSS", xp: 7 },
            { id: 5, value: "SQL", xp: 6 },
        ],
        frameworks: [
            { id: 1, value: "Spring", xp: 7 },
            { id: 2, value: "Bootstrap", xp: 7 },
            { id: 3, value: "Hibernate", xp: 7 },
            { id: 4, value: "JUnit", xp: 7 },
            { id: 5, value: "Mockito", xp: 7 }
        ],
        databases: [
            { id: 1, value: "MySQL", xp: 7 },
        ],
        methodologies: [
            { id: 1, value: "PMI Waterfall", xp: 4 },
            { id: 2, value: "Scrum", xp: 4 },
            { id: 3, value: "Kanban", xp: 4 },
            { id: 4, value: "Lean", xp: 4 },
        ]
    }
    render() {
        let { languages, frameworks, databases, methodologies } = this.state;

        return (
            <div className="mainTechnicalSkills">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks"
                />
                <ProgressBar
                    languages={databases}
                    className="databasesDisplay"
                    title="Databases"
                />
                <ProgressBar
                    languages={methodologies}
                    className="methodologiesDisplay"
                    title="Methodologies"
                />
            </div>
        );
    }
}

export default MainTechnicalSkills;