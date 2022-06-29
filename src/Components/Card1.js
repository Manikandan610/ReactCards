import React from "react";
import '../App.css';
//import Card2 from './Card2';

function Card1(){
    function changeCard1Color(){
        var color="red";
        var el=document.getElementById('card2');
        el.style.backgroundColor=color;
    }
    return(      
     
            <div className="Card1" onClick={changeCard1Color} id="card1">
                
            </div>
           
      
    );
  }

  
  
  export default Card1;
  