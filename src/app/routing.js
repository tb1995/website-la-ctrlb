const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};



const routes = {
    "404": "/src/pages/404.html",
    "/": "/src/pages/our-work.html",
    "/our-work": "/src/pages/our-work.html"
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path || routes[404]]

    console.log("route: " + route)
    const html = await fetch(route).then((data) => data.text())
    console.log(html)
    document.getElementById("main-page").innerHTML = html;
}


window.onpopstate = handleLocation;
window.route = route;

handleLocation();