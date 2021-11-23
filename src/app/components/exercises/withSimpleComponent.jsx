import React, { useState } from "react";
import LoginComp from "./loginComp";
import LogOutComp from "./logOutComp";

const withSimpleComponent = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("user"));
    const onLogin = () => {
        localStorage.setItem("user", "user");
        setIsAuth(true);
    };
    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };
    return (
        <>
            {isAuth ? <><Component {...props} /> <LogOutComp onLogOut={onLogOut} /></> : <LoginComp onLogin={onLogin} />

            }

        </>
    );
};

export default withSimpleComponent;
