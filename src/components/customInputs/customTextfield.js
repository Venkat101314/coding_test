import { TextField } from '@mui/material'
import React, { memo } from 'react'

const  CustomTextfield = ({formik, placeholder, id}) => {
  return (
<TextField 
{...formik.getFieldProps(id)}
placeholder={placeholder}
fullWidth
size='small'
sx={{margin:1}}
error={formik.touched[id] && Boolean(formik.errors[id])}
helperText={formik.touched[id] && formik.errors[id]}
/>
  )
}

export default  memo(CustomTextfield)