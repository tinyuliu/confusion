import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);

        this.state ={
            delectedDish: null
        }
    }
}

onDishSelect(dish){
    this.SVGElementInstanceList({selectedDish:dish});
}