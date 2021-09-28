import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Maps from './components/Maps/maps';
import ListProducts from './components/ListProducts/ListProducts';
import AppRouter from './AppRouter/AppRouter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {


return ( 

  

<div className= "content">
<NavBar/>

<div className="title"> Bienvenido a CocoLight !</div>
   <AppRouter/>
   <ListProducts/>
   <ItemDetailContainer/>
    <Maps/>
    <Footer/>
  
</div>


);
}


export 
default App;
