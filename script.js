let counter = document.querySelector('h1');
let count =7;
setInterval(()=>{
    counter.innerText = count;
    count++
    
    if(count > 5) location.replace('https://www.google.com/')
    
},0001)
