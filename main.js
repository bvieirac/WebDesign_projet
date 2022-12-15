
    let menu = document.querySelector('#menu-icon'); //document means our html page
    let navbar = document.querySelector('.navbar');
 

menu.onclick = () => { //event

    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

window.onscroll = () => { //event
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

}