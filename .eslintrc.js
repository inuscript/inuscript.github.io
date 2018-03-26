module.exports = {
  env: {
    node: true,
    browser: true
  },
  rules: {
    semi: [2, "never"],
    strict: false,
    "key-spacing": [
      0,
      {
        beforeColon: true,
        afterColon: true
      }
    ],
    "no-unused-vars": 0, // [1, {"vars" : "all", "args" : "after-used"} ],
    "no-comma-dangle": false
  }
};
