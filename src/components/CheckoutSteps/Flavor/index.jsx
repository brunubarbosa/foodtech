import {Fragment} from 'react'
import styles from './styles.module.scss';
import useFlavors from '../../../services/useFlavors';
import Select from '../../Select';

export const Flavor = ({form: { register, watch, formState: { errors } }}) => {
  const {flavors, isError, isLoading } = useFlavors()

  const flavorValue = watch('flavor', false);
  return(
    <div className={styles.form}>
      <h1>Sabores</h1>
      <Select
        items={flavors || []}
        value={flavorValue}
        isMultiple={false}
        errorMessage={errors?.flavor?.message}
        register={() => register('flavor', {required: '*Escolha um sabor'})}
      />
    </div>
  )
}

export default Flavor