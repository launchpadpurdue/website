import "./about.css"
import React, {useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export default function About() {
  const gallery = [
    {id: 1, name: "Picture 1", url: "https://se-images.campuslabs.com/clink/images/d6753cc7-294b-412b-9e22-d276ac8475509da32c88-44a2-490e-abed-b1fd9e8d742f.jpg?preset=w1500"},
    {id: 2, name: "Picture 2", url: "https://se-images.campuslabs.com/clink/images/9e931ea3-e93d-4492-b879-a4f48e261c8c5fefe31e-1750-4d0e-af64-77a8f2efeda4.jpg?preset=w1500"},
    {id: 3, name: "Picture 3", url: "https://se-images.campuslabs.com/clink/images/5b389fc6-6e06-44f5-a588-019b2a111b3d34b1ada8-73ef-4e9c-91b0-d6e8f44e9f6c.jpg?preset=w1500"},
    {id: 4, name: "Picture 4", url: "https://se-images.campuslabs.com/clink/images/24cbd37f-9422-4080-b619-4b026dcfd1c3bce47b12-a5eb-4e39-a6be-a2578afa02b7.jpg?preset=w1500"},
  ]
  const [current, changeCurrent] = useState(0);
    const moveLeft = ()=>{
        if(current>0) {
            changeCurrent(current-1);
        }
        else {
            changeCurrent(3);
        }
        
    }
    const moveRight = ()=>{
        if(current<3) {
            changeCurrent(current+1);
        }
        else {
            changeCurrent(0);
        }
    }
  return (
    <div className="about">
        <div className="page gallery">
          <ArrowBackIosIcon onClick={moveLeft} className = "leftButton"/>
          <div className="banner">
            <h1 className="bannerHeader">Gallery Banner</h1>
          </div>
          <div className="backgroundSlider" style = {{transform: `translateX(-${current * 100}vw)`}}>
            {gallery.map((item)=>(
              <div className="slide">
                <img className="backgroundImg" src={item.url} alt={item.name}/>

              </div>
              
            ))}
          </div>
          <ArrowForwardIosIcon onClick={moveRight} className = "rightButton"/>
        </div>
        <div className="page projects">
            <h1>Past Projects</h1>
            <div className="normalProj">
              <img className = "projImage" src="https://se-images.campuslabs.com/clink/images/d6753cc7-294b-412b-9e22-d276ac8475509da32c88-44a2-490e-abed-b1fd9e8d742f.jpg?preset=w1500" alt="" />
              <p>Project Details 1</p>
            </div>
            <div className="normalProj">
              <p>Project Details 3</p>
              <img className = "projImage" src="https://se-images.campuslabs.com/clink/images/d6753cc7-294b-412b-9e22-d276ac8475509da32c88-44a2-490e-abed-b1fd9e8d742f.jpg?preset=w1500" alt="" />
            </div>
            <div className="normalProj">
              <img className = "projImage" src="https://se-images.campuslabs.com/clink/images/d6753cc7-294b-412b-9e22-d276ac8475509da32c88-44a2-490e-abed-b1fd9e8d742f.jpg?preset=w1500" alt="" />
              <p>Project Details 3</p>
            </div>
        </div>
        <div className="page testimonials">
            <div className="testimonial">
              <img className = "testimonialImage" src="https://se-images.campuslabs.com/clink/images/d6753cc7-294b-412b-9e22-d276ac8475509da32c88-44a2-490e-abed-b1fd9e8d742f.jpg?preset=w1500" alt="" />
              <p>Testimonial 1</p>
            </div>
            <div className="testimonial">
              <img className = "testimonialImage" src="https://se-images.campuslabs.com/clink/images/d6753cc7-294b-412b-9e22-d276ac8475509da32c88-44a2-490e-abed-b1fd9e8d742f.jpg?preset=w1500" alt="" />
              <p>Testimonial 2</p>
            </div>
            <div className="testimonial">
              <img className = "testimonialImage" src="https://se-images.campuslabs.com/clink/images/d6753cc7-294b-412b-9e22-d276ac8475509da32c88-44a2-490e-abed-b1fd9e8d742f.jpg?preset=w1500" alt="" />
              <p>Testimonial 3</p>
            </div>
        </div>
    </div>
  )
}
