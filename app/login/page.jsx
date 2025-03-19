"use client";
import React, { useState } from "react";
import "./login.css";
import "../../public/assets/css/theme/main.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "./useAuth";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error } = useAuth();

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "email") setEmail(value);
  //   if (id === "password") setPassword(value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch(
  //       "https://foundation.alphalive.pro/api/user/login",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ email, password }),
  //       }
  //     );

  //     console.log(email, password);
  //     const data = await res.json();
  //     console.log("API Response from login: ", data);

  //     if (res.ok && data.data.token) {
  //       localStorage.setItem("token", data.data.token);
  //       alert("Login successful");
  //       router.push("/");
  //     } else {
  //       alert(data.message || "Invalid credentials");
  //     }
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     alert("Something went wrong. Please try again.");
  //   }
  // };

  return (
    <section className="login" id="login">
      <div className="container set_bg ">
        <div className="row login-container height_width">
          <img
            className="logoImg"
            alt="Lexend"
            src="/assets/images/common/logo_krist.png"
          />
          <div className="col-lg-7">
            <img src="/assets/images/forms/login_girl_pic.png" />
          </div>
          <div className="col-lg-5 p-5">
            <h2>Welcome</h2>
            <p className="text-muted">Please login here</p>
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control large border_radius"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control large border_radius"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="rember_div">
                  <div className="check_box_div">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <Link
                    href={`/forget-password`}
                    className="text-decoration-none"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Login
              </button>
              <div className="signup_div mt-2">
                <p>Don't have Account?</p>
                <Link href={`/sign-up`}>sign up here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
