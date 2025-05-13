const form = document.querySelector('form');
console.log(form)

form.addEventListener('submit',function (e) {
   e.preventDefault();
   console.log(e)
   
   const height = parseInt(document.querySelector('#height').value);
   console.log(height)
   const weight = parseInt(document.querySelector('#weight').value);
   const res = document.querySelector('#results');

   if (height ==='' || height < 0 || isNaN(height)) {
    res.innerHTML = `Please give a valid Height ${height}`;
   }else if (weight ==='' || weight < 0 || isNaN(weight)) {
    res.innerHTML = `Please give a valid Weight ${weight}`;
   }else{
    const bmi = (weight/((height*height)/1000)).toFixed(2);
    res.innerHTML = `${bmi}`;
   }

});