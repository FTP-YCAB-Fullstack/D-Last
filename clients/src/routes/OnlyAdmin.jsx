import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const OnlyAdmin = props => {
    const authas = localStorage.getItem('authAs');

    return (
        authas === "admin" ? <Route exact path={props.path} component={props.component}/> : <Redirect to="/"/>
    )
}

export default OnlyAdmin