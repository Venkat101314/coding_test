import React, { Fragment, useState } from "react";
import StepperFile from "../stepper/stepper";
import Business from "./business/business";
import Contact from "./contact/contact";
import Documents from "./documents/documents";
import { Grid } from "@mui/material";

const Home = () => {
  const [activeStep, setActiveStep] = useState('0');
  const [postData, setPostData] = useState({
   businessDetails:{
    company:"",
    country: null,
    operations: null,
    taxNo:"",
    regNo:"",
    desc:"",
   },

contactDetails:{
    contactAdd1:"",
    contactAdd2:"",
    contactCountry: null,
    contactState: null,
    contactCity:null,
    postalCode:"",
    contactEmail:"",
    contactCode:"",
},
    storeName:"",
    storeDesc:"",
    storeAdd1:"",
    storeAdd2:"",
    storeCountry: null,
    storeState: null,
    storeCity:null,
    storePostalCode:"",
  })
  return (
   <Grid className="w-full flex justify-center pt-8" sx={{maxWidth:'60%', flexDirection:"column", margin:'0 auto', }}>
      <StepperFile activeStep={activeStep}/>
     <Grid className="bg-white p-3 m-3">
     {activeStep === '0' ? (
        <Business nextStep={setActiveStep} setPostData={setPostData}/>
      ) : activeStep === '1' ? (
        <Contact nextStep={setActiveStep} setPostData={setPostData}/>
      ) : (
        <Documents nextStep={setActiveStep} postData={postData} setPostData={setPostData}/>
      )}
     </Grid>
   </Grid>
  );
};

export default Home;
