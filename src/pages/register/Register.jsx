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

  // function to validate form
  const handleSubmit = (e) => {
    e.preventDefault();

    //if all the input fields are filled
    if (
      data.name !== null &&
      data.name !== "" &&
      data.username !== null &&
      data.username !== "" &&
      data.email !== null &&
      data.email !== "" &&
      data.mobile !== null &&
      data.mobile !== ""
    ) {
      // if check is ticked
      if (data.check === false) {
        setErr({ ...err, check: "Check this box if you want to proceed" });
      } else {
        // if mobile length is not equal to 10
        if (data.mobile.length !== 10) {
          setErr({ ...err, mobileLength: "Mobile number must be 10 digits!" });
        } else {
          // if all conditions are fullfilled
          if (data.mobile.length === 10) {
            setErr({ ...err, mobileLength: null });
          }
          localStorage.setItem("userInfo", JSON.stringify(data));
          setData({
            name: null,
            username: null,
            email: null,
            mobile: null,
            check: false,
          });

          alert(
            ` name: ${data.name} <br> username: ${data.username} <br> email: ${data.email} <br> mobile: ${data.mobile} <br> check: ${data.check}`
          );
        }
      }
    }

    // if name is empty
    if (data.name === "") {
      setData({ ...err, name: "" });
      setErr({ ...err, name: "name is a required field" });
    }
    // if usernaem is empty
    if (data.username === "") {
      setData({ ...err, username: "" });
      setErr({ ...err, username: "username is a required field" });
    }
    // if email is empty
    if (data.email === "") {
      setData({ ...err, email: "" });
      setErr({ ...err, email: "email is a required field" });
    }
    // if mobile is empty
    if (data.mobile === "") {
      setData({ ...err, mobile: "" });
      setErr({ ...err, mobile: "mobile is a required field" });
    }
    // if all is empty
    if (
      (data.name === null || data.name === "") &&
      (data.username === null || data.username === "") &&
      (data.email === null || data.email === "") &&
      (data.mobile === null || data.mobile === "")
    ) {
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
      });
      setErr({
        ...err,
        name: "name is a required field",
        username: "username is a required field",
        email: "email is a required field",
        mobile: "mobile is a required field",
      });
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
            onKeyDown={(evt) =>
              ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
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
          {/* {data.check === false && (
            <p className={style.errorTextCheck}>{err.check}</p>
          )} */}
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
