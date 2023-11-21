// import hooks
import { createTheme, ThemeProvider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

// import dependencies
import dayjs from "dayjs";

function DateInput({ handleChange, value }) {
  const inputTheme = (theme) =>
    createTheme({
      ...theme,
      components: {
        MuiDateCalendar: {
          styleOverrides: {
            root: {
              color: "#f0f8ff",
              borderRadius: 9,
              borderWidth: 2,
              borderColor: "#2e3133",
              border: "2px solid",
              backgroundColor: "#1f1f21",
              width: "100%",
              height: "100%",
            },
          },
        },
        MuiPickersDay: {
          styleOverrides: {
            root: {
              color: "#f0f8ff",
              borderRadius: 2,
              borderWidth: 0,
              borderColor: "#2d3135",
              border: "0px solid",
              backgroundColor: "#35383d",
              fontSize: "2rem",
            },
          },
        },
        MuiDayCalendar: {
          styleOverrides: {
            weekDayLabel: {
              color: "#f0f8ff",
              borderRadius: 2,
              borderWidth: 0,
              borderColor: "#373a3e",
              border: "0px solid",
              backgroundColor: "#343437",
              fontSize: "1.2rem",
            },
          },
        },
        MuiPickersCalendarHeader: {
          styleOverrides: {
            label: {
              color: "#f0f8ff",
              fontSize: "2rem",
            },
          },
        },
        MuiDateTextField: {
          styleOverrides: {
            root: {
              '& input[type="text"]': {
                color: "#f0f8ff",
              },
            },
          },
        },
        MuiInputLabel: {
          styleOverrides: {
            root: {
              color: "#f0f8ff",
            },
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              margin: "1rem 2rem",
              width: "22rem",
              color: "#f0f8ff",
              fontSize: "1.3rem",
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              "& fieldset": {
                border: "2px solid #f0f8ff",
              },
            },
          },
        },
      },
    });

  return (
    <ThemeProvider theme={inputTheme}>
      <DatePicker
        maxDate={dayjs(new Date())}
        onChange={handleChange}
        format="DD/MM/YYYY"
        value={value ? dayjs(value) : ''}
      />
    </ThemeProvider>
  );
}

export default DateInput;
