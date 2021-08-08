import {Fragment} from 'react'
import styles from './styles.module.scss';

export const StepOne = ({formData: {crusts}, form: { register, watch, formState: { errors } }}) => {
  const crustValue = watch("crust", false);
  return(
    <div className={styles.form}>
      <h1>Massas</h1>
      <div className={styles.checkWrapper}>
        {crusts.map(({name, id}) => {
            return (
              <Fragment key={id}>
                <label className={id === crustValue ? styles.checked : ''} htmlFor={name}>{name}</label>
                <input type="radio" {...register('crust')} value={id} id={name} />
              </Fragment>
            )
          })}
      </div>
    </div>
  )
}

export default StepOne