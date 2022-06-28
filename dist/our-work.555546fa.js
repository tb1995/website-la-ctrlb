var zoneomicsPanel = document.getElementById("zoneomics-panel");
var goldstarPanel = document.getElementById("goldstar-panel");
var luxorPanel = document.getElementById("luxor-panel");
var lorenPanel = document.getElementById("loren-panel");
var nuagePanel = document.getElementById("nuage-panel");
var container = document.getElementById("container");
var windowWidth = 0;
function clickSelectors(event, selector) {
    windowWidth = window.innerWidth;
    console.log(windowWidth);
    event.preventDefault();
    console.log(selector);
    if (selector === "zoneomics") {
        zoneomicsPanel.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
        // console.log(goldstarPanel)
        if (windowWidth < 2000) window.scrollTo({
            top: window.innerWidth * 0.0001
        });
    // else if(windowWidth > 5000) {
    //     window.scrollTo({
    //         top: window.innerWidth * 0.0001
    // })
    // }
    } else if (selector === "goldstar") {
        goldstarPanel.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        // console.log(goldstarPanel)
        if (windowWidth < 2000) window.scrollTo({
            top: window.innerWidth / 2
        });
        else if (windowWidth > 5000) console.log("here");
    } else if (selector === "luxor") {
        // console.log("testtest")
        luxorPanel.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
        // console.log(goldstarPanel)
        if (windowWidth < 2000) window.scrollTo({
            top: window.innerWidth * 0.95
        });
    } else if (selector === "loren") {
        // console.log("testtest")
        lorenPanel.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
        // console.log(goldstarPanel)
        if (windowWidth < 2000) window.scrollTo({
            top: window.innerWidth * 1.45
        });
    } else if (selector === "nuage") {
        nuagePanel.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        });
        // console.log(goldstarPanel)
        if (windowWidth < 2000) window.scrollTo({
            top: window.innerWidth * 99
        });
    }
}

//# sourceMappingURL=our-work.555546fa.js.map
