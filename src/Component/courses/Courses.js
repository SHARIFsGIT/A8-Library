import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = (props) => {
    const {name,duration,topics,fee,image} = props.course;
    const imgStyle = {
      height:200,
      width:200
    }
    return (
        <div className="m-3 ">

            <Col className="bg-gray-300 rounded p-3 grid justify-center">
                <Card>
                  <Card.Img style={imgStyle} variant="top" src={image} />
                  <Card.Body className="py-4">
                    <Card.Title>Course Name : {name}</Card.Title>
                    <Card.Text>
                    Duration : {duration}
                    </Card.Text>
                    <Card.Text>
                    Topics : {topics}
                    </Card.Text>
                    <Card.Text>
                    Fees : {fee} Taka
                    </Card.Text>
                    <br />
                    <button className = "bg-green-700 text-white px-4 py-3 rounded-lg">
                      <Link to="/services">Enroll Now</Link>
                    </button>
                    <button className = "bg-yellow-700 text-white px-4 py-3 mx-3 rounded-lg">
                      <Link to="/services">Bookmark</Link>
                    </button>
                  </Card.Body>
                </Card>
              </Col>
            
        </div>
    );
};

export default Courses;