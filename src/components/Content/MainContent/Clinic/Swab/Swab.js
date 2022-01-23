import React from "react";

import SwabDetail from "./SwabDetail";

import styles from "./Swab.module.css";

import { swabTest } from "../../../../../img-resource/item/imageItem";

function Swab() {
  return (
    <div className={styles.container}>
      <SwabDetail />
      <img src={swabTest} alt="Swab Testing" />
    </div>
  );
}

export default Swab;
