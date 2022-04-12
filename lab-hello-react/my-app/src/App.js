import One from './components/cabeca';
import Body from './components/corpo';
import Pe from './components/down';
import './App.css';

function App() {
  return (
  <div>
    <body>
      <section class= "box1">
        <One class="a"/> 
        <Body class="b"/>
        <span class= "marca"></span>
      </section>
      <section class= "box2">
        <Pe/>
      </section>
    </body>
  </div>
    );
}

export default App;
