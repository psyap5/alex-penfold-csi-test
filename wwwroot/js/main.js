!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),i=r(2),u=r(3);n||(n={}),i.module("sortArray",[]).controller("formController",o.FormController).factory("sortingService",["$rootElement",function(e){return function(e){return e.injector().instantiate(u.SortingService)}(e)}])},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this.$scope=e,this.SortingService=t,this.title=e.title,this.result=e.result,this.checked=e.checked,this.uncheck=function(t){e.checked==t.target.value&&(e.checked=!1)}}return e.prototype.sort=function(){"Descending"===this.uncheck?this.result=this.SortingService.getSortedArray(this.title).reverse().join(" "):this.result=this.SortingService.getSortedArray(this.title).join(" "),alert(this.checked)},e.$inject=["$scope","sortingService"],e}();t.FormController=n},function(e,t){e.exports=angular},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4),o=function(){function e(){this.filteredArray=[]}return e.prototype.getSortedArray=function(e){return this.filteredArray=e.split(/[\n,\s,]+/).filter(Number).map(Number),n.mergeSort(this.filteredArray)},e.$inject=[],e}();t.SortingService=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeSort=function e(t){if(t.length<=1)return t;var r=Math.floor(t.length/2),n=t.slice(0,r),o=t.slice(r);return function(e,t){for(var r=[],n=0,o=0;n+o<e.length+t.length;){var i=e[n],u=t[o];null==i?(r.push(u),o++):null==u?(r.push(i),n++):i<u?(r.push(i),n++):(r.push(u),o++)}return r}(e(n),e(o))}}]);