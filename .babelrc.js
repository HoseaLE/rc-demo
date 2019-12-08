module.exports = {
  "presets": [
    "@babel/preset-react", 
    [
      "@babel/preset-env", { 
      "modules": false, // 不进行model转换， 默认为auto
      "useBuiltIns": false, // usage、entry , 是否引入ployfill
      "corejs": 2 // 默认为2
    }]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime", // 需要安装@babel/runtime到prod依赖
      { 
        // 若设置，需要引入相应的codejs(@babel/runtime-corejs2、@babel/runtime-corejs3}
        "corejs": false
      } 
    ]
  ]
}