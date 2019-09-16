// ------- CALENDAR CONSTS---------
const calBorderWidth = '1.25px'
const calBorderColor = 'black'
const calBGColor = '#F2F4F4'
const calFontFam = 'courier new'
// -------DAY CONNTS-------------
const calDaySelectedBGColor = '#D5D8DC'
const numsExtMonth = 'grey'
const numsMonth = 'black'
const numsToday = 'green'

// ------- EVENT CONSTS-----------
const evCompBGColor = '#6BCAE9'
const evIncompBGColor = '#c9302c'
const evSelectBGColor = '#CAE96B'

const evCompTxtColor = 'black'
const evIncompTxtColor = 'white'
const evSelectBrdrColor = '#ACAFA6'


// -----------CALENDAR-------------
export const calendarContainer = {
    backgroundColor: calBGColor,
//     margin: '10px -15px',
    // border: '3px solid yellow',
    // display: 'flex',
}
// ----------MONTH HEADER------------
export const monthHeaderContainer = (size) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        // marginBottom: size === 'small'? '0px' : '10px'
    }
}
export const monthYearDisplay = {
    fontWeight: 'bold',
    fontSize: '1.6rem',
    fontFamily: calFontFam
}
export const monthNavBtn = {
    flexGrow: '0',
    fontFamily: calFontFam
}
// ------DAY OF WEEK HEADER----------
export const dayOfWeekContainer = {
    display: 'flex',
    justifyContent: 'space-around',
    borderStyle: 'none none none solid',
    borderWidth: calBorderWidth,
    borderColor: calBorderColor,
}
export const dayOfWeekStyle = {
    fontWeight: 'bold',
    fontSize: '1.3rem',
    fontFamily: calFontFam,
    flexBasis: '14.286%',
    textAlign: 'center',
    borderStyle: 'solid solid solid none',
    borderWidth: calBorderWidth,
    borderColor: calBorderColor,

}
// -----WEEK ROW CONTAINER-----------
export const weekContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        borderStyle: 'none solid solid none',
        borderWidth: calBorderWidth,
        borderColor: calBorderColor,
        backgroundColor:'white'
}
// ------DAY CONTAINER---------------
export const weekDay = (size) => {
    return {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        flexBasis: '14.286%',
        minHeight: size === 'small' ? '0vw' : '7vw',
        borderStyle: 'none none none solid',
        borderWidth: calBorderWidth,
        borderColor: calBorderColor,

    }
}

// ------------- DAY CALENDAR--------------------
export const dayStyle = (isToday,type) => {
    return {
        paddingRight:'1px',
        textAlign: 'right',
        fontSize: '80%',
        fontFamily: calFontFam,
        flexGrow:'1',
        flexShrink:'1',
        backgroundColor: type === 'day' ? 'yellow': type==='night'? 'blue' : 'white',
        // border: isToday ? '0.5px solid black' : null,
        color: isToday ? numsToday : type === 'day' ? 'black' : type === 'night'? 'yellow' : 'black',
        height: '100%',
    }
}

// ------------- EVENT -----------------
// export const shiftEventStyle = (type) => {
//     return {
//         fontSize:'1.2em',
//         margin: '15px',
//         textAlign: 'center',
//         borderWidth:  '2px',
//     }
// }