import './DriverCard.css';
import { Rating } from '../Rating/Rating';
export function DriverCard(props) {
    return (
      <div class= 'bigBox'>
        <span class="middle">
            <div class= 'persona'>
                <img src={props.img} alt='person' class= 'face'/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <span>
                    {props.car.model}
                    {props.car.licensePlate} 
                </span>
            </div>   
        </span>
        
      </div>
    );
  }