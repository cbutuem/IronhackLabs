import "./cabeca.css";
import Logo from "../images/logo.png";
import Hamburguer from "../images/hamburguer.png";
function Head(){
   return (
         <div class= "menu">
            <header>
               <img src= {Logo} alt="logo" class= "logo"/>
               <img src= {Hamburguer} alt="hamburguer" class= "ham"/> 
            </header>
        </div>
   );
}
 export default Head;