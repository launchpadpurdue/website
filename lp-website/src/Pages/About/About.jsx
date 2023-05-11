import "./about.css"
import React, {useState} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import bioBoards from './bioboards.png';
import boilerHunt from './boilerhunt.jpeg';
import putMeOn from './putMeOn.png';
import dreamsOfMidnight from './dreamsOfMidnight.png';
import githubIcon from './githubIcon.png';
import Stephan from './stephan.jpeg';
import Shrinivas from './shrinivas.JPG';
import Nilisha from './nilisha.jpg';


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
            <h2 className="bannerHeader">LaunchPad is an organization at Purdue that offers a one-on-one mentorship program, events, and technical project guidance to incoming students, aiming to provide them with the necessary knowledge and connections to thrive during their time here.</h2>
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
              <img className = "projImage" src={bioBoards} alt="" />
              <div className="projDesc">
              <a href="https://github.com/visvshah/bioboards" target="_blank"><img className="github" src={githubIcon} width="30px"/></a>
                <h2>Bioboards - <i>Visv Shah</i></h2>
                <p>BioBoards is a platform that allows users to create a custom “board” and share it through a link in their social media bio (similar to linktree or VSCO).</p>
              </div>
            </div>
            <div className="normalProj">
              <div className="projDesc">
              <a href="https://github.com/dasare467/Put-Me-On" target="_blank"><img className="github" src={githubIcon} width="30px"/></a>
                <h2>Put Me On - <i>Dwayne Asare</i></h2>
                <p>Put Me On is a web application that allows users to share their Spotify playlists with others, and like each other's playlists. The app is built using React for the frontend and Flask for the backend, and leverages the Spotify API to retrieve playlist details.</p>
              </div>
              <img className = "projImage" src={putMeOn} alt="" />
            </div>
            <div className="normalProj">
              <img className = "projImage" src={boilerHunt} alt="" />
              <div className="projDesc">
              <a href="https://github.com/PeterS-Kang/BoilerHunt-v2" target="_blank"><img className="github" src={githubIcon} width="30px"/></a>
              <h2>Boilerhunt - <i>Peter Kang</i></h2>
                <p>Boilerhunt is an interactive mobile guide of Purdue campus that encourages students to explore campus and go to new places.</p>
              </div>
            </div>
            <div className="normalProj">
              <div className="projDesc">
              <a href="https://github.com/joeruhe/Dreams-of-Midnight" target="_blank"><img className="github" src={githubIcon} width="30px"/></a>
                <h2>Dreams of Midnight - <i>Joe Ruhe</i></h2>
                <p>Dreams of Midnight is a single player adventure game with original cat designs, animations, and storyline.</p>
              </div>
              <img className = "projImage" src={dreamsOfMidnight} alt="" />
            </div>
        </div>
        <div className="page testimonials">
            <div className="testimonial">
              <img className = "testimonialImage" src={Shrinivas} alt="" />
              <h3>Shrinivas Venkatesan</h3>
              <h5 className="participation"><i>Mentee '21, Mentor '22</i></h5>
              <p>My favorite part of LaunchPad was how supportive and conducive the environment was for me to develop my first meaningful project. My mentor and I were able to create a good working relationship that enabled me to enhance and develop my technical and creative skills. Furthermore, during my time as a mentor last year, I was able to provide the knowledge and expertise that I had gained over the course of my time here at Purdue to my mentee and help him navigate and transition to life at college.</p>
            </div>
            <div className="testimonial">
              <img className = "testimonialImage" src={Stephan} alt="" />
              <h3>Stephan Feria</h3>
              <h5 className="participation"><i>Mentee '20, Mentor '21, '22, '23</i></h5>
              <p>LaunchPad has been an exceptional organization that has had a profound impact on me since my freshman year. The absolute best part of LaunchPad, for me, has been the opportunity to immerse myself in various projects. As a mentor, I relished in the chance to contemplate the high-level design decisions that went into my mentees' projects. And as a mentee myself, I experienced the entire design process, from its inception to its completion, while being guided by a talented mentor. In both roles, I derived immense satisfaction from working on diverse projects that spanned across various realms of computer science.</p>
            </div>
            <div className="testimonial">
              <img className = "testimonialImage" src={Nilisha} alt="" />
              <h3>Nilisha Bhandari</h3>
              <h5 className="participation"><i>Mentee '21, Mentor '22, '23</i></h5>
              <p>LaunchPad provided me with a valuable experience as a mentee as well as a mentor. As a mentee, I learned new and valuable technical skills, while as a mentor, I had the privilege of sharing my knowledge and experience. I also got the opportunity to network with like-minded people in CS. I highly recommend the LaunchPad program to anyone looking to gain new skills and make meaningful connections!</p>
            </div>
        </div>
    </div>
  )
}







