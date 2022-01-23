import React from "react";

import styles from "./EventSummary.module.css";

import { swabWorkshop } from "../../../../img-resource/item/imageEvent";

function EventSummary() {
  return (
    <div className={styles.summary}>
      <img src={swabWorkshop} alt="swab testing" />
      <div className={styles["summary-info"]}>
        <h3>Workshop for Swabber</h3>
        <span>September 25, 2021</span>
        <p>
          Dalam rangka penanggulangan COVID-19, PT. Media Biomedik Indonesia
          bekerja sama dengan Persatuan Dokter Spesialis Mikrobiologi Klinik
          Cabang Jakarta mengadakan pelatihan untuk swabber dari aspek teori dan
          praktik Hands-On mengenai Teknik Keselamatan Laboratorium Dasar dan
          Teknik Pengambilan Spesimen Nasofaring dan Orofaring yang tepat.
        </p>
        <button>Contact Us!</button>
      </div>
    </div>
  );
}

export default EventSummary;
