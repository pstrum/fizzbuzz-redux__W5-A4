var FizzBuzz = require('./index.js');

var buzzer = new FizzBuzz("fizzy", "buzzyzy"); // Should accept string arguments that replace 'Fizz' and 'Buzz'
buzzer.input(1, 16);

console.log(buzzer.output());