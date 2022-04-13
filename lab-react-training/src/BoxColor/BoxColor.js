import './BoxColor.css'

export function BoxColor(props) {
    return (
      <div className = "bar-container">
    <div className = "bar-content" style= {{backgroundColor: 'rgb(props.r,props.g,props.b)'}}></div>  
      </div>
    );
  }