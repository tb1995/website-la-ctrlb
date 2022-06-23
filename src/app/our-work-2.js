var zoneomicsPanel = document.getElementById("zoneomics-panel");
var goldstarPanel = document.getElementById("goldstar-panel");
var luxorPanel = document.getElementById("luxor-panel");
var lorenPanel = document.getElementById("loren-panel");
var nuagePanel = document.getElementById("nuage-panel");



function clickSelectors(event, selector) {
    event.preventDefault()
    console.log(selector)
    if(selector === "zoneomics") {

        zoneomicsPanel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        // console.log(goldstarPanel)
        window.scrollTo({
            top: window.innerWidth * 0.0001
    })


    } else if (selector === "goldstar") {
        goldstarPanel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        // console.log(goldstarPanel)
        window.scrollTo({
            top: window.innerWidth / 2
    })

    } else if (selector === "luxor") {
        // console.log("testtest")
        luxorPanel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        // console.log(goldstarPanel)
        window.scrollTo({
            top: window.innerWidth * 0.95
    })

    } else if (selector === "loren") {
        // console.log("testtest")
        lorenPanel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        // console.log(goldstarPanel)
        window.scrollTo({
            top: window.innerWidth * 1.45
    })

    } else if (selector === "nuage") {
        // console.log("testtest")
        nuagePanel.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        // console.log(goldstarPanel)
        window.scrollTo({
            top: window.innerWidth * 2
    })

    }

}