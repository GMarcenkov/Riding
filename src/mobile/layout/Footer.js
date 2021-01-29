import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from "./header/HederStyle.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const Footer = props => {
    return (
        <div className={HeaderStyle.footer}>
            <div className={HeaderStyle.footer_title}>
                <a
                    className={HeaderStyle.facebook}
                    href="https://www.facebook.com/profile.php?id=100001541110481"
                    target="_blank" rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={faFacebook} fsgdfsdfsd />
                    {" "}
                    Тома Мърценков
                </a>
            </div>
            <div className={HeaderStyle.footer_title}>
                <a
                    className={HeaderStyle.facebook}
                    href=""
                    target="_blank" rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={faFacebook} fsgdfsdfsd />
                    {" "}
                    Езда С ТОМА
                </a>
            </div>
            <div className={HeaderStyle.footer_title}>
                <a href="tel:+359876825221" className={HeaderStyle.phone}>
                    <FontAwesomeIcon icon={faPhoneAlt} /> +359897258673
                </a>
            </div>
            <div className={HeaderStyle.footer_title}>
                <a href="mailto:ezda.s.toma@gmail.com" className={HeaderStyle.phone}>
                    <FontAwesomeIcon icon={faEnvelope} /> ezda.s.toma@gmail.com
                </a>
            </div>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;
