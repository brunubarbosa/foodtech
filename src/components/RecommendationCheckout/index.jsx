import styles from './styles.module.scss';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Payment from '../CheckoutSteps/Payment';
import Button from '@material-ui/core/Button';

export const CheckoutSuccessDialog = ({form, cancelRecommendationDialog, onConfirmRecommendation}) => {
  const onConfirm = (data) => {
    onConfirmRecommendation({...data, isPromotion: true})
  }
  return (
    <form onSubmit={form.handleSubmit(onConfirm)}>
      <DialogTitle >Finalizar compra</DialogTitle>
      <DialogContent>
        <Payment form={form} />
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelRecommendationDialog} color="secondary">Cancelar</Button>
        <Button type="submit" variant="contained" size="small" color="primary" >
          Finalizar
        </Button>
      </DialogActions>
    </form>
  )
}

export default CheckoutSuccessDialog