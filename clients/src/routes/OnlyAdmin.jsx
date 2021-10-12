import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const OnlyAdmin = props => {
    const authAs = localStorage.getItem('authAs');

    return (
        authAs === "admin" ? <Route exact path={props.path} component={props.component}/> : <Redirect to="/"/>
    )
}

export default OnlyAdmin