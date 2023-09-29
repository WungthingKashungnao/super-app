import style from "./signUp.module.css";

const SignUp = () => {
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
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="UserName" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Mobile" />
          <div className={style.checkBox}>
            <input type="checkbox" id="myData" name="myData" value="myData" />
            <label htmlFor="myData">
              Share my registration data with Superapp
            </label>
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

export default SignUp;
