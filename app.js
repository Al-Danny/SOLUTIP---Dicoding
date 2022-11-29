let add = document.getElementById('add');
let nomor = document.getElementById('nomor');
let counter = localStorage.getItem('counter');

if(counter == undefined){
    counter++;
    nomor.innerHTML = `<h2>${counter}</h2>`;
    localStorage.setItem('counter', counter);
}
    nomor.innerHTML = `<h2>${counter}</h2>`;
    localStorage.setItem('counter', counter);
  
add.addEventListener('click', function(){
    counter++;
    localStorage.setItem('counter', counter);
    window.location = 'index.html';
}
);
