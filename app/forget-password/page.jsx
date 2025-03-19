"use client";
import React, { useState } from "react";
import "./forget-password.css";
import "../../public/assets/css/theme/main.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const response = await fetch(
        "https://foundation.alphalive.pro/api/user/forgot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        router.push("/enter-otp");
      } else {
        setError("Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }

    // router.push("/enter-otp");
  };
  const handleBackBtn = () => {
    router.push("/login");
  };
  return (
    <section className="forget_pass" id="forget_pass">
      <div className="container">
        <div className="row login-container height_width">
          <div className="col-lg-7">
            <img src="/assets/images/forms/forget_pass_pic.png" />
          </div>

          <div className="col-lg-5 j-center">
            <div className="icon_div" onClick={handleBackBtn}>
              <IoIosArrowBack />
              <p>Back</p>
            </div>
            <h2>Forgot Password</h2>
            <p className="text-muted">
              Enter your registered email address. We’ll send you a code to
              reset your password.
            </p>
            <form className="mt-2" onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control large border_radius"
                  id="email"
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-dark w-100 mt-2">
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
