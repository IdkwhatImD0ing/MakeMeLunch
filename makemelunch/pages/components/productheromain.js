import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./productherolayout";

export default function ProductHeroMain() {
  return (
    <ProductHeroLayout>
      {/* Increase the network loading priority of the background image. */}

      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade Your Food
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Ever forgotten to go grocery shopping and been left with a random
        assortment of ingredients in your fridge? Now you can see what types of
        food you can make from those ingredients!
      </Typography>
    </ProductHeroLayout>
  );
}
