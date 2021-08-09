import styles from './styles.module.scss';
import image from '../../assets/images/ontheway.svg'
export const PromotionNotice = ({title, children, image}) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="Foto do item promocional" />
      <div className={styles.textContentWrapper}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default PromotionNotice