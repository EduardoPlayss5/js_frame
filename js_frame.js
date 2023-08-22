// 
// Eduardo Applications Inc..
//
// js_frame.js
// Create a iframe with js
//

function createFrame(site, width, height, divId){
    const ifr = document.createElement('iframe')
    ifr.style.width = width
    ifr.style.height = height
    ifr.src = site

    const container = document.getElementById(divId);
    container.appendChild(ifr)
}