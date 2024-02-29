import React, { useState } from "react";

//backend fetching data
import axios from "axios";

//image imported
import payanam from "../Assets/payanam.png";
import login from "../Assets/login.jpg";

//css file imported
import "./account.css";

//Toast error or success meassage package
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//router link
import { Link, useNavigate } from "react-router-dom";

function Account() {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:2001/login`, {
        email,
        password,
      });
      console.log(response.data); // You can handle the response data here (e.g., JWT token)
      // Assuming the response data contains a success message
      // Show a success message to the user
      // You can also redirect the user to another page upon successful login
      toast.success("login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server Error:", error.response.data);
        if (error.response.status === 400) {
          // Handle validation errors
          const validationErrors = error.response.data.errors.map(
            (error) => error.msg
          );
          setError(validationErrors.join(", "));
        } else if (error.response.status === 401) {
          // Handle authentication errors
          setError(error.response.data.error);
        } else {
          // Handle other server errors
          setError("User not found ");
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Network Error:", error.request);
        setError("Network Error");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Client Error:", error.message);
        setError("Client Error");
      }
    }
  };

  return (
    <div className="container color my-5 gradient-form">
      <div className="row">
        <div className="col-md-6 mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src={payanam} style={{ width: "185px" }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The PayanamTravel Team</h4>
            </div>

            <p className="pb-2">Please login to your account</p>

            <form onSubmit={handleSubmit}>
              {error && <div className="text-danger p-4">{error}</div>}{" "}
              {/* Ensure error message is rendered */}
              <div className="mb-4">
                <label htmlFor="form1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="form1"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="form2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="form2"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center pt-1 mb-5 pb-1">
                
                <button
                  type="submit"
                  className="btn btn-primary mb-4 w-50 "
                >
                  login
                </button>
              </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <Link className="nav-link " to="/newaccount">
                <button className="btn btn-outline-success mx-2">
                  Create Account
                </button>
              </Link>
            </div>
            <ToastContainer />
          </div>
        </div>

        <div className="col-md-6 mb-5 pt-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 pt-5 mb-4 text-white px-3 py-4 p-md-5 mx-md-4">
            <img src={login} className="login" />
            <h4 className="mb-4 pt-4 pb-4">Purpose of a login</h4>
            <p className="small mb-0 pb-5">
              Logging in is usually used to enter a specific page, website or
              application, which trespassers cannot see. Once the user is logged
              in, the login token may be used to track what actions the user has
              taken while connected to the site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
