import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function App() {

  const [adopt_pubs, setAdoptPubs] = useState([]);
  const [error, setError] = useState(""); 
  
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/adopt")
    .then((response) => {
      console.log(response.data);
      setAdoptPubs(response.data);
    })
    .catch((error) => {
      setError(error);
    })
  }, []);
  

  return (

    <div className="App">

      <h1>Adopt</h1>

      <div className="adopt-list">
        {adopt_pubs.map(function(elem){
          return (
            <Card sx={{ maxWidth: 600 }} key={elem.id} className="adopt-card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elem.descripcion}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Save</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          )
        })}
      </div>


    
    </div>
  );
}

export default App;
