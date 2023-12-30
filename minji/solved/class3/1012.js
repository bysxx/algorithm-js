let input = require("fs")
  .readFileSync("minji/solved/class3/1012.txt")
  .toString()
  .split("\n");


let answer = []
let testCase = parseInt(input[0])
let info = 1

for(testCase; testCase > 0; testCase--) {
  const m = input[info].split(" ")[0] - 0
  const n = input[info].split(" ")[1] - 0
  const k = input[info].split(" ")[2] - 0
  let location = input.slice(info + 1, info + 1 + k)
  let checkedLocation = []
  let warm = 0
  location.forEach(e => {
    if(checkedLocation.indexOf(e) === -1) {
      warm++
      checkedLocation.push(e)
      checkedLocation = checkAdjacent(location, checkedLocation, e, m, n)
    }
  })
  answer.push(warm)
  info += k + 1
  warm = 0
}

console.log(answer)
return answer


function checkAdjacent(location, checkedLocation, e, m, n) {
  let x = e.split(" ")[0] - 0
  let y = e.split(" ")[1] - 0
  
  if(x >1) {
    let next = (x-1) + " " + y
    if(location.indexOf(next) != -1 && checkedLocation.indexOf(next) == -1) {
      checkedLocation.push(next)
      checkedLocation = checkAdjacent(location, checkedLocation, next, m, n)
    }
  }

  if(x < m -1) {
    let next = (x+1) + " " + y
    if(location.indexOf(next) != -1 && checkedLocation.indexOf(next) == -1) {
      checkedLocation.push(next)
      checkedLocation = checkAdjacent(location, checkedLocation, next, m, n)
    }
  }

  if( y > 1) {
    let next = x + " " + (y -1)
    if(location.indexOf(next) != -1 && checkedLocation.indexOf(next) == -1) {
      checkedLocation.push(next)
      checkedLocation = checkAdjacent(location, checkedLocation, next, m, n)
    }
  }

  if(y < n - 1) {
    let next = x + " " + (y+1)
    if(location.indexOf(next) != -1 && checkedLocation.indexOf(next) == -1) {
      checkedLocation.push(next)
      checkedLocation = checkAdjacent(location, checkedLocation, next, m, n)
    }
  }

  return checkedLocation
}