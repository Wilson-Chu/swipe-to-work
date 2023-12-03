// import React from 'react';
// import './Login.scss';
// import '../Preferences/buttons.scss';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userID, setUserID] = useState(undefined);

//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };


//   const userValidation = function() {
//         //client-side validation
//         if (!email || !password) {
//           alert("Please enter both email and password");
//           return;
//         }
//   }

//   const handleSubmit = async () => {
//     e.preventDefault();

//     // talk to backend auth
//     try {
//       const response = await axios.post("/api/login", {
//         email,
//         password,
//       });

//       if (response.status === 200) {
//         const { userId } = response.data;
//         // for later use
//         setUserID(userId)
//         console.log("Logged in successfully. User ID:", userId);
//         navigate('/');
//       } else {
//         const { message } = response.data;
//         console.error("Login failed:", message);
//       }

//     } catch (error) {
//       console.error("Login error:", error.message);
//     }

//   };

  const handleSubmitAndVal = function() {
    handleSubmit();
    userValidation();
  }

//   return (
//     <>
//       <main className="form-signin w-100 m-auto">
//         <form onSubmit={handleSubmitAndVal}>
//           <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

//           <div className="form-floating">
//             <input
//               type="email"
//               className="form-control"
//               id="floatingInput"
//               placeholder="name@example.com"
//               value={email}
//               onChange={handleEmailChange}
//             />
//             <label htmlFor="floatingInput">Email address</label>
//           </div>

//           <div className="form-floating">
//             <input
//               type="password"
//               className="form-control"
//               id="floatingPassword"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//             />
//             <label htmlFor="floatingPassword">Password</label>
//           </div>

//           <button className="button-74" role="button" type="submit">
//             Sign in
//           </button>
//         </form>
//       </main>
//     </>
//   );
// }

// export default Login;

import React from 'react';
import './Login.scss';
import '../Preferences/buttons.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';

function Login(props) {

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmitAndVal}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="button-74" role="button" type="submit">
            Sign in
          </button>
        </form>
      </main>
      <LoginButton />
    </>
  );
}

export default Login;