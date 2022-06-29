import React from "react";
import '../App.css';


function Card2(){
  function changeCard2Color(){
    var color="green";
    var el=document.getElementById('card1');
    el.style.backgroundColor=color;
}
    return(      
      <div className="Card2" id="card2" onClick={changeCard2Color}>
                
      </div>
    );
  }

  
  
  export default Card2;
  