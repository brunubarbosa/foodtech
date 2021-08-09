import {useState} from 'react'
import styles from './styles.module.scss';
import useWizard from '../../hooks/useWizard';
import CheckoutForm from '../../components/CheckoutForm';
import {CHECKOUT_STEPS} from '../../constants/checkoutstepsEnum';
import {checkoutSteps} from '../../constants/checkoutSteps';
import { useForm } from "react-hook-form";
import Dialog from '@material-ui/core/Dialog';
import useCrusts from '../../services/useCrusts';
import CheckoutSuccessDialog from '../../components/CheckoutSuccessDialog';
import RecommendationCheckout from '../../components/RecommendationCheckout';

export const Checkout = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isRecommendationDialogOpen, setIsRecommendationDialogOpen] = useState(true);
  const [isCheckoutSuccessDialogOpen, setIsCheckoutSuccessDialogOpen] = useState(false);
  const {Wizard, Content: FormContent} = useWizard(currentStepIndex, checkoutSteps, CHECKOUT_STEPS)
  const form = useForm({ mode: 'onChange'});

  const { crusts, isLoading, isError } = useCrusts()

  const onPreviousStep = () => {
    setCurrentStepIndex(currentStepIndex - 1)
  }

  const submitForm = () => {
    setIsCheckoutSuccessDialogOpen(true)
  }
  const onForwardStep = () => {
    if(checkoutSteps.length - 1 === currentStepIndex) return submitForm();
    setCurrentStepIndex(currentStepIndex + 1)
  }

  const cancelRecommendationDialog = () => setIsRecommendationDialogOpen(false)

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
          open={isCheckoutSuccessDialogOpen}
          onClose={() => setIsCheckoutSuccessDialogOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <CheckoutSuccessDialog />
      </Dialog>
      <Dialog
          open={isRecommendationDialogOpen}
          onClose={cancelRecommendationDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <RecommendationCheckout 
          form={form}
          cancelRecommendationDialog={cancelRecommendationDialog}
          onConfirmRecommendation={submitForm}
         />
        </Dialog>
    </div>
  )
}

export default Checkout