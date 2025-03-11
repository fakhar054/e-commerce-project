"use client";
import React from "react";
import "./forget-password.css";
import "../../public/assets/css/theme/main.css";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ForgetPassword() {
  const router = useRouter();

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
            <form className="mt-2">
              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control large border_radius"
                  id="email"
                  required
                />
              </div>

              <Link href={`/enter-otp`}>
                <button type="submit" className="btn btn-dark w-100 mt-2">
                  Send OTP
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
