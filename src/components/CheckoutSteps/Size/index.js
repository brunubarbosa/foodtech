import styles from './styles.module.scss';
import useSizes from '../../../services/useSizes';
import Select from '../../Select';

export const Size = ({form: { register, watch, formState: { errors }  }}) => {
  const {sizes, isError, isLoading } = useSizes()
  const sizeValue = watch('size', false);
  return(
    <div className={styles.form}>
      <h1>Tamanhos</h1>
      <Select
        items={sizes || []}
        value={sizeValue}
        isMultiple={false}
        errorMessage={errors?.size?.message}
        register={() => register('size', {required: '*Escolha um tamanho'})}
      />
    </div>
  )
}

export default Size