import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const img =
  "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

function ProductQuestion() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 5,
        }}
      >
        <Button
          sx={{
            border: "4px solid currentColor",
            borderRadius: 0,
            height: "auto",
            py: 1,
            px: 2,
            color: "green",
          }}
          href="https://github.com/IdkwhatImD0ing/MakeMeLunch"
        >
          <Typography variant="h5" component="span" color="green">
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
    </Box>
  );
}

export default ProductQuestion;
