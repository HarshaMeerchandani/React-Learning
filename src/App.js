import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
    


    {/* &&&&&&&&&&&&&&&&&&     code here  &&&&&&&&&&&&&&&&&& */}
      <header className="App-header">
      <div className="container">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Harsha</h1>
        <h2 className="second-heading">I am a full stack developer</h2>
        </div>
      </header>
      <section>
        <div class="secmid">
        <div className="container">
      <div className="secleft">
      <ul>
        <li>Current Company:</li>
        <li>Total experience:</li>
        <li>Key-skills:</li>
        <li>Projects:</li>
      </ul>
      </div>
       <div className="secright">
       <ul>
        <li>Unilever</li>
        <li>3 Years</li>
        <li>React Js , React Native , Node Js</li>
        <li></li>
      </ul>
       </div>
       </div>
       </div>
      </section>
      <footer>
      <div className="container"> 
      <div className="contact-details">
      <p><span>Full Name</span><span>Harsha Meerchandani</span></p>
      <p><span>Email Id</span><span>Harsha1234d@gmail.com</span></p>
      <p><span>Mobile Number</span><span>9770385858</span></p>
      </div>
      </div>
      </footer>

    {/* &&&&&&&&&&&&&&&&&&     end code here  &&&&&&&&&&&&&&&&&& */}
  
    </div>
  );
}

export default App;
