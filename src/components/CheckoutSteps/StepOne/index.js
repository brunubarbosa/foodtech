import {useState} from 'react'
import styles from './styles.module.scss';

export const StepOne = () => {
  return(
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
  )
}

export default StepOne