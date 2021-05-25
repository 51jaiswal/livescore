import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import react, { Component, Fragment, useState } from "react";
import { getMatchesDetail } from "../Api/Api";
import vsimage from "../img/vs_image.jpg";
import "../card.css"
const MyCard = ({ match }) => {
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);
  const handleClick = (id) => {
    getMatchesDetail(id)
      .then((data) => {
        setDetail(data);
          handleOpen();
        console.log(data);
      })
      .catch((err) => console.log(err));
  
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const getMatchCart = () => {
    return (
        

        
      <Card  style={{ margin: "20px" }}><div className="card">
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography color="primary" variant="h5">{match["team-1"]}</Typography>
            </Grid>
            <Grid item>
              <img style={{ width: "90px", height: "160px" }} src={vsimage} />
            </Grid>
            <Grid item>
              <Typography color="primary" variant="h5">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid intem container justify="center" spacing={3}>
            <Button
              onClick={() => {
                handleClick(match.unique_id);
              }}
              style={{ margin: "5px" }}
              variant="contained"
              color="primary"
            >
              Show Detail
            </Button>
            <Button
              style={{ margin: "5px" }}
              item
              variant="contained"
              color="primary"
            >
              Start Time {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions></div>
      </Card>
    );
  };
  const getDialog = () => {
    return(<Dialog open={open} >
      <DialogTitle id="alert-dialog-title">{"Match Detail.."}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{detail.stat}</Typography>
          <Typography>
            Match{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.matchStarted ? "Started" : "Still not Started"}
            </span>
          </Typography>
          <Typography>
            Score{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {detail.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autofocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
    )};
  return (
    <Fragment>
      {getMatchCart()}
      {getDialog()}
    </Fragment>
  );
};
export default MyCard;
