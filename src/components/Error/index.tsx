import React from 'react'
import Typography from '@mui/material/Typography';

interface IError {
  text: string
}

const Error: React.FC<IError> = ({ text }) => {
  return (
    <Typography gutterBottom color={"red"} variant="h5" component="div">
      {text}
    </Typography>
  )
}

export default Error;