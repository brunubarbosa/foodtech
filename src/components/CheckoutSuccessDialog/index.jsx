import styles from './styles.module.scss';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import deliveryImage from '../../assets/images/ontheway.svg';

export const CheckoutSuccessDialog = () => {
  return (
    <div>
      <DialogTitle >Pedido finalizado com sucesso!</DialogTitle>
      <DialogContent>
        <img src={deliveryImage} sizes={100} alt="entrega em andamento" />
        <p>Você ganhou 50 pontos</p>
        <span>Agora é só aguardar seu pedido chegar!</span>
      </DialogContent>
      <DialogActions>
        <button type="submit" onClick={() =>{}} color="primary" autoFocus>
          Ok
        </button>
      </DialogActions>
    </div>
  )
}

export default CheckoutSuccessDialog