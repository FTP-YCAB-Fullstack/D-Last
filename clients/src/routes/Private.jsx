import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const Private = props => {
    const token = localStorage.getItem('token');

    return (
        token ? <Route exact path={props.path} component={props.component} /> : <Redirect to="/login"/> 
    )
}

export default Private