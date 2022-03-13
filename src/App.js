import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Pricetag } from './Pricetag';

import {NotFound} from './NotFound';

function App() {
  
  return (
   
    <div className="App">
  
    <Switch>
      <Route exact path ="/">
      <Pricetag />
      </Route>
      
      <Route path = '**'>
        <NotFound />
      </Route>
    </Switch>
        
  </div>
  
  );
}

export default App;

