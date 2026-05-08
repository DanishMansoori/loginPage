import React from "react";
import './App.css';

class App extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      currentView : "Signup",
      signup : {username : "", email : "" , password : ""},
      login : {
        usernameOrEmail : "" , password : ""
      },

      
      reset : {email : ""},
      
    }
  }

  chnageView = (view) =>{
    this.setState ({
      
currentView : view,

})
  };


  // typing k liye 

  handleChange = (formName , field , value ) =>{
    this.setState({
      
      [formName] : {...this.state[formName], [field] : value,}

    })
  }
  
  
  
  

  
  

  // signup page 
  
  renderSignup(){

    return(
      
      
      <div>
      <h3>signup page </h3> 

      <input type="text"
            placeholder="Username"
            value={this.state.signup.username}
            onChange = {(e) =>  this.handleChange("signup", "username", e.target.value)} />


            <input type="email"
            placeholder="Email"
            value={this.state.signup.email}
            onChange={(e) =>this.handleChange("signup", "email", e.target.value)}
            />

           <input type="password"
            placeholder="Password"
            value={this.state.signup.password}
            onChange={(e) =>this.handleChange("signup", "password", e.target.value)}
            />



        <button onClick={() =>alert("Signup Done")}>Sign up</button>









      <button onClick={()=>{this.chnageView("Login")}}>Already Account ?</button>
      
      </div>
    )
  }
  
  
  //login page
  renderLogin (){
    return(
      <div>
      
        <h3>Login Page</h3>


        <input type="text" 
        
        placeholder="Username/Email"
        value ={this.state.login.usernameOrEmail
        }
        onChange={(e) =>this.handleChange("login","usernameOrEmail", e.target.value)}
        
        
        
        />

 <input type="password" 
        
        placeholder="password"
        value ={this.state.login.password
        }
        onChange={(e) =>this.handleChange("login","password", e.target.value)}
        
        
        
        />




        <button onClick={()=> alert("Login Done")}>Login</button>
   
        <button onClick={()=>this.chnageView("Signup")}>Create Account</button>


        <br />
       <p onClick = {()=> this.chnageView("Reset")} > 
        lost your password?
           </p>
  
  </div>)
  }
  
  
  
  
  // reset function
  
  renderReset(){
    return(
      <>
        <h3>Passsword Reset</h3>

        <input type="email"
        placeholder="Enter your email"
        value={this.state.reset.email}
        onChange={(e)=>this.handleChange("reset", "email", e.target.value)} />

       <button onClick={()=> alert("Reset link sent")}>Send Reset Link</button>

     <button onClick={()=>this.chnageView("Login")}>Back to Login</button>

       
       </>




    )
  }



  render(){
    return(


      <div className="page">
        <div className="card">

      {this.state.currentView === "Signup"  && this.renderSignup()}
      {this.state.currentView === "Login"  && this.renderLogin()}
      {this.state.currentView === "Reset"  && this.renderReset()}
</div>
      
<br />
<br />
{/* <PasswordForm/> */}
<br />
<br />
<br />
      
      
      
      </div>
    )
  }




}
export default App;
