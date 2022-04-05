import React,{useState} from 'react'
import {Dialog,
    DialogTitle,
    DialogContent,
  
    TextField,
    Box,
    Button} from '@mui/material'
import { add_Recipe } from '../../store/recipe/action'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddModal() {

    const [addOpen,setAddOpen] = useState(false)



    // const [addtitle,setAddtitle] = useState('')
    // const [addbody,setAddbody] = useState('')
    const dispatch =useDispatch()
    
  const addhandleClickOpen = () => {
    setAddOpen(true);
  };

  const addhandleClose = () => {
    setAddOpen(false);
  };

  // const addnewRecipe = () => {
  
  
  //   dispatch(add_Recipe(addtitle,addbody))
  //   setAddOpen(false);
    
  // }

  const formik = useFormik({
    initialValues: {
     title: '',
      body: '',
    },
    validationSchema: Yup.object({

      title: Yup
        .string()
        .max(255)
        .required(
          'Title is required'),
  
      body: Yup
        .string()
        .max(1000)
        .required(
          'Description is required'),
    
    }),

    onSubmit: () => {
     
      dispatch(add_Recipe(
        
     
          formik.values.title,
          formik.values.body
         
        
        ));
        setAddOpen(false);
      formik.resetForm()

    }
  });
    
  return (
      <>
      <Button onClick={addhandleClickOpen}  variant="contained"  >Add Recipe</Button>
  <Dialog open={addOpen} onClose={addhandleClose}>
        <DialogTitle>Add new recipe</DialogTitle>
        <DialogContent  >
        {/* <Box component="form" >
        <TextField
            onChange = {e => setAddtitle(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="title"
            type="text"
            fullWidth
            variant="outlined"
            
          />
            <TextField
  onChange = {e => setAddbody(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="description"
            type="text"
            fullWidth
            variant="outlined"
          />

        </Box> */}

  <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={Boolean(formik.touched.title && formik.errors.title)}
              fullWidth
              helperText={formik.touched.title && formik.errors.title}
              label="Title"
              margin="normal"
              name="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
              variant="outlined"
              
            />
            <TextField
              error={Boolean(formik.touched.body && formik.errors.body)}
              fullWidth
              helperText={formik.touched.body && formik.errors.body}
              label="Description"
              margin="normal"
              name="body"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.body}
              variant="outlined"
            />
        
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add recipe
            </Button>
       
          </Box>
         
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={addnewRecipe}>Add</Button>
          <Button onClick={addhandleClose}>Close</Button>
        </DialogActions> */}
      </Dialog> 
      </>
  )
}
