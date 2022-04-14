import "./CreditCard.css";


export function CreditCard(props) {
    return (
    <div class="cardBox">
        <section class= "card" style={{backgroundColor: props.bgColor, color: props.color}}>
            <div class= "type">{props.type}</div>
            <div class="number">
                <spam class='dots' type='password'>●●●● ●●●● ●●●● </spam>
                <spam class='num'>{props.number.substring(12, 16)}</spam>
            </div>
            <div class="line">
                <spam class="ano">Expires {props.expirationMonth}/{props.expirationYear}</spam>
                <spam class="bank">{props.bank}</spam>
            </div>
            <spam class="owner">{props.owner}</spam>
        </section>
    </div> 
    );
  }
  