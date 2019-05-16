/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(coll) {\n        this.coll = coll;\n    }\n\n    html(str = null){\n        if(str === null){\n            return this.coll[0].innerHTML;\n        }else{\n            this.coll.forEach((el) => {\n                el.innerHTML = str;\n            });\n        }\n    }\n\n    empty(){\n        this.html(\"\");\n        console.log(this);\n    }\n\n    append(str) {\n        this.coll.forEach((el) => {\n            let newStr = el.innerHTML + str;\n            el.innerHTML = newStr;\n        });\n    }\n\n    attr(type, val) {\n        this.coll.forEach((el) => {\n            el.setAttribute(type, val);\n        });\n    }\n\n    addClass(val) {\n        this.coll.forEach((el) => {\n            let currentClass = el.getAttribute('class');\n\n            if(currentClass !== null){\n                currentClass = val + \" \" + currentClass;\n            } else {\n                currentClass = val;\n            }\n            el.setAttribute(\"class\", currentClass);\n        });\n    }\n\n    removeClass() {\n        this.coll.forEach((el) => {\n            el.setAttribute('class', \"\");\n        });\n    }\n\n    children(){\n        let kids = [];\n        this.coll.forEach((parent)=>{\n            kids.push(parent.children);\n        });\n        return kids;\n    }\n    parent(){\n        let mom = [];\n        this.coll.forEach((child)=>{\n            mom.push(child.parentElement);\n        });\n        return mom;\n    }\n\n    find(target){\n        let arr = [];\n        this.coll.forEach((el)=>{\n            let newNodeList = el.querySelectorAll(target);\n            let newNodeArray = Array.from(newNodeList);\n            arr = arr.concat(newNodeArray);\n        });\n        return new DOMNodeCollection(arr);\n    }\n\n    remove(){\n        this.coll.forEach((el) => {\n            el.parentNode.removeChild(el);\n        });\n    }\n\n\n    on(event, cb) {\n        this.coll.forEach((ele)=>{\n            ele.addEventListener(event, cb);\n        });\n    }\n    off(event) {\n        this.coll.forEach((ele)=>{\n            ele.removeEventListener(event);\n        });\n    }\n}\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodes = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n\nwindow.$l = function(arg){\n    const firstChar = arg[0];\n    let selected;\n\n    switch (firstChar) {\n        case '#':\n            arg = arg.slice(1,arg.length);\n            selected = document.getElementById(arg);\n            break;\n        case '.':\n            arg = arg.slice(1, arg.length);\n            selected = document.getElementsByClassName(arg);\n            selected = Array.prototype.slice.call(selected);\n            break;\n        default:\n            selected = selected = document.querySelectorAll(arg);\n            slected = Array.prototype.slice(selected);\n        }\n    const arr = [];\n\n    if (selected instanceof HTMLElement) {\n        return new DOMNodes([selected]);\n    } else {\n        selected.forEach((el) => {\n            arr.push(el);\n        });\n    }\n    return new DOMNodes(arr);\n};\nwindow.$l.prototype.remove = function(){\n\n};\nwindow.$l.prototype.empty = function(){\n\n};\nwindow.$l.prototype.addClass = function(){\n\n};\nwindow.$l.prototype.removeClass = function(){\n\n};\nwindow.$l.prototype.html = function(){\n\n};\nwindow.$l.prototype.find = function(){\n\n};\nwindow.$l.prototype.children = function(){\n\n};\nwindow.$l.prototype.parenr = function(){\n\n};\n\n\nconsole.log('js loaded');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });