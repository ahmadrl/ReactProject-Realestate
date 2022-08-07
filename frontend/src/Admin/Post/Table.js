import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";
import PostsExcerpt from "../../PostFeatures/posts/Table";
import { useGetPostsQuery } from "../../PostFeatures/posts/postsSlice";
import { selectPostIds } from "../../PostFeatures/posts/postsSlice";




// const allads = post.map(post => { 





const Table = ({ postId }) => {
   const { isLoading, isSuccess, isError, error } = useGetPostsQuery();

   const orderedPostIds = useSelector(selectPostIds);

   let content;
   if (isLoading) {
     content = <p>"Loading..."</p>;
   } else if (isSuccess) {
     content = orderedPostIds.map((postId) => (
       <PostsExcerpt key={postId} postId={postId} />
     ));
   } else if (isError) {
     content = <p>{error}</p>;
   }


  return (
    <>
      {" "}
 
      {content}
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
                      <thead>
                        <tr>
                          <th> title</th>
                          <th> body</th>
                          <th>date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                        {/* {allposts} */}
                      </tbody>
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
    </>
  );
};
   

export default Table