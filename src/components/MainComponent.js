import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dishdetail from './DishdetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }


  render() {

    const HomePage =() =>{
        return(
          <Home 
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
            //filter will return an array
        );
    }

    const DishWithId = ({match}) =>{
      return(
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id == parseInt(match.params.dishId,10))[0]}
        comments={this.state.comments.filter((comment) => comment.dishId == parseInt(match.params.dishId,10))[0]}
        />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
            <Route path="/home" component ={HomePage} />
            <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
            <Route path="/menu/:dishId" component={DishWithId}/>
            <Route exact path="/contactus" component={Contact} />
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