import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Register } from "../Store/Reducer/SignIn";
const SignUp = () => {
  const initialState = {
    email: "",
    password: "",
    name: "",
    role: "user",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png",
    confirm_password: "",
  };

  const [User, setUser] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...User, [name]: value });
  };

  const save = () => {
    const { name, email, password, role, image, confirm_password } = User;

    dispatch(Register({ name, email, password, role, image, confirm_password }))
      .unwrap()
      .then((data) => {
        console.log(data);
        console.log(User);
        setUser({
          id: data.id,
          email: data.email,
          password: data.password,
          role: data.role,
          image: data.image,
          confirm_password: data.confirm_password,
        });

      //   swal({
      //     title: "Welcome to RETHOUSE!",

      //     icon: "warning",
      //     button: "sure!",
      //   }).then(function () {
      //     window.location.href = "/";
      //   });
      //   setSubmitted(true);
      // })

      // .catch((e) => {
      //   console.log(e);
      //   swal({
      //     title: "SOMETHING WRON!",

      //     icon: "warning",
      //     button: "wrong!",
      //   }).then(function () {
      //     window.location.href = "/signup";
      //   });
      });
  };

  return (
    <>
      {/* <!-- LISTING LIST --> */}

      <div class="allWrapper">
        <div class="innerr">
          <img
            src="./register/images/20945158-removebg-preview.png"
            alt=""
            class="image-1"
            style={{ height: "600px", width: "550px", left: "-387px" }}
          />
          <div class="register">
            <h3>New Account?</h3>

            <div class="form-holderr">
              <span class="lnr lnr-phone-handset"></span>
              <input
                type="text"
                class="form-controll"
                placeholder=" name"
                onChange={handleInputChange}
                value={User.name || ""}
                name="name"
              />
            </div>
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
            <div class="form-holderr">
              <span class="lnr lnr-lock"></span>
              <input
                type="password"
                class="form-controll"
                placeholder="Confirm Password"
                onChange={handleInputChange}
                required
                value={User.confirm_password || ""}
                name="confirm_password"
              />
            </div>
            <button class="registerBtn" type="submit" onClick={save}>
              <span>Register</span>
            </button>
          </div>
          <img src="" alt="" class="image-2" />
        </div>
      </div>
    </>
  );
};
export default SignUp;
