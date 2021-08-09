import styles from './styles.module.scss';

export const PromotionNotice = ({title, message, image}) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="Foto do item promocional" />
      <div className={styles.textContentWrapper}>
        <h1>{title}</h1>
        {message}
      </div>
    </div>
  )
}

export default PromotionNotice