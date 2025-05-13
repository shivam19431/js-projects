// document.getElementById('clock');

setInterval(() => {
    document.getElementById('clock').innerHTML = new Date().toLocaleTimeString();   
    // console.log(new Date().toLocaleTimeString())
}, 1000);
