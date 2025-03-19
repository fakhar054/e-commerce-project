"use client";
import React, { useState, useRef, useEffect } from "react";
import "./enter-otp.css";
import "../../public/assets/css/theme/main.css";
import { IoIosArrowBack } from "react-icons/io";
import { ResponseContext } from "../login/ResponseContext";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function OtpPage() {
  const { response_Context, setResponse_Context } = useContext(ResponseContext);

  //////////newPassword///////
  const [confirmForm, showConfrimForm] = useState(true);
  const [resetFormData, setResetFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const handleResetFormData = (e) => {
    setResetFormData({ ...resetFormData, [e.target.name]: e.target.value });
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", resetFormData);

    if (resetFormData.newPassword !== resetFormData.confirmNewPassword) {
      alert("Passwords do not match!");
      return;
    }
  };
  const closeForm = () => {
    showConfrimForm(false);
  };

  //////////newPassword///////

  useEffect(() => {
    const loginContainer = document.querySelector(".login-container");
    if (confirmForm) {
      loginContainer.classList.add("blur-background");
    } else {
      loginContainer.classList.remove("blur-background");
    }

    return () => {
      loginContainer.classList.remove("blur-background");
    };
  }, [confirmForm]);
  console.log("from otp", response_Context);
  const [values, setValues] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
  });

  console.log("Response from Otp page", response_Context);
  const user_Email =
    response_Context?.data?.user?.email || "No email available";
  console.log("User Email from otp Page", user_Email);
  const user_ID = response_Context?.data?.user?.id || "No id available";
  console.log(user_ID);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const requestData = {
      user_id: user_ID,
      reset_token: Object.values(values).join(""),
    };
    // console.log("Requested Data before mathcing with otp", requestData);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://foundation.alphalive.pro/api/user/forgot/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const result = await response.json();
      showConfrimForm(true);
      console.log("Server Response from OTP Page ", result);
      // alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to submit!");
    }
  };

  return (
    <section className="otp" id="otp">
      <div className="container">
        <div className="row login-container height_width">
          <div className="col-lg-7">
            <img src="/assets/images/forms/otp_pic.png" />
          </div>

          <div className="col-lg-5 j-center">
            <div className="icon_div">
              <IoIosArrowBack />
              <p>Back</p>
            </div>
            <h2>Enter OTP</h2>
            <p className="text-muted">
              We’ve share a code of your registered email address<br></br>
              {user_Email}
            </p>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="input_parent_div">
                <div className="col-auto">
                  <input
                    type="text"
                    className=" square-input"
                    name="field1"
                    min="0"
                    max="9"
                    maxLength="1"
                    onChange={handleChange}
                    value={values.field1}
                  />
                </div>
                <div className="col-auto">
                  <input
                    name="field2"
                    type="text"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxLength="1"
                    onChange={handleChange}
                    value={values.field2}
                  />
                </div>
                <div className="col-auto">
                  <input
                    name="field3"
                    type="text"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxLength="1"
                    onChange={handleChange}
                    value={values.field3}
                  />
                </div>
                <div className="col-auto">
                  <input
                    name="field4"
                    type="text"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxLength="1"
                    onChange={handleChange}
                    value={values.field4}
                  />
                </div>
                <div className="col-auto">
                  <input
                    name="field5"
                    type="text"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxLength="1"
                    onChange={handleChange}
                    value={values.field5}
                  />
                </div>
                <div className="col-auto">
                  <input
                    name="field6"
                    type="text"
                    className="form-control square-input"
                    min="0"
                    max="9"
                    maxLength="1"
                    onChange={handleChange}
                    value={values.field6}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-3">
                Verify
              </button>
            </form>
          </div>
        </div>
        {confirmForm && (
          <div className="row mt-5 mb-5">
            <div className="confirm_form">
              <form className="mt-3 form-confirm" onSubmit={handleResetSubmit}>
                <AiOutlineClose
                  className="form_close_icon"
                  onClick={closeForm}
                />

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Enter New Password
                  </label>
                  <br />
                  <input
                    name="newPassword"
                    id="newPassword"
                    type="password"
                    className="confirm_input"
                    placeholder="Enter New Password"
                    value={resetFormData.newPassword}
                    onChange={handleResetFormData}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Enter Confirm Password
                  </label>
                  <br />
                  <input
                    name="confirmNewPassword"
                    type="password"
                    className="confirm_input"
                    id="confirmNewPassword"
                    placeholder="Enter Confirm Password"
                    value={resetFormData.confirmNewPassword}
                    onChange={handleResetFormData}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-dark ">
                  Confirm Password
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
