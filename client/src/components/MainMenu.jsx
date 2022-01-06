import React from 'react';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const MainMenu = () => {
  return (
<>


 
<h2 className='cate-title'>Quizz des Distances</h2>
   
<div className='row'  >
<Grid container spacing={2}>
  <Grid item xs={6}> 
    <Card className='card' >
      <CardContent>
        <Typography variant="h5" component="div">
        <NavLink exact to="/play">Distance entre pays</NavLink>
        </Typography>
      </CardContent>
    </Card>
    
  </Grid>
  <Grid item xs={6}>
    <Card className='card'>
      <CardContent>
        <Typography variant="h5" component="div">
        <NavLink exact to="/leaderboard">Distance entre villes</NavLink>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>
</div>

<h2 className='cate-title'>Quizz des Populations</h2>
   
<div className='row'  >
<Grid container spacing={2}>
  <Grid item xs={6}> 
    <Card className='card' >
      <CardContent>
        <Typography variant="h5" component="div">
        <NavLink exact to="/play">Population d'un pays</NavLink>
        </Typography>
      </CardContent>
    </Card>
    
  </Grid>
  <Grid item xs={6}>
    <Card className='card'>
      <CardContent>
        <Typography variant="h5" component="div">
        <NavLink exact to="/leaderboard">Population d'une ville</NavLink>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>
</div>
 

  </>
  );
}

export default MainMenu;