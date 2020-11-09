import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h1>404 Not Found</h1>
                <p>Don´t try to dig anything in here!</p>
                <p>You might find some skeletons!</p>
                <br />
                <br />
                <div className="backHomeButton">
                    <NavLink exact to="/">
                        <i className="fas fa-home"></i>
                        <span className="button-text"> Home</span>
                    </NavLink>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default NotFound;