"use strict";String.prototype.slugify=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-";return this.trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^\w\s]/gi," ").replace(/\s\s+/g," ").replace(/\s+/g,e)};
//# sourceMappingURL=tcds.js.map
