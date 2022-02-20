document.getElementById("baseline").addEventListener("click", () => {
    document.getElementById("base").style.visibility = "visible";
    document.getElementById("lead").style.visibility = "hidden";
    document.getElementById("stack").style.visibility = "hidden";
    setTimeout(() => {
        document.getElementById("base").style.visibility = "hidden";
    }, 3500);
});

document.getElementById("leading").addEventListener("click", () => {
    document.getElementById("lead").style.visibility = "visible";
    document.getElementById("stack").style.visibility = "hidden";
    document.getElementById("base").style.visibility = "hidden";
    setTimeout(() => {
        document.getElementById("lead").style.visibility = "hidden";
    }, 3500);
});

document.getElementById("stacked").addEventListener("click", () => {
    document.getElementById("stack").style.visibility = "visible";
    setTimeout(() => {
        document.getElementById("stack").style.visibility = "hidden";
    }, 3500);
});

document.getElementById("close-btn").addEventListener("click", () => document.getElementById("base").style.visibility = "hidden")