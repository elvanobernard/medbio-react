import React from "react";

import styles from "./BannerTextMain.module.css";

import { logoMedbio } from "../../img-resource/logo/logos";

const bannerText = [
  {
    mainHeader: "Medical Care",
    text: "In Biosafety, Clinic, Lab, Covid Test, PCR Swab, Research Equipment, and Materials.",
  },
  { mainHeader: "", text: "" },
  {
    mainHeader: "Events",
    text: "Upcoming events by MedBio, training, webinar, and others",
  },
  {
    mainHeader: "Products",
    text: "We provide the best quality medical products for your need",
  },
];

function BannerTextMain({ page }) {
  return (
    <div className={styles["text-container"]}>
      {page === 0 ? (
        <img className={styles.active} src={logoMedbio} alt="Logo medbio" />
      ) : (
        ""
      )}
      {page !== 1 && page !== 4 ? (
        <React.Fragment>
          {page === 0 ? <h2>Health & Medical</h2> : ""}
          <h1>{bannerText[page].mainHeader}</h1>
          <hr />
          <p>{bannerText[page].text}</p>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

export default BannerTextMain;
