import React, { Component } from 'react';

//Stateless functional Component using Destructuring Arguments
const NavBar = ({ totalCounters }) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secodary">
                        {totalCounters} 
                </span>
            </a>
        </nav> 
    );
}

export default NavBar;