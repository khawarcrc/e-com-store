import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/Product-list/ProductList";


const Home = () => {
  return (
    <>
      <Navbar>
        <ProductList />
      </Navbar>
     
    </>
  );
};

export default Home;
