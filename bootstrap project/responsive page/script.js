
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the 'selected' class when a card is clicked
        card.classList.toggle('selected');
    });
});
