import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt,faBars} from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from './HederStyle.module.css'
import Menu from "./Menu";

const NavBar = ({setMenuIsOpen,menuIsOpen}) => {
    return (
        <nav className={HeaderStyle.navBar_wrapper}>
            <div className={HeaderStyle.navBar_container}>
                <FontAwesomeIcon icon={faBars} onClick={()=>setMenuIsOpen(!menuIsOpen)}/>
                <a href="tel:+359876825221" className={HeaderStyle.phone}>
                    <FontAwesomeIcon icon={faPhoneAlt} /> +359897258673
                </a>
            </div>
            <Menu menuIsOpen={menuIsOpen}/>
        </nav>



    );
};

NavBar.propTypes = {

};

export default NavBar;
