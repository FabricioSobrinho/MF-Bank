// import styles
import styles from '../Styles/NotFoundPage.module.css'

// import images
import notFoundImage from '../assets/Images/page-not-found-image.svg'

function NotFoundPage() {
  return (
    <div className={styles.mainNotFoundPage}>
        <img src={notFoundImage} alt='not found route'/>
    </div>
  )
}

export default NotFoundPage