import React from "react";

import styles from "./SwabDetail.module.css";

function SwabDetail() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>PCR & ANTIGEN</h3>
      <p className={styles.detail}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <strong>Swab PCR</strong>
      <span>Per orang: Rp 275.000/pasien/visit</span>

      <strong>Swab Antigen</strong>
      <span>1-19 orang: Rp 98.000/pasien/visit</span>
      <span>20-39 orang: Rp 85.000/pasien/visit</span>
      <span>39 orang: Rp 75.000/pasien/visit</span>
      <button>Daftar Sekarang</button>
    </div>
  );
}

export default SwabDetail;
