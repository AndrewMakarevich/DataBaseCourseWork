import React, { useContext } from 'react';
import './NavBar.css';
import './AdaptiveMenuScript.js';
import {observer} from 'mobx-react-lite';
import { Context } from '..';
const NavBar = observer(()=>{
    const {user} = useContext(Context);
    if(user.isAuth){
        return (
            <div className="AppBar">
            
                <div className="mobileMenuVersion">
                <span className="firstSpan"></span>
                <span className="secondSpan"></span>
                <span className="thirdSpan"></span>
                </div>
            
                <div className="sectionsMenu">
                <button color="primary"><a href="/admin">Admin</a></button>
                <button color="primary"><a href="/login">Login</a></button>
                <button color="primary"><a href="/registration">Registration</a></button>
                <button color="primary"><a href="/flights">Flights</a></button>
                </div> 
            
            </div>  
                ) 
    }else{
        return (
            <div className="AppBar">
            
                <div className="mobileMenuVersion">
                <span className="firstSpan"></span>
                <span className="secondSpan"></span>
                <span className="thirdSpan"></span>
                </div>
            
                <div className="sectionsMenu">
                <button color="primary"><a href="/login">Login</a></button>
                <button color="primary"><a href="/registration">Registration</a></button>
                <button color="primary"><a href="/flights">Flights</a></button>
                </div> 
            
            </div>  
                ) 
    }
    
});
export default NavBar;