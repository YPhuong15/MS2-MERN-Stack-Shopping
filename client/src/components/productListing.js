import React from "react";
import { Card, Container, Grid } from "@mui/material";
import NavBar from "./NavBar";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  ListProductMainContainer: {
    padding: "0 40px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: 0
    // }
  },
  ProductLink: {
    color: "black",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: 16,
    "&:hover": {
      "& $ProductDetailColorway": {
        opacity: 0.5,
      },
      "& $ProductColorway": {
        display: "block",
      },
      "& $ProductImage": {
        opacity: 0.5,
      },
    },
  },
  ProductColorway: {
    display: "none",
  },
  ProductImage: {
    width: "150px",
    height: "150px",
    // [theme.breakpoints.down("xs")]: {
    //   height: "150px",
    //   width: "100%",
    // }
  },
  ProductDetailColorway: {
    lineHeight: 1.75,
    display: "block",
  },
  ProductType: {
    color: "#757575",
  },
  ProductName: {
    color: "#757575",
  },
}));

function ProductListing(props) {
  const productList = props.productsData;
  const classes = useStyle();
  console.log(productList); //can show the list of products
  return (
    <div>
      <NavBar />

      <Container maxWidth="xl">
        <h1>Products</h1>
        <Grid
          container
          spacing={2}
          className={classes.ListProductMainContainer}
        >
          {productList.map((item, index) => {
            return (
              <Grid item xs={6} md={4} key={index}>
                <span className={classes.ProductLink}>
                  <img
                    className={classes.ProductImage}
                    src={item.image[0]}
                    //   onClick={Navigate()}
                  />
                  <div></div>
                  <div className={classes.ProductDetailColorway}>
                    <div className={classes.ProductName}>Name: {item.name}</div>
                    <div className={classes.ProductType}>
                      Price: {item.price.toLocaleString()}USD
                    </div>
                  </div>
                </span>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
export default ProductListing;
