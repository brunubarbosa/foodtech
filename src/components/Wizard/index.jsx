import styles from './styles.module.scss';
import {AiOutlineCheckCircle} from 'react-icons/ai'

export const Wizard = ({currentStepIndex, content}) => {

  const getStepItem = (currentStepIndex, stepTarget) => {
    if(stepTarget < currentStepIndex) return (
      <span className={`${styles.item} ${styles.past}`}>
        <AiOutlineCheckCircle size="20" color="#fc5c86"/>
      </span>
    )
  if(stepTarget > currentStepIndex) return (<span className={styles.item}>{stepTarget + 1}</span>)
  if(stepTarget === currentStepIndex) return (<span className={`${styles.item} ${styles.current}`}>{stepTarget + 1}</span>)
  }

  return (
  <div className={styles.wrapper}>
    <div className={styles.wrapper}>
      {content.map((item, index) => (
        <span key={item} className={styles.itemWrapper}>
          {getStepItem(currentStepIndex, index)}
          {item}
        </span>
      ))}
    </div>
  </div>
          
  )
}

export default Wizard