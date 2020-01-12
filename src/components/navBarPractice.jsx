import React, { Component } from 'react';

//Object destructuring arguments -- no props. needed
const NavBar = ( {totalCounters} ) => {
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

//Stateless Functional Component with props as parameter
const NavBar = props => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secodary">
                        {props.totalCounters} 
                </span>
            </a>
        </nav> 
    );
}

//Class function -- need to use the this.props
class NavBar extends Component {
    render() {
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secodary">
                            {this.props.totalCounters} 
                    </span>
                </a>
            </nav> 
        );
    }
}


export default NavBar;