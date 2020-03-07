
const axios = require('axios');

const start_time_stamp= new Date();
console.log(start_time_stamp);
const main_loop = () => {
setTimeout(() => {
    const start_time_stamp= new Date();

axios.get('https://fanuc-robot-http-server.herokuapp.com/')
    .then((res) => {
   
const time_stamp = new Date();

const delta = time_stamp - start_time_stamp;


const regexp = 'Joint[ ]+[0-9]:[ ]+([ ][0-9]+.[0-9])';
//const regexp = 'Joint[ ]?[-+]?[0-9]+[-,]*[+-]?[0-9]+';
//const regexp = 'Joint[ ]';

let joints = [];
let matches = res.data.matchAll(regexp);
let count = 0;
for (const match of matches) {
count++;
if (count > 6) break;
const value = parseFloat(match[1]);
joints.push(value);    
  
}
//console.log(joints)
//console.log(time_stamp);
console.log(time_stamp, joints, delta, 'ms');

});




//Luo ohjelmaan luuppi, joka pyörii ikuisesti

main_loop();
  }, 1000);
}

main_loop();
