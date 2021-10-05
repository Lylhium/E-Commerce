//style
import './App.css';
//import Components
import Footer from './components/footer/Footer';
import Maps from './components/Maps/maps';
//import Pages
import AppRouter from './AppRouter/AppRouter';

function App() {
  return ( 
    <div className= "content">

         <AppRouter/>
         <Maps/>
         <Footer/>
  
    </div>
         );}
export default App;
