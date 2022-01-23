import React from "react";

import BannerTextMain from "./BannerTextMain";

import styles from "./Banner.module.css";

import banners from "../../img-resource/banner/banner";

function Banner(props) {
  return (
    <div className={styles.container}>
      <BannerTextMain page={props.page} />
      <img
        className={styles.banner}
        src={banners[props.page]}
        alt="Main banner"
      />
    </div>
  );
}

export default Banner;
