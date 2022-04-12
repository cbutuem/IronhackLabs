import "./down.css";
import Um from '../images/um.png';
import Dois from '../images/dois.png';
import Tres from '../images/tres.png';
import Quatro from '../images/quatro.png';


function Pe(){
   return (
         <div class= "boxes">
            <span class= "miniBoxes">
                <img src={Um} alt="um" class= "icons"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
            </span>
            <span class= "miniBoxes">
                <img src={Dois} alt="dois" class= "icons"/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </span>
            <span class= "miniBoxes">
                <img src={Tres} alt="tres" class= "icons"/>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's</p>
            </span>
            <span class= "miniBoxes">
                <img src={Quatro} alt="quatro" class= "icons"/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </span>

        </div>
   );
}
 export default Pe;