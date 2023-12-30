let input = require("fs")
  // .readFileSync("class3/1012.txt")
  .readFileSync("class3/1012.txt")
  .toString()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const info = input.shift()
  const number = info.split(" ")[2]
  const d = [[0,1], [0,-1], [1,0], [-1,0]]
  let coordinates = [];

  for (let i = 0; i < number; i++) {
    const [x, y] = input.shift().split(" ").map(Number);
    coordinates.push([x, y]);
  }

  
  let answer = 0;
  
  
  function checkCoordinates(coordinates, candidate) {
    const newCoordinates = coordinates.filter(co => {
      if (co[0] == candidate[0] && co[1] == candidate[1]) {
        return false;
      } 
      else {
        return true
      }
    })
    
    return  { result: coordinates.length != newCoordinates.length, newCoordinates}
  }
  
  // 맨 처음 coordinates에서 하나 꺼내서 bfs를 돌려봄
  while (coordinates.length > 0) {
    const arr = [];
    arr.push(coordinates.shift());
    
    // arr에서 맨 앞에거를 꺼냄
    while (arr.length > 0) {
      const target = arr.shift();
  
      for (let i = 0; i < d.length; i++) {
        const candidate = [target[0] + d[i][0], target[1] + d[i][1]]
        
        // 후보가 coordinates에서 있으면 꺼내고 arr에 넣음
        const {result, newCoordinates} = checkCoordinates(coordinates, candidate)
        if (result) {
          arr.push(candidate);
          coordinates = newCoordinates
        }
      }
    }
  
    answer += 1
  }

  console.log(answer)
}
