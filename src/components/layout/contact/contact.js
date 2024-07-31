import { Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { Fragment, useState } from 'react'
import * as yup from "yup"
import CustomTextfield from '../../customInputs/customTextfield'
import CustomAutocomplete from '../../customInputs/customAutocomplete'

const Contact = ({nextStep, setPostData}) => {
    const validationSchema = yup.object({
        email: yup.string().required('This field is required'),
        mobile: yup.string().required('This field is required'),
        code : yup.string().required('This field is required'),
        add1:yup.string().required('This field is required'),
        add2: yup.string().required('This field is required'),
        countrty: yup.object().required(),
        state:yup.object().required(),
        city: yup.object().required(),
        postalCode:yup.string().required('This field is required'),
    })

    const formik = useFormik({
        initialValues:{
            add1:"",
            add2:"",
            country: null,
            state: null,
            city: null,
            postalCode:"",
            email:"",
            code:"",
            mobile:"",
        },
        validationSchema: validationSchema,
        onSubmit: handleNext,       
    })
    
    function handleNext(){
nextStep('2')

    }
    function handleBack(){
        nextStep('0')
    }
    const dummyData=[
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
    ]
  return (
    <Fragment >
    <Typography variant='h6'>Contact Details</Typography>
    <Grid >
        <Typography fontWeight={600}>Registered Address</Typography>
    <CustomTextfield formik={formik} id="add1" placeholder="Address Line 1"/>
    <CustomTextfield formik={formik} id="add2" placeholder="Address Line 2"/>
    <CustomAutocomplete data={dummyData} formik={formik} id="country" placeholder="Country Region" />
    <CustomAutocomplete data={dummyData} formik={formik} id="state" placeholder="State Province" />
    <CustomAutocomplete data={dummyData} formik={formik} id="city" placeholder="City" />
    <CustomTextfield formik={formik} id="postalCode" placeholder="Postal Code"/>
    <Typography fontWeight={600}>Contact Details</Typography>
    <CustomTextfield formik={formik} id="email" placeholder="Company Contact Email"/>
    <CustomTextfield formik={formik} id="code" placeholder="Code"/>
    <CustomTextfield formik={formik} id="mobile" placeholder="Company Contact Phone Number"/>
    {/* <FormControlLabel control={<Checkbox />} label="Store Name as same as Company Name"/>
    <FormControlLabel control={<Checkbox />} label="Store Description as same as Company Description"/>
    <FormControlLabel control={<Checkbox />} label="Store Address as same as Business Address"/> */}
    </Grid>
    <Grid  className='flex justify-between mt-4'>
        <Button variant='outlined' onClick={handleBack}>Back</Button>
        <Button variant='contained' onClick={formik.handleSubmit}>Next</Button>
    </Grid>
  </Fragment>
  )
}

export default Contact