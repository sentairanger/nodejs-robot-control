// Define host
const pigpio = require('pigpio-client').pigpio({host: '192.168.0.10'});

// Prepare to connect
const ready = new Promise((resolve, reject) => {
  pigpio.once('connected', resolve);
  pigpio.once('error', reject);
});

// Define readline for keypresses
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Define the pins and whether they are output
ready.then(async (info) => {
  console.log(JSON.stringify(info,null,2));
  const pin1 = pigpio.gpio(7);
  const pin2 = pigpio.gpio(8);
  const pin3 = pigpio.gpio(9);
  const pin4 = pigpio.gpio(10);
  await pin1.modeSet('output');
  await pin2.modeSet('output');
  await pin3.modeSet('output');
  await pin4.modeSet('output');
  // Define our keypresses
  process.stdin.on('keypress', (str, key) => {
  // Forward
  if (key.name == 'up') {
	pin1.write(0)
	pin2.write(1);
	pin3.write(1);
	pin4.write(0);
  };
  // Backward
  if (key.name == 'down') {
    pin1.write(1);
    pin2.write(0);
    pin3.write(0);
    pin4.write(1);
  }
  // Left
  if (key.name == 'left') {
	pin1.write(1);
	pin2.write(0);
	pin3.write(1);
	pin4.write(0);  
  }
  // Right
  if (key.name == 'right') {
	pin1.write(0);
	pin2.write(1);
	pin3.write(0);
	pin4.write(1);  
  }
  //Stop
  if (key.name == 'return') {
	pin1.write(0);
	pin2.write(0);
	pin3.write(0);
	pin4.write(0);  
  }
  // Exit code
  if (key.ctrl && key.name == 'c') {
	process.exit();  
  };
});
  
  
}).catch(console.error);
