import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate()
  const check = () => {

    if (!localStorage.getItem("user")) { alert('please login first') }
    else

      navigate('/posts/add')

  }
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));

  function logout() {
    swal({
      title: "logging out!",
      text: "Are you sure you want to log out!",
      icon: "warning",
      button: "sure!",
    }).then(function () {
      window.location.href = "/";
    });
    localStorage.clear();
  }
  return (
    <>
      <div class="topbar d-none d-sm-block">
        <div class="container ">
          <div class="row">
            <div class="col-sm-12 col-md-5">
              <div class="topbar-left">
                <div class="topbar-text">Monday, Augest 8, 2022</div>
              </div>
            </div>
            <div class="col-sm-12 col-md-7">
              <div class="list-unstyled topbar-right">
                <ul class="topbar-link">
                  <li>
                    <a href="/contact" title="">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul class="topbar-sosmed">
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END NAVBAR TOP --> */}
      <div class="navbar navbar-hover navbar-expand-lg navbar-soft">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="images/logo-blue-stiky.png" alt="" class="img-fluid" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav99"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main_nav99" >
            <ul class="navbar-nav  mx-auto" >
              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="/">
                  Home
                </a>
              </li>

              {/* style={{textTransform:'capitalize'}} */}

              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="/list">
                  Properties
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/">
                  Ask
                </a>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="posts">
                  Ask
                </Link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About{" "}
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                >
                  {" "}
                  Account{" "}
                </a>
                <ul class="dropdown-menu dropdown-menu-left animate fade-up">
                  {!isLoggedIn ? (
                    <>
                      <li>
                        <a class="dropdown-item" href="/login">
                          Login
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/signup">
                          Register
                        </a>
                      </li>
                    </>
                  ) : null}

                  {isLoggedIn ? (
                    <>
                      <li>
                        <a class="dropdown-item" href="/">
                          {" "}
                          <Link
                            style={{ color: "black" }}
                            to={"/users/" + isLoggedIn.logged_user.id}
                          >
                            Profile
                          </Link>{" "}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/#" onClick={logout}>
                          Logout
                        </a>
                      </li>
                    </>
                  ) : null}
                </ul>
              </li>
            </ul>

            <ul class="navbar-nav">
              <li onClick={check}>
                <a href="#" class="btn btn-primary text-capitalize">
                  <i class="fa fa-plus-circle mr-1"></i> add post
                </a>
              </li>
            </ul>

            {/* <!-- Search content bar.// --> */}
            <div class="top-search navigation-shadow">
              <div class="container">
                <div class="input-group ">
                  <form action="#">
                    <div class="row no-gutters mt-3">
                      <div class="col">
                        <input
                          class="form-control border-secondary border-right-0 rounded-0"
                          type="search"
                          value=""
                          placeholder="Search "
                          id="example-search-input4"
                        />
                      </div>
                      <div class="col-auto">
                        <a
                          class="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                          href="/search-result.html"
                        >
                          <i class="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- Search content bar.// --> */}

            {/* <!-- navbar-collapse.// --> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
