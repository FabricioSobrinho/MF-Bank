import styles from '../../Styles/Container.module.css'

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <div className={styles.Container}>
        {children}
    </div>
  )
}

export default Container