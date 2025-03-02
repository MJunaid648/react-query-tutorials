import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHeroes = async (heroId) => {
  const res = await axios.get(`http://localhost:4000/superheroes/${heroId}`);
  return res.data;
};

const DynamicParallel = ({ heroIds }) => {
  const queriesResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );

  return (
    <div>
      {queriesResult.map((query) => {
        const { data, error, isError, isLoading, queryKey } = query;

        if (isLoading) return <h2 key={`${queryKey}-loading`}>Loading...</h2>;
        if (isError) return <h2 key={`${queryKey}-error`}>{error.message}</h2>;

        return (
          <p key={`${queryKey}-${data.id}`}>
            {data.name} - {data.alterEgo}
          </p>
        );
      })}
    </div>
  );
};

export default DynamicParallel;
