
import './App.css';
//import Greet from './Components/Greet';
//import Sample2 from './Components/Sample';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';


function App(props) {
  return (
    <div>
      <div className="Container">
          <Card1 />
          <Card2 />
      </div>
     
    </div>
  );
}

export default App;
