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
    console.log(window.location);
    console.log(window.location.pathname);
    //let index = parseInt(location.replace(`https://rbbk-itu9.github.io/E-AllAroundAWebpage/${location.pathname}`));
    //index++;
    //window.location = "/" + index + ".html";
}

function previous() {
    let index = parseInt(location.replace(`https://rbbk-itu9.github.io/E-AllAroundAWebpage/${location.pathname}`));
    index--;
    window.location = "/" + index + ".html";
}