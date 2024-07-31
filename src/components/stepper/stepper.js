import { Box, Step, StepLabel, Stepper } from '@mui/material'
import React, { memo } from 'react'

const StepperFile = ({activeStep}) => {
    const steps = [
        'Business Details',
        'Contact Details',
        'Document Details',
      ];
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={Number(activeStep)} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default memo(StepperFile)