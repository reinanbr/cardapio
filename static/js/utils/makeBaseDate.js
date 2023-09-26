import { countTime } from "./countTime.js"

export class MakeBaseDate{
    constructor(){
        this.year = false
        this.month = false
        this.day = false
        this.hour = false
        this.minutes = false
        this.seconds = false
    }

    setMonth(month){
        this.month = month.toString().length > 1 ? month : `0${month}`
        return this.month
    }
    setDay(day){
        this.day = day.toString().length > 1 ? day : `0${day}`
        return this.day
    }
    setHour(hour){
        this.hour = hour.toString().length > 1 ? hour : `0${hour}`
        return this.hour
    }
    setMinutes(minutes){
        this.minutes = minutes.toString().length > 1 ? minutes : `0${minutes}`
        return this.minutes
    }
    setSeconds(seconds){
        this.seconds = seconds.toString().length > 1 ? seconds : `0${seconds}`
        return this.seconds
    }

    date(){
        let dateToday = countTime()
        let month = this.month ? this.month : this.setMonth(dateToday.month+1)
        let day = this.day ? this.date : this.setDay(dateToday.dayDate)
        let hour = this.hour ? this.hour : this.setHour(dateToday.hour)
        let minutes = this.minutes ? this.minutes : this.setMinutes(dateToday.minute)
        let seconds = this.seconds ? this.seconds : this.setSeconds(dateToday.seconds)
        let stringDate = `${dateToday.year}-${month}-${day}T${hour}:${minutes}:${seconds}`

        //console.log(stringDate)
        let returnDate = new Date(stringDate)
        return returnDate
    }
}


