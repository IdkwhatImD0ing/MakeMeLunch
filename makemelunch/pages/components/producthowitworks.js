import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "black",
  fontWeight: "medium",
};

const image = {
  color: "black",
  height: 55,
  my: 4,
};

const url =
  "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80";

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        backgroundImage: `url(${url})`,
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <Box
                  component="img"
                  src="https://www.freepnglogos.com/uploads/plus-icon/add-big-new-plus-icon-3.png"
                  alt="plus"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Add Ingredients.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <Box
                  component="img"
                  src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/61-512.png"
                  alt="eye"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  View Ingredients.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <Box
                  component="img"
                  src="https://cdn1.iconfinder.com/data/icons/crime-and-security-1-1/512/9-512.png"
                  alt="search"
                  sx={image}
                />
                <Typography variant="h5" align="center">
                  Search for Recipes!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          size="large"
          variant="contained"
          component="a"
          href="/signup"
          sx={{ mt: 8, backgroundColor: "green" }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
