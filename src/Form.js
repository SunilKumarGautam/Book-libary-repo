
import React from 'react';



function From() {
  return(
    <div>
      <div>
   <form action="action_page.php">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    

    <label for="email">Email</label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

    <label for="psw">Password</label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

    <label for="psw-repeat">Repeat Password</label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
    

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>

    

    
   </div> 
    
  
</div>
    
  );
  }
  


  
    
        
export default From;