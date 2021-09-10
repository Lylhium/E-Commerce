import './card.css';
import Milanesa from '../../assets/Milanesa.jpg'
//externo materialui
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Carta = () => {

return (

    <Card>
    <CardActionArea>
        <div className="milanga"> 
      <img src={Milanesa}/>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Milanesa de Pollo
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Las milanesas son .... muy ricas
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="brown">
     Compartir
      </Button>
      <Button size="small" color="brown">
       Aprender Más
      </Button>
    </CardActions>
  </Card>


);
}

export 
default  Carta;
