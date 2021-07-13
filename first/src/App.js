import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NameList from './components/Pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar/>
        <Switch>
        <Route path="/about">
           <About/> 
        </Route> 
        <Route path="/namelist">
        <NameList />
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
