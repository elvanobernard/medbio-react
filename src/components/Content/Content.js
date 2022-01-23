import React from "react";

import Banner from "./Banner";
import MainContent from "./MainContent/MainContent";

import styles from "./Content.module.css";

function Content(props) {
  return (
    <div className={styles.main}>
      <Banner page={props.page} />
      <MainContent page={props.page} />
    </div>
  );
}

export default Content;
