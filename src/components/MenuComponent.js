import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenuItem({dish, onClick}){
    return(
        <Card key = {dish.id} onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay >
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) =>{
    const menu = props.dishes.map((dish)=>{
        // map into a list of items
        //to iterate over every dish in the dishes array here, and for every dish, I am going to return
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} onClick={props.onClick}/>
            </div>
        );
        //whenever you construct a list of items in React, every item requires a key attribute to specified for it.
    });
    return(
        <div className="container">
            <div className="row">
                    {menu}
            </div>
            {/* <Dishdetail selectedDish={this.state.selectedDish}/> */}
        </div>
    );    
}


export default Menu;
//for being import this component