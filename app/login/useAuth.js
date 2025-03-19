import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { ResponseContext } from "./ResponseContext";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { response_Context, setResponse_Context } = useContext(ResponseContext);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://foundation.alphalive.pro/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      setResponse_Context(data);

      router.push("/");
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };
  // Log response_Context when it updates
  useEffect(() => {
    console.log("Updated response_Context:", response_Context);
  }, [response_Context]);

  return { login, loading, error };
};

export default useAuth;
