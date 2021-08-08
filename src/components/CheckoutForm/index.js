import styles from './styles.module.scss';

export const CheckoutForm = ({children, footerButtons, form: { register, handleSubmit, watch, formState: { errors } }}) => {
  const onSubmit = (data) => console.log(data)
  return(
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {children}
      <footer>
        {footerButtons.map(({text, onClick}) => (
          <button key={text} type={text === 'Finalizar' ? 'submit' : 'button'} onClick={onClick}>
            {text}
          </button>
        ))}
      </footer>
    </form>
  )
}

export default CheckoutForm