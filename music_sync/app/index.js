import { HeartRateSensor } from "heart-rate";
import fs from "fs";
import { outbox } from "file-transfer";

if (HeartRateSensor) {
  const hrm = new HeartRateSensor({ frequency: 1 });
  hrm.addEventListener("reading", () => {
    console.log(`Current heart rate: ${hrm.heartRate}`);
    if(hrm.heartRate < 100){
        console.log("Idle");
    } else {
        console.log("Active");
    }    

    // console.log(typeof hrm.heartRate);

    let hrm_data = {"heartRate": hrm.heartRate};
    fs.writeFileSync("heart_rate.txt", hrm_data, "json");   
    
    outbox
    .enqueueFile("heart_rate.txt")
    .then((ft) => {
        console.log(`Transfer of ${ft.name} successfully queued.`);
    })
    .catch((error) => {
        console.log(`Failed to schedule transfer: ${error}`);
    })

  });
  hrm.start();
}