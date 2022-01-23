import React from "react";

import styles from "./Consultation.module.css";
import ConsultationDetail from "./ConsultationDetail";

import doctors from "../../../../../img-resource/item/doctors";

function Consultation() {
  return (
    <React.Fragment>
      {doctors.map((doctor, i) => {
        return (
          <div className={styles.container} key={doctor.id}>
            <img src={doctor.photo} alt="Vial of vaccine" />
            <ConsultationDetail object={doctor} />
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Consultation;
