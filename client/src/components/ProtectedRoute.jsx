import React from "react";
import {Navigate} from "react-router-dom";

const isAuthenticated = () => {
    return sessionStorage.getItem("token") !== null;
}

export default function ProtectedComponent({children}){
    return isAuthenticated()    ?   children    :   <Navigate to="/" replace/>;
}
