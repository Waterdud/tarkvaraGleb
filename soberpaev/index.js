document.querySelectorAll(".showPerson").forEach(button => {
    button.addEventListener("click", function() {
        var targetId = this.getAttribute("data-target");
        var card = document.getElementById(targetId);
        card.classList.toggle("hidden");
    });
});
