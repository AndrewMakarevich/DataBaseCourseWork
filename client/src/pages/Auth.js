import React from 'react';
import './Auth.css';
import {NavLink, useLocation} from 'react-router-dom';
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from '../utils/consts';


const Auth = ()=>{
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return(
        <div className="AuthBlock">
            {isLogin ?
                <div className="HeaderBlock"> АВТОРИЗАЦИЯ</div>
                :
                <div className="HeaderBlock"> РЕГИСТРАЦИЯ</div>
            }
            <div className="DataBlock">

                <input id="email" type="email" required/>
                <label className="emailLabel" for="email">Your email</label>
                <div className="spanLineFirst"><span className="line"></span></div>
                

                <input id="password" type="password" required/>
                <label className="passwordLabel" for="password" >Your password</label>
                <div className="spanLineSecond"><span className="line"></span></div>
            </div>
            {isLogin ? 
                <div className="AcceptBlock">
                    <button>Login</button>
                </div>
                :
                <div className="AcceptBlock">
                    <button>Register</button>
                </div>

            }
            {isLogin ?
                <div className="LinkBlock">Нету аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></div>  
                :
                <div className="LinkBlock">Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>  
            }
            
           
        </div>
    )
}

export default Auth;