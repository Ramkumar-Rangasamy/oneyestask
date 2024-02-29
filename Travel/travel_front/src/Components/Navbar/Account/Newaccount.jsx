import React, { useState } from "react";

//css file imported
import "./account.css";

//imported images
import signup from "../Assets/signup.jpg";

//backend fetching data
import axios from "axios";

//router link
import { Link, useNavigate } from "react-router-dom";

//Toast error or success meassage package
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newaccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:2001/signup`,
        formData
      );
      console.log(response.data); // Assuming the server sends back a success message
      setFormData({ email: "", firstname: "", lastname: "", password: "" });
      setErrors({});
      // Redirect to login page after successful signup
      toast.success("Signup successful!");
      setTimeout(() => {
        navigate("/create-account");
      }, 3000);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
        const newErrors = {};
        errorData.forEach((error) => {
          newErrors[error.path] = error.msg;
        });
        setErrors(newErrors);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="text-start container">
                <h4 className=" ">Sign Up page</h4>
              </div>
      <div className="container color  my-5 gradient-form">
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="d-flex flex-column ms-5">
              

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="text-danger">{errors.email}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {errors.firstname && (
                    <div className="text-danger">{errors.firstname}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {errors.lastname && (
                    <div className="text-danger">{errors.lastname}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="text-danger">{errors.password}</div>
                  )}
                </div>

                <div className="text-center pt-1  pb-1 d-flex justify-content-end row">
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="btn btn-success mb-4 pl-4 pr-4  "
                    >
                      Sign Up
                    </button>
                  </div>
                  <ToastContainer />
                  <div>
                    <Link className="nav-link" to="/">
                      <button className="btn btn-outline-danger pl-4 pr-4 mx-2">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-end justify-content-end ">
                  <div className="">
                    <p className="mb-2">Already registered ?</p>
                  </div>
                  <div>
                    <Link className="nav-link  link-hover" to="/create-account">Login</Link>
                  </div>
                </div>

              </form>
            </div>
          </div>


          <div className="col-md-6 mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4 text-white px-3 py-4 p-md-5 mx-md-4 overflow-auto" style={{ maxHeight: "100%" }}>
              <img src={signup} className="login" />
              <h4 className="mb-4 pt-4">Purpose of a SignUp</h4>
              <p className="small mb-0">
                You SignUp in to officially record your presence as a returning
                user, whereas sign up simply registers your intent to be present
                officially in the system. Sign up means to create an account as
                a new user so that you can log in later with your credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newaccount;
