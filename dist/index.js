'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function () {
  function _default(inOptions) {
    _classCallCheck(this, _default);

    this.options = Object.assign({}, inOptions);
  }

  _createClass(_default, [{
    key: 'apply',
    value: function apply(compiler) {
      var path = this.options.path;

      var statisString = _fs2.default.readFileSync(path, CHARSET);

      compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
          htmlPluginData.assets.js.pop();
          htmlPluginData.assets.css.sort();
          callback(null, htmlPluginData);
        });
      });
    }
  }]);

  return _default;
}();

exports.default = _default;