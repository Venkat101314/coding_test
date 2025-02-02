import { Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { Fragment, useEffect, useState } from 'react'
import * as yup from "yup"
import CustomTextfield from '../../customInputs/customTextfield'
import CustomAutocomplete from '../../customInputs/customAutocomplete'

const Documents = ({nextStep,postData, setPostData}) => {
    const {storeName, storeDesc,storeAdd1,storeAdd2,storeCountry, storeState, storeCity, storePostalCode } = postData.documentDetails
    const [logo, setLogo] = useState(null)
    const validationSchema = yup.object({
        storeName: yup.string().required('This field is required'),
        storeDesc : yup.string().required('This field is required'),
        add1:yup.string().required('This field is required'),
        add2: yup.string().required('This field is required'),
        country: yup.object().required(),
        state:yup.object().required(),
        city: yup.object().required(),
        postalCode:yup.string().required('This field is required'),
    })

    const formik = useFormik({
        initialValues:{
            storeName:"",
            country: null,
            state: null,
            city: null,
            storeDesc:"",
            add1:"",
            add2:"",
            postalCode:"",
        },
        validationSchema: validationSchema,
        onSubmit: handleNext,       
    })
    
console.log('first', formik.errors)
    function handleNext(){
// nextStep('2')
setPostData(prev=>({...prev, documentDetails:{
    storeAdd1: formik.values.add1,
    storeAdd2: formik.values.add2,
    storeCity: formik.values.city,
    storeCountry: formik.values.country,
    storeDesc: formik.values.storeDesc,
    storeName: formik.values.storeName,
    storePostalCode: formik.values.postalCode,
    storeState: formik.values.state
}}))
nextStep('3')
    }
    function handleBack(){
        nextStep('1')
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

    useEffect(()=>{
        if(storeDesc!==""){
formik.setValues({
    add1:storeAdd1,
    add2: storeAdd2,
    city: storeCity,
    country: storeCountry,
    postalCode: storePostalCode,
    state : storeState,
    storeDesc: storeDesc,
    storeName : storeName
})
        }
       
    },[])
  return (
    <Fragment >
    <Typography variant='h6'>Document Details</Typography>
    <Grid >
    <input type='file' accept='image'/>
    <CustomTextfield formik={formik} id="storeName" placeholder="Store Name"/>
    <FormControlLabel control={<Checkbox />} label="Store Name as same as Company Name"/>
    <CustomTextfield formik={formik} id="storeDesc" placeholder="Store Description"/>
    <FormControlLabel control={<Checkbox />} label="Store Description as same as Company Description"/>
    <FormControlLabel control={<Checkbox />} label="Store Address as same as Business Address"/>
    <CustomTextfield formik={formik} id="add1" placeholder="Address Line 1"/>
    <CustomTextfield formik={formik} id="add2" placeholder="Address Line 2"/>
    <CustomAutocomplete data={dummyData} formik={formik} id="country" placeholder="Country Region" />
    <CustomAutocomplete data={dummyData} formik={formik} id="state" placeholder="State Province" />
    <CustomAutocomplete data={dummyData} formik={formik} id="city" placeholder="City" />
    <CustomTextfield formik={formik} id="postalCode" placeholder="Postal Code"/>
    </Grid>
    <Grid  className='flex justify-between mt-4'>
        <Button variant='outlined' onClick={handleBack}>Back</Button>
        <Button variant='contained' onClick={formik.handleSubmit}>Next</Button>
    </Grid>
  </Fragment>
  )
}

export default Documents