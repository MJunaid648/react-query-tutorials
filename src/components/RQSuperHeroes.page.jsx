import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const fetchSuperHeroes = async () => {
  console.log("fetching");
  return await axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const [performRefetch, setPerfomRefetch] = useState(3000);

  function onSuccess(data) {
    console.log("success");
    if (data.data.length == 4) {
      console.log("stop");
      setPerfomRefetch(false);
    }
  }
  function onError(error) {
    console.log("error");

    if (error) {
      console.log("stop");
      setPerfomRefetch(false);
    }
  }

  const { isLoading, data, isError, error, isFetching, isStale, refetch } =
    useQuery("super-heroes", fetchSuperHeroes, {
      // enabled: false,
      onError,
      onSuccess,
      staleTime: 10000,
      // cacheTime: 1000,
      // refetchOnReconnect:true,
      // refetchOnWindowFocus:true,
      // refetchOnMount: true,
      // refetchInterval: performRefetch,
      // refetchIntervalInBackground:true,
    });
  // console.log("Loading:", isLoading, "     Fetching:", isFetching);

  // useEffect(() => {
  //   if (isStale) refetch();
  // }, [isStale]);
  // if (isLoading) {
  //   return <h2>Loading...</h2>;
  // }

  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      {/* <button onClick={refetch}>Refetch Data</button> */}
    </>
  );
};

export default RQSuperHeroesPage;
