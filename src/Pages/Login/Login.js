import React from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  let pswrd = document.getElementById("pswrd");
  let toggleBtn = document.getElementById("toggleBtn");

  let lowerCase = document.getElementById("lower");
  let upperCase = document.getElementById("upper");
  let digit = document.getElementById("number");
  let specialChar = document.getElementById("special");
  let minLength = document.getElementById("length");

  function checkPassword(data) {
    // javascript regular expression pattern
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    // Lower case validation check
    if (lower.test(data)) {
      lowerCase.classList.add("valid");
    } else {
      lowerCase.classList.remove("valid");
    }

    // upper case validation check
    if (upper.test(data)) {
      upperCase.classList.add("valid");
    } else {
      upperCase.classList.remove("valid");
    }

    // number case validation check
    if (number.test(data)) {
      digit.classList.add("valid");
    } else {
      digit.classList.remove("valid");
    }

    // special charater case validation check
    if (special.test(data)) {
      specialChar.classList.add("valid");
    } else {
      specialChar.classList.remove("valid");
    }

    // minimum Length validation check
    if (length.test(data)) {
      minLength.classList.add("valid");
    } else {
      minLength.classList.remove("valid");
    }
  }

  // show hide password
  toggleBtn.onclick = function () {
    if (pswrd.type === "password") {
      pswrd.setAttribute("type", "text");
      toggleBtn.classList.add("hide");
    } else {
      pswrd.setAttribute("type", "password");
      toggleBtn.classList.remove("hide");
    }
  };

  return (
    // <div className={classes.box}>
    //   <div className={classes.form}>
    //     <h2>Sign in</h2>
    //     <div className={classes.inputBox}>
    //       <input type="text" required="required" />
    //       <span>Username</span>
    //       <i></i>
    //     </div>
    //     <div className={classes.inputBox}>
    //       <input type="password" required="required" />
    //       <span>Password</span>
    //       <i></i>
    //     </div>
    //     <div className={classes.links}>
    //       <Link to="">Forgot Password</Link>
    //       <Link to="">Signup</Link>
    //     </div>
    //     <input type="submit" value="Login" />
    //   </div>
    // </div>
    // <div class="box">
    //   <div class="inputBox">
    //     <input
    //       type="password"
    //       id="pswrd"
    //       placeholder="Password"
    //       onkeyup="checkPassword(this.value)"
    //     />
    //     <span id="toggleBtn"></span>
    //   </div>
    //   <div class="validation">
    //     <ul>
    //       <li id="lower">At least one lowercase character</li>
    //       <li id="upper">At least one uppercase character</li>
    //       <li id="number">At least one number</li>
    //       <li id="special">At least one special character</li>
    //       <li id="length">At least 8 characters</li>
    //     </ul>
    //   </div>
    // </div>
    null
  );
};

export default Login;
