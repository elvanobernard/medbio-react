import React, { useState } from "react";

import styles from "./Clinic.module.css";
import Vaccination from "./Vaccine/Vaccination";
import Swab from "./Swab/Swab";
import Consultation from "./Consultation/Consultation";

function Clinic() {
  const [activeProduct, setActiveProdurct] = useState(0);

  const onServiceSelected = (e) => {
    setActiveProdurct(parseInt(e.target.dataset.index));
  };

  return (
    <React.Fragment>
      <h2 className={styles.header}>Layanan Kami</h2>
      <nav>
        <ul className={styles["service-navigation"]}>
          <li data-index="0" onClick={onServiceSelected}>
            PCR & Antigen
          </li>
          <li data-index="1" onClick={onServiceSelected}>
            Vaksinasi
          </li>
          <li data-index="2" onClick={onServiceSelected}>
            Konsultasi Dokter
          </li>
        </ul>
      </nav>
      {activeProduct === 0 ? <Swab /> : ""}
      {activeProduct === 1 ? <Vaccination /> : ""}
      {activeProduct === 2 ? <Consultation /> : ""}
    </React.Fragment>
  );
}

export default Clinic;
