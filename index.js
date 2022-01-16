let a;
let date2;
let time2;
const options ={weekday: 'long',year:'numeric',month:'long',day:'numeric'};
setInterval(() => {
a =new Date();
date2 = a.toLocaleDateString(undefined, options)
time2=a.getHours() +':'+ a.getMinutes() +':' + a.getSeconds()
document.getElementById('time').innerHTML= time2+"<br> on "+date2;

    
}, 1000);