import styles from './styles.module.scss';

export const StepOne = ({form: { register, handleSubmit, watch, formState: { errors } }}) => {
  return(
    <div className={styles.form}>
      <h1>Massa</h1>
      <div className={styles.checkWrapper}>
        <label className={styles.checked} htmlFor="test1">massa gordurosa</label>
        <input type="radio" {...register('test')} value="1" id="test1" />
        <label htmlFor="test2">massa fina</label>
        <input type="radio" {...register('test')} value="2" id="test2" />
        <label htmlFor="test3">massa grossa</label>
        <input type="radio" {...register('test')} value="3" id="test3" />
        <label htmlFor="test4">massa diet</label>
        <input type="radio" {...register('test')} value="4" id="test4" />
      </div>
    </div>
  )
}

export default StepOne