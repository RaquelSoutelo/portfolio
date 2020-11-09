import React from 'react';

const ProgressBar = (props) => {

    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="months">
                <span>Months of experience</span>
                <span>4m</span>
                <span>6m</span>
            </div>
            <div>
                {
                    props.languages.map((elem) => {
                        let xpMonths = 7;
                        let progressBar = elem.xp / xpMonths * 100 + '%';

                        return (
                            <div key={elem.id} className="languagesList">
                                <li>{elem.value}</li>
                                <div className="progressBar" style={{ width: progressBar }}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProgressBar;