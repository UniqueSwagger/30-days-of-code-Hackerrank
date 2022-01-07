function processData(input) {
  //Enter your code here
  getInput(input).forEach((str) => {
    let eventStr = "";
    let oddStr = "";
    str
      .split("")
      .map((singleStr, index) =>
        index % 2 == 0 ? (eventStr += singleStr) : (oddStr += singleStr)
      );
    console.log(`${eventStr} ${oddStr}`);
  });
}
function getInput(input) {
  return input.split("\n").slice(1);
}
