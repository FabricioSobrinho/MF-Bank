// import hooks
import { useState } from "react";

// import dependencies
import ReactDatePicker from "react-datepicker";

// import styles
import styles from "../../Styles/Date.module.css";
import "react-datepicker/dist/react-datepicker.css";

function Date({ name, text, updateDateBirth }) {
  const [date, setDate] = useState(null);

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    updateDateBirth(selectedDate);
  };

  return (
    <div className={styles.divDate}>
      <ReactDatePicker
        name={name}
        id={name}
        selected={date}
        onChange={handleDateChange}
        dateFormat={"dd/MM/yyyy"}
        className={styles.datePicker}
        placeholderText={text}
        value={date ? date : ""}
        // showYearDropdown
        // showMonthYearDropdown
      />
    </div>
  );
}

export default Date;
