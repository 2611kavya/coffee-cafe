import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component{
    render()
    {
        return(<div className="App">
       
        <nav>
            <div className="logo">
                
                <span className="white">Co</span>ffee
            </div>
            <div className="navbar">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/menu">menu</Link>
            <Link to="/gallery">gallery</Link>
            <Link to="/review">Review</Link>
            <Link to="/blog">blog</Link>
            <Link to="/chef">chef</Link>
            <Link to="/contact">contact</Link>
          {/* <Link to="/login">login</Link> */}
            </div>
            <div class="icons">
			<a href="#" class="fas fa-heart"></a>
			<a href="#" class="fas fa-shopping-cart"></a>
            <a href="/login" class="fas fa-user"></a>
			
		</div>
        </nav>
        
          
        </div>);
    }
}
export default Header;