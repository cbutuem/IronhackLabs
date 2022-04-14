import './BoxColor.css'

export function BoxColor(props) {
  const r = props.r;
  const g = props.g;
  const b = props.b;
    return (
      <div className = "bar">
        <div className = "BOX" style= {{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
        rgb({r},{g},{b} 
        </div>  
      </div>
    );
}