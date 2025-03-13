"use client";

import { useState, useEffect } from "react";

const useAllProducts = () => {
  const url = "https://foundation.alphalive.pro/api/front/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        console.log("API Response:", result);
        console.log("Products:", result.data);
        setProducts(result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, loading, error };
};

export default useAllProducts;
