import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Col } from "reactstrap";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


function NasaApi() {
    const {apis, setApis} = useState([]) 

    useEffect(() => {
      axios.get("https://api.nasa.gov/planetary/apod?api_key=Dkbpgid3yTk48gbUEbkl9dhQZpi5JzP2Zeff0nSE")
      .then((res) => { 
        console.log(res);
      })
      .catch((error) => console.log(error));
    
    }, []);
  
    
    return (
       //reactstrap//
      <Col>
         <Card>
          <CardBody>
         
              <p>Description </p>
          </CardBody>
         </Card>
      </Col>
    );
  }

  export default NasaApi;


  