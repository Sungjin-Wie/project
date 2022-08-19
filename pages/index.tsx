import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCrawlingData } from "../src/api/crawlingApi";
import { Suspense } from "react";
import DataGrid from "../src/components/DataGrid";
import LoadingSpinner from "../src/components/LoadingSpinner";
import useLoading from "../src/hooks/useLoading";

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["crawling"], getCrawlingData);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  const { data, isLoading } = useQuery(["crawling"], getCrawlingData, {
    staleTime: 10 * 1000, // 10초
    refetchInterval: 30 * 1000,
    refetchIntervalInBackground: true,
  });
  useLoading(isLoading);

  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="환영합니다!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Playground!</a>
        </h1>

        <p className={styles.description}>데이터는 30초마다 갱신됩니다.</p>
        <DataGrid data={data} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
