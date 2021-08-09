import {Fragment} from 'react'
import styles from './styles.module.scss';

export const Select = ({items, register, value, isMultiple, errorMessage}) => {
  const selectType = isMultiple ? 'checkbox' : 'radio';
  return(
    <div className={styles.form}>
        {errorMessage && <p className={styles.errorMesagem}>{errorMessage}</p>}
      <div className={styles.checkWrapper}>
        {items.map(({name, id}) => {
          return (
            <Fragment key={id}>
              <label className={id === value ? styles.checked : ''} htmlFor={name}>{name}</label>
              <input type={selectType} {...register()} value={id} id={name} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Select