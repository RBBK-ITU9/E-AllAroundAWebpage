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
    window.log(window.location.pathname.substring(21, window.location.pathname.length - 5));
    let index = parseInt(window.location.pathname.substring(21, window.location.pathname.length - 5));
    console.log(index);
    //let index = parseInt(location.replace(`https://rbbk-itu9.github.io/E-AllAroundAWebpage/${location.pathname}`));
    //index++;
    //window.location = "/" + index + ".html";
}

function previous() {
    let index = parseInt(location.replace(`https://rbbk-itu9.github.io/E-AllAroundAWebpage/${location.pathname}`));
    index--;
    window.location = "/" + index + ".html";
}