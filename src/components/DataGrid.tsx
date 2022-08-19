import React from "react";
import styles from "../../styles/Home.module.css";
import CrawlingData from "../interface/CrawlingData";

interface DataGridProps {
  data: CrawlingData[];
}

const DataGrid = ({ data }: DataGridProps) => {
  return (
    <div className={styles.grid}>
      {data?.map((crawlingData: CrawlingData) => {
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
