import React from "react";
import styles from "../../styles/Home.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles[`spinner-container`]}>
      <div className={styles[`loading-spinner`]}></div>
    </div>
  );
}
