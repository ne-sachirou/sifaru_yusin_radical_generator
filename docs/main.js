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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.py");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./__target__/main.js":
/*!****************************!*\
  !*** ./__target__/main.js ***!
  \****************************/
/*! exports provided: MAX_DEKUGA_LENGTH, append_new_deku, on_click_kekure_deku, on_dom_content_loaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_DEKUGA_LENGTH", function() { return MAX_DEKUGA_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append_new_deku", function() { return append_new_deku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on_click_kekure_deku", function() { return on_click_kekure_deku; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on_dom_content_loaded", function() { return on_dom_content_loaded; });
/* harmony import */ var _org_transcrypt_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org.transcrypt.__runtime__.js */ "./__target__/org.transcrypt.__runtime__.js");
/* harmony import */ var _typing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typing.js */ "./__target__/typing.js");
/* harmony import */ var _sifaru_yusin_deku_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sifaru_yusin.deku.js */ "./__target__/sifaru_yusin.deku.js");
// Transcrypt'ed from Python, 2020-04-15 00:54:28



var __name__ = '__main__';
var MAX_DEKUGA_LENGTH = 20;
var append_new_deku = function (list_element, new_item_element) {
	if (list_element.childElementCount >= MAX_DEKUGA_LENGTH) {
		for (var i = 19; i < list_element.childElementCount; i++) {
			list_element.removeChild (list_element.children [i]);
		}
	}
	if (list_element.hasChildNodes ()) {
		list_element.insertBefore (new_item_element, list_element.firstChild);
	}
	else {
		list_element.appendChild (new_item_element);
	}
};
var on_click_kekure_deku = function (event) {
	var new_item_element = document.createElement ('li');
	new_item_element.textContent = Object(_sifaru_yusin_deku_js__WEBPACK_IMPORTED_MODULE_2__["kekure"]) ();
	var list_element = document.getElementById ('dEkuga');
	window.requestAnimationFrame ((function __lambda__ (now) {
		return append_new_deku (list_element, new_item_element);
	}));
};
var on_dom_content_loaded = function (event) {
	document.getElementById ('kekurE_dEku').addEventListener ('click', on_click_kekure_deku);
};
if (__name__ == '__main__') {
	window.addEventListener ('DOMContentLoaded', on_dom_content_loaded);
}

//# sourceMappingURL=main.map

/***/ }),

/***/ "./__target__/org.transcrypt.__runtime__.js":
/*!**************************************************!*\
  !*** ./__target__/org.transcrypt.__runtime__.js ***!
  \**************************************************/
/*! exports provided: __envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __super__, property, __setproperty__, assert, __mergekwargtrans__, __mergefields__, __withblock__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, pow, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, __Terminal__, __terminal__, print, input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__envir__", function() { return __envir__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__nest__", function() { return __nest__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__init__", function() { return __init__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__proxy__", function() { return __proxy__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__get__", function() { return __get__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getcm__", function() { return __getcm__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getsm__", function() { return __getsm__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "py_metatype", function() { return py_metatype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__class__", function() { return __class__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__pragma__", function() { return __pragma__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__call__", function() { return __call__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__kwargtrans__", function() { return __kwargtrans__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__super__", function() { return __super__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__setproperty__", function() { return __setproperty__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__mergekwargtrans__", function() { return __mergekwargtrans__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__mergefields__", function() { return __mergefields__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__withblock__", function() { return __withblock__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dir", function() { return dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setattr", function() { return setattr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getattr", function() { return getattr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasattr", function() { return hasattr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delattr", function() { return delattr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__in__", function() { return __in__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__specialattrib__", function() { return __specialattrib__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__i__", function() { return __i__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__k__", function() { return __k__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__t__", function() { return __t__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float", function() { return float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "py_typeof", function() { return py_typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "issubclass", function() { return issubclass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isinstance", function() { return isinstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callable", function() { return callable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repr", function() { return repr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chr", function() { return chr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ord", function() { return ord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__jsUsePyNext__", function() { return __jsUsePyNext__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__pyUseJsNext__", function() { return __pyUseJsNext__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "py_iter", function() { return py_iter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "py_next", function() { return py_next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PyIterator__", function() { return __PyIterator__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__JsIterator__", function() { return __JsIterator__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "py_reversed", function() { return py_reversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerate", function() { return enumerate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepcopy", function() { return deepcopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple", function() { return tuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytearray", function() { return bytearray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytes", function() { return bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dict", function() { return dict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__jsmod__", function() { return __jsmod__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__mod__", function() { return __mod__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__pow__", function() { return __pow__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__neg__", function() { return __neg__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__matmul__", function() { return __matmul__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__mul__", function() { return __mul__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__truediv__", function() { return __truediv__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__floordiv__", function() { return __floordiv__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__add__", function() { return __add__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__sub__", function() { return __sub__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__lshift__", function() { return __lshift__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rshift__", function() { return __rshift__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__or__", function() { return __or__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__xor__", function() { return __xor__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__and__", function() { return __and__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__eq__", function() { return __eq__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ne__", function() { return __ne__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__lt__", function() { return __lt__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__le__", function() { return __le__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__gt__", function() { return __gt__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ge__", function() { return __ge__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__imatmul__", function() { return __imatmul__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ipow__", function() { return __ipow__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ijsmod__", function() { return __ijsmod__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__imod__", function() { return __imod__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__imul__", function() { return __imul__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__idiv__", function() { return __idiv__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__iadd__", function() { return __iadd__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__isub__", function() { return __isub__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ilshift__", function() { return __ilshift__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__irshift__", function() { return __irshift__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ior__", function() { return __ior__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ixor__", function() { return __ixor__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__iand__", function() { return __iand__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getitem__", function() { return __getitem__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__setitem__", function() { return __setitem__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getslice__", function() { return __getslice__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__setslice__", function() { return __setslice__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseException", function() { return BaseException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception", function() { return Exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IterableError", function() { return IterableError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopIteration", function() { return StopIteration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueError", function() { return ValueError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyError", function() { return KeyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertionError", function() { return AssertionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotImplementedError", function() { return NotImplementedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexError", function() { return IndexError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeError", function() { return AttributeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "py_TypeError", function() { return py_TypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWarning", function() { return UserWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeprecationWarning", function() { return DeprecationWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuntimeWarning", function() { return RuntimeWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__sort__", function() { return __sort__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sorted", function() { return sorted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divmod", function() { return divmod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Terminal__", function() { return __Terminal__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__terminal__", function() { return __terminal__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
// Transcrypt'ed from Python, 2020-04-14 23:11:12
var __name__ = 'org.transcrypt.__runtime__';
var __envir__ = {};
__envir__.interpreter_name = 'python';
__envir__.transpiler_name = 'transcrypt';
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = '3.7.16';

function __nest__ (headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split ('.');
        var firstNewIndex = tailChain.length;
        for (var index = 0; index < tailChain.length; index++) {
            if (!current.hasOwnProperty (tailChain [index])) {
                firstNewIndex = index;
                break;
            }
            current = current [tailChain [index]];
        }
        for (var index = firstNewIndex; index < tailChain.length; index++) {
            current [tailChain [index]] = {};
            current = current [tailChain [index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames (value)) {
        Object.defineProperty (current, attrib, {
            get () {return value [attrib];},
            enumerable: true,
            configurable: true
        });
    }
};
function __init__ (module) {
    if (!module.__inited__) {
        module.__all__.__init__ (module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
};
var __proxy__ = false;
function __get__ (self, func, quotedFuncName) {
    if (self) {
        if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
            if (quotedFuncName) {
                Object.defineProperty (self, quotedFuncName, {
                    value: function () {
                        var args = [] .slice.apply (arguments);
                        return func.apply (null, [self] .concat (args));
                    },
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
        else {
            return func;
        }
    }
    else {
        return func;
    }
};
function __getcm__ (self, func, quotedFuncName) {
    if (self.hasOwnProperty ('__class__')) {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [self.__class__] .concat (args));
        };
    }
    else {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [self] .concat (args));
        };
    }
};
function __getsm__ (self, func, quotedFuncName) {
    return func;
};
var py_metatype = {
    __name__: 'type',
    __bases__: [],
    __new__: function (meta, name, bases, attribs) {
        var cls = function () {
            var args = [] .slice.apply (arguments);
            return cls.__new__ (args);
        };
        for (var index = bases.length - 1; index >= 0; index--) {
            var base = bases [index];
            for (var attrib in base) {
                var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (base)) {
                let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
        cls.__bases__ = bases;
        for (var attrib in attribs) {
            var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
            Object.defineProperty (cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols (attribs)) {
            let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
            Object.defineProperty (cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
var object = {
    __init__: function (self) {},
    __metaclass__: py_metatype,
    __name__: 'object',
    __bases__: [],
    __new__: function (args) {
        var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
        if ('__getattr__' in this || '__setattr__' in this) {
            instance = new Proxy (instance, {
                get: function (target, name) {
                    let result = target [name];
                    if (result == undefined) {
                        return target.__getattr__ (name);
                    }
                    else {
                        return result;
                    }
                },
                set: function (target, name, value) {
                    try {
                        target.__setattr__ (name, value);
                    }
                    catch (exception) {
                        target [name] = value;
                    }
                    return true;
                }
            })
        }
        this.__init__.apply (null, [instance] .concat (args));
        return instance;
    }
};
function __class__ (name, bases, attribs, meta) {
    if (meta === undefined) {
        meta = bases [0] .__metaclass__;
    }
    return meta.__new__ (meta, name, bases, attribs);
};
function __pragma__ () {};
function __call__ (/* <callee>, <this>, <params>* */) {
    var args = [] .slice.apply (arguments);
    if (typeof args [0] == 'object' && '__call__' in args [0]) {
        return args [0] .__call__ .apply (args [1], args.slice (2));
    }
    else {
        return args [0] .apply (args [1], args.slice (2));
    }
};
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {__file__: ''};
var __except__ = null;
function __kwargtrans__ (anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
function __super__ (aClass, methodName) {
    for (let base of aClass.__bases__) {
        if (methodName in base) {
           return base [methodName];
        }
    }
    throw new Exception ('Superclass method not found');
}
function property (getter, setter) {
    if (!setter) {
        setter = function () {};
    }
    return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
}
function __setproperty__ (anObject, name, descriptor) {
    if (!anObject.hasOwnProperty (name)) {
        Object.defineProperty (anObject, name, descriptor);
    }
}
function assert (condition, message) {
    if (!condition) {
        throw AssertionError (message, new Error ());
    }
}
function __mergekwargtrans__ (object0, object1) {
    var result = {};
    for (var attrib in object0) {
        result [attrib] = object0 [attrib];
    }
    for (var attrib in object1) {
        result [attrib] = object1 [attrib];
    }
    return result;
};
function __mergefields__ (targetClass, sourceClass) {
    let fieldNames = ['__reprfields__', '__comparefields__', '__initfields__']
    if (sourceClass [fieldNames [0]]) {
        if (targetClass [fieldNames [0]]) {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set ([...targetClass [fieldName], ...sourceClass [fieldName]]);
            }
        }
        else {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set (sourceClass [fieldName]);
            }
        }
    }
}
function __withblock__ (manager, statements) {
    if (hasattr (manager, '__enter__')) {
        try {
            manager.__enter__ ();
            statements ();
            manager.__exit__ ();
        }
        catch (exception) {
            if (! (manager.__exit__ (exception.name, exception, exception.stack))) {
                throw exception;
            }
        }
    }
    else {
        statements ();
        manager.close ();
    }
};
function dir (obj) {
    var aList = [];
    for (var aKey in obj) {
        aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
    }
    aList.sort ();
    return aList;
};
function setattr (obj, name, value) {
    obj [name] = value;
};
function getattr (obj, name) {
    return name in obj ? obj [name] : obj ['py_' + name];
};
function hasattr (obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    }
    catch (exception) {
        return false;
    }
};
function delattr (obj, name) {
    if (name in obj) {
        delete obj [name];
    }
    else {
        delete obj ['py_' + name];
    }
};
function __in__ (element, container) {
    if (container === undefined || container === null) {
        return false;
    }
    if (container.__contains__ instanceof Function) {
        return container.__contains__ (element);
    }
    else {
        return (
            container.indexOf ?
            container.indexOf (element) > -1 :
            container.hasOwnProperty (element)
        );
    }
};
function __specialattrib__ (attrib) {
    return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
};
function len (anObject) {
    if (anObject === undefined || anObject === null) {
        return 0;
    }
    if (anObject.__len__ instanceof Function) {
        return anObject.__len__ ();
    }
    if (anObject.length !== undefined) {
        return anObject.length;
    }
    var length = 0;
    for (var attr in anObject) {
        if (!__specialattrib__ (attr)) {
            length++;
        }
    }
    return length;
};
function __i__ (any) {
    return py_typeof (any) == dict ? any.py_keys () : any;
}
function __k__ (keyed, key) {
    var result = keyed [key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array)
            if (key == +key && key >= 0 && keyed.length > key)
                return result;
            else
                throw IndexError (key, new Error());
        else
            throw KeyError (key, new Error());
    }
    return result;
}
function __t__ (target) {
    return (
        target === undefined || target === null ? false :
        ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
        target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
        target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
        target instanceof Function ? target :
        len (target) !== 0 ? target :
        false
    );
}
function float (any) {
    if (any == 'inf') {
        return Infinity;
    }
    else if (any == '-inf') {
        return -Infinity;
    }
    else if (any == 'nan') {
        return NaN;
    }
    else if (isNaN (parseFloat (any))) {
        if (any === false) {
            return 0;
        }
        else if (any === true) {
            return 1;
        }
        else {
            throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
        }
    }
    else {
        return +any;
    }
};
float.__name__ = 'float';
float.__bases__ = [object];
function int (any) {
    return float (any) | 0
};
int.__name__ = 'int';
int.__bases__ = [object];
function bool (any) {
    return !!__t__ (any);
};
bool.__name__ = 'bool';
bool.__bases__ = [int];
function py_typeof (anObject) {
    var aType = typeof anObject;
    if (aType == 'object') {
        try {
            return '__class__' in anObject ? anObject.__class__ : object;
        }
        catch (exception) {
            return aType;
        }
    }
    else {
        return (
            aType == 'boolean' ? bool :
            aType == 'string' ? str :
            aType == 'number' ? (anObject % 1 == 0 ? int : float) :
            null
        );
    }
};
function issubclass (aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo) {
            if (issubclass (aClass, aClass2)) {
                return true;
            }
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) {
            return true;
        }
        else {
            var bases = [].slice.call (aClass2.__bases__);
            while (bases.length) {
                aClass2 = bases.shift ();
                if (aClass2 == classinfo) {
                    return true;
                }
                if (aClass2.__bases__.length) {
                    bases = [].slice.call (aClass2.__bases__).concat (bases);
                }
            }
            return false;
        }
    }
    catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
};
function isinstance (anObject, classinfo) {
    try {
        return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
    }
    catch (exception) {
        return issubclass (py_typeof (anObject), classinfo);
    }
};
function callable (anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
};
function repr (anObject) {
    try {
        return anObject.__repr__ ();
    }
    catch (exception) {
        try {
            return anObject.__str__ ();
        }
        catch (exception) {
            try {
                if (anObject == null) {
                    return 'None';
                }
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for (var attrib in anObject) {
                        if (!__specialattrib__ (attrib)) {
                            if (attrib.isnumeric ()) {
                                var attribRepr = attrib;
                            }
                            else {
                                var attribRepr = '\'' + attrib + '\'';
                            }
                            if (comma) {
                                result += ', ';
                            }
                            else {
                                comma = true;
                            }
                            result += attribRepr + ': ' + repr (anObject [attrib]);
                        }
                    }
                    result += '}';
                    return result;
                }
                else {
                    return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                }
            }
            catch (exception) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
};
function chr (charCode) {
    return String.fromCharCode (charCode);
};
function ord (aChar) {
    return aChar.charCodeAt (0);
};
function max (nrOrSeq) {
    return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
};
function min (nrOrSeq) {
    return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
};
var abs = Math.abs;
function round (number, ndigits) {
    if (ndigits) {
        var scale = Math.pow (10, ndigits);
        number *= scale;
    }
    var rounded = Math.round (number);
    if (rounded - number == 0.5 && rounded % 2) {
        rounded -= 1;
    }
    if (ndigits) {
        rounded /= scale;
    }
    return rounded;
};
function __jsUsePyNext__ () {
    try {
        var result = this.__next__ ();
        return {value: result, done: false};
    }
    catch (exception) {
        return {value: undefined, done: true};
    }
}
function __pyUseJsNext__ () {
    var result = this.next ();
    if (result.done) {
        throw StopIteration (new Error ());
    }
    else {
        return result.value;
    }
}
function py_iter (iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('selector' in iterable) {
        var result = list (iterable) .__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('next' in iterable) {
        var result = iterable
        if (! ('__next__' in result)) {
            result.__next__ = __pyUseJsNext__;
        }
    }
    else if (Symbol.iterator in iterable) {
        var result = iterable [Symbol.iterator] ();
        result.__next__ = __pyUseJsNext__;
    }
    else {
        throw IterableError (new Error ());
    }
    result [Symbol.iterator] = function () {return result;};
    return result;
}
function py_next (iterator) {
    try {
        var result = iterator.__next__ ();
    }
    catch (exception) {
        var result = iterator.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    if (result == undefined) {
        throw StopIteration (new Error ());
    }
    else {
        return result;
    }
}
function __PyIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) {
        return this.iterable [this.index++];
    }
    else {
        throw StopIteration (new Error ());
    }
};
function __JsIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function () {
    if (this.index < this.iterable.py_keys.length) {
        return {value: this.index++, done: false};
    }
    else {
        return {value: undefined, done: true};
    }
};
function py_reversed (iterable) {
    iterable = iterable.slice ();
    iterable.reverse ();
    return iterable;
};
function zip () {
    var args = [] .slice.call (arguments);
    for (var i = 0; i < args.length; i++) {
        if (typeof args [i] == 'string') {
            args [i] = args [i] .split ('');
        }
        else if (!Array.isArray (args [i])) {
            args [i] = Array.from (args [i]);
        }
    }
    var shortest = args.length == 0 ? [] : args.reduce (
        function (array0, array1) {
            return array0.length < array1.length ? array0 : array1;
        }
    );
    return shortest.map (
        function (current, index) {
            return args.map (
                function (current) {
                    return current [index];
                }
            );
        }
    );
};
function range (start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};
function any (iterable) {
    for (let item of iterable) {
        if (bool (item)) {
            return true;
        }
    }
    return false;
}
function all (iterable) {
    for (let item of iterable) {
        if (! bool (item)) {
            return false;
        }
    }
    return true;
}
function sum (iterable) {
    let result = 0;
    for (let item of iterable) {
        result += item;
    }
    return result;
}
function enumerate (iterable) {
    return zip (range (len (iterable)), iterable);
}
function copy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = anObject [attrib];
            }
        }
        return result;
    }
}
function deepcopy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = deepcopy (anObject [attrib]);
            }
        }
        return result;
    }
}
function list (iterable) {
    let instance = iterable ? Array.from (iterable) : [];
    return instance;
}
Array.prototype.__class__ = list;
list.__name__ = 'list';
list.__bases__ = [object];
Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
Array.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    else if (stop > this.length) {
        stop = this.length;
    }
    if (step == 1) {
        return Array.prototype.slice.call(this, start, stop);
    }
    let result = list ([]);
    for (let index = start; index < stop; index += step) {
        result.push (this [index]);
    }
    return result;
};
Array.prototype.__setslice__ = function (start, stop, step, source) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    if (step == null) {
        Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
    }
    else {
        let sourceIndex = 0;
        for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
            this [targetIndex] = source [sourceIndex++];
        }
    }
};
Array.prototype.__repr__ = function () {
    if (this.__class__ == set && !this.length) {
        return 'set()';
    }
    let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
    for (let index = 0; index < this.length; index++) {
        if (index) {
            result += ', ';
        }
        result += repr (this [index]);
    }
    if (this.__class__ == tuple && this.length == 1) {
        result += ',';
    }
    result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function (element) {
    this.push (element);
};
Array.prototype.py_clear = function () {
    this.length = 0;
};
Array.prototype.extend = function (aList) {
    this.push.apply (this, aList);
};
Array.prototype.insert = function (index, element) {
    this.splice (index, 0, element);
};
Array.prototype.remove = function (element) {
    let index = this.indexOf (element);
    if (index == -1) {
        throw ValueError ("list.remove(x): x not in list", new Error ());
    }
    this.splice (index, 1);
};
Array.prototype.index = function (element) {
    return this.indexOf (element);
};
Array.prototype.py_pop = function (index) {
    if (index == undefined) {
        return this.pop ();
    }
    else {
        return this.splice (index, 1) [0];
    }
};
Array.prototype.py_sort = function () {
    __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
};
Array.prototype.__add__ = function (aList) {
    return list (this.concat (aList));
};
Array.prototype.__mul__ = function (scalar) {
    let result = this;
    for (let i = 1; i < scalar; i++) {
        result = result.concat (this);
    }
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
function tuple (iterable) {
    let instance = iterable ? [] .slice.apply (iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = 'tuple';
tuple.__bases__ = [object];
function set (iterable) {
    let instance = [];
    if (iterable) {
        for (let index = 0; index < iterable.length; index++) {
            instance.add (iterable [index]);
        }
    }
    instance.__class__ = set;
    return instance;
}
set.__name__ = 'set';
set.__bases__ = [object];
Array.prototype.__bindexOf__ = function (element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while (mindex <= maxdex) {
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this [index] + '';
        if (middle < element) {
            mindex = index + 1;
        }
        else if (middle > element) {
            maxdex = index - 1;
        }
        else {
            return index;
        }
    }
    return -1;
};
Array.prototype.add = function (element) {
    if (this.indexOf (element) == -1) {
        this.push (element);
    }
};
Array.prototype.discard = function (element) {
    var index = this.indexOf (element);
    if (index != -1) {
        this.splice (index, 1);
    }
};
Array.prototype.isdisjoint = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issuperset = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) == -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issubset = function (other) {
    return set (other.slice ()) .issuperset (this);
};
Array.prototype.union = function (other) {
    let result = set (this.slice () .sort ());
    for (let i = 0; i < other.length; i++) {
        if (result.__bindexOf__ (other [i]) == -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.intersection = function (other) {
    this.sort ();
    let result = set ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.difference = function (other) {
    let sother = set (other.slice () .sort ());
    let result = set ();
    for (let i = 0; i < this.length; i++) {
        if (sother.__bindexOf__ (this [i]) == -1) {
            result.push (this [i]);
        }
    }
    return result;
};
Array.prototype.symmetric_difference = function (other) {
    return this.union (other) .difference (this.intersection (other));
};
Array.prototype.py_update = function () {
    let updated = [] .concat.apply (this.slice (), arguments) .sort ();
    this.py_clear ();
    for (let i = 0; i < updated.length; i++) {
        if (updated [i] != updated [i - 1]) {
            this.push (updated [i]);
        }
    }
};
Array.prototype.__eq__ = function (other) {
    if (this.length != other.length) {
        return false;
    }
    if (this.__class__ == set) {
        this.sort ();
        other.sort ();
    }
    for (let i = 0; i < this.length; i++) {
        if (this [i] != other [i]) {
            return false;
        }
    }
    return true;
};
Array.prototype.__ne__ = function (other) {
    return !this.__eq__ (other);
};
Array.prototype.__le__ = function (other) {
    if (this.__class__ == set) {
        return this.issubset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] > other [i]) {
                return false;
            }
            else if (this [i] < other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__ge__ = function (other) {
    if (this.__class__ == set) {
        return this.issuperset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] < other [i]) {
                return false;
            }
            else if (this [i] > other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__lt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issubset (other) && !this.issuperset (other) :
        !this.__ge__ (other)
    );
};
Array.prototype.__gt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issuperset (other) && !this.issubset (other) :
        !this.__le__ (other)
    );
};
function bytearray (bytable, encoding) {
    if (bytable == undefined) {
        return new Uint8Array (0);
    }
    else {
        let aType = py_typeof (bytable);
        if (aType == int) {
            return new Uint8Array (bytable);
        }
        else if (aType == str) {
            let aBytes = new Uint8Array (len (bytable));
            for (let i = 0; i < len (bytable); i++) {
                aBytes [i] = bytable.charCodeAt (i);
            }
            return aBytes;
        }
        else if (aType == list || aType == tuple) {
            return new Uint8Array (bytable);
        }
        else {
            throw py_TypeError;
        }
    }
}
var bytes = bytearray;
Uint8Array.prototype.__add__ = function (aBytes) {
    let result = new Uint8Array (this.length + aBytes.length);
    result.set (this);
    result.set (aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function (scalar) {
    let result = new Uint8Array (scalar * this.length);
    for (let i = 0; i < scalar; i++) {
        result.set (this, i * this.length);
    }
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
function str (stringable) {
    if (typeof stringable === 'number')
        return stringable.toString();
    else {
        try {
            return stringable.__str__ ();
        }
        catch (exception) {
            try {
                return repr (stringable);
            }
            catch (exception) {
                return String (stringable);
            }
        }
    }
};
String.prototype.__class__ = str;
str.__name__ = 'str';
str.__bases__ = [object];
String.prototype.__iter__ = function () {new __PyIterator__ (this);};
String.prototype.__repr__ = function () {
    return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
};
String.prototype.__str__ = function () {
    return this;
};
String.prototype.capitalize = function () {
    return this.charAt (0).toUpperCase () + this.slice (1);
};
String.prototype.endswith = function (suffix) {
    if (suffix instanceof Array) {
        for (var i=0;i<suffix.length;i++) {
            if (this.slice (-suffix[i].length) == suffix[i])
                return true;
        }
    } else
        return suffix == '' || this.slice (-suffix.length) == suffix;
    return false;
};
String.prototype.find = function (sub, start) {
    return this.indexOf (sub, start);
};
String.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    var result = '';
    if (step == 1) {
        result = this.substring (start, stop);
    }
    else {
        for (var index = start; index < stop; index += step) {
            result = result.concat (this.charAt(index));
        }
    }
    return result;
};
__setproperty__ (String.prototype, 'format', {
    get: function () {return __get__ (this, function (self) {
        var args = tuple ([] .slice.apply (arguments).slice (1));
        var autoIndex = 0;
        return self.replace (/\{(\w*)\}/g, function (match, key) {
            if (key == '') {
                key = autoIndex++;
            }
            if (key == +key) {
                return args [key] === undefined ? match : str (args [key]);
            }
            else {
                for (var index = 0; index < args.length; index++) {
                    if (typeof args [index] == 'object' && args [index][key] !== undefined) {
                        return str (args [index][key]);
                    }
                }
                return match;
            }
        });
    });},
    enumerable: true
});
String.prototype.isalnum = function () {
    return /^[0-9a-zA-Z]{1,}$/.test(this)
}
String.prototype.isalpha = function () {
    return /^[a-zA-Z]{1,}$/.test(this)
}
String.prototype.isdecimal = function () {
    return /^[0-9]{1,}$/.test(this)
}
String.prototype.isdigit = function () {
    return this.isdecimal()
}
String.prototype.islower = function () {
    return /^[a-z]{1,}$/.test(this)
}
String.prototype.isupper = function () {
    return /^[A-Z]{1,}$/.test(this)
}
String.prototype.isspace = function () {
    return /^[\s]{1,}$/.test(this)
}
String.prototype.isnumeric = function () {
    return !isNaN (parseFloat (this)) && isFinite (this);
};
String.prototype.join = function (strings) {
    strings = Array.from (strings);
    return strings.join (this);
};
String.prototype.lower = function () {
    return this.toLowerCase ();
};
String.prototype.py_replace = function (old, aNew, maxreplace) {
    return this.split (old, maxreplace) .join (aNew);
};
String.prototype.lstrip = function () {
    return this.replace (/^\s*/g, '');
};
String.prototype.rfind = function (sub, start) {
    return this.lastIndexOf (sub, start);
};
String.prototype.rsplit = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
        }
        else {
            return result;
        }
    }
};
String.prototype.rstrip = function () {
    return this.replace (/\s*$/g, '');
};
String.prototype.py_split = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
        }
        else {
            return result;
        }
    }
};
String.prototype.startswith = function (prefix) {
    if (prefix instanceof Array) {
        for (var i=0;i<prefix.length;i++) {
            if (this.indexOf (prefix [i]) == 0)
                return true;
        }
    } else
        return this.indexOf (prefix) == 0;
    return false;
};
String.prototype.strip = function () {
    return this.trim ();
};
String.prototype.upper = function () {
    return this.toUpperCase ();
};
String.prototype.__mul__ = function (scalar) {
    var result = '';
    for (var i = 0; i < scalar; i++) {
        result = result + this;
    }
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__ (element) {
    return this.hasOwnProperty (element);
}
function __keys__ () {
    var keys = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            keys.push (attrib);
        }
    }
    return keys;
}
function __items__ () {
    var items = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            items.push ([attrib, this [attrib]]);
        }
    }
    return items;
}
function __del__ (key) {
    delete this [key];
}
function __clear__ () {
    for (var attrib in this) {
        delete this [attrib];
    }
}
function __getdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result == undefined) {
        result = this ['py_' + aKey]
    }
    return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
}
function __setdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        return result;
    }
    var val = aDefault == undefined ? null : aDefault;
    this [aKey] = val;
    return val;
}
function __pop__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        delete this [aKey];
        return result;
    } else {
        if ( aDefault === undefined ) {
            throw KeyError (aKey, new Error());
        }
    }
    return aDefault;
}
function __popitem__ () {
    var aKey = Object.keys (this) [0];
    if (aKey == null) {
        throw KeyError ("popitem(): dictionary is empty", new Error ());
    }
    var result = tuple ([aKey, this [aKey]]);
    delete this [aKey];
    return result;
}
function __update__ (aDict) {
    for (var aKey in aDict) {
        this [aKey] = aDict [aKey];
    }
}
function __values__ () {
    var values = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            values.push (this [attrib]);
        }
    }
    return values;
}
function __dgetitem__ (aKey) {
    return this [aKey];
}
function __dsetitem__ (aKey, aValue) {
    this [aKey] = aValue;
}
function dict (objectOrPairs) {
    var instance = {};
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) {
            for (var index = 0; index < objectOrPairs.length; index++) {
                var pair = objectOrPairs [index];
                if ( !(pair instanceof Array) || pair.length != 2) {
                    throw ValueError(
                        "dict update sequence element #" + index +
                        " has length " + pair.length +
                        "; 2 is required", new Error());
                }
                var key = pair [0];
                var val = pair [1];
                if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                     if (!isinstance (objectOrPairs, dict)) {
                         val = dict (val);
                     }
                }
                instance [key] = val;
            }
        }
    }
    else {
        if (isinstance (objectOrPairs, dict)) {
            var aKeys = objectOrPairs.py_keys ();
            for (var index = 0; index < aKeys.length; index++ ) {
                var key = aKeys [index];
                instance [key] = objectOrPairs [key];
            }
        } else if (objectOrPairs instanceof Object) {
            instance = objectOrPairs;
        } else {
            throw ValueError ("Invalid type of object for dict creation", new Error ());
        }
    }
    __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
    __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
    __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
    __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
    __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
    __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
    __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
    __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
    __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
    __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
    __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
    __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
    __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
    __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
    return instance;
}
dict.__name__ = 'dict';
dict.__bases__ = [object];
function __setdoc__ (docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
function __jsmod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
function __mod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
function __pow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
var pow = __pow__;
function __neg__ (a) {
    if (typeof a == 'object' && '__neg__' in a) {
        return a.__neg__ ();
    }
    else {
        return -a;
    }
};
function __matmul__ (a, b) {
    return a.__matmul__ (b);
};
function __mul__ (a, b) {
    if (typeof a == 'object' && '__mul__' in a) {
        return a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return b.__rmul__ (a);
    }
    else {
        return a * b;
    }
};
function __truediv__ (a, b) {
    if (typeof a == 'object' && '__truediv__' in a) {
        return a.__truediv__ (b);
    }
    else if (typeof b == 'object' && '__rtruediv__' in b) {
        return b.__rtruediv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return a / b;
    }
};
function __floordiv__ (a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) {
        return a.__floordiv__ (b);
    }
    else if (typeof b == 'object' && '__rfloordiv__' in b) {
        return b.__rfloordiv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return Math.floor (a / b);
    }
};
function __add__ (a, b) {
    if (typeof a == 'object' && '__add__' in a) {
        return a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return b.__radd__ (a);
    }
    else {
        return a + b;
    }
};
function __sub__ (a, b) {
    if (typeof a == 'object' && '__sub__' in a) {
        return a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return b.__rsub__ (a);
    }
    else {
        return a - b;
    }
};
function __lshift__ (a, b) {
    if (typeof a == 'object' && '__lshift__' in a) {
        return a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return b.__rlshift__ (a);
    }
    else {
        return a << b;
    }
};
function __rshift__ (a, b) {
    if (typeof a == 'object' && '__rshift__' in a) {
        return a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return b.__rrshift__ (a);
    }
    else {
        return a >> b;
    }
};
function __or__ (a, b) {
    if (typeof a == 'object' && '__or__' in a) {
        return a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return b.__ror__ (a);
    }
    else {
        return a | b;
    }
};
function __xor__ (a, b) {
    if (typeof a == 'object' && '__xor__' in a) {
        return a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return b.__rxor__ (a);
    }
    else {
        return a ^ b;
    }
};
function __and__ (a, b) {
    if (typeof a == 'object' && '__and__' in a) {
        return a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return b.__rand__ (a);
    }
    else {
        return a & b;
    }
};
function __eq__ (a, b) {
    if (typeof a == 'object' && '__eq__' in a) {
        return a.__eq__ (b);
    }
    else {
        return a == b;
    }
};
function __ne__ (a, b) {
    if (typeof a == 'object' && '__ne__' in a) {
        return a.__ne__ (b);
    }
    else {
        return a != b
    }
};
function __lt__ (a, b) {
    if (typeof a == 'object' && '__lt__' in a) {
        return a.__lt__ (b);
    }
    else {
        return a < b;
    }
};
function __le__ (a, b) {
    if (typeof a == 'object' && '__le__' in a) {
        return a.__le__ (b);
    }
    else {
        return a <= b;
    }
};
function __gt__ (a, b) {
    if (typeof a == 'object' && '__gt__' in a) {
        return a.__gt__ (b);
    }
    else {
        return a > b;
    }
};
function __ge__ (a, b) {
    if (typeof a == 'object' && '__ge__' in a) {
        return a.__ge__ (b);
    }
    else {
        return a >= b;
    }
};
function __imatmul__ (a, b) {
    if ('__imatmul__' in a) {
        return a.__imatmul__ (b);
    }
    else {
        return a.__matmul__ (b);
    }
};
function __ipow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__ipow__ (b);
    }
    else if (typeof a == 'object' && '__ipow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
function __ijsmod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__ismod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
function __imod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__imod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
function __imul__ (a, b) {
    if (typeof a == 'object' && '__imul__' in a) {
        return a.__imul__ (b);
    }
    else if (typeof a == 'object' && '__mul__' in a) {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return a = b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return a = b.__rmul__ (a);
    }
    else {
        return a *= b;
    }
};
function __idiv__ (a, b) {
    if (typeof a == 'object' && '__idiv__' in a) {
        return a.__idiv__ (b);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a = a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return a = b.__rdiv__ (a);
    }
    else {
        return a /= b;
    }
};
function __iadd__ (a, b) {
    if (typeof a == 'object' && '__iadd__' in a) {
        return a.__iadd__ (b);
    }
    else if (typeof a == 'object' && '__add__' in a) {
        return a = a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return a = b.__radd__ (a);
    }
    else {
        return a += b;
    }
};
function __isub__ (a, b) {
    if (typeof a == 'object' && '__isub__' in a) {
        return a.__isub__ (b);
    }
    else if (typeof a == 'object' && '__sub__' in a) {
        return a = a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return a = b.__rsub__ (a);
    }
    else {
        return a -= b;
    }
};
function __ilshift__ (a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) {
        return a.__ilshift__ (b);
    }
    else if (typeof a == 'object' && '__lshift__' in a) {
        return a = a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return a = b.__rlshift__ (a);
    }
    else {
        return a <<= b;
    }
};
function __irshift__ (a, b) {
    if (typeof a == 'object' && '__irshift__' in a) {
        return a.__irshift__ (b);
    }
    else if (typeof a == 'object' && '__rshift__' in a) {
        return a = a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return a = b.__rrshift__ (a);
    }
    else {
        return a >>= b;
    }
};
function __ior__ (a, b) {
    if (typeof a == 'object' && '__ior__' in a) {
        return a.__ior__ (b);
    }
    else if (typeof a == 'object' && '__or__' in a) {
        return a = a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return a = b.__ror__ (a);
    }
    else {
        return a |= b;
    }
};
function __ixor__ (a, b) {
    if (typeof a == 'object' && '__ixor__' in a) {
        return a.__ixor__ (b);
    }
    else if (typeof a == 'object' && '__xor__' in a) {
        return a = a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return a = b.__rxor__ (a);
    }
    else {
        return a ^= b;
    }
};
function __iand__ (a, b) {
    if (typeof a == 'object' && '__iand__' in a) {
        return a.__iand__ (b);
    }
    else if (typeof a == 'object' && '__and__' in a) {
        return a = a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return a = b.__rand__ (a);
    }
    else {
        return a &= b;
    }
};
function __getitem__ (container, key) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ (key);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        return container [container.length + key];
    }
    else {
        return container [key];
    }
};
function __setitem__ (container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ (key, value);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        container [container.length + key] = value;
    }
    else {
        container [key] = value;
    }
};
function __getslice__ (container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ ([lower, upper, step]);
    }
    else {
        return container.__getslice__ (lower, upper, step);
    }
};
function __setslice__ (container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ ([lower, upper, step], value);
    }
    else {
        container.__setslice__ (lower, upper, step, value);
    }
};
var BaseException =  __class__ ('BaseException', [object], {
	__module__: __name__,
});
var Exception =  __class__ ('Exception', [BaseException], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.__args__ = args;
		try {
			self.stack = kwargs.error.stack;
		}
		catch (__except0__) {
			self.stack = 'No stack trace available';
		}
	});},
	get __repr__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
		}
		else if (len (self.__args__)) {
			return '{}({})'.format (self.__class__.__name__, repr (self.__args__ [0]));
		}
		else {
			return '{}()'.format (self.__class__.__name__);
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return str (tuple (self.__args__));
		}
		else if (len (self.__args__)) {
			return str (self.__args__ [0]);
		}
		else {
			return '';
		}
	});}
});
var IterableError =  __class__ ('IterableError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
	});}
});
var StopIteration =  __class__ ('StopIteration', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
	});}
});
var ValueError =  __class__ ('ValueError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var KeyError =  __class__ ('KeyError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var AssertionError =  __class__ ('AssertionError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		if (message) {
			Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
		}
		else {
			Exception.__init__ (self, __kwargtrans__ ({error: error}));
		}
	});}
});
var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var IndexError =  __class__ ('IndexError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var AttributeError =  __class__ ('AttributeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var py_TypeError =  __class__ ('py_TypeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var Warning =  __class__ ('Warning', [Exception], {
	__module__: __name__,
});
var UserWarning =  __class__ ('UserWarning', [Warning], {
	__module__: __name__,
});
var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
	__module__: __name__,
});
var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
	__module__: __name__,
});
var __sort__ = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (key) {
		iterable.sort ((function __lambda__ (a, b) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return (key (a) > key (b) ? 1 : -(1));
		}));
	}
	else {
		iterable.sort ();
	}
	if (reverse) {
		iterable.reverse ();
	}
};
var sorted = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (py_typeof (iterable) == dict) {
		var result = copy (iterable.py_keys ());
	}
	else {
		var result = copy (iterable);
	}
	__sort__ (result, key, reverse);
	return result;
};
var map = function (func, iterable) {
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			__accu0__.append (func (item));
		}
		return __accu0__;
	}) ();
};
var filter = function (func, iterable) {
	if (func == null) {
		var func = bool;
	}
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			if (func (item)) {
				__accu0__.append (item);
			}
		}
		return __accu0__;
	}) ();
};
var divmod = function (n, d) {
	return tuple ([Math.floor (n / d), __mod__ (n, d)]);
};
var __Terminal__ =  __class__ ('__Terminal__', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.buffer = '';
		try {
			self.element = document.getElementById ('__terminal__');
		}
		catch (__except0__) {
			self.element = null;
		}
		if (self.element) {
			self.element.style.overflowX = 'auto';
			self.element.style.boxSizing = 'border-box';
			self.element.style.padding = '5px';
			self.element.innerHTML = '_';
		}
	});},
	get print () {return __get__ (this, function (self) {
		var sep = ' ';
		var end = '\n';
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
			var __accu0__ = [];
			for (var arg of args) {
				__accu0__.append (str (arg));
			}
			return __accu0__;
		}) ()), end).__getslice__ (-(4096), null, 1);
		if (self.element) {
			self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
			self.element.scrollTop = self.element.scrollHeight;
		}
		else {
			console.log (sep.join ((function () {
				var __accu0__ = [];
				for (var arg of args) {
					__accu0__.append (str (arg));
				}
				return __accu0__;
			}) ()));
		}
	});},
	get input () {return __get__ (this, function (self, question) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
		var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(8), null, 1)));
		self.print (answer);
		return answer;
	});}
});
var __terminal__ = __Terminal__ ();
var print = __terminal__.print;
var input = __terminal__.input;

//# sourceMappingURL=org.transcrypt.__runtime__.map

/***/ }),

/***/ "./__target__/sifaru_yusin.deku.js":
/*!*****************************************!*\
  !*** ./__target__/sifaru_yusin.deku.js ***!
  \*****************************************/
/*! exports provided: kekure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kekure", function() { return kekure; });
/* harmony import */ var _org_transcrypt_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org.transcrypt.__runtime__.js */ "./__target__/org.transcrypt.__runtime__.js");
/* harmony import */ var _typing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typing.js */ "./__target__/typing.js");
// Transcrypt'ed from Python, 2020-04-15 00:58:13


var __name__ = 'sifaru_yusin.deku';
var kekure = function () {
	return Date.now ().toString ();
};

//# sourceMappingURL=sifaru_yusin.deku.map

/***/ }),

/***/ "./__target__/typing.js":
/*!******************************!*\
  !*** ./__target__/typing.js ***!
  \******************************/
/*! exports provided: ClassVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassVar", function() { return ClassVar; });
/* harmony import */ var _org_transcrypt_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./org.transcrypt.__runtime__.js */ "./__target__/org.transcrypt.__runtime__.js");
// Transcrypt'ed from Python, 2020-04-14 23:36:13

var __name__ = 'typing';
var ClassVar = 'ClassVar';

//# sourceMappingURL=typing.map

/***/ }),

/***/ "./main.py":
/*!*****************!*\
  !*** ./main.py ***!
  \*****************/
/*! exports provided: MAX_DEKUGA_LENGTH, append_new_deku, on_click_kekure_deku, on_dom_content_loaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _target_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__target__/main.js */ "./__target__/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_DEKUGA_LENGTH", function() { return _target_main_js__WEBPACK_IMPORTED_MODULE_0__["MAX_DEKUGA_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "append_new_deku", function() { return _target_main_js__WEBPACK_IMPORTED_MODULE_0__["append_new_deku"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on_click_kekure_deku", function() { return _target_main_js__WEBPACK_IMPORTED_MODULE_0__["on_click_kekure_deku"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "on_dom_content_loaded", function() { return _target_main_js__WEBPACK_IMPORTED_MODULE_0__["on_dom_content_loaded"]; });



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vX190YXJnZXRfXy9tYWluLmpzIiwid2VicGFjazovLy8uL19fdGFyZ2V0X18vb3JnLnRyYW5zY3J5cHQuX19ydW50aW1lX18uanMiLCJ3ZWJwYWNrOi8vLy4vX190YXJnZXRfXy9zaWZhcnVfeXVzaW4uZGVrdS5qcyIsIndlYnBhY2s6Ly8vLi9fX3RhcmdldF9fL3R5cGluZy5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLnB5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ20yQztBQUNsMEM7QUFDYTtBQUM5QztBQUNPO0FBQ0E7QUFDUDtBQUNBLGtCQUFrQixvQ0FBb0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsZ0NBQWdDLG9FQUFNO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWSwrQkFBK0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0JBQWtCLHFCQUFxQix5QkFBeUIscUJBQXFCO0FBQ2pHO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG9CQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQXFHO0FBQ3JHLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixtQkFBbUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMscUJBQXFCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLLEdBQUc7QUFDUjtBQUNBLENBQUM7QUFDRDtBQUNBLHlCQUF5QixHQUFHO0FBQzVCO0FBQ0E7QUFDQSxzQkFBc0IsR0FBRztBQUN6QjtBQUNBO0FBQ0EsbUJBQW1CLEdBQUc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0E7QUFDQSxtQkFBbUIsR0FBRztBQUN0QjtBQUNBO0FBQ0Esa0JBQWtCLEdBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOEJBQThCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNCQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLCtDQUErQztBQUM1RixnREFBZ0QsdUNBQXVDO0FBQ3ZGLDJDQUEyQyxtQ0FBbUM7QUFDOUUsNENBQTRDLG9CQUFvQixzQ0FBc0Msb0JBQW9CO0FBQzFILGlEQUFpRCxvQkFBb0Isc0NBQXNDLG9CQUFvQjtBQUMvSCw0Q0FBNEMsb0NBQW9DO0FBQ2hGLDBDQUEwQyxrQ0FBa0M7QUFDNUUsNENBQTRDLG9DQUFvQztBQUNoRiwwQ0FBMEMseUNBQXlDO0FBQ25GLGlEQUFpRCx5Q0FBeUM7QUFDMUYsMENBQTBDLGtDQUFrQztBQUM1RSw4Q0FBOEMsc0NBQXNDO0FBQ3BGLDZDQUE2QyxxQ0FBcUM7QUFDbEYsNkNBQTZDLHFDQUFxQztBQUNsRiwrQ0FBK0MsdUNBQXVDO0FBQ3RGLCtDQUErQyx1Q0FBdUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxxQ0FBcUM7QUFDbEY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEdBQUc7QUFDTCxrQkFBa0I7QUFDbEI7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsRUFBRSxHQUFHO0FBQ0wsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDO0FBQ007QUFDUDtBQUNBLGtCQUFrQjtBQUNsQixnRkFBZ0YsYUFBYTtBQUM3RixFQUFFO0FBQ0YsQ0FBQztBQUNNO0FBQ1A7QUFDQSxrQkFBa0I7QUFDbEIsbUVBQW1FLGFBQWE7QUFDaEYsRUFBRTtBQUNGLENBQUM7QUFDTTtBQUNQO0FBQ0Esa0JBQWtCO0FBQ2xCLHNEQUFzRCxhQUFhO0FBQ25FLEVBQUU7QUFDRixDQUFDO0FBQ007QUFDUDtBQUNBLGtCQUFrQjtBQUNsQixzREFBc0QsYUFBYTtBQUNuRSxFQUFFO0FBQ0YsQ0FBQztBQUNNO0FBQ1A7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSx1REFBdUQsYUFBYTtBQUNwRTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQSxFQUFFO0FBQ0YsQ0FBQztBQUNNO0FBQ1A7QUFDQSxrQkFBa0I7QUFDbEIsc0RBQXNELGFBQWE7QUFDbkUsRUFBRTtBQUNGLENBQUM7QUFDTTtBQUNQO0FBQ0Esa0JBQWtCO0FBQ2xCLHNEQUFzRCxhQUFhO0FBQ25FLEVBQUU7QUFDRixDQUFDO0FBQ007QUFDUDtBQUNBLGtCQUFrQjtBQUNsQixzREFBc0QsYUFBYTtBQUNuRSxFQUFFO0FBQ0YsQ0FBQztBQUNNO0FBQ1A7QUFDQSxrQkFBa0I7QUFDbEIsc0RBQXNELGFBQWE7QUFDbkUsRUFBRTtBQUNGLENBQUM7QUFDTTtBQUNQO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFLHdEQUF3RDtBQUN4RCxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFLHdEQUF3RDtBQUN4RCxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxHQUFHO0FBQ0wsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QseURBQXlEO0FBQ3pELHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUUsR0FBRztBQUNMLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQ0FBc0MsUUFBUTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQztBQUNNO0FBQ0E7QUFDQTs7QUFFUCxtRDs7Ozs7Ozs7Ozs7O0FDemtFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ20yQztBQUNsMEM7QUFDakM7QUFDTztBQUNQO0FBQ0E7O0FBRUEsMEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQ20yQztBQUNuMkM7QUFDTzs7QUFFUCwrQjs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFpbi5weVwiKTtcbiIsIi8vIFRyYW5zY3J5cHQnZWQgZnJvbSBQeXRob24sIDIwMjAtMDQtMTUgMDA6NTQ6MjhcbmltcG9ydCB7QXNzZXJ0aW9uRXJyb3IsIEF0dHJpYnV0ZUVycm9yLCBCYXNlRXhjZXB0aW9uLCBEZXByZWNhdGlvbldhcm5pbmcsIEV4Y2VwdGlvbiwgSW5kZXhFcnJvciwgSXRlcmFibGVFcnJvciwgS2V5RXJyb3IsIE5vdEltcGxlbWVudGVkRXJyb3IsIFJ1bnRpbWVXYXJuaW5nLCBTdG9wSXRlcmF0aW9uLCBVc2VyV2FybmluZywgVmFsdWVFcnJvciwgV2FybmluZywgX19Kc0l0ZXJhdG9yX18sIF9fUHlJdGVyYXRvcl9fLCBfX1Rlcm1pbmFsX18sIF9fYWRkX18sIF9fYW5kX18sIF9fY2FsbF9fLCBfX2NsYXNzX18sIF9fZW52aXJfXywgX19lcV9fLCBfX2Zsb29yZGl2X18sIF9fZ2VfXywgX19nZXRfXywgX19nZXRjbV9fLCBfX2dldGl0ZW1fXywgX19nZXRzbGljZV9fLCBfX2dldHNtX18sIF9fZ3RfXywgX19pX18sIF9faWFkZF9fLCBfX2lhbmRfXywgX19pZGl2X18sIF9faWpzbW9kX18sIF9faWxzaGlmdF9fLCBfX2ltYXRtdWxfXywgX19pbW9kX18sIF9faW11bF9fLCBfX2luX18sIF9faW5pdF9fLCBfX2lvcl9fLCBfX2lwb3dfXywgX19pcnNoaWZ0X18sIF9faXN1Yl9fLCBfX2l4b3JfXywgX19qc1VzZVB5TmV4dF9fLCBfX2pzbW9kX18sIF9fa19fLCBfX2t3YXJndHJhbnNfXywgX19sZV9fLCBfX2xzaGlmdF9fLCBfX2x0X18sIF9fbWF0bXVsX18sIF9fbWVyZ2VmaWVsZHNfXywgX19tZXJnZWt3YXJndHJhbnNfXywgX19tb2RfXywgX19tdWxfXywgX19uZV9fLCBfX25lZ19fLCBfX25lc3RfXywgX19vcl9fLCBfX3Bvd19fLCBfX3ByYWdtYV9fLCBfX3Byb3h5X18sIF9fcHlVc2VKc05leHRfXywgX19yc2hpZnRfXywgX19zZXRpdGVtX18sIF9fc2V0cHJvcGVydHlfXywgX19zZXRzbGljZV9fLCBfX3NvcnRfXywgX19zcGVjaWFsYXR0cmliX18sIF9fc3ViX18sIF9fc3VwZXJfXywgX190X18sIF9fdGVybWluYWxfXywgX190cnVlZGl2X18sIF9fd2l0aGJsb2NrX18sIF9feG9yX18sIGFicywgYWxsLCBhbnksIGFzc2VydCwgYm9vbCwgYnl0ZWFycmF5LCBieXRlcywgY2FsbGFibGUsIGNociwgY29weSwgZGVlcGNvcHksIGRlbGF0dHIsIGRpY3QsIGRpciwgZGl2bW9kLCBlbnVtZXJhdGUsIGZpbHRlciwgZmxvYXQsIGdldGF0dHIsIGhhc2F0dHIsIGlucHV0LCBpbnQsIGlzaW5zdGFuY2UsIGlzc3ViY2xhc3MsIGxlbiwgbGlzdCwgbWFwLCBtYXgsIG1pbiwgb2JqZWN0LCBvcmQsIHBvdywgcHJpbnQsIHByb3BlcnR5LCBweV9UeXBlRXJyb3IsIHB5X2l0ZXIsIHB5X21ldGF0eXBlLCBweV9uZXh0LCBweV9yZXZlcnNlZCwgcHlfdHlwZW9mLCByYW5nZSwgcmVwciwgcm91bmQsIHNldCwgc2V0YXR0ciwgc29ydGVkLCBzdHIsIHN1bSwgdHVwbGUsIHppcH0gZnJvbSAnLi9vcmcudHJhbnNjcnlwdC5fX3J1bnRpbWVfXy5qcyc7XG5pbXBvcnQgKiBhcyB0IGZyb20gJy4vdHlwaW5nLmpzJztcbmltcG9ydCB7a2VrdXJlfSBmcm9tICcuL3NpZmFydV95dXNpbi5kZWt1LmpzJztcbnZhciBfX25hbWVfXyA9ICdfX21haW5fXyc7XG5leHBvcnQgdmFyIE1BWF9ERUtVR0FfTEVOR1RIID0gMjA7XG5leHBvcnQgdmFyIGFwcGVuZF9uZXdfZGVrdSA9IGZ1bmN0aW9uIChsaXN0X2VsZW1lbnQsIG5ld19pdGVtX2VsZW1lbnQpIHtcblx0aWYgKGxpc3RfZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudCA+PSBNQVhfREVLVUdBX0xFTkdUSCkge1xuXHRcdGZvciAodmFyIGkgPSAxOTsgaSA8IGxpc3RfZWxlbWVudC5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG5cdFx0XHRsaXN0X2VsZW1lbnQucmVtb3ZlQ2hpbGQgKGxpc3RfZWxlbWVudC5jaGlsZHJlbiBbaV0pO1xuXHRcdH1cblx0fVxuXHRpZiAobGlzdF9lbGVtZW50Lmhhc0NoaWxkTm9kZXMgKCkpIHtcblx0XHRsaXN0X2VsZW1lbnQuaW5zZXJ0QmVmb3JlIChuZXdfaXRlbV9lbGVtZW50LCBsaXN0X2VsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0bGlzdF9lbGVtZW50LmFwcGVuZENoaWxkIChuZXdfaXRlbV9lbGVtZW50KTtcblx0fVxufTtcbmV4cG9ydCB2YXIgb25fY2xpY2tfa2VrdXJlX2Rla3UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0dmFyIG5ld19pdGVtX2VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50ICgnbGknKTtcblx0bmV3X2l0ZW1fZWxlbWVudC50ZXh0Q29udGVudCA9IGtla3VyZSAoKTtcblx0dmFyIGxpc3RfZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICgnZEVrdWdhJyk7XG5cdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKChmdW5jdGlvbiBfX2xhbWJkYV9fIChub3cpIHtcblx0XHRyZXR1cm4gYXBwZW5kX25ld19kZWt1IChsaXN0X2VsZW1lbnQsIG5ld19pdGVtX2VsZW1lbnQpO1xuXHR9KSk7XG59O1xuZXhwb3J0IHZhciBvbl9kb21fY29udGVudF9sb2FkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgKCdrZWt1ckVfZEVrdScpLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIG9uX2NsaWNrX2tla3VyZV9kZWt1KTtcbn07XG5pZiAoX19uYW1lX18gPT0gJ19fbWFpbl9fJykge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAoJ0RPTUNvbnRlbnRMb2FkZWQnLCBvbl9kb21fY29udGVudF9sb2FkZWQpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLm1hcCIsIi8vIFRyYW5zY3J5cHQnZWQgZnJvbSBQeXRob24sIDIwMjAtMDQtMTQgMjM6MTE6MTJcbnZhciBfX25hbWVfXyA9ICdvcmcudHJhbnNjcnlwdC5fX3J1bnRpbWVfXyc7XG5leHBvcnQgdmFyIF9fZW52aXJfXyA9IHt9O1xuX19lbnZpcl9fLmludGVycHJldGVyX25hbWUgPSAncHl0aG9uJztcbl9fZW52aXJfXy50cmFuc3BpbGVyX25hbWUgPSAndHJhbnNjcnlwdCc7XG5fX2VudmlyX18uZXhlY3V0b3JfbmFtZSA9IF9fZW52aXJfXy50cmFuc3BpbGVyX25hbWU7XG5fX2VudmlyX18udHJhbnNwaWxlcl92ZXJzaW9uID0gJzMuNy4xNic7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX25lc3RfXyAoaGVhZE9iamVjdCwgdGFpbE5hbWVzLCB2YWx1ZSkge1xuICAgIHZhciBjdXJyZW50ID0gaGVhZE9iamVjdDtcbiAgICBpZiAodGFpbE5hbWVzICE9ICcnKSB7XG4gICAgICAgIHZhciB0YWlsQ2hhaW4gPSB0YWlsTmFtZXMuc3BsaXQgKCcuJyk7XG4gICAgICAgIHZhciBmaXJzdE5ld0luZGV4ID0gdGFpbENoYWluLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRhaWxDaGFpbi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICghY3VycmVudC5oYXNPd25Qcm9wZXJ0eSAodGFpbENoYWluIFtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgZmlyc3ROZXdJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgW3RhaWxDaGFpbiBbaW5kZXhdXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IGZpcnN0TmV3SW5kZXg7IGluZGV4IDwgdGFpbENoYWluLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY3VycmVudCBbdGFpbENoYWluIFtpbmRleF1dID0ge307XG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCBbdGFpbENoYWluIFtpbmRleF1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGF0dHJpYiBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyAodmFsdWUpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAoY3VycmVudCwgYXR0cmliLCB7XG4gICAgICAgICAgICBnZXQgKCkge3JldHVybiB2YWx1ZSBbYXR0cmliXTt9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9faW5pdF9fIChtb2R1bGUpIHtcbiAgICBpZiAoIW1vZHVsZS5fX2luaXRlZF9fKSB7XG4gICAgICAgIG1vZHVsZS5fX2FsbF9fLl9faW5pdF9fIChtb2R1bGUuX19hbGxfXyk7XG4gICAgICAgIG1vZHVsZS5fX2luaXRlZF9fID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZHVsZS5fX2FsbF9fO1xufTtcbmV4cG9ydCB2YXIgX19wcm94eV9fID0gZmFsc2U7XG5leHBvcnQgZnVuY3Rpb24gX19nZXRfXyAoc2VsZiwgZnVuYywgcXVvdGVkRnVuY05hbWUpIHtcbiAgICBpZiAoc2VsZikge1xuICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eSAoJ19fY2xhc3NfXycpIHx8IHR5cGVvZiBzZWxmID09ICdzdHJpbmcnIHx8IHNlbGYgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmIChxdW90ZWRGdW5jTmFtZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAoc2VsZiwgcXVvdGVkRnVuY05hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW10gLnNsaWNlLmFwcGx5IChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkgKG51bGwsIFtzZWxmXSAuY29uY2F0IChhcmdzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSAuc2xpY2UuYXBwbHkgKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkgKG51bGwsIFtzZWxmXSAuY29uY2F0IChhcmdzKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19nZXRjbV9fIChzZWxmLCBmdW5jLCBxdW90ZWRGdW5jTmFtZSkge1xuICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5ICgnX19jbGFzc19fJykpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10gLnNsaWNlLmFwcGx5IChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkgKG51bGwsIFtzZWxmLl9fY2xhc3NfX10gLmNvbmNhdCAoYXJncykpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10gLnNsaWNlLmFwcGx5IChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkgKG51bGwsIFtzZWxmXSAuY29uY2F0IChhcmdzKSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2dldHNtX18gKHNlbGYsIGZ1bmMsIHF1b3RlZEZ1bmNOYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmM7XG59O1xuZXhwb3J0IHZhciBweV9tZXRhdHlwZSA9IHtcbiAgICBfX25hbWVfXzogJ3R5cGUnLFxuICAgIF9fYmFzZXNfXzogW10sXG4gICAgX19uZXdfXzogZnVuY3Rpb24gKG1ldGEsIG5hbWUsIGJhc2VzLCBhdHRyaWJzKSB7XG4gICAgICAgIHZhciBjbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdIC5zbGljZS5hcHBseSAoYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBjbHMuX19uZXdfXyAoYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gYmFzZXMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgICAgICAgdmFyIGJhc2UgPSBiYXNlcyBbaW5kZXhdO1xuICAgICAgICAgICAgZm9yICh2YXIgYXR0cmliIGluIGJhc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgKGJhc2UsIGF0dHJpYik7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IChjbHMsIGF0dHJpYiwgZGVzY3JpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBzeW1ib2wgb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAoYmFzZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgKGJhc2UsIHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IChjbHMsIHN5bWJvbCwgZGVzY3JpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2xzLl9fbWV0YWNsYXNzX18gPSBtZXRhO1xuICAgICAgICBjbHMuX19uYW1lX18gPSBuYW1lLnN0YXJ0c1dpdGggKCdweV8nKSA/IG5hbWUuc2xpY2UgKDMpIDogbmFtZTtcbiAgICAgICAgY2xzLl9fYmFzZXNfXyA9IGJhc2VzO1xuICAgICAgICBmb3IgKHZhciBhdHRyaWIgaW4gYXR0cmlicykge1xuICAgICAgICAgICAgdmFyIGRlc2NyaXAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIChhdHRyaWJzLCBhdHRyaWIpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IChjbHMsIGF0dHJpYiwgZGVzY3JpcCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgc3ltYm9sIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgKGF0dHJpYnMpKSB7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgKGF0dHJpYnMsIHN5bWJvbCk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgKGNscywgc3ltYm9sLCBkZXNjcmlwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xzO1xuICAgIH1cbn07XG5weV9tZXRhdHlwZS5fX21ldGFjbGFzc19fID0gcHlfbWV0YXR5cGU7XG5leHBvcnQgdmFyIG9iamVjdCA9IHtcbiAgICBfX2luaXRfXzogZnVuY3Rpb24gKHNlbGYpIHt9LFxuICAgIF9fbWV0YWNsYXNzX186IHB5X21ldGF0eXBlLFxuICAgIF9fbmFtZV9fOiAnb2JqZWN0JyxcbiAgICBfX2Jhc2VzX186IFtdLFxuICAgIF9fbmV3X186IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUgKHRoaXMsIHtfX2NsYXNzX186IHt2YWx1ZTogdGhpcywgZW51bWVyYWJsZTogdHJ1ZX19KTtcbiAgICAgICAgaWYgKCdfX2dldGF0dHJfXycgaW4gdGhpcyB8fCAnX19zZXRhdHRyX18nIGluIHRoaXMpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IFByb3h5IChpbnN0YW5jZSwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdGFyZ2V0IFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuX19nZXRhdHRyX18gKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Ll9fc2V0YXR0cl9fIChuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX2luaXRfXy5hcHBseSAobnVsbCwgW2luc3RhbmNlXSAuY29uY2F0IChhcmdzKSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NfXyAobmFtZSwgYmFzZXMsIGF0dHJpYnMsIG1ldGEpIHtcbiAgICBpZiAobWV0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1ldGEgPSBiYXNlcyBbMF0gLl9fbWV0YWNsYXNzX187XG4gICAgfVxuICAgIHJldHVybiBtZXRhLl9fbmV3X18gKG1ldGEsIG5hbWUsIGJhc2VzLCBhdHRyaWJzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gX19wcmFnbWFfXyAoKSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBfX2NhbGxfXyAoLyogPGNhbGxlZT4sIDx0aGlzPiwgPHBhcmFtcz4qICovKSB7XG4gICAgdmFyIGFyZ3MgPSBbXSAuc2xpY2UuYXBwbHkgKGFyZ3VtZW50cyk7XG4gICAgaWYgKHR5cGVvZiBhcmdzIFswXSA9PSAnb2JqZWN0JyAmJiAnX19jYWxsX18nIGluIGFyZ3MgWzBdKSB7XG4gICAgICAgIHJldHVybiBhcmdzIFswXSAuX19jYWxsX18gLmFwcGx5IChhcmdzIFsxXSwgYXJncy5zbGljZSAoMikpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFyZ3MgWzBdIC5hcHBseSAoYXJncyBbMV0sIGFyZ3Muc2xpY2UgKDIpKTtcbiAgICB9XG59O1xuX19lbnZpcl9fLmV4ZWN1dG9yX25hbWUgPSBfX2VudmlyX18udHJhbnNwaWxlcl9uYW1lO1xudmFyIF9fbWFpbl9fID0ge19fZmlsZV9fOiAnJ307XG52YXIgX19leGNlcHRfXyA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gX19rd2FyZ3RyYW5zX18gKGFuT2JqZWN0KSB7XG4gICAgYW5PYmplY3QuX19rd2FyZ3RyYW5zX18gPSBudWxsO1xuICAgIGFuT2JqZWN0LmNvbnN0cnVjdG9yID0gT2JqZWN0O1xuICAgIHJldHVybiBhbk9iamVjdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBfX3N1cGVyX18gKGFDbGFzcywgbWV0aG9kTmFtZSkge1xuICAgIGZvciAobGV0IGJhc2Ugb2YgYUNsYXNzLl9fYmFzZXNfXykge1xuICAgICAgICBpZiAobWV0aG9kTmFtZSBpbiBiYXNlKSB7XG4gICAgICAgICAgIHJldHVybiBiYXNlIFttZXRob2ROYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uICgnU3VwZXJjbGFzcyBtZXRob2Qgbm90IGZvdW5kJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvcGVydHkgKGdldHRlciwgc2V0dGVyKSB7XG4gICAgaWYgKCFzZXR0ZXIpIHtcbiAgICAgICAgc2V0dGVyID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIHJldHVybiB7Z2V0OiBmdW5jdGlvbiAoKSB7cmV0dXJuIGdldHRlciAodGhpcyl9LCBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge3NldHRlciAodGhpcywgdmFsdWUpfSwgZW51bWVyYWJsZTogdHJ1ZX07XG59XG5leHBvcnQgZnVuY3Rpb24gX19zZXRwcm9wZXJ0eV9fIChhbk9iamVjdCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIGlmICghYW5PYmplY3QuaGFzT3duUHJvcGVydHkgKG5hbWUpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAoYW5PYmplY3QsIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIHRocm93IEFzc2VydGlvbkVycm9yIChtZXNzYWdlLCBuZXcgRXJyb3IgKCkpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBfX21lcmdla3dhcmd0cmFuc19fIChvYmplY3QwLCBvYmplY3QxKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciAodmFyIGF0dHJpYiBpbiBvYmplY3QwKSB7XG4gICAgICAgIHJlc3VsdCBbYXR0cmliXSA9IG9iamVjdDAgW2F0dHJpYl07XG4gICAgfVxuICAgIGZvciAodmFyIGF0dHJpYiBpbiBvYmplY3QxKSB7XG4gICAgICAgIHJlc3VsdCBbYXR0cmliXSA9IG9iamVjdDEgW2F0dHJpYl07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fbWVyZ2VmaWVsZHNfXyAodGFyZ2V0Q2xhc3MsIHNvdXJjZUNsYXNzKSB7XG4gICAgbGV0IGZpZWxkTmFtZXMgPSBbJ19fcmVwcmZpZWxkc19fJywgJ19fY29tcGFyZWZpZWxkc19fJywgJ19faW5pdGZpZWxkc19fJ11cbiAgICBpZiAoc291cmNlQ2xhc3MgW2ZpZWxkTmFtZXMgWzBdXSkge1xuICAgICAgICBpZiAodGFyZ2V0Q2xhc3MgW2ZpZWxkTmFtZXMgWzBdXSkge1xuICAgICAgICAgICAgZm9yIChsZXQgZmllbGROYW1lIG9mIGZpZWxkTmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRDbGFzcyBbZmllbGROYW1lXSA9IG5ldyBTZXQgKFsuLi50YXJnZXRDbGFzcyBbZmllbGROYW1lXSwgLi4uc291cmNlQ2xhc3MgW2ZpZWxkTmFtZV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGZpZWxkTmFtZSBvZiBmaWVsZE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q2xhc3MgW2ZpZWxkTmFtZV0gPSBuZXcgU2V0IChzb3VyY2VDbGFzcyBbZmllbGROYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gX193aXRoYmxvY2tfXyAobWFuYWdlciwgc3RhdGVtZW50cykge1xuICAgIGlmIChoYXNhdHRyIChtYW5hZ2VyLCAnX19lbnRlcl9fJykpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1hbmFnZXIuX19lbnRlcl9fICgpO1xuICAgICAgICAgICAgc3RhdGVtZW50cyAoKTtcbiAgICAgICAgICAgIG1hbmFnZXIuX19leGl0X18gKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgaWYgKCEgKG1hbmFnZXIuX19leGl0X18gKGV4Y2VwdGlvbi5uYW1lLCBleGNlcHRpb24sIGV4Y2VwdGlvbi5zdGFjaykpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZW1lbnRzICgpO1xuICAgICAgICBtYW5hZ2VyLmNsb3NlICgpO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gZGlyIChvYmopIHtcbiAgICB2YXIgYUxpc3QgPSBbXTtcbiAgICBmb3IgKHZhciBhS2V5IGluIG9iaikge1xuICAgICAgICBhTGlzdC5wdXNoIChhS2V5LnN0YXJ0c1dpdGggKCdweV8nKSA/IGFLZXkuc2xpY2UgKDMpIDogYUtleSk7XG4gICAgfVxuICAgIGFMaXN0LnNvcnQgKCk7XG4gICAgcmV0dXJuIGFMaXN0O1xufTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRhdHRyIChvYmosIG5hbWUsIHZhbHVlKSB7XG4gICAgb2JqIFtuYW1lXSA9IHZhbHVlO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRhdHRyIChvYmosIG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSBpbiBvYmogPyBvYmogW25hbWVdIDogb2JqIFsncHlfJyArIG5hbWVdO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBoYXNhdHRyIChvYmosIG5hbWUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiBvYmogfHwgJ3B5XycgKyBuYW1lIGluIG9iajtcbiAgICB9XG4gICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBkZWxhdHRyIChvYmosIG5hbWUpIHtcbiAgICBpZiAobmFtZSBpbiBvYmopIHtcbiAgICAgICAgZGVsZXRlIG9iaiBbbmFtZV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkZWxldGUgb2JqIFsncHlfJyArIG5hbWVdO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19pbl9fIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyID09PSB1bmRlZmluZWQgfHwgY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGNvbnRhaW5lci5fX2NvbnRhaW5zX18gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLl9fY29udGFpbnNfXyAoZWxlbWVudCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY29udGFpbmVyLmluZGV4T2YgP1xuICAgICAgICAgICAgY29udGFpbmVyLmluZGV4T2YgKGVsZW1lbnQpID4gLTEgOlxuICAgICAgICAgICAgY29udGFpbmVyLmhhc093blByb3BlcnR5IChlbGVtZW50KVxuICAgICAgICApO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19zcGVjaWFsYXR0cmliX18gKGF0dHJpYikge1xuICAgIHJldHVybiAoYXR0cmliLnN0YXJ0c3dpdGggKCdfXycpICYmIGF0dHJpYi5lbmRzd2l0aCAoJ19fJykpIHx8IGF0dHJpYiA9PSAnY29uc3RydWN0b3InIHx8IGF0dHJpYi5zdGFydHN3aXRoICgncHlfJyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGxlbiAoYW5PYmplY3QpIHtcbiAgICBpZiAoYW5PYmplY3QgPT09IHVuZGVmaW5lZCB8fCBhbk9iamVjdCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGFuT2JqZWN0Ll9fbGVuX18gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICByZXR1cm4gYW5PYmplY3QuX19sZW5fXyAoKTtcbiAgICB9XG4gICAgaWYgKGFuT2JqZWN0Lmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhbk9iamVjdC5sZW5ndGg7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSAwO1xuICAgIGZvciAodmFyIGF0dHIgaW4gYW5PYmplY3QpIHtcbiAgICAgICAgaWYgKCFfX3NwZWNpYWxhdHRyaWJfXyAoYXR0cikpIHtcbiAgICAgICAgICAgIGxlbmd0aCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZW5ndGg7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9faV9fIChhbnkpIHtcbiAgICByZXR1cm4gcHlfdHlwZW9mIChhbnkpID09IGRpY3QgPyBhbnkucHlfa2V5cyAoKSA6IGFueTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBfX2tfXyAoa2V5ZWQsIGtleSkge1xuICAgIHZhciByZXN1bHQgPSBrZXllZCBba2V5XTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAoa2V5ZWQgaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgIGlmIChrZXkgPT0gK2tleSAmJiBrZXkgPj0gMCAmJiBrZXllZC5sZW5ndGggPiBrZXkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aHJvdyBJbmRleEVycm9yIChrZXksIG5ldyBFcnJvcigpKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgS2V5RXJyb3IgKGtleSwgbmV3IEVycm9yKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIF9fdF9fICh0YXJnZXQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICB0YXJnZXQgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXQgPT09IG51bGwgPyBmYWxzZSA6XG4gICAgICAgIFsnYm9vbGVhbicsICdudW1iZXInXSAuaW5kZXhPZiAodHlwZW9mIHRhcmdldCkgPj0gMCA/IHRhcmdldCA6XG4gICAgICAgIHRhcmdldC5fX2Jvb2xfXyBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gKHRhcmdldC5fX2Jvb2xfXyAoKSA/IHRhcmdldCA6IGZhbHNlKSA6XG4gICAgICAgIHRhcmdldC5fX2xlbl9fIGluc3RhbmNlb2YgRnVuY3Rpb24gPyAgKHRhcmdldC5fX2xlbl9fICgpICE9PSAwID8gdGFyZ2V0IDogZmFsc2UpIDpcbiAgICAgICAgdGFyZ2V0IGluc3RhbmNlb2YgRnVuY3Rpb24gPyB0YXJnZXQgOlxuICAgICAgICBsZW4gKHRhcmdldCkgIT09IDAgPyB0YXJnZXQgOlxuICAgICAgICBmYWxzZVxuICAgICk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmxvYXQgKGFueSkge1xuICAgIGlmIChhbnkgPT0gJ2luZicpIHtcbiAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgIH1cbiAgICBlbHNlIGlmIChhbnkgPT0gJy1pbmYnKSB7XG4gICAgICAgIHJldHVybiAtSW5maW5pdHk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFueSA9PSAnbmFuJykge1xuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05hTiAocGFyc2VGbG9hdCAoYW55KSkpIHtcbiAgICAgICAgaWYgKGFueSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFueSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBWYWx1ZUVycm9yIChcImNvdWxkIG5vdCBjb252ZXJ0IHN0cmluZyB0byBmbG9hdDogJ1wiICsgc3RyKGFueSkgKyBcIidcIiwgbmV3IEVycm9yICgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICthbnk7XG4gICAgfVxufTtcbmZsb2F0Ll9fbmFtZV9fID0gJ2Zsb2F0JztcbmZsb2F0Ll9fYmFzZXNfXyA9IFtvYmplY3RdO1xuZXhwb3J0IGZ1bmN0aW9uIGludCAoYW55KSB7XG4gICAgcmV0dXJuIGZsb2F0IChhbnkpIHwgMFxufTtcbmludC5fX25hbWVfXyA9ICdpbnQnO1xuaW50Ll9fYmFzZXNfXyA9IFtvYmplY3RdO1xuZXhwb3J0IGZ1bmN0aW9uIGJvb2wgKGFueSkge1xuICAgIHJldHVybiAhIV9fdF9fIChhbnkpO1xufTtcbmJvb2wuX19uYW1lX18gPSAnYm9vbCc7XG5ib29sLl9fYmFzZXNfXyA9IFtpbnRdO1xuZXhwb3J0IGZ1bmN0aW9uIHB5X3R5cGVvZiAoYW5PYmplY3QpIHtcbiAgICB2YXIgYVR5cGUgPSB0eXBlb2YgYW5PYmplY3Q7XG4gICAgaWYgKGFUeXBlID09ICdvYmplY3QnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJ19fY2xhc3NfXycgaW4gYW5PYmplY3QgPyBhbk9iamVjdC5fX2NsYXNzX18gOiBvYmplY3Q7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGFUeXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgYVR5cGUgPT0gJ2Jvb2xlYW4nID8gYm9vbCA6XG4gICAgICAgICAgICBhVHlwZSA9PSAnc3RyaW5nJyA/IHN0ciA6XG4gICAgICAgICAgICBhVHlwZSA9PSAnbnVtYmVyJyA/IChhbk9iamVjdCAlIDEgPT0gMCA/IGludCA6IGZsb2F0KSA6XG4gICAgICAgICAgICBudWxsXG4gICAgICAgICk7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBpc3N1YmNsYXNzIChhQ2xhc3MsIGNsYXNzaW5mbykge1xuICAgIGlmIChjbGFzc2luZm8gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKGxldCBhQ2xhc3MyIG9mIGNsYXNzaW5mbykge1xuICAgICAgICAgICAgaWYgKGlzc3ViY2xhc3MgKGFDbGFzcywgYUNsYXNzMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHZhciBhQ2xhc3MyID0gYUNsYXNzO1xuICAgICAgICBpZiAoYUNsYXNzMiA9PSBjbGFzc2luZm8pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGJhc2VzID0gW10uc2xpY2UuY2FsbCAoYUNsYXNzMi5fX2Jhc2VzX18pO1xuICAgICAgICAgICAgd2hpbGUgKGJhc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFDbGFzczIgPSBiYXNlcy5zaGlmdCAoKTtcbiAgICAgICAgICAgICAgICBpZiAoYUNsYXNzMiA9PSBjbGFzc2luZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhQ2xhc3MyLl9fYmFzZXNfXy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZXMgPSBbXS5zbGljZS5jYWxsIChhQ2xhc3MyLl9fYmFzZXNfXykuY29uY2F0IChiYXNlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIGFDbGFzcyA9PSBjbGFzc2luZm8gfHwgY2xhc3NpbmZvID09IG9iamVjdDtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGlzaW5zdGFuY2UgKGFuT2JqZWN0LCBjbGFzc2luZm8pIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gJ19fY2xhc3NfXycgaW4gYW5PYmplY3QgPyBpc3N1YmNsYXNzIChhbk9iamVjdC5fX2NsYXNzX18sIGNsYXNzaW5mbykgOiBpc3N1YmNsYXNzIChweV90eXBlb2YgKGFuT2JqZWN0KSwgY2xhc3NpbmZvKTtcbiAgICB9XG4gICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gaXNzdWJjbGFzcyAocHlfdHlwZW9mIChhbk9iamVjdCksIGNsYXNzaW5mbyk7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxsYWJsZSAoYW5PYmplY3QpIHtcbiAgICByZXR1cm4gYW5PYmplY3QgJiYgdHlwZW9mIGFuT2JqZWN0ID09ICdvYmplY3QnICYmICdfX2NhbGxfXycgaW4gYW5PYmplY3QgPyB0cnVlIDogdHlwZW9mIGFuT2JqZWN0ID09PSAnZnVuY3Rpb24nO1xufTtcbmV4cG9ydCBmdW5jdGlvbiByZXByIChhbk9iamVjdCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhbk9iamVjdC5fX3JlcHJfXyAoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGFuT2JqZWN0Ll9fc3RyX18gKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoYW5PYmplY3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ05vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhbk9iamVjdC5jb25zdHJ1Y3RvciA9PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICd7JztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbW1hID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYiBpbiBhbk9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFfX3NwZWNpYWxhdHRyaWJfXyAoYXR0cmliKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWIuaXNudW1lcmljICgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJSZXByID0gYXR0cmliO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYlJlcHIgPSAnXFwnJyArIGF0dHJpYiArICdcXCcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tYSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBhdHRyaWJSZXByICsgJzogJyArIHJlcHIgKGFuT2JqZWN0IFthdHRyaWJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ30nO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhbk9iamVjdCA9PSAnYm9vbGVhbicgPyBhbk9iamVjdC50b1N0cmluZyAoKSAuY2FwaXRhbGl6ZSAoKSA6IGFuT2JqZWN0LnRvU3RyaW5nICgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJzxvYmplY3Qgb2YgdHlwZTogJyArIHR5cGVvZiBhbk9iamVjdCArICc+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gY2hyIChjaGFyQ29kZSkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlIChjaGFyQ29kZSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG9yZCAoYUNoYXIpIHtcbiAgICByZXR1cm4gYUNoYXIuY2hhckNvZGVBdCAoMCk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIG1heCAobnJPclNlcSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09IDEgPyBNYXRoLm1heCAoLi4ubnJPclNlcSkgOiBNYXRoLm1heCAoLi4uYXJndW1lbnRzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gbWluIChuck9yU2VxKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT0gMSA/IE1hdGgubWluICguLi5uck9yU2VxKSA6IE1hdGgubWluICguLi5hcmd1bWVudHMpO1xufTtcbmV4cG9ydCB2YXIgYWJzID0gTWF0aC5hYnM7XG5leHBvcnQgZnVuY3Rpb24gcm91bmQgKG51bWJlciwgbmRpZ2l0cykge1xuICAgIGlmIChuZGlnaXRzKSB7XG4gICAgICAgIHZhciBzY2FsZSA9IE1hdGgucG93ICgxMCwgbmRpZ2l0cyk7XG4gICAgICAgIG51bWJlciAqPSBzY2FsZTtcbiAgICB9XG4gICAgdmFyIHJvdW5kZWQgPSBNYXRoLnJvdW5kIChudW1iZXIpO1xuICAgIGlmIChyb3VuZGVkIC0gbnVtYmVyID09IDAuNSAmJiByb3VuZGVkICUgMikge1xuICAgICAgICByb3VuZGVkIC09IDE7XG4gICAgfVxuICAgIGlmIChuZGlnaXRzKSB7XG4gICAgICAgIHJvdW5kZWQgLz0gc2NhbGU7XG4gICAgfVxuICAgIHJldHVybiByb3VuZGVkO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2pzVXNlUHlOZXh0X18gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9fbmV4dF9fICgpO1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiByZXN1bHQsIGRvbmU6IGZhbHNlfTtcbiAgICB9XG4gICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBfX3B5VXNlSnNOZXh0X18gKCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLm5leHQgKCk7XG4gICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgIHRocm93IFN0b3BJdGVyYXRpb24gKG5ldyBFcnJvciAoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBweV9pdGVyIChpdGVyYWJsZSkge1xuICAgIGlmICh0eXBlb2YgaXRlcmFibGUgPT0gJ3N0cmluZycgfHwgJ19faXRlcl9fJyBpbiBpdGVyYWJsZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmFibGUuX19pdGVyX18gKCk7XG4gICAgICAgIHJlc3VsdC5uZXh0ID0gX19qc1VzZVB5TmV4dF9fO1xuICAgIH1cbiAgICBlbHNlIGlmICgnc2VsZWN0b3InIGluIGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBsaXN0IChpdGVyYWJsZSkgLl9faXRlcl9fICgpO1xuICAgICAgICByZXN1bHQubmV4dCA9IF9fanNVc2VQeU5leHRfXztcbiAgICB9XG4gICAgZWxzZSBpZiAoJ25leHQnIGluIGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBpdGVyYWJsZVxuICAgICAgICBpZiAoISAoJ19fbmV4dF9fJyBpbiByZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHQuX19uZXh0X18gPSBfX3B5VXNlSnNOZXh0X187XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIGl0ZXJhYmxlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBpdGVyYWJsZSBbU3ltYm9sLml0ZXJhdG9yXSAoKTtcbiAgICAgICAgcmVzdWx0Ll9fbmV4dF9fID0gX19weVVzZUpzTmV4dF9fO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgSXRlcmFibGVFcnJvciAobmV3IEVycm9yICgpKTtcbiAgICB9XG4gICAgcmVzdWx0IFtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge3JldHVybiByZXN1bHQ7fTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB5X25leHQgKGl0ZXJhdG9yKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLl9fbmV4dF9fICgpO1xuICAgIH1cbiAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0ICgpO1xuICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgIHRocm93IFN0b3BJdGVyYXRpb24gKG5ldyBFcnJvciAoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChyZXN1bHQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IFN0b3BJdGVyYXRpb24gKG5ldyBFcnJvciAoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBfX1B5SXRlcmF0b3JfXyAoaXRlcmFibGUpIHtcbiAgICB0aGlzLml0ZXJhYmxlID0gaXRlcmFibGU7XG4gICAgdGhpcy5pbmRleCA9IDA7XG59XG5fX1B5SXRlcmF0b3JfXy5wcm90b3R5cGUuX19uZXh0X18gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMuaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZXJhYmxlIFt0aGlzLmluZGV4KytdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgU3RvcEl0ZXJhdGlvbiAobmV3IEVycm9yICgpKTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fSnNJdGVyYXRvcl9fIChpdGVyYWJsZSkge1xuICAgIHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbn1cbl9fSnNJdGVyYXRvcl9fLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5pdGVyYWJsZS5weV9rZXlzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiB0aGlzLmluZGV4KyssIGRvbmU6IGZhbHNlfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBweV9yZXZlcnNlZCAoaXRlcmFibGUpIHtcbiAgICBpdGVyYWJsZSA9IGl0ZXJhYmxlLnNsaWNlICgpO1xuICAgIGl0ZXJhYmxlLnJldmVyc2UgKCk7XG4gICAgcmV0dXJuIGl0ZXJhYmxlO1xufTtcbmV4cG9ydCBmdW5jdGlvbiB6aXAgKCkge1xuICAgIHZhciBhcmdzID0gW10gLnNsaWNlLmNhbGwgKGFyZ3VtZW50cyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJncyBbaV0gPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGFyZ3MgW2ldID0gYXJncyBbaV0gLnNwbGl0ICgnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkgKGFyZ3MgW2ldKSkge1xuICAgICAgICAgICAgYXJncyBbaV0gPSBBcnJheS5mcm9tIChhcmdzIFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHNob3J0ZXN0ID0gYXJncy5sZW5ndGggPT0gMCA/IFtdIDogYXJncy5yZWR1Y2UgKFxuICAgICAgICBmdW5jdGlvbiAoYXJyYXkwLCBhcnJheTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheTAubGVuZ3RoIDwgYXJyYXkxLmxlbmd0aCA/IGFycmF5MCA6IGFycmF5MTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIHNob3J0ZXN0Lm1hcCAoXG4gICAgICAgIGZ1bmN0aW9uIChjdXJyZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFyZ3MubWFwIChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudCBbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApO1xufTtcbmV4cG9ydCBmdW5jdGlvbiByYW5nZSAoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoc3RvcCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RvcCA9IHN0YXJ0O1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIGlmIChzdGVwID09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGVwID0gMTtcbiAgICB9XG4gICAgaWYgKChzdGVwID4gMCAmJiBzdGFydCA+PSBzdG9wKSB8fCAoc3RlcCA8IDAgJiYgc3RhcnQgPD0gc3RvcCkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBzdGVwID4gMCA/IGkgPCBzdG9wIDogaSA+IHN0b3A7IGkgKz0gc3RlcCkge1xuICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZnVuY3Rpb24gYW55IChpdGVyYWJsZSkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlcmFibGUpIHtcbiAgICAgICAgaWYgKGJvb2wgKGl0ZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gYWxsIChpdGVyYWJsZSkge1xuICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlcmFibGUpIHtcbiAgICAgICAgaWYgKCEgYm9vbCAoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdW0gKGl0ZXJhYmxlKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBpdGVyYWJsZSkge1xuICAgICAgICByZXN1bHQgKz0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbnVtZXJhdGUgKGl0ZXJhYmxlKSB7XG4gICAgcmV0dXJuIHppcCAocmFuZ2UgKGxlbiAoaXRlcmFibGUpKSwgaXRlcmFibGUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkgKGFuT2JqZWN0KSB7XG4gICAgaWYgKGFuT2JqZWN0ID09IG51bGwgfHwgdHlwZW9mIGFuT2JqZWN0ID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGFuT2JqZWN0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBhdHRyaWIgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoYW5PYmplY3QuaGFzT3duUHJvcGVydHkgKGF0dHJpYikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgW2F0dHJpYl0gPSBhbk9iamVjdCBbYXR0cmliXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWVwY29weSAoYW5PYmplY3QpIHtcbiAgICBpZiAoYW5PYmplY3QgPT0gbnVsbCB8fCB0eXBlb2YgYW5PYmplY3QgPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gYW5PYmplY3Q7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAodmFyIGF0dHJpYiBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChhbk9iamVjdC5oYXNPd25Qcm9wZXJ0eSAoYXR0cmliKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCBbYXR0cmliXSA9IGRlZXBjb3B5IChhbk9iamVjdCBbYXR0cmliXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbGlzdCAoaXRlcmFibGUpIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBpdGVyYWJsZSA/IEFycmF5LmZyb20gKGl0ZXJhYmxlKSA6IFtdO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbkFycmF5LnByb3RvdHlwZS5fX2NsYXNzX18gPSBsaXN0O1xubGlzdC5fX25hbWVfXyA9ICdsaXN0Jztcbmxpc3QuX19iYXNlc19fID0gW29iamVjdF07XG5BcnJheS5wcm90b3R5cGUuX19pdGVyX18gPSBmdW5jdGlvbiAoKSB7cmV0dXJuIG5ldyBfX1B5SXRlcmF0b3JfXyAodGhpcyk7fTtcbkFycmF5LnByb3RvdHlwZS5fX2dldHNsaWNlX18gPSBmdW5jdGlvbiAoc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgICAgIHN0YXJ0ID0gdGhpcy5sZW5ndGggKyBzdGFydDtcbiAgICB9XG4gICAgaWYgKHN0b3AgPT0gbnVsbCkge1xuICAgICAgICBzdG9wID0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0b3AgPCAwKSB7XG4gICAgICAgIHN0b3AgPSB0aGlzLmxlbmd0aCArIHN0b3A7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0b3AgPiB0aGlzLmxlbmd0aCkge1xuICAgICAgICBzdG9wID0gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChzdGVwID09IDEpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMsIHN0YXJ0LCBzdG9wKTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdCA9IGxpc3QgKFtdKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IHN0YXJ0OyBpbmRleCA8IHN0b3A7IGluZGV4ICs9IHN0ZXApIHtcbiAgICAgICAgcmVzdWx0LnB1c2ggKHRoaXMgW2luZGV4XSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuQXJyYXkucHJvdG90eXBlLl9fc2V0c2xpY2VfXyA9IGZ1bmN0aW9uIChzdGFydCwgc3RvcCwgc3RlcCwgc291cmNlKSB7XG4gICAgaWYgKHN0YXJ0IDwgMCkge1xuICAgICAgICBzdGFydCA9IHRoaXMubGVuZ3RoICsgc3RhcnQ7XG4gICAgfVxuICAgIGlmIChzdG9wID09IG51bGwpIHtcbiAgICAgICAgc3RvcCA9IHRoaXMubGVuZ3RoO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdG9wIDwgMCkge1xuICAgICAgICBzdG9wID0gdGhpcy5sZW5ndGggKyBzdG9wO1xuICAgIH1cbiAgICBpZiAoc3RlcCA9PSBudWxsKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkgKHRoaXMsIFtzdGFydCwgc3RvcCAtIHN0YXJ0XSAuY29uY2F0IChzb3VyY2UpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBzb3VyY2VJbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHRhcmdldEluZGV4ID0gc3RhcnQ7IHRhcmdldEluZGV4IDwgc3RvcDsgdGFyZ2V0SW5kZXggKz0gc3RlcCkge1xuICAgICAgICAgICAgdGhpcyBbdGFyZ2V0SW5kZXhdID0gc291cmNlIFtzb3VyY2VJbmRleCsrXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5BcnJheS5wcm90b3R5cGUuX19yZXByX18gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX19jbGFzc19fID09IHNldCAmJiAhdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICdzZXQoKSc7XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSAhdGhpcy5fX2NsYXNzX18gfHwgdGhpcy5fX2NsYXNzX18gPT0gbGlzdCA/ICdbJyA6IHRoaXMuX19jbGFzc19fID09IHR1cGxlID8gJygnIDogJ3snO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCArPSByZXByICh0aGlzIFtpbmRleF0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX2NsYXNzX18gPT0gdHVwbGUgJiYgdGhpcy5sZW5ndGggPT0gMSkge1xuICAgICAgICByZXN1bHQgKz0gJywnO1xuICAgIH1cbiAgICByZXN1bHQgKz0gIXRoaXMuX19jbGFzc19fIHx8IHRoaXMuX19jbGFzc19fID09IGxpc3QgPyAnXScgOiB0aGlzLl9fY2xhc3NfXyA9PSB0dXBsZSA/ICcpJyA6ICd9Jzs7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5BcnJheS5wcm90b3R5cGUuX19zdHJfXyA9IEFycmF5LnByb3RvdHlwZS5fX3JlcHJfXztcbkFycmF5LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHRoaXMucHVzaCAoZWxlbWVudCk7XG59O1xuQXJyYXkucHJvdG90eXBlLnB5X2NsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbn07XG5BcnJheS5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKGFMaXN0KSB7XG4gICAgdGhpcy5wdXNoLmFwcGx5ICh0aGlzLCBhTGlzdCk7XG59O1xuQXJyYXkucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgIHRoaXMuc3BsaWNlIChpbmRleCwgMCwgZWxlbWVudCk7XG59O1xuQXJyYXkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5pbmRleE9mIChlbGVtZW50KTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgdGhyb3cgVmFsdWVFcnJvciAoXCJsaXN0LnJlbW92ZSh4KTogeCBub3QgaW4gbGlzdFwiLCBuZXcgRXJyb3IgKCkpO1xuICAgIH1cbiAgICB0aGlzLnNwbGljZSAoaW5kZXgsIDEpO1xufTtcbkFycmF5LnByb3RvdHlwZS5pbmRleCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXhPZiAoZWxlbWVudCk7XG59O1xuQXJyYXkucHJvdG90eXBlLnB5X3BvcCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIGlmIChpbmRleCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9wICgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlIChpbmRleCwgMSkgWzBdO1xuICAgIH1cbn07XG5BcnJheS5wcm90b3R5cGUucHlfc29ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICBfX3NvcnRfXy5hcHBseSAgKG51bGwsIFt0aGlzXS5jb25jYXQgKFtdIC5zbGljZS5hcHBseSAoYXJndW1lbnRzKSkpO1xufTtcbkFycmF5LnByb3RvdHlwZS5fX2FkZF9fID0gZnVuY3Rpb24gKGFMaXN0KSB7XG4gICAgcmV0dXJuIGxpc3QgKHRoaXMuY29uY2F0IChhTGlzdCkpO1xufTtcbkFycmF5LnByb3RvdHlwZS5fX211bF9fID0gZnVuY3Rpb24gKHNjYWxhcikge1xuICAgIGxldCByZXN1bHQgPSB0aGlzO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2NhbGFyOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCAodGhpcyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuQXJyYXkucHJvdG90eXBlLl9fcm11bF9fID0gQXJyYXkucHJvdG90eXBlLl9fbXVsX187XG5leHBvcnQgZnVuY3Rpb24gdHVwbGUgKGl0ZXJhYmxlKSB7XG4gICAgbGV0IGluc3RhbmNlID0gaXRlcmFibGUgPyBbXSAuc2xpY2UuYXBwbHkgKGl0ZXJhYmxlKSA6IFtdO1xuICAgIGluc3RhbmNlLl9fY2xhc3NfXyA9IHR1cGxlO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbnR1cGxlLl9fbmFtZV9fID0gJ3R1cGxlJztcbnR1cGxlLl9fYmFzZXNfXyA9IFtvYmplY3RdO1xuZXhwb3J0IGZ1bmN0aW9uIHNldCAoaXRlcmFibGUpIHtcbiAgICBsZXQgaW5zdGFuY2UgPSBbXTtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZXJhYmxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaW5zdGFuY2UuYWRkIChpdGVyYWJsZSBbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5fX2NsYXNzX18gPSBzZXQ7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuc2V0Ll9fbmFtZV9fID0gJ3NldCc7XG5zZXQuX19iYXNlc19fID0gW29iamVjdF07XG5BcnJheS5wcm90b3R5cGUuX19iaW5kZXhPZl9fID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ICs9ICcnO1xuICAgIGxldCBtaW5kZXggPSAwO1xuICAgIGxldCBtYXhkZXggPSB0aGlzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKG1pbmRleCA8PSBtYXhkZXgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gKG1pbmRleCArIG1heGRleCkgLyAyIHwgMDtcbiAgICAgICAgbGV0IG1pZGRsZSA9IHRoaXMgW2luZGV4XSArICcnO1xuICAgICAgICBpZiAobWlkZGxlIDwgZWxlbWVudCkge1xuICAgICAgICAgICAgbWluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1pZGRsZSA+IGVsZW1lbnQpIHtcbiAgICAgICAgICAgIG1heGRleCA9IGluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59O1xuQXJyYXkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuaW5kZXhPZiAoZWxlbWVudCkgPT0gLTEpIHtcbiAgICAgICAgdGhpcy5wdXNoIChlbGVtZW50KTtcbiAgICB9XG59O1xuQXJyYXkucHJvdG90eXBlLmRpc2NhcmQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZiAoZWxlbWVudCk7XG4gICAgaWYgKGluZGV4ICE9IC0xKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlIChpbmRleCwgMSk7XG4gICAgfVxufTtcbkFycmF5LnByb3RvdHlwZS5pc2Rpc2pvaW50ID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgdGhpcy5zb3J0ICgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX19iaW5kZXhPZl9fIChvdGhlciBbaV0pICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuQXJyYXkucHJvdG90eXBlLmlzc3VwZXJzZXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICB0aGlzLnNvcnQgKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdGhlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5fX2JpbmRleE9mX18gKG90aGVyIFtpXSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5BcnJheS5wcm90b3R5cGUuaXNzdWJzZXQgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gc2V0IChvdGhlci5zbGljZSAoKSkgLmlzc3VwZXJzZXQgKHRoaXMpO1xufTtcbkFycmF5LnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIGxldCByZXN1bHQgPSBzZXQgKHRoaXMuc2xpY2UgKCkgLnNvcnQgKCkpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJlc3VsdC5fX2JpbmRleE9mX18gKG90aGVyIFtpXSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoIChvdGhlciBbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuQXJyYXkucHJvdG90eXBlLmludGVyc2VjdGlvbiA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIHRoaXMuc29ydCAoKTtcbiAgICBsZXQgcmVzdWx0ID0gc2V0ICgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3RoZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuX19iaW5kZXhPZl9fIChvdGhlciBbaV0pICE9IC0xKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCAob3RoZXIgW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbkFycmF5LnByb3RvdHlwZS5kaWZmZXJlbmNlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgbGV0IHNvdGhlciA9IHNldCAob3RoZXIuc2xpY2UgKCkgLnNvcnQgKCkpO1xuICAgIGxldCByZXN1bHQgPSBzZXQgKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChzb3RoZXIuX19iaW5kZXhPZl9fICh0aGlzIFtpXSkgPT0gLTEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoICh0aGlzIFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5BcnJheS5wcm90b3R5cGUuc3ltbWV0cmljX2RpZmZlcmVuY2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy51bmlvbiAob3RoZXIpIC5kaWZmZXJlbmNlICh0aGlzLmludGVyc2VjdGlvbiAob3RoZXIpKTtcbn07XG5BcnJheS5wcm90b3R5cGUucHlfdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCB1cGRhdGVkID0gW10gLmNvbmNhdC5hcHBseSAodGhpcy5zbGljZSAoKSwgYXJndW1lbnRzKSAuc29ydCAoKTtcbiAgICB0aGlzLnB5X2NsZWFyICgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodXBkYXRlZCBbaV0gIT0gdXBkYXRlZCBbaSAtIDFdKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2ggKHVwZGF0ZWQgW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5BcnJheS5wcm90b3R5cGUuX19lcV9fID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoICE9IG90aGVyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9fY2xhc3NfXyA9PSBzZXQpIHtcbiAgICAgICAgdGhpcy5zb3J0ICgpO1xuICAgICAgICBvdGhlci5zb3J0ICgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMgW2ldICE9IG90aGVyIFtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbkFycmF5LnByb3RvdHlwZS5fX25lX18gPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICByZXR1cm4gIXRoaXMuX19lcV9fIChvdGhlcik7XG59O1xuQXJyYXkucHJvdG90eXBlLl9fbGVfXyA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIGlmICh0aGlzLl9fY2xhc3NfXyA9PSBzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWJzZXQgKG90aGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMgW2ldID4gb3RoZXIgW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcyBbaV0gPCBvdGhlciBbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuQXJyYXkucHJvdG90eXBlLl9fZ2VfXyA9IGZ1bmN0aW9uIChvdGhlcikge1xuICAgIGlmICh0aGlzLl9fY2xhc3NfXyA9PSBzZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdXBlcnNldCAob3RoZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcyBbaV0gPCBvdGhlciBbaV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzIFtpXSA+IG90aGVyIFtpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5BcnJheS5wcm90b3R5cGUuX19sdF9fID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5fX2NsYXNzX18gPT0gc2V0ID9cbiAgICAgICAgdGhpcy5pc3N1YnNldCAob3RoZXIpICYmICF0aGlzLmlzc3VwZXJzZXQgKG90aGVyKSA6XG4gICAgICAgICF0aGlzLl9fZ2VfXyAob3RoZXIpXG4gICAgKTtcbn07XG5BcnJheS5wcm90b3R5cGUuX19ndF9fID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5fX2NsYXNzX18gPT0gc2V0ID9cbiAgICAgICAgdGhpcy5pc3N1cGVyc2V0IChvdGhlcikgJiYgIXRoaXMuaXNzdWJzZXQgKG90aGVyKSA6XG4gICAgICAgICF0aGlzLl9fbGVfXyAob3RoZXIpXG4gICAgKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gYnl0ZWFycmF5IChieXRhYmxlLCBlbmNvZGluZykge1xuICAgIGlmIChieXRhYmxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkgKDApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGFUeXBlID0gcHlfdHlwZW9mIChieXRhYmxlKTtcbiAgICAgICAgaWYgKGFUeXBlID09IGludCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5IChieXRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhVHlwZSA9PSBzdHIpIHtcbiAgICAgICAgICAgIGxldCBhQnl0ZXMgPSBuZXcgVWludDhBcnJheSAobGVuIChieXRhYmxlKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbiAoYnl0YWJsZSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGFCeXRlcyBbaV0gPSBieXRhYmxlLmNoYXJDb2RlQXQgKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFCeXRlcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhVHlwZSA9PSBsaXN0IHx8IGFUeXBlID09IHR1cGxlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkgKGJ5dGFibGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgcHlfVHlwZUVycm9yO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHZhciBieXRlcyA9IGJ5dGVhcnJheTtcblVpbnQ4QXJyYXkucHJvdG90eXBlLl9fYWRkX18gPSBmdW5jdGlvbiAoYUJ5dGVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5ICh0aGlzLmxlbmd0aCArIGFCeXRlcy5sZW5ndGgpO1xuICAgIHJlc3VsdC5zZXQgKHRoaXMpO1xuICAgIHJlc3VsdC5zZXQgKGFCeXRlcywgdGhpcy5sZW5ndGgpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuVWludDhBcnJheS5wcm90b3R5cGUuX19tdWxfXyA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkgKHNjYWxhciAqIHRoaXMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjYWxhcjsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5zZXQgKHRoaXMsIGkgKiB0aGlzLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuVWludDhBcnJheS5wcm90b3R5cGUuX19ybXVsX18gPSBVaW50OEFycmF5LnByb3RvdHlwZS5fX211bF9fO1xuZXhwb3J0IGZ1bmN0aW9uIHN0ciAoc3RyaW5nYWJsZSkge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nYWJsZSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBzdHJpbmdhYmxlLnRvU3RyaW5nKCk7XG4gICAgZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nYWJsZS5fX3N0cl9fICgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcHIgKHN0cmluZ2FibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcgKHN0cmluZ2FibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblN0cmluZy5wcm90b3R5cGUuX19jbGFzc19fID0gc3RyO1xuc3RyLl9fbmFtZV9fID0gJ3N0cic7XG5zdHIuX19iYXNlc19fID0gW29iamVjdF07XG5TdHJpbmcucHJvdG90eXBlLl9faXRlcl9fID0gZnVuY3Rpb24gKCkge25ldyBfX1B5SXRlcmF0b3JfXyAodGhpcyk7fTtcblN0cmluZy5wcm90b3R5cGUuX19yZXByX18gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLmluZGV4T2YgKCdcXCcnKSA9PSAtMSA/ICdcXCcnICsgdGhpcyArICdcXCcnIDogJ1wiJyArIHRoaXMgKyAnXCInKSAucHlfcmVwbGFjZSAoJ1xcdCcsICdcXFxcdCcpIC5weV9yZXBsYWNlICgnXFxuJywgJ1xcXFxuJyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5fX3N0cl9fID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xufTtcblN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQgKDApLnRvVXBwZXJDYXNlICgpICsgdGhpcy5zbGljZSAoMSk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5lbmRzd2l0aCA9IGZ1bmN0aW9uIChzdWZmaXgpIHtcbiAgICBpZiAoc3VmZml4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wO2k8c3VmZml4Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNsaWNlICgtc3VmZml4W2ldLmxlbmd0aCkgPT0gc3VmZml4W2ldKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlXG4gICAgICAgIHJldHVybiBzdWZmaXggPT0gJycgfHwgdGhpcy5zbGljZSAoLXN1ZmZpeC5sZW5ndGgpID09IHN1ZmZpeDtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKHN1Yiwgc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleE9mIChzdWIsIHN0YXJ0KTtcbn07XG5TdHJpbmcucHJvdG90eXBlLl9fZ2V0c2xpY2VfXyA9IGZ1bmN0aW9uIChzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChzdGFydCA8IDApIHtcbiAgICAgICAgc3RhcnQgPSB0aGlzLmxlbmd0aCArIHN0YXJ0O1xuICAgIH1cbiAgICBpZiAoc3RvcCA9PSBudWxsKSB7XG4gICAgICAgIHN0b3AgPSB0aGlzLmxlbmd0aDtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RvcCA8IDApIHtcbiAgICAgICAgc3RvcCA9IHRoaXMubGVuZ3RoICsgc3RvcDtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGlmIChzdGVwID09IDEpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5zdWJzdHJpbmcgKHN0YXJ0LCBzdG9wKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gc3RhcnQ7IGluZGV4IDwgc3RvcDsgaW5kZXggKz0gc3RlcCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCAodGhpcy5jaGFyQXQoaW5kZXgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbl9fc2V0cHJvcGVydHlfXyAoU3RyaW5nLnByb3RvdHlwZSwgJ2Zvcm1hdCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtyZXR1cm4gX19nZXRfXyAodGhpcywgZnVuY3Rpb24gKHNlbGYpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSB0dXBsZSAoW10gLnNsaWNlLmFwcGx5IChhcmd1bWVudHMpLnNsaWNlICgxKSk7XG4gICAgICAgIHZhciBhdXRvSW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gc2VsZi5yZXBsYWNlICgvXFx7KFxcdyopXFx9L2csIGZ1bmN0aW9uIChtYXRjaCwga2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09ICcnKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gYXV0b0luZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoa2V5ID09ICtrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJncyBba2V5XSA9PT0gdW5kZWZpbmVkID8gbWF0Y2ggOiBzdHIgKGFyZ3MgW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGFyZ3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJncyBbaW5kZXhdID09ICdvYmplY3QnICYmIGFyZ3MgW2luZGV4XVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIgKGFyZ3MgW2luZGV4XVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO30sXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxufSk7XG5TdHJpbmcucHJvdG90eXBlLmlzYWxudW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC9eWzAtOWEtekEtWl17MSx9JC8udGVzdCh0aGlzKVxufVxuU3RyaW5nLnByb3RvdHlwZS5pc2FscGhhID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAvXlthLXpBLVpdezEsfSQvLnRlc3QodGhpcylcbn1cblN0cmluZy5wcm90b3R5cGUuaXNkZWNpbWFsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAvXlswLTldezEsfSQvLnRlc3QodGhpcylcbn1cblN0cmluZy5wcm90b3R5cGUuaXNkaWdpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5pc2RlY2ltYWwoKVxufVxuU3RyaW5nLnByb3RvdHlwZS5pc2xvd2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAvXlthLXpdezEsfSQvLnRlc3QodGhpcylcbn1cblN0cmluZy5wcm90b3R5cGUuaXN1cHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gL15bQS1aXXsxLH0kLy50ZXN0KHRoaXMpXG59XG5TdHJpbmcucHJvdG90eXBlLmlzc3BhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC9eW1xcc117MSx9JC8udGVzdCh0aGlzKVxufVxuU3RyaW5nLnByb3RvdHlwZS5pc251bWVyaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICFpc05hTiAocGFyc2VGbG9hdCAodGhpcykpICYmIGlzRmluaXRlICh0aGlzKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiAoc3RyaW5ncykge1xuICAgIHN0cmluZ3MgPSBBcnJheS5mcm9tIChzdHJpbmdzKTtcbiAgICByZXR1cm4gc3RyaW5ncy5qb2luICh0aGlzKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLmxvd2VyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlICgpO1xufTtcblN0cmluZy5wcm90b3R5cGUucHlfcmVwbGFjZSA9IGZ1bmN0aW9uIChvbGQsIGFOZXcsIG1heHJlcGxhY2UpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpdCAob2xkLCBtYXhyZXBsYWNlKSAuam9pbiAoYU5ldyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5sc3RyaXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZSAoL15cXHMqL2csICcnKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnJmaW5kID0gZnVuY3Rpb24gKHN1Yiwgc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0SW5kZXhPZiAoc3ViLCBzdGFydCk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5yc3BsaXQgPSBmdW5jdGlvbiAoc2VwLCBtYXhzcGxpdCkge1xuICAgIGlmIChzZXAgPT0gdW5kZWZpbmVkIHx8IHNlcCA9PSBudWxsKSB7XG4gICAgICAgIHNlcCA9IC9cXHMrLztcbiAgICAgICAgdmFyIHN0cmlwcGVkID0gdGhpcy5zdHJpcCAoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBzdHJpcHBlZCA9IHRoaXM7XG4gICAgfVxuICAgIGlmIChtYXhzcGxpdCA9PSB1bmRlZmluZWQgfHwgbWF4c3BsaXQgPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIHN0cmlwcGVkLnNwbGl0IChzZXApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHN0cmlwcGVkLnNwbGl0IChzZXApO1xuICAgICAgICBpZiAobWF4c3BsaXQgPCByZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgbWF4cnNwbGl0ID0gcmVzdWx0Lmxlbmd0aCAtIG1heHNwbGl0O1xuICAgICAgICAgICAgcmV0dXJuIFtyZXN1bHQuc2xpY2UgKDAsIG1heHJzcGxpdCkgLmpvaW4gKHNlcCldIC5jb25jYXQgKHJlc3VsdC5zbGljZSAobWF4cnNwbGl0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxufTtcblN0cmluZy5wcm90b3R5cGUucnN0cmlwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UgKC9cXHMqJC9nLCAnJyk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS5weV9zcGxpdCA9IGZ1bmN0aW9uIChzZXAsIG1heHNwbGl0KSB7XG4gICAgaWYgKHNlcCA9PSB1bmRlZmluZWQgfHwgc2VwID09IG51bGwpIHtcbiAgICAgICAgc2VwID0gL1xccysvO1xuICAgICAgICB2YXIgc3RyaXBwZWQgPSB0aGlzLnN0cmlwICgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIHN0cmlwcGVkID0gdGhpcztcbiAgICB9XG4gICAgaWYgKG1heHNwbGl0ID09IHVuZGVmaW5lZCB8fCBtYXhzcGxpdCA9PSAtMSkge1xuICAgICAgICByZXR1cm4gc3RyaXBwZWQuc3BsaXQgKHNlcCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc3RyaXBwZWQuc3BsaXQgKHNlcCk7XG4gICAgICAgIGlmIChtYXhzcGxpdCA8IHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UgKDAsIG1heHNwbGl0KS5jb25jYXQgKFtyZXN1bHQuc2xpY2UgKG1heHNwbGl0KS5qb2luIChzZXApXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxufTtcblN0cmluZy5wcm90b3R5cGUuc3RhcnRzd2l0aCA9IGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBpZiAocHJlZml4IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wO2k8cHJlZml4Lmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4T2YgKHByZWZpeCBbaV0pID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9IGVsc2VcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXhPZiAocHJlZml4KSA9PSAwO1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5TdHJpbmcucHJvdG90eXBlLnN0cmlwID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnRyaW0gKCk7XG59O1xuU3RyaW5nLnByb3RvdHlwZS51cHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy50b1VwcGVyQ2FzZSAoKTtcbn07XG5TdHJpbmcucHJvdG90eXBlLl9fbXVsX18gPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NhbGFyOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5TdHJpbmcucHJvdG90eXBlLl9fcm11bF9fID0gU3RyaW5nLnByb3RvdHlwZS5fX211bF9fO1xuZnVuY3Rpb24gX19jb250YWluc19fIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzT3duUHJvcGVydHkgKGVsZW1lbnQpO1xufVxuZnVuY3Rpb24gX19rZXlzX18gKCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIgYXR0cmliIGluIHRoaXMpIHtcbiAgICAgICAgaWYgKCFfX3NwZWNpYWxhdHRyaWJfXyAoYXR0cmliKSkge1xuICAgICAgICAgICAga2V5cy5wdXNoIChhdHRyaWIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xufVxuZnVuY3Rpb24gX19pdGVtc19fICgpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICBmb3IgKHZhciBhdHRyaWIgaW4gdGhpcykge1xuICAgICAgICBpZiAoIV9fc3BlY2lhbGF0dHJpYl9fIChhdHRyaWIpKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoIChbYXR0cmliLCB0aGlzIFthdHRyaWJdXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xufVxuZnVuY3Rpb24gX19kZWxfXyAoa2V5KSB7XG4gICAgZGVsZXRlIHRoaXMgW2tleV07XG59XG5mdW5jdGlvbiBfX2NsZWFyX18gKCkge1xuICAgIGZvciAodmFyIGF0dHJpYiBpbiB0aGlzKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzIFthdHRyaWJdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9fZ2V0ZGVmYXVsdF9fIChhS2V5LCBhRGVmYXVsdCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzIFthS2V5XTtcbiAgICBpZiAocmVzdWx0ID09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXN1bHQgPSB0aGlzIFsncHlfJyArIGFLZXldXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgPT0gdW5kZWZpbmVkID8gKGFEZWZhdWx0ID09IHVuZGVmaW5lZCA/IG51bGwgOiBhRGVmYXVsdCkgOiByZXN1bHQ7XG59XG5mdW5jdGlvbiBfX3NldGRlZmF1bHRfXyAoYUtleSwgYURlZmF1bHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBbYUtleV07XG4gICAgaWYgKHJlc3VsdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgdmFyIHZhbCA9IGFEZWZhdWx0ID09IHVuZGVmaW5lZCA/IG51bGwgOiBhRGVmYXVsdDtcbiAgICB0aGlzIFthS2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsO1xufVxuZnVuY3Rpb24gX19wb3BfXyAoYUtleSwgYURlZmF1bHQpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBbYUtleV07XG4gICAgaWYgKHJlc3VsdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMgW2FLZXldO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICggYURlZmF1bHQgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHRocm93IEtleUVycm9yIChhS2V5LCBuZXcgRXJyb3IoKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFEZWZhdWx0O1xufVxuZnVuY3Rpb24gX19wb3BpdGVtX18gKCkge1xuICAgIHZhciBhS2V5ID0gT2JqZWN0LmtleXMgKHRoaXMpIFswXTtcbiAgICBpZiAoYUtleSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IEtleUVycm9yIChcInBvcGl0ZW0oKTogZGljdGlvbmFyeSBpcyBlbXB0eVwiLCBuZXcgRXJyb3IgKCkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gdHVwbGUgKFthS2V5LCB0aGlzIFthS2V5XV0pO1xuICAgIGRlbGV0ZSB0aGlzIFthS2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gX191cGRhdGVfXyAoYURpY3QpIHtcbiAgICBmb3IgKHZhciBhS2V5IGluIGFEaWN0KSB7XG4gICAgICAgIHRoaXMgW2FLZXldID0gYURpY3QgW2FLZXldO1xuICAgIH1cbn1cbmZ1bmN0aW9uIF9fdmFsdWVzX18gKCkge1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBhdHRyaWIgaW4gdGhpcykge1xuICAgICAgICBpZiAoIV9fc3BlY2lhbGF0dHJpYl9fIChhdHRyaWIpKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCAodGhpcyBbYXR0cmliXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlcztcbn1cbmZ1bmN0aW9uIF9fZGdldGl0ZW1fXyAoYUtleSkge1xuICAgIHJldHVybiB0aGlzIFthS2V5XTtcbn1cbmZ1bmN0aW9uIF9fZHNldGl0ZW1fXyAoYUtleSwgYVZhbHVlKSB7XG4gICAgdGhpcyBbYUtleV0gPSBhVmFsdWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZGljdCAob2JqZWN0T3JQYWlycykge1xuICAgIHZhciBpbnN0YW5jZSA9IHt9O1xuICAgIGlmICghb2JqZWN0T3JQYWlycyB8fCBvYmplY3RPclBhaXJzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgaWYgKG9iamVjdE9yUGFpcnMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmplY3RPclBhaXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYWlyID0gb2JqZWN0T3JQYWlycyBbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICggIShwYWlyIGluc3RhbmNlb2YgQXJyYXkpIHx8IHBhaXIubGVuZ3RoICE9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVmFsdWVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGljdCB1cGRhdGUgc2VxdWVuY2UgZWxlbWVudCAjXCIgKyBpbmRleCArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBoYXMgbGVuZ3RoIFwiICsgcGFpci5sZW5ndGggK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI7IDIgaXMgcmVxdWlyZWRcIiwgbmV3IEVycm9yKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gcGFpciBbMF07XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IHBhaXIgWzFdO1xuICAgICAgICAgICAgICAgIGlmICghKG9iamVjdE9yUGFpcnMgaW5zdGFuY2VvZiBBcnJheSkgJiYgb2JqZWN0T3JQYWlycyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc2luc3RhbmNlIChvYmplY3RPclBhaXJzLCBkaWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGRpY3QgKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlIFtrZXldID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNpbnN0YW5jZSAob2JqZWN0T3JQYWlycywgZGljdCkpIHtcbiAgICAgICAgICAgIHZhciBhS2V5cyA9IG9iamVjdE9yUGFpcnMucHlfa2V5cyAoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhS2V5cy5sZW5ndGg7IGluZGV4KysgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGFLZXlzIFtpbmRleF07XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgW2tleV0gPSBvYmplY3RPclBhaXJzIFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9iamVjdE9yUGFpcnMgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gb2JqZWN0T3JQYWlycztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFZhbHVlRXJyb3IgKFwiSW52YWxpZCB0eXBlIG9mIG9iamVjdCBmb3IgZGljdCBjcmVhdGlvblwiLCBuZXcgRXJyb3IgKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9fc2V0cHJvcGVydHlfXyAoaW5zdGFuY2UsICdfX2NsYXNzX18nLCB7dmFsdWU6IGRpY3QsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZX0pO1xuICAgIF9fc2V0cHJvcGVydHlfXyAoaW5zdGFuY2UsICdfX2NvbnRhaW5zX18nLCB7dmFsdWU6IF9fY29udGFpbnNfXywgZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgICBfX3NldHByb3BlcnR5X18gKGluc3RhbmNlLCAncHlfa2V5cycsIHt2YWx1ZTogX19rZXlzX18sIGVudW1lcmFibGU6IGZhbHNlfSk7XG4gICAgX19zZXRwcm9wZXJ0eV9fIChpbnN0YW5jZSwgJ19faXRlcl9fJywge3ZhbHVlOiBmdW5jdGlvbiAoKSB7bmV3IF9fUHlJdGVyYXRvcl9fICh0aGlzLnB5X2tleXMgKCkpO30sIGVudW1lcmFibGU6IGZhbHNlfSk7XG4gICAgX19zZXRwcm9wZXJ0eV9fIChpbnN0YW5jZSwgU3ltYm9sLml0ZXJhdG9yLCB7dmFsdWU6IGZ1bmN0aW9uICgpIHtuZXcgX19Kc0l0ZXJhdG9yX18gKHRoaXMucHlfa2V5cyAoKSk7fSwgZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgICBfX3NldHByb3BlcnR5X18gKGluc3RhbmNlLCAncHlfaXRlbXMnLCB7dmFsdWU6IF9faXRlbXNfXywgZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgICBfX3NldHByb3BlcnR5X18gKGluc3RhbmNlLCAncHlfZGVsJywge3ZhbHVlOiBfX2RlbF9fLCBlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICAgIF9fc2V0cHJvcGVydHlfXyAoaW5zdGFuY2UsICdweV9jbGVhcicsIHt2YWx1ZTogX19jbGVhcl9fLCBlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICAgIF9fc2V0cHJvcGVydHlfXyAoaW5zdGFuY2UsICdweV9nZXQnLCB7dmFsdWU6IF9fZ2V0ZGVmYXVsdF9fLCBlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICAgIF9fc2V0cHJvcGVydHlfXyAoaW5zdGFuY2UsICdweV9zZXRkZWZhdWx0Jywge3ZhbHVlOiBfX3NldGRlZmF1bHRfXywgZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgICBfX3NldHByb3BlcnR5X18gKGluc3RhbmNlLCAncHlfcG9wJywge3ZhbHVlOiBfX3BvcF9fLCBlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICAgIF9fc2V0cHJvcGVydHlfXyAoaW5zdGFuY2UsICdweV9wb3BpdGVtJywge3ZhbHVlOiBfX3BvcGl0ZW1fXywgZW51bWVyYWJsZTogZmFsc2V9KTtcbiAgICBfX3NldHByb3BlcnR5X18gKGluc3RhbmNlLCAncHlfdXBkYXRlJywge3ZhbHVlOiBfX3VwZGF0ZV9fLCBlbnVtZXJhYmxlOiBmYWxzZX0pO1xuICAgIF9fc2V0cHJvcGVydHlfXyAoaW5zdGFuY2UsICdweV92YWx1ZXMnLCB7dmFsdWU6IF9fdmFsdWVzX18sIGVudW1lcmFibGU6IGZhbHNlfSk7XG4gICAgX19zZXRwcm9wZXJ0eV9fIChpbnN0YW5jZSwgJ19fZ2V0aXRlbV9fJywge3ZhbHVlOiBfX2RnZXRpdGVtX18sIGVudW1lcmFibGU6IGZhbHNlfSk7XG4gICAgX19zZXRwcm9wZXJ0eV9fIChpbnN0YW5jZSwgJ19fc2V0aXRlbV9fJywge3ZhbHVlOiBfX2RzZXRpdGVtX18sIGVudW1lcmFibGU6IGZhbHNlfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZGljdC5fX25hbWVfXyA9ICdkaWN0JztcbmRpY3QuX19iYXNlc19fID0gW29iamVjdF07XG5mdW5jdGlvbiBfX3NldGRvY19fIChkb2NTdHJpbmcpIHtcbiAgICB0aGlzLl9fZG9jX18gPSBkb2NTdHJpbmc7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5fX3NldHByb3BlcnR5X18gKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ19fc2V0ZG9jX18nLCB7dmFsdWU6IF9fc2V0ZG9jX18sIGVudW1lcmFibGU6IGZhbHNlfSk7XG5leHBvcnQgZnVuY3Rpb24gX19qc21vZF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX21vZF9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fbW9kX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19ybW9kX18nIGluIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuX19ybW9kX18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgJSBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19tb2RfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19tb2RfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX21vZF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcm1vZF9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBiLl9fcm1vZF9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoKGEgJSBiKSArIGIpICUgYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fcG93X18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fcG93X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19wb3dfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3Jwb3dfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYi5fX3Jwb3dfXyAoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cgKGEsIGIpO1xuICAgIH1cbn07XG5leHBvcnQgdmFyIHBvdyA9IF9fcG93X187XG5leHBvcnQgZnVuY3Rpb24gX19uZWdfXyAoYSkge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19uZWdfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX25lZ19fICgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIC1hO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19tYXRtdWxfXyAoYSwgYikge1xuICAgIHJldHVybiBhLl9fbWF0bXVsX18gKGIpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBfX211bF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX211bF9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fbXVsX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19ybXVsX18nIGluIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuX19ybXVsX18gKGEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYS5fX211bF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGIuX19ybXVsX18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgKiBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX190cnVlZGl2X18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fdHJ1ZWRpdl9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fdHJ1ZWRpdl9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcnRydWVkaXZfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYi5fX3J0cnVlZGl2X18gKGEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19kaXZfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX2Rpdl9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcmRpdl9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBiLl9fcmRpdl9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIC8gYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fZmxvb3JkaXZfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19mbG9vcmRpdl9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fZmxvb3JkaXZfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3JmbG9vcmRpdl9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBiLl9fcmZsb29yZGl2X18gKGEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19kaXZfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX2Rpdl9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcmRpdl9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBiLl9fcmRpdl9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yIChhIC8gYik7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2FkZF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2FkZF9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fYWRkX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19yYWRkX18nIGluIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuX19yYWRkX18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19zdWJfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19zdWJfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX3N1Yl9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcnN1Yl9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBiLl9fcnN1Yl9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fbHNoaWZ0X18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fbHNoaWZ0X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19sc2hpZnRfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3Jsc2hpZnRfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYi5fX3Jsc2hpZnRfXyAoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYSA8PCBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19yc2hpZnRfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19yc2hpZnRfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX3JzaGlmdF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcnJzaGlmdF9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBiLl9fcnJzaGlmdF9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhID4+IGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX29yX18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fb3JfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX29yX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19yb3JfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYi5fX3Jvcl9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIHwgYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9feG9yX18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19feG9yX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX194b3JfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3J4b3JfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYi5fX3J4b3JfXyAoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYSBeIGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2FuZF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2FuZF9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fYW5kX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19yYW5kX18nIGluIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuX19yYW5kX18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgJiBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19lcV9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2VxX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19lcV9fIChiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhID09IGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX25lX18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fbmVfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX25lX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgIT0gYlxuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19sdF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2x0X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19sdF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIDwgYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fbGVfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19sZV9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fbGVfXyAoYik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYSA8PSBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19ndF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2d0X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19ndF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhID4gYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19nZV9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9fZ2VfXyAoYik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYSA+PSBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19pbWF0bXVsX18gKGEsIGIpIHtcbiAgICBpZiAoJ19faW1hdG11bF9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9faW1hdG11bF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhLl9fbWF0bXVsX18gKGIpO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19pcG93X18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fcG93X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19pcG93X18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19pcG93X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19wb3dfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3Jwb3dfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYi5fX3Jwb3dfXyAoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cgKGEsIGIpO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19panNtb2RfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19pbW9kX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19pc21vZF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fbW9kX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19tb2RfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3Jwb3dfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYi5fX3Jtb2RfXyAoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYSAlIGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2ltb2RfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19pbW9kX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19pbW9kX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19tb2RfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX21vZF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcm1vZF9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBiLl9fcm1vZF9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoKGEgJSBiKSArIGIpICUgYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9faW11bF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2ltdWxfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX2ltdWxfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX211bF9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhID0gYS5fX211bF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcm11bF9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBhID0gYi5fX3JtdWxfXyAoYSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBhID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBhID0gYS5fX211bF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGEgPSBiLl9fcm11bF9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhICo9IGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2lkaXZfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19pZGl2X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19pZGl2X18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19kaXZfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYSA9IGEuX19kaXZfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3JkaXZfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYSA9IGIuX19yZGl2X18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgLz0gYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9faWFkZF9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2lhZGRfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYS5fX2lhZGRfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2FkZF9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhID0gYS5fX2FkZF9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGIgPT0gJ29iamVjdCcgJiYgJ19fcmFkZF9fJyBpbiBiKSB7XG4gICAgICAgIHJldHVybiBhID0gYi5fX3JhZGRfXyAoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYSArPSBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19pc3ViX18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19faXN1Yl9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9faXN1Yl9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19fc3ViX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEgPSBhLl9fc3ViX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19yc3ViX18nIGluIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPSBiLl9fcnN1Yl9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIC09IGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2lsc2hpZnRfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19pbHNoaWZ0X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19pbHNoaWZ0X18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19sc2hpZnRfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYSA9IGEuX19sc2hpZnRfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3Jsc2hpZnRfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYSA9IGIuX19ybHNoaWZ0X18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgPDw9IGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2lyc2hpZnRfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19pcnNoaWZ0X18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19pcnNoaWZ0X18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19yc2hpZnRfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYSA9IGEuX19yc2hpZnRfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3Jyc2hpZnRfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYSA9IGIuX19ycnNoaWZ0X18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgPj49IGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2lvcl9fIChhLCBiKSB7XG4gICAgaWYgKHR5cGVvZiBhID09ICdvYmplY3QnICYmICdfX2lvcl9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9faW9yX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19vcl9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhID0gYS5fX29yX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19yb3JfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYSA9IGIuX19yb3JfXyAoYSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYSB8PSBiO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gX19peG9yX18gKGEsIGIpIHtcbiAgICBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19faXhvcl9fJyBpbiBhKSB7XG4gICAgICAgIHJldHVybiBhLl9faXhvcl9fIChiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgJ19feG9yX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEgPSBhLl9feG9yX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAnX19yeG9yX18nIGluIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPSBiLl9fcnhvcl9fIChhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhIF49IGI7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBfX2lhbmRfXyAoYSwgYikge1xuICAgIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19pYW5kX18nIGluIGEpIHtcbiAgICAgICAgcmV0dXJuIGEuX19pYW5kX18gKGIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiAnX19hbmRfXycgaW4gYSkge1xuICAgICAgICByZXR1cm4gYSA9IGEuX19hbmRfXyAoYik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBiID09ICdvYmplY3QnICYmICdfX3JhbmRfXycgaW4gYikge1xuICAgICAgICByZXR1cm4gYSA9IGIuX19yYW5kX18gKGEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEgJj0gYjtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fZ2V0aXRlbV9fIChjb250YWluZXIsIGtleSkge1xuICAgIGlmICh0eXBlb2YgY29udGFpbmVyID09ICdvYmplY3QnICYmICdfX2dldGl0ZW1fXycgaW4gY29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybiBjb250YWluZXIuX19nZXRpdGVtX18gKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCh0eXBlb2YgY29udGFpbmVyID09ICdzdHJpbmcnIHx8IGNvbnRhaW5lciBpbnN0YW5jZW9mIEFycmF5KSAmJiBrZXkgPCAwKSB7XG4gICAgICAgIHJldHVybiBjb250YWluZXIgW2NvbnRhaW5lci5sZW5ndGggKyBrZXldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lciBba2V5XTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0aXRlbV9fIChjb250YWluZXIsIGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRhaW5lciA9PSAnb2JqZWN0JyAmJiAnX19zZXRpdGVtX18nIGluIGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuX19zZXRpdGVtX18gKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICgodHlwZW9mIGNvbnRhaW5lciA9PSAnc3RyaW5nJyB8fCBjb250YWluZXIgaW5zdGFuY2VvZiBBcnJheSkgJiYga2V5IDwgMCkge1xuICAgICAgICBjb250YWluZXIgW2NvbnRhaW5lci5sZW5ndGggKyBrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb250YWluZXIgW2tleV0gPSB2YWx1ZTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fZ2V0c2xpY2VfXyAoY29udGFpbmVyLCBsb3dlciwgdXBwZXIsIHN0ZXApIHtcbiAgICBpZiAodHlwZW9mIGNvbnRhaW5lciA9PSAnb2JqZWN0JyAmJiAnX19nZXRpdGVtX18nIGluIGNvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLl9fZ2V0aXRlbV9fIChbbG93ZXIsIHVwcGVyLCBzdGVwXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLl9fZ2V0c2xpY2VfXyAobG93ZXIsIHVwcGVyLCBzdGVwKTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0c2xpY2VfXyAoY29udGFpbmVyLCBsb3dlciwgdXBwZXIsIHN0ZXAsIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBjb250YWluZXIgPT0gJ29iamVjdCcgJiYgJ19fc2V0aXRlbV9fJyBpbiBjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLl9fc2V0aXRlbV9fIChbbG93ZXIsIHVwcGVyLCBzdGVwXSwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyLl9fc2V0c2xpY2VfXyAobG93ZXIsIHVwcGVyLCBzdGVwLCB2YWx1ZSk7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgQmFzZUV4Y2VwdGlvbiA9ICBfX2NsYXNzX18gKCdCYXNlRXhjZXB0aW9uJywgW29iamVjdF0sIHtcblx0X19tb2R1bGVfXzogX19uYW1lX18sXG59KTtcbmV4cG9ydCB2YXIgRXhjZXB0aW9uID0gIF9fY2xhc3NfXyAoJ0V4Y2VwdGlvbicsIFtCYXNlRXhjZXB0aW9uXSwge1xuXHRfX21vZHVsZV9fOiBfX25hbWVfXyxcblx0Z2V0IF9faW5pdF9fICgpIHtyZXR1cm4gX19nZXRfXyAodGhpcywgZnVuY3Rpb24gKHNlbGYpIHtcblx0XHR2YXIga3dhcmdzID0gZGljdCAoKTtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIF9faWxhc3RhcmcwX18gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0XHRcdGlmIChhcmd1bWVudHMgW19faWxhc3RhcmcwX19dICYmIGFyZ3VtZW50cyBbX19pbGFzdGFyZzBfX10uaGFzT3duUHJvcGVydHkgKFwiX19rd2FyZ3RyYW5zX19cIikpIHtcblx0XHRcdFx0dmFyIF9fYWxsa3dhcmdzMF9fID0gYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fLS1dO1xuXHRcdFx0XHRmb3IgKHZhciBfX2F0dHJpYjBfXyBpbiBfX2FsbGt3YXJnczBfXykge1xuXHRcdFx0XHRcdHN3aXRjaCAoX19hdHRyaWIwX18pIHtcblx0XHRcdFx0XHRcdGNhc2UgJ3NlbGYnOiB2YXIgc2VsZiA9IF9fYWxsa3dhcmdzMF9fIFtfX2F0dHJpYjBfX107IGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDoga3dhcmdzIFtfX2F0dHJpYjBfX10gPSBfX2FsbGt3YXJnczBfXyBbX19hdHRyaWIwX19dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUga3dhcmdzLl9fa3dhcmd0cmFuc19fO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGFyZ3MgPSB0dXBsZSAoW10uc2xpY2UuYXBwbHkgKGFyZ3VtZW50cykuc2xpY2UgKDEsIF9faWxhc3RhcmcwX18gKyAxKSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGFyZ3MgPSB0dXBsZSAoKTtcblx0XHR9XG5cdFx0c2VsZi5fX2FyZ3NfXyA9IGFyZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNlbGYuc3RhY2sgPSBrd2FyZ3MuZXJyb3Iuc3RhY2s7XG5cdFx0fVxuXHRcdGNhdGNoIChfX2V4Y2VwdDBfXykge1xuXHRcdFx0c2VsZi5zdGFjayA9ICdObyBzdGFjayB0cmFjZSBhdmFpbGFibGUnO1xuXHRcdH1cblx0fSk7fSxcblx0Z2V0IF9fcmVwcl9fICgpIHtyZXR1cm4gX19nZXRfXyAodGhpcywgZnVuY3Rpb24gKHNlbGYpIHtcblx0XHRpZiAobGVuIChzZWxmLl9fYXJnc19fKSA+IDEpIHtcblx0XHRcdHJldHVybiAne317fScuZm9ybWF0IChzZWxmLl9fY2xhc3NfXy5fX25hbWVfXywgcmVwciAodHVwbGUgKHNlbGYuX19hcmdzX18pKSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKGxlbiAoc2VsZi5fX2FyZ3NfXykpIHtcblx0XHRcdHJldHVybiAne30oe30pJy5mb3JtYXQgKHNlbGYuX19jbGFzc19fLl9fbmFtZV9fLCByZXByIChzZWxmLl9fYXJnc19fIFswXSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiAne30oKScuZm9ybWF0IChzZWxmLl9fY2xhc3NfXy5fX25hbWVfXyk7XG5cdFx0fVxuXHR9KTt9LFxuXHRnZXQgX19zdHJfXyAoKSB7cmV0dXJuIF9fZ2V0X18gKHRoaXMsIGZ1bmN0aW9uIChzZWxmKSB7XG5cdFx0aWYgKGxlbiAoc2VsZi5fX2FyZ3NfXykgPiAxKSB7XG5cdFx0XHRyZXR1cm4gc3RyICh0dXBsZSAoc2VsZi5fX2FyZ3NfXykpO1xuXHRcdH1cblx0XHRlbHNlIGlmIChsZW4gKHNlbGYuX19hcmdzX18pKSB7XG5cdFx0XHRyZXR1cm4gc3RyIChzZWxmLl9fYXJnc19fIFswXSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0fSk7fVxufSk7XG5leHBvcnQgdmFyIEl0ZXJhYmxlRXJyb3IgPSAgX19jbGFzc19fICgnSXRlcmFibGVFcnJvcicsIFtFeGNlcHRpb25dLCB7XG5cdF9fbW9kdWxlX186IF9fbmFtZV9fLFxuXHRnZXQgX19pbml0X18gKCkge3JldHVybiBfX2dldF9fICh0aGlzLCBmdW5jdGlvbiAoc2VsZiwgZXJyb3IpIHtcblx0XHRFeGNlcHRpb24uX19pbml0X18gKHNlbGYsIFwiQ2FuJ3QgaXRlcmF0ZSBvdmVyIG5vbi1pdGVyYWJsZVwiLCBfX2t3YXJndHJhbnNfXyAoe2Vycm9yOiBlcnJvcn0pKTtcblx0fSk7fVxufSk7XG5leHBvcnQgdmFyIFN0b3BJdGVyYXRpb24gPSAgX19jbGFzc19fICgnU3RvcEl0ZXJhdGlvbicsIFtFeGNlcHRpb25dLCB7XG5cdF9fbW9kdWxlX186IF9fbmFtZV9fLFxuXHRnZXQgX19pbml0X18gKCkge3JldHVybiBfX2dldF9fICh0aGlzLCBmdW5jdGlvbiAoc2VsZiwgZXJyb3IpIHtcblx0XHRFeGNlcHRpb24uX19pbml0X18gKHNlbGYsICdJdGVyYXRvciBleGhhdXN0ZWQnLCBfX2t3YXJndHJhbnNfXyAoe2Vycm9yOiBlcnJvcn0pKTtcblx0fSk7fVxufSk7XG5leHBvcnQgdmFyIFZhbHVlRXJyb3IgPSAgX19jbGFzc19fICgnVmFsdWVFcnJvcicsIFtFeGNlcHRpb25dLCB7XG5cdF9fbW9kdWxlX186IF9fbmFtZV9fLFxuXHRnZXQgX19pbml0X18gKCkge3JldHVybiBfX2dldF9fICh0aGlzLCBmdW5jdGlvbiAoc2VsZiwgbWVzc2FnZSwgZXJyb3IpIHtcblx0XHRFeGNlcHRpb24uX19pbml0X18gKHNlbGYsIG1lc3NhZ2UsIF9fa3dhcmd0cmFuc19fICh7ZXJyb3I6IGVycm9yfSkpO1xuXHR9KTt9XG59KTtcbmV4cG9ydCB2YXIgS2V5RXJyb3IgPSAgX19jbGFzc19fICgnS2V5RXJyb3InLCBbRXhjZXB0aW9uXSwge1xuXHRfX21vZHVsZV9fOiBfX25hbWVfXyxcblx0Z2V0IF9faW5pdF9fICgpIHtyZXR1cm4gX19nZXRfXyAodGhpcywgZnVuY3Rpb24gKHNlbGYsIG1lc3NhZ2UsIGVycm9yKSB7XG5cdFx0RXhjZXB0aW9uLl9faW5pdF9fIChzZWxmLCBtZXNzYWdlLCBfX2t3YXJndHJhbnNfXyAoe2Vycm9yOiBlcnJvcn0pKTtcblx0fSk7fVxufSk7XG5leHBvcnQgdmFyIEFzc2VydGlvbkVycm9yID0gIF9fY2xhc3NfXyAoJ0Fzc2VydGlvbkVycm9yJywgW0V4Y2VwdGlvbl0sIHtcblx0X19tb2R1bGVfXzogX19uYW1lX18sXG5cdGdldCBfX2luaXRfXyAoKSB7cmV0dXJuIF9fZ2V0X18gKHRoaXMsIGZ1bmN0aW9uIChzZWxmLCBtZXNzYWdlLCBlcnJvcikge1xuXHRcdGlmIChtZXNzYWdlKSB7XG5cdFx0XHRFeGNlcHRpb24uX19pbml0X18gKHNlbGYsIG1lc3NhZ2UsIF9fa3dhcmd0cmFuc19fICh7ZXJyb3I6IGVycm9yfSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdEV4Y2VwdGlvbi5fX2luaXRfXyAoc2VsZiwgX19rd2FyZ3RyYW5zX18gKHtlcnJvcjogZXJyb3J9KSk7XG5cdFx0fVxuXHR9KTt9XG59KTtcbmV4cG9ydCB2YXIgTm90SW1wbGVtZW50ZWRFcnJvciA9ICBfX2NsYXNzX18gKCdOb3RJbXBsZW1lbnRlZEVycm9yJywgW0V4Y2VwdGlvbl0sIHtcblx0X19tb2R1bGVfXzogX19uYW1lX18sXG5cdGdldCBfX2luaXRfXyAoKSB7cmV0dXJuIF9fZ2V0X18gKHRoaXMsIGZ1bmN0aW9uIChzZWxmLCBtZXNzYWdlLCBlcnJvcikge1xuXHRcdEV4Y2VwdGlvbi5fX2luaXRfXyAoc2VsZiwgbWVzc2FnZSwgX19rd2FyZ3RyYW5zX18gKHtlcnJvcjogZXJyb3J9KSk7XG5cdH0pO31cbn0pO1xuZXhwb3J0IHZhciBJbmRleEVycm9yID0gIF9fY2xhc3NfXyAoJ0luZGV4RXJyb3InLCBbRXhjZXB0aW9uXSwge1xuXHRfX21vZHVsZV9fOiBfX25hbWVfXyxcblx0Z2V0IF9faW5pdF9fICgpIHtyZXR1cm4gX19nZXRfXyAodGhpcywgZnVuY3Rpb24gKHNlbGYsIG1lc3NhZ2UsIGVycm9yKSB7XG5cdFx0RXhjZXB0aW9uLl9faW5pdF9fIChzZWxmLCBtZXNzYWdlLCBfX2t3YXJndHJhbnNfXyAoe2Vycm9yOiBlcnJvcn0pKTtcblx0fSk7fVxufSk7XG5leHBvcnQgdmFyIEF0dHJpYnV0ZUVycm9yID0gIF9fY2xhc3NfXyAoJ0F0dHJpYnV0ZUVycm9yJywgW0V4Y2VwdGlvbl0sIHtcblx0X19tb2R1bGVfXzogX19uYW1lX18sXG5cdGdldCBfX2luaXRfXyAoKSB7cmV0dXJuIF9fZ2V0X18gKHRoaXMsIGZ1bmN0aW9uIChzZWxmLCBtZXNzYWdlLCBlcnJvcikge1xuXHRcdEV4Y2VwdGlvbi5fX2luaXRfXyAoc2VsZiwgbWVzc2FnZSwgX19rd2FyZ3RyYW5zX18gKHtlcnJvcjogZXJyb3J9KSk7XG5cdH0pO31cbn0pO1xuZXhwb3J0IHZhciBweV9UeXBlRXJyb3IgPSAgX19jbGFzc19fICgncHlfVHlwZUVycm9yJywgW0V4Y2VwdGlvbl0sIHtcblx0X19tb2R1bGVfXzogX19uYW1lX18sXG5cdGdldCBfX2luaXRfXyAoKSB7cmV0dXJuIF9fZ2V0X18gKHRoaXMsIGZ1bmN0aW9uIChzZWxmLCBtZXNzYWdlLCBlcnJvcikge1xuXHRcdEV4Y2VwdGlvbi5fX2luaXRfXyAoc2VsZiwgbWVzc2FnZSwgX19rd2FyZ3RyYW5zX18gKHtlcnJvcjogZXJyb3J9KSk7XG5cdH0pO31cbn0pO1xuZXhwb3J0IHZhciBXYXJuaW5nID0gIF9fY2xhc3NfXyAoJ1dhcm5pbmcnLCBbRXhjZXB0aW9uXSwge1xuXHRfX21vZHVsZV9fOiBfX25hbWVfXyxcbn0pO1xuZXhwb3J0IHZhciBVc2VyV2FybmluZyA9ICBfX2NsYXNzX18gKCdVc2VyV2FybmluZycsIFtXYXJuaW5nXSwge1xuXHRfX21vZHVsZV9fOiBfX25hbWVfXyxcbn0pO1xuZXhwb3J0IHZhciBEZXByZWNhdGlvbldhcm5pbmcgPSAgX19jbGFzc19fICgnRGVwcmVjYXRpb25XYXJuaW5nJywgW1dhcm5pbmddLCB7XG5cdF9fbW9kdWxlX186IF9fbmFtZV9fLFxufSk7XG5leHBvcnQgdmFyIFJ1bnRpbWVXYXJuaW5nID0gIF9fY2xhc3NfXyAoJ1J1bnRpbWVXYXJuaW5nJywgW1dhcm5pbmddLCB7XG5cdF9fbW9kdWxlX186IF9fbmFtZV9fLFxufSk7XG5leHBvcnQgdmFyIF9fc29ydF9fID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBrZXksIHJldmVyc2UpIHtcblx0aWYgKHR5cGVvZiBrZXkgPT0gJ3VuZGVmaW5lZCcgfHwgKGtleSAhPSBudWxsICYmIGtleS5oYXNPd25Qcm9wZXJ0eSAoXCJfX2t3YXJndHJhbnNfX1wiKSkpIHs7XG5cdFx0dmFyIGtleSA9IG51bGw7XG5cdH07XG5cdGlmICh0eXBlb2YgcmV2ZXJzZSA9PSAndW5kZWZpbmVkJyB8fCAocmV2ZXJzZSAhPSBudWxsICYmIHJldmVyc2UuaGFzT3duUHJvcGVydHkgKFwiX19rd2FyZ3RyYW5zX19cIikpKSB7O1xuXHRcdHZhciByZXZlcnNlID0gZmFsc2U7XG5cdH07XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0dmFyIF9faWxhc3RhcmcwX18gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0XHRpZiAoYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fXSAmJiBhcmd1bWVudHMgW19faWxhc3RhcmcwX19dLmhhc093blByb3BlcnR5IChcIl9fa3dhcmd0cmFuc19fXCIpKSB7XG5cdFx0XHR2YXIgX19hbGxrd2FyZ3MwX18gPSBhcmd1bWVudHMgW19faWxhc3RhcmcwX18tLV07XG5cdFx0XHRmb3IgKHZhciBfX2F0dHJpYjBfXyBpbiBfX2FsbGt3YXJnczBfXykge1xuXHRcdFx0XHRzd2l0Y2ggKF9fYXR0cmliMF9fKSB7XG5cdFx0XHRcdFx0Y2FzZSAnaXRlcmFibGUnOiB2YXIgaXRlcmFibGUgPSBfX2FsbGt3YXJnczBfXyBbX19hdHRyaWIwX19dOyBicmVhaztcblx0XHRcdFx0XHRjYXNlICdrZXknOiB2YXIga2V5ID0gX19hbGxrd2FyZ3MwX18gW19fYXR0cmliMF9fXTsgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAncmV2ZXJzZSc6IHZhciByZXZlcnNlID0gX19hbGxrd2FyZ3MwX18gW19fYXR0cmliMF9fXTsgYnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0ZWxzZSB7XG5cdH1cblx0aWYgKGtleSkge1xuXHRcdGl0ZXJhYmxlLnNvcnQgKChmdW5jdGlvbiBfX2xhbWJkYV9fIChhLCBiKSB7XG5cdFx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgX19pbGFzdGFyZzBfXyA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXHRcdFx0XHRpZiAoYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fXSAmJiBhcmd1bWVudHMgW19faWxhc3RhcmcwX19dLmhhc093blByb3BlcnR5IChcIl9fa3dhcmd0cmFuc19fXCIpKSB7XG5cdFx0XHRcdFx0dmFyIF9fYWxsa3dhcmdzMF9fID0gYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fLS1dO1xuXHRcdFx0XHRcdGZvciAodmFyIF9fYXR0cmliMF9fIGluIF9fYWxsa3dhcmdzMF9fKSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKF9fYXR0cmliMF9fKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2EnOiB2YXIgYSA9IF9fYWxsa3dhcmdzMF9fIFtfX2F0dHJpYjBfX107IGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdiJzogdmFyIGIgPSBfX2FsbGt3YXJnczBfXyBbX19hdHRyaWIwX19dOyBicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIChrZXkgKGEpID4ga2V5IChiKSA/IDEgOiAtKDEpKTtcblx0XHR9KSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0aXRlcmFibGUuc29ydCAoKTtcblx0fVxuXHRpZiAocmV2ZXJzZSkge1xuXHRcdGl0ZXJhYmxlLnJldmVyc2UgKCk7XG5cdH1cbn07XG5leHBvcnQgdmFyIHNvcnRlZCA9IGZ1bmN0aW9uIChpdGVyYWJsZSwga2V5LCByZXZlcnNlKSB7XG5cdGlmICh0eXBlb2Yga2V5ID09ICd1bmRlZmluZWQnIHx8IChrZXkgIT0gbnVsbCAmJiBrZXkuaGFzT3duUHJvcGVydHkgKFwiX19rd2FyZ3RyYW5zX19cIikpKSB7O1xuXHRcdHZhciBrZXkgPSBudWxsO1xuXHR9O1xuXHRpZiAodHlwZW9mIHJldmVyc2UgPT0gJ3VuZGVmaW5lZCcgfHwgKHJldmVyc2UgIT0gbnVsbCAmJiByZXZlcnNlLmhhc093blByb3BlcnR5IChcIl9fa3dhcmd0cmFuc19fXCIpKSkgeztcblx0XHR2YXIgcmV2ZXJzZSA9IGZhbHNlO1xuXHR9O1xuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdHZhciBfX2lsYXN0YXJnMF9fID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cdFx0aWYgKGFyZ3VtZW50cyBbX19pbGFzdGFyZzBfX10gJiYgYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fXS5oYXNPd25Qcm9wZXJ0eSAoXCJfX2t3YXJndHJhbnNfX1wiKSkge1xuXHRcdFx0dmFyIF9fYWxsa3dhcmdzMF9fID0gYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fLS1dO1xuXHRcdFx0Zm9yICh2YXIgX19hdHRyaWIwX18gaW4gX19hbGxrd2FyZ3MwX18pIHtcblx0XHRcdFx0c3dpdGNoIChfX2F0dHJpYjBfXykge1xuXHRcdFx0XHRcdGNhc2UgJ2l0ZXJhYmxlJzogdmFyIGl0ZXJhYmxlID0gX19hbGxrd2FyZ3MwX18gW19fYXR0cmliMF9fXTsgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAna2V5JzogdmFyIGtleSA9IF9fYWxsa3dhcmdzMF9fIFtfX2F0dHJpYjBfX107IGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3JldmVyc2UnOiB2YXIgcmV2ZXJzZSA9IF9fYWxsa3dhcmdzMF9fIFtfX2F0dHJpYjBfX107IGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGVsc2Uge1xuXHR9XG5cdGlmIChweV90eXBlb2YgKGl0ZXJhYmxlKSA9PSBkaWN0KSB7XG5cdFx0dmFyIHJlc3VsdCA9IGNvcHkgKGl0ZXJhYmxlLnB5X2tleXMgKCkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdHZhciByZXN1bHQgPSBjb3B5IChpdGVyYWJsZSk7XG5cdH1cblx0X19zb3J0X18gKHJlc3VsdCwga2V5LCByZXZlcnNlKTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgdmFyIG1hcCA9IGZ1bmN0aW9uIChmdW5jLCBpdGVyYWJsZSkge1xuXHRyZXR1cm4gKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgX19hY2N1MF9fID0gW107XG5cdFx0Zm9yICh2YXIgaXRlbSBvZiBpdGVyYWJsZSkge1xuXHRcdFx0X19hY2N1MF9fLmFwcGVuZCAoZnVuYyAoaXRlbSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gX19hY2N1MF9fO1xuXHR9KSAoKTtcbn07XG5leHBvcnQgdmFyIGZpbHRlciA9IGZ1bmN0aW9uIChmdW5jLCBpdGVyYWJsZSkge1xuXHRpZiAoZnVuYyA9PSBudWxsKSB7XG5cdFx0dmFyIGZ1bmMgPSBib29sO1xuXHR9XG5cdHJldHVybiAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBfX2FjY3UwX18gPSBbXTtcblx0XHRmb3IgKHZhciBpdGVtIG9mIGl0ZXJhYmxlKSB7XG5cdFx0XHRpZiAoZnVuYyAoaXRlbSkpIHtcblx0XHRcdFx0X19hY2N1MF9fLmFwcGVuZCAoaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBfX2FjY3UwX187XG5cdH0pICgpO1xufTtcbmV4cG9ydCB2YXIgZGl2bW9kID0gZnVuY3Rpb24gKG4sIGQpIHtcblx0cmV0dXJuIHR1cGxlIChbTWF0aC5mbG9vciAobiAvIGQpLCBfX21vZF9fIChuLCBkKV0pO1xufTtcbmV4cG9ydCB2YXIgX19UZXJtaW5hbF9fID0gIF9fY2xhc3NfXyAoJ19fVGVybWluYWxfXycsIFtvYmplY3RdLCB7XG5cdF9fbW9kdWxlX186IF9fbmFtZV9fLFxuXHRnZXQgX19pbml0X18gKCkge3JldHVybiBfX2dldF9fICh0aGlzLCBmdW5jdGlvbiAoc2VsZikge1xuXHRcdHNlbGYuYnVmZmVyID0gJyc7XG5cdFx0dHJ5IHtcblx0XHRcdHNlbGYuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICgnX190ZXJtaW5hbF9fJyk7XG5cdFx0fVxuXHRcdGNhdGNoIChfX2V4Y2VwdDBfXykge1xuXHRcdFx0c2VsZi5lbGVtZW50ID0gbnVsbDtcblx0XHR9XG5cdFx0aWYgKHNlbGYuZWxlbWVudCkge1xuXHRcdFx0c2VsZi5lbGVtZW50LnN0eWxlLm92ZXJmbG93WCA9ICdhdXRvJztcblx0XHRcdHNlbGYuZWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cdFx0XHRzZWxmLmVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICc1cHgnO1xuXHRcdFx0c2VsZi5lbGVtZW50LmlubmVySFRNTCA9ICdfJztcblx0XHR9XG5cdH0pO30sXG5cdGdldCBwcmludCAoKSB7cmV0dXJuIF9fZ2V0X18gKHRoaXMsIGZ1bmN0aW9uIChzZWxmKSB7XG5cdFx0dmFyIHNlcCA9ICcgJztcblx0XHR2YXIgZW5kID0gJ1xcbic7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciBfX2lsYXN0YXJnMF9fID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cdFx0XHRpZiAoYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fXSAmJiBhcmd1bWVudHMgW19faWxhc3RhcmcwX19dLmhhc093blByb3BlcnR5IChcIl9fa3dhcmd0cmFuc19fXCIpKSB7XG5cdFx0XHRcdHZhciBfX2FsbGt3YXJnczBfXyA9IGFyZ3VtZW50cyBbX19pbGFzdGFyZzBfXy0tXTtcblx0XHRcdFx0Zm9yICh2YXIgX19hdHRyaWIwX18gaW4gX19hbGxrd2FyZ3MwX18pIHtcblx0XHRcdFx0XHRzd2l0Y2ggKF9fYXR0cmliMF9fKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdzZWxmJzogdmFyIHNlbGYgPSBfX2FsbGt3YXJnczBfXyBbX19hdHRyaWIwX19dOyBicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ3NlcCc6IHZhciBzZXAgPSBfX2FsbGt3YXJnczBfXyBbX19hdHRyaWIwX19dOyBicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2VuZCc6IHZhciBlbmQgPSBfX2FsbGt3YXJnczBfXyBbX19hdHRyaWIwX19dOyBicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBhcmdzID0gdHVwbGUgKFtdLnNsaWNlLmFwcGx5IChhcmd1bWVudHMpLnNsaWNlICgxLCBfX2lsYXN0YXJnMF9fICsgMSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHZhciBhcmdzID0gdHVwbGUgKCk7XG5cdFx0fVxuXHRcdHNlbGYuYnVmZmVyID0gJ3t9e317fScuZm9ybWF0IChzZWxmLmJ1ZmZlciwgc2VwLmpvaW4gKChmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX19hY2N1MF9fID0gW107XG5cdFx0XHRmb3IgKHZhciBhcmcgb2YgYXJncykge1xuXHRcdFx0XHRfX2FjY3UwX18uYXBwZW5kIChzdHIgKGFyZykpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF9fYWNjdTBfXztcblx0XHR9KSAoKSksIGVuZCkuX19nZXRzbGljZV9fICgtKDQwOTYpLCBudWxsLCAxKTtcblx0XHRpZiAoc2VsZi5lbGVtZW50KSB7XG5cdFx0XHRzZWxmLmVsZW1lbnQuaW5uZXJIVE1MID0gc2VsZi5idWZmZXIucHlfcmVwbGFjZSAoJ1xcbicsICc8YnI+JykucHlfcmVwbGFjZSAoJyAnLCAnJm5ic3AnKTtcblx0XHRcdHNlbGYuZWxlbWVudC5zY3JvbGxUb3AgPSBzZWxmLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nIChzZXAuam9pbiAoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dmFyIF9fYWNjdTBfXyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBhcmcgb2YgYXJncykge1xuXHRcdFx0XHRcdF9fYWNjdTBfXy5hcHBlbmQgKHN0ciAoYXJnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIF9fYWNjdTBfXztcblx0XHRcdH0pICgpKSk7XG5cdFx0fVxuXHR9KTt9LFxuXHRnZXQgaW5wdXQgKCkge3JldHVybiBfX2dldF9fICh0aGlzLCBmdW5jdGlvbiAoc2VsZiwgcXVlc3Rpb24pIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIF9faWxhc3RhcmcwX18gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblx0XHRcdGlmIChhcmd1bWVudHMgW19faWxhc3RhcmcwX19dICYmIGFyZ3VtZW50cyBbX19pbGFzdGFyZzBfX10uaGFzT3duUHJvcGVydHkgKFwiX19rd2FyZ3RyYW5zX19cIikpIHtcblx0XHRcdFx0dmFyIF9fYWxsa3dhcmdzMF9fID0gYXJndW1lbnRzIFtfX2lsYXN0YXJnMF9fLS1dO1xuXHRcdFx0XHRmb3IgKHZhciBfX2F0dHJpYjBfXyBpbiBfX2FsbGt3YXJnczBfXykge1xuXHRcdFx0XHRcdHN3aXRjaCAoX19hdHRyaWIwX18pIHtcblx0XHRcdFx0XHRcdGNhc2UgJ3NlbGYnOiB2YXIgc2VsZiA9IF9fYWxsa3dhcmdzMF9fIFtfX2F0dHJpYjBfX107IGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAncXVlc3Rpb24nOiB2YXIgcXVlc3Rpb24gPSBfX2FsbGt3YXJnczBfXyBbX19hdHRyaWIwX19dOyBicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0fVxuXHRcdHNlbGYucHJpbnQgKCd7fScuZm9ybWF0IChxdWVzdGlvbiksIF9fa3dhcmd0cmFuc19fICh7ZW5kOiAnJ30pKTtcblx0XHR2YXIgYW5zd2VyID0gd2luZG93LnByb21wdCAoJ1xcbicuam9pbiAoc2VsZi5idWZmZXIucHlfc3BsaXQgKCdcXG4nKS5fX2dldHNsaWNlX18gKC0oOCksIG51bGwsIDEpKSk7XG5cdFx0c2VsZi5wcmludCAoYW5zd2VyKTtcblx0XHRyZXR1cm4gYW5zd2VyO1xuXHR9KTt9XG59KTtcbmV4cG9ydCB2YXIgX190ZXJtaW5hbF9fID0gX19UZXJtaW5hbF9fICgpO1xuZXhwb3J0IHZhciBwcmludCA9IF9fdGVybWluYWxfXy5wcmludDtcbmV4cG9ydCB2YXIgaW5wdXQgPSBfX3Rlcm1pbmFsX18uaW5wdXQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9yZy50cmFuc2NyeXB0Ll9fcnVudGltZV9fLm1hcCIsIi8vIFRyYW5zY3J5cHQnZWQgZnJvbSBQeXRob24sIDIwMjAtMDQtMTUgMDA6NTg6MTNcbmltcG9ydCB7QXNzZXJ0aW9uRXJyb3IsIEF0dHJpYnV0ZUVycm9yLCBCYXNlRXhjZXB0aW9uLCBEZXByZWNhdGlvbldhcm5pbmcsIEV4Y2VwdGlvbiwgSW5kZXhFcnJvciwgSXRlcmFibGVFcnJvciwgS2V5RXJyb3IsIE5vdEltcGxlbWVudGVkRXJyb3IsIFJ1bnRpbWVXYXJuaW5nLCBTdG9wSXRlcmF0aW9uLCBVc2VyV2FybmluZywgVmFsdWVFcnJvciwgV2FybmluZywgX19Kc0l0ZXJhdG9yX18sIF9fUHlJdGVyYXRvcl9fLCBfX1Rlcm1pbmFsX18sIF9fYWRkX18sIF9fYW5kX18sIF9fY2FsbF9fLCBfX2NsYXNzX18sIF9fZW52aXJfXywgX19lcV9fLCBfX2Zsb29yZGl2X18sIF9fZ2VfXywgX19nZXRfXywgX19nZXRjbV9fLCBfX2dldGl0ZW1fXywgX19nZXRzbGljZV9fLCBfX2dldHNtX18sIF9fZ3RfXywgX19pX18sIF9faWFkZF9fLCBfX2lhbmRfXywgX19pZGl2X18sIF9faWpzbW9kX18sIF9faWxzaGlmdF9fLCBfX2ltYXRtdWxfXywgX19pbW9kX18sIF9faW11bF9fLCBfX2luX18sIF9faW5pdF9fLCBfX2lvcl9fLCBfX2lwb3dfXywgX19pcnNoaWZ0X18sIF9faXN1Yl9fLCBfX2l4b3JfXywgX19qc1VzZVB5TmV4dF9fLCBfX2pzbW9kX18sIF9fa19fLCBfX2t3YXJndHJhbnNfXywgX19sZV9fLCBfX2xzaGlmdF9fLCBfX2x0X18sIF9fbWF0bXVsX18sIF9fbWVyZ2VmaWVsZHNfXywgX19tZXJnZWt3YXJndHJhbnNfXywgX19tb2RfXywgX19tdWxfXywgX19uZV9fLCBfX25lZ19fLCBfX25lc3RfXywgX19vcl9fLCBfX3Bvd19fLCBfX3ByYWdtYV9fLCBfX3Byb3h5X18sIF9fcHlVc2VKc05leHRfXywgX19yc2hpZnRfXywgX19zZXRpdGVtX18sIF9fc2V0cHJvcGVydHlfXywgX19zZXRzbGljZV9fLCBfX3NvcnRfXywgX19zcGVjaWFsYXR0cmliX18sIF9fc3ViX18sIF9fc3VwZXJfXywgX190X18sIF9fdGVybWluYWxfXywgX190cnVlZGl2X18sIF9fd2l0aGJsb2NrX18sIF9feG9yX18sIGFicywgYWxsLCBhbnksIGFzc2VydCwgYm9vbCwgYnl0ZWFycmF5LCBieXRlcywgY2FsbGFibGUsIGNociwgY29weSwgZGVlcGNvcHksIGRlbGF0dHIsIGRpY3QsIGRpciwgZGl2bW9kLCBlbnVtZXJhdGUsIGZpbHRlciwgZmxvYXQsIGdldGF0dHIsIGhhc2F0dHIsIGlucHV0LCBpbnQsIGlzaW5zdGFuY2UsIGlzc3ViY2xhc3MsIGxlbiwgbGlzdCwgbWFwLCBtYXgsIG1pbiwgb2JqZWN0LCBvcmQsIHBvdywgcHJpbnQsIHByb3BlcnR5LCBweV9UeXBlRXJyb3IsIHB5X2l0ZXIsIHB5X21ldGF0eXBlLCBweV9uZXh0LCBweV9yZXZlcnNlZCwgcHlfdHlwZW9mLCByYW5nZSwgcmVwciwgcm91bmQsIHNldCwgc2V0YXR0ciwgc29ydGVkLCBzdHIsIHN1bSwgdHVwbGUsIHppcH0gZnJvbSAnLi9vcmcudHJhbnNjcnlwdC5fX3J1bnRpbWVfXy5qcyc7XG5pbXBvcnQgKiBhcyB0IGZyb20gJy4vdHlwaW5nLmpzJztcbnZhciBfX25hbWVfXyA9ICdzaWZhcnVfeXVzaW4uZGVrdSc7XG5leHBvcnQgdmFyIGtla3VyZSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIERhdGUubm93ICgpLnRvU3RyaW5nICgpO1xufTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lmYXJ1X3l1c2luLmRla3UubWFwIiwiLy8gVHJhbnNjcnlwdCdlZCBmcm9tIFB5dGhvbiwgMjAyMC0wNC0xNCAyMzozNjoxM1xuaW1wb3J0IHtBc3NlcnRpb25FcnJvciwgQXR0cmlidXRlRXJyb3IsIEJhc2VFeGNlcHRpb24sIERlcHJlY2F0aW9uV2FybmluZywgRXhjZXB0aW9uLCBJbmRleEVycm9yLCBJdGVyYWJsZUVycm9yLCBLZXlFcnJvciwgTm90SW1wbGVtZW50ZWRFcnJvciwgUnVudGltZVdhcm5pbmcsIFN0b3BJdGVyYXRpb24sIFVzZXJXYXJuaW5nLCBWYWx1ZUVycm9yLCBXYXJuaW5nLCBfX0pzSXRlcmF0b3JfXywgX19QeUl0ZXJhdG9yX18sIF9fVGVybWluYWxfXywgX19hZGRfXywgX19hbmRfXywgX19jYWxsX18sIF9fY2xhc3NfXywgX19lbnZpcl9fLCBfX2VxX18sIF9fZmxvb3JkaXZfXywgX19nZV9fLCBfX2dldF9fLCBfX2dldGNtX18sIF9fZ2V0aXRlbV9fLCBfX2dldHNsaWNlX18sIF9fZ2V0c21fXywgX19ndF9fLCBfX2lfXywgX19pYWRkX18sIF9faWFuZF9fLCBfX2lkaXZfXywgX19panNtb2RfXywgX19pbHNoaWZ0X18sIF9faW1hdG11bF9fLCBfX2ltb2RfXywgX19pbXVsX18sIF9faW5fXywgX19pbml0X18sIF9faW9yX18sIF9faXBvd19fLCBfX2lyc2hpZnRfXywgX19pc3ViX18sIF9faXhvcl9fLCBfX2pzVXNlUHlOZXh0X18sIF9fanNtb2RfXywgX19rX18sIF9fa3dhcmd0cmFuc19fLCBfX2xlX18sIF9fbHNoaWZ0X18sIF9fbHRfXywgX19tYXRtdWxfXywgX19tZXJnZWZpZWxkc19fLCBfX21lcmdla3dhcmd0cmFuc19fLCBfX21vZF9fLCBfX211bF9fLCBfX25lX18sIF9fbmVnX18sIF9fbmVzdF9fLCBfX29yX18sIF9fcG93X18sIF9fcHJhZ21hX18sIF9fcHJveHlfXywgX19weVVzZUpzTmV4dF9fLCBfX3JzaGlmdF9fLCBfX3NldGl0ZW1fXywgX19zZXRwcm9wZXJ0eV9fLCBfX3NldHNsaWNlX18sIF9fc29ydF9fLCBfX3NwZWNpYWxhdHRyaWJfXywgX19zdWJfXywgX19zdXBlcl9fLCBfX3RfXywgX190ZXJtaW5hbF9fLCBfX3RydWVkaXZfXywgX193aXRoYmxvY2tfXywgX194b3JfXywgYWJzLCBhbGwsIGFueSwgYXNzZXJ0LCBib29sLCBieXRlYXJyYXksIGJ5dGVzLCBjYWxsYWJsZSwgY2hyLCBjb3B5LCBkZWVwY29weSwgZGVsYXR0ciwgZGljdCwgZGlyLCBkaXZtb2QsIGVudW1lcmF0ZSwgZmlsdGVyLCBmbG9hdCwgZ2V0YXR0ciwgaGFzYXR0ciwgaW5wdXQsIGludCwgaXNpbnN0YW5jZSwgaXNzdWJjbGFzcywgbGVuLCBsaXN0LCBtYXAsIG1heCwgbWluLCBvYmplY3QsIG9yZCwgcG93LCBwcmludCwgcHJvcGVydHksIHB5X1R5cGVFcnJvciwgcHlfaXRlciwgcHlfbWV0YXR5cGUsIHB5X25leHQsIHB5X3JldmVyc2VkLCBweV90eXBlb2YsIHJhbmdlLCByZXByLCByb3VuZCwgc2V0LCBzZXRhdHRyLCBzb3J0ZWQsIHN0ciwgc3VtLCB0dXBsZSwgemlwfSBmcm9tICcuL29yZy50cmFuc2NyeXB0Ll9fcnVudGltZV9fLmpzJztcbnZhciBfX25hbWVfXyA9ICd0eXBpbmcnO1xuZXhwb3J0IHZhciBDbGFzc1ZhciA9ICdDbGFzc1Zhcic7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGluZy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9fX3RhcmdldF9fL21haW4uanNcIjsiXSwic291cmNlUm9vdCI6IiJ9