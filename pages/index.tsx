import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCrawlingData } from "../src/api/crawlingApi";

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
  const { data } = useQuery(["crawling"], getCrawlingData);
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

        <p className={styles.description}>
          Get started by crawling{" "}
          {/* <code className={styles.code}>pages/index.tsx</code> */}
        </p>

        <div className={styles.grid}>
          {data.map((crawlingData: any) => {
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
