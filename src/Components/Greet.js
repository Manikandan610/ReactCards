import React from "react";
import '../App.css';

function Greet(props){
    return(      
      <div>
        <div className="Container">
          <div className="Header">
            <div className="Nav">
                <a className="links" href={'https://www.w3schools.com/REACT/react_components.asp'}>Home</a>
                <a className="links" href={'https://www.w3schools.com/REACT/react_components.asp'}>About Us</a>
                <a className="links" href={'https://www.w3schools.com/REACT/react_components.asp'}>Contact</a>
                <h1>Hello {props.name} </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // function Sample(){
  //   return(
  //       <h2>Hai...Manikandan</h2>
  //   );
  // }
 
  
  export default Greet;
  