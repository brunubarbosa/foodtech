import styles from './styles.module.scss';
import Wizard from '../../components/Wizard'
export const Checkout = () => {
  return<div className={styles.wrapper}>
    <main className={styles.content}>
        <div className={styles.image} />
        <div className={styles.formWrapper}>
        <div className={styles.wizard}>
          <Wizard />
          </div>
          <div className={styles.form}>
            <p>input 1</p>
            <p>input 2</p>
            <p>input 3</p>
            <p>input 4</p>
          </div>
        </div>
    </main>
  </div>
}

export default Checkout