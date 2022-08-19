import { useEffect } from "react";
import { useDispatch } from "../config/redux";
import { setLoading } from "../reducer/loadingReducer";

function useLoading(isLoading: boolean) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(isLoading));
    return () => {
      dispatch(setLoading(false));
    };
  }, [isLoading, dispatch]);
}

export default useLoading;
