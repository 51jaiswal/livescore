import { AppBar, IconButton, Switch, Toolbar, Typography } from "@material-ui/core"
import { LiveTv } from "@material-ui/icons"
import MenuIcon from "@material-ui/icons/Menu"
import react, {Component} from "react"
import FormControlLabel from '@material-ui/core/FormControlLabel';
const Navbar=(props)=>{

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    {/* <MenuIcon/> */}
                    <LiveTv/>
                  
                </IconButton>
                <Typography variant="h6">Live Score</Typography>   
               <IconButton style={{float:"right"}} color="black" edge="end">
                    <Switch alignItems="end" onChange={props.dark} ></Switch>
               </IconButton>
               
    
            </Toolbar>
        </AppBar>
    )
}
export default Navbar