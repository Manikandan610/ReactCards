import React, {useState} from "react";
//import '../App.css';
import '../Asset/Style.css';
//import Card2 from './Card2';

function Card1(){
    
    const [isActive,card1Color] = useState(true);
     const [active,card2Color] = useState(true);
    function changeCard1Color(){
        card1Color(current=>!current);
    }
    function changeCard2Color(){
        card2Color(current=>!current);
    }
    return(      
        <div className="Container">
            <div className={active ? 'Card1' : 'Card1-change'} onClick={changeCard1Color}>
                <p className={active ? 'Card-p1' : 'Card-p'}>Click Card1 it will be changed card2 backgroundColor.</p>
            </div>
            <div className={isActive ? 'Card2-change' : 'Card2'} onClick={changeCard2Color}>
                <p className={isActive ? 'Card-p' : 'Card-p1'}>Click card2 it will be changed Card1 backgroundColor.</p>
         </div>
     </div>    
           
      
    );
  }

  
  
  export default Card1;
  