import axios from 'axios';



export const signupAPI = (data, signUp) => {
    axios.post("http://localhost:4000/app/authentication/signup", data)
        .then(response => {
            if(!response.data.success){
                signUp({error:true})
            }
            else{
                signUp({success:response.data.success})
            }

            console.log(response.data)

        }).catch(e=>{
            console.log(e)
        })

}

export const loginAPI = (data, loginClick) => {
    axios.post("http://localhost:4000/app/authentication/login", data)
        .then(response => {
            if(!response.data.success){
                loginClick(false)
            }
            else if(response.data.success){
                loginClick(response.data.data._id)
            }

        }).catch(e=>{
            console.log(e)
        })

}