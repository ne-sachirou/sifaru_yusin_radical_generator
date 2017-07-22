webpackJsonp([1],{"./app/containers/SifaruDeku/constants.js":function(r,e,t){"use strict";t.d(e,"a",function(){return n}),t.d(e,"b",function(){return i});var n="app/SifaruDeku/DEFAULT_ACTION",i="app/SifaruDeku/KEKURIA_DEKU"},"./app/containers/SifaruDeku/reducer.js":function(r,e,t){"use strict";function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments[1];switch(e.type){case a.a:return r;case a.b:for(var n=r.get("dekuga",t.i(i.fromJS)([]));;){var u=c.a.kekuria().toString();if(!n.contains(u)){n=n.unshift(u).slice(0,20);break}}return r.set("dekuga",n);default:return r}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("./node_modules/immutable/dist/immutable.js"),a=(t.n(i),t("./app/containers/SifaruDeku/constants.js")),c=t("./app/models/deku.js"),o=t.i(i.fromJS)({});e.default=n},"./app/models/deku.js":function(r,e,t){"use strict";function n(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function i(r){var e=r.reduce(function(r,e){return r+(e&&e.probability)},0);if(isNaN(e))return r[Math.floor(Math.random()*r.length)];for(var t=Math.random()*e,n=0,i=r.length,a=0;n<i;n+=1)if(a+=r[n].probability,a>t)return r[n];throw new Error("Choice has bug: "+r.join())}function a(r,e){if(Array.isArray(r))return r.map(function(r){return a(r,e)}).reduce(function(r,e){return r.union(e)});if(r.character)return new h([new f(r.character,r.probability)]);if(r.schema)return a(t.i(u.parse)(r.schema),e);if(r.reference)return new h([e.reference(r.reference[0],r.reference[1])]);if(r.union)return a(r.union[0],e).union(a(r.union[1],e));if(r.difference)return a(r.difference[0],e).difference(a(r.difference[1],e));throw new Error("Unknown setOf rule: "+r.toString())}function c(r,e){if(Array.isArray(r))return c(i(r),e);if(r.character)return new f(r.character,r.probability);if(r.schema)return c(t.i(u.parse)(r.schema),e);if(r.sequense)return r.sequense.reduce(function(r,e){return r.concat(c(e,r))},e);if(r.reference)return e.reference(r.reference[0],r.reference[1]);if(r.union)return a(r.union[0],e).union(a(r.union[1],e));if(r.difference)return a(r.difference[0],e).difference(a(r.difference[1],e));throw new Error("Unknown kekuria rule: "+r.toString())}var o=t("./app/models/deku_rules.js"),u=t("./app/models/deku_schema.js");t.n(u);t.d(e,"a",function(){return l});var s=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),f=function(){function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(n(this,r),this.character=e,this.probability=t,o.VOWELS.some(function(r){return r.character===e}))this.kind="v";else{if(!o.CONSONANTS.some(function(r){return r.character===e}))throw new Error("Unknown character: "+e);this.kind="c"}}return s(r,[{key:"toDeku",value:function(){return new l([this])}}]),r}(),h=function(){function r(e){n(this,r),this.characters=e,this.uniq()}return s(r,[{key:"union",value:function(r){return this.characters=this.characters.concat(r.characters),this.uniq(),this}},{key:"difference",value:function(r){var e=r.characters.map(function(r){return r.character});return this.characters=this.characters.filter(function(r){return!e.includes(r.character)}),this}},{key:"toDeku",value:function(){if(0===this.characters.length)throw Error("Character set is empty.");return this.characters[Math.floor(Math.random()*this.characters.length)].toDeku()}},{key:"uniq",value:function(){var r={};return this.characters=this.characters.reduce(function(e,t){return r[t.character]||(r[t.character]=!0,e.push(t)),e},[]),this}}]),r}(),l=function(){function r(e){n(this,r),this.characters=e}return s(r,[{key:"concat",value:function(e){return new r([].concat(this.characters,e.toDeku().characters))}},{key:"reference",value:function(r,e){return this.characters.filter(function(e){return e.kind===r})[e-1]}},{key:"toDeku",value:function(){return this}},{key:"toString",value:function(){return this.characters.map(function(r){return r.character}).join("")}}]),r}();l.kekuria=function(){return c(o.DEKUGA,new l([])).toDeku()},window.Deku=l},"./app/models/deku_rules.js":function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"VOWELS",function(){return n}),t.d(e,"CONSONANTS",function(){return i}),t.d(e,"DEKUGA",function(){return a});var n=[{character:"a",probability:1},{character:"i",probability:1},{character:"u",probability:1}],i=[{character:"F",probability:3},{character:"P",probability:1},{character:"B",probability:1},{character:"M",probability:3},{character:"S",probability:3},{character:"Z",probability:2},{character:"T",probability:3},{character:"D",probability:3},{character:"N",probability:5},{character:"X",probability:1},{character:"J",probability:1},{character:"C",probability:1},{character:"R",probability:5},{character:"K",probability:3},{character:"G",probability:2},{character:"H",probability:3},{character:"ʻ",probability:3}],a=[{sequense:[{schema:"cv"},[{schema:"v1",probability:2},{schema:"{v - v1}",probability:1}],[{schema:"c1",probability:1},{schema:"{c - c1}",probability:1}]],probability:2},{sequense:[{schema:"cv"},[{schema:"c1",probability:1},{schema:"{c - c1}",probability:1}],[{schema:"v1",probability:2},{schema:"{v - v1}",probability:1}]],probability:2},{sequense:[{schema:"vc"},[{schema:"v1",probability:2},{schema:"{v - v1}",probability:1}],[{schema:"c1",probability:1},{schema:"{c - c1}",probability:1}]],probability:2},{sequense:[{schema:"v{c - ʻ}"},[{schema:"c1",probability:1},{schema:"{c - c1}",probability:1}],[{schema:"v1",probability:2},{schema:"{v - v1}",probability:1}]],probability:2},{schema:"cv",probability:1},{schema:"vc",probability:1}]},"./app/models/deku_schema.js":function(r,e,t){function n(r,e){function t(){this.constructor=r}t.prototype=e.prototype,r.prototype=new t}function i(r,e,t,n){this.message=r,this.expected=e,this.found=t,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,i)}function a(r,e){function n(r,e){return{type:"literal",text:r,ignoreCase:e}}function a(r,e,t){return{type:"class",parts:r,inverted:e,ignoreCase:t}}function c(){return{type:"end"}}function o(r){return{type:"other",description:r}}function u(e){var t=X[e],n=void 0;if(t)return t;for(n=e-1;!X[n];)n--;for(t=X[n],t={line:t.line,column:t.column};n<e;)10===r.charCodeAt(n)?(t.line++,t.column=1):t.column++,n++;return X[e]=t,t}function s(r,e){var t=u(r),n=u(e);return{start:{offset:r,line:t.line,column:t.column},end:{offset:e,line:n.line,column:n.column}}}function f(r){V<Z||(V>Z&&(Z=V,z=[]),z.push(r))}function h(r,e,t){return new i(i.buildMessage(r,e),r,e,t)}function l(){var r=void 0,e=void 0;return r=V,e=p(),e!==A&&(W=r,e=x(e)),r=e}function p(){var r=void 0,e=void 0,t=void 0,n=void 0;if(r=V,e=d(),e!==A){for(t=[],n=d();n!==A;)t.push(n),n=d();t!==A?(W=r,e=E(e,t),r=e):(V=r,r=A)}else V=r,r=A;return r}function d(){var e=void 0,t=void 0,n=void 0,i=void 0,a=void 0,c=void 0,o=void 0,u=void 0;if(e=V,t=b(),t!==A){for(n=[],i=V,a=g(),a!==A?(C.test(r.charAt(V))?(c=r.charAt(V),V++):(c=A,0===Q&&f(D)),c!==A?(o=g(),o!==A?(u=b(),u!==A?(a=[a,c,o,u],i=a):(V=i,i=A)):(V=i,i=A)):(V=i,i=A)):(V=i,i=A);i!==A;)n.push(i),i=V,a=g(),a!==A?(C.test(r.charAt(V))?(c=r.charAt(V),V++):(c=A,0===Q&&f(D)),c!==A?(o=g(),o!==A?(u=b(),u!==A?(a=[a,c,o,u],i=a):(V=i,i=A)):(V=i,i=A)):(V=i,i=A)):(V=i,i=A);n!==A?(W=e,t=j(t,n),e=t):(V=e,e=A)}else V=e,e=A;return e}function b(){var e=void 0,t=void 0,n=void 0,i=void 0,a=void 0,c=void 0;return e=v(),e===A&&(e=y(),e===A&&(e=m(),e===A&&(e=V,123===r.charCodeAt(V)?(t=N,V++):(t=A,0===Q&&f(O)),t!==A?(n=g(),n!==A?(i=p(),i!==A?(a=g(),a!==A?(125===r.charCodeAt(V)?(c=F,V++):(c=A,0===Q&&f(M)),c!==A?(W=e,t=_(i),e=t):(V=e,e=A)):(V=e,e=A)):(V=e,e=A)):(V=e,e=A)):(V=e,e=A)))),e}function v(){var e=void 0,t=void 0,n=void 0,i=void 0;if(e=V,R.test(r.charAt(V))?(t=r.charAt(V),V++):(t=A,0===Q&&f(T)),t!==A){if(n=[],q.test(r.charAt(V))?(i=r.charAt(V),V++):(i=A,0===Q&&f(U)),i!==A)for(;i!==A;)n.push(i),q.test(r.charAt(V))?(i=r.charAt(V),V++):(i=A,0===Q&&f(U));else n=A;n!==A?(W=e,t=K(t,n),e=t):(V=e,e=A)}else V=e,e=A;return e}function y(){var e=void 0,t=void 0;return e=V,R.test(r.charAt(V))?(t=r.charAt(V),V++):(t=A,0===Q&&f(T)),t!==A&&(W=e,t=J(t)),e=t}function m(){var e=void 0,t=void 0;return e=V,P.test(r.charAt(V))?(t=r.charAt(V),V++):(t=A,0===Q&&f(B)),t!==A&&(W=e,t=G(t)),e=t}function g(){var e=void 0,t=void 0;for(Q++,e=[],L.test(r.charAt(V))?(t=r.charAt(V),V++):(t=A,0===Q&&f(H));t!==A;)e.push(t),L.test(r.charAt(V))?(t=r.charAt(V),V++):(t=A,0===Q&&f(H));return Q--,e===A&&(t=A,0===Q&&f(I)),e}function k(r){if(Array.isArray(r[0]))return 1===r.length?k(r[0]):{sequense:r.map(function(r){return k(r)})};switch(r[0]){case"Char":return{character:r[1]};case"Sign v":return $.VOWELS;case"Sign c":return $.CONSONANTS;case"Ref v":return{reference:["v",parseInt(r[1],10)]};case"Ref c":return{reference:["c",parseInt(r[1],10)]};case"+":return{union:[k(r[1]),k(r[2])]};case"-":return{difference:[k(r[1]),k(r[2])]};default:throw new Error("Unknown schema: "+r.toString())}}e=void 0!==e?e:{};var A={},w={start:l},S=l,x=function(r){return k(r)},E=function(r,e){return[r].concat(e)},C=/^[\-+]/,D=a(["-","+"],!1,!1),j=function(r,e){return e.reduce(function(r,e){return[e[1],r,e[3]]},r)},N="{",O=n("{",!1),F="}",M=n("}",!1),_=function(r){return r},R=/^[vc]/,T=a(["v","c"],!1,!1),q=/^[0-9]/,U=a([["0","9"]],!1,!1),K=function(r,e){return["Ref "+r,parseInt(e,10)]},J=function(r){return["Sign "+r]},P=/^[aiuFPBMSZTDNXJCRKGH\u02BB]/,B=a(["a","i","u","F","P","B","M","S","Z","T","D","N","X","J","C","R","K","G","H","ʻ"],!1,!1),G=function(r){return["Char",r]},I=o("whitespace"),L=/^[ \t\n\r]/,H=a([" ","\t","\n","\r"],!1,!1),V=0,W=0,X=[{line:1,column:1}],Z=0,z=[],Q=0,Y=void 0;if("startRule"in e){if(!(e.startRule in w))throw new Error("Can't start parsing from rule \""+e.startRule+'".');S=w[e.startRule]}var $=t("./app/models/deku_rules.js");if(Y=S(),Y!==A&&V===r.length)return Y;throw Y!==A&&V<r.length&&f(c()),h(z,Z<r.length?r.charAt(Z):null,Z<r.length?s(Z,Z+1):s(Z,Z))}n(i,Error),i.buildMessage=function(r,e){function t(r){return r.charCodeAt(0).toString(16).toUpperCase()}function n(r){return r.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+t(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+t(r)})}function i(r){return r.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(r){return"\\x0"+t(r)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(r){return"\\x"+t(r)})}function a(r){return u[r.type](r)}function c(r){var e=new Array(r.length),t=void 0,n=void 0;for(t=0;t<r.length;t++)e[t]=a(r[t]);if(e.sort(),e.length>0){for(t=1,n=1;t<e.length;t++)e[t-1]!==e[t]&&(e[n]=e[t],n++);e.length=n}switch(e.length){case 1:return e[0];case 2:return e[0]+" or "+e[1];default:return e.slice(0,-1).join(", ")+", or "+e[e.length-1]}}function o(r){return r?'"'+n(r)+'"':"end of input"}var u={literal:function(r){return'"'+n(r.text)+'"'},class:function(r){var e="",t=void 0;for(t=0;t<r.parts.length;t++)e+=r.parts[t]instanceof Array?i(r.parts[t][0])+"-"+i(r.parts[t][1]):i(r.parts[t]);return"["+(r.inverted?"^":"")+e+"]"},any:function(r){return"any character"},end:function(r){return"end of input"},other:function(r){return r.description}};return"Expected "+c(r)+" but "+o(e)+" found."},r.exports={SyntaxError:i,parse:a}}});