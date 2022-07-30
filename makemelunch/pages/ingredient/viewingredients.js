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
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import ProductQuestion from "../components/productquestion";
import {
  deleteIngredient,
  addIngredient,
} from "../../helper/firebaseHelper.js";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const url =
  "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default function ViewIngredients() {
  const auth = useAuth();
  const [ings, setIngs] = useState([]);
  const [yes, setYes] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const viewIng = async (event) => {
    event.preventDefault();
    let str = await getAllIngredients(auth);
    let ings = str.split(",");
    ings.sort();
    setIngs(ings);
    setYes(1);
  };

  return (
    <>
      <Head>
        <title>View Ingredients</title>
        <link rel="icon" href="/icon.ico" />
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
                    backgroundColor: "#3A3976",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#3A3976",
                    },
                  }}
                >
                  View Ingredients
                </Button>
              </Box>
            )}
          </Container>

          {yes && (
            <Container align="center">
              <Button
                type="Submit"
                variant="contained"
                onClick={() => {
                  handleOpen();
                }}
                sx={{
                  mt: 1,
                  mb: 4,
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "green",
                  },
                  align: "right",
                }}
              >
                Add Ingredient
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Ingredient</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To add an ingredient, please enter your ingredient here.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Ingredient"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    onClick={() => {
                      handleClose();
                      addIngredient(auth, name);
                      ings.push(name);
                      setName("");
                    }}
                  >
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
              <TableContainer
                component={Paper}
                sx={{ width: 400, height: 300 }}
              >
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
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {ing.length > 0 && (
                          <TableCell component="th" scope="row">
                            <Grid container spacing={2}>
                              <Grid
                                item
                                xs={8}
                                align="left"
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                }}
                              >
                                <Typography variant="body1">{ing}</Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Button
                                  type="Submit"
                                  variant="contained"
                                  onClick={() => {
                                    deleteIngredient(auth, ing);
                                    viewIng(event);
                                  }}
                                  sx={{
                                    mt: 1,
                                    mb: 1,
                                    backgroundColor: "green",
                                    "&:hover": {
                                      backgroundColor: "#fff",
                                      color: "green",
                                    },
                                    align: "right",
                                  }}
                                >
                                  Remove
                                </Button>
                              </Grid>
                            </Grid>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
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
