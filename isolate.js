import { doSchedule} from "./scheduledlecs.js"
/* function updateButtonColor(btn, id) {
    if(isScheduled(id)){
        btn.style.backgroundColor = "orange";
    }
    if(isOccupied(id)){
        btn.style.backgroundColor = "red";
    }
    if(isVacant(id)){
        btn.style.backgroundColor = "green";
    }

    
  } */
  export function startDay() {
    let arr = ["AL001", "AL002", "AL003", "AL101","AL102", "AL103", "AL201", "AL202","AL203"];
    console.log("Starting Scheduling. I am now inside this function")
    arr.forEach((room) => {
        doSchedule(room);
    });
    console.log("Reached in startDay()");
}
//for schedule, number is 3