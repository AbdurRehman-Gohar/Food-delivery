import React, { useContext, useState } from 'react'
import './LoginPoupup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext'
import axios from "axios"
const LoginPoupup = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext)

    const [currState, setcurrState] = useState('login')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        let name = event.target.name
        let value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "login") {
            newUrl += "/api/users/login"
        } else {
            newUrl += "/api/users/register"
        }
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }


    return (
        <div className='LoginPoupup'>
            <form onSubmit={onLogin} className="login-poupup-contanier">
                <div className="login-poupup-tittle">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt="" />
                </div>
                <div className="login-poupup-inputs">
                    {currState === "login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currState === "sign Up" ? "Create account" : "Login"}</button>
                <div className="login-poupup-condations">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "login" ?
                    <p>create a new account?<span onClick={() => setcurrState("sign Up")}>Click here</span></p> : <p>Already have an account? <span onClick={() => setcurrState("login")}>Login here</span></p>}


            </form>

        </div>
    )
}

export default LoginPoupup 