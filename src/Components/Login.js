import React from "react";
import Footer from "./Footer";
class Login extends React.Component{
    render()
    {
        return(<div>
              <h1 className="heading5"><span>login</span> page</h1>
            <div className="main">
               <div className="sub-main">
                 
                   <div>
                       <div className="imgs">
                           <div className="container-image">
                                <img className="profile" src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"></img>
                           </div>
                       </div>
                       <div className="heading6">
                           <h2>login now</h2>
                           <div>
                           <i class="fa-regular fa-envelope-dot"></i>
                               <input type="text" placeholder="user name" className="name"></input>
                           </div>

                           <div className="second-input">
                         <i class="fa-regular fa-lock-keyhole"></i>
                               <input type="text" placeholder="password" className="name"></input>
                           </div>
                           <div  className="login-btn">
                           <button>login</button>
                           </div>
                           
                               <p className="link">
                                   <a href="#">forgot password</a>  or  <a href="#">sign up</a>
                               </p>
                           
                       </div>

                   </div>

                   </div>
               </div>
               <Footer />
        </div>)
    }
}
export default Login;