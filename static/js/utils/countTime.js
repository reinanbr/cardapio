export const countTime = () => {
    var date = new Date();

    let monthListName = ['jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    let dayWeekListName = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    let dayDate = date.getDate()
    let dayWeek = date.getDay()
    let month = date.getMonth()
    let year = date.getFullYear()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    let monthName = monthListName[month]
    let dayWeekName = dayWeekListName[dayWeek]

    let timeDay = hour >= 18 ? '🌙' : '☀️'
    timeDay = hour < 6 ? '🌙' : '☀️'

    hour = hour.toString().length > 1 ? hour : `0${hour}`
    seconds = seconds.toString().length > 1 ? seconds : `0${seconds}`
    return {
        dayDate: dayDate,
        dayWeek: dayWeek,
        month: month,
        year: year,
        hour: hour,
        minute: minute,
        seconds: seconds,
        monthName: monthName,
        dayWeekName: dayWeekName,
        timeDay: timeDay
    }
}


