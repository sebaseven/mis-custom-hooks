import { useRef } from "react";
import { useState, useEffect } from "react";

export const useFetch = (url) => {

const isMounted = useRef(true)

useEffect(() => {
  //uso solo en cleanup, o sea cuando se desmonta....
  return () => {
    isMounted.current = false;
  }
},[])
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
          if (isMounted.current) {
            setState({ data: data, loading: false, error: null });
          }
      });
  }, [url]);
  return state;
};
