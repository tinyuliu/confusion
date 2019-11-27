import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { nullLiteral } from '@babel/types';


class Dishdetail extends Component{

    constructor(props){
        super(props);

    }
        monthf(m){
            var month = new Array();
            month['01'] = "Jan";
            month['02'] = "Feb";
            month['03'] = "Mar";
            month['04'] = "Api";
            month['05'] = "May";
            month['06'] = "Jun";
            month['07'] = "Jul";
            month['08'] = "Aug";
            month['09'] = "Sep";
            month['10'] = "Oct";
            month['11'] = "Nov";
            month['12'] = "Dec";
        
            return month[m]
        }
        

        renderComments(dish){

            if (dish!=null){
                console.log(dish.comments[1].author);
               
                    return(
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                {dish.comments.map((value, index) =>{
                                return [   
                                    <li key={index}> {value.comment}</li>,
                                    <li key={index}>--{value.author},
                                       {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short', day:'2-digit'}).format(new Date(Date.parse(value.date)))}
                                    </li>, <br/>           
                                ]})}
                            </ul>
                        </div>
                    );
               
            }
            else{
                return(
                    <div className="col-12 col-md-5 m-1">
    
                    </div>
                );
            }
        }
           
        renderDish(dish){
            if (dish !=null){
                return(
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                );
            }
            else{
                return(
                    <div className="col-12 col-md-5 m-1">
    
                    </div>
                );
            }
        }

        render(){
            return(
                <div class="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            );
        }
}

export default Dishdetail;
