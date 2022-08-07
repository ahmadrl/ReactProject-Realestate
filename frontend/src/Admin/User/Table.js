import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import { useEffect } from "react";
import { getUsers, deleteUser } from "../redux/userSlice"
import { useDispatch, useSelector } from "react-redux";


const Table = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  
var counter=1;

  console.log(users.name);

  const showUsers = users.map(user => {

    return (
      <tr>
        <td>
          <i class="fab fa-angular fa-lg text-danger me-3"></i>{" "}
          <strong>{counter++}</strong>
        </td>
        <td>{user.name}</td>
        <td>
        {user.email}
        </td>
        <td>
          <span class="badge bg-label-primary me-1">
          {user.phonenumber}
          </span>
        </td>
        <td>
       


          <button style={{backgroundColor:"#007bff",borderColor:"white"}} onClick={(e)=>dispatch(deleteUser({id:user.id})).unwrap()(e)}

            href="/usertable">
            <i  style={{color:"white"}}class="bx bx-trash me-2"></i>
          </button>

        </td>
      </tr>

    )



  });





  return (

    <>



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
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>PhoneNumber</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">

                        {showUsers}


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
}


export default Table