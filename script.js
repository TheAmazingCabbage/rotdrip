let Error_1 = document.querySelector('h1');
let count =7;
setInterval(()=>{
    Error_1.innerText = count;
    count++
    
    if(count > 5) location.replace('https://www.youtube.com/watch?v=iQKzuAhzoi0&t=50s')
    
},0000)
