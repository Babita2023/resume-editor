import { useState } from "react";
import "./Signup.css";

export default function Signup(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name,email,password);
  }

  return(
    <div className="signup-container">

      <form className="signup-form" onSubmit={handleSubmit}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
        
        <p>
  Already have an account? <a href="/login">Login</a>
</p>
      </form>

    </div>
  )
}