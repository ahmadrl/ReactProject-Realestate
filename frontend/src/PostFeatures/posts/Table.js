import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import Sidebar from "../../Admin/layouts/Sidebar";
import Footer from "../../Admin/layouts/Footer";
import { useSelector } from "react-redux";
import { selectPostIds, selectPostById, selectAllPosts } from "./postsSlice";
import { useState } from "react";
import { selectAllUsers } from "../users/usersSlice";

import { useUpdatePostMutation, useDeletePostMutation } from "./postsSlice";

const Table = ({ postId }) => {
  const [deletePost] = useDeletePostMutation();

  const deletePo = useSelector((state) =>
    selectPostById(state, Number(postId))
  );
  const users = useSelector(selectAllUsers);
  const [id, setId] = useState(deletePo?.id);
  const [title, setTitle] = useState(deletePo?.title);
  const [content, setContent] = useState(deletePo?.body);
  const [userId, setUserId] = useState(deletePo?.userId);
  const post = useSelector((state) => selectAllPosts(state, postId));
  console.log(post);
  const onDeletePostClicked = async () => {
    try {
      await deletePost({ id: post.id }).unwrap();
      setId("");
      setTitle("");
      setContent("");
      setUserId("");
      // navigate("/posts");
      window.location.href="/posts";
      alert("post was deleted succesfully");
    } catch (err) {
      console.error("Failed to delete the post", err);
    }
  };

  return (
    // <article>
    //     <h2>{post.title}</h2>
    //     <p className="excerpt">{post.body}...</p>
    //     <p className="postCredit">
    //         <Link to={`post/${post.id}`}>View Post</Link>
    //         <PostAuthor userId={post.userId} />
    //         <TimeAgo timestamp={post.date} />
    //     </p>
    //     <ReactionButtons post={post} />
    // </article>
    <>
      {/* { && .map((cloth, index) => ({ cloth }))} */}
      {/* <!-- Layout wrapper --> */}
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          {/* <!-- Menu --> */}

          <Sidebar />
          {/* <!-- / Menu -->


        <!-- Layout container --> */}
          <div class="layout-page">
            {/* <!-- Navbar --> */}

            {/* <!-- / Navbar --> */}

            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">
              {/* <!-- Content --> */}

              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                  <span class="text-muted fw-light">User Information</span>
                </h4>

                {/* <!-- Basic Bootstrap Table --> */}
                <div class="card">
                  <h5 class="card-header">Users</h5>
                  <div class="table-responsive text-nowrap">
                    <table class="table">
                      <thead >
                        <tr>
                          <th> title</th>
                          <th> body</th>
                          <th>date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {post.map((post) => (
                        <tbody class="table-border-bottom-0"  >
                          {/* {allposts} */}
                          <th>
                            {" "}
                            <p>{post.title} </p>
                          </th>
                          <th>
                            {" "}
                            <p
                              style={{
                                width: "250px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {post.body}
                            </p>
                          </th>
                          <th>
                            <p>{post.date}</p>
                          </th>
                          <th>
                            {" "}
                            <form>
                              <button style={{backgroundColor:"#007bff",borderColor:"white"}}
                               
                                type="button"
                                onClick={(e) =>
                                  deletePost({ id: post.id }).unwrap()(e)
                                }
                              >
                           <i  style={{color:"white"}}class="bx bx-trash me-2"></i>
                              </button>


                              
                            </form>
                          </th>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>

                {/* <!--/ Basic Bootstrap Table --> */}

                <hr class="my-5" />
              </div>
              {/* <!-- / Content -->

            <!-- Footer --> */}
              <Footer />
              {/* <!-- / Footer --> */}

              <div class="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div class="layout-overlay layout-menu-toggle"></div>
      </div>
      {/* <!-- / Layout wrapper --> */}
      <div
        style={{
          border: "1.5px solid ",
          borderRadius: "15px",
          padding: "15px",
        }}
        class="wrap__profile"
      >
        <div class="wrap__profile-author">
          <figure>
            <img
              style={{ height: "90px", width: "90px" }}
              src="https://i0.wp.com/betterthanblended.com/wp-content/uploads/2017/05/Icons-01.png?w=1080&ssl=1"
              alt=""
              class="img-fluid img-circle"
            />
          </figure>
          <div class="wrap__profile-author-detail">
            <div class="wrap__profile-author-detail-name">
              <span style={{ textTransform: "capitalize" }}>
                <PostAuthor userId={post.userId} />{" "}
              </span>
              <p style={{ fontWeight: "bold", fontSize: "8px" }}>
                <TimeAgo timestamp={post.date} />
              </p>
            </div>

            <p
              style={{ border: "1px inset", padding: "15px" }}
              className="excerpt"
            >
              <h5>{post.title}</h5>
              {post.body}
            </p>
            <span style={{ display: "flex" }}>
              <ul class="list-inline"></ul>
              &nbsp;&nbsp;{" "}
              <Link to={`post/${post.id}`}>
                <span style={{ backgroundColor: "beige", padding: "1px" }}>
                  Comment
                </span>
              </Link>
              &nbsp;&nbsp;{" "}
              <Link to={`/posts/${post.id}`}>
                <span style={{ backgroundColor: "beige", padding: "1px" }}>
                  View
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Table;
