import styles from './styles.module.scss';

export const CheckoutForm = ({children, footerButtons}) => {
  return(
    <div className={styles.form}>
      {children}
      <footer>
        {footerButtons.map(({text, onClick}) => (
          <button onClick={onClick}>
            {text}
          </button>
        ))}
      </footer>
    </div>
  )
}

export default CheckoutForm