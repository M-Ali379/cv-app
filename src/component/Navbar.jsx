import React from 'react';
import "./Navbar.css";
import Picture from "../assets/profile.png";

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className='propic'>
                    <img src={Picture} alt='profile Picture' style={{ width: '200px' }} />
                </div>
                <div className="logo">Muhammad Ali<br/>
                <hr/>
                WEB Developer
                <br/>
                 <button className='Download'>Download CV</button>
                <button className='hire'>Hire ME</button>
                </div>
               
                


                
                <ul className="navbar-links">
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">skills</a></li>
                    <li><a href="#Project">Project</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;