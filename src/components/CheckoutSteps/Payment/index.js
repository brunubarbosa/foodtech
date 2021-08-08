import styles from './styles.module.scss';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss'

export const StepOne = ({form: { register, handleSubmit, watch, formState: { errors } }}) => {

  return(
    <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        <Cards
          cvc={'3333'}
          expiry={'1111'}
          focused={'name'}
          name={'bruno barbosa'}
          number={'49111111111'}
        />
      </div>
        <div className={styles.form}>
          <label>Nome</label>
          <input  type="text" {...register('name')} />
          <label>Cartão de credito</label>
          <input type="text" {...register('credicardNumber')} />
          <label>Validade</label>
          <input type="text" {...register('credicardExpire')} />
          <label>CVC</label>
          <input type="tel" {...register('cvc')} />
        </div>
    </div>
  )
}

export default StepOne