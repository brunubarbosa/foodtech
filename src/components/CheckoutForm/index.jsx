import styles from './styles.module.scss';
import Button from '@material-ui/core/Button';

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
        <div className={styles.buttonGroup}>

          {footerButtons.map(({text, onClick, type, disable, variant, color}) => (
            <Button variant={variant} color={color} key={text} type={type} disabled={disable} onClick={onClick}>
              {text}
            </Button>
          ))}
        </div>
      </footer>
    </form>
  )
}

export default CheckoutForm