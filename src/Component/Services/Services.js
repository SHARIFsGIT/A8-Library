import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../service/Service';

const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./service.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div >
            <Row xs={1} md={2} className="g-4 flex  grid grid-cols-3">
            {
                services.map(service=><Service 
                    key={service.id} 
                    service={service}
                    ></Service>)
            }
</Row>
        </div>
    );
};

export default Services;