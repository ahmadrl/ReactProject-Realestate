

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { storePost } from './app/store';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './PostFeatures/posts/postsSlice';
import { usersApiSlice } from './PostFeatures/users/usersSlice';

storePost.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
storePost.dispatch(usersApiSlice.endpoints.getUsers.initiate());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storePost}>
      {/* <Router> */}
      <App />
        {/* <Routes>
          <Route path="/*" element={<App />} />
        </Routes> */}
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
























// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { storePost } from './app/store';
// import { Provider } from 'react-redux';
// import { extendedApiSlice } from './PostFeatures/posts/postsSlice';
// import { usersApiSlice } from './PostFeatures/users/usersSlice';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  import reportWebVitals from './reportWebVitals';


//  import { composeWithDevTools } from "redux-devtools-extension"; 
 //Middleware
//  import thunk from "redux-thunk"; 
 // put it in middleware
// import { createStore, applyMiddleware, compose } from "redux";
//create store
//  import RootReducer from "./Store/Reducer/SignIn"; 
 // import rootReducer from my folder store
 
//  const middleware = [thunk];
//  const store = createStore(
//   RootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
//  );


//ahmad
// storePost.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
// storePost.dispatch(usersApiSlice.endpoints.getUsers.initiate());

// ReactDOM.render(
//   <React.StrictMode>
//      {/* <Provider store={store}> 
//        <App />
//     </Provider> */}
//     <Provider store={storePost}>
//       <Router>
//         <Routes>
//           <Route path="/*" element={<App />} />
//         </Routes>
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


















