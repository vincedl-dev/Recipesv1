import { Typography,Container, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRecipeDetails } from '../../store/recipe/action'
import Spinner from '../layout/Spinner'


export default function RecipeDetails() {
  const recipe = useSelector(state => state.recipe.recipedetails)
  const apiLoading = useSelector(state => state.recipe.isApiLoading)
  const dispatch = useDispatch()
  const {id} = useParams()

 


  useEffect(() => {
    dispatch(getRecipeDetails(id))
  },[])
  

  return (
    <Container sx={{mt:5}}>
        {
               recipe.length !== 0? 
                (
              
                  
                  <Box>
                  <Typography variant="h3" sx={{mb:2,textTransform:"capitalize"}}>{recipe.title}</Typography>
                  <Typography variant="h6" sx={{mb:1}}><b>Author</b>: {recipe.username}</Typography>
                  <Typography variant="p"><b>Description:</b> {recipe.body}</Typography>
                    
                  </Box>
                ) : (
                    
                        apiLoading ?  
                        (<Spinner /> ): (<Typography variant="h3">No Recipe Founds</Typography>)
                    
                )
            }

    </Container>
  )
}
