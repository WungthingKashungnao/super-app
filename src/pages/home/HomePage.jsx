import { useEffect, useState } from "react";
import styles from "./homePage.module.css";
import profilePicture from "./profilePicture.png";
import { weatherApi, newsApi } from "../../utils/api";
import pressureLogo from "./pressureLogo.png";
import humidLogo from "./humidLogo.png";
import windLogo from "./windLogo.png";

const HomePage = () => {
  const userData = JSON.parse(localStorage.getItem("userInfo")); //getting user info
  const userSavedCategory = JSON.parse(localStorage.getItem("SavedCategories")); //getting user saved categories
  const [notes, setNotes] = useState(""); //state to store notes
  const [weather, setWeather] = useState(); //state to store weather api
  const [news, setNews] = useState(); //state to store news api

  let apiNewsNo = Math.floor(Math.random() * 100); //generating random numbers to fetch random news

  // function to handle notes
  const handleNotes = (data) => {
    setNotes(data);
    localStorage.setItem("notes", JSON.stringify(data));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // calling the api function to fetch data
  const fetchApi = () => {
    weatherApi().then((data) => {
      setWeather(data);
    });
    newsApi().then((data) => {
      setNews(data);
    });
  };

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
                      <div className={styles.ctgCard} key={data.value}>
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
                <h2>{weather?.location?.localtime.split(" ")[0]}</h2>
                <h2>{weather?.location?.localtime.split(" ")[1]}</h2>
              </div>
              <div className={styles.weatherData}>
                <div className={styles.weatherCodition}>
                  <div className={styles.conditionTop}>
                    <img src={weather?.current?.condition.icon} alt="" />
                  </div>
                  <div className={styles.conditionBot}>
                    <p>{weather?.current?.condition.text}</p>
                  </div>
                </div>
                <div className={styles.weatherCodition}>
                  <div className={styles.conditionTop}>
                    <h2>{weather?.current?.feelslike_c}&deg;C</h2>
                  </div>
                  <div className={styles.conditionBot}>
                    <img src={pressureLogo} alt="" />
                    <span>
                      {weather?.current?.pressure_mb} mbar <br /> Pressure
                    </span>
                  </div>
                </div>
                <div className={styles.weatherCodition}>
                  <div className={styles.conditionTop}>
                    <img src={windLogo} alt="" />
                    <span>
                      {weather?.current?.wind_kph} km/hr <br /> Wind
                    </span>
                  </div>
                  <div className={styles.conditionBot}>
                    <img src={humidLogo} alt="" />
                    <span>
                      {weather?.current?.humidity} % <br /> Humidity
                    </span>
                  </div>
                </div>
              </div>
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
        {/* `${news?.articles[0]?.urlToImage}` */}
        <div className={styles.newsTop}>
          <img src={news?.articles[apiNewsNo]?.urlToImage} alt="" />
          <div className={styles.newsHeading}>
            <div className={styles.newsTitle}>
              <span>{news?.articles[apiNewsNo]?.title.slice(0, 70)}</span>
            </div>
            <div className={styles.newsDateTime}>
              <span>{weather?.location?.localtime.split(" ")[0]}</span>
              <span>{weather?.location?.localtime.split(" ")[1]}</span>
            </div>
          </div>
        </div>
        <div className={styles.newsBot}>
          {news?.articles[apiNewsNo]?.content}
        </div>
      </div>
      {/* right end */}
      <button className={styles.browseBtn}>Browse</button>
    </div>
  );
};

export default HomePage;
