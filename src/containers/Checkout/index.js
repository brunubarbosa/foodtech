import {useState} from 'react'
import styles from './styles.module.scss';
import useWizard from '../../hooks/useWizard';
import CheckoutForm from '../../components/CheckoutForm';
import {CHECKOUT_STEPS} from '../../constants/checkoutstepsEnum';
import {checkoutSteps} from '../../constants/checkoutSteps'

export const Checkout = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const {Wizard, Content} = useWizard(currentStepIndex, checkoutSteps, CHECKOUT_STEPS)

  const onPreviousStep = () => {
    setCurrentStepIndex(currentStepIndex - 1)
  }
  const onNextStep = () => {
    setCurrentStepIndex(currentStepIndex + 1)
  }
  return<div className={styles.wrapper}>
    <main className={styles.content}>
      <div className={styles.image} />
      <div className={styles.formWrapper}>
      <div className={styles.wizard}>
        {Wizard}
      </div>
        <CheckoutForm footerButtons={[
          {text: 'Anterior', disable: false, onClick: onPreviousStep},
          {text: checkoutSteps.length - 1 === currentStepIndex ? 
            'Finalizar' : 'Próximo',
            disable: false,
            onClick: onNextStep
          }
        ]} >
          <Content />
        </CheckoutForm>
      </div>
    </main>
  </div>
}

export default Checkout