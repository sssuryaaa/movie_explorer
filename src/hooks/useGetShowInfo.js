import React, { useEffect, useState } from "react";
import { API_KEY, MOV_INFO_URL, TV_INFO_URL } from "../utils/constants";

const useGetShowInfo = (showId, isMovie) => {
  const [showInfo, setShowInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      if (isMovie) {
        const data = await fetch(MOV_INFO_URL + showId + "?api_key=" + API_KEY);
        if (!data.ok) {
          throw new Error(data.status + " : " + data.statusText);
        }
        const json = await data.json();
        setShowInfo(json);
      } else {
        const data = await fetch(TV_INFO_URL + showId + "?api_key=" + API_KEY);
        if (!data.ok) {
          throw new Error(data.status + " : " + data.statusText);
        }
        const json = await data.json();
        setShowInfo(json);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return { showInfo, errorMessage };
};

export default useGetShowInfo;
