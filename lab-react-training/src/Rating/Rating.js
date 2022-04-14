import './Rating.css';

export function Rating(props) {
    const num = Math.round(props.children);
    let strinBack= '';
    console.log(props, num);
    for(let i= 0; i <= 5; i++){
        if(num >= i){
            strinBack += '★';
        }
        if(num < i){
            strinBack += '☆'; 
        }
    }
    console.log(strinBack);
    return (
      <div class = 'star'>
        {strinBack}
      </div>
    );
  }