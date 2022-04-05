import { Box } from '@mui/material'
import React,{useState} from 'react'


import { makeStyles } from '@mui/styles';
import {PuffLoader} from "react-spinners";


const useStyles = makeStyles({
    root:{
      margin:"100px auto 0px",
      textAlign:'center!important',
    }
   
   });



export default function Spinner() {
    const [colors,setColor] = ('#1976d2')
    const classes = useStyles()
  return (
      <Box className={classes.root}>
           <PuffLoader  size={100} />
      </Box>
   
  )
}
