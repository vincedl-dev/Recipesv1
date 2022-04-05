import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import recipeReducer from "./recipe/reducer"

const rootReducer = combineReducers({
   user:userReducer,
   recipe:recipeReducer
 
    
})

export default rootReducer