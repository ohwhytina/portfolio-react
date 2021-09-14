import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import img1 from './blather.png';
import img2 from './bort-community.png';
import img3 from './password.png';
import img4 from './schedule.png';
import img5 from './weather.png';
import img6 from './note.png';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:100
  },
  media: {
    height: 300,
    maxWidth: 600
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <Typography style={{ color: '#FFFFFF'}} align="center" gutterBottom variant="overline" component="p">
            Blather
          </Typography>
          <CardMedia
          className={classes.media}
          image={img1}
          title="Contemplative Reptile"
        />
        </Grid>
      <Grid item xs={12} sm={6}>
      <Typography style={{ color: '#FFFFFF'}} align="center" gutterBottom variant="overline" component="p">
            Bort Community
          </Typography>
          <CardMedia
          className={classes.media}
          image={img2}
          title="Contemplative Reptile"
        />
        </Grid>
    
        <Grid item xs={12} sm={6}>
        <Typography style={{ color: '#FFFFFF'}} align="center" gutterBottom variant="overline" component="p">
            Password Generator
          </Typography>
          <CardMedia
          className={classes.media}
          image={img3}
          title="Contemplative Reptile"
        />
        </Grid>

        <Grid item xs={12} sm={6}>
        <CardActionArea>
        <Typography style={{ color: '#FFFFFF'}} align="center" gutterBottom variant="overline" component="p">
            Daily Schedule
          </Typography>
          <CardMedia
          className={classes.media}
          image={img4}
          title="Contemplative Reptile"
        />
        </CardActionArea>
        </Grid>

        <Grid item xs={12} sm={6}>
        <Typography style={{ color: '#FFFFFF'}} align="center" gutterBottom variant="overline" component="p">
            Weather Dashboard
          </Typography>
          <CardMedia
          className={classes.media}
          image={img5}
          title="Contemplative Reptile"
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography style={{ color: '#FFFFFF'}} align="center" gutterBottom variant="overline" component="p">
            Note Taker
          </Typography>
          <CardMedia
          className={classes.media}
          image={img6}
          title="Contemplative Reptile"
        />
        </Grid>
      </Grid>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import { Grid } from '@material-ui/core';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 250,
//   },
  
// });

// export default function MediaCard() {
//   const classes = useStyles();

//   return (
// <Grid>
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={img}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
    
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={img}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//     </Grid>
//   );
// }
