import React, { Component } from 'react'
import {Link} from "react-router-dom";
import  "./nav.css";

export default class Navbar extends Component {



    render() {
        return (
            <div>
                <nav className="navbar nav navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand mu " to="/" >NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" aria-current="page"  to="/">Home</Link>
                                
                            </li>
                            
                           
                            <li className="nav-item" ><Link className="nav-link"  to="/business">business</Link></li>
                            <li className="nav-item" ><Link className="nav-link"  to="/entertainment">entertainment</Link></li>
                            <li className="nav-item" ><Link className="nav-link"  to="/general">general</Link></li>
                            <li className="nav-item" ><Link className="nav-link"  to="/health">health</Link></li>
                            <li className="nav-item" ><Link className="nav-link"  to="/science">science</Link></li>
                            <li className="nav-item" ><Link className="nav-link"  to="/sports">sports</Link></li>
                               
                            
                        </ul>
                  
                    </div>
                </nav>
            </div>
        )
    }
}
