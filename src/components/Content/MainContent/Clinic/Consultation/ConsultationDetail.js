import React from "react";

import styles from "./ConsultationDetail.module.css";

function ConsultationDetail(props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{props.object.name}</h3>
      <p className={styles.detail}>{props.object.description}</p>
    </div>
  );
}

export default ConsultationDetail;
