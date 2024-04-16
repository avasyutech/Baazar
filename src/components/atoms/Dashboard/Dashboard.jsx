import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faStore,
  faCartShopping,
  faClockRotateLeft,
  faGear,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import './Dashboard.scss';

export default function Dashboard({ setDashBoardValue }) {
  const getDashBoardLabel = (e) => {
    console.log("kwejn");
    if(e.target.getAttribute("data-label")) {
      setDashBoardValue(e.target.getAttribute("data-label"));
    }
    else {
      setDashBoardValue(e.target.parentNode.getAttribute("data-label"));
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard__db-type" data-label="dashboard" onClick={getDashBoardLabel}>
        <FontAwesomeIcon className="dashboard__db-type__db-icon" icon={faLayerGroup} />
        <span className="dashboard__db-type__db-text body-small-400">dashboard</span>
      </div>
      <div className="dashboard__db-type" data-label="orders" onClick={getDashBoardLabel}>
        <FontAwesomeIcon className="dashboard__db-type__db-icon" icon={faStore} />
        <span className="dashboard__db-type__db-text body-small-400">order history</span>
      </div>
      <div className="dashboard__db-type" data-label="checkout" onClick={getDashBoardLabel}>
        <FontAwesomeIcon className="dashboard__db-type__db-icon" icon={faCartShopping} />
        <span className="dashboard__db-type__db-text body-small-400">shopping cart</span>
      </div>
      <div className="dashboard__db-type" data-label="history" onClick={getDashBoardLabel}>
        <FontAwesomeIcon className="dashboard__db-type__db-icon" icon={faClockRotateLeft} />
        <span className="dashboard__db-type__db-text body-small-400">browsing history</span>
      </div>
      <div className="dashboard__db-type" data-label="settings" onClick={getDashBoardLabel}>
        <FontAwesomeIcon className="dashboard__db-type__db-icon" icon={faGear} />
        <span className="dashboard__db-type__db-text body-small-400">settings</span>
      </div>
      <div className="dashboard__db-type" data-label="logout" onClick={getDashBoardLabel}>
        <FontAwesomeIcon className="dashboard__db-type__db-icon" icon={faArrowRightFromBracket} />
        <span className="dashboard__db-type__db-text body-small-400">logout</span>
      </div>
    </div>
  );
}
