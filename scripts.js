const menu = document.querySelector('menu-context');


function removeMenu() {
    menu.style.left = '-9999px';
    menu.style.top = '-9999px';
}

function rightButton(e) {
    e.preventDefault();

    if (e.button === 2) {
        menu.style.left = e.pageX + 10 + 'px';
        menu.style.top = e.pageY + 10 + 'px';
    }
}


const block = document.querySelector('#right');
block.addEventListener('mousedown', rightButton);



var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

