// 
// Eduardo Applications Inc..
//
// js_frame.js
// Version: 2.0
// Create a iframe with js
//

class IFrameJS {
    constructor(src, width, height) {
        this.src = src;
        this.width = width;
        this.height = height;
    }
}

function createFrameId(site, width, height, divId){
    const ifr = document.createElement('iframe');
    ifr.style.width = width;
    ifr.style.height = height;
    ifr.src = site;

    const container = document.getElementById(divId);
    container.appendChild(ifr)
}

function createFrameClass(site, width, height, divClass){
    const ifr = document.createElement('iframe');
    ifr.style.width = width;
    ifr.style.height = height;
    ifr.src = site;

    const container = document.querySelector('.' + divClass)
    container.appendChild(ifr)
}