import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import NavBar from "../components/NavBar";
import ProductListing from "../components/productListing";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const [productsData, setProductsData] = React.useState([]);
  const location = useLocation();

    const searchTerm = location.state.searchTerm

    React.useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("/api/products/getProducts");
            const newData = await response.json();
            setProductsData(newData);
        };
        getProducts();
        }, []);

        const searchResult = productsData.filter(obj => searchTerm.includes(obj.name))
        

  return (
    <div>
        <NavBar/>
      <Container maxWidth="xl">
        <ProductListing productsData={searchResult} />
      </Container>
    </div>
  );
}

export default SearchResults;
