import { loginSuccess } from "../constants/constants";

export const loginSuccessAction=(data)=>{
    return{
        type:loginSuccess,
        data:data
    }
}