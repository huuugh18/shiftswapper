import React from 'react'
import { connect }          from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core'
import SignedInToolbar from './SignedInLinks'
import SignedOutToolbar from './SignedOutLinks'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
}));


const AppBarMain = ({authenticated, auth}) => {
    const classes= useStyles()
    return <div className={classes.root}>
            <AppBar position="static">
                { authenticated ? <SignedInToolbar /> : <SignedOutToolbar /> }
            </AppBar>
    </div>
}
const mapState = (state) => {
    const authenticated = state.auth.user_auth
    const auth = state.firebase.auth
    return {authenticated,auth}
}

export default connect(mapState)(AppBarMain)