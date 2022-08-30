import React, { useState } from "react";
import "./Feedback.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import feedbacklogo from "./hoi.png";
import { InputLabel } from "@material-ui/core";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#f4511e",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function Feedback() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);
  return (
    <>
      <div className="feedback">
        <h1 className="feedbackTitle">Your Feedback</h1>
        <div className="feedbackFormContainer">
          <form className="feedbackForm">
            <ThemeProvider theme={theme}>
              <TextField
                id="fullname"
                label="Full Name"
                variant="outlined"
                placeholder="John Smith"
                margin="normal"
                name="fullname"
                className="textField"
              />
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="johnsmith099@gmail.com"
                className="textField"
                margin="normal"
                name="emailAddress"
              />
              <TextField
                id="reg-number"
                label="Registraion Number"
                variant="outlined"
                placeholder="209301999"
                className="textField"
                margin="normal"
                name="regNumber"
              />
              <TextField
                id="phone-number"
                label="Phone Number"
                variant="outlined"
                placeholder="+1 123 456 789"
                className="textField"
                margin="normal"
                name="phoneNumber"
              />
              {/* <div className="">
            <Typography component="legend">Read only</Typography>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
            </div> */}
              <div className="sectionFeedback">
                <TextField
                  id="message"
                  label="Message"
                  variant="outlined"
                  placeholder="Please Give your feedback"
                  className="textContainer"
                  margin="normal"
                  name="message"
                />
                <button className="buttonfeedback">Submit</button>
              </div>
            </ThemeProvider>
          </form>
          <img src={feedbacklogo} alt="" className="feedbackimage" />
        </div>
      </div>
    </>
  );
}

export default Feedback;
