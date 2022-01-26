import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
  const history=useHistory()
    const {service,id,img,description,_id}=props.serv
    const handleService=(ids)=>{
      const url=`/service/${ids}`
      history.push(url)
    }
    return (
        <Col  >
      <Card className="p-3 card">
        <Card.Img variant="top"  src={img}/>
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <Card.Text>
            {description.slice(0,120)}
          </Card.Text>
          <div className="d-grid gap-2">
          <Button onClick={()=>handleService(_id)} variant="secondary" size="md">
    Show Details
  </Button>
  </div>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Service;