import { ALL_RECIPES,
    UPDATE_RECIPE,
    DELETE_RECIPE,
    ADD_RECIPE,
    ERROR_ADD,
    USER_RECIPES,
    RECIPE_DETAILS, 
    API_END,
    SEARCH_RESULT, 
    ERROR_DETAILS, 
    ERROR_UPDATE,
    ERROR_DELETE,
    ERROR_FETCH
    } from "./types"

const initialState = {
    recipes:[],
    userRecipes:[],
    recipedetails:[],
    datatype:'',
    message:'',
    searchResult:[],
    isApiLoading:true
}

const recipeReducer = (state = initialState,action) => {
    
   
    switch(action.type){
        case ALL_RECIPES: return{
            ...state,
            recipes:action.payload,
            message:'',
            datatype:'',
            isApiLoading:false
         
        }   
        case UPDATE_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:UPDATE_RECIPE
        }

        case ERROR_UPDATE: return{
            ...state,
            message:action.payload.message,
            datatype:ERROR_UPDATE
        }



        case DELETE_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:DELETE_RECIPE
        }

        case ERROR_DELETE: return{
            ...state,
            message:action.payload.message,
            datatype:ERROR_DELETE
        }


        case ADD_RECIPE: return{
            ...state,
            message:action.payload.message,
            datatype:ADD_RECIPE
        }
        case ERROR_ADD: return{
            ...state,
            message:action.payload.message,
            datatype:ERROR_ADD
        } 
        case USER_RECIPES: return{
            ...state,
            userRecipes:action.payload,
            isApiLoading:false
        }

        case RECIPE_DETAILS: return{
            ...state,
            recipedetails:action.payload,
            isApiLoading:false
        }
        
        case ERROR_DETAILS: return{
            ...state,
            recipedetails:action.payload,
            isApiLoading:false
        }

        case SEARCH_RESULT: return{
            ...state,
            searchResult:action.payload,
            isApiLoading:false
        }
        case ERROR_FETCH:return{
            ...state,
            message:action.payload.message,
            isApiLoading:false
        }
        case API_END: return{
            ...state,
            message:'',
            datatype:'',
            isApiLoading:true
        }


        default:return state
    }
}

export default recipeReducer  