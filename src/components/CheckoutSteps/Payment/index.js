import { useState } from 'react';
import styles from './styles.module.scss';
import Cards from 'react-credit-cards';
import 'react-credit-cards/lib/styles.scss'

export const Payment = ({form: { register, watch }}) => {
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
      <h1>Pagamento</h1>
      <div className={styles.contentWrapper}>
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
          <label htmlFor="name" >Nome</label>
          <input type="text" id="name" {...register('name', {required: 'true'})} />
          <label htmlFor="credicardNumber">Cartão de credito</label>
          <input type="text" id="credicardNumber" {...register('credicardNumber', {required: 'true'})} />
          <label htmlFor="credicardExpire">Validade</label>
          <input type="text" id="credicardExpire" {...register('credicardExpire', {required: 'true'})} />
          <label htmlFor="cvc">CVC</label>
          <input
            id="cvc"
            type="tel"
            onFocus={() => setIsCvcFocused(true)}
            {...register('cvc', {required: 'true'})}
            onBlur={() => setIsCvcFocused(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default Payment