import React from "react";
import StepForm from "./StepForm";
import "./MultiStep.scss";
import { CssBaseline, Container, Paper, Box } from "@mui/material";

function MultiStep() {
  return (
    <>
      <div className="multistep">
        <div className="container">
          <Container component={Box} p={10}>
            <Paper component={Box} p={15}>
              <StepForm />
            </Paper>
          </Container>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default MultiStep;
