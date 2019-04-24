module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [ //element官方按需引入
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
