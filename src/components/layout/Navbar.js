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


const AppBarMain = ({ auth }) => {
    const classes= useStyles()
    const toolbar = auth.uid ? <SignedInToolbar /> : <SignedOutToolbar />
    return (
        <div className={classes.root}>
            <AppBar position="static">
                { toolbar }
            </AppBar>
        </div>
    )
}
const mapState = (state) => {
    console.log(state)
    const auth = state.firebase.auth
    return {auth}
}

export default connect(mapState)(AppBarMain)