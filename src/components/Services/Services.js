import React from 'react';
import { Row } from 'react-bootstrap';

import useData from '../../hooks/useData';
import Service from '../Service/Service';

const Services = () => {
    

    const [services,useServices]=useData()
    return (
        <div className="container">
            <Row xs={1} md={2} lg={3} className="g-4 mt-5">
            {
                 services.map(service=><Service key={service.id} serv={service}></Service>)
           }
</Row>          
      </div>
    );
};

export default Services;