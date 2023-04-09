// alert("Hello, JS with Custom Code");

// Clicking the menu items and change the color of menu
var menuItems =  document.querySelectorAll(".headerMenu ul li a ");

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all menu items
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        // Add 'active' class to the clicked menu item
        this.classList.add('active');
    });
});


//  CLicking the Menu Icon and Change it

var icon = document.querySelector(".mobileMenuIcon i");
icon.addEventListener("click",function (){
    icon.classList.add("hidden");
    var newIcon = document.createElement("i");
    newIcon.classList.add("fas","fa-xmark");
    this.parentElement.appendChild(newIcon);
});