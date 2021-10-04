import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const {milestone,duration,classAmount,topics,group} = props.service;
    return (
        <div className="bg-gray-200 px-3 mx-8 my-4 rounded grid justify-center">
             <Col>
      <Card>
        <Card.Body>
          <Card.Title>Package: {milestone}</Card.Title>
          <Card.Text>
              Course Duration: {duration}
          </Card.Text>
          <Card.Text>
            Class Amount: {classAmount}
          </Card.Text>
          <Card.Text>
              Topics:{topics}
          </Card.Text>
          <Card.Text>
              Course for: {group}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;