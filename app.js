
const axios = require('axios');
    axios.get('https://fanuc-robot-http-server.herokuapp.com/')
    .then((res) => {
    console.log(res);
 });

 /**
const start_time_stamp= new Date();
const time_stamp = new Date();
const delta = time_stamp - start_time_stamp;
 */

const regexp = '/Joint/g';
let joints = [];
let matches = res.data.matchAll(regexp);
let count = 0;
    for (const match of matches) {
    count++;
    if (count > 6) break;
    const value = parseFloat(match[1]);
    joints.push(value);
}
//Luo ohjelmaan luuppi, joka pyörii ikuisesti

const main_loop = () => {
    setTimeout(() => {
    //Koodi
    main_loop();
    }, 10);
}
main_loop();
