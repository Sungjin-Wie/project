import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getCrawlingData } from "../src/api/crawlingApi";
import DataGrid from "../src/components/DataGrid";
import useLoading from "../src/hooks/useLoading";
import { useCallback } from "react";

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
  const { data, isLoading, isRefetching, refetch } = useQuery(
    ["crawling"],
    getCrawlingData,
    {
      staleTime: 5 * 1000, // 5초
      refetchInterval: 30 * 1000,
      refetchIntervalInBackground: true,
    },
  );
  useLoading(isLoading || isRefetching);

  const onClickRefetchButton = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <div id="home-page">
      <div className="container">
        <Head>
          <title>Playground - Home Page</title>
          <meta name="description" content="환영합니다!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main">
          <h1 className="title">
            Welcome to <a href="https://nextjs.org">Playground!</a>
          </h1>
          {store}
          <p className="description">데이터는 30초마다 갱신됩니다.</p>
          <button className="refetch-button" onClick={onClickRefetchButton}>
            갱신하기
          </button>
          <DataGrid data={data} />
        </main>
        <footer className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className="logo">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
