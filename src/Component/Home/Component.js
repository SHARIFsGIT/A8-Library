import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Courses from '../courses/Courses';


const Home = () => {
    const [courses,setCourses] = useState([])
    useEffect(()=>{
        fetch('./course.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div>
            <Row xs={1} md={2} className=" grid grid-cols-3 g-4">
            {
                courses.map(course => <Courses 
                    key = {course.courseId} 
                    course = {course}
                ></Courses>)
            }
        </Row>
            <div className="flex justify-center py-6">
            <button className="bg-green-700 text-white px-4 py-3 rounded-2xl" >
            <Link to="/services">OUR SERVICES</Link>
            </button>
            </div>
        </div>
    );
};

export default Home;