import React from "react";
class Footer extends React.Component{
    render()
    {
        return(<div>
             <footer>
              <div className="row">
              <div className="col">
                 <img src="images/coffee logo.jpg" className="logo1"></img>
                 <p>Coffee is a popular beverage that researchers have studied extensively for its many health benefits, including its ability to increase energy levels, promote weight management,athletic performance, and protect against chronic disease. 
   </p>
              </div>
              <div className="col">
                  <h3>cafe<div className="underline"><span></span></div></h3>
                  <p>ashok nagar</p>
                  <p>new delhi,india</p>
                  <p className="email-id">2611kavyasingh@gmail.com</p>
                  <h4>+91-9027289739</h4>
              </div>
              <div className="col">
                  <h3>links<div className="underline"><span></span></div></h3>
                  <ul>
                 <li><a href="/">home</a></li>
                 <li><a href="/about">about</a></li>
                 <li><a href="/menu">menu</a></li>
                 <li><a href="/gallery">gallery</a></li> 
                 <li><a href="/review">review</a></li>
                 <li><a href="/contact">contact</a></li> 
                 <li><a href="/blog">blog</a></li> 
                  </ul>
             
              </div>
              <div className="col">
            <h3>newsletter<div className="underline"><span></span></div></h3>
            <form className="kk">
                <i class="far fa-envelope"></i>
                <input type="email" placeholder="enter your email" required></input>
                <button type="submit" > <i class="fas fa-arrow-right"></i></button>
            </form>
            <div className="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-whatsapp"></i>
                <i class="fab fa-instagram"></i>

            </div>
              </div>
              </div>
              {/* <hr></hr>
          <p className="copyright">all copyright@123---all rights reserved</p> */}
          </footer>
      
        </div>)
    }
}
export default Footer;