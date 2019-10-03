import React from 'react';
import { connect } from 'react-redux';
import ShiftTypeItem from './ShiftTypeItem'


const EditShiftTypes = ({shiftTypes}) => {
    return (
        <div>
        {
            shiftTypes ? 
                <div style={{display:'flex'}}> 
                { 
                    shiftTypes.map(a =>  <ShiftTypeItem key={a} shift={a} />) 
                }
                </div>
            : null 
        }
        </div>
    )
}

const mapState = (state) => {
    const uid = state.firebase.auth.uid
    const shiftObject = uid && state.firestore.data.shiftTypes ? state.firestore.data.shiftTypes[uid] : null
    const shiftTypes = shiftObject ? Object.getOwnPropertyNames(shiftObject) : null
    return {
        shiftTypes
    }
}


export default connect(mapState)(EditShiftTypes);