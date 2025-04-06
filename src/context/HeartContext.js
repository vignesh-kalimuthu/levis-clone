import React, { createContext, useState, useContext } from "react";

const HeartContext = createContext();

export const HeartProvider = ({ children }) => {
  const [heartedProducts, setHeartedProducts] = useState([]);

  const toggleHeart = (product) => {
    setHeartedProducts((prev) => {
      const exists = prev.find((p) => p.title === product.title);
      if (exists) {
        return prev.filter((p) => p.title !== product.title);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <HeartContext.Provider
      value={{
        heartedProducts,
        heartCount: heartedProducts.length,
        toggleHeart,
      }}
    >
      {children}
    </HeartContext.Provider>
  );
};

export const useHeart = () => useContext(HeartContext);
