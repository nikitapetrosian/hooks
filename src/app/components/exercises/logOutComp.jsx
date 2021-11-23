import React from "react";
import CardWrapper from "../common/Card";
import PropTypes from "prop-types";

const LogOutComp = (props) => {
    return (
        <CardWrapper>
            <button onClick={props.onLogOut}>выйти</button>
        </CardWrapper>
    );
};
LogOutComp.propTypes = {
    onLogOut: PropTypes.func
};
export default LogOutComp;
