import './App.css';
import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutAs from '../AboutAs/AboutAs';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Einblicke from '../Einblicke/Einblicke';
import Anschrift from '../Anschrift/Anschrift';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';


function App() {

  return (
    <div className="root">
      <Header />
      <Switch>  

      <Route path="/einblicke" >
        <Einblicke />
      </Route> 

      <Route path="/info" >
        <Info />
      </Route>

      <Route path="/anschrift" >
        <Anschrift />
      </Route> 
      
      <Route path="*" >
        <Promo />
        <AboutAs />
      </Route>

      </Switch>  
      <Footer />
    </div>
  );
}

export default App;
