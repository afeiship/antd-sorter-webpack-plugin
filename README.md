# antd-sorter-webpack-plugin
> A webpack plugin for ant-design order problem.


## buggy:
```js
  //mini plugin:
  function () {
    this.plugin('compilation', function (compilation) {
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback)=>{
        htmlPluginData.assets.js.pop();
        htmlPluginData.assets.css.sort();
        callback(null, htmlPluginData);
      });
    });
  },
```
