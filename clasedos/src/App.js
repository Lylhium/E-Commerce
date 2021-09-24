import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Maps from './components/Maps/maps';
import ListProducts from './components/ListProducts/ListProducts';



function App() {

    const urlPokeApi = 'https://pokeapi.co/api/v2/pokemon/'

fetch(urlPokeApi) 
.then( (response ) =>{
return response.json()

})
.then ( (data) => {

    console.log("pokemon data: " ,data.results)
})

return (

<div className= "prueba">
<NavBar/>

<div className="title"> Bienvenido a CocoLight !</div>
   <ListProducts/>
    <Maps/>
    <Footer/>
</div>

);
}


export 
default App;
