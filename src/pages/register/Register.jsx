import { useState } from "react";
import style from "./register.module.css";

const Register = () => {
  const [data, setData] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    check: false,
  });
  const [err, setErr] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    mobileLength: null,
    check: null,
  });

  // function to check if it is a valid email
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // function to validate form
  const handleSubmit = (e) => {
    e.preventDefault();

    let value;
    //if all the input fields are filled
    if (
      data.name !== null &&
      data.name !== "" &&
      data.username !== null &&
      data.username !== "" &&
      data.email !== null &&
      data.email !== "" &&
      data.mobile !== null &&
      data.mobile !== "" &&
      data.check === true
    ) {
      value = "all filled";
    }

    // if name is empty
    if (data.name === "" || data.name === null) {
      value = "empty name";
    }
    // if usernaem is empty
    if (data.username === "" || data.username === null) {
      value = "empty username";
    }

    // if email is empty
    if (data.email === "" || data.email === null) {
      value = "empty email";
    }
    // if mobile is empty
    if (data.mobile === "") {
      value = "empty mobile";
    }
    if (data.mobile === null) {
      value = "empty mobile";
    }
    // if check is ticked
    if (data.check === false) {
      value = "empty check";
    }
    // all is empty
    if (
      (data.name === null || data.name === "") &&
      (data.username === null || data.username === "") &&
      (data.email === null || data.email === "") &&
      (data.mobile === null || data.mobile === "")
    ) {
      value = "all empty";
    }

    alert(value);

    switch (value) {
      case "all filled":
        setErr({ ...err, mobileLength: null });
        // checking if it is a valid email
        if (isValidEmail(data.email)) {
          // checking if the length of the phone number is equal to 10
          if (data.mobile.length === 10) {
            localStorage.setItem("userInfo", JSON.stringify(data));
            setData({
              name: "",
              username: "",
              email: "",
              mobile: "",
            });
          } else {
            setErr({
              ...err,
              mobileLength: "Mobile number must be 10 digits!",
            });
            alert("incorrect mobile length");
          }
        } else {
          setData({ ...data, email: "" });
          setErr({ ...err, email: "invalid email" });
        }

        break;
      case "empty name":
        setData({ ...data, name: "" });
        setErr({ ...err, name: "name is a required field" });
        break;
      case "empty username":
        setData({ ...data, username: "" });
        setErr({ ...err, username: "username is a required field" });
        break;
      case "empty email":
        setData({ ...data, email: "" });
        setErr({ ...err, email: "email is a required field" });
        break;
      case "empty mobile":
        setData({ ...data, mobile: "" });
        setErr({ ...err, mobile: "mobile is a required field" });
        break;
      case "empty check":
        setErr({ ...err, check: "Check this box if you want to proceed" });
        break;
      case "all empty":
        setData({
          name: "",
          username: "",
          email: "",
          mobile: "",
          check: false,
        });
        setErr({
          ...err,
          name: "name is a required field",
          username: "username is a required field",
          email: "email is a required field",
          mobile: "mobile is a required field",
          check: "Check this box if you want to proceed",
        });
        break;
      default:
        return null;
    }
  };

  return (
    <div className={style.container}>
      {/* left container start */}
      <div className={style.leftCon}>
        <h3 className={style.leftText}>
          Discover new things on <br /> Superapp{" "}
        </h3>
      </div>
      {/* left container end */}
      {/* right container start */}
      <div className={style.rightCon}>
        <h1>Super App</h1>
        <h3>Create your new account</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          {data.name === "" && <p className={style.errorText}>{err.name}</p>}
          <input
            type="text"
            placeholder="UserName"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          {data.username === "" && (
            <p className={style.errorText}>{err.username}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          {data.email === "" && <p className={style.errorText}>{err.email}</p>}
          <input
            type="number"
            placeholder="Mobile"
            value={data.mobile}
            // prevent entering unwanted characters in input field
            onKeyDown={(e) =>
              ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
            }
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
          />
          {err.mobileLength && (
            <p className={style.errorText}>{err.mobileLength}</p>
          )}

          {data.mobile === "" && (
            <p className={style.errorText}>{err.mobile}</p>
          )}
          <div className={style.checkBox}>
            <input
              type="checkbox"
              id="myData"
              name="myData"
              value={data.check}
              onChange={(e) => setData({ ...data, check: !data.check })}
            />

            <label htmlFor="myData">
              Share my registration data with Superapp
            </label>
            {data.check === false && (
              <p className={style.errorTextCheck}>{err.check}</p>
            )}
          </div>
          <button>SIGN UP</button>
          <p>
            By clicking on Sign up. you agree to Superapp
            <span className={style.links}> Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className={style.links}> Privacy Policy</span>
          </p>
        </form>
      </div>
      {/* right container end */}
    </div>
  );
};

export default Register;
