import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import '../../css/login.css'
import logo from '../../images/logo.png'
import { useNavigate } from "react-router-dom";
import { loginData } from '../constants/constants';
import { useState } from 'react';
import { loginAPI } from '../../methods/AuthenticationMethods';



function Login(props) {
    debugger
    const [error, setError] = useState("");
    const navigate = useNavigate();
    
    const loginClick=(response)=>{
        debugger
        if(response==true){
            if(loginData.email && loginData.password){
                setError("")
                loginAPI(loginData, loginClick)
            }
            else{
                setError("Please fill all information")
            }
        }
        else if(!response){
            setError("Email Or Password are wrong")
        }
        else{
            debugger
            console.log(props)
        }
    }

    return (
        <div className='Background'>
               <div className='img-div'>
                    <img src={logo} alt='logo' className='img-logo' />
                </div>
            <div className='MainLoginDiv'>
                <div className='TextBox-Component'>
                    <TextBoxComponent placeholder="Email" floatLabelType="Auto" change={(e)=>loginData.email=e.value}/>
                    <TextBoxComponent placeholder="Password" floatLabelType="Auto" change={(e)=>loginData.password=e.value}/>
                </div>
                <div className='Button-Component'>
                    <ButtonComponent cssClass='e-primary' onClick={()=>loginClick(true)}>Login</ButtonComponent>
                </div>
                <div className='Button-Component'>
                    <ButtonComponent cssClass='e-outline' onClick={() => navigate('/signup')}>Signup</ButtonComponent>
                </div>
                <div>
                    <p>{error}</p>
                </div>
            </div>
        </div>
    )
}

export default Login