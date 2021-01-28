import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt,faBars} from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from './HederStyle.module.css'
import Menu from "./Menu";
import MessengerCustomerChat from "react-messenger-customer-chat";

const NavBar = ({setMenuIsOpen,menuIsOpen}) => {
    return (
        <nav className={HeaderStyle.navBar_wrapper}>
            <div className={HeaderStyle.navBar_container}>
                <FontAwesomeIcon icon={faBars} onClick={()=>setMenuIsOpen(!menuIsOpen)}/>
                <a href="tel:+359876825221" className={HeaderStyle.phone}>
                    <FontAwesomeIcon icon={faPhoneAlt} /> +359897258673
                </a>
            </div>
            <MessengerCustomerChat
                pageId="100137018774976"
                appId="704893963558133"
            />
            <Menu menuIsOpen={menuIsOpen}/>
        </nav>



    );
};

NavBar.propTypes = {

};

export default NavBar;
