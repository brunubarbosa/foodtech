import {Fragment} from 'react'
import styles from './styles.module.scss';
import useFlavours from '../../../services/useFlavours';

export const StepOne = ({formData: {crusts}, form: { register, watch, formState: { errors } }}) => {
  const {flavours, isError, isLoading } = useFlavours()

  const flavourValue = watch('flavour', false);
  return(
    <div className={styles.form}>
      <h1>Massas</h1>
      <div className={styles.checkWrapper}>
        {flavours.map(({name, id}) => {
            return (
              <Fragment key={id}>
                <label className={id === flavourValue ? styles.checked : ''} htmlFor={name}>{name}</label>
                <input type="radio" {...register('flavour')} value={id} id={name} />
              </Fragment>
            )
          })}
      </div>
    </div>
  )
}

export default StepOne