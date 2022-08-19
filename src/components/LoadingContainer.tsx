import React from "react";
import { useSelector } from "../config/redux";
import Loading from "./LoadingSpinner";

function LoadingContainer({ children }: any) {
  const isLoading = useSelector((state) => state.loadingReducer);
  return (
    <>
      {children}
      {isLoading && <Loading />}
    </>
  );
}

export default React.memo(LoadingContainer);
