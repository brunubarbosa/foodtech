import {Fragment} from 'react'
import styles from './styles.module.scss';
import useFlavors from '../../../services/useFlavors';

export const Flavor = ({formData: {crusts}, form: { register, watch, formState: { errors } }}) => {
  const {flavors, isError, isLoading } = useFlavors()

  const flavorValue = watch('flavor', false);
  return(
    <div className={styles.form}>
      <h1>Massas</h1>
      <div className={styles.checkWrapper}>
        {flavors.map(({name, id}) => {
            return (
              <Fragment key={id}>
                <label className={id === flavorValue ? styles.checked : ''} htmlFor={name}>{name}</label>
                <input type="radio" {...register('flavor')} value={id} id={name} />
              </Fragment>
            )
          })}
      </div>
    </div>
  )
}

export default Flavor