import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <h1> Lilius Hardware </h1>
  <CardComponent text= {"Placa de video 1"}/>
  <CardComponent text= {"Placa de video 2"}/>
  <CardComponent text= {"Placa de video 3"}/>

    </div>
  );
}
const CardComponent = (props) => {

return (
<div>
  <p>{props.text} </p>
</div>
)}

export default App;
