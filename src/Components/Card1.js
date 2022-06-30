import React, {useState} from "react";
import '../App.css';
//import Card2 from './Card2';

function Card1(){
    // function changeCard1Color(){
    //     var color="red";
    //     var el=document.getElementById('card2');
    //     el.style.backgroundColor=color;
    // }
    // function changeCard2Color(){
    //     var color="gray";
    //     var el=document.getElementById('card1');
    //     el.style.backgroundColor=color;
    // }
    const [active,changeColor] = useState(true);
    function changeCard1Color(){
        changeColor(current=>!current);
    }
    return(      
        <div className="Container">
            <div className={active ? 'Card1' : 'Card1-change'} onClick={changeCard1Color} id="card1">
                <p className={active ? 'Card-p' : 'Card-p1'}>Click Card1 it will be changed card2 backgroundColor.</p>
            </div>
            <div className={active ? 'Card1-change' : 'Card1'} id="card2" onClick={changeCard1Color}>
                <p className={active ? 'Card-p1' : 'Card-p'}>Click card2 it will be changed Card1 backgroundColor.</p>
         </div>
     </div>    
           
      
    );
  }

  
  
  export default Card1;
  