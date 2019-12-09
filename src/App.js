import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import './App.css';
import Options from './components/options/options';
import StartScreen from './components/start_screen/start_screen';
import HowTo from './components/how_to/how_to';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={StartScreen}/>
      <Route path='/how-to' component={HowTo}/>
      <Route path='/options' component={Options}/>
    </Switch>
  </div>
)

export default App;