import styles from "./homePage.module.css";
import profilePicture from "./profilePicture.png";

const HomePage = () => {
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const userSavedCategory = JSON.parse(localStorage.getItem("SavedCategories"));

  return (
    <div className={styles.container}>
      {/* left start */}
      <div className={styles.left}>
        {/* left top start */}
        <div className={styles.leftTop}>
          <div className={styles.infoSection}>
            <div className={styles.userInfo}>
              <div className={styles.profilePic}>
                <img src={profilePicture} alt="profile dp" />
              </div>
              <div className={styles.profileData}>
                <div className={styles.userBio}>
                  <p>{userData.name}</p>
                  <p>{userData.email}</p>
                  <h4>{userData.username}</h4>
                </div>
                <div className={styles.userCategory}>
                  {userSavedCategory &&
                    userSavedCategory.map((data) => (
                      <div className={styles.ctgCard} key={data.name}>
                        {data.label}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className={styles.weatherInfo}></div>
          </div>
          <div className={styles.notesSection}></div>
        </div>
        {/* left top end */}
        {/* left bot start */}
        <div className={styles.leftBot}></div>
        {/* left bot end */}
      </div>
      {/* left end */}
      {/* right start */}
      <div className={styles.right}>
        <button className={styles.browseBtn}>Browse</button>
      </div>
      {/* right end */}
    </div>
  );
};

export default HomePage;
