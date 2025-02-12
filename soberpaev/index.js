// index.js
//Git controll
document.getElementById("showPerson").addEventListener("click", function() {
    var card = document.getElementById("personCard");
    if (card.classList.contains("hidden")) {
        card.classList.remove("hidden");
    } else {
        card.classList.add("hidden");
    }
});
