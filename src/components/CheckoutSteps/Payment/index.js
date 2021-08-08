import { useState } from 'react';
import styles from './styles.module.scss';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss'

export const StepOne = ({form: { register, watch }}) => {
const [isCvcFocused, setIsCvcFocused] = useState(false);
  const [
    name = '',
    credicardNumber = '',
    credicardExpire = '',
    cvc = ''
  ] = watch([
    'name',
    'credicardNumber',
    'credicardExpire',
    'cvc'
  ], '')
  return(
    <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        <Cards
          cvc={cvc}
          expiry={credicardExpire}
          focused={isCvcFocused ? 'cvc' : 'name'}
          name={name}
          number={credicardNumber}
        />
      </div>
        <div className={styles.form}>
          <label>Nome</label>
          <input type="text" {...register('name', { required: 'true', maxLength: 2 })} />
          <label>Cartão de credito</label>
          <input type="text" {...register('credicardNumber', {required: 'true'})} />
          <label>Validade</label>
          <input type="text" {...register('credicardExpire', {required: 'true'})} />
          <label>CVC</label>
          <input type="tel"
            onFocus={() => setIsCvcFocused(true)}
            {...register('cvc', {required: 'true'})}
            onBlur={() => setIsCvcFocused(false)}
          />
        </div>
    </div>
  )
}

export default StepOne