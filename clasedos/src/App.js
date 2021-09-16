import './App.css';
import NavBar from './components/NavBar/NavBar';
import Card from './components/Card/card';
import Footer from './components/footer/Footer';
import Maps from './components/Maps/maps';
import Cartwidget from './components/CartWidget/Cartwidget';
import ListProducts from './components/ListProducts/ListProducts';

function App() {

return (

<div className= "prueba">
<NavBar/>

<div className="title"> Bienvenido a CocoLight !</div>

<Card/>
<Cartwidget/>
<ListProducts/>
<Maps/>


<Footer/>



</div>

);
}


export 
default App;
