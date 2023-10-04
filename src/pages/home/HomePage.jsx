import { useEffect, useState } from "react";
import styles from "./homePage.module.css";
import profilePicture from "./profilePicture.png";
import { weatherApi } from "../../utils/api";

const HomePage = () => {
  const userData = JSON.parse(localStorage.getItem("userInfo")); //getting user info
  const userSavedCategory = JSON.parse(localStorage.getItem("SavedCategories")); //getting user saved categories
  const [notes, setNotes] = useState(""); //state to store notes
  const [weather, setWeather] = useState(); //state to store weather api
  // function to handle notes
  const handleNotes = (data) => {
    setNotes(data);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  useEffect(() => {
    setWeather(weatherApi());
  }, []);
  return (
    <div className={styles.container}>
      {/* left start */}
      <div className={styles.left}>
        {/* left top start */}
        <div className={styles.leftTop}>
          <div className={styles.infoSection}>
            {/* user info start */}
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
            {/* user info end*/}
            {/* weather info start */}
            <div className={styles.weatherInfo}>
              <div className={styles.weatherDateTime}>
                <h2>Date</h2>
                <h2>Time</h2>
              </div>
              <div className={styles.weatherData}></div>
            </div>
            {/* weather info end */}
          </div>
          {/* notes section start */}
          <div className={styles.notesSection}>
            <label htmlFor="notes">All notes</label>
            <textarea
              id="notes"
              className={styles.noteText}
              value={notes}
              onChange={(e) => handleNotes(e.target.value)}
            ></textarea>
          </div>
          {/* notes section end */}
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