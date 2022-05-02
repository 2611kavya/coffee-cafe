import React from "react";
class About extends React.Component{
    render()
    {
        return(<div className="all">
            <div className="about">
            <h1 className="heading"><span>about</span>  us</h1>
            <div className="row">
                <div className="image">
                 <img src="https://www.xtrafondos.com/wallpapers/taza-de-cafe-negro-5730.jpg"></img>
                </div>
                <div className="content">
                     <h3>what makes our coffee special?</h3>
                     <p>Coffee is darkly colored, bitter, slightly acidic and has a stimulating effect in humans,
                          primarily due to its caffeine content. It is one of the most 
                         popular drinks in the world and can be prepared and presented in a variety of ways</p>
               <p>
               Coffee is a popular beverage that researchers have studied extensively for its many health benefits, including its ability to increase energy levels, promote weight management,athletic performance, and protect against chronic disease. 
   
               <a href="#" className="btn">learn more</a>
               </p>
                </div>

            </div>
            </div>
          
        </div>)
    }
}
export default About;