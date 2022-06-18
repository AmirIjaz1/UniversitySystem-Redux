import axios from 'axios';

export const signupAPI = (data, signUp) => {
    debugger
    axios.post("http://localhost:4000/app/authentication/signup", data)
        .then(response => {
            debugger
            if(!response.data.success){
                signUp(false)
            }
            console.log(response.data)

        }).catch(e=>{
            debugger
            console.log(e)
        })

}

export const loginAPI = (data, loginClick) => {
    debugger
    axios.post("http://localhost:4000/app/authentication/login", data)
        .then(response => {
            debugger
            if(!response.data.success){
                loginClick(false)
            }
            else if(response.data.success){
                loginClick(response.data.data)
            }

        }).catch(e=>{
            debugger
            console.log(e)
        })

}