document.querySelectorAll('.select-group-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling

        button.classList.toggle('select-group-button--active');

        if (button.classList.contains('select-group-button--active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = 0;
        }
    })
})