var btn = document.getElementById("discover-btn");
var workDiv = document.getElementById("work");
btn.addEventListener("click", function() {
    //Do something here
    workDiv.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    });
    console.log(workDiv);
    window.scrollTo({
        top: workDiv.offsetTop
    });
}, true);

//# sourceMappingURL=index.5e54d35e.js.map
