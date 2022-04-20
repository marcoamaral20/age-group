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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

function myAlert() {
    alert("Você já está nesta página !");
}

function myConfirm() {
    confirm("Pressione OK para alterar de página !")
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function (seg) {
    seg = 4
    var duration = seg * 1; // Converter para segundos
        display = document.querySelector("#timer"); 
    startTimer(duration, display); // iniciando o timer
};

const img = document.getElementById("zoom-card");

img.addEventListener("mousemove", () => {
    img.style.transform = "scale(1.3)";
})

img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
})
