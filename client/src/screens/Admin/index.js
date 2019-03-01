import React from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCretors from './../../redux/actions'

const Admin = (props) => {
    if (!props.auth.isAuth) {
        return <Redirect to='/login' />
    }

    if (props.auth.isAuth && props.auth.user.role !== 'admin') {
        return <Redirect to='/user' />
    }

    return (
        <div>
            <div>
                <Link to='/admin'>Home</Link>
                <Link to='/admin/users'>Users</Link>
                <Link to='/login' onClick={() => props.signup()}>Logout</Link>
            </div>
            <div>
                <Switch>
                    <Route path={`${props.match.path}/users`} component={(props) => <h1>Home Admin Users</h1>} />
                    <Route path={`${props.match.path}/`} component={(props) => <h1>Home Admin</h1>} />
                </Switch>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signup: () => dispatch(ActionCretors.destroyAuthRequest())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin)