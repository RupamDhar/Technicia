//defining HOME page and VISIT SHOP page routes
let homepageBtn = document.getElementById("homePage");
let visitShopBtn = document.getElementById("visitShop");

homepageBtn.addEventListener("click", ()=>{
    window.location.href = '/home';
});
visitShopBtn.addEventListener("click", ()=>{
    window.location.href = '/visitshop';
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
        navbar.replaceChild(homeIcon, homepageBtn);

        // changing VISIT SHOP text to icon
        let visitshopIcon = document.createElement('div');
        visitshopIcon.innerHTML = '<i class="fa-solid fa-route navbarItems"></i>';
        visitshopIcon.setAttribute('onclick', "window.location.href='/visitshop'");
        navbar.replaceChild(visitshopIcon, visitShopBtn);
    }
});


//attached dateBar.js code here since require() does not work
//GETTING DATE
let allDays = Array.from(document.getElementsByClassName("currentDay"));
let date = new Date();
let bookDay, bookDate, bookMonth;    //returnDate, returnDay, returnMonth

//setting real-world days info
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
allDays.forEach((day, index) => {
    day.children[0].innerHTML = daysOfWeek[(date.getDay()+index)%7].slice(0,3).toUpperCase();    //setting day
    day.children[1].innerHTML = date.getDate()+index;  //setting date
    day.children[2].innerHTML = months[date.getMonth()].slice(0,3).toUpperCase();   //setting month
});

allDays.forEach((day, index)=>
{
    day.addEventListener("click", ()=>
    {
        bookDay = day.children[0].innerHTML;
        bookDate = day.children[1].innerHTML;
        bookMonth = day.children[2].innerHTML;
        window.location.href = `?index=${index}&day=${bookDate}-${bookMonth}-${bookDay}`;
    });
});
