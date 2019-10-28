const { default: pk1 } = require("pk1");

pk1(1000).then(() => {
  if (Date.now) {
    console.log(Date.now());
  }
});
