const testArrays = [
  // /**
  //  * 1
  //  */
  // [
  //   { o: [1, "1000"], c: [1, "2100"] },
  //   { o: [2, "1000"], c: [2, "2100"] },
  //   { o: [3, "1000"], c: [3, "2100"] },
  //   { o: [4, "1000"], c: [4, "2100"] },
  //   { o: [5, "1000"], c: [5, "2100"] },
  //   { o: [6, "1000"], c: [6, "2100"] },
  // ],
  // /**
  //  * 2
  //  */
  // [
  //   { o: [0, "1000"], c: [0, "2100"] },
  //   { o: [1, "1000"], c: [1, "2100"] },
  //   { o: [2, "1000"], c: [2, "2100"] },
  //   { o: [3, "1000"], c: [3, "2100"] },
  //   { o: [4, "1000"], c: [4, "2100"] },
  //   { o: [5, "1000"], c: [5, "2100"] },
  //   { o: [6, "1000"], c: [6, "2100"] },
  // ],
  // /**
  //  * 3
  //  */
  // [
  //   { o: [1, "1000"], c: [1, "2200"] },
  //   { o: [2, "1000"], c: [2, "2200"] },
  //   { o: [3, "1000"], c: [3, "2200"] },
  //   { o: [4, "1000"], c: [4, "2200"] },
  //   { o: [5, "0000"], c: [0, "0000"] },
  // ],
  // /**
  //  * 4
  //  */
  // [
  //   { o: [2, "1000"], c: [2, "2200"] },
  //   { o: [3, "1000"], c: [3, "2200"] },
  //   { o: [4, "1000"], c: [4, "2200"] },
  //   { o: [5, "0000"], c: [1, "0000"] },
  // ],
  // /**
  //  * 5
  //  */
  // [
  //   { o: [1, "1000"], c: [1, "2100"] },
  //   { o: [2, "1000"], c: [2, "2100"] },
  //   { o: [3, "1000"], c: [3, "2100"] },
  //   { o: [4, "1000"], c: [4, "2100"] },
  //   { o: [5, "1000"], c: [5, "2100"] },
  //   { o: [6, "1000"], c: [6, "2100"] },
  // ],
  // /**
  //  * 6
  //  */
  // [{ o: [1, "0000"], c: [6, "0000"] }],
  // /**
  //  * 7
  //  */
  // [{ o: [3, "0000"], c: [0, "0900"] }],
  // /**
  //  * 8
  //  */
  // [
  //   { o: [1, "0000"], c: [3, "0000"] },
  //   { o: [4, "0000"], c: [6, "0000"] },
  // ],
  // /**
  //  * 9
  //  */
  // [
  //   { o: [1, "0000"], c: [2, "0800"] },
  //   { o: [2, "0000"], c: [3, "1400"] },
  //   { o: [4, "0800"], c: [6, "2300"] },
  // ],
  // /**
  //  * 10
  //  */
  // [
  //   { o: [0, "0000"], c: [2, "0800"] },
  //   { o: [2, "0000"], c: [3, "1400"] },
  //   { o: [4, "0800"], c: [6, "2300"] },
  // ],
  // /**
  //  * 11
  //  */
  // [
  //   { o: [0, "1000"], c: [1, "2100"] },
  //   { o: [1, "1000"], c: [1, "2100"] },
  //   { o: [2, "1000"], c: [2, "2100"] },
  //   { o: [3, "1000"], c: [3, "2100"] },
  //   { o: [4, "1000"], c: [4, "2100"] },
  //   { o: [5, "1000"], c: [5, "2100"] },
  //   { o: [6, "1000"], c: [6, "2100"] },
  // ],
  // /**
  //  * 12
  //  */
  // [
  //   { o: [0, "1130"], c: [0, "1500"] },
  //   { o: [0, "1700"], c: [0, "2030"] },
  //   { o: [1, "1130"], c: [1, "1500"] },
  //   { o: [1, "1700"], c: [1, "2030"] },
  //   { o: [2, "1130"], c: [2, "1500"] },
  //   { o: [2, "1700"], c: [2, "2030"] },
  //   { o: [3, "1130"], c: [3, "1500"] },
  //   { o: [3, "1700"], c: [3, "2030"] },
  //   { o: [4, "1130"], c: [4, "1500"] },
  //   { o: [4, "1700"], c: [4, "2030"] },
  //   { o: [5, "1130"], c: [5, "1500"] },
  //   { o: [5, "1700"], c: [5, "2030"] },
  //   { o: [6, "1130"], c: [6, "1500"] },
  //   { o: [6, "1700"], c: [6, "2030"] },
  // ],
  // /**
  //  * 13
  //  */
  // [
  //   { o: [1, "2100"], c: [1, "0900"] },
  //   { o: [2, "1000"], c: [2, "2100"] },
  //   { o: [3, "1000"], c: [3, "2100"] },
  //   { o: [4, "1000"], c: [4, "2100"] },
  //   { o: [5, "1000"], c: [5, "2100"] },
  //   { o: [6, "1000"], c: [6, "2100"] },
  // ],
  // /**
  //  * 14
  //  */
  // [
  //   { o: [0, "1000"], c: [0, "2200"] },
  //   { o: [1, "1000"], c: [1, "2200"] },
  //   { o: [2, "1000"], c: [2, "2200"] },
  //   { o: [3, "1000"], c: [3, "2200"] },
  //   { o: [4, "1000"], c: [4, "2200"] },
  //   { o: [5, "1000"], c: [5, "2200"] },
  //   { o: [6, "1000"], c: [6, "2200"] },
  // ],
  // /**
  //  * 15
  //  */
  // [
  //   { o: [1, "1000"], c: [1, "2200"] },
  //   { o: [2, "1000"], c: [2, "2200"] },
  //   { o: [3, "1000"], c: [3, "2200"] },
  //   { o: [4, "1000"], c: [4, "2200"] },
  //   { o: [5, "0000"], c: [0, "0000"] },
  // ],
  // /**
  //  * 16
  //  */
  // [
  //   { o: [2, "1000"], c: [2, "2200"] },
  //   { o: [3, "1000"], c: [3, "2200"] },
  //   { o: [4, "1000"], c: [4, "2200"] },
  //   { o: [5, "0000"], c: [1, "0000"] },
  // ],
  // /**
  //  * 17
  //  */
  // [
  //   { o: [1, "1000"], c: [1, "2100"] },
  //   { o: [2, "1000"], c: [2, "2100"] },
  //   { o: [3, "1000"], c: [3, "2100"] },
  //   { o: [4, "1000"], c: [4, "2100"] },
  //   { o: [5, "1000"], c: [5, "2100"] },
  //   { o: [6, "1000"], c: [6, "2100"] },
  // ],
  // /**
  //  * 18
  //  */
  // [
  //   { o: [1, "1000"], c: [1, "2100"] },
  //   { o: [2, "1000"], c: [2, "2100"] },
  //   { o: [3, "1000"], c: [3, "2100"] },
  //   { o: [4, "1000"], c: [4, "2100"] },
  //   { o: [5, "1000"], c: [5, "2100"] },
  //   { o: [6, "1000"], c: [6, "2100"] },
  // ],
  // /**
  //  * 19
  //  */
  // [
  //   { o: [1, "0000"], c: [4, "0000"] },
  //   { o: [5, "0000"], c: [0, "0000"] },
  // ],
  // /**
  //  * 20
  //  */
  // [
  //   { o: [1, "0100"], c: [4, "0200"] },
  //   { o: [5, "0100"], c: [0, "0100"] },
  // ],
  // /**
  //  * 21
  //  */
  // [
  //   { o: [4, "0100"], c: [5, "0200"] },
  //   { o: [6, "0100"], c: [3, "0100"] },
  // ],
  // /**
  //  * 22
  //  */
  // [
  //   { o: [0, "1130"], c: [0, "1500"] },
  //   { o: [0, "1730"], c: [0, "2300"] },
  //   { o: [1, "1130"], c: [1, "1500"] },
  //   { o: [1, "1730"], c: [1, "2300"] },
  //   { o: [2, "1130"], c: [2, "1500"] },
  //   { o: [2, "1730"], c: [2, "2300"] },
  //   { o: [3, "1130"], c: [3, "1500"] },
  //   { o: [3, "1730"], c: [3, "2300"] },
  //   { o: [4, "1130"], c: [4, "1500"] },
  //   { o: [4, "1730"], c: [4, "2300"] },
  //   { o: [5, "1130"], c: [5, "1500"] },
  //   { o: [5, "1730"], c: [5, "2300"] },
  //   { o: [6, "1130"], c: [6, "1500"] },
  //   { o: [6, "1730"], c: [6, "2300"] },
  // ],
  // /**
  //  * 23
  //  */
  // [{ o: [0, "0000"], c: [1, "0000"] }],
  // /**
  //  * 24
  //  */
  // [
  //   { o: [0, "0900"], c: [0, "1100"] },
  //   { o: [0, "1130"], c: [0, "1500"] },
  //   { o: [0, "1730"], c: [0, "2300"] },
  //   { o: [1, "0900"], c: [1, "1100"] },
  //   { o: [1, "1130"], c: [1, "1500"] },
  //   { o: [1, "1730"], c: [1, "2300"] },
  //   { o: [2, "0900"], c: [2, "1100"] },
  //   { o: [2, "1130"], c: [2, "1500"] },
  //   { o: [2, "1730"], c: [2, "2300"] },
  //   { o: [3, "0900"], c: [3, "1100"] },
  //   { o: [3, "1130"], c: [3, "1500"] },
  //   { o: [3, "1730"], c: [3, "2300"] },
  //   { o: [4, "0900"], c: [4, "1100"] },
  //   { o: [4, "1130"], c: [4, "1500"] },
  //   { o: [4, "1730"], c: [4, "2300"] },
  //   { o: [5, "0900"], c: [5, "1100"] },
  //   { o: [5, "1130"], c: [5, "1500"] },
  //   { o: [5, "1730"], c: [5, "2300"] },
  //   { o: [6, "0900"], c: [6, "1100"] },
  //   { o: [6, "1130"], c: [6, "1500"] },
  //   { o: [6, "1730"], c: [6, "2300"] },
  // ],
  [
    { o: [0, "1500"], c: [1, "0000"] },
    { o: [1, "1500"], c: [2, "0000"] },
    { o: [2, "1500"], c: [3, "0000"] },
    { o: [3, "1500"], c: [4, "0000"] },
    { o: [4, "1500"], c: [5, "0000"] },
    { o: [5, "1500"], c: [6, "0000"] },
    { o: [6, "1500"], c: [7, "0000"] },
  ],
];
const days = ["일", "월", "화", "수", "목", "금", "토"];
export const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
const formatTime = (timeStr: any) => {
  return `${timeStr.slice(0, 2)}:${timeStr.slice(2, 4)}`;
};

const formatPlaceOpenCloseTime = (businessHours: any) => {
  const placeOpenCloseTime = businessHours;

  let openTimeTextArr: string[] = [];
  if (
    placeOpenCloseTime === null ||
    placeOpenCloseTime.length === 0 ||
    (placeOpenCloseTime[0] && JSON.stringify(placeOpenCloseTime[0]) === '{"o":[0,"0000"]}')
  )
    openTimeTextArr = WEEKDAY.map((data) => `${data} : 00:00~24:00`);
  else {
    // 월화수목금토일 빈배열로 초기화
    let fullWeek: any[] = new Array(7).fill(null).map(() => []);
    // 베이스 영업시간 처리
    placeOpenCloseTime.forEach((hour: any) => {
      let openDay = hour.o[0];
      let closeDay = hour.c[0];
      console.log(openDay);
      console.log(closeDay);

      if (openDay <= closeDay) {
        /**
         * 동일한 날 혹은 연속된 날짜에 대한 영업 시간의 경우
         * {"o":[1,"0000"],"c":[4,"0000"]} 경우
         */
        for (let d = openDay; d <= closeDay; d++) {
          fullWeek[d].push({
            open: d === openDay ? hour.o[1] : "0000",
            close: d === closeDay ? hour.c[1] : "2400",
          });
        }
      } else {
        /**
         * 영업 시간 정보가 일주일을 걸쳐 있는 경우의 처리
         * {"o":[5,"0000"],"c":[0,"0000"]} 혹은 { o: [6, "0100"], c: [3, "0100"] } 경우
         */
        // 금요일에서 토요일까지 영업 시간 처리
        for (let d = openDay; d < 7; d++) {
          fullWeek[d].push({
            open: d === openDay ? hour.o[1] : "0000",
            close: "2400",
          });
        }
        // 일요일 영업 시간 처리
        for (let d = 0; d <= closeDay; d++) {
          fullWeek[d].push({
            open: "0000",
            close: d === closeDay ? hour.c[1] : "2400",
          });
        }
      }
    });
    // 예외 상황(휴무, 오버랩되는 시간, 브레이크 타임) 후처리
    let fianlBusinessHourArray = [];
    for (let i = 0; i < 7; i++) {
      if (fullWeek[i].length) {
        const sortedTimes = fullWeek[i].sort((a: any, b: any) => parseInt(a.open) - parseInt(b.open));
        let mergedTimes = [];
        let current = sortedTimes[0];
        for (let j = 1; j < sortedTimes.length; j++) {
          if (parseInt(current.close) >= parseInt(sortedTimes[j].open)) {
            current.close = sortedTimes[j].close;
          } else {
            mergedTimes.push(current);
            current = sortedTimes[j];
          }
        }
        mergedTimes.push(current);
        const hours = mergedTimes
          .filter((time) => !(time.open === "0000" && time.close === "0000"))
          .map((time) => `${formatTime(time.open)}~${formatTime(time.close)}`)
          .join(" ");

        fianlBusinessHourArray.push(hours ? `${days[i]} : ${hours}` : `${days[i]} : 휴무`);
      } else {
        fianlBusinessHourArray.push(`${days[i]} : 휴무`);
      }
    }
    openTimeTextArr = fianlBusinessHourArray;
  }

  if (openTimeTextArr.length > 0) return openTimeTextArr;
  else return null;
};
const excludeNotNumber = (str: any) => {
  return str.replaceAll(/[^0-9]/g, "");
};
const timeToMinute = (time: string) => {
  time = excludeNotNumber(time);
  const hour = Number(time.substring(0, 2));
  const minute = Number(time.substring(2, 4));
  return hour * 60 + minute;
};
const checkOpenClose = (time: string) => {
  // console.log("  ");
  // console.log(time);

  const openCloseTime = time.split(" : ")[1];
  if (openCloseTime === "00:00~24:00") return false;
  if (openCloseTime === "휴무") return true;
  const openCloseArr = openCloseTime.split(" ");
  for (let i = 0; i < openCloseArr.length; i++) {
    const [open, close] = openCloseArr[i].split("~");
    // console.log(openCloseTime[0]);
    // if(open)
    const openMinute = timeToMinute(open);
    let closeMinute = timeToMinute(close);
    console.log("open : ", openMinute);
    console.log("close : ", closeMinute);
    // if (openMinute > closeMinute) closeMinute = closeMinute + 1440;
    // if (place.startMinuteSinceZero > place.finishMinuteSinceZero) place.finishMinuteSinceZero = place.finishMinuteSinceZero + 1440;
    // if (openMinute <= place.startMinuteSinceZero && closeMinute >= place.finishMinuteSinceZero) return false;
  }
  return true;
};

for (let i = 0; i < testArrays.length; i++) {
  const formattedOpenCloseTimeTxt = formatPlaceOpenCloseTime(testArrays[i]);
  for (let j = 0; j < (formattedOpenCloseTimeTxt as []).length; j++)
    checkOpenClose((formattedOpenCloseTimeTxt as [])[j]);
}

console.log("/////////////////////////////////////////////////////////////");
