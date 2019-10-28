const { default: pk1 } = require("pk1");

pk1(1000).then(() => {
  console.log(Date.now());
});

export default Date.now();
