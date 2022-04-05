import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import {Container,Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { getAllRecipes,} from '../../store/recipe/action';
import Cards from '../layout/Cards';
import SearchBar from '../layout/SearchBar';
import Spinner from '../layout/Spinner';
export default function Recipes() {
  const recipes = useSelector(state => state.recipe.recipes)
  const apiLoading = useSelector(state => state.recipe.isApiLoading)
  const [buttonSet,setButtonSet] = useState(false)
  const dispatch = useDispatch()
 

  useEffect(() => {
    
    dispatch(getAllRecipes())
  
  }, [apiLoading])

 

  return (
    <Container> 
      <SearchBar/>

      
     <Box>
            {
                recipes.length ? 
                (
                    <Grid container spacing={2}>
                        {
                        recipes.map(recipe => 
                            
                                <Cards  recipe={recipe} key={recipe._id} buttonSetter={buttonSet}/>
                        )
                        }
                        </Grid>

                ) : (
                    
                        apiLoading ?  
                        (<Spinner /> ): (<Typography variant="h3" sx={{mt:2}}>No Recipe Founds</Typography>)
                    
                )
            }

      </Box> 


  </Container>
  )
}