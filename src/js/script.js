// global variables

// config
let data = {
    "script": document.currentScript,
    "speed": parseInt(document.currentScript.getAttribute("speed")) || 0,
    "loop": parseInt(document.currentScript.getAttribute("loop")) || 50000,
    "amount": parseInt(document.currentScript.getAttribute("amount")) || 100,
    "distance": parseInt(document.currentScript.getAttribute("distance")) || 5,
    "penThickness": parseInt(document.currentScript.getAttribute("penThickness")) || 1,
    "reset": document.currentScript.getAttribute("reset") === "true" ? true : false,
    "resetTime": parseInt(document.currentScript.getAttribute("resetTime")) || 250,
    "backgroundColor": document.currentScript.getAttribute("backgroundColor") || "black",
    "penColor": document.currentScript.getAttribute("penColor") || "pink",
    "center": (document.currentScript.getAttribute("center") === 'true') ? true : false,
    "name": document.currentScript.getAttribute("name") || "test",
    "storage": {}
};
  
let currentLoop = data.loop;
let body;
let html;
let canvas;
let ctx;
let direction;
  
// the animation itself
async function animateCanvas(id, count) {
    // init 
    if (data.storage[id] == undefined) {
        data.storage[id] = {
            "oldCords": {
                "x": null,
                "y": null
            },
            "count": 0,
            "direction": Math.floor(Math.random() * 4),
            "loop": data.loop
        };
    }

    if (data.storage[id].oldCords.x == null || data.storage[id].oldCords.y == null){
        if (data.center){
            data.storage[id].oldCords ={
                "x": (data.width / 2),
                "y": (data.height / 2)
            }
        } else {
            data.storage[id].oldCords ={
                "x": Math.floor(Math.random() * data.width),
                "y": Math.floor(Math.random() * data.height)
            }
        }
    }

    ctx.strokeStyle = data.penColor;
    ctx.lineWidth = data.penThickness;
  
    // old cords
    ctx.beginPath();
    ctx.moveTo(data.storage[id].oldCords.x, data.storage[id].oldCords.y);

    if (data.storage[id].count > Math.floor(Math.random() * 15) && data.storage[id].count > 5){
        data.storage[id].direction = Math.floor(Math.random() * 4);

        data.storage[id].count = 0;
    } else {
        data.storage[id].count += 1;
    }
  
    switch(data.storage[id].direction){
        case 0:
            data.storage[id].oldCords.x += data.distance;
    
            break;
        case 1:
            data.storage[id].oldCords.x -= data.distance;
  
            break;
        case 2:
            data.storage[id].oldCords.y += data.distance;
  
            break;
        case 3:
            data.storage[id].oldCords.y -= data.distance;
  
            break;
    }
  
    ctx.lineTo(data.storage[id].oldCords.x, data.storage[id].oldCords.y);
    ctx.stroke(); 
  
    ctx.save();

    data.storage[id].loop -= 1;
    if (data.storage[id].loop < 0 && data.reset){
        reset();
    } else if (data.storage[id].loop < 0){
        clearInterval(data.loops[count]);
    }
}
  
// a reset button
function reset(){
    // clear the loops
    data.loops.forEach(element => {
        clearInterval(element);
    });

    data.storage = {};

    // reset the canvas
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    html.childNodes.forEach(child => {
        if (child.tagName == "CANVAS"){
            html.removeChild(child);
        }
    });

    startup();
}

// the basic startup
async function startup() {
    // loading variables
    body = document.body;
    html = body.parentElement;
    canvas = document.createElement("Canvas");
    ctx = canvas.getContext("2d");

    // remove background image
    html.style.backgroundImage = null;
    body.style.backgroundImage = null;
  
    data.width = window.innerWidth;
    data.height = window.innerHeight;
    data.count = 0;
    direction = Math.floor(Math.random() * 4);
  
    // sizing canvas
    canvas.width = data.width;
    canvas.height = data.height;

    canvas.style.backgroundColor = data.backgroundColor;
    canvas.style.position = "absolute";
    canvas.style.display = "block";
    canvas.style.zIndex = "-10";
  
    // adding children
    html.insertBefore(canvas, body);

    // test
    let loop = {
        total: data.amount,
        count: 0,
        name: data.name
    }

    data.loops = [];

    while (loop.total >= 0){
        loop.count += 1;
        data.loops.push(setInterval(animateCanvas, data.speed, `${loop.name}${loop.count}`, data.loops.length));
        loop.total -= 1;
    }

}
  
// this event listener will run when the page is loaded so the script can be correctly placed in the header
window.addEventListener("load", startup);

// 
window.addEventListener("resize", reset);

if (data.reset) setInterval(reset, data.resetTime);