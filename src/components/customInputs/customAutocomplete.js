import { Autocomplete, Grid, TextField } from '@mui/material'
import React, { memo } from 'react'

const CustomAutocomplete = ({formik, placeholder,id, data,}) => {
  
  return (
  <Grid className='m-1'>
    <Autocomplete 
    id={id}
    value={formik.values[id]}
    fullWidth
    onChange={(e,value)=> formik.setFieldValue(id, value)}
    options={data}
    getOptionLabel={options=> options.label}
    isOptionEqualToValue={(option, value)=> option.label=== value.label}
    renderInput={(params) => <TextField {...params} placeholder={placeholder}
    fullWidth
    size='small'
    error={formik.touched[id] && Boolean(formik.errors[id])}
    helperText={formik.touched[id] && formik.errors[id]}
    />}
    />
  </Grid>
  )
}

export default memo(CustomAutocomplete)