import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="identity">
                <div className="identityContent">
                    <img src="./media/me_profile.jpg" alt="profile pic" />
                    <h3>Raquel Soutelo</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName="navActive">
                            <i className="fas fa-brain"></i>
                            <span>Skills</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/background" activeClassName="navActive">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Background</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-code"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contacts</span>
                        </NavLink>
                    </li>
                </ul>

            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/raquel-soutelo/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/RaquelSoutelo/portfolio" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;