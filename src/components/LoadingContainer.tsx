import React, { ReactNode } from "react";
import { useSelector } from "../config/redux";
import Loading from "./LoadingSpinner";

interface LoadingContainerProps {
  children: ReactNode;
}

function LoadingContainer({ children }: LoadingContainerProps) {
  const isLoading = useSelector((state) => state.loadingReducer);
  return (
    <>
      {children}
      {isLoading && <Loading />}
    </>
  );
}

export default React.memo(LoadingContainer);
