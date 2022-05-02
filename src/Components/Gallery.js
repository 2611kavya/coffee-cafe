import React from "react";
class Gallery extends React.Component{
    render()
    {
        return(<div className="icon">
             <h1 className="heading2"><span>gallery</span>  page</h1>
             <div className="photo-gallery">
                 <div className="pic place">
                     <img src="https://savoredsips.com/wp-content/uploads/2018/03/cappuccino-featured.jpg"></img>
                     
                 </div>
                 
                 <div className="pic place">
                     <img src="https://media.gettyimages.com/photos/photo-of-friends-having-coffee-in-cafe-picture-id524398140?s=612x612"></img>
                 </div>

                 <div className="pic place">
                     <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F30%2FGettyImages-1032751904-2000.jpg"></img>
                 </div>

                 <div className="pic place">
                     <img src="https://images.herzindagi.info/image/2022/Jan/Espresso-coffee-with-beans_main.jpg"></img>
                 </div>

                 <div className="pic place">
                     <img src="https://image.shutterstock.com/image-photo/women-meeting-cafe-friends-taking-260nw-783229861.jpg"></img>
                 </div>

                 <div className="pic place">
                     <img src="https://cdn.happeningnext.com/events5/banners/5a45fb96b1fed2d55b66033fe1f246d82e0e7265ebced4f1b26b6c1d6d62c7ea-rimg-w500-h500-gmir.jpg?v=1647810986"></img>
                 </div>
             </div>

        </div>)

    }
}
export default Gallery;