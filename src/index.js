const DOMNodes = require('./dom_node_collection.js');


window.$l = function(arg){
    const firstChar = arg[0];
    let selected;

    switch (firstChar) {
        case '#':
            arg = arg.slice(1,arg.length);
            selected = document.getElementById(arg);
            break;
        case '.':
            arg = arg.slice(1, arg.length);
            selected = document.getElementsByClassName(arg);
            selected = Array.prototype.slice.call(selected);
            break;
        default:
            selected = selected = document.querySelectorAll(arg);
            slected = Array.prototype.slice(selected);
        }
    const arr = [];

    if (selected instanceof HTMLElement) {
        return new DOMNodes([selected]);
    } else {
        selected.forEach((el) => {
            arr.push(el);
        });
    }
    return new DOMNodes(arr);
};
window.$l.prototype.remove = function(){

};
window.$l.prototype.empty = function(){

};
window.$l.prototype.addClass = function(){

};
window.$l.prototype.removeClass = function(){

};
window.$l.prototype.html = function(){

};
window.$l.prototype.find = function(){

};
window.$l.prototype.children = function(){

};
window.$l.prototype.parenr = function(){

};


console.log('js loaded');