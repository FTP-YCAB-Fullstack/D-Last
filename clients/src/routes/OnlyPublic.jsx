import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const OnlyPublic = props => {
    const token = localStorage.getItem('token');

    return (
        token ? <Redirect to="/"/> : <Route exact path={props.path} component={props.component} />
    )
}

export default OnlyPublic