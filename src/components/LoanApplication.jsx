import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { steps } from "../utils/constant";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import DocumentDetails from "./DocumentDetails";
import LogoutBtn from "./LogoutBtn";

const LoanApplication = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [formData, setFormData] = useState({
    personalDetails: {},
    contactDetails: {},
    documentDetails: {},
  });

  useEffect(() => {
    const savedFormData = JSON.parse(
      localStorage.getItem("loanApplicationData")
    );
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === steps.length - 1) {
      saveFormDataToLocalStorage();
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      personalDetails: {},
      contactDetails: {},
      documentDetails: {},
    });
  };

  const saveFormDataToLocalStorage = () => {
    const currentData =
      JSON.parse(localStorage.getItem("loanApplicationData")) || [];
    currentData.push(formData);
    localStorage.setItem("loanApplicationData", JSON.stringify(currentData));
    alert("Data saved to local storage!");
  };

  return (
    <div className="flex gap-1">
      <Sidebar />
      <div className="flex flex-col w-full p-5">
        <LogoutBtn />
        <div className="w-full bg-[#fff] h-[88vh] rounded-md my-2 p-5 pl-6">
          <div className="text-[3.5rem] text-center font-semibold text-[#474747]">
            Loan Application
          </div>

          <div className="text-[3.5rem] text-center font-semibold text-[#474747] mt-9 max-w-[60rem] mx-auto">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography sx={{ mt: 6, mb: 1 }}>
                    Your loan application has been completed
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <button
                      className="text-[1.6rem] bg-[#0d6efd] text-[#fff] rounded-md px-5 py-2"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      pt: 2,
                    }}
                  >
                    {activeStep === 0 && (
                      <PersonalDetails
                        formData={formData}
                        setFormData={setFormData}
                      />
                    )}
                    {activeStep === 1 && (
                      <ContactDetails
                        formData={formData}
                        setFormData={setFormData}
                      />
                    )}
                    {activeStep === 2 && (
                      <DocumentDetails
                        formData={formData}
                        setFormData={setFormData}
                      />
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        pt: 2,
                        mt: 2,
                      }}
                    >
                      <button
                        className="text-[1.6rem] bg-[#eee] rounded-md px-5 py-2"
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                      >
                        Back
                      </button>

                      <button
                        className="text-[1.6rem] ml-9 bg-[#0d6efd] text-[#fff] rounded-md px-5 py-2"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                      </button>
                    </Box>
                  </div>
                </React.Fragment>
              )}
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;
