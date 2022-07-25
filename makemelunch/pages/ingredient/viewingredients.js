import { getAllIngredients } from "../../helper/firebaseHelper.js";
import { useAuth } from "../../context/UserAuthContext.jsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
//import styles from "../../styles/Home.module.css";
import Link from "next/link";
import styles from "../../styles/ing.module.css";
import Container from "@mui/material/Container";
import MainAppBar from "../components/mainappbar";
import {
  Button,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import ProductQuestion from "../components/productquestion";

const url =
  "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function ViewIngredients() {
  const auth = useAuth();
  const [ings, setIngs] = useState([]);
  const [yes, setYes] = useState(null);

  const handleClick = () => {
    auth.logOut();
  };

  const viewIng = async (event) => {
    event.preventDefault();
    let str = await getAllIngredients(auth);
    //console.log(str);
    setIngs(str.split(","));
    setYes(1);
  };

  return (
    <>
      <Head>
        <title>View Ingredients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        component="section"
        sx={{
          display: "flex",
          overflow: "hidden",
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <MainAppBar />
        <main className={styles.main}>
          <Container maxWidth="xl" sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ my: 4 }}>
              View your ingredients
            </Typography>
            {!yes && (
              <Box component="form" onSubmit={viewIng} noValidate>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                    },
                  }}
                >
                  View Ingredients
                </Button>
              </Box>
            )}
          </Container>

          {yes && (
            <TableContainer component={Paper} sx={{ width: 300, height: 300 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{ backgroundColor: "green", color: "white" }}
                    >
                      Ingredients
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ings.map((ing, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {ing}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          <br />
          <Link href="javascript:history.back()">&larr; Go back</Link>
          <br />
        </main>
      </Box>
      <ProductQuestion />
    </>
  );
}
