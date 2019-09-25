const util = require("util");

const helloPluto = util.deprecate(() => {
  console.log("hello pluto");
}, 'pluto is deprecated. It is not a planet anymore');

helloPluto();