import moment           from 'moment'

export const getDateMatrix = (monthMoment) => {
    const extMonthDates = createDates(monthMoment)
    const matrix = createMatrix(monthMoment,extMonthDates)
    return matrix
}

// set up to call date generator
const createDates = (monthStart) => {
    let newDays = []
    for (let d of dateGen(monthStart))newDays.push(d)
    return newDays
}
// date generator
function* dateGen(monthStart) {
    const m = getExtMonthStart(monthStart)
    const numOfDays = getNumOfDays(getExtMonthEnd(monthStart).format('DDD'),m.format('DDD'))
    let i = 0
    while (i<numOfDays) yield m.clone().add(i++,'d')
}
// calculate number of days and factor in change of year
const getNumOfDays = (last,start) => {
    if (Number(last) < Number(start)) {
        return last + 365 - start + 1
    }
    return last - start + 1
}

// Extended Month Start (First Sunday)
//subtract numerical day of week from start of month
const getExtMonthStart = (start) => moment(start).subtract( moment(start).startOf('month').day(),'d')

// Extended Month End (Last Saturday)
// add (6 - day of week of end) days to the end of the month
const getExtMonthEnd = (start) => moment(start).endOf('month').add(6 - moment(start).endOf('month').day(),'d')


// datematrix creator
const createMatrix = (m,dates) => {
    const daysInMonth = m.clone().endOf('month').date()
    const startDayOfWeek = m.clone().startOf('month').day()
    let matrix = []
    let i = 0
    while (i < daysInMonth+startDayOfWeek){
        let nextRow = []
        matrix.push(nextRow)
        let j = 1
        while (j <= 7) {
            nextRow.push(dates[i])
            i++
            j++
        }
    }
    return matrix
}
