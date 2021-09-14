import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';
import About from '../About';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.root} style={{ background: '#212121'}}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
              <Link style={{color: "#FFFFFF", underline: 'none'}} href="#" onClick={preventDefault}>TN</Link>
              </Typography>

            <IconButton edge="end" className={classes.menuButton} style={{color:"#0A66C2"}} aria-label="menu">
             <LinkedInIcon />
           </IconButton>
           <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
             <GitHubIcon />
           </IconButton>
           <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
             <EmailIcon />
           </IconButton>

          </Toolbar>

        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box my={2}>
          <About></About>
        </Box>
      </Container>
    </React.Fragment>
  );
}

