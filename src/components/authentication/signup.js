import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import '../../css/login.css'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import logo from '../../images/logo.png'
import { useNavigate } from "react-router-dom";
import { DropDownFirst, signupData, Subjects } from '../constants/constants';
import { useState } from 'react';
import { signupAPI } from '../../methods/AuthenticationMethods';
import { useSelector } from 'react-redux';





function Signup() {
    const navigate = useNavigate();
    const [check, setCheck] = useState(false)
    const [err, setError] = useState("");


    const signUp = (response) => {
        console.log(signupData)
        if (response.error) {
            setError("Email Already Exists")
        }
        else if (response.success) {
            navigate("/")
        }

        else {
            if (signupData.email && signupData.password && signupData.usertype) {
                if (signupData.usertype == "Student") {
                    delete signupData.course
                    signupAPI(signupData, signUp)
                }
                else if (signupData.course) {
                    signupAPI(signupData, signUp)

                }
                else {
                    setError("Please Fill The Data")
                }
            }
            else {
                setError("Please Fill The Data")
            }

        }
    }

    const userType = (e) => {
        signupData.usertype = e.target.value
        if (e.target.value == "Teacher") {
            setCheck(true)
        }
        else {
            setCheck(false)
        }
    }

    return (
        <div className='Background'>
            <div className='img-div'>
                <img src={logo} alt='logo' className='img-logo' />
            </div>
            <div className='MainLoginDivSignup'>
                <div className='TextBox-Component'>
                    <TextBoxComponent placeholder="Email" floatLabelType="Auto" change={(e) => { signupData.email = e.value }} />
                    <TextBoxComponent placeholder="Password" floatLabelType="Auto" change={(e) => { signupData.password = e.value }} />
                    <TextBoxComponent placeholder="Confirm Password" floatLabelType="Auto" change={(e) => { signupData.password != e.value ? setError("Password Not Matched") : setError("") }} />
                </div>
                <div className='DropDown-Component'>
                    <DropDownListComponent id="ddlelement" dataSource={DropDownFirst} placeholder="Select A Value"
                        onChange={(e) => userType(e)} />
                </div>
                {check ? (
                    <div className='DropDown-Component'>
                        <DropDownListComponent id="ddlelement" dataSource={Subjects} onChange={(e) => signupData.course = e.target.value} placeholder="Select Subject" />
                    </div>
                ) : null}
                <div className='Button-Component'>
                    <ButtonComponent cssClass='e-primary' onClick={() => signUp(true)}>Signup</ButtonComponent>
                </div>
                <div className='Button-Component'>
                    <ButtonComponent cssClass='e-outline' onClick={() => navigate("/")}>Login</ButtonComponent>
                </div>
                <div>
                    <p>{err}</p>
                </div>
            </div>
        </div>
    )
}

export default Signup