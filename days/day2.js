

function getCombination (arrayInst) {
  arrayInst = arrayInst || [];
  var result = '';
  // for every line of instructions
  arrayInst.forEach(function (line) {
    // start at 5
    var instr = line.split(' ').reduce(function (acc, val, ind, array) {
      // then for each character in the line
      // call move .
      acc = move(acc, val);
      console.log('acc ', acc);
    } ,'5');
    console.log('instr', instr);
    result = result + instr;
  });
  console.log('result ', result)
  return result;
}

function move (from, instruction) {
  var keypad = ['1', '2', '3',
            '4', '5', '6',
            '7', '8', '9'];

  var startInd = keypad.indexOf(from);
  var ind = startInd;
  switch (instruction) {
    case 'U':
      if (startInd < 3) break;
      ind = startInd - 3;
      break;
    case 'L':
      if (startInd === 0 || startInd === 3 || startInd === 6) break;
      ind = startInd - 1;
      break;
    case 'R':
      if (startInd === 2 || startInd === 2 || startInd === 8) break;
      ind = startInd + 1;
      break;
    case 'D':
      if (startInd > 5) break;
      ind = startInd + 3;
      break;
    default:
      ind = 99;
  }
  return keypad[ind];
}

module.exports = {
  getCombination: getCombination,
  move: move
};
