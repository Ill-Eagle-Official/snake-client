const { MOVEUP, MOVEDOWN, MOVELEFT, MOVERIGHT, MESSAGES } = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVEUP) {
    connection.write('Move: up')
  }
  if (key === MOVEDOWN) {
    connection.write('Move: down')
  }
  if (key === MOVELEFT) {
    connection.write('Move: left')
  }
  if (key === MOVERIGHT) {
    connection.write('Move: right');
  }
  if(MESSAGES[key]) {
    connection.write(MESSAGES[key])
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;