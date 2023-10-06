import styles from "./entertainment.module.css";
import profilePicture from "./profilePicture.png";
import EntertainmentCard from "../../components/entertainMentCard/EntertainmentCard";

const Entertainment = () => {
  const genres = JSON.parse(localStorage.getItem("SavedCategories"));

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
            // <div key={data.value} className={styles.categoryList}></div>
            <EntertainmentCard genreMovie={data.value} key={data.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
