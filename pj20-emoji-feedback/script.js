const starEls = document.querySelectorAll(".fa-star");
const emojiEls = document.querySelectorAll(".emojis");

const updateRating = (index) => {
    starEls.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    })
    emojiEls.forEach(emojiEl => {
        emojiEl.style.transform = `translate(-${index * 50}px)`;
    })
}

starEls.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index);
    })
})