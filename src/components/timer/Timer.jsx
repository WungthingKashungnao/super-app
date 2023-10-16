import styles from "./timer.module.css";
import upArrow from "./upArrow.png";
import dwnArrow from "./downArrow.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import useSound from "use-sound";
import alarm from "./alarm.mp3";

const Timer = () => {
  // sound to be played when timer completes
  const [playSound] = useSound(alarm);
  // state to hanlde time
  const [timeValue, setTimeValue] = useState({
    hr: 0,
    min: 0,
    sec: 0,
  });

  // timer on the animation
  const [realTime, setRealTime] = useState({
    hr: 0,
    min: 0,
    sec: 0,
  });

  //function to handle timer on the animation
  const setRealTimeHandle = () => {
    if (timeValue.hr === 0 && timeValue.min === 0 && timeValue.sec === 0) {
      return;
    } else if (timeValue.sec === 0) {
      setRealTime({ ...realTime, hr: timeValue.hr, min: timeValue.min });
    } else if (timeValue.hr === 0) {
      setRealTime({ ...realTime, min: timeValue.min, sec: timeValue.sec });
    } else if (timeValue.min === 0) {
      setRealTime({ ...realTime, hr: timeValue.hr, sec: timeValue.sec });
    } else if (timeValue.hr !== 0 && timeValue.min && timeValue.sec !== 0) {
      setRealTime({ hr: timeValue.hr, min: timeValue.min, sec: timeValue.sec });
    }
  };

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

  // total time on the animation
  let totalTime = realTime.hr * 3600 + realTime.min * 60 + realTime.sec;

  // function that displays the time inside the animation
  const displayTime = (elapsedTime) => {
    return (
      <div className={styles.timeDisplayer}>
        <span className={styles.animationTime}>{realTime.hr} : </span>
        <span className={styles.animationTime}>{realTime.min} : </span>
        <span className={styles.animationTime}>{realTime.sec}</span>
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
          duration={totalTime}
          colors={"#FF6A6A"}
          initialRemainingTime={remainingTime % totalTime}
          onComplete={() => playSound()}
        >
          {({ elapsedTime, color }) => (
            <span style={{ color }}>{displayTime(elapsedTime)}</span>
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
          <button onClick={() => setRealTimeHandle()}>Start</button>
        </div>
      </div>
      {/* timer settings end*/}
    </div>
  );
};

export default Timer;
