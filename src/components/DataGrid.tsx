import React from "react";
import CrawlingData from "../interface/CrawlingData";

interface DataGridProps {
  data: CrawlingData[];
}

const DataGrid = ({ data }: DataGridProps) => {
  return (
    <div className="grid">
      {data?.map((crawlingData: CrawlingData) => {
        return (
          <a key={crawlingData.link} href={crawlingData.link} className="card">
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
