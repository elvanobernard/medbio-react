import React from "react";

import styles from "./Navigation.module.css";

import { logoMedbio, logoSolaceMedika } from "../../img-resource/logo/logos";

function Navigation(props) {
  const onNavigationClicked = (event) => {
    props.navigationHandler(parseInt(event.target.dataset.pageNumber));
  };

  return (
    <nav className={styles.container}>
      <div className={styles["logo-container"]}>
        <img
          className={props.page !== 1 ? styles.active : ""}
          src={logoMedbio}
          data-page-number={0}
          alt="Logo medbio"
          onClick={onNavigationClicked}
        />
        <img
          className={props.page === 1 ? styles.active : ""}
          src={logoSolaceMedika}
          data-page-number={1}
          alt="Logo Klinik Solace Medika"
          onClick={onNavigationClicked}
        />
      </div>
      <ul className={styles["link-container"]}>
        <li
          className={props.page === 0 ? styles.active : ""}
          data-page-number={0}
          onClick={onNavigationClicked}
        >
          BERANDA
        </li>
        <li
          className={props.page === 1 ? styles.active : ""}
          data-page-number={1}
          onClick={onNavigationClicked}
        >
          KLINIK SOLACE MEDIKA
        </li>
        <li
          className={props.page === 2 ? styles.active : ""}
          data-page-number={2}
          onClick={onNavigationClicked}
        >
          EVENTS
        </li>
        <li
          className={props.page === 3 ? styles.active : ""}
          data-page-number={3}
          onClick={onNavigationClicked}
        >
          PRODUK
        </li>
        <li
          className={props.page === 4 ? styles.active : ""}
          data-page-number={4}
          onClick={onNavigationClicked}
        >
          TENTANG KAMI
        </li>
      </ul>
      <div className={styles["contact-container"]}>
        <span>HUBUNGI KAMI</span>
      </div>
    </nav>
  );
}

export default Navigation;
