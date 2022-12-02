let Error_1 = document.querySelector('h1');
let count =7;
setInterval(()=>{
    Error_404.innerText = count;
    count++
    
    if(count > 5) location.replace('https://www.google.com/')
    
},0000)
