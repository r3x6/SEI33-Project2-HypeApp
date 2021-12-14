// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { topBarActions } from "../store/topBar";

// const Auth = () => {
//   const dispatch = useDispatch();
//   const storeAuth = useSelector((state) => state.user.auth);
//   const storeUsername = useSelector((state) => state.user.username);

//   const [username, setUsername] = useState("");

//   const loginUser = () => {
//     dispatch(userActions.login(username));
//   };

//   const logoutUser = () => {
//     dispatch(userActions.logout());
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-4">
//           <label htmlFor="username">Username</label>
//         </div>
//         <div className="col-md-8">
//           <input id="username" type="text" onChange={handleUsernameChange} />
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-12">
//           <button onClick={loginUser} type="submit">
//             login
//           </button>
//           <button onClick={logoutUser} type="submit">
//             logout
//           </button>
//         </div>
//         {storeAuth ? "logged in" : "logged out"}
//         <br />
//         {storeUsername}
//       </div>
//     </div>
//   );
// };

// export default Auth;
