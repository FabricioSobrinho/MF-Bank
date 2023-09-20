import styles from '../../Styles/InputInsertData.module.css'

// eslint-disable-next-line react/prop-types
function InputInsertData({type, text}) {
  return (
    <input type={type} value={text} className={styles.input}/>
  )
}

export default InputInsertData