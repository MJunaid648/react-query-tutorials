import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      enabled: false,
      // staleTime:40000,
      // cacheTime:120000,
      // refetchOnReconnect:true,
      // refetchOnWindowFocus:true,
      // refetchOnMount:true,
      // refetchInterval:3000,
      // refetchIntervalInBackground:true,
    }
  );
  console.log("Loading:", isLoading, "     Fetching:", isFetching);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
      <button onClick={refetch}>Refetch Data</button>
    </>
  );
};

export default RQSuperHeroesPage;
