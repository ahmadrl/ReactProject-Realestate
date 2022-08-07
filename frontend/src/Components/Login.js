import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { login } from "../Store/Reducer/SignIn";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [User, setUser] = useState(initialState);
  const [loggeduser, setLoggeduser] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const save = () => {
    const { email, password, role } = User;

    dispatch(login({ email, password, role }))
      .unwrap()
      .then((data) => {
        console.log(data);
        console.log(User);
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          roles: ["Admin"],
        });
        localStorage.setItem("user", JSON.stringify(data));
        
        let isLoggedIn = JSON.parse(localStorage.getItem("user"));
        
        console.log(isLoggedIn.logged_user.id)
        if (isLoggedIn.logged_user.role == "admin") {
          swal({
            title: "Admin!",

            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/adtable";
          });
        } else {
          swal({
            title: "User!",
            text: "You are logged in!!",
            icon: "warning",
            button: "sure!",
          }).then(function () {
            window.location.href = "/";
          });
        }

        setSubmitted(true);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div class="clearfix"></div>
      <div class="allWrapper">
        <div class="innerr">
          <img
            src="https://cdn.dribbble.com/users/3992534/screenshots/10866726/media/fe93445683a5d42974c13a7a9a1174fa.jpg"
            alt=""
            class="image-1"
            style={{ height: "600px", width: "550px" }}
          />
          <div class="register">
            <h3>Please login to your account</h3>
            <div class="form-holderr">
              <span class="lnr lnr-envelope"></span>
              <input
                type="text"
                class="form-controll"
                placeholder="Email"
                onChange={(event) => handleInputChange(event)}
                value={User.email || ""}
                required
                name="email"
              />
            </div>
            <div class="form-holderr">
              <span class="lnr lnr-lock"></span>
              <input
                type="password"
                class="form-controll"
                placeholder="Password"
                onChange={handleInputChange}
                value={User.password || ""}
                required
                name="password"
              />
            </div>
            <button class="registerBtn" type="submit" onClick={save}>
              <span>Login</span>
            </button>{" "}
            <p class="text-center mt-4">
              Don't have account? <a href="/signup">Sign up</a>
            </p>
          </div>

          <img src="" alt="" class="image-2" />
        </div>
      </div>

      {/* // <!-- LISTING LIST --> */}

      {/* <!-- END CALL TO ACTION --> */}
    </>
  );
};
export default SignIn;
