import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';

const PerService = () => {
    const [services,setServices]=useState([])
    const {perId}=useParams();
   console.log(perId);
    useEffect(()=>{
        fetch(`http://warm-island-11598.herokuapp.com/services/${perId}`)
        .then(res=>res.json())
        .then(data=>{console.log("data",data);
            setServices(data)})
        
    },[])
    
    console.log("hello",services);
    return (
      services?(<div className="fw-bold text-center py-2">   
    <Card.Img variant="top" height="300em" className="w-75 mx-auto d-block my-5 rounded-3 card" src={services?.img} />
    <Card.Title className="fs-1 fw-bold">{services?.service}</Card.Title>
    <hr/>
    <Card.Body>
      <Card.Text>
       <h3>Cost: Tk {services?.cost}</h3>
      </Card.Text>
      <Card.Text className="fs-5">
       <h5>Serial No:{services.id}</h5>
       {services?.description}
      </Card.Text>
    </Card.Body>
    </div>):<p>loading</p>
       
    );
};

export default PerService;