import fs from 'fs';

export default class {

  constructor(inOptions){
    this.options =  Object.assign({},inOptions);
  }

  apply(compiler){
    compiler.plugin('compilation',(compilation)=>{
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback)=>{
        htmlPluginData.assets.js.pop();
        htmlPluginData.assets.css.sort();
        callback(null, htmlPluginData);
      });
    });
  }

}
