const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]


function superbowlWin(arrayOfObjects){
    let data = arrayOfObjects.find(win => win.result === "W");

    return data ? data.year : undefined;
}

console.log(superbowlWin(record));
