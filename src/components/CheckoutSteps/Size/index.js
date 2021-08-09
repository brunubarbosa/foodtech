import styles from './styles.module.scss';
import useSizes from '../../../services/useSizes';

import {Fragment} from 'react'

export const Size = ({form: { register, watch }}) => {
  const {sizes, isError, isLoading } = useSizes()
  const crustValue = watch('size', false);

  return(
    <div className={styles.form}>
      <h1>Tamanhos</h1>
      <div className={styles.checkWrapper}>
        {sizes.map(({name, id}) => {
          return (
            <Fragment key={id}>
              <label className={id === crustValue ? styles.checked : ''} htmlFor={name}>{name}</label>
              <input type="radio" {...register('size', {required: true})} value={id} id={name} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Size