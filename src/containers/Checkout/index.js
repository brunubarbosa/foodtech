import {useState} from 'react'
import styles from './styles.module.scss';
import useWizard from '../../hooks/useWizard';
import CheckoutForm from '../../components/CheckoutForm';
import {CHECKOUT_STEPS} from '../../constants/checkoutstepsEnum';
import {checkoutSteps} from '../../constants/checkoutSteps'
import { useForm } from "react-hook-form";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Payment from '../../components/CheckoutSteps/Payment';
import useCrusts from '../../services/useCrusts';

export const Checkout = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isRecommendationModalOpen, setIsRecommendationModalOpen] = useState(true);
  const {Wizard, Content: FormContent} = useWizard(currentStepIndex, checkoutSteps, CHECKOUT_STEPS)
  const form = useForm({ mode: 'onChange'});

  const { crusts, isLoading, isError } = useCrusts()

  const onPreviousStep = () => {
    setCurrentStepIndex(currentStepIndex - 1)
  }
  const onForwardStep = () => {
    if(checkoutSteps.length - 1 !== currentStepIndex) setCurrentStepIndex(currentStepIndex + 1)
  }

  const cancelRecommendationModal = () => setIsRecommendationModalOpen(false)

  const onConfirmRecommendation = () => {
    console.log(form)
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.content}>
        <div className={styles.image} />
        <div className={styles.formWrapper}>
          <div className={styles.wizard}>
            {Wizard}
          </div>
          <CheckoutForm form={form} onForwardStep={onForwardStep}
            footerButtons={[{
              text: 'Anterior',
              type: 'button',
              disable: false,
              onClick: onPreviousStep
            },
            {
              text: checkoutSteps.length - 1 === currentStepIndex ? 
              'Finalizar' : 'Próximo',
              disable: false,
              type: 'submit'
            }
            ]}
          >
            <FormContent form={form} formData={{crusts}} />
          </CheckoutForm>
        </div>
      </main>

      <Dialog
          open={isRecommendationModalOpen}
          onClose={cancelRecommendationModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
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
      </Dialog>
    </div>
  )
}

export default Checkout