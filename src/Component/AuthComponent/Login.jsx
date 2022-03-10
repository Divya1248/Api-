import React, { useState } from "react";
import "./Login.css";


const Loginpage = () => {
  let [state, setstate] = useState({
    email: "",
    password: "",
  });
  let [toggle, settoggle] = useState(false);
  let { email, password } = state;
  let handlechange = e => {
    let { value, name } = e.target;
    setstate({ ...state, [name]: value });
    settoggle(!toggle);
  };
  let handleSubmit = e => {
    e.preventDefault();

    if (email == "") {
      settoggle(!toggle);
    }
    console.log(email, password);
  };
  return (
    <section id="loginBlock">
      <article>
        <div className="background1">
          <img src="bgImage.jpg" alt="background" />
        </div>
        <main className="logintemplate">
          <div className="formheader">
            <img src="./AmazonLogo.png" alt="amazon" />
          </div>
          <div className="formbody">
            <div className="loginhead">
              <p className="logintitle">Login</p>
            </div>
            <figure>
              <img src="treeImg.png" alt="tree" />
            </figure>
            <form className="formbx">
              <div className="forminput">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handlechange}
                />

                <span
                  className="required"
                  //   style={
                  //     loading
                  //        { display: "block" }
                  //       : { display: "none" }
                  //   }
                  style={
                    toggle === true ? { display: "block" } : { display: "none" }
                  }
                >
                  <p>
                    <i class="fas fa-minus-circle"></i> This email field is
                    required
                  </p>
                </span>
              </div>

              <div className="forminput">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handlechange}
                />
              </div>
              <div className="forminput btn">
                <button onClick={handleSubmit}>sign In</button>
              </div>

              <div className="password">
                <span>
                  <p>Forgot Password ?</p>
                </span>
                <span>
                  <p>
                    New User ? <a href="/date">Sign Up</a>
                  </p>
                </span>
              </div>
              <div className="sociallogin1 ">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.rsq6Q0bnHJB-QRaolzy0_QHaE7&pid=Api&P=0&w=248&h=165"
                  alt="google"
                />
                <button>continue with google</button>
              </div>
              <div className="sociallogin2 ">
                <img
                  src="https://www.freepnglogos.com/uploads/facebook-logo-16.png"
                  alt="facebook"
                />
                <button>continue with facebook</button>
              </div>
            </form>
          </div>
        </main>
      </article>
    </section>
  );
};

export default Loginpage;
