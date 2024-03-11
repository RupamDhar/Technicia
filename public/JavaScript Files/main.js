let visitShopBtn = document.getElementById("visitShop");
let bookSlotBtn = document.getElementById("bookSlot");
let faqSubmit = document.getElementById("sendQueryBtn");

//onclick VISIT SHOP button
visitShopBtn.addEventListener("click", function vtBtnOnClick(){
    window.location.href = '/visitshop';
});

//onclick BOOK SLOT button
bookSlotBtn.addEventListener("click", ()=>{
    window.location.href = '/bookslot';
});

//onclick SUBMIT button
faqSubmit.addEventListener("click", ()=>{
    let query = document.getElementById("qnInput").value; 
    let phnNo = document.getElementById("phnNoSelect").value.slice(2);

    //sending message to whatsapp
    url = `https://wa.me/91${phnNo}?text=${query}`;
    window.open(url, "_blank");

    //appending query to url to update database
    window.location.href = `?query=${query}&receiverNo=${phnNo}`;
});

//resolution change listener
window.addEventListener("DOMContentLoaded", ()=>{
    if(window.innerWidth < 1081)
    {
        let navbar = document.querySelector('.navbar');

        // changing VISIT SHOP text to icon
        let visitshopIcon = document.createElement('div');
        visitshopIcon.innerHTML = '<i class="fa-solid fa-route navbarItems"></i>';
        visitshopIcon.setAttribute('onclick', "window.location.href='/visitshop'");
        navbar.replaceChild(visitshopIcon, visitShopBtn);

        //changing BOOK SLOT text to icon
        let bookslotIcon = document.createElement('div');
        bookslotIcon.innerHTML = '<i class="fa-solid fa-calendar-days navbarItems"></i>';
        bookslotIcon.setAttribute('onclick', "window.location.href='/bookslot'");
        navbar.replaceChild(bookslotIcon, bookSlotBtn);
    }
});