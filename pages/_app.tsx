import { useState } from "react";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "../src/config/redux";
import LoadingContainer from "../src/components/LoadingContainer";

import "../styles/Home.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <LoadingContainer>
            <Component {...pageProps} />
          </LoadingContainer>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
