import React,{useState} from 'react'

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {

 const [search,setSearch] = useState('')
 const navigate = useNavigate()
 const handleSubmit = (e) => {
     e.preventDefault()
   if(search !== ''){
        navigate(`/recipe/search/${search}`)
        setSearch('')
       
   }
 
 }
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextField 
    onChange = {(e) => setSearch(e.target.value)}
      type="search"
      variant="outlined"
      margin="normal"
      value={search}
      placeholder="Search for Recipe"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  </Box>
  )
}
