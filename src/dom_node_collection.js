class DOMNodeCollection {
    constructor(coll) {
        this.coll = coll;
    }

    html(str = null){
        if(str === null){
            return this.coll[0].innerHTML;
        }else{
            this.coll.forEach((el) => {
                el.innerHTML = str;
            });
        }
    }

    empty(){
        this.html("");
        console.log(this);
    }

    append(str) {
        this.coll.forEach((el) => {
            let newStr = el.innerHTML + str;
            el.innerHTML = newStr;
        });
    }

    attr(type, val) {
        this.coll.forEach((el) => {
            el.setAttribute(type, val);
        });
    }

    addClass(val) {
        this.coll.forEach((el) => {
            let currentClass = el.getAttribute('class');

            if(currentClass !== null){
                currentClass = val + " " + currentClass;
            } else {
                currentClass = val;
            }
            el.setAttribute("class", currentClass);
        });
    }

    removeClass() {
        this.coll.forEach((el) => {
            el.setAttribute('class', "");
        });
    }

    children(){
        let kids = [];
        this.coll.forEach((parent)=>{
            kids.push(parent.children);
        });
        return kids;
    }
    parent(){
        let mom = [];
        this.coll.forEach((child)=>{
            mom.push(child.parentElement);
        });
        return mom;
    }

    find(target){
        let arr = [];
        this.coll.forEach((el)=>{
            let newNodeList = el.querySelectorAll(target);
            let newNodeArray = Array.from(newNodeList);
            arr = arr.concat(newNodeArray);
        });
        return new DOMNodeCollection(arr);
    }

    remove(){
        this.coll.forEach((el) => {
            el.parentNode.removeChild(el);
        });
    }


    on(event, cb) {
        this.coll.forEach((ele)=>{
            ele.addEventListener(event, cb);
        });
    }
    off(event) {
        this.coll.forEach((ele)=>{
            ele.removeEventListener(event);
        });
    }
}



module.exports = DOMNodeCollection;