import React from "react";

import styles from "./VaccineDetail.module.css";

function VaccineDetail() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Twintrix</h3>
      <p className={styles.detail}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <strong> Price</strong>
      <span>Walk in: IDR 575.000</span>
      <span>Home Care: IDR 725.000</span>
      <button>Daftar Sekarang</button>
    </div>
  );
}

export default VaccineDetail;
