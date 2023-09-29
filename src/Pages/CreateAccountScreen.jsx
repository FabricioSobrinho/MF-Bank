import styles from '../Styles/CreateAccountScreen.module.css'

import createAccountScreenImage from '../assets/Images/create-account-screen-image.svg'


import InputInsertData from '../Layouts/FormsComponents/InputInsertData'

function CreateAccountScreen() {
  return (
    <div className={styles.mainCreateAccountPage} >
        <div className={styles.leftCreateAccountScreen}>
            <img src={createAccountScreenImage} alt='inserting credencials in the app'/>
        </div>
        <div className={styles.rightCreateAccountScreen}>
            <InputInsertData/>
            <InputInsertData/>
            <InputInsertData/>
            <InputInsertData/>
            <InputInsertData/>
            <InputInsertData/>
            <InputInsertData/>
            <InputInsertData/>
        </div>
    </div>
  )
}

export default CreateAccountScreen