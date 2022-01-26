import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../hooks/useData';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';

const Home = () => {
    const [services]=useData()
    return (
        <div>
           <Banner></Banner>
           <h1 className="text-center text-danger fw-bold mt-5 ">Services</h1>
           <div className="mx-5">
            <Row xs={1} md={2} lg={3} className="g-5 mt-3">
            {
                 services.slice(0,3).map(service=><Service key={service.id} serv={service}></Service>)
           }
</Row>          
      </div>
        </div>
    );
};

export default Home;