import React from 'react';
import SideBar from '../components/SideBar';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contacts = () => {
    return (
        <div className="contact">
            <SideBar />
            <div className="contactContent">
                <div className="contactBox">
                    <h1>Contacts</h1>
                    <ul>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="915231216">
                                <span className="clickInput" onClick={() => { alert('Mobile number copied!'); }}>+351 915 231 216</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span className="clickInput" onClick={() => { alert('After clicking on ok, you will be redirected to your e-mail account'); }}><a href="mailto:raqueldemsgomes@gmail.com" target="_blank" rel="noopener noreferrer">raqueldemsgomes@gmail.com</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contacts;