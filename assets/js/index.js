function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    var burgerMenu = document.querySelector('.burger-menu');

    navMenu.classList.toggle('show');
    burgerMenu.classList.toggle('cross');
}


// document.addEventListener("DOMContentLoaded", function () {
//     var eventList = document.getElementById("event-list");
//     var showEventsButton = document.getElementById("showEvents");
//     var hideEventsButton = document.getElementById("hideEvents");

//     if (eventList && showEventsButton && hideEventsButton) {
//         var allEvents = eventList.querySelectorAll("li");
//         var maxVisibleEvents = 4;

//         // Hide all events initially
//         for (var i = maxVisibleEvents; i < allEvents.length; i++) {
//             allEvents[i].style.display = "none";
//         }

//         // Show more or hide events on button click
//         showEventsButton.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent the default anchor behavior
//             for (var i = maxVisibleEvents; i < allEvents.length; i++) {
//                 allEvents[i].style.display = "block";
//             }
//             showEventsButton.style.display = "none";
//             hideEventsButton.style.display = "block";
//         });

//         hideEventsButton.addEventListener("click", function (event) {
//             event.preventDefault(); // Prevent the default anchor behavior
//             for (var i = maxVisibleEvents; i < allEvents.length; i++) {
//                 allEvents[i].style.display = "none";
//             }
//             showEventsButton.style.display = "block";
//             hideEventsButton.style.display = "none";
//         });
//     }
// });
