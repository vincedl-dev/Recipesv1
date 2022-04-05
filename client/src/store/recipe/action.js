import { ALL_RECIPES,
        UPDATE_RECIPE,
        DELETE_RECIPE,
        ADD_RECIPE,
        ERROR_ADD,
        USER_RECIPES,
        RECIPE_DETAILS, 
        API_END,SEARCH_RESULT, 
        ERROR_DETAILS, 
        ERROR_UPDATE,
        ERROR_DELETE,
        ERROR_FETCH
    } from "./types"


import axios from 'axios'


export const getAllRecipes = () => {
    return  (dispatch) => {
        axios.get('http://localhost:5000/recipe/all-recipes',{withCredentials:true})
        .then(res => dispatch({type:ALL_RECIPES,payload:res.data}))
        .catch(err => dispatch({type:ERROR_FETCH,payload:err.response.data}))
      
    }
}

export const updateRecipe = (id,title,body) => {
    return (dispatch) => {
        axios.put(`http://localhost:5000/recipe/${id}`,{title,body},{withCredentials:true})
            .then(res => dispatch({type:UPDATE_RECIPE,payload:res.data}))
            .catch(err => dispatch({type:ERROR_UPDATE,payload:err.response.data}))
            .finally(dispatch({type:API_END,payload:{}}))
    }
}

export const del_Recipe = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:5000/recipe/${id}`,{withCredentials:true})
            .then(res => dispatch({type:DELETE_RECIPE,payload:res.data}))
            .catch(err => dispatch({type:ERROR_DELETE,payload:err.response.data}))
            .finally(dispatch({type:API_END,payload:{}}))
    }
}

export const add_Recipe = (title,body) => {

    return (dispatch) => {
        axios.post(`http://localhost:5000/recipe/new-recipe`,{title,body},{withCredentials:true})
            .then(res => dispatch({type:ADD_RECIPE,payload:res.data}))
            .catch(err => dispatch({type:ERROR_ADD,payload:err.response.data}))
            .finally(dispatch({type:API_END,payload:{}}))
    }
}


export const getUserRecipes = () => {
    return  (dispatch) => {
        axios.get('http://localhost:5000/recipe/user',{withCredentials:true})
        .then(res => dispatch({type:USER_RECIPES,payload:res.data}))
        .catch(err => dispatch({type:ERROR_FETCH,payload:err.response.data}))
    
    }
}

export const getRecipeDetails = (id) => {
    return  (dispatch) => {
        axios.get(`http://localhost:5000/recipe/${id}`,{withCredentials:true})
        .then(res => dispatch({type:RECIPE_DETAILS,payload:res.data}))
        .catch(err => dispatch({type:ERROR_DETAILS,payload:err.response.data}))
        .finally(dispatch({type:API_END,payload:{}}))
    }
}

export const search_recipe = (title) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/recipe/search?title=${title}`,{withCredentials:true})
        .then(res =>  dispatch({type:SEARCH_RESULT,payload:res.data}))
        .catch(err => console.log(err))
        .finally(dispatch({type:API_END,payload:{}}))
    }
}


