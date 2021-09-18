
import Logo from '../../assets/Logo.png'
import './NavBar.css';
//externo materialui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//externo fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartPlus } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

return (

<AppBar position="static" className= "Navbar-Main">
        <Toolbar>
          <Typography variant="h6">
            <div className="CocoLogo">
          <img  src= {Logo} alt={'logoMain'}/>
          </div>
          </Typography>
          <ul className="Lista-NavBar">
        <li> <Button color="inherit">Home</Button></li> 
        <li> <Button color="inherit">Productos</Button></li> 
        <li> <Button color="inherit">Cosmeticos</Button></li> 
        <li> <Button color="inherit">Contacto</Button></li> 
        </ul>
        <div className="cart-button">
        <Button variant="contained">
        <FontAwesomeIcon icon={faCartPlus}/>
        <p> 4 </p>
        </Button>
      
           </div>
        </Toolbar>
      </AppBar>

);
}

export 
default  NavBar;
