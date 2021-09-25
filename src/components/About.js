import React from 'react'
import "./About"
import portHomeBcg from "../images/portHomeBcg.jpg";

function About() {
    return (
        <section className= 'py-5 my-5' id="about">
            <div className="container h-screen my-5">
                <div className="row h-full">
                    <div className="col-12 col-sm-10 mx-auto col-md-6 my-3">
                        <img src={portHomeBcg}
                        className="img-fluid img-thumbnail" 
                        alt="about"
                        style={{background: "var(--darkGrey"}}
                        />;
                    </div>
                    <div className="col-12 col-sm-10 mx-auto col-md-6 my-5">
                        <h1>About Me </h1>
                    
                    <p style={{fontSize: '20px'}}>
                        Highly motivated, self-starting developer ever committed to continuous and never ending personal improvements. Designing and developing apps for business solutions, educational tutorial app, websites…Looking forward to rubbing minds with like great minds by working on a large scale in a corporate environment.
                    </p>
            
                <button style={{marginTop: '20px'}}>My Resume</button>
          
                <button style={{marginLeft: '20px'}}>Contact Me</button>
                    </div>
                    </div>
                </div>
        </section>

    )
}
export default About
