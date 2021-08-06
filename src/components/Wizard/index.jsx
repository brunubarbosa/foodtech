import styles from './styles.module.scss';
export const Wizard = () => {
  return (
  <div className={styles.wrapper}>
    <div className={styles.wrapper}>
      <span className={styles.itemWrapper}>
        <span className={styles.item}>1</span>
        Massa
      </span>
      <span className={styles.itemWrapper}>
        <span className={styles.item}>1</span>
        Tamanho
      </span>
      <span className={styles.itemWrapper}>
        <span className={styles.item}>1</span>
        Sabor
      </span>
      <span className={styles.itemWrapper}>
      <span className={styles.item}>1</span>
        Pagamento
      </span>
      </div>
  </div>
          
  )
}

export default Wizard