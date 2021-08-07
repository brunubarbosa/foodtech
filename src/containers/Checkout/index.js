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
            <h1>Massa</h1>
            <div className={styles.checkWrapper}>
              <label className={styles.checked} htmlFor="test1">test1</label>
              <input type="radio" name="test" id="test1" />
              <label htmlFor="test2">test2</label>
              <input type="radio" name="test" id="test2" />
              <label htmlFor="test3">test3</label>
              <input type="radio" name="test" id="test3" />
              <label htmlFor="test4">test4</label>
              <input type="radio" name="test" id="test4" />
            </div>
          </div>
        </div>
    </main>
  </div>
}

export default Checkout