import { useState, useEffect } from "react";
import axios from "axios";

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setData(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default SuperHeroesPage;
