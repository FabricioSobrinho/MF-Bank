
import styles from '../../Styles/Loader.module.css'

import loaderImage from '../../assets/Images/loading.svg'

function Loader() {
  return (
    <div className={styles.mainLoader}>
        <img src={loaderImage} alt='loading'/>
    </div>
  )
}

export default Loader