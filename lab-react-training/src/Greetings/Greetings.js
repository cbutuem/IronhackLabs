import './Greetings.css';

export function Greetings(props) {
  return (
  <div class = "box">
    <span lang={props.lang}>
    {props.children}
    </span>
  </div>
  );
}
