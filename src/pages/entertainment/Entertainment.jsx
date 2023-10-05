import styles from "./entertainment.module.css";
import profilePicture from "./profilePicture.png";
import { moviesApi } from "../../utils/api";
import { useEffect, useState } from "react";

const Entertainment = () => {
  const genres = JSON.parse(localStorage.getItem("SavedCategories"));
  const [movies, setMovies] = useState(); //state to store api data
  useEffect(() => {
    fetchMovieApi("romance");
  }, []);

  const fetchMovieApi = (genre) => {
    moviesApi(genre).then((data) => {
      setMovies(data);
    });
  };
  console.log(movies?.results.slice(0, 4));
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.brand}>Super App</h2>
        <div className={styles.userProfile}>
          <img src={profilePicture} alt="" />
        </div>
      </div>
      <div className={styles.entertainment}>
        <h2>Entertainment according to your choice</h2>
        <div className={styles.entertainmentCategories}>
          {genres.map((data) => (
            <div key={data.value}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
