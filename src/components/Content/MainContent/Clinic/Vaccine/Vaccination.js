import React from "react";

import VaccineDetail from "./VaccineDetail";

import styles from "./Vaccination.module.css";

import { vaccine } from "../../../../../img-resource/item/imageItem";

function Vaccination() {
  return (
    <div className={styles.container}>
      <img src={vaccine} alt="Vial of vaccine" />
      <VaccineDetail />
    </div>
  );
}

export default Vaccination;
