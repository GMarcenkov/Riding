import React from "react";
import PropTypes from "prop-types";
import HeaderStyle from "./HederStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorseHead } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TitleHeader = (props) => {
  return (
    <div className={HeaderStyle.header}>
      <Link to="/" style={{"textDecoration":"none"}}>
        <div className={HeaderStyle.title}>
                Езда с Тома{" "}
            <FontAwesomeIcon icon={faHorseHead} />
        </div>
      </Link>
    </div>
  );
};

TitleHeader.propTypes = {};

export default TitleHeader;
