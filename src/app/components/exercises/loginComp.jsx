import React from "react";
import CardWrapper from "../common/Card";
import SmallTitle from "../common/typografy/smallTitle";
import PropTypes from "prop-types";

const LoginComp = (props) => {
    return (
        <CardWrapper>
            <SmallTitle>Авторизуйтесь</SmallTitle>
            <button onClick={props.onLogin}>войти</button>
        </CardWrapper>
    );
};
LoginComp.propTypes = {
    onLogin: PropTypes.func
};
export default LoginComp;
