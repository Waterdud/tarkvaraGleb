document.querySelectorAll('button').forEach((button, index) => {
    button.addEventListener("click", function() {
        const card = document.getElementById(`personCard${index + 1}`);

        if (card.classList.contains("hidden")) {
            card.classList.remove("hidden");
            card.style.opacity = 0;
            setTimeout(() => {
                card.style.transition = "opacity 0.5s";
                card.style.opacity = 1;
            }, 10);
        } else {
            card.style.transition = "opacity 0.5s";
            card.style.opacity = 0;
            setTimeout(() => {
                card.classList.add("hidden");
            }, 500);
        }
    });
});
