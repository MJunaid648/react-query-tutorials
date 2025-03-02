import axios from "axios";
import { useQuery } from "react-query";

const fetchHero = async ({queryKey}) => {
    const heroId = queryKey[1]    
  return await axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["seper-hero", heroId], fetchHero);
};
