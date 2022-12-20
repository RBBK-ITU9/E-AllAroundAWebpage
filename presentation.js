console.log("LOADING!");

window.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        next();
    }
});

window.addEventListener("keypress", (e) => {
    if (e.keyCode === 32) {
        next();
    }
})

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 39) {
        next();
    }
})

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
        previous();
    }
})

function next() {
    let index = parseInt(window.location.pathname.substring(21, window.location.pathname.length - 5));
    window.location = (index + 1) + ".html";
}

function previous() {
    let index = parseInt(window.location.pathname.substring(21, window.location.pathname.length - 5));
    if (index <= 0) return;
    window.location = (index - 1) + ".html";
}