const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../data/day1.txt', 'utf8');

// route = ['R1', 'L2', 'R555', 'L77'];
// var route = [
//   'R3', 'L5', 'R1', 'R2', 'L5', 'R2', 'R3', 'L2', 'L5', 'R5', 'L4', 'L3',
//   'R5', 'L1', 'R3', 'R4', 'R1', 'L3', 'R3', 'L2', 'L5', 'L2', 'R4', 'R5',
//   'R5', 'L4', 'L3', 'L3', 'R4', 'R4', 'R5', 'L5', 'L3', 'R2', 'R2', 'L3',
//   'L4', 'L5', 'R1', 'R3', 'L3', 'R2', 'L3', 'R5', 'L194', 'L2', 'L5', 'R2',
//   'R1', 'R1', 'L1', 'L5', 'L4', 'R4', 'R2', 'R2', 'L4', 'L1', 'R2', 'R53',
//   'R3', 'L5', 'R72', 'R2', 'L5', 'R3', 'L4', 'R187', 'L4', 'L5', 'L2', 'R1',
//   'R3', 'R5', 'L4', 'L4', 'R2', 'R5', 'L5', 'L4', 'L3', 'R5', 'L2', 'R1',
//   'R1', 'R4', 'L1', 'R2', 'L3', 'R5', 'L4', 'R2', 'L3', 'R1', 'L4', 'R4',
//   'L1', 'L2', 'R3', 'L1', 'L1', 'R4', 'R3', 'L4', 'R2', 'R5', 'L2', 'L3',
//   'L3', 'L1', 'R3', 'R5', 'R2', 'R3', 'R1', 'R2', 'L1', 'L4', 'L5', 'L2',
//   'R4', 'R5', 'L2', 'R4', 'R4', 'L3', 'R2', 'R1', 'L4', 'R3', 'L3', 'L4',
//   'L3', 'L1', 'R3', 'L2', 'R2', 'L4', 'L4', 'L5', 'R3', 'R5', 'R3', 'L2',
//   'R5', 'L2', 'L1', 'L5', 'L1', 'R2', 'R4', 'L5', 'R2', 'L4', 'L5', 'L4',
//   'L5', 'L2', 'L5', 'L4', 'R5', 'R3', 'R2', 'R2', 'L3', 'R3', 'L2', 'L5'
// ];

function calcBlockDistance (route) {

  var orientation = 90;
  var x = 0;
  var y = 0;
  orientations = [90, 0, -90, 180];

  route.forEach(function (val, index, array) {
    // get orientation
    if (val.charAt(0) === 'R') orientation = nextOrientation(orientation, 'R');
    else orientation = nextOrientation(orientation, 'L');
    // get length
    var dist = val.split('').slice(1).join('');
    // update the x,y coords
    switch (orientation) {
      case 90:
        y = y + parseInt(dist);
        break;
      case 0:
        x = x + parseInt(dist);
        break;
      case -90:
        y = y - parseInt(dist);
        break;
      case 180:
        x = x - parseInt(dist);
        break;
      default:
        console.log('something went wrong');
    }
  });
  // console.log(`x: ${x}, y: ${y}`)
  return Math.abs(x) + Math.abs(y);
}

var nextOrientation = function (currentOrientation, direction) {
  var ind = orientations.indexOf(currentOrientation);
  if (direction === 'L') {
    if (currentOrientation === 90) return 180;
    return orientations[ind - 1];
  }
  else {
    if (currentOrientation === 180) return 90;
    return orientations[ind + 1];
  }
};

module.exports = {
  calcBlockDistance
}
