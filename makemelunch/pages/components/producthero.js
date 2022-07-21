import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductHeroLayout from "./productherolayout";

export default function ProductHero() {
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
        Enjoy recipes from around the world.
      </Typography>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        sx={{ minWidth: 200, backgroundColor: "green" }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
