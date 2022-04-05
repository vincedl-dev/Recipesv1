import React,{useState} from 'react'
import {Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button} from '@mui/material'
import { del_Recipe } from '../../store/recipe/action'
import { useDispatch } from 'react-redux'

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function DeleteModal({_id}) {
  
  const dispatch = useDispatch()
  const [deleteDialog,setDeleteDialog] = useState(false)
  const deleteDialogOpen = () =>{
    setDeleteDialog(true)
  }
  const deleteDialogClose = () =>{
    setDeleteDialog(false)
  }
  const deleteRecipe = () =>{
    dispatch(del_Recipe(_id))
    setDeleteDialog(false)
  }

  return (
    <>   <IconButton aria-label="delete" onClick={deleteDialogOpen}>
      <DeleteIcon />
    </IconButton>
    <Dialog open={deleteDialog} onClose={deleteDialogClose}>
    <DialogTitle> Delete Recipe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to delete this recipe?
      </DialogContentText>
  
    </DialogContent>
    <DialogActions>
    <Button onClick={() => deleteRecipe()}>Yes</Button>
      <Button onClick={deleteDialogClose}>No</Button>
      
    </DialogActions>
  </Dialog>
  </>
 
  )
}
