import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

export default function DetailsButton({_id}) {
    
  return (
    <IconButton  href={`/recipe/${_id}`} >
      <VisibilityIcon/>
    </IconButton>
  )
}
