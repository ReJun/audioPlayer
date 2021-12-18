(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!**********************************!*\
  !*** E:/audioPlayerDemo/main.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 16));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuICAgIC4uLkFwcFxyXG59KVxyXG5hcHAuJG1vdW50KClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** E:/audioPlayerDemo/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/scroll/scroll', function () {return Vue.extend(__webpack_require__(/*! pages/scroll/scroll.vue?mpType=page */ 11).default);});

/***/ }),
/* 2 */
/*!************************************************************!*\
  !*** E:/audioPlayerDemo/pages/index/index.vue?mpType=page ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dNO0FBQ2hNLGdCQUFnQix5TUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** E:/audioPlayerDemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/audioPlayerDemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "audioPlayer"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "player"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(2, "sc", "coverPage animation-shake"),
              attrs: { _i: 2 }
            },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(3, "a-src", __webpack_require__(/*! ../../static/avatar.jpg */ 5)),
                  _i: 3
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "buttonGroup"), attrs: { _i: 4 } },
            [
              _c("view", {
                staticClass: _vm._$s(5, "sc", "buttonStyle icon-backward2"),
                attrs: { _i: 5 },
                on: {
                  click: function($event) {
                    return _vm.backward()
                  }
                }
              }),
              _vm._$s(6, "i", _vm.playButtonShow)
                ? _c("view", {
                    staticClass: _vm._$s(6, "sc", "buttonStyle icon-play3"),
                    attrs: { _i: 6 },
                    on: {
                      click: function($event) {
                        return _vm.play()
                      }
                    }
                  })
                : _vm._e(),
              _vm._$s(7, "i", _vm.pauseButtonShow)
                ? _c("view", {
                    staticClass: _vm._$s(7, "sc", "buttonStyle icon-pause2"),
                    attrs: { _i: 7 },
                    on: {
                      click: function($event) {
                        return _vm.pause()
                      }
                    }
                  })
                : _vm._e(),
              _c("view", {
                staticClass: _vm._$s(8, "sc", "buttonStyle icon-forward3"),
                attrs: { _i: 8 },
                on: {
                  click: function($event) {
                    return _vm.forward()
                  }
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(9, "sc", "iconGroup"), attrs: { _i: 9 } },
            [
              _c("view", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(10, "v-show", _vm.listCycle),
                    expression: "_$s(10,'v-show',listCycle)"
                  }
                ],
                staticClass: _vm._$s(10, "sc", "iconStyle icon-loop"),
                attrs: { _i: 10 },
                on: {
                  click: function($event) {
                    return _vm.list()
                  }
                }
              }),
              _c("view", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(11, "v-show", _vm.singleCycle),
                    expression: "_$s(11,'v-show',singleCycle)"
                  }
                ],
                staticClass: _vm._$s(11, "sc", "iconStyle icon-loop2"),
                attrs: { _i: 11 },
                on: {
                  click: function($event) {
                    return _vm.single()
                  }
                }
              }),
              _c("view", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(12, "v-show", _vm.randomCycle),
                    expression: "_$s(12,'v-show',randomCycle)"
                  }
                ],
                staticClass: _vm._$s(12, "sc", "iconStyle icon-shuffle"),
                attrs: { _i: 12 },
                on: {
                  click: function($event) {
                    return _vm.random()
                  }
                }
              }),
              _c("view", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(13, "v-show", _vm.menuShow),
                    expression: "_$s(13,'v-show',menuShow)"
                  }
                ],
                staticClass: _vm._$s(13, "sc", "iconStyle icon-menu"),
                attrs: { _i: 13 },
                on: {
                  click: function($event) {
                    return _vm.menuList()
                  }
                }
              })
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(14, "sc", "audioMessage"),
              attrs: { _i: 14 }
            },
            [_c("p", [_vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.audioName)))])]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "progressBar"),
              attrs: { _i: 16 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(17, "sc", "duration"),
                  attrs: { _i: 17 }
                },
                [_vm._v(_vm._$s(17, "t0-0", _vm._s(_vm.timer)))]
              ),
              _c("slider", {
                attrs: {
                  max: _vm._$s(18, "a-max", _vm.duration),
                  value: _vm._$s(18, "a-value", _vm.currentTime),
                  _i: 18
                },
                on: { change: _vm.sliderChange }
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(19, "sc", "duration"),
                  attrs: { _i: 19 }
                },
                [_vm._v(_vm._$s(19, "t0-0", _vm._s(_vm.overTimer)))]
              )
            ]
          )
        ]
      ),
      _c(
        "view",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm._$s(20, "v-show", _vm.audioListShow),
              expression: "_$s(20,'v-show',audioListShow)"
            }
          ],
          staticClass: _vm._$s(20, "sc", "audioListPopu"),
          attrs: { _i: 20 }
        },
        _vm._l(_vm._$s(21, "f", { forItems: _vm.audioList }), function(
          item,
          $10,
          $20,
          $30
        ) {
          return _c(
            "view",
            {
              key: _vm._$s(21, "f", { forIndex: $20, key: item.name }),
              attrs: {
                singer: _vm._$s("21-" + $30, "a-singer", item.singer),
                _i: "21-" + $30
              }
            },
            [
              _c(
                "view",
                {
                  class: _vm._$s("22-" + $30, "c", [item.class, item.isactive]),
                  attrs: { _i: "22-" + $30 },
                  on: {
                    click: function($event) {
                      return _vm.playList(item.src, item.name, item.singer)
                    }
                  }
                },
                [
                  _c("p", [
                    _vm._v(
                      _vm._$s("23-" + $30, "t0-0", _vm._s(item.name)) +
                        _vm._$s("23-" + $30, "t0-1", _vm._s(item.singer))
                    )
                  ])
                ]
              )
            ]
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!********************************************!*\
  !*** E:/audioPlayerDemo/static/avatar.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/avatar.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9hdmF0YXIuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************************************************************!*\
  !*** E:/audioPlayerDemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVwQixDQUFnQixzckJBQUcsRUFBQyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/audioPlayerDemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! common/demo.mp3 */ 9); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar innerAudioContext = uni.createInnerAudioContext();var _default = { data: function data() {return { // innerAudioContext:null,\n      playButtonShow: true, pauseButtonShow: false, duration: null, currentTime: 0, seekTime: null, src: null, name: '', singer: '', singleCycle: false, listCycle: true, randomCycle: false, audioListShow: false, audioList: [{ name: \"in the end\", singer: \"link Park\", class: \"songListStyle-A\", isactive: '', src: \"http://zyedu.tlkjyun.com/scjg/uploadFiles/uploadImgs/1636078021904.mp3\" }, { name: \"白夜\", singer: \"Reol\", class: \"songListStyle-B\", isactive: '', src: \"http://zyedu.tlkjyun.com/scjg/uploadFiles/uploadImgs/20211112/5890108c97e240669ecbfaa07fc1148f.mp3\" }], audioName: '歌曲名称', menuShow: true };}, computed: { timer: function timer() {return calcTimer(this.currentTime);}, overTimer: function overTimer() {return calcTimer(this.duration);} }, onLoad: function onLoad() {var _this = this;if (this.audioList === null) {this.listCycle = false;this.randomCycle = false;this.singleCycle = false;this.menuShow = false;};if (this.duration === null) {this.duration = \"100\";};innerAudioContext.onCanplay(function () {__f__(\"log\", innerAudioContext.duration, \" at pages/index/index.vue:105\");_this.duration = innerAudioContext.duration;});innerAudioContext.onPlay(function () {\n      __f__(\"log\", '开始播放', \" at pages/index/index.vue:110\");\n\n    });\n\n    innerAudioContext.onError(function (res) {\n      __f__(\"log\", res.errMsg, \" at pages/index/index.vue:115\");\n      __f__(\"log\", res.errCode, \" at pages/index/index.vue:116\");\n    });\n\n    innerAudioContext.onTimeUpdate(function () {\n      // console.log(innerAudioContext.currentTime)\n      _this.currentTime = innerAudioContext.currentTime;\n    });\n\n    innerAudioContext.onEnded(function () {//当innerAudioContext.loop为true的时候是不会触发 onEnded callback的;\n      uni.showToast({\n        title: \"播放结束\",\n        icon: \"none\",\n        position: \"top\" });\n\n      if (innerAudioContext.paused) {\n        _this.playButtonShow = true;\n        _this.pauseButtonShow = false;\n        _this.currentTime = 0;\n        _this.seekTime = 0;\n        innerAudioContext.destroy();\n      };\n\n    });\n\n    innerAudioContext.onPause(function () {\n      __f__(\"log\", \"播放暂停\", \" at pages/index/index.vue:141\");\n    });\n\n    innerAudioContext.onError(function (res) {\n      __f__(\"log\", res, \" at pages/index/index.vue:145\");\n    });\n\n\n  },\n  methods: {\n    play: function play() {\n      if (this.audioList != null && this.src != null) {\n        innerAudioContext.autoplay = false;\n        innerAudioContext.src = this.src;\n        this.audioName = this.name + '/' + this.singer;\n        innerAudioContext.play();\n        if (this.seekTime != null) {\n          innerAudioContext.seek(this.seekTime);\n        }\n        this.playButtonShow = false;\n        this.pauseButtonShow = true;\n      } else {\n        uni.showToast({\n          title: \"暂无播放音乐\",\n          icon: \"error\",\n          duration: 1000 });\n\n      }\n    },\n\n    playList: function playList(src, name, singer) {\n      innerAudioContext.src = src; //这儿得加函数防抖\n      this.audioName = name + '/' + singer;\n      this.src = src;\n      this.name = name;\n      this.singer = singer;\n      innerAudioContext.play();\n      this.playButtonShow = false;\n      this.pauseButtonShow = true;\n      for (var i in this.audioList) {\n        if (innerAudioContext.src === this.audioList[i].src) {\n          this.audioList[i].isactive = 'activeNow';\n        } else {\n          this.audioList[i].isactive = null;\n        }\n      }\n\n      if (this.listCycle === true) {\n\n      }\n    },\n\n    pause: function pause() {\n      innerAudioContext.pause();\n      this.playButtonShow = true;\n      this.pauseButtonShow = false;\n      this.currentTime = innerAudioContext.currentTime;\n      if (innerAudioContext.paused) {\n        __f__(\"log\", \"当前暂停时间\" + innerAudioContext.currentTime, \" at pages/index/index.vue:199\");\n        this.seekTime = innerAudioContext.currentTime;\n      }\n    },\n\n    forward: function forward() {\n      this.src = \"1\";\n      __f__(\"log\", this.src, \" at pages/index/index.vue:206\");\n    },\n\n    sliderChange: function sliderChange(e) {\n      __f__(\"log\", \"当前滑块位置\" + e.detail.value, \" at pages/index/index.vue:210\");\n      this.seekTime = e.detail.value;\n      innerAudioContext.seek(this.seekTime);\n    },\n\n\n    list: function list() {\n      this.listCycle = false;\n      this.singleCycle = true;\n      uni.showToast({\n        title: \"单曲循环\",\n        icon: \"none\",\n        position: \"top\",\n        duration: 1000 });\n\n      innerAudioContext.loop = true;\n    },\n\n    single: function single() {\n      this.singleCycle = false;\n      this.randomCycle = true;\n      uni.showToast({\n        title: \"随机播放\",\n        icon: \"none\",\n        position: \"top\",\n        duration: 1000 });\n\n    },\n\n    random: function random() {\n      this.randomCycle = false;\n      this.listCycle = true;\n      uni.showToast({\n        title: \"列表循环\",\n        icon: \"none\",\n        position: \"top\",\n        duration: 1000 });\n\n    },\n\n    menuList: function menuList() {\n      if (this.audioListShow === false) {\n        this.audioListShow = true;\n      } else {\n        this.audioListShow = false;\n      }\n    } } };exports.default = _default;\n\n\n\n\n\n\n\nfunction calcTimer(timer) {\n  if (timer === 0 || typeof timer !== 'number') {\n    return '00:00';\n  }\n  var mm = Math.floor(timer / 60);\n  var ss = Math.floor(timer % 60);\n  if (mm < 10) {\n    mm = '0' + mm;\n  }\n  if (ss < 10) {\n    ss = '0' + ss;\n  }\n  return mm + ':' + ss;\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 8)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSw4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzRCxlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0E7QUFDQSwwQkFGQSxFQUdBLHNCQUhBLEVBSUEsY0FKQSxFQUtBLGNBTEEsRUFNQSxjQU5BLEVBT0EsU0FQQSxFQVFBLFFBUkEsRUFTQSxVQVRBLEVBVUEsa0JBVkEsRUFXQSxlQVhBLEVBWUEsa0JBWkEsRUFhQSxvQkFiQSxFQWNBLFlBQ0Esa0tBREEsRUFFQSxpTEFGQSxDQWRBLEVBa0JBLGlCQWxCQSxFQW1CQSxjQW5CQSxHQXNCQSxDQXhCQSxFQTBCQSxZQUNBLEtBREEsbUJBQ0EsQ0FDQSxtQ0FDQSxDQUhBLEVBSUEsU0FKQSx1QkFJQSxDQUNBLGdDQUNBLENBTkEsRUExQkEsRUFrQ0EsTUFsQ0Esb0JBa0NBLGtCQUNBLDhCQUNBLHVCQUNBLHlCQUNBLHlCQUNBLHNCQUNBLEVBR0EsNkJBQ0Esc0JBQ0EsRUFFQSx5Q0FDQSwwRUFDQSw0Q0FDQSxDQUhBLEVBS0E7QUFDQTs7QUFFQSxLQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsS0FIQTs7QUFLQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBZEE7O0FBZ0JBO0FBQ0E7QUFDQSxLQUZBOztBQUlBO0FBQ0E7QUFDQSxLQUZBOzs7QUFLQSxHQTVGQTtBQTZGQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BVkEsTUFVQTtBQUNBO0FBQ0EseUJBREE7QUFFQSx1QkFGQTtBQUdBLHdCQUhBOztBQUtBO0FBQ0EsS0FuQkE7O0FBcUJBLFlBckJBLG9CQXFCQSxHQXJCQSxFQXFCQSxJQXJCQSxFQXFCQSxNQXJCQSxFQXFCQTtBQUNBLGtDQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBekNBOztBQTJDQSxTQTNDQSxtQkEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwREE7O0FBc0RBLFdBdERBLHFCQXNEQTtBQUNBO0FBQ0E7QUFDQSxLQXpEQTs7QUEyREEsZ0JBM0RBLHdCQTJEQSxDQTNEQSxFQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL0RBOzs7QUFrRUEsUUFsRUEsa0JBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBO0FBSUEsc0JBSkE7O0FBTUE7QUFDQSxLQTVFQTs7QUE4RUEsVUE5RUEsb0JBOEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBREE7QUFFQSxvQkFGQTtBQUdBLHVCQUhBO0FBSUEsc0JBSkE7O0FBTUEsS0F2RkE7O0FBeUZBLFVBekZBLG9CQXlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsb0JBRkE7QUFHQSx1QkFIQTtBQUlBLHNCQUpBOztBQU1BLEtBbEdBOztBQW9HQSxZQXBHQSxzQkFvR0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBMUdBLEVBN0ZBLEU7Ozs7Ozs7O0FBK01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImF1ZGlvUGxheWVyXCI+XG5cdFx0PHZpZXcgY2xhc3M9XCJwbGF5ZXJcIiA+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY292ZXJQYWdlIGFuaW1hdGlvbi1zaGFrZVwiPlxyXG5cdFx0XHRcdDxpbWFnZSAgc3R5bGU9XCJ3aWR0aDogOTBycHg7IGhlaWdodDogOTBycHg7IGJvcmRlci1yYWRpdXM6IDEwcnB4O1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9hdmF0YXIuanBnXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvbkdyb3VwXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidXR0b25TdHlsZSBpY29uLWJhY2t3YXJkMlwiIEBjbGljaz1cImJhY2t3YXJkKClcIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidXR0b25TdHlsZSBpY29uLXBsYXkzXCIgIEBjbGljaz1cInBsYXkoKVwiIHYtaWY9XCJwbGF5QnV0dG9uU2hvd1wiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvblN0eWxlIGljb24tcGF1c2UyXCIgIEBjbGljaz1cInBhdXNlKClcIiB2LWlmPVwicGF1c2VCdXR0b25TaG93XCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnV0dG9uU3R5bGUgaWNvbi1mb3J3YXJkM1wiIEBjbGljaz1cImZvcndhcmQoKVwiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImljb25Hcm91cFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblN0eWxlIGljb24tbG9vcFwiIEBjbGljaz1cImxpc3QoKVwiIHYtc2hvdz1cImxpc3RDeWNsZVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25TdHlsZSBpY29uLWxvb3AyXCIgQGNsaWNrPVwic2luZ2xlKClcIiB2LXNob3c9XCJzaW5nbGVDeWNsZVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25TdHlsZSBpY29uLXNodWZmbGVcIiBAY2xpY2s9XCJyYW5kb20oKVwiIHYtc2hvdz1cInJhbmRvbUN5Y2xlXCI+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvblN0eWxlIGljb24tbWVudVwiIEBjbGljaz1cIm1lbnVMaXN0KClcIiB2LXNob3c9XCJtZW51U2hvd1wiPjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhdWRpb01lc3NhZ2VcIj5cclxuXHRcdFx0XHQ8cD57e2F1ZGlvTmFtZX19PC9wPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicHJvZ3Jlc3NCYXJcIj5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkdXJhdGlvblwiIHN0eWxlPVwiZm9udC1zaXplOiAxNnJweDtcIj5cclxuXHRcdFx0XHRcdHt7dGltZXJ9fVxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8c2xpZGVyXHJcblx0XHRcdFx0bWluPVwiMFwiXHJcblx0XHRcdFx0YWN0aXZlQ29sb3I9XCJyZ2IoMjU1LCAyNTUsIDI1NSlcIlxyXG5cdFx0XHRcdGJsb2NrLXNpemU9XCIxNFwiXHJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yPVwicmdiKDE5NCwxOTQsMTk2KVwiXHJcblx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tbGVmdDogMTVweDt3aWR0aDogODAlOyBtYXJnaW4tcmlnaHQ6IDE1cHg7XCJcclxuXHRcdFx0XHQ6bWF4PVwiZHVyYXRpb25cIlxyXG5cdFx0XHRcdDp2YWx1ZT1cImN1cnJlbnRUaW1lXCJcclxuXHRcdFx0XHRAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0PC9zbGlkZXI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJkdXJhdGlvblwiIHN0eWxlPVwiZm9udC1zaXplOiAxNnJweDtcIj5cclxuXHRcdFx0XHRcdHt7b3ZlclRpbWVyfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiYXVkaW9MaXN0UG9wdVwiIHYtc2hvdz1cImF1ZGlvTGlzdFNob3dcIiBzdHlsZT1cIm92ZXJmbG93OiBzY3JvbGw7XCI+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiaXRlbSBpbiBhdWRpb0xpc3RcIiA6a2V5PVwiaXRlbS5uYW1lXCIgOnNpbmdlcj1cIml0ZW0uc2luZ2VyXCI+XHJcblx0XHRcdFx0PHZpZXcgOmNsYXNzPVwiW2l0ZW0uY2xhc3MsaXRlbS5pc2FjdGl2ZV1cIiBAY2xpY2s9XCJwbGF5TGlzdChpdGVtLnNyYyxpdGVtLm5hbWUsaXRlbS5zaW5nZXIpXCI+XHJcblx0XHRcdFx0XHQ8cD57e2l0ZW0ubmFtZX19LXt7aXRlbS5zaW5nZXJ9fTwvcD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0ICdjb21tb24vZGVtby5tcDMnO1xyXG5cdGNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyBpbm5lckF1ZGlvQ29udGV4dDpudWxsLFxyXG5cdFx0XHRcdHBsYXlCdXR0b25TaG93OnRydWUsXHJcblx0XHRcdFx0cGF1c2VCdXR0b25TaG93OmZhbHNlLFxyXG5cdFx0XHRcdGR1cmF0aW9uOm51bGwsXHJcblx0XHRcdFx0Y3VycmVudFRpbWU6MCxcclxuXHRcdFx0XHRzZWVrVGltZTpudWxsLFxyXG5cdFx0XHRcdHNyYzpudWxsLFxyXG5cdFx0XHRcdG5hbWU6JycsXHJcblx0XHRcdFx0c2luZ2VyOicnLFxyXG5cdFx0XHRcdHNpbmdsZUN5Y2xlOmZhbHNlLFxyXG5cdFx0XHRcdGxpc3RDeWNsZTp0cnVlLFxyXG5cdFx0XHRcdHJhbmRvbUN5Y2xlOmZhbHNlLFxyXG5cdFx0XHRcdGF1ZGlvTGlzdFNob3c6ZmFsc2UsXHJcblx0XHRcdFx0YXVkaW9MaXN0OltcclxuXHRcdFx0XHRcdHtuYW1lOlwiaW4gdGhlIGVuZFwiLHNpbmdlcjpcImxpbmsgUGFya1wiLGNsYXNzOlwic29uZ0xpc3RTdHlsZS1BXCIsaXNhY3RpdmU6Jycsc3JjOlwiaHR0cDovL3p5ZWR1LnRsa2p5dW4uY29tL3NjamcvdXBsb2FkRmlsZXMvdXBsb2FkSW1ncy8xNjM2MDc4MDIxOTA0Lm1wM1wifSxcclxuXHRcdFx0XHRcdHtuYW1lOlwi55m95aScXCIsc2luZ2VyOlwiUmVvbFwiLGNsYXNzOlwic29uZ0xpc3RTdHlsZS1CXCIsaXNhY3RpdmU6Jycsc3JjOlwiaHR0cDovL3p5ZWR1LnRsa2p5dW4uY29tL3NjamcvdXBsb2FkRmlsZXMvdXBsb2FkSW1ncy8yMDIxMTExMi81ODkwMTA4Yzk3ZTI0MDY2OWVjYmZhYTA3ZmMxMTQ4Zi5tcDNcIn0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRhdWRpb05hbWU6J+atjOabsuWQjeensCcsXHJcblx0XHRcdFx0bWVudVNob3c6dHJ1ZSxcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Y29tcHV0ZWQ6e1xyXG5cdFx0XHR0aW1lcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gY2FsY1RpbWVyKHRoaXMuY3VycmVudFRpbWUpXHJcblx0XHRcdH0sXHJcblx0XHRcdG92ZXJUaW1lcigpIHtcclxuXHRcdFx0XHRyZXR1cm4gY2FsY1RpbWVyKHRoaXMuZHVyYXRpb24pXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdGlmKHRoaXMuYXVkaW9MaXN0ID09PSBudWxsKXtcclxuXHRcdFx0XHR0aGlzLmxpc3RDeWNsZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMucmFuZG9tQ3ljbGUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnNpbmdsZUN5Y2xlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5tZW51U2hvdyA9IGZhbHNlO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0aWYodGhpcy5kdXJhdGlvbiA9PT0gbnVsbCl7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IFwiMTAwXCJcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0Lm9uQ2FucGxheSgoKSA9PiB7XHJcblx0XHRcdCAgICBjb25zb2xlLmxvZyhpbm5lckF1ZGlvQ29udGV4dC5kdXJhdGlvbik7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IGlubmVyQXVkaW9Db250ZXh0LmR1cmF0aW9uO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0Lm9uUGxheSgoKSA9PiB7XHJcblx0XHRcdCAgICBjb25zb2xlLmxvZygn5byA5aeL5pKt5pS+JylcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKChyZXMpID0+IHtcclxuXHRcdFx0ICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKTtcclxuXHRcdFx0ICBjb25zb2xlLmxvZyhyZXMuZXJyQ29kZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aW5uZXJBdWRpb0NvbnRleHQub25UaW1lVXBkYXRlKCgpID0+IHtcclxuXHRcdFx0ICAgIC8vIGNvbnNvbGUubG9nKGlubmVyQXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lKVxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSBpbm5lckF1ZGlvQ29udGV4dC5jdXJyZW50VGltZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0Lm9uRW5kZWQoKCkgPT4ge1x0XHRcdC8v5b2TaW5uZXJBdWRpb0NvbnRleHQubG9vcOS4unRydWXnmoTml7blgJnmmK/kuI3kvJrop6blj5Egb25FbmRlZCBjYWxsYmFja+eahDtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOlwi5pKt5pS+57uT5p2fXCIsXHJcblx0XHRcdFx0XHRpY29uOlwibm9uZVwiLFxyXG5cdFx0XHRcdFx0cG9zaXRpb246XCJ0b3BcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmKGlubmVyQXVkaW9Db250ZXh0LnBhdXNlZCl7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXlCdXR0b25TaG93ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMucGF1c2VCdXR0b25TaG93ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gMDtcclxuXHRcdFx0XHRcdHRoaXMuc2Vla1RpbWUgPSAwO1xyXG5cdFx0XHRcdFx0aW5uZXJBdWRpb0NvbnRleHQuZGVzdHJveSgpO1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlubmVyQXVkaW9Db250ZXh0Lm9uUGF1c2UoKCkgPT4ge1xyXG5cdFx0XHQgICAgY29uc29sZS5sb2coXCLmkq3mlL7mmoLlgZxcIilcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5vbkVycm9yKChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdH0pXHJcblx0XHRcdFxyXG5cclxuXHRcdH0sXG4gICAgICAgIG1ldGhvZHM6IHsgIFxuICAgICAgICAgICAgcGxheSgpIHtcclxuXHRcdFx0XHRpZih0aGlzLmF1ZGlvTGlzdCAhPSBudWxsICYmIHRoaXMuc3JjICE9IG51bGwpe1xyXG5cdFx0XHRcdFx0aW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGlubmVyQXVkaW9Db250ZXh0LnNyYyA9IHRoaXMuc3JjXHJcblx0XHRcdFx0XHR0aGlzLmF1ZGlvTmFtZSA9IHRoaXMubmFtZSsnLycrdGhpcy5zaW5nZXJcclxuXHRcdFx0XHRcdGlubmVyQXVkaW9Db250ZXh0LnBsYXkoKTtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc2Vla1RpbWUgIT0gbnVsbCl7XHJcblx0XHRcdFx0XHRcdGlubmVyQXVkaW9Db250ZXh0LnNlZWsodGhpcy5zZWVrVGltZSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMucGxheUJ1dHRvblNob3cgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wYXVzZUJ1dHRvblNob3cgPSB0cnVlXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6XCLmmoLml6Dmkq3mlL7pn7PkuZBcIixcclxuXHRcdFx0XHRcdFx0aWNvbjpcImVycm9yXCIsXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uOjEwMDBcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxuICAgICAgICAgICAgfSxcclxuXHRcdFx0XHJcblx0XHRcdHBsYXlMaXN0KHNyYyxuYW1lLHNpbmdlcil7XHJcblx0XHRcdFx0aW5uZXJBdWRpb0NvbnRleHQuc3JjID0gc3JjO1x0XHRcdC8v6L+Z5YS/5b6X5Yqg5Ye95pWw6Ziy5oqWXHJcblx0XHRcdFx0dGhpcy5hdWRpb05hbWUgPSBuYW1lKycvJytzaW5nZXI7XHJcblx0XHRcdFx0dGhpcy5zcmMgPSBzcmM7XHJcblx0XHRcdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdFx0XHR0aGlzLnNpbmdlciA9IHNpbmdlcjtcclxuXHRcdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5wbGF5KCk7XHRcdFxyXG5cdFx0XHRcdHRoaXMucGxheUJ1dHRvblNob3cgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnBhdXNlQnV0dG9uU2hvdyA9IHRydWU7XHJcblx0XHRcdFx0Zm9yKGxldCBpIGluIHRoaXMuYXVkaW9MaXN0KXtcclxuXHRcdFx0XHRcdGlmKGlubmVyQXVkaW9Db250ZXh0LnNyYyA9PT0gdGhpcy5hdWRpb0xpc3RbaV0uc3JjKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5hdWRpb0xpc3RbaV0uaXNhY3RpdmUgPSAnYWN0aXZlTm93J1xyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHRoaXMuYXVkaW9MaXN0W2ldLmlzYWN0aXZlID0gbnVsbFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZih0aGlzLmxpc3RDeWNsZSA9PT0gdHJ1ZSl7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ICBcclxuXHRcdFx0cGF1c2UoKXtcclxuXHRcdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5wYXVzZSgpO1xyXG5cdFx0XHRcdHRoaXMucGxheUJ1dHRvblNob3cgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMucGF1c2VCdXR0b25TaG93ID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IGlubmVyQXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lXHJcblx0XHRcdFx0aWYoaW5uZXJBdWRpb0NvbnRleHQucGF1c2VkKXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5b2T5YmN5pqC5YGc5pe26Ze0XCIraW5uZXJBdWRpb0NvbnRleHQuY3VycmVudFRpbWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zZWVrVGltZSA9IGlubmVyQXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdGZvcndhcmQoKXtcclxuXHRcdFx0XHR0aGlzLnNyYyA9IFwiMVwiO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3JjKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHNsaWRlckNoYW5nZShlKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuW9k+WJjea7keWdl+S9jee9rlwiK2UuZGV0YWlsLnZhbHVlKVxyXG5cdFx0XHRcdHRoaXMuc2Vla1RpbWUgPSBlLmRldGFpbC52YWx1ZTtcclxuXHRcdFx0XHRpbm5lckF1ZGlvQ29udGV4dC5zZWVrKHRoaXMuc2Vla1RpbWUpXHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0bGlzdCgpe1xyXG5cdFx0XHRcdHRoaXMubGlzdEN5Y2xlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5zaW5nbGVDeWNsZSA9IHRydWU7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTpcIuWNleabsuW+queOr1wiLFxyXG5cdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOlwidG9wXCIsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjoxMDAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aW5uZXJBdWRpb0NvbnRleHQubG9vcCA9IHRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRzaW5nbGUoKXtcclxuXHRcdFx0XHR0aGlzLnNpbmdsZUN5Y2xlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5yYW5kb21DeWNsZSA9IHRydWU7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTpcIumaj+acuuaSreaUvlwiLFxyXG5cdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOlwidG9wXCIsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjoxMDAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdHJhbmRvbSgpe1xyXG5cdFx0XHRcdHRoaXMucmFuZG9tQ3ljbGUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmxpc3RDeWNsZSA9IHRydWU7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTpcIuWIl+ihqOW+queOr1wiLFxyXG5cdFx0XHRcdFx0aWNvbjpcIm5vbmVcIixcclxuXHRcdFx0XHRcdHBvc2l0aW9uOlwidG9wXCIsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjoxMDAwXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdG1lbnVMaXN0KCl7XHJcblx0XHRcdFx0aWYodGhpcy5hdWRpb0xpc3RTaG93ID09PSBmYWxzZSl7XHJcblx0XHRcdFx0XHR0aGlzLmF1ZGlvTGlzdFNob3cgPSB0cnVlO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5hdWRpb0xpc3RTaG93ID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFx0XHRcdFxuICAgICAgICB9LFxyXG5cdFx0XHJcblxyXG5cdFx0XHJcblxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjYWxjVGltZXIodGltZXIpIHtcclxuXHRcdGlmKHRpbWVyID09PSAwIHx8IHR5cGVvZiB0aW1lciAhPT0gJ251bWJlcicpIHtcclxuXHRcdFx0cmV0dXJuICcwMDowMCdcclxuXHRcdH1cclxuXHRcdGxldCBtbSA9IE1hdGguZmxvb3IodGltZXIgLyA2MClcclxuXHRcdGxldCBzcyA9IE1hdGguZmxvb3IodGltZXIgJSA2MClcclxuXHRcdGlmKG1tIDwgMTApIHtcclxuXHRcdFx0bW0gPSAnMCcgKyBtbVxyXG5cdFx0fVxyXG5cdFx0aWYoc3MgPCAxMCkge1xyXG5cdFx0XHRzcyA9ICcwJyArIHNzXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbW0gKyAnOicgKyBzc1xyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG4vKiBcclxu6YWN6Imy5pa55qGI77yaXHJcbiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICMxZDIzNTcsICMzZTQxNzgsICM1ZTYyOWEsICM3Zjg0YmUpO1xyXG4gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI1ZGVnLCAjMDAxNWQyLCAjMjUzNGUxLCAjMzY0Y2YwLCAjNDM2NGZmKTtcclxuIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgIzZmMGU2YSwgIzgxNjQ3MywgIzg1YTc3OCwgIzc1ZWM3OSk7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICMzYTYyNTcsICM3NDViNzEsICNhNDRiOGMsICNkMjFkYTcpO1xyXG4gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI1ZGVnLCAjMGE0NTVkLCAjMTk2YjZmLCAjMWY5MzgyLCAjMWZiZTk0KTtcclxuIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgIzRlNmFkOSwgIzYwOGNjYiwgIzY2YWRiYywgIzYyY2ZhYik7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICMwMDdlNzMsICMwMWEwOGQsICMwMWMzYTgsICMwMGU4YzMpO1xyXG4gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDI1ZGVnLCAjYmM4MWZjLCAjZDlhMGQ4LCAjZWViZmIzLCAjZmNkZThhKTtcclxuIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgI2Q5MjA2MCwgI2UyNTQ2NiwgI2U5Nzg2YywgI2VmOTg3MSk7XHJcbiBcclxuICovXHJcblx0XHJcbnBhZ2V7XHJcblx0YmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG5cdFxyXG5bY2xhc3MqPWFuaW1hdGlvbi1dIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoXG59XHJcblxyXG5cclxuXHJcblx0XHJcbi5hbmltYXRpb24tc2hha2V7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlXG59XG5cclxuQGtleWZyYW1lcyBzaGFrZSB7XG5cbiAgICAwJSxcbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApXG4gICAgfVxuXG4gICAgMTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05cHgpXG4gICAgfVxuXG4gICAgMjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDhweClcbiAgICB9XG5cbiAgICAzMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTdweClcbiAgICB9XG5cbiAgICA0MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KVxuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KVxuICAgIH1cblxuICAgIDYwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpXG4gICAgfVxuXG4gICAgNzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpXG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweClcbiAgICB9XG5cbiAgICA5MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFweClcbiAgICB9XG59XHJcblxyXG4ucGxheWVye1xyXG5cdG1hcmdpbi10b3A6IDEwcnB4O1xyXG5cdGhlaWdodDogMTcwcnB4O1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0Ym9yZGVyOiByZ2IoMjQ4LDEzNSwxNzkpIDFweCBzb2xpZDtcclxuXHRtYXJnaW46IDBycHggNSBycHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHJpZ2h0OiA1JTtcclxuXHRsZWZ0OiA1JTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNkOTIwNjAsICNlMjU0NjYsICNlOTc4NmMsICNlZjk4NzEpO1xyXG5cdGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICNkZmRmZGY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmljb24tcGxheTM6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMWNcIjtcclxuICBmb250LXNpemU6IDQwcnB4O1xyXG4gIG1hcmdpbjogNDBycHg7XG59XHJcblxyXG4uaWNvbi1wYXVzZTI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMWRcIjtcclxuICBmb250LXNpemU6IDQwcnB4O1xyXG4gIG1hcmdpbjogNDBycHg7XHJcbiAgXG59XG4uaWNvbi1iYWNrd2FyZDI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMWZcIjtcclxuICBmb250LXNpemU6IDQwcnB4O1xyXG4gIG1hcmdpbjogNDBycHg7XHJcbiAgXG59XG4uaWNvbi1mb3J3YXJkMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZWEyMFwiO1xyXG4gZm9udC1zaXplOiA0MHJweDtcclxuIG1hcmdpbjogNDBycHg7XG59XHJcblxyXG4uaWNvbi1tZW51OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOWJkXCI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cbn1cclxuXHJcbi5pY29uLWxvb3A6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGVhMmRcIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxufVxyXG5cclxuLmJ1dHRvbkdyb3Vwe1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiA4MHJweDtcclxuXHRtYXJnaW46IDVycHg7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuLnByb2dyZXNzQmFyIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMjVycHg7XHJcblx0XHJcbn1cclxuXHJcbi5kdXJhdGlvbntcclxuXHRtYXJnaW46IDR1cHg7XHJcblx0cGFkZGluZzogMDtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmNvdmVyUGFnZXtcclxuXHR3aWR0aDogOTBycHg7XHJcblx0aGVpZ2h0OjkwcnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxNjgsIDkxLCAxMjIpO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAyNXJweDtcclxuXHR0b3A6IDE1cnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdFxyXG59XHJcblxyXG5cclxuXHJcbi5idXR0b25TdHlsZXtcclxuXHRjb2xvcjogcmdiKDI1NCwyMzUsMjUyKTtcclxuXHJcbn1cclxuXHJcbi5hdWRpb01lc3NhZ2V7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGNvbG9yOiByZ2IoMjU0LDIzNSwyNTIpO1xyXG5cdGFuaW1hdGlvbjogZmluZ2VyIGluZmluaXRlIDRzO1xyXG59XHJcblxyXG4uaWNvbkdyb3Vwe1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG1hcmdpbjogMjBycHg7XHJcblx0cmlnaHQ6IDEwcnB4O1xyXG5cdHRvcDogMTBycHg7XHJcbn1cclxuLmljb25TdHlsZXtcclxuXHRjb2xvcjogcmdiKDI1NCwyMzUsMjUyKTtcclxufVxyXG4uaWNvbi1sb29we1xyXG5cdG1hcmdpbi1yaWdodDogMTVycHg7XHJcbn1cclxuXHJcbi5pY29uLXNodWZmbGV7XHJcblx0bWFyZ2luLXJpZ2h0OiAxNXJweDtcclxufVxyXG5cclxuLmljb24tbG9vcDJ7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHJweDtcclxufVxyXG5cclxuLmljb24tbWVudXtcclxuXHRtYXJnaW4tbGVmdDogNXJweDtcclxufVxyXG5cclxuLmF1ZGlvTGlzdFBvcHV7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRoZWlnaHQ6IDI1MHJweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjQ4LDEzNSwxNzkpO1xyXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cmlnaHQ6IDUlO1xyXG5cdGxlZnQ6IDUlO1xyXG5cdG1hcmdpbi10b3A6IDVycHg7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCA1cHggI2RmZGZkZjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHJweDtcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmluZ2Vye1xyXG5cdDAle1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCk7XHJcblx0fVxyXG5cdFxyXG5cdDI1JXtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCk7XHJcblx0fVxyXG5cdFxyXG5cdDUwJXtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG5cdH1cclxuXHRcclxuXHQ3NSV7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgpO1xyXG5cdH1cclxuXHRcclxuXHQxMDAle1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCk7XHJcblx0fVxyXG59XHJcblxyXG4uc29uZ0xpc3RTdHlsZS1Be1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNTBycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMTUzLCAxOTkpO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcblx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcclxufVxyXG5cclxuLnNvbmdMaXN0U3R5bGUtQntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDUwcnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDE3MCwgMjAzKTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMzJycHg7XHJcbn1cclxuXHJcbnB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5hY3RpdmVOb3d7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmNTU3ZjtcclxuXHRhbmltYXRpb246c2hha2UgMC44MnMgY3ViaWMtYmV6aWVyKC4zNiwuMDcsLjE5LC45Nylib3RoO1xyXG59XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 9 */
/*!******************************************!*\
  !*** E:/audioPlayerDemo/common/demo.mp3 ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/common/demo.mp3\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL2NvbW1vbi9kZW1vLm1wM1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!**************************************************************!*\
  !*** E:/audioPlayerDemo/pages/scroll/scroll.vue?mpType=page ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.vue?vue&type=template&id=56a7b176&mpType=page */ 12);\n/* harmony import */ var _scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll.vue?vue&type=script&lang=js&mpType=page */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/scroll/scroll.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ2dNO0FBQ2hNLGdCQUFnQix5TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Njcm9sbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTZhN2IxNzYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Njcm9sbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2Nyb2xsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvc2Nyb2xsL3Njcm9sbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!********************************************************************************************!*\
  !*** E:/audioPlayerDemo/pages/scroll/scroll.vue?vue&type=template&id=56a7b176&mpType=page ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scroll.vue?vue&type=template&id=56a7b176&mpType=page */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_template_id_56a7b176_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/audioPlayerDemo/pages/scroll/scroll.vue?vue&type=template&id=56a7b176&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _vm._v(_vm._$s(0, "t0-0", _vm._s("当前URL为:" + _vm.URL))),
    _c("web-view", {
      attrs: {
        src: _vm._$s(1, "a-src", _vm.src),
        "webview-styles": _vm._$s(1, "a-webview-styles", _vm.webviewStyles),
        _i: 1
      }
    }),
    _c("button", {
      attrs: { _i: 2 },
      on: {
        click: function($event) {
          return _vm.getUrl()
        }
      }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!**************************************************************************************!*\
  !*** E:/audioPlayerDemo/pages/scroll/scroll.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scroll.vue?vue&type=script&lang=js&mpType=page */ 15);\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scroll_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdwQixDQUFnQix1ckJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2Nyb2xsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LTEhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Njcm9sbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/audioPlayerDemo/pages/scroll/scroll.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n\nvar wv;var _default =\n{\n  data: function data() {\n    return {\n      webviewStyles: {\n        progress: false },\n\n      URL: '',\n      src: 'http://www.baidu.com/' };\n\n  },\n\n  onShow: function onShow() {\n\n  },\n\n\n  onUnload: function onUnload() {\n  },\n\n  onLoad: function onLoad() {\n\n    var currentWebview = this.$scope.$getAppWebview();\n    setTimeout(function () {\n      wv = currentWebview.children()[0]; //获取当前webview页面\n      __f__(\"log\", \"当前webview窗口:\" + wv.getURL(), \" at pages/scroll/scroll.vue:35\");\n\n      wv.addEventListener('loading', function () {\n        __f__(\"log\", \"开始加载:\" + wv.getURL(), \" at pages/scroll/scroll.vue:38\");\n        uni.showLoading({\n          title: \"加载中\" });\n\n      }, false);\n\n      wv.addEventListener('loaded', function () {\n        uni.hideLoading();\n      }, false);\n\n    }, 1500); //如果是页面初始化调用时，需要延时一下\n\n  },\n\n  methods: {\n    getUrl: function getUrl() {\n      var pages = getCurrentPages();\n      var page = pages[pages.length - 1];\n      var currentWebview = page.$getAppWebview();\n      var url = currentWebview.children()[0].getURL();\n      this.URL = url;\n      __f__(\"log\", \"当前URL:\" + this.URL, \" at pages/scroll/scroll.vue:59\");\n      __f__(\"log\", \"当前src:\" + this.src, \" at pages/scroll/scroll.vue:60\");\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 8)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2Nyb2xsL3Njcm9sbC52dWUiXSwibmFtZXMiOlsid3YiLCJkYXRhIiwid2Vidmlld1N0eWxlcyIsInByb2dyZXNzIiwiVVJMIiwic3JjIiwib25TaG93Iiwib25VbmxvYWQiLCJvbkxvYWQiLCJjdXJyZW50V2VidmlldyIsIiRzY29wZSIsIiRnZXRBcHBXZWJ2aWV3Iiwic2V0VGltZW91dCIsImNoaWxkcmVuIiwiZ2V0VVJMIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVuaSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJoaWRlTG9hZGluZyIsIm1ldGhvZHMiLCJnZXRVcmwiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJsZW5ndGgiLCJ1cmwiXSwibWFwcGluZ3MiOiJxSUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEVBQUosQztBQUNlO0FBQ2RDLE1BRGMsa0JBQ1I7QUFDTCxXQUFNO0FBQ0xDLG1CQUFhLEVBQUM7QUFDYkMsZ0JBQVEsRUFBQyxLQURJLEVBRFQ7O0FBSUxDLFNBQUcsRUFBQyxFQUpDO0FBS0xDLFNBQUcsRUFBQyx1QkFMQyxFQUFOOztBQU9BLEdBVGE7O0FBV2RDLFFBWGMsb0JBV0w7O0FBRVIsR0FiYTs7O0FBZ0JkQyxVQWhCYyxzQkFnQkg7QUFDVixHQWpCYTs7QUFtQlhDLFFBbkJXLG9CQW1CRjs7QUFFWCxRQUFJQyxjQUFjLEdBQUcsS0FBS0MsTUFBTCxDQUFZQyxjQUFaLEVBQXJCO0FBQ0FDLGNBQVUsQ0FBQyxZQUFXO0FBQ3RCWixRQUFFLEdBQUdTLGNBQWMsQ0FBQ0ksUUFBZixHQUEwQixDQUExQixDQUFMLENBRHNCLENBQ1k7QUFDbEMsbUJBQVksaUJBQWViLEVBQUUsQ0FBQ2MsTUFBSCxFQUEzQjs7QUFFQWQsUUFBRSxDQUFDZSxnQkFBSCxDQUFvQixTQUFwQixFQUE4QixZQUFVO0FBQ3ZDLHFCQUFZLFVBQVFmLEVBQUUsQ0FBQ2MsTUFBSCxFQUFwQjtBQUNBRSxXQUFHLENBQUNDLFdBQUosQ0FBZ0I7QUFDZkMsZUFBSyxFQUFDLEtBRFMsRUFBaEI7O0FBR0EsT0FMRCxFQUtFLEtBTEY7O0FBT0FsQixRQUFFLENBQUNlLGdCQUFILENBQW9CLFFBQXBCLEVBQTZCLFlBQVU7QUFDdENDLFdBQUcsQ0FBQ0csV0FBSjtBQUNBLE9BRkQsRUFFRSxLQUZGOztBQUlDLEtBZlMsRUFlUCxJQWZPLENBQVYsQ0FIVyxDQWtCRDs7QUFFUCxHQXZDVTs7QUF5Q2JDLFNBQU8sRUFBQztBQUNQQyxVQURPLG9CQUNDO0FBQ1AsVUFBSUMsS0FBSyxHQUFHQyxlQUFlLEVBQTNCO0FBQ0EsVUFBSUMsSUFBSSxHQUFHRixLQUFLLENBQUNBLEtBQUssQ0FBQ0csTUFBTixHQUFlLENBQWhCLENBQWhCO0FBQ0EsVUFBSWhCLGNBQWMsR0FBR2UsSUFBSSxDQUFDYixjQUFMLEVBQXJCO0FBQ0EsVUFBSWUsR0FBRyxHQUFHakIsY0FBYyxDQUFDSSxRQUFmLEdBQTBCLENBQTFCLEVBQTZCQyxNQUE3QixFQUFWO0FBQ0EsV0FBS1YsR0FBTCxHQUFXc0IsR0FBWDtBQUNBLG1CQUFZLFdBQVMsS0FBS3RCLEdBQTFCO0FBQ0EsbUJBQVksV0FBUyxLQUFLQyxHQUExQjtBQUNBLEtBVE0sRUF6Q0ssRSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vXHJcblxyXG5sZXQgd3Y7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCl7XHJcblx0XHRyZXR1cm57XHJcblx0XHRcdHdlYnZpZXdTdHlsZXM6e1xyXG5cdFx0XHRcdHByb2dyZXNzOmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdFVSTDonJyxcclxuXHRcdFx0c3JjOidodHRwOi8vd3d3LmJhaWR1LmNvbS8nXHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRvblNob3coKSB7XHJcblxyXG5cdH0sXHJcblx0XHJcblx0XHJcblx0b25VbmxvYWQoKSB7XHJcblx0fSxcclxuXHRcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcblx0XHRsZXQgY3VycmVudFdlYnZpZXcgPSB0aGlzLiRzY29wZS4kZ2V0QXBwV2VidmlldygpIFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdHd2ID0gY3VycmVudFdlYnZpZXcuY2hpbGRyZW4oKVswXVx0Ly/ojrflj5blvZPliY13ZWJ2aWV36aG16Z2iXHJcblx0XHRjb25zb2xlLmxvZyhcIuW9k+WJjXdlYnZpZXfnqpflj6M6XCIrd3YuZ2V0VVJMKCkpXHRcclxuXHRcdFx0XHJcblx0XHR3di5hZGRFdmVudExpc3RlbmVyKCdsb2FkaW5nJyxmdW5jdGlvbigpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuW8gOWni+WKoOi9vTpcIit3di5nZXRVUkwoKSlcclxuXHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHR0aXRsZTpcIuWKoOi9veS4rVwiXHJcblx0XHRcdH0pXHJcblx0XHR9LGZhbHNlKVxyXG5cdFx0XHRcclxuXHRcdHd2LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZCcsZnVuY3Rpb24oKXtcclxuXHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdH0sZmFsc2UpO1xyXG5cdFx0XHJcblx0XHR9LCAxNTAwKTsgLy/lpoLmnpzmmK/pobXpnaLliJ3lp4vljJbosIPnlKjml7bvvIzpnIDopoHlu7bml7bkuIDkuItcclxuXHJcbiAgICB9LFxyXG5cdFx0XHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0Z2V0VXJsKCl7XHJcblx0XHRcdFx0dmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0XHRcdFx0dmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTsgIFxyXG5cdFx0XHRcdHZhciBjdXJyZW50V2VidmlldyA9IHBhZ2UuJGdldEFwcFdlYnZpZXcoKTsgIFxyXG5cdFx0XHRcdGxldCB1cmwgPSBjdXJyZW50V2Vidmlldy5jaGlsZHJlbigpWzBdLmdldFVSTCgpOyBcclxuXHRcdFx0XHR0aGlzLlVSTCA9IHVybFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5b2T5YmNVVJMOlwiK3RoaXMuVVJMKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5b2T5YmNc3JjOlwiK3RoaXMuc3JjKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcclxuXHRcdH1cclxuICAgIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**********************************!*\
  !*** E:/audioPlayerDemo/App.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 17);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ007QUFDaE0sZ0JBQWdCLHlNQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!***********************************************************!*\
  !*** E:/audioPlayerDemo/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 18);\n/* harmony import */ var _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_3_1_13_20210514_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBvQixDQUFnQix5cUJBQUcsRUFBQyIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMy4xLjEzLjIwMjEwNTE0XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWC4zLjEuMTMuMjAyMTA1MTRcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYLjMuMS4xMy4yMDIxMDUxNFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/audioPlayerDemo/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 8)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })
],[[0,"app-config"]]]);