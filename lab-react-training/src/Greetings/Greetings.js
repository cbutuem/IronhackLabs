import './Greetings.css';

export function Greetings(props) {
  return (
  <div class = "boxColor">
    <span lang = {props.lang}>
    {props.children}
    </span>
  </div>
  );
}
