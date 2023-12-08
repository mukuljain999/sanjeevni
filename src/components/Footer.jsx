import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const Footer = () => {
    return (
        <>
        <footer style={footerStyle}>
            <p>&copy; 2023 Sanjeevani</p>
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
            <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
            <FontAwesomeIcon icon={faXTwitter} style={iconStyle}/>
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        </footer>
        </>
        

    );
};


const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    width: '100vw',
};

const iconStyle = {
    fontSize: '2rem',
    color: 'rgb(255, 255, 255)',
    margin: '0 0.5rem',
};