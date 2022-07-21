import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function ProductQuestion() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
          color: "green",
        }}
        href="https://github.com/IdkwhatImD0ing/MakeMeLunch"
      >
        <Typography variant="h4" component="span" color="green">
          Got any questions? Need help? Want to contribute?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Visit our public github page!
      </Typography>
      <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/2928/2928822.png"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductQuestion;
