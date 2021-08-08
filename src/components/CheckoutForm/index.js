import styles from './styles.module.scss';

export const CheckoutForm = ({children, footerButtons}) => {
  return(
    <form className={styles.form}>
      {children}
      <footer>
        {footerButtons.map(({text, onClick}) => (
          <button type="button" onClick={onClick}>
            {text}
          </button>
        ))}
      </footer>
    </form>
  )
}

export default CheckoutForm