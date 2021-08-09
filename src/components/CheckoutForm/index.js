import styles from './styles.module.scss';

export const CheckoutForm = ({
  children,
  onForwardStep,
  footerButtons,
  form: { register, handleSubmit, watch, formState: { errors }}
}) => {
  return(
    <form onSubmit={handleSubmit(onForwardStep)} className={styles.form}>
      {children}
      <footer>
        {footerButtons.map(({text, onClick, type, disabled}) => (
          <button key={text} type={type} disabled={disabled} onClick={onClick}>
            {text}
          </button>
        ))}
      </footer>
    </form>
  )
}

export default CheckoutForm