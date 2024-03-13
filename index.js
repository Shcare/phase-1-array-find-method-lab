// code your solution here

// function superbowlWin(record) {
//   if (record.find((i) => i.result === "W")) {
//     return record.find((i) => i.result === "W").year;
//   } else {
//     return record.find((i) => i.result === "W");
//   }
// }

function superbowlWin(record) {
  let o = record.find((i) => i.result === "W");
  if (o) {
    return o.year;
  } else {
    return o;
  }
}
//   if (object.result === "W") {
//     return object.year;
//   } else {
//     return object.find(0);
//   }
// }
// let o = record.find((i) => i.result === "W");
// if (o.result === "W") {
//   return o.year;
// } else {
//   return undefined;
