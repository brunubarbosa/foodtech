import styles from './styles.module.scss';
import {AiOutlineCheckCircle} from 'react-icons/ai'
export const Wizard = () => {
  return (
  <div className={styles.wrapper}>
    <div className={styles.wrapper}>
      <span className={styles.itemWrapper}>
      <span className={`${styles.item} ${styles.past}`}>
          <AiOutlineCheckCircle size="20" color="#fc5c86"/>
        </span>
        Massa
      </span>
      <span className={styles.itemWrapper}>
        <span className={`${styles.item} ${styles.current}`}>2</span>
        Tamanho
      </span>
      <span className={styles.itemWrapper}>
        <span className={styles.item}>3</span>
        Sabor
      </span>
      <span className={styles.itemWrapper}>
      <span className={styles.item}>4</span>
        Pagamento
        
      </span>
      </div>
  </div>
          
  )
}

export default Wizard