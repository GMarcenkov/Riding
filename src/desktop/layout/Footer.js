import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from "./header/HederStyle.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faPhoneAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = props => {
    return (
        <div className={HeaderStyle.footer}>
            <div className={HeaderStyle.facebook_container}>
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
            <div className={HeaderStyle.facebook_container}>
                <a
                    className={HeaderStyle.facebook}
                    href="https://www.facebook.com/%D0%95%D0%B7%D0%B4%D0%B0-%D0%A1-%D0%A2%D0%BE%D0%BC%D0%B0-100137018774976"
                    target="_blank" rel="noreferrer noopener"
                >
                    <FontAwesomeIcon icon={faFacebook} fsgdfsdfsd />
                    {" "}
                  ЕЗДА С ТОМА
                </a>
            </div>
            <div className={HeaderStyle.phone_container}>
                <a href="tel:+359876825221" className={HeaderStyle.phone}>
                    <FontAwesomeIcon icon={faPhoneAlt} /> +359897258673
                </a>
            </div>
            <div className={HeaderStyle.facebook_container}>
                <a  className={HeaderStyle.facebook} href="mailto:ezda.s.toma@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} /> ezda.s.toma@gmail.com
                </a>
            </div>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;
