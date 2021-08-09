import styles from './styles.module.scss';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Payment from '../CheckoutSteps/Payment';
import Button from '@material-ui/core/Button';

export const CheckoutSuccessDialog = ({form, cancelRecommendationDialog, onConfirmRecommendation}) => {
  return (
          
        <form onSubmit={form.handleSubmit(() => console.log(form.getValues()))}>
          <DialogTitle >Finalizar compra</DialogTitle>
          <DialogContent>
            <Payment form={form} />
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelRecommendationDialog} color="secondary">Cancelar</Button>
            <Button variant="contained" size="small" color="primary" >
              Finalizar
            </Button>
          </DialogActions>
        </form>
  )
}

export default CheckoutSuccessDialog