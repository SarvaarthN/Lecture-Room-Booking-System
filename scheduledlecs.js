import {readTimetable,changestatus} from './rdbms.js';

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

export async function doSchedule(room) {
    const timetable = await readTimetable(room); // Await this
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const min = now.getMinutes();
  
    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const todayName = dayNames[day];
    const timeslots = Object.keys(timetable[todayName] || {}); // Correct way

    let index = 0;
  
    function scheduleNext() {
        if (index >= timeslots.length) {
            console.log("Finished scheduling for the day.");
            return; // Exit when all slots are done
        }
  
        const currentSlot = timeslots[index];
        const className = timetable[todayName][currentSlot];
  
        if (className === "VACANT") {
            changestatus(room, 1); // Vacant
            console.log("Made room Vacant")
        } else {
            changestatus(room, 3); // Occupied
        }
  
        index++;
        setTimeout(scheduleNext, 10000); // 10 seconds between each slot (for testing, later make it according to timeslot)
    }
  
    scheduleNext(); // Start scheduling
}

