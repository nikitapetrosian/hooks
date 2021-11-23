import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>Нет ничего в localStorage</SmallTitle>}
        </>
    );
};

export default withLogin;
