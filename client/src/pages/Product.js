import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import ProductListing from "../components/productListing";

function Product() {
  const [productsData, setProductsData] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/api/products/getProducts");
      const newData = await response.json();
      setProductsData(newData);
    };
    getProducts();
  }, []);

  //console.log(productsData);
  return (
    <div>
      <Container maxWidth="xl">
        <ProductListing productsData={productsData} />
      </Container>
    </div>
  );
}

export default Product;
