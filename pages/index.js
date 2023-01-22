import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>
        {["Product 1", "Product 2", "Product 3", "Product 4"].map(
          (product) => product
        )}
      </div>
      Footer
    </>
  );
};

export default Home;
