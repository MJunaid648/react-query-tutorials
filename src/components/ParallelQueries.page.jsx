import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = async ({ queryKey }) => {
  const heroId = queryKey[1];
  return await axios.get(`http://localhost:4000/superheroes`);
};
const fetchFriends = async ({ queryKey }) => {
  const heroId = queryKey[1];
  return await axios.get(`http://localhost:4000/friends`);
};

const ParallelQueries = () => {
  const {
    data: heroesData,
    isLoading: IsHeroesLoading,
    isError: heroesError,
  } = useQuery("super-heroes", fetchSuperHeroes);
  const {
    data: friendsData,
    isLoading: IsfriendsLoading,
    isError: friendsError,
  } = useQuery("friends", fetchFriends);

  return (
    <div className="parallel-queries">
      <div className="heroes-container">
        <h2>Super Heroes</h2>
        {IsHeroesLoading && <h2>Loading...</h2>}
        {!IsHeroesLoading &&
          heroesData.data.map((hero) => <p key={hero.id}>{hero.name}</p>)}
        {heroesError && <h2>{heroesError.message}</h2>}
      </div>
      <div className="friends-container">
        <h2>Friends</h2>
        {IsfriendsLoading && <h2>Loading...</h2>}
        {!IsfriendsLoading &&
          friendsData.data.map((hero) => <p key={hero.id}>{hero.name}</p>)}
        {friendsError && <h2>{friendsError.message}</h2>}
      </div>
    </div>
  );
};

export default ParallelQueries;
