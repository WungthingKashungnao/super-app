import { useEffect, useState } from "react";
import styles from "./entertainment.module.css";
import { moviesApi } from "../../utils/api";

const EntertainmentCard = ({ genreMovie }) => {
  const [movies, setMovies] = useState(); //state to store api data
  useEffect(() => {
    fetchMovieApi(genreMovie);
  }, [genreMovie]);

  const fetchMovieApi = (genre) => {
    moviesApi(genre).then((data) => {
      setMovies(data.results.slice(0, 4));
    });
  };
  // console.log(movies?.results.slice(0, 4));
  console.log(movies);
  return (
    <div className={styles.categoryList}>
      {movies && movies?.map((data) => <span>{data.title}</span>)}
    </div>
  );
};

export default EntertainmentCard;
