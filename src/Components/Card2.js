import React from "react";
import '../App.css';


function Card2(){
  function changeCard2Color(){
    var color="gray";
    var el=document.getElementById('card1');
    el.style.backgroundColor=color;
}
    return(   
      <div className="Card2" id="card2" onClick={changeCard2Color}>
                <p className="Card-p">Click card2 it will be changed Card1 backgroundColor.</p>
      </div>
    );
  }

  
  
  export default Card2;
  