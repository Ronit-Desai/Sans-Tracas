export default class HelperUtil {
  static cleanData(readings, experiment, participant_id) {
    let samplesLength = 12;
    let minIndex = readings[0].index;
    let maxIndex = readings[readings.length - 1].index;
    let processedDataIndex = 1;
    let processedData = [];

    for (let i = minIndex; i <= maxIndex; i++) {
      let data = [];
      for (let x = 0; x < samplesLength; x++) {
        data.push({ index: processedDataIndex });
        processedDataIndex++;
      }

      let prevTimeStamp = this.getPrevTimeStamp(readings, i);

      for (let j = 0; j < readings.length; j++) {
        if (readings[j].index === i) {
          let timeGap = (readings[j].timestamp - prevTimeStamp) / 12;
          if (i === minIndex) {
            timeGap = 1000 / 256;
          }

          switch (readings[j].electrode) {
            case 0:
              for (let k = 0; k < readings[j].samples.length; k++) {
                data[k].ch_0 = readings[j].samples[k];
                data[k].timestamp = readings[j].timestamp - (11 - k) * timeGap;
                data[k].participant_id = participant_id;
                if (experiment === "n170") {
                  data[k].type = readings[j].type;
                  data[k].gender = readings[j].gender;
                  data[k].face_orientation = readings[j].faceOrientation;
                  data[k].eye_orientation = readings[j].eyeOrientation;
                  data[k].smile = readings[j].smile;
                  data[k].teeth = readings[j].teeth;
                }
              }
              break;
            case 1:
              for (let k = 0; k < readings[j].samples.length; k++) {
                data[k].ch_1 = readings[j].samples[k];
                data[k].timestamp = readings[j].timestamp - (11 - k) * timeGap;
                data[k].participant_id = participant_id;
                if (experiment === "n170") {
                  data[k].type = readings[j].type;
                  data[k].gender = readings[j].gender;
                  data[k].face_orientation = readings[j].faceOrientation;
                  data[k].eye_orientation = readings[j].eyeOrientation;
                  data[k].smile = readings[j].smile;
                  data[k].teeth = readings[j].teeth;
                }
              }
              break;
            case 2:
              for (let k = 0; k < readings[j].samples.length; k++) {
                data[k].ch_2 = readings[j].samples[k];
                data[k].timestamp = readings[j].timestamp - (11 - k) * timeGap;
                data[k].participant_id = participant_id;
                if (experiment === "n170") {
                  data[k].type = readings[j].type;
                  data[k].gender = readings[j].gender;
                  data[k].face_orientation = readings[j].faceOrientation;
                  data[k].eye_orientation = readings[j].eyeOrientation;
                  data[k].smile = readings[j].smile;
                  data[k].teeth = readings[j].teeth;
                }
              }
              break;
            case 3:
              for (let k = 0; k < readings[j].samples.length; k++) {
                data[k].ch_3 = readings[j].samples[k];
                data[k].timestamp = readings[j].timestamp - (11 - k) * timeGap;
                data[k].participant_id = participant_id;
                if (experiment === "n170") {
                  data[k].type = readings[j].type;
                  data[k].gender = readings[j].gender;
                  data[k].face_orientation = readings[j].faceOrientation;
                  data[k].eye_orientation = readings[j].eyeOrientation;
                  data[k].smile = readings[j].smile;
                  data[k].teeth = readings[j].teeth;
                }
              }
              break;
            case 4:
              for (let k = 0; k < readings[j].samples.length; k++) {
                data[k].ch_4 = readings[j].samples[k];
                data[k].timestamp = readings[j].timestamp - (11 - k) * timeGap;
                data[k].participant_id = participant_id;
                if (experiment === "n170") {
                  data[k].type = readings[j].type;
                  data[k].gender = readings[j].gender;
                  data[k].face_orientation = readings[j].faceOrientation;
                  data[k].eye_orientation = readings[j].eyeOrientation;
                  data[k].smile = readings[j].smile;
                  data[k].teeth = readings[j].teeth;
                }
              }
              break;
            default:
              console.log(
                "New node found in while cleaning data in Helper-util class"
              );
          }
        }
      }

      processedData = processedData.concat(data);
    }

    return processedData;
  }

  static getPrevTimeStamp(readings, index) {
    let readingsLength = readings.length;
    for (let i = 0; i < readingsLength; i++) {
      if (readings[i].index === index - 1) {
        return readings[i].timestamp;
      }
    }
  }
}
