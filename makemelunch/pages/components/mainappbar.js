import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useAuth } from "../../context/UserAuthContext";
import { useRouter } from "next/router";

function MainAppBar() {
  const auth = useAuth();
  const router = useRouter();

  const handleClick = () => {
    auth.logOut();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "green" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MakeMeLunch
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MakeMeLunch
          </Typography>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            {" "}
          </Box>
          <Box
            sx={{
              flexGrow: 0.1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              href="/ingredient/viewingredients"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#3A3976",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3A3976",
                },
              }}
            >
              Ingredients
            </Button>
            <Button
              variant="contained"
              href="/ingredient/searchByIng"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#3A3976",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3A3976",
                },
              }}
            >
              Search
            </Button>
            <Button
              variant="contained"
              href="/ingredient/showRecipe"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#3A3976",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3A3976",
                },
              }}
            >
              Recipe
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                auth.logOut();
                router.push("/");
              }}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#3A3976",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3A3976",
                },
              }}
            >
              Log Out
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainAppBar;
