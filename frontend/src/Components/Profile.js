import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../Store/Reducer/SignIn";
import { Link, useParams } from "react-router-dom";
import Auth from "../Store//Services/Auth";
import { useSelector } from "react-redux";
import {
  selectUserById,
  selectAllUsers,
} from "../PostFeatures/users/usersSlice";
// import ImageUpload from "react-images-uploader                                                                                                                                                                                ";
import { useGetPostsByUserIdQuery } from "../PostFeatures/posts/postsSlice";

const Profile = () => {
  const { userId } = useParams();
  let isLoggedIn = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    id: null,
    name: "",
    email: "",
    image: "",

  };
    
     
     
  const [selectedFile, setSelectedFile] = useState();

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
 

  const [User, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const getUser = (id) => {
    Auth.get(`users/${isLoggedIn.logged_user.id}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getUser(isLoggedIn.logged_user.id);
  }, [isLoggedIn.logged_user.id]);



console.log(User);
  const save = (e) => {
    

     e.preventDefault();
    dispatch(updateUser({ id: User.id, data: User }))
      .unwrap()
      .then((response) => {})
      .catch((e) => {
        console.log(e);
      });
  };
    const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  // const onImageChange = event => {
  //   console.log(event.target.files[0]);
  //   let files = event.target.files;
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);

  //   reader.onload = (e) => {

  //     setUser({ ...User, image: e.target.name })
  //   }

  // }
     
   const handleChange = (e) => {
      setUser({
        ...User,image: e.target.files[0],
      });
    };


  const user = useSelector((state) =>
    selectUserById(state, Number(isLoggedIn.logged_user.id))
  );

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(isLoggedIn.logged_user.id);

  let content;
  // if (isLoading) {
  //   content = <p>Loading...</p>;
  // } else if (isSuccess) {
  //   const { ids, entities } = postsForUser;
  //   content = ids.map((id) => (
  //     <div key={id}>

  //         {entities[id].title}
  //         {entities[id].date}

  //     </div>
  //   ));
  // else if (isError) {
  //   content = <p>{error}</p>;
  //   }
  let count = 1;
  if (isLoading) {
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map((id) => {
      return (
        <>
          <tbody key={id}>
            <tr>
              <td>{count++}</td>
              <td> {entities[id].title}</td>
              <td>{entities[id].body}</td>
              <td>{entities[id].date}</td>
              <td>👍 {entities[id].reactions.thumbsUp}</td>
              <td>❤️ {entities[id].reactions.heart}</td>
            </tr>
          </tbody>
        </>
      );
    });
  }
  return (
    <>
      <hr/>
      <div class="wrapper2">
        <div class="container">
          <div class="wraper2">
            <div class="row">
              <div class="col-sm-12">
                <div class="  bg-picture2 text-center">
                  <div class="bg-overlay bg-picture-overlay2"></div>
                  <div class="profile-info-name2">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      class="thumb-lg img-circle "
                      alt="profile-image"
                      bg-overlay
                    />
                    <h3 class="text-white">{User.name}</h3>
                  </div>
                </div>
                {/* <!--/ meta --> */}
              </div>
            </div>
            <div class="row user-tabs">
              <div class="col-lg-6 col-md-9 col-sm-9">
                <ul class="nav nav-tabs tabs" style={{ width: "100%" }}>
                  <li class="active tab" style={{ width: "25%" }}>
                    <a
                      href="#home"
                      data-toggle="tab"
                      aria-expanded="false"
                      class="active"
                    >
                      <span class="visible-xs">
                        <i class="fa fa-home"></i>
                      </span>
                      <span class="hidden-xs">About Me</span>
                    </a>
                  </li>

                  <li class="tab" style={{ width: "25%" }}>
                    <a
                      href="#settings-2"
                      data-toggle="tab"
                      aria-expanded="false"
                    >
                      <span class="visible-xs">
                        <i class="fa fa-cog"></i>
                      </span>
                      <span class="hidden-xs">Settings</span>
                    </a>
                  </li>

                  <div
                    class="indicator"
                    style={{ right: "476px", left: "0px" }}
                  ></div>
                  <div
                    class="indicator"
                    style={{ right: "476px", left: "0px" }}
                  ></div>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="tab-content profile-tab-content">
                  <div class="tab-pane active" id="home">
                    <div class="row">
                      <div class="col-md-12">
                        {/* <!-- Personal-Information --> */}
                        <div class="panel panel-default panel-fill">
                          <div class="tab-pane" id="messages-2">
                            {/* <!-- Personal-Information --> */}
                            <div class="panel panel-default panel-fill">
                              <div class="panel-heading">
                                <h3 class="panel-title">My Posts</h3>
                              </div>
                              <div class="panel-body">
                                <div class="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th>#</th>
                                        <th>title</th>
                                        <th>post</th>
                                        <th> Date</th>
                                        <th>like</th>
                                        <th>heart</th>
                                      </tr>
                                    </thead>
                                    {content}
                                  </table>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Personal-Information --> */}
                          </div>
                        </div>
                        {/* <!-- Personal-Information --> */}
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane" id="messages-2">
                    {/* <!-- Personal-Information --> */}
                    <div class="panel panel-default panel-fill">
                      <div class="panel-heading">
                        <h3 class="panel-title">My Projects</h3>
                      </div>
                      <div class="panel-body">
                        <div class="table-responsive">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Project Name</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Assign</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Moltran Admin</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-info">
                                    Work in Progress
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Moltran Frontend</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-success">
                                    Pending
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Moltran Admin</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-pink">Done</span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Moltran Frontend</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-purple">
                                    Work in Progress
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Moltran Admin</td>
                                <td>01/01/2015</td>
                                <td>07/05/2015</td>
                                <td>
                                  <span class="label label-warning">
                                    Coming soon
                                  </span>
                                </td>
                                <td>Coderthemes</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Personal-Information --> */}
                  </div>

                  <div class="tab-pane" id="settings-2">
                    {/* <!-- Personal-Information --> */}
                    <div class="panel panel-default panel-fill">
                      <div class="panel-heading">
                        <h3 class="panel-title">Edit Profile</h3>
                      </div>
                      <div class="panel-body">
                        {/* <form
                          role="form"
                          onSubmit={(event) => save(event)}
                          encType="multipart/form-data"
                        > */}
                          <div class="form-group">
                            <label for="FullName">Full Name</label>
                            <input
                              type="text"
                              onChange={(event) => onInputChange(event)}
                              // onChange={(e) => setName(e.target.value)}
                              name="name"
                              value={User.name}
                              // id="FullName"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="Email">Email</label>
                            <input
                              type="email"
                              // onChange={(e) => setemail(e.target.value)}
                              onChange={(event) => onInputChange(event)}
                              name="email"
                              value={User.email}
                              id="Email"
                              class="form-control"
                            />
                          </div>
                          <div class="form-group">
                            <label for="image">image</label>
                            <input
                              type="file"
                              // accept="image/*"
                              onChange={handleChange}

                              name="image"
                              id="Username"
                              class="form-control"
                            />
                          </div>
                          {/* <div class="form-group">
                            <label for="Password">Password</label>
                            <input
                              type="password"
                              placeholder="6 - 15 Characters"
                              id="Password"
                              class="form-control"
                            />
                          </div> */}
                          {/* <div class="form-group">
                            <label for="RePassword">Re-Password</label>
                            <input
                              type="password"
                              placeholder="6 - 15 Characters"
                              id="RePassword"
                              class="form-control"
                            />
                          </div> */}
                          <button
                            class="btn btn-primary waves-effect waves-light w-md"
                            type="submit"
                            onClick={(event) => save(event)}
                          >
                            Save
                          </button>{" "}
                        {/* </form> */}
                      </div>
                    </div>
                    {/* <!-- Personal-Information --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Footer --> */}
  
            {/* <!-- End Footer --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end wrapper --> */}
      </div>
      <script type="text/javascript"></script>
    </>
  );
};

export default Profile;
