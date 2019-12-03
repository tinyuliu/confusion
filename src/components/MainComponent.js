import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }


  render() {

    const HomePage =() =>{
        return(
            <Home/>
        );
    }
    return (
      <div>
        <Header/>
        <Switch>
            <Route path="/home" component ={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            {/* to pass a value to Menu */}
            <Redirect to="/home"/>
            {/* if is is not mach either /home or /menu, then it will redirext to /home */}
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;