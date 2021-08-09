import styles from './styles.module.scss';
import Select from '../../Select';
import useCrusts from '../../../services/useCrusts';

export const Crust = ({
  form: { register, watch, formState: { errors } }}) => {
    const {crusts, isError, isLoading } = useCrusts()
    const crustValue = watch('crust', false);
  return(
    <div className={styles.form}>
      <h1>Massas</h1>
      <Select
        items={crusts || []}
        value={crustValue}
        isMultiple={false}
        errorMessage={errors?.crust?.message}
        register={() => register('crust', {required: '*Escolha uma massa'})}
      />
    </div>
  )
}

export default Crust