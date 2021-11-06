import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { LogCreator } from './features/Log/LogCreator';
import SessionOverview from './features/Session/SessionOverview';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Quest Logger</h2>
      </header>
      <BrowserRouter>
      {/* <LogCreator foo="test" /> */}
        <Switch>
        <Route path="/log" component={LogCreator}>
          </Route>
          
          {/* leave default route for last */}
           <Route path="/" component={SessionOverview}>
            {/* // users/guards etc */}
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
