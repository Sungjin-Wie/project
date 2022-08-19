import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCrawlingData } from "../api/crawlingApi";
import styles from "../../styles/Home.module.css";

const DataGrid = () => {
  const { data } = useQuery(["crawling"], getCrawlingData, {
    staleTime: 10 * 1000, // 10초
    refetchInterval: 30 * 1000,
    refetchIntervalInBackground: true,
    suspense: true,
  });

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
