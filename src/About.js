import React from "react";

function About(){
    return(
        <div>
<div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 className="text-align:center">Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="istockphoto-1140180560-2048*2048/image/team1.png" alt="Jane" style={{marginRight:  +"width:100%"}}></img>
      <div className="container">
        <h2>sunil kumar</h2>
        <p className="title">Front End Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>sksingh85273@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/reading-book-1296x728-header/team2.jpg" alt="Mike" style={{marginRight:  +"width:100%"}}></img>
      <div className="container">
        <h2>My friends</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>bk528h@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="/team3.jpg" alt="my friend" style={{marginRight:  +"width:100%"}}></img>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    

    
</div>
    );
}
export default About;