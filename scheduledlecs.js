import {readtimetable} from './rdbms.js';

export function updated(room){
    console.log(readtimetable(room));


}
export async function dayOver(room){
    const now = new Date();
    let b = await readtimetable(room); 
    let day= now.getDay()
    let hour=now.getHours()
    let min= now.getMinutes()
    if((hour<=9 && min<=30) || (hour>=12 && min>=30)){
        console.log("Yes Over")
        return true
    }
    else {
    return false
    }
    
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    let curdate=days[day]
    console.log(b[curdate])

    //return false;
}
