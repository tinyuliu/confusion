import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { nullLiteral } from '@babel/types';
import { Link } from 'react-router-dom';


    function componentDidMount(){
        console.log('Menu Component componentDidMount involked')
    }

    function componentDidUpdate(){
        console.log('Menu Component componentDidUpdate involked')
    }

    function monthf(m){
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
    
  
    function RenderDish({dish}){
     
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

    function RenderComments({comments}){

        if (comments!=null){
            
                return(
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {comments.map((value, index) =>{
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
       
    const Dishdetail = (props) => {
        if (props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <RenderDish dish = {props.dish} />
                        <RenderComments comments = {props.comments} />
                    </div>
                </div>
            );}

            else{
                return(
                    <div className="col-12 col-md-5 m-1">
        
                    </div>
                );
            }
    }


export default Dishdetail;
