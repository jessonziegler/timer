// setTimeout(() => {
//   process.stdout.write('\x07');

// }, 3000);

const array = process.argv.slice(2);
// line below will hard code the function to beep without command line call
//const array = [10, 3, 5, 15, 9];
for (let item of array) {
 if (item > 0) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, item * 1000);
 }

};


