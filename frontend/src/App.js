import PostsList from "./PostFeatures/posts/PostsList";
import Layout from "./PostComponents/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import List from "./Components/List";
import AgencyDetails from "./Components/AgencyDetails";
import SingleDetail from "./Components/SingleDetail";
import Agency from "./Components/Agency";
import AgentsDetail from "./Components/AgentsDetail";
import Agents from "./Components/Agents";
import NavBar from "./Layout/NavBar";
import SignIn from "./Components/Login";
import SignUp from "./Components/Register";
import Profile from "./Components/Profile";
import Admin from "./Admin/Home";
import CreateUser from "./Admin/User/Create";
import TableUser from "./Admin/User/Table";
import EditUser from "./Admin/User/Edit";
import CreateAd from "./Admin/Ad/Create";
import TableAd from "./Admin/Ad/Table";
import EditAd from "./Admin/Ad/Edit";
import CreatePost from "./Admin/Post/Create";
import TablePost from "./Admin/Post/Table";
import EditPost from "./Admin/Post/Edit";
import CreateComments from "./Admin/Comments/Create";
import TableComments from "./Admin/Comments/Table";
import EditComments from "./Admin/Comments/Edit";
import Blog from "./Components/Blog";
import AddPostForm from "./PostFeatures/posts/AddPostForm";
import SinglePostPage from "./PostFeatures/posts/SinglePostPage";
import EditPostForm from "./PostFeatures/posts/EditPostForm";
import UsersList from "./PostFeatures/users/UsersList";
import UserPage from "./PostFeatures/users/UserPage";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Contact from "./Components/Contact";
import Footer from "./Layout/Footer";
import EditComment from "./PostFeatures/posts/EditComment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/List" element={<List />} />
          <Route path="/AgencyDetails" element={<AgencyDetails />} />
          <Route path="list/SingleDetail/:id" element={<SingleDetail />} />
          <Route path="/Agency" element={<Agency />} />
          <Route path="/AgentsDetail" element={<AgentsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="login" element={<SignIn />} />
          <Route path="blog" element={<Blog />} />
          <Route path="users/:id" element={<Profile />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          {/* admin Routes */}
          {/* User */}
          <Route path="Admin" element={<Admin />} />
          <Route path="usercreate" element={<CreateUser />} />
          <Route path="useredit" element={<EditUser />} />
          <Route path="usertable" element={<TableUser />} />
          {/* Comments */}
          <Route path="commentcreate" element={<CreateComments />} />
          <Route path="commentedit" element={<TableComments />} />
          <Route path="commenttable" element={<EditComments />} />
          {/* Ads */}
          <Route path="adcreate" element={<CreateAd />} />
          <Route path="adedit/:id" element={<EditAd />} />
          <Route path="adtable" element={<TableAd />} />
          {/* Posts */}
          <Route path="postcreate" element={<CreatePost />} />
          <Route path="postedit" element={<EditPost />} />
          <Route path="posttable" element={<TablePost />} />

          {/* User Posts */}
          <Route path="/posts" element={<Layout />}>
            <Route path="add" element={<AddPostForm />} />
            <Route index path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
            <Route path="editcomm/:postId" element={<EditComment />} />

            <Route index path="posttable" element={<TablePost />} />
            <Route index element={<PostsList />} />

            {/* <Route path="post">
         

         
         </Route> */}
            <Route path="user" element={<UsersList />} />
            <Route path="users" element={<postProfile />} />
            <Route path="user/:userId" element={<UserPage />} />

            {/* <Route path="user">
         
        </Route> */}

            {/* Catch all - replace with 404 component if you want */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
