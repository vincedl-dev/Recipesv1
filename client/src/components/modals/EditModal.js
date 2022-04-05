import React,{useState} from 'react'

import {Dialog,
    DialogTitle,
    DialogContent,

    TextField,
    Box,
    Button} from '@mui/material'

    import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import { updateRecipe } from '../../store/recipe/action';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function EditModal({_id,title,body}) {
    
    const dispatch = useDispatch()
    const [editDialog,setEditDialog] = useState(false)

    // const [editId,setEditId] = useState(_id)
    const [editTitle,setEditTitle] = useState(title)
    const [editBody,setEditBody] = useState(body)

    
  const EditOpen = () =>{
    setEditDialog(true)
 }
  const EditClose = () => {
    setEditDialog(false)
    formik.resetForm()
    
  }
// const UpdateRecipe = () => {
//     dispatch(updateRecipe(editId,editTitle,editBody))
//     setEditDialog(false)
// }

const formik = useFormik({
  initialValues: {
   title: editTitle,
    body: editBody,
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
   
    dispatch(updateRecipe(
      
        _id,
        formik.values.title,
        formik.values.body));
      setEditDialog(false);


  }
});
  
  return (
    <>
          <IconButton  aria-label="add to favorites" onClick={EditOpen} >
                    <EditIcon/>
            </IconButton>
        <Dialog open={editDialog} onClose={EditClose}>
        <DialogTitle>Update a Recipe</DialogTitle>
        <DialogContent  >
        {/* <Box component="form" >
        <TextField
            onChange = {e => setEditTitle(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="title"
            type="text"
            value={editTitle}
            fullWidth
            variant="outlined"
            
          />
            <TextField
  onChange = {e => setEditBody(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="description"
            type="text"
            value={editBody}
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
              Update Recipe
            </Button>
       
          </Box>
         
        </DialogContent>

      </Dialog> 
      
    
    
    </>
  )
}
