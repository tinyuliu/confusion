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
            month['08'] = "Agu";
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
                            
                            {dish.comments.map((value, index) =>{
                            return [   
                                <p key={index}> {value.comment}</p>,
                            <p key={index}>--{value.author},{this.monthf(value.date.substr(5,2))}, {value.date.substr(8,2)}, {value.date.substr(0,4)}</p>                            
                            ]})}
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
            // const dish = this.props.selectedDish
            return(
                <div className="row">
                        {this.renderDish(this.props.selectedDish)}
                        {this.renderComments(this.props.selectedDish)}

                </div>
            );
        }
}

export default Dishdetail;
