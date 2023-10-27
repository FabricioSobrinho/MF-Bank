import styles from '../../Styles/ValidationErrors.module.css'

import { cpf } from 'cpf-cnpj-validator';

function ValidationErrors({ userData }) {

  const validCpf = cpf.isValid(userData.cpf);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validEmail = isValidEmail(userData.email);

  const validPassConfirmation =
    userData.password === userData.password_confirmation ? true : false;

  const validPass = userData.password.length >= 8 ? true : false;

  const validPhoneNumber =
    userData.phone_number[15] !== undefined && userData.phone_number[1] !== '0';

  const isValidBirthDate = (birthDate) => {
    birthDate = userData.date_birth.split("/")

    let now_date = new Date

    let born_year = birthDate[2]

    if (born_year > now_date.getFullYear()) {

      return false
    } else {
      return true
    }
  }

  const validBirthDate = isValidBirthDate(userData.birthDate)

  return (
    <div className={styles.mainErrors}>
      { !validCpf && <p className={styles.error}>Insira um cpf válido.</p>}
      { !validEmail && <p className={styles.error}>Insira um email válido.</p>}
      { !validPhoneNumber && <p className={styles.error}>Insira uma númmero de telefone válido.</p>}
      {/* { cepErr && <p className={styles.error}>Insira um email válido.</p>} */}
      { !validPass && <p className={styles.error}>Insira uma senha de no minimo 8 caracteres.</p>}
      { !validPassConfirmation && <p className={styles.error}>As senhas não são iguais</p>}
      { !validBirthDate && <p className={styles.error}>Insira uma data de nascimento válida.</p>}
    </div>
  );
}

export default ValidationErrors;
