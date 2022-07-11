import React ,{Component} from 'react';
import './Navbar.css';
import {Link,BrowserRouter} from 'react-router-dom';

class Navbar extends Component{
    render(){
        // console.log(window.location.pathname);
        let navColor ="transparent";
        if(window.location.pathname !== "/")
        {
            navColor="black";
        }

        return(
           <div className='container-fluid nav' >
            <div className='row'>
                <nav className={navColor}>
                    <div className='nav-wrapper'>
                        <BrowserRouter>
                        <Link to="/" className='left'>airbnb</Link>
                        <ul id="nav-mobile" className='right'>
                            <li><Link to="/">English (US)</Link></li>
                            <li><Link to="/"> USD</Link></li>
                            <li><Link to="/">Become A Host</Link></li>
                            <li><Link to="/">Help</Link></li>
                            <li><Link to="/">Sign Up</Link></li>
                            <li><Link to="/" >Log In</Link></li>
                        </ul>
                        </BrowserRouter>
                    </div>
                </nav>
            </div>

           </div>
        )
    }
}

export default Navbar;