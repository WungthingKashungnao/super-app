import styles from "./timer.module.css";
import upArrow from "./upArrow.png";
import dwnArrow from "./downArrow.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

const Timer = () => {
  // state to hanlde time
  const [timeValue, setTimeValue] = useState({
    hr: 0,
    min: 0,
    sec: 0,
  });

  // function to set the time
  const hanldeTimeValue = (type, opr) => {
    // setting time value for hour start
    if (type === "hr" && opr === "incre") {
      setTimeValue({ ...timeValue, hr: timeValue.hr + 1 });
    }
    if (type === "hr" && opr === "decre") {
      if (timeValue.hr <= 0) {
        return;
      } else {
        setTimeValue({ ...timeValue, hr: timeValue.hr - 1 });
      }
    }
    // setting time value for hour end

    // setting time value for min start
    if (type === "min" && opr === "incre") {
      setTimeValue({ ...timeValue, min: timeValue.min + 1 });
    }
    if (type === "min" && opr === "decre") {
      if (timeValue.min <= 0) {
        return;
      } else {
        setTimeValue({ ...timeValue, min: timeValue.min - 1 });
      }
    }
    // setting time value for min end

    // setting time value for sec start
    if (type === "sec" && opr === "incre") {
      setTimeValue({ ...timeValue, sec: timeValue.sec + 1 });
    }
    if (type === "sec" && opr === "decre") {
      if (timeValue.sec <= 0) {
        return;
      } else {
        setTimeValue({ ...timeValue, sec: timeValue.sec - 1 });
      }
    }
    // setting time value for sec end
  };

  // time in seconds
  const daySeconds = 86400;
  const hourSeconds = 3600;
  const minuteSeconds = 60;

  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;

  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;

  return (
    <div className={styles.container}>
      <div className={styles.timerAimation}>
        <CountdownCircleTimer
          isPlaying
          duration={daySeconds}
          colors={"#FF6A6A"}
          initialRemainingTime={remainingTime % daySeconds}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>
              {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      {/* timer settings start */}
      <div className={styles.timerSetting}>
        <div className={styles.timeSetngIndicator}>
          <div className={styles.timerDisplay}>
            <h1>Hours</h1>
            <div className={styles.timeSpecifier}>
              <div className={styles.upTimerArrow}>
                <img
                  src={upArrow}
                  alt=""
                  onClick={() => hanldeTimeValue("hr", "incre")}
                />
              </div>
              <p className={styles.timeTeller}>{timeValue.hr}</p>
              <div className={styles.dwnTimerArrow}>
                <img
                  src={dwnArrow}
                  alt=""
                  onClick={() => hanldeTimeValue("hr", "decre")}
                />
              </div>
            </div>
          </div>
          <div className={styles.timerDisplay}>
            <h1>Minutes</h1>
            <div className={styles.timeSpecifier}>
              <div className={styles.upTimerArrow}>
                <img
                  src={upArrow}
                  alt=""
                  onClick={() => hanldeTimeValue("min", "incre")}
                />
              </div>
              <p className={styles.timeTeller}>{timeValue.min}</p>
              <div className={styles.dwnTimerArrow}>
                <img
                  src={dwnArrow}
                  alt=""
                  onClick={() => hanldeTimeValue("min", "decre")}
                />
              </div>
            </div>
          </div>
          <div className={styles.timerDisplay}>
            <h1>Seconds</h1>
            <div className={styles.timeSpecifier}>
              <div className={styles.upTimerArrow}>
                <img
                  src={upArrow}
                  alt=""
                  onClick={() => hanldeTimeValue("sec", "incre")}
                />
              </div>
              <p className={styles.timeTeller}>{timeValue.sec}</p>
              <div className={styles.dwnTimerArrow}>
                <img
                  src={dwnArrow}
                  alt=""
                  onClick={() => hanldeTimeValue("sec", "decre")}
                />
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
