import { useEffect, useState } from "react";
import styles from "./entertainment.module.css";
import { moviesApi } from "../../utils/api";

const EntertainmentCard = ({ genreMovie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w1280";
  const [movies, setMovies] = useState(); //state to store api data
  useEffect(() => {
    fetchMovieApi(genreMovie);
  }, [genreMovie]);

  // fetching data fromt the movies api
  const fetchMovieApi = (genre) => {
    moviesApi(genre).then((data) => {
      setMovies(data.results.slice(0, 4));
    });
  };

  // here in this return statement im looping 4 movies of the same category
  return (
    <div className={styles.categoryList}>
      {movies &&
        movies?.map((data) => (
          <div className={styles.ctgImg} key={data.id}>
            <img src={`${imgUrl}${data?.poster_path}`} alt="" />
          </div>
        ))}
    </div>
  );
};

export default EntertainmentCard;
