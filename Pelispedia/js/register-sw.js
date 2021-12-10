// chequeo si el browser soporta Service Worker

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("../service-worker.js").then((message) => {
        console.log("Esta andando profe porfa no me repruebe, en el final le juro que la rompo");
    });
} else {
    console.log("Service Worker no esta adando mi amigo")
}