import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const Private = props => {
    const auth = localStorage.getItem('auth');

    return (
        auth ? <Route exact path={props.path} component={props.component} /> : <Redirect to="/login"/> 
    )
}

export default Private