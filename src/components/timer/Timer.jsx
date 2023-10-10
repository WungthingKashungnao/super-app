import styles from "./timer.module.css";
import upArrow from "./upArrow.png";
import dwnArrow from "./downArrow.png";

const Timer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timerAimation}></div>
      {/* timer settings start */}
      <div className={styles.timerSetting}>
        <div className={styles.timeSetngIndicator}>
          <div className={styles.timerDisplay}>
            <h1>Hours</h1>
            <div className={styles.timeSpecifier}>
              <div className={styles.upTimerArrow}>
                <img src={upArrow} alt="" />
              </div>
              <p className={styles.timeTeller}>05</p>
              <div className={styles.dwnTimerArrow}>
                <img src={dwnArrow} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.timerDisplay}>
            <h1>Minutes</h1>
            <div className={styles.timeSpecifier}>
              <div className={styles.upTimerArrow}>
                <img src={upArrow} alt="" />
              </div>
              <p className={styles.timeTeller}>05</p>
              <div className={styles.dwnTimerArrow}>
                <img src={dwnArrow} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.timerDisplay}>
            <h1>Seconds</h1>
            <div className={styles.timeSpecifier}>
              <div className={styles.upTimerArrow}>
                <img src={upArrow} alt="" />
              </div>
              <p className={styles.timeTeller}>05</p>
              <div className={styles.dwnTimerArrow}>
                <img src={dwnArrow} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.timerButton}>
          <button>Start</button>
        </div>
      </div>
      {/* timer settings end*/}
    </div>
  );
};

export default Timer;
