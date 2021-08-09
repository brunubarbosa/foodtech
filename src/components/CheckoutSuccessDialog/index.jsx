import styles from './styles.module.scss';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import deliveryImage from '../../assets/images/ontheway.svg';
import Button from '@material-ui/core/Button';

export const CheckoutSuccessDialog = ({message, close}) => {
  return (
    <div>
      <DialogTitle >Pedido finalizado com sucesso!</DialogTitle>
      <DialogContent className={styles.content}>
        <img src={deliveryImage} size={100} alt="entrega em andamento" />
        {message && <p>{message}</p>}
        <span>Agora é só aguardar seu pedido chegar!</span>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" onClick={close} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </div>
  )
}

export default CheckoutSuccessDialog