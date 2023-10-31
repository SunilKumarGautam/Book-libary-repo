import React from "react";

function Footer(){

    return(
        <div>
          <div class="opnav">
          <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>

  <div class="login-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Username" name="username"></input>
      <input type="text" placeholder="Password" name="psw"></input>
      <button type="submit">Login</button>
    </form>
  </div>
  </ul>
</div>
             
<footer>
  <p>Author: Sunil kumar</p>
  <p><a href="sksingh85273@ gmail.com">sksingh85273@.com</a></p>
  
  


  
</footer>



        </div>
    );
}
export default Footer;