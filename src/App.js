import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <div className="App">
     <AppBar position="static">
        <Toolbar>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Home"
            sx={{ mr: 2 }}
            onClick = {()=>console.log("Home")}
          >
           Home
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Result"
            sx={{ mr: 2 }}
            onClick = {()=>console.log("Result")}
          >
           Result
          </IconButton>

          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="HTML"
            sx={{ mr: 2 }}
            onClick = {()=>console.log("HTML")}
          >
           HTML
          </IconButton>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="CSS"
            sx={{ mr: 2 }}
            onClick = {()=>console.log("CSS")}
          >
           CSS
          </IconButton>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="JS"
            sx={{ mr: 2 }}
            onClick = {()=>console.log("JS")}
          >
           JS
          </IconButton>
          <IconButton
            variant="text"
            size="small"
            color="inherit"
            aria-label="Resources"
            sx={{ mr: 2 }}
            onClick = {()=>console.log("Resources")}
          >
           Resources
          </IconButton>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
