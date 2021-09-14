import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Website from '../Website';


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  title: {
    fontStyle: 'italic',
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <React.Fragment >
      <CssBaseline />    
      <Container maxWidth="sm">
    <div className={classes.root} align="center" >
    <Typography variant="h3" style={{color:"#FFFFFF"}} gutterBottom>
        H E L L O !
      </Typography>
      
      <Typography variant="h5" style={{color:"#FFFFFF"}} gutterBottom>
        My name is Tina Nguyen.
      </Typography> 

      <Typography variant="h7" className={classes.title} style={{color:"#FFFFFF"}} gutterBottom>
        I am a Project Manager in construction with a passion for UI. 
      </Typography>
      </div>
      </Container>
      {/* <Container fixed> */}
          <Website></Website>
      {/* </Container> */}
    </React.Fragment>

  );
}