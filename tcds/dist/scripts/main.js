!function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){i(t,e),e.add(t)}function a(t,e,n){i(t,e),e.set(t,n)}function i(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function c(t,e){return function(t,e){if(e.get)return e.get.call(t);return e.value}(t,s(t,e,"get"))}function l(t,e,n){return function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}(t,s(t,e,"set"),n),n}function s(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}function u(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n}var p=new WeakMap,f=new WeakMap,y=new WeakSet,d=new WeakSet,b=function(){function t(n,r){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,d),o(this,y),a(this,p,{writable:!0,value:void 0}),a(this,f,{writable:!0,value:void 0}),this.element=n,this.state=new Proxy({},u(this,y,v).call(this)),this.props=new Proxy(e({},r),u(this,d,h).call(this)),l(this,p,{}),l(this,f,null),this.element.addEventListener("state-change",(function(t){c(i,p).newState=e(e({},c(i,p).newState),t.detail.newState),c(i,p).prevState=e(e({},c(i,p).prevState),t.detail.prevState),null!==c(i,f)&&cancelAnimationFrame(c(i,f)),l(i,f,requestAnimationFrame((function(){var t=i.sync(c(i,p).newState,c(i,p).prevState);for(var e in t)e in c(i,p).newState&&t[e]();l(i,p,{})})))}))}var n,i,s;return n=t,(i=[{key:"sync",value:function(t,e){return console.warn("No local sync method provided in component subclass."),{}}}])&&r(n.prototype,i),s&&r(n,s),Object.defineProperty(n,"prototype",{writable:!1}),t}();function v(){var t=this;return{set:function(e,r,o){var a=n({},r,e[r]),i=n({},r,o);return e[r]!==o&&(e[r]=o,t.element.dispatchEvent(new CustomEvent("state-change",{detail:{context:t.element,newState:i,prevState:a}}))),!0},get:function(e,n){return["[object Object]","[object Array]"].indexOf(Object.prototype.toString.call(e[n]))>-1?new Proxy(e[n],u(t,y,v).call(t)):e[n]}}}function h(){var t=this;return{set:function(e,n,r){return n in e&&e[n]!==r?console.warn("Attempt to mutate prop rejected; `this.props` is immutable. To use a mutable property, try initializing state or a new property from the `this.props` property value.",{context:t.element,property:n,"attempted value":r,"persisting value":e[n]}):e[n]=r,!0}}}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},x(t,e)}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return A(this,n)}}function A(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(a,t);var e,n,r,o=P(a);function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=o.call(this,t,e)).props.multiselectable=n.props.multiselectable||!1,n.panels=Array.from(n.element.querySelectorAll("[data-component-part=panel]")),n.buttons=Array.from(n.element.querySelectorAll("[data-component-part=panel-toggle]")),n.expandAllButton=n.element.querySelector("[data-component-part=expand-all]"),n.collapseAllButton=n.element.querySelector("[data-component-part=collapse-all]"),n.state.activeButtons=[],n.buttons.forEach((function(t){t.addEventListener("click",(function(){var e=n.state.activeButtons.indexOf(t);e>-1?n.state.activeButtons.splice(e,1):!1===n.props.multiselectable?n.state.activeButtons=[t]:n.state.activeButtons.push(t)}))})),!0===n.props.multiselectable&&(n.expandAllButton.addEventListener("click",(function(){n.state.activeButtons=g(n.buttons)})),n.collapseAllButton.addEventListener("click",(function(){n.state.activeButtons=[]}))),n}return e=a,(n=[{key:"sync",value:function(){var t=this;this.buttons.forEach((function(e){var n=t.state.activeButtons.indexOf(e)>-1,r=t.getPanelByButton(e),o=e.closest("section");e.setAttribute("aria-expanded",n),o.setAttribute("data-open",n),n?(r.ontransitionend=null,r.hidden=!1,requestAnimationFrame((function(){r.style.height="".concat(r.scrollHeight,"px")}))):(r.style.height="0px",r.ontransitionend=function(){r.hidden=!0})}))}},{key:"getPanelByButton",value:function(t){return this.panels.find((function(e){return t.getAttribute("aria-controls")===e.id}))}}])&&O(e.prototype,n),r&&O(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(b);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=L(t);if(e){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}function B(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}window.addEventListener("load",(function(){document.querySelectorAll("[data-component=Accordion]").forEach((function(t){t&&new T(t,{multiselectable:t.classList.contains("Accordion--multiselectable")})}))}));var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}(a,t);var e,n,r,o=C(a);function a(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=o.call(this,t,e)).tabs=Array.from(n.element.querySelectorAll("[role=tab]")),n.tablist=n.element.querySelector("[role=tablist]"),n.panels=Array.from(n.element.querySelectorAll("[role=tabpanel]")),n.panelsContainer=n.element.querySelector("[data-component-part=tabpanels]"),n.state.activeTab=!0!==n.props.hideAll?n.tabs[0]:null;var r={ArrowRight:function(){n.state.activeTab=n.getNextTab(),n.state.activeTab.focus()},ArrowLeft:function(){n.state.activeTab=n.getPreviousTab(),n.state.activeTab.focus()}};return n.tabs.forEach((function(t){t.addEventListener("click",(function(){n.state.activeTab=t})),t.addEventListener("keydown",(function(t){r[t.code]&&r[t.code]()}))})),n}return e=a,n=[{key:"sync",value:function(){var t=this;return{activeTab:function(){t.tabs.forEach((function(e){e.setAttribute("aria-expanded",e===t.state.activeTab),e.setAttribute("tabindex",e!==t.state.activeTab&&t.state.activeTab?"-1":"0")})),t.panels.forEach((function(e){t.props.keepPanelVisibility||(e.hidden=!(e===t.getPanelByTab(t.state.activeTab)))})),window.dispatchEvent(new Event("scroll"))}}}},{key:"getNextTab",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.activeTab;return t===this.tabs[this.tabs.length-1]?this.tabs[0]:this.tabs[this.tabs.indexOf(t)+1]}},{key:"getPreviousTab",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.activeTab;return t===this.tabs[0]?this.tabs[this.tabs.length-1]:this.tabs[this.tabs.indexOf(t)-1]}},{key:"getPanelByTab",value:function(t){return t instanceof HTMLElement&&"tab"===t.getAttribute("role")?this.panels.find((function(e){return t.getAttribute("aria-controls")===e.id})):null}}],n&&S(e.prototype,n),r&&S(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(b);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=D(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function D(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=H(t)););return t}function M(t,e){return M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},M(t,e)}function N(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=H(t);if(e){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return W(t)}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function H(t){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},H(t)}document.querySelectorAll("[data-component=Tabs]").forEach((function(t){t&&new R(t,{hideAll:t.classList.contains("Tabs--hide-all")})}));var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&M(t,e)}(a,t);var e,n,r,o=N(a);function a(t,e){var n;function r(){!0===this.state.playing&&(this.state.playing=!1,this.temporaryPause=!0)}function i(){!0===this.temporaryPause&&(this.state.playing=!0,this.temporaryPause=null)}!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=o.call(this,t,e)).controls={next:n.element.querySelector("[data-action=next]"),previous:n.element.querySelector("[data-action=previous]"),playPause:n.element.querySelector("[data-action=play-pause]"),expandCollapse:n.element.querySelector("[data-action=expand-collapse]")},!0===window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches?n.state.playing=!1:n.state.playing=n.props.autoplay,n.state.expanded=!1,n.controls.next.addEventListener("click",(function(){n.state.activeTab=n.getNextTab(),n.state.playing=!1})),n.controls.previous.addEventListener("click",(function(){n.state.activeTab=n.getPreviousTab(),n.state.playing=!1})),n.controls.playPause.addEventListener("click",(function(){n.state.playing=!n.state.playing})),n.tabs.forEach((function(t){t.addEventListener("click",(function(){n.state.playing=!1})),t.addEventListener("keydown",(function(){n.state.playing=!1}))})),n.panelsContainer.addEventListener("touchstart",(function(){n.state.playing=!1})),n.panelsContainer.addEventListener("mouseenter",r.bind(W(n))),n.panelsContainer.addEventListener("focusin",r.bind(W(n))),n.panelsContainer.addEventListener("mouseleave",i.bind(W(n))),n.panelsContainer.addEventListener("focusout",i.bind(W(n))),new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?(i.call(W(n)),n.isIntersecting=!0):(r.call(W(n)),n.isIntersecting=!1)}))}),{threshold:.9}).observe(n.element),document.addEventListener("visibilitychange",(function(){!0===document.hidden?r.call(W(n)):!1===document.hidden&&!0===n.temporaryPause&&0!=n.isIntersecting&&requestAnimationFrame((function(){i.call(W(n))}))}),!1);var c=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&!0!==n.state.expanded&&(n.state.activeTab=n.element.querySelector("[role=tab][aria-controls=".concat(t.target.id,"]")))}))}),{root:n.panelsContainer,threshold:1,rootMargin:"1px"});return n.panels.forEach((function(t){c.observe(t)})),n.controls.expandCollapse.addEventListener("click",(function(){n.state.playing=!1,n.state.expanded=!n.state.expanded})),n}return e=a,(n=[{key:"sync",value:function(){var t=this;return I(H(a.prototype),"sync",this).call(this),{activeTab:function(){I(H(a.prototype),"sync",t).call(t).activeTab();var e=t.getPanelByTab(t.state.activeTab),n=t.panelsContainer.getBoundingClientRect().left,r=e.getBoundingClientRect().left;t.panelsContainer.scrollLeft+=r-n,t.panels.forEach((function(t){t===e?(t.removeAttribute("aria-hidden"),t.removeAttribute("tabindex")):(t.setAttribute("aria-hidden","true"),t.setAttribute("tabindex","-1"))}))},playing:function(){t.controls.playPause.setAttribute("aria-label",t.state.playing?"Pause carousel":"Play carousel"),t.controls.playPause.setAttribute("title",t.state.playing?"Pause carousel":"Play carousel"),t.controls.playPause.innerHTML=t.state.playing?'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',t.panelsContainer.setAttribute("aria-live",t.state.playing?"off":"polite"),!0===t.state.playing?t.playTimer=setTimeout(t.play.bind(t),t.props.interval):clearTimeout(t.playTimer)},expanded:function(){t.controls.expandCollapse.setAttribute("aria-expanded",t.state.expanded),t.controls.expandCollapse.setAttribute("title",t.state.expanded?"Collapse carousel":"Expand carousel"),t.controls.expandCollapse.setAttribute("aria-label",t.state.expanded?"Collapse carousel":"Expand carousel"),t.element.setAttribute("data-expanded",t.state.expanded),t.tablist.hidden=t.state.expanded,t.controls.playPause.hidden=t.state.expanded,t.controls.next.hidden=t.state.expanded,t.controls.previous.hidden=t.state.expanded,t.state.expanded?(t.element.removeAttribute("aria-roledescription"),t.panelsContainer.removeAttribute("aria-live"),t.panels.forEach((function(t){t.removeAttribute("role"),t.removeAttribute("aria-roledescription"),t.removeAttribute("aria-hidden"),t.removeAttribute("tabindex")}))):(t.element.setAttribute("aria-roledescription","carousel"),t.panels.forEach((function(t){t.setAttribute("role","tabpanel"),t.setAttribute("aria-roledescription","slide")})),t.sync().activeTab())}}}},{key:"play",value:function(){!0===this.state.playing&&(this.state.activeTab=this.getNextTab(),this.playTimer=setTimeout(this.play.bind(this),this.props.interval))}}])&&q(e.prototype,n),r&&q(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(R);window.addEventListener("load",(function(){document.querySelectorAll("[data-component=Carousel]").forEach((function(t){t&&new z(t,{interval:parseInt(t.getAttribute("data-interval"))||5e3,autoplay:"true"===t.getAttribute("data-autoplay"),keepPanelVisibility:!0})}))}))}();