import EntertainmentCard from "../../components/entertainmentCard/EntertainmentCard";
import styles from "./entertainment.module.css";
import profilePicture from "./profilePicture.png";

const Entertainment = () => {
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
          <EntertainmentCard />
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
