import React from "react";
import styles from "../../styles/Home.module.css";

const DataGrid = ({ data }: any) => {
  return (
    <div className={styles.grid}>
      {data?.map((crawlingData: any) => {
        return (
          <a
            key={crawlingData.link}
            href={crawlingData.link}
            className={styles.card}
          >
            <h2>바로가기 &rarr;</h2>
            <p>{crawlingData.name}</p>
            {crawlingData.price ?? null}
          </a>
        );
      })}
    </div>
  );
};

export default DataGrid;
