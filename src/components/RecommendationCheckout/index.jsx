import styles from './styles.module.scss';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Payment from '../CheckoutSteps/Payment';
export const CheckoutSuccessDialog = ({form, cancelRecommendationModal, onConfirmRecommendation}) => {
  return (
          
        <form onSubmit={form.handleSubmit(() => console.log(form.getValues()))}>
          <DialogTitle >Finalizar compra</DialogTitle>
          <DialogContent>
            <Payment form={form} />
          </DialogContent>
          <DialogActions>
            <button onClick={cancelRecommendationModal} color="primary">
              Cancelar
            </button>
            <button type="submit" onClick={onConfirmRecommendation} color="primary" autoFocus>
              Finalizar
            </button>
          </DialogActions>
        </form>
  )
}

export default CheckoutSuccessDialog