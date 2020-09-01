import React from 'react';
import './App.scss';
import Dashboard from './pages/dashboard/dashboard.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />  
      </Switch>      
    </div>
  );
}

export default App;
