import { Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment, useEffect } from "react";
import * as yup from "yup";
import CustomTextfield from "../../customInputs/customTextfield";
import CustomAutocomplete from "../../customInputs/customAutocomplete";

const Business = ({ nextStep, setPostData, postData }) => {
  const { company, country, operations, taxNo, regNo, desc } =
    postData.businessDetails;
  const validationSchema = yup.object({
    companyName: yup.string().required("This field is required"),
    country: yup.object().required(),
    operations: yup.object().required(),
    taxNo: yup.string().required("This field is required"),
    regNo: yup.string().required("This field is required"),
    desc: yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues: {
      companyName: "",
      country: null,
      operations: null,
      taxNo: "",
      regNo: "",
      desc: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleNext,
  });

  function handleNext() {
    nextStep("1");
    setPostData((prev) => ({
      ...prev,
      businessDetails: {
        company: formik.values.companyName,
        country: formik.values.country,
        desc: formik.values.desc,
        operations: formik.values.operations,
        regNo: formik.values.regNo,
        taxNo: formik.values.taxNo,
      },
    }));
  }
  function handleBack() {
    nextStep("0");
  }
  const dummyData = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  useEffect(() => {
    if (company !== "") {
      formik.setValues({
        companyName: company,
        country: country,
        operations: operations,
        desc: desc,
        regNo: regNo,
        taxNo: taxNo,
      });
    }
  }, []);
  console.log(formik.touched.companyName, formik.errors.companyName);
  return (
    <Fragment>
      <Typography variant="h6">Business Details</Typography>
      <Grid>
        <CustomTextfield
          formik={formik}
          id="companyName"
          placeholder="Company Legal Name"
        />
        <CustomAutocomplete
          data={dummyData}
          formik={formik}
          id="country"
          placeholder="Country of Incorpartion"
        />
        <CustomAutocomplete
          data={dummyData}
          formik={formik}
          id="operations"
          placeholder="Country(s) of Operation"
        />
        <CustomTextfield
          formik={formik}
          id="taxNo"
          placeholder="Tax Identification Number"
        />
        <CustomTextfield
          formik={formik}
          id="regNo"
          placeholder="Entity Register Number"
        />
        <CustomTextfield
          formik={formik}
          id="desc"
          placeholder="Company Description"
        />
      </Grid>
      <Grid className="flex justify-between mt-4">
        <Button variant="outlined" onClick={handleBack} disabled>
          Back
        </Button>
        <Button variant="contained" onClick={formik.handleSubmit}>
          Next
        </Button>
      </Grid>
    </Fragment>
  );
};

export default Business;
