import styles from "./entertainmentCard.module.css";
import { moviesApi } from "../../utils/api";
import { useEffect, useState } from "react";

const EntertainmentCard = () => {
  const genres = JSON.parse(localStorage.getItem("SavedCategories"));
  const [movies, setMovies] = useState(); //state to store api data

  //   useEffect(() => {
  //     fetchApiData();
  //   }, []);

  //   //   function to fetch api data
  //   const fetchApiData = () => {
  //     moviesApi().then((data) => {
  //       setMovies(data);
  //     });
  //   };

  //   console.log(movies);
  return (
    <div className={styles.container}>
      {genres &&
        genres.map((genre) => (
          <div key={genre.value}>
            <h4>{genre.label}</h4>
            <div className={styles.theItems}>
              <div className={styles.item}>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EntertainmentCard;
