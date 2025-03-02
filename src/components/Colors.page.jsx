import React from "react";
import { useColorsData } from "../hooks/useColorsData";
import axios from "axios";

const Colors = () => {
  const fetchColors = async () => {
    const res = await axios.get("http://localhost:4000/colors");
    return res;
  };

  const onSuccess = (data) => {
    console.log("data: ", data);
  };
  
  const onError = (err) => {
    console.log("err: ", err);
  };

  const { data, isLoading, refetch } = useColorsData({
    queryKey: "colors",
    fetchCall: fetchColors,
    queryOptions: {
      onSuccess,
      onError,
    //   refetchOnMount: false,
    //   refetchOnWindowFocus: false,
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h2>RQ Colors</h2>
      <button onClick={() => refetch()}>Fetch Colors</button>
      {data?.data.map((color) => (
        <div key={color.id}>{color.label}</div>
      ))}
    </>
  );
};

export default Colors;
