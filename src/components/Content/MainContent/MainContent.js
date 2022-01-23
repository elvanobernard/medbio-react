import React from "react";

import Clinic from "./Clinic/Clinic";
import Event from "./Event/Event";

import styles from "./MainContent.module.css";

function MainContent(props) {
  return (
    <div className={styles.main}>
      {props.page === 1 ? <Clinic /> : ""}
      {props.page === 2 ? <Event /> : ""}
    </div>
  );
}

export default MainContent;
