import React from 'react'
import { connect }          from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import SignedInToolbar from './SignedInLinks'
import SignedOutToolbar from './SignedOutLinks'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    }
}));


const AppBarMain = ({authenticated}) => {
    const classes= useStyles()
    return <div className={classes.root}>
            <AppBar position="static">
                { authenticated ? <SignedInToolbar /> : <SignedOutToolbar /> }
            </AppBar>
    </div>
}
const mapState = (state) => {
    const authenticated = state.authState.user_auth
    return {authenticated}
}

export default connect(mapState)(AppBarMain)