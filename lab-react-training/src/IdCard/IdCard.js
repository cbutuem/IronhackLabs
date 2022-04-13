import "./IdCard.css";

function IdCard(props) {
    return (
    <div>
        <section class= "Id">
        <img src= {props.picture} alt="person" class="pic"/>
        <ul>
            <li><span>First name: </span>{props.firstName}</li>
            <li><span>Last name: </span>{props.lastName}</li>
            <li><span>Gender: </span>{props.gender}</li>
            <li><span>Height: </span>{props.height}</li>
            <li><span>Birth: </span>{props.birth.toDateString()}</li>
        </ul>
        </section>
    </div> 
    );
  }
  
  export default IdCard;