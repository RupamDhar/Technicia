let homeBtn = document.getElementById('homePage');
let bookSlotBtn = document.getElementById('bookSlot');
homeBtn.addEventListener("click", ()=>window.location.href='/home');
bookSlotBtn.addEventListener("click", ()=>window.location.href='/bookslot');

//copying location to clipboard
let copyIcon = document.getElementById("copyIcon");
copyIcon.addEventListener("click", ()=>{
    navigator.clipboard.writeText(document.getElementById('addrTxt').innerHTML);
    alert("ADDRESS COPIED!\nYou can now paste the location in destination section of navigation apps and head there.");
});

//heading to Google Maps for navigation
let directionIcon = document.getElementById("directionIcon");
directionIcon.addEventListener("click", ()=>{
    let destination = document.getElementById('addrTxt').innerHTML;
    let mapsUrl = "https://www.google.com/maps/dir/?api=1&origin=&destination=" + destination;
    window.open(mapsUrl, "_blank");
});

//resolution change listener
window.addEventListener("DOMContentLoaded", ()=>{
    if(window.innerWidth < 1081)
    {
        let navbar = document.querySelector('.navbar');

        // changing VISIT SHOP text to icon
        let homeIcon = document.createElement('div');
        homeIcon.innerHTML = '<i class="fa-solid fa-house navbarItems"></i>';
        homeIcon.setAttribute('onclick', "window.location.href='/home'");
        navbar.replaceChild(homeIcon, homeBtn);

        //changing BOOK SLOT text to icon
        let bookslotIcon = document.createElement('div');
        bookslotIcon.innerHTML = '<i class="fa-solid fa-calendar-days navbarItems"></i>';
        bookslotIcon.setAttribute('onclick', "window.location.href='/bookslot'");
        navbar.replaceChild(bookslotIcon, bookSlotBtn);
    }
});