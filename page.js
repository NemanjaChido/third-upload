const clickButton = document.querySelector('.icon');
let subMenu = document.getElementById('dropdown');

clickButton.addEventListener('click', function (){
    subMenu.classList.toggle('open-menu');
})

