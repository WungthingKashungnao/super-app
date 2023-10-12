import styles from "./entertainment.module.css";
import profilePicture from "./profilePicture.png";
import EntertainmentCard from "../../components/entertainMentCard/EntertainmentCard";
import { useNavigate } from "react-router-dom";

const Entertainment = () => {
  const genres = JSON.parse(localStorage.getItem("SavedCategories")); //getting the categories saved by the user
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.brand} onClick={() => navigate("/homePage")}>
          Super App
        </h2>
        <div className={styles.userProfile}>
          <img
            src={profilePicture}
            alt=""
            onClick={() => navigate("/homePage")}
          />
        </div>
      </div>
      <div className={styles.entertainment}>
        <h2>Entertainment according to your choice</h2>
        {/* here im looping for all the categories of the movie genres ---start--- */}
        <div className={styles.entertainmentCategories}>
          {genres &&
            genres.map((data) => (
              <div key={data.value}>
                <h3>{data.label}</h3>
                <EntertainmentCard genreMovie={data.value} key={data.value} />
              </div>
            ))}
        </div>
        {/* here im looping for all the categories of the movie genres ---start--- */}
      </div>
    </div>
  );
};

export default Entertainment;
