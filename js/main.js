!function(e){function t(t){for(var r,_,i=t[0],l=t[1],c=t[2],f=0,d=[];f<i.length;f++)_=i[f],a[_]&&d.push(a[_][0]),a[_]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);d.length;)d.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=_(_.s=o[0]))}return e}var r={},a={0:0},n=[];function _(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,_),o.l=!0,o.exports}_.m=e,_.c=r,_.d=function(e,t,o){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(_.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)_.d(o,r,function(t){return e[t]}.bind(null,r));return o},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="/Game-of-Life";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;n.push([29,1]),o()}([,,,,,,function(e,t,o){"use strict";(function(e){var r;o.d(t,"a",function(){return _}),o.d(t,"b",function(){return i}),(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,n,_="GOL_INIT",i="GOL_STEP";(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&(a.register(_,"GOL_INIT","/home/jnmorse/code/Game-of-Life/src/client/actions/types.js"),a.register(i,"GOL_STEP","/home/jnmorse/code/Game-of-Life/src/client/actions/types.js")),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&n(e)}).call(this,o(3)(e))},,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_redux__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),lodash__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__),prop_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21),_index_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(40),_index_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},GameOfLife=function(_Component){function GameOfLife(){return _classCallCheck(this,GameOfLife),_possibleConstructorReturn(this,_getPrototypeOf(GameOfLife).apply(this,arguments))}return _inherits(GameOfLife,_Component),_createClass(GameOfLife,[{key:"componentWillMount",value:function(){var e=this.props,t=e.cols,o=e.rows;(0,e.initBoard)(t,o)}},{key:"componentDidMount",value:function(){this.startRunning()}},{key:"startRunning",value:function(){var e=this.props.nextStep;this.run=setInterval(function(){return e()},100)}},{key:"renderLiveCells",value:function(){var e=this.props,t=e.cols,o=e.rows,r=e.gol,a=720/t,n=720/o;return Object(lodash__WEBPACK_IMPORTED_MODULE_2__.map)(r,function(e,t){return Object(lodash__WEBPACK_IMPORTED_MODULE_2__.map)(e,function(e,o){var r={width:a,height:n,x:t*a,y:o*n};if(e.alive){var _=e.age>0?"green":"#0000AC";r.fill=_}return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect",_extends({key:"".concat(t,":").concat(o)},r))})})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"board"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{width:720,height:720},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g",{fill:"transparent",strokeWidth:1,stroke:"#ccc"},this.renderLiveCells()),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g",{strokeWidth:1,fill:"transparent"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect",{x:0,y:0,width:720,height:720,stroke:"#000"}))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),GameOfLife}(react__WEBPACK_IMPORTED_MODULE_0__.Component);function mapStateToProps(e){return{gol:e.gol}}_defineProperty(GameOfLife,"propTypes",{cols:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,rows:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,initBoard:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,nextStep:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,gol:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({alive:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,age:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]).isRequired}))).isRequired});var _default=Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)(mapStateToProps,_actions__WEBPACK_IMPORTED_MODULE_4__)(GameOfLife),reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(GameOfLife,"GameOfLife","/home/jnmorse/code/Game-of-Life/src/client/components/Game-of-Life/index.jsx"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/home/jnmorse/code/Game-of-Life/src/client/components/Game-of-Life/index.jsx"),reactHotLoader.register(_default,"default","/home/jnmorse/code/Game-of-Life/src/client/components/Game-of-Life/index.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return i});var r,a=o(6);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&r(e);var n,_;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i(e,t){var o=function(o,r){for(var a={min:o-1,max:o+1},n={min:r-1,max:r+1},_=[],i=a.min;i<=a.max;i+=1)for(var l=n.min;l<=n.max;l+=1)i>=0&&i<e&&l>=0&&l<t&&_.push({x:i,y:l});return _.filter(function(e){return e.x!==o||e.y!==r})};return function(r,n,_){for(var i=_.random,l=[],c=0;c<e;c+=1){l.push([]);for(var u=0;u<t;u+=1){var f=!!i(0,1);l[c].push({alive:f,neighbors:o(c,u),age:!!f&&0})}}r({type:a.a,payload:l})}}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&n.register(i,"initBoard","/home/jnmorse/code/Game-of-Life/src/client/actions/init-board.js"),(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&_(e)}).call(this,o(3)(e))},function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return c});var r,a=o(6);function n(e){for(var t=1;t<arguments.length;t++)if(t%2){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){_(e,t,o[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}function _(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&r(e);var i,l;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function c(){return function(e,t,o){var r=o.cloneDeep,_=o.map,i=r(t().gol),l=_(i,function(e,t){return _(e,function(e,o){var r=i[t][o].neighbors.filter(function(e){return i[e.x][e.y].alive}).length;return e.alive?n({},e,r<2?{alive:!1,age:!1}:2===r||3===r?{age:e.age+1}:{alive:!1,age:!1}):3===r?n({},e,{alive:!0,age:0}):n({},e)})});e({type:a.b,payload:l})}}(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&i.register(c,"nextStep","/home/jnmorse/code/Game-of-Life/src/client/actions/next-step.js"),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&l(e)}).call(this,o(3)(e))},,function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_styles_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(41),_styles_index_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},App=function(_Component){function App(){return _classCallCheck(this,App),_possibleConstructorReturn(this,_getPrototypeOf(App).apply(this,arguments))}return _inherits(App,_Component),_createClass(App,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__.a,{rows:70,cols:70}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),App}(react__WEBPACK_IMPORTED_MODULE_0__.Component),_default=App,reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default,reactHotLoader&&(reactHotLoader.register(App,"App","/home/jnmorse/code/Game-of-Life/src/client/App.jsx"),reactHotLoader.register(_default,"default","/home/jnmorse/code/Game-of-Life/src/client/App.jsx")),leaveModule=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(3)(module))},function(e,t,o){"use strict";var r=o(15);o.d(t,"a",function(){return r.a});"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},function(e,t,o){"use strict";o.r(t);var r=o(16);o.d(t,"initBoard",function(){return r.a});var a=o(17);o.d(t,"nextStep",function(){return a.a});"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature},function(e,t,o){"use strict";(function(e){var r,a=o(5),n=o(23),_=o(7),i=o(24);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,u=Object(a.d)(i.a,Object(a.a)(n.a.withExtraArgument({cloneDeep:_.cloneDeep,map:_.map,random:_.random}))),f=u;t.a=f,(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&(l.register(u,"store","/home/jnmorse/code/Game-of-Life/src/client/create-store.js"),l.register(f,"default","/home/jnmorse/code/Game-of-Life/src/client/create-store.js")),(c=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&c(e)}).call(this,o(3)(e))},,function(e,t,o){"use strict";(function(e){var r,a=o(5),n=o(25),_=o(26);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,l,c=Object(a.c)({gol:n.a,controls:_.a});t.a=c,(i=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&i.register(c,"default","/home/jnmorse/code/Game-of-Life/src/client/reducers/index.js"),(l=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&l(e)}).call(this,o(3)(e))},function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return i});var r,a=o(6);(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&r(e);var n,_;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.b:case a.a:return t.payload;default:return e}}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&n.register(i,"golReducer","/home/jnmorse/code/Game-of-Life/src/client/reducers/gol-reducer.js"),(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&_(e)}).call(this,o(3)(e))},function(e,t,o){"use strict";(function(e){var r;o.d(t,"a",function(){return _}),(r=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&r(e);var a,n;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function _(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(arguments.length>1?arguments[1]:void 0).type,e}(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&a.register(_,"controlsReducer","/home/jnmorse/code/Game-of-Life/src/client/reducers/controls-reducer.js"),(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&n(e)}).call(this,o(3)(e))},function(e,t,o){"use strict";(function(e,r){var a;o.d(t,"a",function(){return l}),(a=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&a(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var n,_,i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(){if("serviceWorker"in navigator){if(new URL(r.env.PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(r.env.PUBLIC_URL,"/service-worker.js");i?u(e):c(e)})}}function c(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function u(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}function f(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}(n=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&(n.register(i,"isLocalhost","/home/jnmorse/code/Game-of-Life/src/client/registerServiceWorker.js"),n.register(l,"register","/home/jnmorse/code/Game-of-Life/src/client/registerServiceWorker.js"),n.register(c,"registerValidSW","/home/jnmorse/code/Game-of-Life/src/client/registerServiceWorker.js"),n.register(u,"checkValidServiceWorker","/home/jnmorse/code/Game-of-Life/src/client/registerServiceWorker.js"),n.register(f,"unregister","/home/jnmorse/code/Game-of-Life/src/client/registerServiceWorker.js")),(_=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&_(e)}).call(this,o(3)(e),o(42))},,function(e,t,o){"use strict";o.r(t),function(e){var t,r=o(0),a=o.n(r),n=o(8),_=o.n(n),i=o(28),l=o(9),c=(o(38),o(19)),u=o(22),f=o(27);(t=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).enterModule)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,s,p=Object(i.hot)(c.a);_.a.render(a.a.createElement(l.a,{store:u.a},a.a.createElement(p,null)),document.getElementById("root")),Object(f.a)(),(d=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).default)&&d.register(p,"HotApp","/home/jnmorse/code/Game-of-Life/src/client/index.jsx"),(s=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:o(1)).leaveModule)&&s(e)}.call(this,o(3)(e))},,,,,,,,,function(e,t,o){},,function(e,t,o){e.exports={board:"_3ezTiiqC9In3_jwhTW1bx1"}},function(e,t,o){}]);