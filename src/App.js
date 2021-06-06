import logo from "./logo.svg";
import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Navbar from "./Components/Navbar";
import MyCard from "./Components/MyCard";
import { getMatches } from "./Api/Api";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

function App() {
  const [matches, setMatches] = useState([]);
  const [darkmode,setDarkmode] = useState(false)

  const theme = createMuiTheme({
    palette: {
      type:darkmode? "dark":"light",
    },
  });
  useEffect(() => {
    {
      getMatches()
        .then((data) => setMatches(data.matches))
        .catch((err) => alert("couldn't load data"));
    }
  }, []);

  const dark = (e)=>{
    console.log(darkmode)
    setDarkmode(!darkmode)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper>      
        <Navbar dark={dark} />
        <Typography variant="h4" style={{ margin: "20px" }}>
          Welcome to My live score App
        </Typography>

        <Grid container>
          <Grid md="2"></Grid>
          <Grid md="8">
            {matches.map((match) => (
              <Fragment key={match.unique_id}>
                {match.type == "Twenty20" ? (
                  <MyCard key={match.unique_id} match={match} />
                ) : (
                  ""
                )}
              </Fragment>
            ))}
          </Grid>
        </Grid></Paper>
      </ThemeProvider>

      {/* <Button variant="contained" color="outlined">Click</Button> */}
    </div>
  );
}

export default App;
