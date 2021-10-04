import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    
    return (
        <div>
             <h1 className= "text-3xl text-green-700 text-center my-6 pt-5">ENGINEERS ACADEMIC CARE</h1>
                
               <div className="flex justify-between">
                    <div>
                    </div>
                    <div className="flex m-3 text-sm" >
                    <h5 ><Link to = "/home">HOME</Link></h5>
                    <h5><Link to = "/services">COURSES</Link></h5>
                    <h5> <Link to = "/teachers">FACULTIES</Link></h5>
                    <h5><Link to = "/about">ABOUT US</Link></h5>
                    </div>
               </div>
               
        </div>
    );
};

export default Header;