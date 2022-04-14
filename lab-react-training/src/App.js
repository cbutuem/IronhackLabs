import './App.css';
//import IdCard from "../src/IdCard/IdCard";
//import { Greetings } from '../src/Greetings/Greetings';
//import { Random } from '../src/Random/Random';
//import { BoxColor } from '../src/BoxColor/BoxColor';
//import { CreditCard } from '../src/CreditCard/CreditCard';
//import { Rating } from '../src/Rating/Rating';
import { DriverCard } from '../src/DriverCard/DriverCard';
function App() {

  return (
    <div>
     <DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/> 
    </div>
  );
}
export default App;
