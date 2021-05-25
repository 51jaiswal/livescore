import logo from './logo.svg';
import './App.css';
import React,{Fragment,useEffect,useState} from "react"
import { Button, Grid, Typography } from '@material-ui/core';
import Navbar from "./Components/Navbar"
import MyCard from './Components/MyCard';
import {getMatches} from "./Api/Api"
function App() {

  const [matches,setMatches] = useState([]);
  useEffect(() => {
    {getMatches().then((data)=>setMatches(data.matches))
    .catch(err=>alert("couldn't load data"))}
  }, [])
  return (
    
    <div className="App">
      <Navbar/>
      <Typography variant="h4" styele={{margin:"20px"}}>Welcome to My live score App</Typography>
        
      <Grid container>
        <Grid  md="2"></Grid>
        <Grid  md="8">
           {
          matches.map((match)=>(
            <Fragment key={match.unique_id}>
              {
                match.type=="Twenty20" ?( <MyCard key={match.unique_id} match={match}/>):""
              }
            </Fragment>
          
          ))
        }
        </Grid>
      </Grid>
       
        
        {/* <Button variant="contained" color="outlined">Click</Button> */}
    </div>
  );
}

export default App;
