import React from "react";

import EventSummary from "./EventSummary";

import styles from "./Event.module.css";

function Event() {
  return (
    <React.Fragment>
      <h2 className={styles.header}>Event Mendatang</h2>
      <ul>
        <EventSummary />
      </ul>
    </React.Fragment>
  );
}

export default Event;
