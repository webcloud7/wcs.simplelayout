(self["webpackChunksimplelayout"] = self["webpackChunksimplelayout"] || []).push([["wcs_simplelayout_browser_static_js_src_main_js-webpack_sharing_consume_default_jquery_jquery"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#app .sl-col {\n  border: 1px dashed #000000;\n  min-height: 100px;\n}\n#app .sl-container {\n  position: relative;\n}\n#app .sl-col {\n  position: relative;\n}\n#app .sl-block {\n  margin: 20px 0;\n  position: relative;\n  min-height: 100px;\n}\n#app .sl-block:hover {\n  box-shadow: 0 0 2px 1px #000000;\n}\n.btn-xs {\n  font-size: 12px;\n  line-height: 1rem;\n  padding: 0;\n  height: 20px;\n}\n.ghost-sl-block {\n  opacity: 0.5;\n  height: 100px;\n}\n.sl-draggable-container {\n  height: 100%;\n}\n.sl-block-dragging {\n  width: 100px !important;\n  height: 100px !important;\n  background-color: grey;\n  display: block;\n  border: 1px solid black;\n}\n.sl-block-dragging > * {\n  display: none;\n}\n#app .sl-container.sl-dragging .sl-block {\n  box-shadow: 0 0 2px 1px #000000;\n}\n#app .sl-container.sl-dragging .sl-block.sl-block-placeholder {\n  display: none;\n}\n#app .sl-container.sl-dragging .sl-col {\n  min-height: 140px;\n}", "",{"version":3,"sources":["webpack://./wcs/simplelayout/browser/static/js/src/App.vue","webpack://./App.vue"],"names":[],"mappings":"AAIE;EACE,0BAAA;EACA,iBAAA;ACHJ;ADME;EACE,kBAAA;ACJJ;ADOE;EACE,kBAAA;ACLJ;ADOE;EACE,cAAA;EACA,kBAAA;EACA,iBAAA;ACLJ;ADMI;EACE,+BAAA;ACJN;ADQA;EACE,eAAA;EACA,iBAAA;EACA,UAAA;EACA,YAAA;ACLF;ADQA;EACE,YAAA;EACA,aAAA;ACLF;ADQA;EACE,YAAA;ACLF;ADQA;EACE,uBAAA;EACA,wBAAA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;ACLF;ADME;EACE,aAAA;ACJJ;ADSE;EACE,+BAAA;ACNJ;ADOI;EACE,aAAA;ACLN;ADQE;EACE,iBAAA;ACNJ","sourcesContent":["\n#app {\n  .sl-row {\n  }\n  .sl-col {\n    border: 1px dashed #000000;\n    min-height: 100px;\n  }\n\n  .sl-container {\n    position: relative;\n  }\n\n  .sl-col {\n    position: relative;\n  }\n  .sl-block {\n    margin: 20px 0;\n    position: relative;\n    min-height: 100px;\n    &:hover {\n      box-shadow: 0 0 2px 1px #000000;\n    }\n  }\n}\n.btn-xs {\n  font-size: 12px;\n  line-height: 1rem;\n  padding: 0;\n  height: 20px;\n}\n\n.ghost-sl-block {\n  opacity: 0.5;\n  height: 100px;\n}\n\n.sl-draggable-container {\n  height: 100%;\n}\n\n.sl-block-dragging {\n  width: 100px !important;\n  height: 100px !important;\n  background-color: grey;\n  display: block;\n  border: 1px solid black;\n  > * {\n    display: none;\n  }\n}\n\n#app .sl-container.sl-dragging {\n  .sl-block {\n    box-shadow: 0 0 2px 1px #000000;\n    &.sl-block-placeholder {\n      display: none;\n    }\n  }\n  .sl-col {\n    min-height: 140px;\n  }\n}\n","#app .sl-col {\n  border: 1px dashed #000000;\n  min-height: 100px;\n}\n#app .sl-container {\n  position: relative;\n}\n#app .sl-col {\n  position: relative;\n}\n#app .sl-block {\n  margin: 20px 0;\n  position: relative;\n  min-height: 100px;\n}\n#app .sl-block:hover {\n  box-shadow: 0 0 2px 1px #000000;\n}\n\n.btn-xs {\n  font-size: 12px;\n  line-height: 1rem;\n  padding: 0;\n  height: 20px;\n}\n\n.ghost-sl-block {\n  opacity: 0.5;\n  height: 100px;\n}\n\n.sl-draggable-container {\n  height: 100%;\n}\n\n.sl-block-dragging {\n  width: 100px !important;\n  height: 100px !important;\n  background-color: grey;\n  display: block;\n  border: 1px solid black;\n}\n.sl-block-dragging > * {\n  display: none;\n}\n\n#app .sl-container.sl-dragging .sl-block {\n  box-shadow: 0 0 2px 1px #000000;\n}\n#app .sl-container.sl-dragging .sl-block.sl-block-placeholder {\n  display: none;\n}\n#app .sl-container.sl-dragging .sl-col {\n  min-height: 140px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sl-add-block-controls {\n  z-index: 1;\n}\n.sl-add-block-controls .container {\n  align-items: flex-start;\n}\n.sl-add-block-controls .sl-move-button {\n  flex: 1 0 auto;\n}", "",{"version":3,"sources":["webpack://./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue","webpack://./BlockControls.vue"],"names":[],"mappings":"AACA;EAOE,UAAA;ACNF;ADAE;EACE,uBAAA;ACEJ;ADAE;EACE,cAAA;ACEJ","sourcesContent":["\n.sl-add-block-controls {\n  .container {\n    align-items: flex-start;\n  }\n  .sl-move-button {\n    flex: 1 0 auto;\n  }\n  z-index: 1;\n}\n",".sl-add-block-controls {\n  z-index: 1;\n}\n.sl-add-block-controls .container {\n  align-items: flex-start;\n}\n.sl-add-block-controls .sl-move-button {\n  flex: 1 0 auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sl-col-controls {\n  padding: 0.5em 0;\n  position: absolute;\n  height: 100%;\n  left: 0;\n  visibility: hidden;\n}\n.sl-col-controls > .btn-group {\n  height: 50%;\n  top: 25%;\n}\n.sl-col-controls.right {\n  right: 0;\n  top: 0;\n  left: auto;\n}\n.sl-col-controls .sl-col-add-button {\n  padding: 0;\n}\n.sl-remove-col-controls {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  bottom: 10px;\n  transform: translate(-50%, 0);\n  z-index: 1;\n  visibility: hidden;\n}\n.sl-row:hover .sl-col-controls,\n.sl-row:hover .sl-remove-col-controls {\n  visibility: visible;\n}", "",{"version":3,"sources":["webpack://./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue","webpack://./ColControls.vue"],"names":[],"mappings":"AACA;EACE,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,OAAA;EACA,kBAAA;ACAF;ADCE;EACE,WAAA;EACA,QAAA;ACCJ;ADEE;EACE,QAAA;EACA,MAAA;EACA,UAAA;ACAJ;ADGE;EACE,UAAA;ACDJ;ADKA;EACE,kBAAA;EACA,SAAA;EACA,SAAA;EACA,YAAA;EACA,6BAAA;EACA,UAAA;EACA,kBAAA;ACFF;ADME;;EAEE,mBAAA;ACHJ","sourcesContent":["\n.sl-col-controls {\n  padding: 0.5em 0;\n  position: absolute;\n  height: 100%;\n  left: 0;\n  visibility: hidden;\n  > .btn-group {\n    height: 50%;\n    top: 25%;\n  }\n\n  &.right {\n    right: 0;\n    top: 0;\n    left: auto;\n  }\n\n  .sl-col-add-button {\n    padding: 0;\n  }\n}\n\n.sl-remove-col-controls {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  bottom: 10px;\n  transform: translate(-50%, 0);\n  z-index: 1;\n  visibility: hidden;\n}\n\n.sl-row:hover {\n  .sl-col-controls,\n  .sl-remove-col-controls {\n    visibility: visible;\n  }\n}\n",".sl-col-controls {\n  padding: 0.5em 0;\n  position: absolute;\n  height: 100%;\n  left: 0;\n  visibility: hidden;\n}\n.sl-col-controls > .btn-group {\n  height: 50%;\n  top: 25%;\n}\n.sl-col-controls.right {\n  right: 0;\n  top: 0;\n  left: auto;\n}\n.sl-col-controls .sl-col-add-button {\n  padding: 0;\n}\n\n.sl-remove-col-controls {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  bottom: 10px;\n  transform: translate(-50%, 0);\n  z-index: 1;\n  visibility: hidden;\n}\n\n.sl-row:hover .sl-col-controls,\n.sl-row:hover .sl-remove-col-controls {\n  visibility: visible;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sl-add-row-controls {\n  position: relative;\n}\n.sl-add-row-controls > .btn-group {\n  width: 120px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: absolute;\n  top: -8px;\n}\n.sl-add-row-controls > .btn-group button {\n  padding: 0;\n  line-height: 1rem;\n}\n.sl-add-row-controls > .btn-group button:first-child {\n  width: 50px;\n}\n.sl-container:hover .sl-add-row-controls {\n  visibility: visible;\n}", "",{"version":3,"sources":["webpack://./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue","webpack://./RowControls.vue"],"names":[],"mappings":"AACA;EACE,kBAAA;ACAF;ADEE;EACE,YAAA;EACA,SAAA;EACA,6BAAA;EACA,kBAAA;EACA,SAAA;ACAJ;ADEI;EACE,UAAA;EACA,iBAAA;ACAN;ADEM;EACE,WAAA;ACAR;ADME;EACE,mBAAA;ACHJ","sourcesContent":["\n.sl-add-row-controls {\n  position: relative;\n  // visibility: hidden;\n  > .btn-group {\n    width: 120px;\n    left: 50%;\n    transform: translate(-50%, 0);\n    position: absolute;\n    top: -8px;\n\n    button {\n      padding: 0;\n      line-height: 1rem;\n\n      &:first-child {\n        width: 50px;\n      }\n    }\n  }\n}\n.sl-container:hover {\n  .sl-add-row-controls {\n    visibility: visible;\n  }\n}\n",".sl-add-row-controls {\n  position: relative;\n}\n.sl-add-row-controls > .btn-group {\n  width: 120px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: absolute;\n  top: -8px;\n}\n.sl-add-row-controls > .btn-group button {\n  padding: 0;\n  line-height: 1rem;\n}\n.sl-add-row-controls > .btn-group button:first-child {\n  width: 50px;\n}\n\n.sl-container:hover .sl-add-row-controls {\n  visibility: visible;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sl-base-modal {\n  z-index: 1051 !important;\n}", "",{"version":3,"sources":["webpack://./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue","webpack://./BaseModal.vue"],"names":[],"mappings":"AACA;EACE,wBAAA;ACAF","sourcesContent":["\n.sl-base-modal {\n  z-index: 1051 !important;\n}\n",".sl-base-modal {\n  z-index: 1051 !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sl-placeholder-video {\n  height: 200px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}", "",{"version":3,"sources":["webpack://./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue","webpack://./VideoBlock.vue"],"names":[],"mappings":"AACA;EACE,aAAA;EACA,WAAA;EACA,4BAAA;EACA,2BAAA;EACA,wBAAA;ACAF","sourcesContent":["\n.sl-placeholder-video {\n  height: 200px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n",".sl-placeholder-video {\n  height: 200px;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sl-card-image {\n  aspect-ratio: 16/10;\n  background-color: var(--bs-gray-200);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue","webpack://./BlockStructure.vue"],"names":[],"mappings":"AACA;EACE,mBAAA;EACA,oCAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;ACAF","sourcesContent":["\n.sl-card-image {\n  aspect-ratio: 16 / 10;\n  background-color: var(--bs-gray-200);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n",".sl-card-image {\n  aspect-ratio: 16/10;\n  background-color: var(--bs-gray-200);\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/App.vue":
/*!********************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/App.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App_vue_vue_type_template_id_697a6f2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=697a6f2d */ "./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=template&id=697a6f2d");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=script&lang=js");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_697a6f2d_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss */ "./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_App_vue_vue_type_template_id_697a6f2d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/App.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_BlockRenderer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/BlockRenderer.vue */ "./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue");
/* harmony import */ var _components_Controls_RowControls_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Controls/RowControls.vue */ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue");
/* harmony import */ var _components_Controls_ColControls_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Controls/ColControls.vue */ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");
/* harmony import */ var _components_Modals_AddBlockModal_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Modals/AddBlockModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue");
/* harmony import */ var _components_Modals_EditBlockModal_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Modals/EditBlockModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue");
/* harmony import */ var _components_Modals_DeleteBlockModal_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Modals/DeleteBlockModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue");
/* harmony import */ var _components_Modals_InfoBlockModal_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Modals/InfoBlockModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue");
/* harmony import */ var _components_Modals_UploadModal_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Modals/UploadModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuedraggable */ "webpack/sharing/consume/default/vuedraggable/vuedraggable");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_9__);












/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockRenderer: _components_BlockRenderer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    RowControls: _components_Controls_RowControls_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ColControls: _components_Controls_ColControls_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddBlockModal: _components_Modals_AddBlockModal_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    EditBlockModal: _components_Modals_EditBlockModal_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DeleteBlockModal: _components_Modals_DeleteBlockModal_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    InfoBlockModal: _components_Modals_InfoBlockModal_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    UploadModal: _components_Modals_UploadModal_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_9___default()),
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_3__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      dragging: false,
      actions: [
        {
          label: "Add",
          action: this.openAddableBlocksModal,
          enabled: () => true,
        },
        {
          label: "Edit",
          action: this.openEditBlocksModal,
          enabled: (rowIndex, columnIndex) => {
            return this.sl.layouts.items[rowIndex].items[columnIndex].items
              .length;
          },
        },
        {
          label: "Delete",
          action: this.openDeleteBlocksModal,
          enabled: (rowIndex, columnIndex) => {
            return this.sl.layouts.items[rowIndex].items[columnIndex].items
              .length;
          },
        },
        {
          label: "Upload",
          action: this.openUploadModal,
          enabled: (rowIndex, columnIndex, blockIndex) => {
            const uid =
              this.sl.layouts.items[rowIndex].items[columnIndex].items[
                blockIndex
              ];

            if (!uid) {
              return false;
            }

            const addable = this.sl.blocks[uid]["@components"]["types"].filter(
              (item) => item.addable
            );
            return addable.length;
          },
        },
        {
          label: "Information",
          action: this.openInfoBlockModal,
          enabled: (rowIndex, columnIndex) => {
            return this.sl.layouts.items[rowIndex].items[columnIndex].items
              .length;
          },
        },
        {
          label: "Contens (Listing)",
          action: this.gotoFolderContents,
          enabled: (rowIndex, columnIndex, blockIndex) => {
            const uid =
              this.sl.layouts.items[rowIndex].items[columnIndex].items[
                blockIndex
              ];

            if (!uid) {
              return false;
            }

            const addable = this.sl.blocks[uid]["@components"]["types"].filter(
              (item) => item.addable
            );
            return addable.length;
          },
        },
      ],
    };
  },
  created() {
    this.sl.fetchBlocks();
  },
  computed: {
    draggingClass() {
      return this.dragging ? "sl-dragging" : "";
    },
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        class: "sl-draggable-container",
        group: "blocks",
        handle: ".sl-handle",
        ghostClass: "ghost-sl-block",
        // forceFallback: true,
        // fallbackClass: "sl-block-dragging",
      };
    },
  },
  methods: {
    openAddableBlocksModal(event) {
      this.$refs["add-modal"].openAddableBlocksModal(event);
    },
    openEditBlocksModal(event) {
      this.$refs["edit-modal"].openEditBlockModal(event);
    },
    openDeleteBlocksModal(event) {
      this.$refs["delete-modal"].openDeleteBlockModal(event);
    },
    openInfoBlockModal(event) {
      this.$refs["info-modal"].openInfoBlockModal(event);
    },
    openUploadModal(event) {
      this.$refs["upload-modal"].openUploadModal(event);
    },
    gotoFolderContents(event) {
      const button = event.currentTarget;
      const rowIndex = parseInt(button.getAttribute("data-row"));
      const columnIndex = parseInt(button.getAttribute("data-col"));
      const blockIndex = parseInt(button.getAttribute("data-block"));
      const uid =
        this.sl.layouts.items[rowIndex].items[columnIndex].items[blockIndex];
      window.open(this.sl.blocks[uid]["@id"] + "/folder_contents", "_self");
    },
    saveLayout: function () {
      this.sl.modifyLayouts({
        slblocks_layout: { items: this.sl.layouts.items },
      });
      this.dragging = false;
    },
    startDraggingBlock() {
      this.dragging = true;
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue":
/*!*****************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockRenderer_vue_vue_type_template_id_5df174ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockRenderer.vue?vue&type=template&id=5df174ca */ "./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=template&id=5df174ca");
/* harmony import */ var _BlockRenderer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockRenderer.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BlockRenderer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlockRenderer_vue_vue_type_template_id_5df174ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_blockViews_BlockFallbackView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/blockViews/BlockFallbackView.vue */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockFallbackView: _components_blockViews_BlockFallbackView_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hasBlockViewComponent() {
      return this.block["@type"] in this.$blockviews;
    },
  },
  computed: {
    getBlockViewComponentByName() {
      return this.$blockviews[this.block["@type"]];
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue":
/*!**************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockControls_vue_vue_type_template_id_4e4d49e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockControls.vue?vue&type=template&id=4e4d49e2 */ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=template&id=4e4d49e2");
/* harmony import */ var _BlockControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockControls.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=script&lang=js");
/* harmony import */ var _BlockControls_vue_vue_type_style_index_0_id_4e4d49e2_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss */ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BlockControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlockControls_vue_vue_type_template_id_4e4d49e2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");
/* harmony import */ var _components_standard_BlockTitle_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/standard/BlockTitle.vue */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockTitle: _components_standard_BlockTitle_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.useSimplelayoutStore)();
    return { sl };
  },
  computed: {
    moveIcon() {
      return {
        src: `${this.sl.portalURL}/iconresolver/arrows-move`,
        alt: "Move block",
        width: "20",
        style: "filter: invert(1)",
      };
    },
    dropdownId() {
      return `blockDropdownMenu_${this.columnIndex}_${this.rowIndex}`;
    },
    dropdownIdMobile() {
      return `${this.dropdownId}_mobile_menu`;
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue":
/*!************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColControls_vue_vue_type_template_id_0169cefc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColControls.vue?vue&type=template&id=0169cefc */ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=template&id=0169cefc");
/* harmony import */ var _ColControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColControls.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=script&lang=js");
/* harmony import */ var _ColControls_vue_vue_type_style_index_0_id_0169cefc_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss */ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ColControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ColControls_vue_vue_type_template_id_0169cefc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/template.js */ "./wcs/simplelayout/browser/static/js/src/template.js");
/* harmony import */ var _vocabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/vocabs.js */ "./wcs/simplelayout/browser/static/js/src/vocabs.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_2__.useSimplelayoutStore)();
    return { sl };
  },
  props: {
    rowIndex: {
      type: Number,
      required: true,
    },
    colIndex: {
      type: Number,
      required: true,
    },
    currentWidth: {
      type: Number,
      required: false,
    },
    right: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  methods: {
    createCol() {
      this.sl.addColumnToRow((0,_template_js__WEBPACK_IMPORTED_MODULE_0__.column)(1), this.rowIndex, this.colIndex);
    },
    removeCol() {
      this.sl.removeRowFromLayout(this.rowIndex, this.colIndex);
    },
    newWidth(newWidth) {
      this.sl.setNewWidthOnColumn(this.rowIndex, this.colIndex, newWidth);
    },
  },
  computed: {
    widths() {
      return (0,_vocabs_js__WEBPACK_IMPORTED_MODULE_1__.ColWidths)();
    },
    widthsMapping() {
      return (0,_vocabs_js__WEBPACK_IMPORTED_MODULE_1__.ColWidths)(true);
    },
    dropdownId() {
      return `dropdownMenu_${this.colIndex}_${this.rowIndex}`;
    },
    cssClasses() {
      let classes = "sl-col-controls";
      if (this.right) {
        classes = classes + " right";
      }
      return classes;
    },
    hasBlocks() {
      const blocks =
        this.sl.layouts.items[this.rowIndex].items[this.colIndex].items.length;
      return Boolean(blocks);
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue":
/*!************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RowControls_vue_vue_type_template_id_fa70cc48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowControls.vue?vue&type=template&id=fa70cc48 */ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=template&id=fa70cc48");
/* harmony import */ var _RowControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowControls.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=script&lang=js");
/* harmony import */ var _RowControls_vue_vue_type_style_index_0_id_fa70cc48_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss */ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_RowControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RowControls_vue_vue_type_template_id_fa70cc48__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/template.js */ "./wcs/simplelayout/browser/static/js/src/template.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      rows: [
        { cols: 2, label: "2-column row (50%)" },
        { cols: 3, label: "3-column row (33%)" },
        { cols: 4, label: "4-column row (25%)" },
      ],
    };
  },
  methods: {
    createRow(cols) {
      this.sl.addRowToLayout((0,_template_js__WEBPACK_IMPORTED_MODULE_0__.row)(cols), this.index)
    },
  },
  computed: {
    dropdownId() {
      return `dropdownMenu_${this.index}`;
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue":
/*!************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddBlockModal_vue_vue_type_template_id_7fe93186__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBlockModal.vue?vue&type=template&id=7fe93186 */ "./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=template&id=7fe93186");
/* harmony import */ var _AddBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBlockModal.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AddBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AddBlockModal_vue_vue_type_template_id_7fe93186__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modals/BaseModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "add-modal",
  components: {
    BaseModal: _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      addableBlocksModal: null,
    };
  },
  mounted() {
    this.addableBlocksModal = this.$refs["modal"].modal;
  },
  methods: {
    async openAddableBlocksModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };

      const url = `${this.sl.baseURL}/@@sl-addable-blocks`;
      const response = await this.axioshtml.get(url);
      this.$refs["modal"].replaceModalContent(response);
      this.$refs["modal"].handleFormButtons();

      const body =
        this.addableBlocksModal._element.querySelector(".modal-body");
      [...body.querySelectorAll("a")].forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.$refs["modal"].openFormModal(link.getAttribute("href"), position);
        });
      });
      this.addableBlocksModal.show();
    },
    storeAction(position, data) {
      this.sl.addBlockToColumn(
        position.rowIndex,
        position.columnIndex,
        position.blockIndex + 1, // Always add block after the current block
        data["UID"]
      );
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue":
/*!********************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseModal_vue_vue_type_template_id_f4248710__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModal.vue?vue&type=template&id=f4248710 */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=template&id=f4248710");
/* harmony import */ var _BaseModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseModal.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=script&lang=js");
/* harmony import */ var _BaseModal_vue_vue_type_style_index_0_id_f4248710_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BaseModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BaseModal_vue_vue_type_template_id_f4248710__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");
/* harmony import */ var _patternslib_patternslib_src_core_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternslib/patternslib/src/core/registry */ "./node_modules/@patternslib/patternslib/src/core/registry.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "base-modal",
  props: {
    cleanUpBody: {
      type: Boolean,
      required: false,
      default: () => true,
    },
    storeAction: {
      type: Function,
      required: false,
      default: () => () => null,
    },
    modalOptions: {
      type: Object,
      required: false,
      default() {
        return {
          backdrop: "static",
          keyboard: false,
          focus: false,
        };
      },
    },
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      modal: null,
      position: {},
    };
  },
  mounted() {
    const modal = this.$refs["sl-base-modal"];
    this.modal = new window.jQuery.fn.modal.Constructor(
      modal,
      this.modalOptions
    );
  },
  methods: {
    async openModal(url, position) {
      const response = await this.axioshtml.get(url);
      this.position = position;
      this.replaceModalContent(response);
      this.handleFormButtons();
      this.modal.show();
    },
    async openFormModal(url, position) {
      const response = await this.axioshtml.get(url);
      this.position = position;
      this.replaceModalContent(response);
      this.handleFormButtons();
      this.modal.show();
    },
    async handleSubmit(event) {
      event.preventDefault();

      this.handleTinyMCE();
      const form = this.modal._element.querySelector("#form");
      const url = form.getAttribute("action");
      const button = event.currentTarget;

      let formData = new FormData(form);
      formData.append(button.getAttribute("name"), button.value);
      formData.append("expand", "types");
      const response = await this.axioshtml.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "text/html,application/json",
        },
      });
      const isJson = response.headers["content-type"] === "application/json";
      const is204 = response.status === 204;
      if (isJson || is204) {
        // successful request
        const data = response.data;
        this.storeAction(this.position, data);
        this.cleanBody();
        this.modal.hide();
      } else {
        // Any form validation error means we got html back
        this.replaceModalContent(response);
        this.handleFormButtons();
      }
    },
    replaceModalContent(response) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(response.data, "text/html");
      const body = this.modal._element.querySelector(".modal-body");
      const title = this.modal._element.querySelector(".modal-title");
      title.innerHTML = doc.querySelector("h1").innerHTML;
      doc.querySelector("h1").remove();
      body.innerHTML = doc.getElementById("content").innerHTML;
      _patternslib_patternslib_src_core_registry__WEBPACK_IMPORTED_MODULE_1__["default"].scan(body);
    },
    handleFormButtons() {
      const form = this.modal._element.querySelector("#form");
      let cancelButton = null;
      let submitButton = null;
      if (form) {
        const saveButton = form.querySelector("#form-buttons-save");
        const deleteButton = form.querySelector("#form-buttons-Delete");
        cancelButton =
          form.querySelector("#form-buttons-cancel") ||
          form.querySelector("#form-buttons-Cancel");
        submitButton = saveButton || deleteButton;

        submitButton.addEventListener("click", this.handleSubmit);
        form.addEventListener("submit", this.handleSubmit);
      } else {
        cancelButton = this.modal._element.querySelector(
          "#form-buttons-cancel"
        );
      }

      cancelButton.addEventListener("click", this.handleCancel);

      const footer = this.modal._element.querySelector(".modal-footer");
      while (footer.firstChild) {
        footer.removeChild(footer.firstChild);
      }
      if (submitButton) {
        footer.appendChild(submitButton);
      }
      footer.appendChild(cancelButton);
    },
    handleCancel(event) {
      event.preventDefault();
      event.stopPropagation();
      this.cleanBody();
      this.modal.hide();
    },
    cleanBody() {
      if (!this.cleanUpBody) {
        return;
      }
      const body = this.modal._element.querySelector(".modal-body");
      while (body.firstChild) {
        body.removeChild(body.firstChild);
      }
    },
    handleTinyMCE() {
      [...this.modal._element.querySelectorAll("textarea")].forEach(
        (element) => {
          tinyMCE.get(element.id).save();
        }
      );
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue":
/*!***************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteBlockModal_vue_vue_type_template_id_4cd56582__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteBlockModal.vue?vue&type=template&id=4cd56582 */ "./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=template&id=4cd56582");
/* harmony import */ var _DeleteBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteBlockModal.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DeleteBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DeleteBlockModal_vue_vue_type_template_id_4cd56582__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modals/BaseModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "delete-modal",
  components: {
    BaseModal: _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      deleteBlockModal: null,
    };
  },
  mounted() {
    this.deleteBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openDeleteBlockModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      this.deleteBlockModal.hide();

      const url = `${this.getBlockURL(position)}/delete_confirmation`;
      this.$refs["modal"].openFormModal(url, position);
      this.deleteBlockModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
    storeAction(position) {
      this.sl.deleteBlock(position);
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue":
/*!*************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditBlockModal_vue_vue_type_template_id_1906f25e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditBlockModal.vue?vue&type=template&id=1906f25e */ "./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=template&id=1906f25e");
/* harmony import */ var _EditBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBlockModal.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_EditBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_EditBlockModal_vue_vue_type_template_id_1906f25e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modals/BaseModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "edit-modal",
  components: {
    BaseModal: _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      editBlockModal: null,
    };
  },
  mounted() {
    this.editBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openEditBlockModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      this.editBlockModal.hide();

      const url = `${this.getBlockURL(position)}/edit`;
      this.$refs["modal"].openFormModal(url, position);
      this.editBlockModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
    storeAction(position, data) {
      this.sl.modifyBlock(data);
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue":
/*!*************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InfoBlockModal_vue_vue_type_template_id_281b0bfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoBlockModal.vue?vue&type=template&id=281b0bfc */ "./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=template&id=281b0bfc");
/* harmony import */ var _InfoBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoBlockModal.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InfoBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InfoBlockModal_vue_vue_type_template_id_281b0bfc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modals/BaseModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "info-modal",
  components: {
    BaseModal: _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      infoBlockModal: null,
      options: {
        backdrop: true,
        keyboard: false,
        focus: false,
      },
    };
  },
  mounted() {
    this.infoBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openInfoBlockModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      this.infoBlockModal.hide();

      const url = `${this.getBlockURL(position)}`;
      this.$refs["modal"].openModal(url);
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue":
/*!**********************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UploadModal_vue_vue_type_template_id_c3c70b70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadModal.vue?vue&type=template&id=c3c70b70 */ "./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=template&id=c3c70b70");
/* harmony import */ var _UploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadModal.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UploadModal_vue_vue_type_template_id_c3c70b70__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Modals/BaseModal.vue */ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "upload-modal",
  components: {
    BaseModal: _components_Modals_BaseModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_1__.useSimplelayoutStore)();
    return { sl };
  },
  data() {
    return {
      editBlockModal: null,
    };
  },
  mounted() {
    this.uploadBlockModal = this.$refs["modal"].modal;
  },
  methods: {
    async openUploadModal(event) {
      const button = event.currentTarget;
      const position = {
        rowIndex: parseInt(button.getAttribute("data-row")),
        columnIndex: parseInt(button.getAttribute("data-col")),
        blockIndex: parseInt(button.getAttribute("data-block")),
      };
      const options = {
        url: `${this.getBlockURL(position)}/@@fileUpload`,
        showTitle: false,
      };
      const upload = new window.__patternslib_registry.patterns.upload(
        this.$refs["upload"],
        options
      );

      this.uploadBlockModal._element.addEventListener("hide.bs.modal", () => {
        this.reloadBlock(position);
        upload.dropzone.destroy();
        upload.$el[0].removeChild(upload.$el[0].firstChild);
        console.info(upload);
      });

      this.$refs["modal"].handleFormButtons();
      this.uploadBlockModal.show();
    },

    getBlockURL(position) {
      const uid =
        this.sl.layouts.items[position.rowIndex].items[position.columnIndex]
          .items[position.blockIndex];
      return this.sl.blocks[uid]["@id"];
    },
    async reloadBlock(position) {
      const params = { params: { expand: "types" } };
      const response = await this.axios.get(this.getBlockURL(position), params);
      this.sl.modifyBlock(response.data);
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue":
/*!**************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Pagination.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_1f368f7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=1f368f7f */ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=template&id=1f368f7f");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_1f368f7f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    batching: {
      type: Object,
      required: true,
      default: () => {
        return null;
      },
    },
  },
  methods: {
    triggerNext() {
      this.$emit("next", this.batching.next);
    },
    triggerPrevious() {
      this.$emit("previous", this.batching.prev);
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue":
/*!********************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Block_vue_vue_type_template_id_84070378__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Block.vue?vue&type=template&id=84070378 */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=template&id=84070378");
/* harmony import */ var _Block_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Block_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Block_vue_vue_type_template_id_84070378__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/standard/BlockStructure.vue */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockStructure: _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue":
/*!********************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockFallbackView_vue_vue_type_template_id_1fa3ecea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockFallbackView.vue?vue&type=template&id=1fa3ecea */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=template&id=1fa3ecea");
/* harmony import */ var _BlockFallbackView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockFallbackView.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BlockFallbackView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlockFallbackView_vue_vue_type_template_id_1fa3ecea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/standard/BlockStructure.vue */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockStructure: _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue":
/*!*******************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FileListingBlock_vue_vue_type_template_id_61f8b5c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileListingBlock.vue?vue&type=template&id=61f8b5c4 */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=template&id=61f8b5c4");
/* harmony import */ var _FileListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileListingBlock.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FileListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FileListingBlock_vue_vue_type_template_id_61f8b5c4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/standard/BlockStructure.vue */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue");
/* harmony import */ var _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Pagination.vue */ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockStructure: _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pagination: _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: { items: [], batching: null },
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    "block.modified"() {
      this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      const response = await this.axios.get(this.block.computed_query);
      this.data = response.data;
    },
    async fetchNext(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
    async fetchPrevious(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue":
/*!********************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageListingBlock_vue_vue_type_template_id_52844dca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageListingBlock.vue?vue&type=template&id=52844dca */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=template&id=52844dca");
/* harmony import */ var _ImageListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageListingBlock.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ImageListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImageListingBlock_vue_vue_type_template_id_52844dca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/standard/BlockStructure.vue */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue");
/* harmony import */ var _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Pagination.vue */ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockStructure: _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pagination: _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: { items: [], batching: null },
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    "block.modified"() {
      this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      const response = await this.axios.get(this.block.computed_query);
      this.data = response.data;
    },
    async fetchNext(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
    async fetchPrevious(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue":
/*!*******************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewsListingBlock_vue_vue_type_template_id_9e10a716__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsListingBlock.vue?vue&type=template&id=9e10a716 */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=template&id=9e10a716");
/* harmony import */ var _NewsListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsListingBlock.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_NewsListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NewsListingBlock_vue_vue_type_template_id_9e10a716__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/standard/BlockStructure.vue */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue");
/* harmony import */ var _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Pagination.vue */ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockStructure: _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pagination: _components_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: { items: [], batching: null },
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    "block.modified"() {
      this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      const response = await this.axios.get(this.block.computed_query);
      this.data = response.data;
    },
    async fetchNext(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
    async fetchPrevious(url) {
      const response = await this.axios.get(url);
      this.data = response.data;
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue":
/*!*************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VideoBlock_vue_vue_type_template_id_3c0837aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoBlock.vue?vue&type=template&id=3c0837aa */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=template&id=3c0837aa");
/* harmony import */ var _VideoBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoBlock.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=script&lang=js");
/* harmony import */ var _VideoBlock_vue_vue_type_style_index_0_id_3c0837aa_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss */ "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_VideoBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VideoBlock_vue_vue_type_template_id_3c0837aa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store.js */ "./wcs/simplelayout/browser/static/js/src/store.js");
/* harmony import */ var _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/standard/BlockStructure.vue */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockStructure: _components_standard_BlockStructure_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const sl = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.useSimplelayoutStore)();
    return { sl };
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue":
/*!***************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockStructure_vue_vue_type_template_id_468bf6a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockStructure.vue?vue&type=template&id=468bf6a3 */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=template&id=468bf6a3");
/* harmony import */ var _BlockStructure_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockStructure.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=script&lang=js");
/* harmony import */ var _BlockStructure_vue_vue_type_style_index_0_id_468bf6a3_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_BlockStructure_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlockStructure_vue_vue_type_template_id_468bf6a3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Controls_BlockControls_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Controls/BlockControls.vue */ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    BlockControls: _components_Controls_BlockControls_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  },
  props: {
    actions: {
      type: Array,
      required: true,
    },
    rowIndex: {
      type: Number,
      required: true,
    },
    columnIndex: {
      type: Number,
      required: true,
    },
    blockIndex: {
      type: Number,
      required: true,
    },
    block: {
      type: Object,
      required: true,
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue":
/*!***********************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlockTitle_vue_vue_type_template_id_c78885f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTitle.vue?vue&type=template&id=c78885f0 */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=template&id=c78885f0");
/* harmony import */ var _BlockTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockTitle.vue?vue&type=script&lang=js */ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_maethu_webcloud7_wcs_simplelayout_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BlockTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BlockTitle_vue_vue_type_template_id_c78885f0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    block: {
      type: Object,
      required: true,
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss":
/*!*****************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_App_vue_vue_type_style_index_0_id_697a6f2d_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=style&index=0&id=697a6f2d&lang=scss");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss":
/*!***********************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockControls_vue_vue_type_style_index_0_id_4e4d49e2_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=style&index=0&id=4e4d49e2&lang=scss");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss":
/*!*********************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ColControls_vue_vue_type_style_index_0_id_0169cefc_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=style&index=0&id=0169cefc&lang=scss");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss":
/*!*********************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_RowControls_vue_vue_type_style_index_0_id_fa70cc48_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=style&index=0&id=fa70cc48&lang=scss");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss":
/*!*****************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BaseModal_vue_vue_type_style_index_0_id_f4248710_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=style&index=0&id=f4248710&lang=scss");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss":
/*!**********************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_VideoBlock_vue_vue_type_style_index_0_id_3c0837aa_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=style&index=0&id=3c0837aa&lang=scss");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss":
/*!************************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockStructure_vue_vue_type_style_index_0_id_468bf6a3_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=style&index=0&id=468bf6a3&lang=scss");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./App.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockRenderer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockRenderer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockRenderer.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockControls.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ColControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ColControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./ColControls.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_RowControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_RowControls_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./RowControls.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=script&lang=js":
/*!************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_AddBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_AddBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./AddBlockModal.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BaseModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BaseModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BaseModal.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_DeleteBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_DeleteBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./DeleteBlockModal.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_EditBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_EditBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./EditBlockModal.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_InfoBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_InfoBlockModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./InfoBlockModal.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_UploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_UploadModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./UploadModal.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=script&lang=js":
/*!**************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=script&lang=js":
/*!********************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Block_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Block_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./Block.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockFallbackView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockFallbackView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockFallbackView.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_FileListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_FileListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./FileListingBlock.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ImageListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ImageListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./ImageListingBlock.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_NewsListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_NewsListingBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./NewsListingBlock.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_VideoBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_VideoBlock_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./VideoBlock.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockStructure_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockStructure_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockStructure.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockTitle_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockTitle.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=template&id=697a6f2d":
/*!**************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=template&id=697a6f2d ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_App_vue_vue_type_template_id_697a6f2d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_App_vue_vue_type_template_id_697a6f2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./App.vue?vue&type=template&id=697a6f2d */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=template&id=697a6f2d");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=template&id=5df174ca":
/*!***********************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=template&id=5df174ca ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockRenderer_vue_vue_type_template_id_5df174ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockRenderer_vue_vue_type_template_id_5df174ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockRenderer.vue?vue&type=template&id=5df174ca */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=template&id=5df174ca");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=template&id=4e4d49e2":
/*!********************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=template&id=4e4d49e2 ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockControls_vue_vue_type_template_id_4e4d49e2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockControls_vue_vue_type_template_id_4e4d49e2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockControls.vue?vue&type=template&id=4e4d49e2 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=template&id=4e4d49e2");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=template&id=0169cefc":
/*!******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=template&id=0169cefc ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ColControls_vue_vue_type_template_id_0169cefc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ColControls_vue_vue_type_template_id_0169cefc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./ColControls.vue?vue&type=template&id=0169cefc */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=template&id=0169cefc");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=template&id=fa70cc48":
/*!******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=template&id=fa70cc48 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_RowControls_vue_vue_type_template_id_fa70cc48__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_RowControls_vue_vue_type_template_id_fa70cc48__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./RowControls.vue?vue&type=template&id=fa70cc48 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=template&id=fa70cc48");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=template&id=7fe93186":
/*!******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=template&id=7fe93186 ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_AddBlockModal_vue_vue_type_template_id_7fe93186__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_AddBlockModal_vue_vue_type_template_id_7fe93186__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./AddBlockModal.vue?vue&type=template&id=7fe93186 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=template&id=7fe93186");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=template&id=f4248710":
/*!**************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=template&id=f4248710 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BaseModal_vue_vue_type_template_id_f4248710__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BaseModal_vue_vue_type_template_id_f4248710__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BaseModal.vue?vue&type=template&id=f4248710 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=template&id=f4248710");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=template&id=4cd56582":
/*!*********************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=template&id=4cd56582 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_DeleteBlockModal_vue_vue_type_template_id_4cd56582__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_DeleteBlockModal_vue_vue_type_template_id_4cd56582__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./DeleteBlockModal.vue?vue&type=template&id=4cd56582 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=template&id=4cd56582");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=template&id=1906f25e":
/*!*******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=template&id=1906f25e ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_EditBlockModal_vue_vue_type_template_id_1906f25e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_EditBlockModal_vue_vue_type_template_id_1906f25e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./EditBlockModal.vue?vue&type=template&id=1906f25e */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=template&id=1906f25e");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=template&id=281b0bfc":
/*!*******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=template&id=281b0bfc ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_InfoBlockModal_vue_vue_type_template_id_281b0bfc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_InfoBlockModal_vue_vue_type_template_id_281b0bfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./InfoBlockModal.vue?vue&type=template&id=281b0bfc */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=template&id=281b0bfc");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=template&id=c3c70b70":
/*!****************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=template&id=c3c70b70 ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_UploadModal_vue_vue_type_template_id_c3c70b70__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_UploadModal_vue_vue_type_template_id_c3c70b70__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./UploadModal.vue?vue&type=template&id=c3c70b70 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=template&id=c3c70b70");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=template&id=1f368f7f":
/*!********************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=template&id=1f368f7f ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Pagination_vue_vue_type_template_id_1f368f7f__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Pagination_vue_vue_type_template_id_1f368f7f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./Pagination.vue?vue&type=template&id=1f368f7f */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=template&id=1f368f7f");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=template&id=84070378":
/*!**************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=template&id=84070378 ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Block_vue_vue_type_template_id_84070378__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_Block_vue_vue_type_template_id_84070378__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./Block.vue?vue&type=template&id=84070378 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=template&id=84070378");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=template&id=1fa3ecea":
/*!**************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=template&id=1fa3ecea ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockFallbackView_vue_vue_type_template_id_1fa3ecea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockFallbackView_vue_vue_type_template_id_1fa3ecea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockFallbackView.vue?vue&type=template&id=1fa3ecea */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=template&id=1fa3ecea");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=template&id=61f8b5c4":
/*!*************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=template&id=61f8b5c4 ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_FileListingBlock_vue_vue_type_template_id_61f8b5c4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_FileListingBlock_vue_vue_type_template_id_61f8b5c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./FileListingBlock.vue?vue&type=template&id=61f8b5c4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=template&id=61f8b5c4");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=template&id=52844dca":
/*!**************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=template&id=52844dca ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ImageListingBlock_vue_vue_type_template_id_52844dca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_ImageListingBlock_vue_vue_type_template_id_52844dca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./ImageListingBlock.vue?vue&type=template&id=52844dca */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=template&id=52844dca");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=template&id=9e10a716":
/*!*************************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=template&id=9e10a716 ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_NewsListingBlock_vue_vue_type_template_id_9e10a716__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_NewsListingBlock_vue_vue_type_template_id_9e10a716__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./NewsListingBlock.vue?vue&type=template&id=9e10a716 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=template&id=9e10a716");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=template&id=3c0837aa":
/*!*******************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=template&id=3c0837aa ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_VideoBlock_vue_vue_type_template_id_3c0837aa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_VideoBlock_vue_vue_type_template_id_3c0837aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./VideoBlock.vue?vue&type=template&id=3c0837aa */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=template&id=3c0837aa");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=template&id=468bf6a3":
/*!*********************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=template&id=468bf6a3 ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockStructure_vue_vue_type_template_id_468bf6a3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockStructure_vue_vue_type_template_id_468bf6a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockStructure.vue?vue&type=template&id=468bf6a3 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=template&id=468bf6a3");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=template&id=c78885f0":
/*!*****************************************************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=template&id=c78885f0 ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockTitle_vue_vue_type_template_id_c78885f0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_BlockTitle_vue_vue_type_template_id_c78885f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./BlockTitle.vue?vue&type=template&id=c78885f0 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=template&id=c78885f0");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=template&id=697a6f2d":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/App.vue?vue&type=template&id=697a6f2d ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "row" }
const _hoisted_2 = {
  key: 0,
  class: "sl-block"
}
const _hoisted_3 = {
  key: 0,
  class: "sl-block sl-block-placeholder"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RowControls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RowControls")
  const _component_ColControls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ColControls")
  const _component_BlockRenderer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockRenderer")
  const _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable")
  const _component_AddBlockModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AddBlockModal")
  const _component_EditBlockModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditBlockModal")
  const _component_DeleteBlockModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteBlockModal")
  const _component_InfoBlockModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoBlockModal")
  const _component_UploadModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("UploadModal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`sl-container ${$options.draggingClass}`)
    }, [
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.sl.layouts.items, (row, rowIndex) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: `layout_${rowIndex}`,
          class: "sl-row"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RowControls, { index: rowIndex }, null, 8 /* PROPS */, ["index"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(row.items, (column, columnIndex) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                key: `column_${columnIndex}_${rowIndex}`,
                class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(`sl-col col col-${column.width}`)
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColControls, {
                  rowIndex: rowIndex,
                  colIndex: columnIndex,
                  currentWidth: parseInt(column.width)
                }, null, 8 /* PROPS */, ["rowIndex", "colIndex", "currentWidth"]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_draggable, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)($options.dragOptions, {
                  list: column.items,
                  itemKey: (item) => _ctx.element,
                  onEnd: $options.saveLayout,
                  onStart: $options.startDraggingBlock
                }), {
                  item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ element, index }) => [
                    (element in $setup.sl.blocks)
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BlockRenderer, {
                            actions: $data.actions,
                            block: $setup.sl.blocks[element],
                            rowIndex: rowIndex,
                            columnIndex: columnIndex,
                            blockIndex: index
                          }, null, 8 /* PROPS */, ["actions", "block", "rowIndex", "columnIndex", "blockIndex"])
                        ]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ]),
                  footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (column.items.length === 0)
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BlockRenderer, {
                            actions: $data.actions,
                            block: {},
                            rowIndex: rowIndex,
                            columnIndex: columnIndex,
                            blockIndex: -1
                          }, null, 8 /* PROPS */, ["actions", "rowIndex", "columnIndex"])
                        ]))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["list", "itemKey", "onEnd", "onStart"]),
                (row.items.length === columnIndex + 1)
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ColControls, {
                      key: 0,
                      rowIndex: rowIndex,
                      colIndex: columnIndex + 1,
                      right: ""
                    }, null, 8 /* PROPS */, ["rowIndex", "colIndex"]))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
              ], 2 /* CLASS */))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          ($setup.sl.layouts.items.length === rowIndex + 1)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RowControls, {
                key: 0,
                index: rowIndex + 1
              }, null, 8 /* PROPS */, ["index"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 2 /* CLASS */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AddBlockModal, { ref: "add-modal" }, null, 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EditBlockModal, { ref: "edit-modal" }, null, 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteBlockModal, { ref: "delete-modal" }, null, 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InfoBlockModal, { ref: "info-modal" }, null, 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_UploadModal, { ref: "upload-modal" }, null, 512 /* NEED_PATCH */)
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=template&id=5df174ca":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/BlockRenderer.vue?vue&type=template&id=5df174ca ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { key: 0 }
const _hoisted_2 = { key: 1 }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlockFallbackView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockFallbackView")

  return ($options.getBlockViewComponentByName !== undefined)
    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.getBlockViewComponentByName), (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), null, 16 /* FULL_PROPS */))
      ]))
    : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BlockFallbackView, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), null, 16 /* FULL_PROPS */)
      ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=template&id=4e4d49e2":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/BlockControls.vue?vue&type=template&id=4e4d49e2 ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "navbar navbar-expand-lg bg-light sl-add-block-controls" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = ["data-bs-target", "aria-controls"]
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "navbar-toggler-icon" }, null, -1 /* HOISTED */)
const _hoisted_5 = [
  _hoisted_4
]
const _hoisted_6 = ["id"]
const _hoisted_7 = { class: "navbar-nav" }
const _hoisted_8 = { class: "nav-item" }
const _hoisted_9 = { class: "btn-group btn-group-xs" }
const _hoisted_10 = {
  key: 0,
  class: "btn btn-secondary btn-sm sl-handle sl-move-button"
}
const _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Move", -1 /* HOISTED */)
const _hoisted_12 = ["id"]
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Actions", -1 /* HOISTED */)
const _hoisted_14 = [
  _hoisted_13
]
const _hoisted_15 = ["aria-labelledby"]
const _hoisted_16 = ["onClick", "data-row", "data-col", "data-block"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlockTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockTitle")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title", {}, () => [
          ($props.block.title)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BlockTitle, {
                key: 0,
                block: $props.block
              }, null, 8 /* PROPS */, ["block"]))
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
        ])
      ]),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        class: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": `#${$options.dropdownIdMobile}`,
        "aria-controls": $options.dropdownIdMobile,
        "aria-expanded": "false",
        "aria-label": "Toggle edit menu"
      }, _hoisted_5, 8 /* PROPS */, _hoisted_3),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "collapse navbar-collapse justify-content-end flex-shrink-0",
        id: $options.dropdownIdMobile
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
              ($props.blockIndex > -1)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_10, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)($options.moveIcon)), null, 16 /* FULL_PROPS */),
                    _hoisted_11
                  ]))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                class: "btn btn-success btn-sm dropdown-toggle",
                type: "button",
                id: $options.dropdownId,
                "data-bs-toggle": "dropdown",
                "data-bs-auto-close": "true",
                "aria-expanded": "false"
              }, _hoisted_14, 8 /* PROPS */, _hoisted_12),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
                class: "dropdown-menu",
                "aria-labelledby": $options.dropdownId
              }, [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.actions, (action) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                    key: action.label
                  }, [
                    (action.enabled($props.rowIndex, $props.columnIndex, $props.blockIndex))
                      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
                          key: 0,
                          class: "dropdown-item",
                          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(action.action, ["prevent","stop"]),
                          "data-row": $props.rowIndex,
                          "data-col": $props.columnIndex,
                          "data-block": $props.blockIndex,
                          href: "#"
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(action.label), 9 /* TEXT, PROPS */, _hoisted_16))
                      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                  ]))
                }), 128 /* KEYED_FRAGMENT */))
              ], 8 /* PROPS */, _hoisted_15)
            ])
          ])
        ])
      ], 8 /* PROPS */, _hoisted_6)
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=template&id=0169cefc":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/ColControls.vue?vue&type=template&id=0169cefc ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "btn-group btn-group-xs" }
const _hoisted_2 = ["id"]
const _hoisted_3 = ["aria-labelledby"]
const _hoisted_4 = ["onClick"]
const _hoisted_5 = { class: "btn-group btn-group-xs sl-row-controls" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    ($props.currentWidth)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: 0,
          class: "sl-remove-col-controls",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`z-index:${1000 - 1 - $props.rowIndex * 2}`)
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
            (!$options.hasBlocks)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
                  key: 0,
                  class: "btn btn-xs btn-danger",
                  type: "button",
                  onClick: _cache[0] || (_cache[0] = (...args) => ($options.removeCol && $options.removeCol(...args)))
                }, " Remove column "))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
              class: "btn dropdown-toggle btn-primary btn-xs",
              type: "button",
              id: $options.dropdownId,
              "data-bs-toggle": "dropdown",
              "data-bs-auto-close": "true",
              "aria-expanded": "false"
            }, " Width: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.widthsMapping[$props.currentWidth]), 9 /* TEXT, PROPS */, _hoisted_2),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
              class: "dropdown-menu",
              "aria-labelledby": $options.dropdownId
            }, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.widths, (width) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                  key: width.cols
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                    class: "dropdown-item",
                    onClick: () => $options.newWidth(width.cols),
                    href: "#"
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(width.label), 9 /* TEXT, PROPS */, _hoisted_4)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ], 8 /* PROPS */, _hoisted_3)
          ])
        ], 4 /* STYLE */))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.cssClasses)
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          type: "button",
          class: "btn btn-secondary sl-col-add-button",
          onClick: _cache[1] || (_cache[1] = () => $options.createCol())
        }, " + ")
      ])
    ], 2 /* CLASS */)
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=template&id=fa70cc48":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Controls/RowControls.vue?vue&type=template&id=fa70cc48 ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "btn-group btn-group-xs" }
const _hoisted_2 = ["id"]
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "aria-haspopup": "true",
  class: "caret"
}, null, -1 /* HOISTED */)
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Toggle Dropdown", -1 /* HOISTED */)
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
]
const _hoisted_6 = ["aria-labelledby"]
const _hoisted_7 = ["onClick"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    class: "sl-add-row-controls",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`z-index:${1000 - ($props.index * 2)}`)
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        class: "btn btn-primary",
        onClick: _cache[0] || (_cache[0] = () => $options.createRow(1))
      }, " + "),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        class: "btn btn-secondary dropdown-toggle",
        type: "button",
        id: $options.dropdownId,
        "data-bs-toggle": "dropdown",
        "data-bs-auto-close": "true",
        "aria-expanded": "false"
      }, _hoisted_5, 8 /* PROPS */, _hoisted_2),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
        class: "dropdown-menu",
        "aria-labelledby": $options.dropdownId
      }, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.rows, (row) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
            key: row.cols
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
              class: "dropdown-item",
              onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(() => $options.createRow(row.cols), ["prevent"]),
              href: "#"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(row.label), 9 /* TEXT, PROPS */, _hoisted_7)
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 8 /* PROPS */, _hoisted_6)
    ])
  ], 4 /* STYLE */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=template&id=7fe93186":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/AddBlockModal.vue?vue&type=template&id=7fe93186 ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseModal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BaseModal, {
    storeAction: $options.storeAction,
    ref: "modal"
  }, null, 8 /* PROPS */, ["storeAction"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=template&id=f4248710":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/BaseModal.vue?vue&type=template&id=f4248710 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = {
  class: "modal fade sl-base-modal",
  tabindex: "-1",
  "aria-labelledby": "modal-title",
  "aria-hidden": "true",
  ref: "sl-base-modal"
}
const _hoisted_2 = { class: "modal-dialog modal-dialog-scrollable modal-xl" }
const _hoisted_3 = { class: "modal-content" }
const _hoisted_4 = { class: "modal-header" }
const _hoisted_5 = {
  class: "modal-title",
  id: "modal-title"
}
const _hoisted_6 = { class: "modal-body" }
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "modal-footer" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    id: "form-buttons-cancel",
    name: "form.buttons.cancel",
    class: "btn btn-secondary standalone",
    value: "Cancel"
  }, " Close ")
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "title")
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "body")
        ]),
        _hoisted_7
      ])
    ])
  ], 512 /* NEED_PATCH */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=template&id=4cd56582":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/DeleteBlockModal.vue?vue&type=template&id=4cd56582 ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseModal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BaseModal, {
    storeAction: $options.storeAction,
    ref: "modal"
  }, null, 8 /* PROPS */, ["storeAction"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=template&id=1906f25e":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/EditBlockModal.vue?vue&type=template&id=1906f25e ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseModal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BaseModal, {
    storeAction: $options.storeAction,
    ref: "modal"
  }, null, 8 /* PROPS */, ["storeAction"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=template&id=281b0bfc":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/InfoBlockModal.vue?vue&type=template&id=281b0bfc ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseModal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BaseModal, {
    modalOptions: $data.options,
    ref: "modal"
  }, null, 8 /* PROPS */, ["modalOptions"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=template&id=c3c70b70":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Modals/UploadModal.vue?vue&type=template&id=c3c70b70 ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Upload")
const _hoisted_2 = {
  class: "upload",
  ref: "upload"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BaseModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BaseModal")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BaseModal, {
    cleanUpBody: false,
    ref: "modal"
  }, {
    title: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      _hoisted_1
    ]),
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, null, 512 /* NEED_PATCH */)
    ]),
    _: 1 /* STABLE */
  }, 512 /* NEED_PATCH */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=template&id=1f368f7f":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/Pagination.vue?vue&type=template&id=1f368f7f ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = {
  key: 0,
  "aria-label": "Pagination for this listing"
}
const _hoisted_2 = { class: "pagination" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ($props.batching)
    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.batching.prev ? 'page-item' : 'page-item disabled')
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
              href: "#",
              onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.triggerPrevious && $options.triggerPrevious(...args)), ["prevent"])),
              class: "page-link"
            }, " Previous ")
          ], 2 /* CLASS */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($props.batching.next ? 'page-item' : 'page-item disabled')
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
              href: "#",
              onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($options.triggerNext && $options.triggerNext(...args)), ["prevent"])),
              class: "page-link"
            }, " Next ")
          ], 2 /* CLASS */)
        ])
      ]))
    : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=template&id=84070378":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue?vue&type=template&id=84070378 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlockStructure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockStructure")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BlockStructure, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), null, 16 /* FULL_PROPS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=template&id=1fa3ecea":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue?vue&type=template&id=1fa3ecea ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlockStructure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockStructure")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BlockStructure, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), null, 16 /* FULL_PROPS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=template&id=61f8b5c4":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue?vue&type=template&id=61f8b5c4 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "table-responsive" }
const _hoisted_2 = { class: "table table-hover" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Title"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Size"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Modified")
  ])
], -1 /* HOISTED */)
const _hoisted_4 = ["href"]
const _hoisted_5 = ["href"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination")
  const _component_BlockStructure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockStructure")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BlockStructure, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), {
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" total " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.items_total) + " ", 1 /* TEXT */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [
          _hoisted_3,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.items, (file) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                key: file.UID
              }, [
                (file['@type'] === 'Image')
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.image["content-type"]), 1 /* TEXT */),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                          href: file.image.download
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.title), 9 /* TEXT, PROPS */, _hoisted_4)
                      ]),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.image.size), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (file['@type'] === 'File')
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.file["content-type"]), 1 /* TEXT */),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                          href: file.file.download
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.title), 9 /* TEXT, PROPS */, _hoisted_5)
                      ]),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.file.size), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.modified), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ]),
      ($data.data.batching)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Pagination, {
            key: 0,
            onNext: $options.fetchNext,
            onPrevious: $options.fetchPrevious,
            batching: $data.data.batching
          }, null, 8 /* PROPS */, ["onNext", "onPrevious", "batching"]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=template&id=52844dca":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue?vue&type=template&id=52844dca ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "table-responsive" }
const _hoisted_2 = { class: "table table-hover" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Type"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Title"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Size"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Modified")
  ])
], -1 /* HOISTED */)
const _hoisted_4 = ["href"]
const _hoisted_5 = ["href"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination")
  const _component_BlockStructure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockStructure")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BlockStructure, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), {
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" total " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.items_total) + " ", 1 /* TEXT */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [
          _hoisted_3,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.items, (file) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                key: file.UID
              }, [
                (file['@type'] === 'Image')
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 0 }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.image["content-type"]), 1 /* TEXT */),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                          href: file.image.download
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.title), 9 /* TEXT, PROPS */, _hoisted_4)
                      ]),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.image.size), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (file['@type'] === 'File')
                  ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.file["content-type"]), 1 /* TEXT */),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
                          href: file.file.download
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.title), 9 /* TEXT, PROPS */, _hoisted_5)
                      ]),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.file.size), 1 /* TEXT */)
                    ], 64 /* STABLE_FRAGMENT */))
                  : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(file.modified), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ]),
      ($data.data.batching)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Pagination, {
            key: 0,
            onNext: $options.fetchNext,
            onPrevious: $options.fetchPrevious,
            batching: $data.data.batching
          }, null, 8 /* PROPS */, ["onNext", "onPrevious", "batching"]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=template&id=9e10a716":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue?vue&type=template&id=9e10a716 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "table-responsive" }
const _hoisted_2 = { class: "table table-hover" }
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Date"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Title"),
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Modified")
  ])
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination")
  const _component_BlockStructure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockStructure")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BlockStructure, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), {
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" total " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.data.items_total) + " ", 1 /* TEXT */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_2, [
          _hoisted_3,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [
            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.data.items, (news) => {
              return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
                key: news.UID
              }, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(news.news_date), 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(news.title), 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(news.modified), 1 /* TEXT */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ])
        ])
      ]),
      ($data.data.batching)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Pagination, {
            key: 0,
            onNext: $options.fetchNext,
            onPrevious: $options.fetchPrevious,
            batching: $data.data.batching
          }, null, 8 /* PROPS */, ["onNext", "onPrevious", "batching"]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=template&id=3c0837aa":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue?vue&type=template&id=3c0837aa ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = {
  class: "card-img-top sl-card-image",
  "aria-hidden": "true"
}
const _hoisted_2 = ["href"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlockStructure = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockStructure")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_BlockStructure, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), {
    top: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: "sl-placeholder-video",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)(`background-image: url(${this.sl.portalURL}/iconresolver/camera-video)`)
        }, null, 4 /* STYLE */)
      ])
    ]),
    body: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: $props.block.video_url
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.block.video_url), 9 /* TEXT, PROPS */, _hoisted_2)
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=template&id=468bf6a3":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockStructure.vue?vue&type=template&id=468bf6a3 ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "card" }
const _hoisted_2 = {
  key: 0,
  class: "card-img-top sl-card-image"
}
const _hoisted_3 = ["src", "alt"]
const _hoisted_4 = {
  key: 0,
  class: "card-body"
}
const _hoisted_5 = { class: "card-text" }
const _hoisted_6 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlockControls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BlockControls")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BlockControls, (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeProps)((0,vue__WEBPACK_IMPORTED_MODULE_0__.guardReactiveProps)(_ctx.$props)), null, 16 /* FULL_PROPS */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "top", {}, () => [
      ($props.block.image)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: $props.block.image.scales.great.download,
              alt: $props.block.image_alt_text
            }, null, 8 /* PROPS */, _hoisted_3)
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ]),
    (Object.keys($props.block).length !== 0)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "body", {}, () => [
              ($props.block.text)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                    key: 0,
                    innerHTML: $props.block.text.data
                  }, null, 8 /* PROPS */, _hoisted_6))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ])
          ])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=template&id=c78885f0":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./wcs/simplelayout/browser/static/js/src/components/standard/BlockTitle.vue?vue&type=template&id=c78885f0 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "card-title" }
const _hoisted_2 = { class: "position-relative d-inline-block pe-2" }
const _hoisted_3 = {
  key: 0,
  class: "h6 text-black text-opacity-50"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h4", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.block.title) + " ", 1 /* TEXT */),
      (!$props.block.show_title)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, "(hidden title)"))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ])
  ]))
}

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/components/blockViews sync recursive \\.vue$":
/*!***********************************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/components/blockViews/ sync \.vue$ ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Block.vue": "./wcs/simplelayout/browser/static/js/src/components/blockViews/Block.vue",
	"./BlockFallbackView.vue": "./wcs/simplelayout/browser/static/js/src/components/blockViews/BlockFallbackView.vue",
	"./FileListingBlock.vue": "./wcs/simplelayout/browser/static/js/src/components/blockViews/FileListingBlock.vue",
	"./ImageListingBlock.vue": "./wcs/simplelayout/browser/static/js/src/components/blockViews/ImageListingBlock.vue",
	"./NewsListingBlock.vue": "./wcs/simplelayout/browser/static/js/src/components/blockViews/NewsListingBlock.vue",
	"./VideoBlock.vue": "./wcs/simplelayout/browser/static/js/src/components/blockViews/VideoBlock.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./wcs/simplelayout/browser/static/js/src/components/blockViews sync recursive \\.vue$";

/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/main.js":
/*!********************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/main.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./wcs/simplelayout/browser/static/js/src/App.vue");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./wcs/simplelayout/browser/static/js/src/utils.js");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-axios */ "webpack/sharing/consume/default/vue-axios/vue-axios");
/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pinia */ "webpack/sharing/consume/default/pinia/pinia");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plugins_BlockViews_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/BlockViews.js */ "./wcs/simplelayout/browser/static/js/src/plugins/BlockViews.js");







const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
app.use((vue_axios__WEBPACK_IMPORTED_MODULE_3___default()), {
  axios: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.axiosInstance)(),
  axioshtml: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.axiosNeutralInstance)(),
});
const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_4__.createPinia)();
pinia.use(({ store }) => {
  store.axios = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.axiosInstance)();
});

app.use(pinia);
app.use(_plugins_BlockViews_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.mount("#app");


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/plugins/BlockViews.js":
/*!**********************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/plugins/BlockViews.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  install: (app) => {
    // const modules = import.meta.globEager("../components/blockViews/*.vue");
    const modules = __webpack_require__("./wcs/simplelayout/browser/static/js/src/components/blockViews sync recursive \\.vue$");
    const views = {};
    Object.entries(modules).forEach(([path, m]) => {
      const name = path
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");
      views[name] = m.default;
    });
    app.config.globalProperties.$blockviews = views;
    // app.provide("blockviews", options);
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/store.js":
/*!*********************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSimplelayoutStore": () => (/* binding */ useSimplelayoutStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pinia */ "webpack/sharing/consume/default/pinia/pinia");
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pinia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/template.js */ "./wcs/simplelayout/browser/static/js/src/template.js");



const useSimplelayoutStore = (0,pinia__WEBPACK_IMPORTED_MODULE_0__.defineStore)({
  // id is required so that Pinia can connect the store to the devtools
  id: "simplelayoutStore",
  state: () => ({
    layouts: { items: [(0,_template_js__WEBPACK_IMPORTED_MODULE_1__.row)()] },
    blocks: {},
    loading: false,
    baseURL: document.body.getAttribute("data-base-url"),
    baseApiURL: document.body.getAttribute("data-base-url") + "/++api++",
    portalURL: document.body.getAttribute("data-portal-url"),
    params: { expand: "types" },
  }),
  getters: {},
  actions: {
    async fetchBlocks() {
      this.loading = true;
      try {
        const response = await this.axios.get(this.baseApiURL, { params: this.params });
        this.blocks = response.data.slblocks;
        const layouts = response.data.slblocks_layout;
        if ("items" in layouts && layouts.items.length !== 0) {
          this.layouts = response.data.slblocks_layout;
        }
      } catch (error) {
        console.info(error);
      } finally {
        this.loading = false;
      }
    },
    async modifyLayouts(data) {
      this.loading = true;
      try {
        const response = await this.axios.patch(this.baseApiURL, data, { params: this.params });
        this.blocks = response.data.slblocks;
        const layouts = response.data.slblocks_layout;
        if ("items" in layouts) {
          this.layouts = response.data.slblocks_layout;
        }
      } catch (error) {
        console.info(error);
      } finally {
        this.loading = false;
      }
    },
    async addRowToLayout(row, index) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts.splice(index, 0, row);
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async removeRowFromLayout(rowIndex, colIndex) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      const row = newLayouts[rowIndex].items;
      if (row.length === 1) {
        newLayouts.splice(rowIndex, 1);
      } else {
        const colWidth = 12 / (row.length - 1);
        row.splice(colIndex, 1);
        row.map((col) => (col.width = colWidth));
      }
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async addColumnToRow(col, rowIndex, colIndex) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      let row = newLayouts[rowIndex].items;
      const colWidth = 12 / (row.length + 1);
      row.map((col) => (col.width = colWidth));
      col.width = colWidth;
      newLayouts[rowIndex].items.splice(colIndex, 0, col);

      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async addBlockToColumn(rowIndex, colIndex, blockIndex, uuid) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[rowIndex].items[colIndex].items.splice(blockIndex, 0, uuid);
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async setNewWidthOnColumn(rowIndex, colIndex, newWidth) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[rowIndex].items[colIndex].width = newWidth;

      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
    async modifyBlock(data) {
      this.blocks[data.UID] = data;
    },
    async deleteBlock(position) {
      let newLayouts = JSON.parse(JSON.stringify(this.layouts.items));
      newLayouts[position.rowIndex].items[position.columnIndex].items.splice(
        position.blockIndex,
        1
      );
      const data = { slblocks_layout: { items: newLayouts } };
      this.modifyLayouts(data);
    },
  },
});


/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/template.js":
/*!************************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/template.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "column": () => (/* binding */ column),
/* harmony export */   "row": () => (/* binding */ row)
/* harmony export */ });
function column(col) {
  return {
    "@type": "col",
    width: `${12 / parseInt(col)}`,
    items: [],
  };
}

function row(cols) {
  const colsArray = Array.from(new Array(cols), (x, i) => i);
  return {
    "@type": "row",
    items: colsArray.map(() => column(cols)),
  };
}




/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/utils.js":
/*!*********************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": () => (/* binding */ axiosInstance),
/* harmony export */   "axiosNeutralInstance": () => (/* binding */ axiosNeutralInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "webpack/sharing/consume/default/axios/axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


function axiosInstance() {
  const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
  });
  return instance;
}

function axiosNeutralInstance() {
  const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    headers: {
      Accept: "text/html",
    },
  });
  return instance;
}




/***/ }),

/***/ "./wcs/simplelayout/browser/static/js/src/vocabs.js":
/*!**********************************************************!*\
  !*** ./wcs/simplelayout/browser/static/js/src/vocabs.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColWidths": () => (/* binding */ ColWidths)
/* harmony export */ });
function ColWidths(asMapping) {
  const widths = [
    { cols: 12, label: "100%" },
    { cols: 9, label: "75%" },
    { cols: 6, label: "50%" },
    { cols: 4, label: "33%" },
    { cols: 3, label: "25%" },
  ];

  if (asMapping !== undefined) {
    return widths.reduce((a, b) => ({ ...a, [b.cols]: b.label }), {});
  }

  return widths;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2NzX3NpbXBsZWxheW91dF9icm93c2VyX3N0YXRpY19qc19zcmNfbWFpbl9qcy13ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X2pxdWVyeV9qcXVlcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUNqQjtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esd0RBQXdELCtCQUErQixzQkFBc0IsR0FBRyxzQkFBc0IsdUJBQXVCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLGtCQUFrQixtQkFBbUIsdUJBQXVCLHNCQUFzQixHQUFHLHdCQUF3QixvQ0FBb0MsR0FBRyxXQUFXLG9CQUFvQixzQkFBc0IsZUFBZSxpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLGtCQUFrQixHQUFHLDJCQUEyQixpQkFBaUIsR0FBRyxzQkFBc0IsNEJBQTRCLDZCQUE2QiwyQkFBMkIsbUJBQW1CLDRCQUE0QixHQUFHLDBCQUEwQixrQkFBa0IsR0FBRyw0Q0FBNEMsb0NBQW9DLEdBQUcsaUVBQWlFLGtCQUFrQixHQUFHLDBDQUEwQyxzQkFBc0IsR0FBRyxPQUFPLHVJQUF1SSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxpQ0FBaUMsYUFBYSxLQUFLLGFBQWEsaUNBQWlDLHdCQUF3QixLQUFLLHFCQUFxQix5QkFBeUIsS0FBSyxlQUFlLHlCQUF5QixLQUFLLGVBQWUscUJBQXFCLHlCQUF5Qix3QkFBd0IsZUFBZSx3Q0FBd0MsT0FBTyxL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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNYLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLCtEQUFvQixDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNmLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1A7VUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsQ0FBQztRQUNEO1VBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQzVELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDWCxDQUFDO1FBQ0gsQ0FBQztRQUNEO1VBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDNUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNYLENBQUM7UUFDSCxDQUFDO1FBQ0Q7VUFDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtjQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDWCxDQUFDOztZQUVILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtjQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkOztZQUVBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ2hFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN2QixDQUFDO1FBQ0gsQ0FBQztRQUNEO1VBQ0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUM1RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ1gsQ0FBQztRQUNILENBQUM7UUFDRDtVQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO2NBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNYLENBQUM7O1lBRUgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2NBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2Q7O1lBRUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDaEUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3ZCLENBQUM7UUFDSCxDQUFDO01BQ0gsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3ZDLENBQUM7SUFDSCxDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDM0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzFELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDN0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzlELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtRQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7TUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztNQUNuRCxDQUFDLENBQUM7TUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzT3dFO0FBQ1Y7QUFDTDs7QUFFM0QsQ0FBbUg7QUFDbkgsaUNBQWlDLGlJQUFlLENBQUMsa0ZBQU0sYUFBYSxvRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2IrRDs7QUFFOUUsaUVBQWU7RUFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkIsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQzVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0N3RTtBQUNWO0FBQ0w7O0FBRTNELENBQXlFOztBQUUwQztBQUNuSCxpQ0FBaUMsaUlBQWUsQ0FBQyxrRkFBTSxhQUFhLG9GQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3lDbUM7QUFDWTtBQUM5RCxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDWixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsK0RBQW9CLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ2YsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzVCLENBQUM7SUFDSCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSHNFO0FBQ1Y7QUFDTDs7QUFFekQsQ0FBdUU7O0FBRTRDO0FBQ25ILGlDQUFpQyxpSUFBZSxDQUFDLGdGQUFNLGFBQWEsa0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzZCd0I7QUFDQztBQUNVO0FBQ2xELGlFQUFlO0VBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSwrREFBb0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDZixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvREFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxxREFBUyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUscURBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMvQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUI7TUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3hFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIc0U7QUFDVjtBQUNMOztBQUV6RCxDQUF1RTs7QUFFNEM7QUFDbkgsaUNBQWlDLGlJQUFlLENBQUMsZ0ZBQU0sYUFBYSxrRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNTcUI7QUFDYztBQUNsRCxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSwrREFBb0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDZixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNKLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO01BQzFDLENBQUM7SUFDSCxDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlEQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakV3RTtBQUNWO0FBQ0w7O0FBRTNELENBQW1IO0FBQ25ILGlDQUFpQyxpSUFBZSxDQUFDLGtGQUFNLGFBQWEsb0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQztBQUNSO0FBQ2xELGlFQUFlO0VBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNYLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLCtEQUFvQixDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNmLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3JELENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2xDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6RCxDQUFDOztNQUVELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNqRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ2hELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1VBQ3hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3ZCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztNQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEb0U7QUFDVjtBQUNMOztBQUV2RCxDQUFxRTs7QUFFOEM7QUFDbkgsaUNBQWlDLGlJQUFlLENBQUMsOEVBQU0sYUFBYSxnRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNPbUM7QUFDZ0I7QUFDbEUsaUVBQWU7RUFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO01BQ0gsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSwrREFBb0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDZixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDZCxDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2pELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQzdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM5QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDeEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUV0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN2RCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUVsQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN4RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztNQUNILENBQUMsQ0FBQztNQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN0RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFDckMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ25CLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMxQjtJQUNGLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM3RCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMvRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ25ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN4RCx1RkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3ZELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDdkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztVQUM1QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUV6QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNwRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7TUFDSDs7TUFFQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRXpELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNqRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN4QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3ZDO01BQ0EsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEM7TUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNWLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1I7TUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbkM7SUFDRixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtVQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDO01BQ0YsQ0FBQztJQUNILENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekwyRTtBQUNWO0FBQ0w7O0FBRTlELENBQW1IO0FBQ25ILGlDQUFpQyxpSUFBZSxDQUFDLHFGQUFNLGFBQWEsdUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQztBQUNSO0FBQ2xELGlFQUFlO0VBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNYLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLCtEQUFvQixDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNmLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNuRCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6RCxDQUFDO01BQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDL0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7SUFFRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2pFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaER5RTtBQUNWO0FBQ0w7O0FBRTVELENBQW1IO0FBQ25ILGlDQUFpQyxpSUFBZSxDQUFDLG1GQUFNLGFBQWEscUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQztBQUNSO0FBQ2xELGlFQUFlO0VBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ1gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsK0RBQW9CLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ2YsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqRCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3pELENBQUM7TUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRTFCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7SUFFRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakQsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6RCxDQUFDO01BQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUUxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzNDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7SUFFRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7UUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ2pFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEc0U7QUFDVjtBQUNMOztBQUV6RCxDQUFtSDtBQUNuSCxpQ0FBaUMsaUlBQWUsQ0FBQyxnRkFBTSxhQUFhLGtGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2IyQztBQUNSO0FBQ2xELGlFQUFlO0VBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNYLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLCtEQUFvQixDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNmLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25ELENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDekQsQ0FBQztNQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDZCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsQixDQUFDO01BQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1IsQ0FBQzs7TUFFRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDckUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ3RCLENBQUMsQ0FBQzs7TUFFRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN2QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O0lBRUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNqRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO01BQzlDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6RSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FB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QzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJ1RDtBQUN0RSxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoQixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CMkU7QUFDVjtBQUNMOztBQUU5RCxDQUFtSDtBQUNuSCxpQ0FBaUMsaUlBQWUsQ0FBQyxxRkFBTSxhQUFhLHVGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VCdUQ7QUFDakI7QUFDckQsaUVBQWU7RUFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ1osQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHNEU7QUFDVjtBQUNMOztBQUUvRCxDQUFtSDtBQUNuSCxpQ0FBaUMsaUlBQWUsQ0FBQyxzRkFBTSxhQUFhLHdGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VCdUQ7QUFDakI7QUFDckQsaUVBQWU7RUFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ1osQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7RUFDSCxDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2xCLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2hFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0VBQ0gsQ0FBQztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHMkU7QUFDVjtBQUNMOztBQUU5RCxDQUFtSDtBQUNuSCxpQ0FBaUMsaUlBQWUsQ0FBQyxxRkFBTSxhQUFhLHVGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1V1RDtBQUNqQjtBQUNyRCxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDWixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckMsQ0FBQztFQUNILENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbEIsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0VBQ0gsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDaEUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGcUU7QUFDVjtBQUNMOztBQUV4RCxDQUFzRTs7QUFFNkM7QUFD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RTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7RUFDSCxDQUFDO0FBQ0gsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERxRTtBQUNWO0FBQ0w7O0FBRXhELENBQW1IO0FBQ25ILGlDQUFpQyxpSUFBZSxDQUFDLCtFQUFNLGFBQWEsaUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ1hmLGlFQUFlO0VBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztFQUNILENBQUM7QUFDSCxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZ0o7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBYTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FHOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FFOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FGOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUY7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBRDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FOOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCMURTbEosS0FBSyxFQUFDLEtBQUs7OztFQW9CSCxLQUFLLEVBQUMsVUFBVTs7OztFQWFuQixLQUFLLEVBQUMsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7SUF6Q3JELHdEQXFFTTtNQXJFQSxLQUFLLHNFQUFrQixzQkFBYTs7NkRBQ3hDLHdEQW1FVyxpR0FsRWlCLFNBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFsQyxHQUFHLEVBQUUsUUFBUTtrRUFHckIsd0RBOERNO3lCQWhFVSxRQUFRO1VBRW5CLEtBQUssRUFBQyxRQUFROztVQUNqQixpREFBaUMsMEJBQW5CLEtBQUssRUFBRSxRQUFRO1VBRTdCLHdEQXNETSxPQXRETixVQXNETTttRUFyREosd0RBb0RNLGlHQW5ENEIsR0FBRyxDQUFDLEtBQUssR0FBakMsTUFBTSxFQUFFLFdBQVc7d0VBRDdCLHdEQW9ETTtnQkFsREgsR0FBRyxZQUFZLFdBQVcsSUFBSSxRQUFRO2dCQUN0QyxLQUFLLHdFQUFvQixNQUFNLENBQUMsS0FBSzs7Z0JBRXRDLGlEQUlFO2tCQUhDLFFBQVEsRUFBRSxRQUFRO2tCQUNsQixRQUFRLEVBQUUsV0FBVztrQkFDckIsWUFBWSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSzs7Z0JBR3RDLGlEQWlDWSxzQkFqQ1osZ0RBQ1Usb0JBQVc7a0JBQ2xCLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSztrQkFDbEIsT0FBTyxHQUFHLElBQUksS0FBSyxZQUFPO2tCQUMxQixLQUFHLEVBQUUsbUJBQVU7a0JBQ2YsT0FBSyxFQUFFLDJCQUFrQjs7a0JBRWYsSUFBSSwrQ0FDYixDQVFNLEVBVFcsT0FBTyxFQUFFLEtBQUs7cUJBQ0gsT0FBTyxJQUFJLFNBQUUsQ0FBQyxNQUFNOzJFQUFoRCx3REFRTSxPQVJOLFVBUU07MEJBUEosaURBTUU7NEJBTEMsT0FBTyxFQUFFLGFBQU87NEJBQ2hCLEtBQUssRUFBRSxTQUFFLENBQUMsTUFBTSxDQUFDLE9BQU87NEJBQ3hCLFFBQVEsRUFBRSxRQUFROzRCQUNsQixXQUFXLEVBQUUsV0FBVzs0QkFDeEIsVUFBVSxFQUFFLEtBQUs7Ozs7O2tCQUtiLE1BQU0sK0NBQ2YsQ0FXTTtxQkFURSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU07MkVBRjNCLHdEQVdNLE9BWE4sVUFXTTswQkFQSixpREFNRTs0QkFMQyxPQUFPLEVBQUUsYUFBTzs0QkFDaEIsS0FBSyxFQUFFLEVBQUU7NEJBQ1QsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLFdBQVcsRUFBRSxXQUFXOzRCQUN4QixVQUFVLEVBQUUsRUFBRTs7Ozs7OztpQkFPZixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxXQUFXO3VFQUR4QyxpREFLRTs7c0JBSEMsUUFBUSxFQUFFLFFBQVE7c0JBQ2xCLFFBQVEsRUFBRSxXQUFXO3NCQUN0QixLQUFLLEVBQUwsRUFBSzs7Ozs7O1dBS0gsU0FBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVE7aUVBRDVDLGlEQUdFOztnQkFEQyxLQUFLLEVBQUUsUUFBUTs7Ozs7O0lBS3hCLGlEQUFpQyw0QkFBbEIsR0FBRyxFQUFDLFdBQVc7SUFDOUIsaURBQW1DLDZCQUFuQixHQUFHLEVBQUMsWUFBWTtJQUNoQyxpREFBdUMsK0JBQXJCLEdBQUcsRUFBQyxjQUFjO0lBQ3BDLGlEQUFtQyw2QkFBbkIsR0FBRyxFQUFDLFlBQVk7SUFDaEMsaURBQWtDLDBCQUFyQixHQUFHLEVBQUMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VFMUVwQixvQ0FBMkIsS0FBSyxTQUFTO3lEQUFwRCx3REFFTTsyREFESixpREFBK0QsNkRBQS9DLG9DQUEyQiwrR0FBVSxXQUFNOzt5REFFN0Qsd0RBRU07UUFESixpREFBcUMsMElBQVYsV0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCRUo5QixLQUFLLEVBQUMsd0RBQXdEO3FCQUM1RCxLQUFLLEVBQUMsV0FBVzs7Z0NBZWxCLHdEQUF5QyxVQUFuQyxLQUFLLEVBQUMscUJBQXFCOztFQUFqQyxVQUF5Qzs7O3FCQU1yQyxLQUFLLEVBQUMsWUFBWTtxQkFDaEIsS0FBSyxFQUFDLFVBQVU7cUJBQ2IsS0FBSyxFQUFDLHdCQUF3Qjs7O0VBRy9CLEtBQUssRUFBQyxtREFBbUQ7O2lDQUd6RCx3REFBaUMsVUFBM0IsS0FBSyxFQUFDLFNBQVMsSUFBQyxNQUFJOztpQ0FVMUIsd0RBQW9CLGNBQWQsU0FBTzs7RUFBYixXQUFvQjs7Ozs7Ozs7NERBeENsQyx3REE2RE0sT0E3RE4sVUE2RE07SUE1REosd0RBMkRNLE9BM0ROLFVBMkRNO01BMURKLHdEQUlPO1FBSEwsZ0RBRU8sMEJBRlAsQ0FFTztXQUQ0QixZQUFLLENBQUMsS0FBSztpRUFBNUMsaURBQWdEOztnQkFBbkMsS0FBSyxFQUFFLFlBQUs7Ozs7O01BRzdCLHdEQVVTO1FBVFAsS0FBSyxFQUFDLGdCQUFnQjtRQUN0QixJQUFJLEVBQUMsUUFBUTtRQUNiLGdCQUFjLEVBQUMsVUFBVTtRQUN4QixnQkFBYyxNQUFNLHlCQUFnQjtRQUNwQyxlQUFhLEVBQUUseUJBQWdCO1FBQ2hDLGVBQWEsRUFBQyxPQUFPO1FBQ3JCLFlBQVUsRUFBQyxrQkFBa0I7O01BSS9CLHdEQXlDTTtRQXhDSixLQUFLLEVBQUMsNERBQTREO1FBQ2pFLEVBQUUsRUFBRSx5QkFBZ0I7O1FBRXJCLHdEQW9DSyxNQXBDTCxVQW9DSztVQW5DSCx3REFrQ0ssTUFsQ0wsVUFrQ0s7WUFqQ0gsd0RBZ0NNLE9BaENOLFVBZ0NNO2VBOUJJLGlCQUFVO3FFQURsQix3REFNUyxVQU5ULFdBTVM7b0JBRlAsd0RBQXlCLG1IQUFaLGlCQUFRO29CQUNyQixXQUFpQzs7O2NBRW5DLHdEQVNTO2dCQVJQLEtBQUssRUFBQyx3Q0FBd0M7Z0JBQzlDLElBQUksRUFBQyxRQUFRO2dCQUNaLEVBQUUsRUFBRSxtQkFBVTtnQkFDZixnQkFBYyxFQUFDLFVBQVU7Z0JBQ3pCLG9CQUFrQixFQUFDLE1BQU07Z0JBQ3pCLGVBQWEsRUFBQyxPQUFPOztjQUl2Qix3REFhSztnQkFiRCxLQUFLLEVBQUMsZUFBZTtnQkFBRSxpQkFBZSxFQUFFLG1CQUFVOzt1RUFDcEQsd0RBV0ssaUdBWGdCLGNBQU8sR0FBakIsTUFBTTs0RUFBakIsd0RBV0s7b0JBWDBCLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSzs7cUJBRXRDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBUSxFQUFFLGtCQUFXLEVBQUUsaUJBQVU7MkVBRHhELHdEQVNDOzswQkFQQyxLQUFLLEVBQUMsZUFBZTswQkFDcEIsT0FBSyxxREFBZSxNQUFNLENBQUMsTUFBTTswQkFDakMsVUFBUSxFQUFFLGVBQVE7MEJBQ2xCLFVBQVEsRUFBRSxrQkFBVzswQkFDckIsWUFBVSxFQUFFLGlCQUFVOzBCQUN2QixJQUFJLEVBQUMsR0FBRztnRkFDSixNQUFNLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCRS9DM0IsS0FBSyxFQUFDLHdCQUF3Qjs7OztxQkFtQzlCLEtBQUssRUFBQyx3Q0FBd0M7Ozs7S0F2QzdDLG1CQUFZOzJEQURwQix3REFxQ007O1VBbkNKLEtBQUssRUFBQyx3QkFBd0I7VUFDN0IsS0FBSyw0RUFBd0IsZUFBUTs7VUFFdEMsd0RBK0JNLE9BL0JOLFVBK0JNO2NBN0JLLGtCQUFTO21FQURsQix3REFPUzs7a0JBTFAsS0FBSyxFQUFDLHVCQUF1QjtrQkFDN0IsSUFBSSxFQUFDLFFBQVE7a0JBQ1osT0FBSywwQ0FBRSxpREFBUzttQkFDbEIsaUJBRUQ7O1lBQ0Esd0RBU1M7Y0FSUCxLQUFLLEVBQUMsd0NBQXdDO2NBQzlDLElBQUksRUFBQyxRQUFRO2NBQ1osRUFBRSxFQUFFLG1CQUFVO2NBQ2YsZ0JBQWMsRUFBQyxVQUFVO2NBQ3pCLG9CQUFrQixFQUFDLE1BQU07Y0FDekIsZUFBYSxFQUFDLE9BQU87ZUFDdEIsVUFDUSx3REFBRyxzQkFBYSxDQUFDLG1CQUFZO1lBRXRDLHdEQVdLO2NBWEQsS0FBSyxFQUFDLGVBQWU7Y0FBRSxpQkFBZSxFQUFFLG1CQUFVOztxRUFDcEQsd0RBU1csaUdBVGUsZUFBTSxHQUFmLEtBQUs7MEVBQ3BCLHdEQU9LO3VCQVJpQyxLQUFLLENBQUMsSUFBSTs7a0JBRTlDLHdEQUtDO29CQUpDLEtBQUssRUFBQyxlQUFlO29CQUNwQixPQUFLLFFBQVEsaUJBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDakMsSUFBSSxFQUFDLEdBQUc7MEVBQ0osS0FBSyxDQUFDLEtBQUs7Ozs7Ozs7SUFRM0Isd0RBVU07TUFWQSxLQUFLLHNEQUFFLG1CQUFVOztNQUNyQix3REFRTSxPQVJOLFVBUU07UUFQSix3REFNUztVQUxQLElBQUksRUFBQyxRQUFRO1VBQ2IsS0FBSyxFQUFDLHFDQUFxQztVQUMxQyxPQUFLLGtDQUFRLGtCQUFTO1dBQ3hCLEtBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCRTlDRyxLQUFLLEVBQUMsd0JBQXdCOztnQ0FZL0Isd0RBQWdEO0VBQTFDLGVBQWEsRUFBQyxNQUFNO0VBQUMsS0FBSyxFQUFDLE9BQU87O2dDQUN4Qyx3REFBNEMsVUFBdEMsS0FBSyxFQUFDLFNBQVMsSUFBQyxpQkFBZTs7RUFEckMsVUFBZ0Q7RUFDaEQsVUFBNEM7Ozs7Ozs0REFkbEQsd0RBNkJNO0lBN0JELEtBQUssRUFBQyxxQkFBcUI7SUFBRSxLQUFLLHlFQUFxQixZQUFLOztJQUMvRCx3REEyQk0sT0EzQk4sVUEyQk07TUExQkosd0RBRVM7UUFGRCxJQUFJLEVBQUMsUUFBUTtRQUFDLEtBQUssRUFBQyxpQkFBaUI7UUFBRSxPQUFLLGtDQUFRLGtCQUFTO1NBQUssS0FFMUU7TUFDQSx3REFVUztRQVRQLEtBQUssRUFBQyxtQ0FBbUM7UUFDekMsSUFBSSxFQUFDLFFBQVE7UUFDWixFQUFFLEVBQUUsbUJBQVU7UUFDZixnQkFBYyxFQUFDLFVBQVU7UUFDekIsb0JBQWtCLEVBQUMsTUFBTTtRQUN6QixlQUFhLEVBQUMsT0FBTzs7TUFLdkIsd0RBV0s7UUFYRCxLQUFLLEVBQUMsZUFBZTtRQUFFLGlCQUFlLEVBQUUsbUJBQVU7OytEQUNwRCx3REFTVyxpR0FUYSxVQUFJLEdBQVgsR0FBRztvRUFDbEIsd0RBT0s7aUJBUjZCLEdBQUcsQ0FBQyxJQUFJOztZQUV4Qyx3REFLQztjQUpDLEtBQUssRUFBQyxlQUFlO2NBQ3BCLE9BQUssMkRBQWdCLGtCQUFTLENBQUMsR0FBRyxDQUFDLElBQUk7Y0FDeEMsSUFBSSxFQUFDLEdBQUc7b0VBQ0osR0FBRyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NERFdkJ6QixpREFBb0Q7SUFBeEMsV0FBVyxFQUFFLG9CQUFXO0lBQUUsR0FBRyxFQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUVDL0MsS0FBSyxFQUFDLDBCQUEwQjtFQUNoQyxRQUFRLEVBQUMsSUFBSTtFQUNiLGlCQUFlLEVBQUMsYUFBYTtFQUM3QixhQUFXLEVBQUMsTUFBTTtFQUNsQixHQUFHLEVBQUMsZUFBZTs7cUJBRWQsS0FBSyxFQUFDLCtDQUErQztxQkFDbkQsS0FBSyxFQUFDLGVBQWU7cUJBQ25CLEtBQUssRUFBQyxjQUFjOztFQUNuQixLQUFLLEVBQUMsYUFBYTtFQUFDLEVBQUUsRUFBQyxhQUFhOztxQkFJckMsS0FBSyxFQUFDLFlBQVk7Z0NBQ3ZCLHdEQVNNLFNBVEQsS0FBSyxFQUFDLGNBQWM7ZUFDdkIsd0RBT1M7SUFOUCxFQUFFLEVBQUMscUJBQXFCO0lBQ3hCLElBQUksRUFBQyxxQkFBcUI7SUFDMUIsS0FBSyxFQUFDLDhCQUE4QjtJQUNwQyxLQUFLLEVBQUMsUUFBUTtLQUNmLFNBRUQ7Ozs7NERBdkJSLHdEQTJCTSxPQTNCTixVQTJCTTtJQXBCSix3REFtQk0sT0FuQk4sVUFtQk07TUFsQkosd0RBaUJNLE9BakJOLFVBaUJNO1FBaEJKLHdEQUlNLE9BSk4sVUFJTTtVQUhKLHdEQUVLLE1BRkwsVUFFSztZQURILGdEQUFxQjs7O1FBR3pCLHdEQUFrRCxPQUFsRCxVQUFrRDtVQUExQixnREFBb0I7O1FBQzVDLFVBU007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRERXhCWixpREFBb0Q7SUFBeEMsV0FBVyxFQUFFLG9CQUFXO0lBQUUsR0FBRyxFQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0REVBakQsaURBQW9EO0lBQXhDLFdBQVcsRUFBRSxvQkFBVztJQUFFLEdBQUcsRUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NERFQWpELGlEQUFpRDtJQUFyQyxZQUFZLEVBQUUsYUFBTztJQUFFLEdBQUcsRUFBQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUZFQzNCLFFBQU07O0VBRWhCLEtBQUssRUFBQyxRQUFRO0VBQUMsR0FBRyxFQUFDLFFBQVE7Ozs7Ozs0REFIcEMsaURBS1k7SUFMQSxXQUFXLEVBQUUsS0FBSztJQUFFLEdBQUcsRUFBQyxPQUFPOztJQUM5QixLQUFLLCtDQUFDLENBQU07OztJQUNaLElBQUksK0NBQ2IsQ0FBbUM7TUFBbkMsd0RBQW1DLE9BQW5DLFVBQW1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VFSGxDLFlBQVUsRUFBQyw2QkFBNkI7O3FCQUN2QyxLQUFLLEVBQUMsWUFBWTs7O1VBRDRCLGVBQVE7eURBQTVELHdEQVdNLE9BWE4sVUFXTTtRQVZKLHdEQVNLLE1BVEwsVUFTSztVQVJILHdEQUlLO1lBSkEsS0FBSyxzREFBRSxlQUFRLENBQUMsSUFBSTs7WUFDdkIsd0RBRUk7Y0FGRCxJQUFJLEVBQUMsR0FBRztjQUFFLE9BQUssNkZBQVUsNkRBQWU7Y0FBRSxLQUFLLEVBQUMsV0FBVztlQUFDLFlBRS9EOztVQUVGLHdEQUVLO1lBRkEsS0FBSyxzREFBRSxlQUFRLENBQUMsSUFBSTs7WUFDdkIsd0RBQXFFO2NBQWxFLElBQUksRUFBQyxHQUFHO2NBQUUsT0FBSyw2RkFBVSxxREFBVztjQUFFLEtBQUssRUFBQyxXQUFXO2VBQUMsUUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRERVJ2RSxpREFBa0MsdUlBQVYsV0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NERFQTlCLGlEQUFrQyx1SUFBVixXQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkVHckIsS0FBSyxFQUFDLGtCQUFrQjtxQkFDcEIsS0FBSyxFQUFDLG1CQUFtQjtnQ0FDOUIsd0RBT1E7ZUFOTix3REFLSztpQkFKSCx3REFBYSxZQUFULE1BQUk7aUJBQ1Isd0RBQWMsWUFBVixPQUFLO2lCQUNULHdEQUFhLFlBQVQsTUFBSTtpQkFDUix3REFBaUIsWUFBYixVQUFROzs7Ozs7Ozs7OzREQVZ4QixpREF5Q2lCLHVJQXpDTyxXQUFNO0lBQ2pCLElBQUksK0NBQUMsQ0FDUjsyREFEUSxTQUNSLHdEQUFHLFVBQUksQ0FBQyxXQUFXLElBQUcsR0FDNUI7TUFBQSx3REE4Qk0sT0E5Qk4sVUE4Qk07UUE3Qkosd0RBNEJRLFNBNUJSLFVBNEJRO1VBM0JOLFVBT1E7VUFDUix3REFrQlE7bUVBakJOLHdEQWdCSyxpR0FoQmMsVUFBSSxDQUFDLEtBQUssR0FBbEIsSUFBSTt3RUFBZix3REFnQks7Z0JBaEIyQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7O2lCQUMzQixJQUFJO3VFQUFwQix3REFNVztzQkFMVCx3REFBeUMsaUVBQWxDLElBQUksQ0FBQyxLQUFLO3NCQUNqQix3REFFSzt3QkFESCx3REFBbUQ7MEJBQS9DLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0ZBQUssSUFBSSxDQUFDLEtBQUs7O3NCQUU5Qyx3REFBOEIsaUVBQXZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7O2lCQUVSLElBQUk7dUVBQXBCLHdEQU1XO3NCQUxULHdEQUF3QyxpRUFBakMsSUFBSSxDQUFDLElBQUk7c0JBQ2hCLHdEQUVLO3dCQURILHdEQUFrRDswQkFBOUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnRkFBSyxJQUFJLENBQUMsS0FBSzs7c0JBRTdDLHdEQUE2QixpRUFBdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7Z0JBRXZCLHdEQUE0QixpRUFBckIsSUFBSSxDQUFDLFFBQVE7Ozs7OztPQU1wQixVQUFJLENBQUMsUUFBUTs2REFEckIsaURBS0U7O1lBSEMsTUFBSSxFQUFFLGtCQUFTO1lBQ2YsVUFBUSxFQUFFLHNCQUFhO1lBQ3ZCLFFBQVEsRUFBRSxVQUFJLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkVuQ3JCLEtBQUssRUFBQyxrQkFBa0I7cUJBQ3BCLEtBQUssRUFBQyxtQkFBbUI7Z0NBQzlCLHdEQU9RO2VBTk4sd0RBS0s7aUJBSkgsd0RBQWEsWUFBVCxNQUFJO2lCQUNSLHdEQUFjLFlBQVYsT0FBSztpQkFDVCx3REFBYSxZQUFULE1BQUk7aUJBQ1Isd0RBQWlCLFlBQWIsVUFBUTs7Ozs7Ozs7Ozs0REFWeEIsaURBeUNpQix1SUF6Q08sV0FBTTtJQUNqQixJQUFJLCtDQUFDLENBQ1I7MkRBRFEsU0FDUix3REFBRyxVQUFJLENBQUMsV0FBVyxJQUFHLEdBQzVCO01BQUEsd0RBOEJNLE9BOUJOLFVBOEJNO1FBN0JKLHdEQTRCUSxTQTVCUixVQTRCUTtVQTNCTixVQU9RO1VBQ1Isd0RBa0JRO21FQWpCTix3REFnQkssaUdBaEJjLFVBQUksQ0FBQyxLQUFLLEdBQWxCLElBQUk7d0VBQWYsd0RBZ0JLO2dCQWhCMkIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHOztpQkFDM0IsSUFBSTt1RUFBcEIsd0RBTVc7c0JBTFQsd0RBQXlDLGlFQUFsQyxJQUFJLENBQUMsS0FBSztzQkFDakIsd0RBRUs7d0JBREgsd0RBQW1EOzBCQUEvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dGQUFLLElBQUksQ0FBQyxLQUFLOztzQkFFOUMsd0RBQThCLGlFQUF2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7OztpQkFFUixJQUFJO3VFQUFwQix3REFNVztzQkFMVCx3REFBd0MsaUVBQWpDLElBQUksQ0FBQyxJQUFJO3NCQUNoQix3REFFSzt3QkFESCx3REFBa0Q7MEJBQTlDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0ZBQUssSUFBSSxDQUFDLEtBQUs7O3NCQUU3Qyx3REFBNkIsaUVBQXRCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTs7O2dCQUV2Qix3REFBNEIsaUVBQXJCLElBQUksQ0FBQyxRQUFROzs7Ozs7T0FNcEIsVUFBSSxDQUFDLFFBQVE7NkRBRHJCLGlEQUtFOztZQUhDLE1BQUksRUFBRSxrQkFBUztZQUNmLFVBQVEsRUFBRSxzQkFBYTtZQUN2QixRQUFRLEVBQUUsVUFBSSxDQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJFbkNyQixLQUFLLEVBQUMsa0JBQWtCO3FCQUNwQixLQUFLLEVBQUMsbUJBQW1CO2dDQUM5Qix3REFNUTtlQUxOLHdEQUlLO2lCQUhILHdEQUFhLFlBQVQsTUFBSTtpQkFDUix3REFBYyxZQUFWLE9BQUs7aUJBQ1Qsd0RBQWlCLFlBQWIsVUFBUTs7Ozs7Ozs7NERBVHhCLGlEQTRCaUIsdUlBNUJPLFdBQU07SUFDakIsSUFBSSwrQ0FBQyxDQUNSOzJEQURRLFNBQ1Isd0RBQUcsVUFBSSxDQUFDLFdBQVcsSUFBRyxHQUM1QjtNQUFBLHdEQWlCTSxPQWpCTixVQWlCTTtRQWhCSix3REFlUSxTQWZSLFVBZVE7VUFkTixVQU1RO1VBQ1Isd0RBTVE7bUVBTE4sd0RBSUssaUdBSmMsVUFBSSxDQUFDLEtBQUssR0FBbEIsSUFBSTt3RUFBZix3REFJSztnQkFKMkIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHOztnQkFDM0Msd0RBQTZCLGlFQUF0QixJQUFJLENBQUMsU0FBUztnQkFDckIsd0RBQXlCLGlFQUFsQixJQUFJLENBQUMsS0FBSztnQkFDakIsd0RBQTRCLGlFQUFyQixJQUFJLENBQUMsUUFBUTs7Ozs7O09BTXBCLFVBQUksQ0FBQyxRQUFROzZEQURyQixpREFLRTs7WUFIQyxNQUFJLEVBQUUsa0JBQVM7WUFDZixVQUFRLEVBQUUsc0JBQWE7WUFDdkIsUUFBUSxFQUFFLFVBQUksQ0FBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFRXZCckIsS0FBSyxFQUFDLDRCQUE0QjtFQUFDLGFBQVcsRUFBQyxNQUFNOzs7Ozs7OzREQUY5RCxpREFZaUIsdUlBWk8sV0FBTTtJQUNqQixHQUFHLCtDQUNaLENBS007TUFMTix3REFLTSxPQUxOLFVBS007UUFKSix3REFHRTtVQUZBLEtBQUssRUFBQyxzQkFBc0I7VUFDM0IsS0FBSyxvRkFBZ0MsRUFBRSxDQUFDLFNBQVM7Ozs7SUFJN0MsSUFBSSwrQ0FDYixDQUFvRDtNQUFwRCx3REFBb0Q7UUFBaEQsSUFBSSxFQUFFLFlBQUssQ0FBQyxTQUFTOzhEQUFLLFlBQUssQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkVWNUMsS0FBSyxFQUFDLE1BQU07OztFQUdSLEtBQUssRUFBQyw0QkFBNEI7Ozs7O0VBT3BDLEtBQUssRUFBQyxXQUFXOztxQkFDZixLQUFLLEVBQUMsV0FBVzs7Ozs7OzREQVgxQix3REFpQk0sT0FqQk4sVUFpQk07SUFoQkosaURBQWlDLHNJQUFWLFdBQU07SUFDN0IsZ0RBT08sd0JBUFAsQ0FPTztPQU55QyxZQUFLLENBQUMsS0FBSzs2REFBekQsd0RBS00sT0FMTixVQUtNO1lBSkosd0RBR0U7Y0FGQyxHQUFHLEVBQUUsWUFBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7Y0FDdEMsR0FBRyxFQUFFLFlBQUssQ0FBQyxjQUFjOzs7OztLQUlILE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBSyxFQUFFLE1BQU07MkRBQXRELHdEQU1NLE9BTk4sVUFNTTtVQUxKLHdEQUlNLE9BSk4sVUFJTTtZQUhKLGdEQUVPLHlCQUZQLENBRU87ZUFETSxZQUFLLENBQUMsSUFBSTtxRUFBckIsd0RBQWtEOztvQkFBM0IsU0FBd0IsRUFBaEIsWUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJFYmxELEtBQUssRUFBQyxZQUFZO3FCQUNmLEtBQUssRUFBQyx1Q0FBdUM7OztFQUd4QyxLQUFLLEVBQUMsK0JBQStCOzs7OzREQUpqRCx3REFPSyxNQVBMLFVBT0s7SUFOSCx3REFLTSxPQUxOLFVBS007Z0hBSkQsWUFBSyxDQUFDLEtBQUssSUFBRyxHQUNqQjtRQUFpQixZQUFLLENBQUMsVUFBVTs2REFDL0Isd0RBQWlFLFFBQWpFLFVBQWlFLEVBQXJCLGdCQUFjOzs7Ozs7Ozs7Ozs7OztBcUJMbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmdDO0FBQ0o7QUFDcUM7QUFDaEM7QUFDRztBQUNhOztBQUVqRCxZQUFZLDhDQUFTLENBQUMsZ0RBQUc7QUFDekIsUUFBUSxrREFBUTtBQUNoQixTQUFTLHdEQUFhO0FBQ3RCLGFBQWEsK0RBQW9CO0FBQ2pDLENBQUM7QUFDRCxjQUFjLGtEQUFXO0FBQ3pCLGFBQWEsT0FBTztBQUNwQixnQkFBZ0Isd0RBQWE7QUFDN0IsQ0FBQzs7QUFFRDtBQUNBLFFBQVEsOERBQVU7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkEsaUVBQWU7QUFDZjtBQUNBO0FBQ0Esb0JBQW9CLDRHQUEyRDtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrQztBQUNBOztBQUU3Qiw2QkFBNkIsa0RBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRLGlEQUFHLEtBQUs7QUFDL0IsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0IsR0FBRztBQUNILGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxxQkFBcUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxxQkFBcUI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsbUJBQW1CO0FBQ3hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1CQUFtQjtBQUN4QztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRzs7QUFFMUI7QUFDQSxtQkFBbUIsbURBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbURBQVk7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qi9DO0FBQ0E7QUFDQSxNQUFNLHlCQUF5QjtBQUMvQixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3Qjs7QUFFQTtBQUNBLHNDQUFzQyx5QkFBeUIsS0FBSztBQUNwRTs7QUFFQTtBQUNBOztBQUVxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL0FwcC52dWU/YTUxMCIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzL0Jsb2NrQ29udHJvbHMudnVlPzFjZWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Db250cm9scy9Db2xDb250cm9scy52dWU/NTg1YSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzL1Jvd0NvbnRyb2xzLnZ1ZT81OTY1Iiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0Jhc2VNb2RhbC52dWU/YTgxYyIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvVmlkZW9CbG9jay52dWU/YzQwMyIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrU3RydWN0dXJlLnZ1ZT8xNmM2Iiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL0FwcC52dWU/YjUxMSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9BcHAudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQmxvY2tSZW5kZXJlci52dWU/NThkMCIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0Jsb2NrUmVuZGVyZXIudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQ29udHJvbHMvQmxvY2tDb250cm9scy52dWU/YjBlOCIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzL0Jsb2NrQ29udHJvbHMudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQ29udHJvbHMvQ29sQ29udHJvbHMudnVlPzBmN2EiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Db250cm9scy9Db2xDb250cm9scy52dWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Db250cm9scy9Sb3dDb250cm9scy52dWU/ZWRkOSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzL1Jvd0NvbnRyb2xzLnZ1ZSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9BZGRCbG9ja01vZGFsLnZ1ZT9hNTUxIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0FkZEJsb2NrTW9kYWwudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0Jhc2VNb2RhbC52dWU/MTdjNyIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9CYXNlTW9kYWwudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0RlbGV0ZUJsb2NrTW9kYWwudnVlPzY5NzUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Nb2RhbHMvRGVsZXRlQmxvY2tNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Nb2RhbHMvRWRpdEJsb2NrTW9kYWwudnVlPzU5YTIiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Nb2RhbHMvRWRpdEJsb2NrTW9kYWwudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0luZm9CbG9ja01vZGFsLnZ1ZT8yM2U5Iiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0luZm9CbG9ja01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9VcGxvYWRNb2RhbC52dWU/MDFlZiIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9VcGxvYWRNb2RhbC52dWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZT9iNWI3Iiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0Jsb2NrLnZ1ZT83YzYzIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9CbG9jay52dWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0Jsb2NrRmFsbGJhY2tWaWV3LnZ1ZT8xYTJjIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9CbG9ja0ZhbGxiYWNrVmlldy52dWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0ZpbGVMaXN0aW5nQmxvY2sudnVlPzgwZjciLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0ZpbGVMaXN0aW5nQmxvY2sudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9JbWFnZUxpc3RpbmdCbG9jay52dWU/ODhjMiIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvSW1hZ2VMaXN0aW5nQmxvY2sudnVlIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9OZXdzTGlzdGluZ0Jsb2NrLnZ1ZT8wNmQ4Iiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9OZXdzTGlzdGluZ0Jsb2NrLnZ1ZSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvVmlkZW9CbG9jay52dWU/ZWJlYiIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvVmlkZW9CbG9jay52dWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9zdGFuZGFyZC9CbG9ja1N0cnVjdHVyZS52dWU/OGViMSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrU3RydWN0dXJlLnZ1ZSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrVGl0bGUudnVlP2QwNDAiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9zdGFuZGFyZC9CbG9ja1RpdGxlLnZ1ZSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9BcHAudnVlPzAyOTQiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9CbG9ja1JlbmRlcmVyLnZ1ZT85NTJiIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQ29udHJvbHMvQmxvY2tDb250cm9scy52dWU/MmVjZCIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzL0NvbENvbnRyb2xzLnZ1ZT83YjRhIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQ29udHJvbHMvUm93Q29udHJvbHMudnVlP2NjNWUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Nb2RhbHMvQWRkQmxvY2tNb2RhbC52dWU/NmEyMSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9CYXNlTW9kYWwudnVlPzA4ZjQiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Nb2RhbHMvRGVsZXRlQmxvY2tNb2RhbC52dWU/MzE4NiIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9FZGl0QmxvY2tNb2RhbC52dWU/MDVmNCIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9JbmZvQmxvY2tNb2RhbC52dWU/YWY5MyIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9VcGxvYWRNb2RhbC52dWU/ZDI1YSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlPzA0ZTYiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0Jsb2NrLnZ1ZT9lM2FjIiwid2VicGFjazovL3NpbXBsZWxheW91dC8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9CbG9ja0ZhbGxiYWNrVmlldy52dWU/YjE0YiIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvRmlsZUxpc3RpbmdCbG9jay52dWU/NzZhMSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvSW1hZ2VMaXN0aW5nQmxvY2sudnVlPzBlODciLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL05ld3NMaXN0aW5nQmxvY2sudnVlP2IyN2MiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL1ZpZGVvQmxvY2sudnVlPzljZjQiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9zdGFuZGFyZC9CbG9ja1N0cnVjdHVyZS52dWU/NDhhYSIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrVGl0bGUudnVlP2FhOTUiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzLyBzeW5jIFxcLnZ1ZSQiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9zaW1wbGVsYXlvdXQvLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9wbHVnaW5zL0Jsb2NrVmlld3MuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vc2ltcGxlbGF5b3V0Ly4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvdm9jYWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2FwcCAuc2wtY29sIHtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMDAwMDAwO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxufVxcbiNhcHAgLnNsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNhcHAgLnNsLWNvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNhcHAgLnNsLWJsb2NrIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxufVxcbiNhcHAgLnNsLWJsb2NrOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4ICMwMDAwMDA7XFxufVxcbi5idG4teHMge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG4uZ2hvc3Qtc2wtYmxvY2sge1xcbiAgb3BhY2l0eTogMC41O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuLnNsLWRyYWdnYWJsZS1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uc2wtYmxvY2stZHJhZ2dpbmcge1xcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLnNsLWJsb2NrLWRyYWdnaW5nID4gKiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jYXBwIC5zbC1jb250YWluZXIuc2wtZHJhZ2dpbmcgLnNsLWJsb2NrIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMXB4ICMwMDAwMDA7XFxufVxcbiNhcHAgLnNsLWNvbnRhaW5lci5zbC1kcmFnZ2luZyAuc2wtYmxvY2suc2wtYmxvY2stcGxhY2Vob2xkZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuI2FwcCAuc2wtY29udGFpbmVyLnNsLWRyYWdnaW5nIC5zbC1jb2wge1xcbiAgbWluLWhlaWdodDogMTQwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL0FwcC52dWVcIixcIndlYnBhY2s6Ly8uL0FwcC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUU7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDSEo7QURNRTtFQUNFLGtCQUFBO0FDSko7QURPRTtFQUNFLGtCQUFBO0FDTEo7QURPRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTEo7QURNSTtFQUNFLCtCQUFBO0FDSk47QURRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDTEY7QURRQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDTEY7QURRQTtFQUNFLFlBQUE7QUNMRjtBRFFBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDTEY7QURNRTtFQUNFLGFBQUE7QUNKSjtBRFNFO0VBQ0UsK0JBQUE7QUNOSjtBRE9JO0VBQ0UsYUFBQTtBQ0xOO0FEUUU7RUFDRSxpQkFBQTtBQ05KXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiNhcHAge1xcbiAgLnNsLXJvdyB7XFxuICB9XFxuICAuc2wtY29sIHtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICMwMDAwMDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgfVxcblxcbiAgLnNsLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gIC5zbC1jb2wge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICAuc2wtYmxvY2sge1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggIzAwMDAwMDtcXG4gICAgfVxcbiAgfVxcbn1cXG4uYnRuLXhzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmdob3N0LXNsLWJsb2NrIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5zbC1kcmFnZ2FibGUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNsLWJsb2NrLWRyYWdnaW5nIHtcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICA+ICoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4jYXBwIC5zbC1jb250YWluZXIuc2wtZHJhZ2dpbmcge1xcbiAgLnNsLWJsb2NrIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggIzAwMDAwMDtcXG4gICAgJi5zbC1ibG9jay1wbGFjZWhvbGRlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgfVxcbiAgLnNsLWNvbCB7XFxuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbiAgfVxcbn1cXG5cIixcIiNhcHAgLnNsLWNvbCB7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgIzAwMDAwMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG4jYXBwIC5zbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jYXBwIC5zbC1jb2wge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jYXBwIC5zbC1ibG9jayB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG4jYXBwIC5zbC1ibG9jazpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCAjMDAwMDAwO1xcbn1cXG5cXG4uYnRuLXhzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmdob3N0LXNsLWJsb2NrIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5zbC1kcmFnZ2FibGUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNsLWJsb2NrLWRyYWdnaW5nIHtcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5zbC1ibG9jay1kcmFnZ2luZyA+ICoge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FwcCAuc2wtY29udGFpbmVyLnNsLWRyYWdnaW5nIC5zbC1ibG9jayB7XFxuICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCAjMDAwMDAwO1xcbn1cXG4jYXBwIC5zbC1jb250YWluZXIuc2wtZHJhZ2dpbmcgLnNsLWJsb2NrLnNsLWJsb2NrLXBsYWNlaG9sZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNhcHAgLnNsLWNvbnRhaW5lci5zbC1kcmFnZ2luZyAuc2wtY29sIHtcXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2wtYWRkLWJsb2NrLWNvbnRyb2xzIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5zbC1hZGQtYmxvY2stY29udHJvbHMgLmNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLnNsLWFkZC1ibG9jay1jb250cm9scyAuc2wtbW92ZS1idXR0b24ge1xcbiAgZmxleDogMSAwIGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQ29udHJvbHMvQmxvY2tDb250cm9scy52dWVcIixcIndlYnBhY2s6Ly8uL0Jsb2NrQ29udHJvbHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBT0UsVUFBQTtBQ05GO0FEQUU7RUFDRSx1QkFBQTtBQ0VKO0FEQUU7RUFDRSxjQUFBO0FDRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnNsLWFkZC1ibG9jay1jb250cm9scyB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICAuc2wtbW92ZS1idXR0b24ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gIH1cXG4gIHotaW5kZXg6IDE7XFxufVxcblwiLFwiLnNsLWFkZC1ibG9jay1jb250cm9scyB7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uc2wtYWRkLWJsb2NrLWNvbnRyb2xzIC5jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5zbC1hZGQtYmxvY2stY29udHJvbHMgLnNsLW1vdmUtYnV0dG9uIHtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2wtY29sLWNvbnRyb2xzIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2wtY29sLWNvbnRyb2xzID4gLmJ0bi1ncm91cCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHRvcDogMjUlO1xcbn1cXG4uc2wtY29sLWNvbnRyb2xzLnJpZ2h0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogYXV0bztcXG59XFxuLnNsLWNvbC1jb250cm9scyAuc2wtY29sLWFkZC1idXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuLnNsLXJlbW92ZS1jb2wtY29udHJvbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB6LWluZGV4OiAxO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2wtcm93OmhvdmVyIC5zbC1jb2wtY29udHJvbHMsXFxuLnNsLXJvdzpob3ZlciAuc2wtcmVtb3ZlLWNvbC1jb250cm9scyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzL0NvbENvbnRyb2xzLnZ1ZVwiLFwid2VicGFjazovLy4vQ29sQ29udHJvbHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7QUNDSjtBREVFO0VBQ0UsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLFVBQUE7QUNESjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0ZGO0FETUU7O0VBRUUsbUJBQUE7QUNISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uc2wtY29sLWNvbnRyb2xzIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgPiAuYnRuLWdyb3VwIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHRvcDogMjUlO1xcbiAgfVxcblxcbiAgJi5yaWdodCB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IGF1dG87XFxuICB9XFxuXFxuICAuc2wtY29sLWFkZC1idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5cXG4uc2wtcmVtb3ZlLWNvbC1jb250cm9scyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBib3R0b206IDEwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHotaW5kZXg6IDE7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5zbC1yb3c6aG92ZXIge1xcbiAgLnNsLWNvbC1jb250cm9scyxcXG4gIC5zbC1yZW1vdmUtY29sLWNvbnRyb2xzIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG59XFxuXCIsXCIuc2wtY29sLWNvbnRyb2xzIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uc2wtY29sLWNvbnRyb2xzID4gLmJ0bi1ncm91cCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHRvcDogMjUlO1xcbn1cXG4uc2wtY29sLWNvbnRyb2xzLnJpZ2h0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogYXV0bztcXG59XFxuLnNsLWNvbC1jb250cm9scyAuc2wtY29sLWFkZC1idXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNsLXJlbW92ZS1jb2wtY29udHJvbHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogNTAlO1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICB6LWluZGV4OiAxO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uc2wtcm93OmhvdmVyIC5zbC1jb2wtY29udHJvbHMsXFxuLnNsLXJvdzpob3ZlciAuc2wtcmVtb3ZlLWNvbC1jb250cm9scyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2wtYWRkLXJvdy1jb250cm9scyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5zbC1hZGQtcm93LWNvbnRyb2xzID4gLmJ0bi1ncm91cCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLThweDtcXG59XFxuLnNsLWFkZC1yb3ctY29udHJvbHMgPiAuYnRuLWdyb3VwIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxufVxcbi5zbC1hZGQtcm93LWNvbnRyb2xzID4gLmJ0bi1ncm91cCBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgd2lkdGg6IDUwcHg7XFxufVxcbi5zbC1jb250YWluZXI6aG92ZXIgLnNsLWFkZC1yb3ctY29udHJvbHMge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Db250cm9scy9Sb3dDb250cm9scy52dWVcIixcIndlYnBhY2s6Ly8uL1Jvd0NvbnRyb2xzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGtCQUFBO0FDQUY7QURFRTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQU47QURFTTtFQUNFLFdBQUE7QUNBUjtBRE1FO0VBQ0UsbUJBQUE7QUNISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uc2wtYWRkLXJvdy1jb250cm9scyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICA+IC5idG4tZ3JvdXAge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtOHB4O1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuXFxuICAgICAgJjpmaXJzdC1jaGlsZCB7XFxuICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuLnNsLWNvbnRhaW5lcjpob3ZlciB7XFxuICAuc2wtYWRkLXJvdy1jb250cm9scyB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcblwiLFwiLnNsLWFkZC1yb3ctY29udHJvbHMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2wtYWRkLXJvdy1jb250cm9scyA+IC5idG4tZ3JvdXAge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC04cHg7XFxufVxcbi5zbC1hZGQtcm93LWNvbnRyb2xzID4gLmJ0bi1ncm91cCBidXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbn1cXG4uc2wtYWRkLXJvdy1jb250cm9scyA+IC5idG4tZ3JvdXAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG5cXG4uc2wtY29udGFpbmVyOmhvdmVyIC5zbC1hZGQtcm93LWNvbnRyb2xzIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbC1iYXNlLW1vZGFsIHtcXG4gIHotaW5kZXg6IDEwNTEgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9Nb2RhbHMvQmFzZU1vZGFsLnZ1ZVwiLFwid2VicGFjazovLy4vQmFzZU1vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLHdCQUFBO0FDQUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnNsLWJhc2UtbW9kYWwge1xcbiAgei1pbmRleDogMTA1MSAhaW1wb3J0YW50O1xcbn1cXG5cIixcIi5zbC1iYXNlLW1vZGFsIHtcXG4gIHotaW5kZXg6IDEwNTEgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNsLXBsYWNlaG9sZGVyLXZpZGVvIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9WaWRlb0Jsb2NrLnZ1ZVwiLFwid2VicGFjazovLy4vVmlkZW9CbG9jay52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ0FGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5zbC1wbGFjZWhvbGRlci12aWRlbyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cIixcIi5zbC1wbGFjZWhvbGRlci12aWRlbyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2wtY2FyZC1pbWFnZSB7XFxuICBhc3BlY3QtcmF0aW86IDE2LzEwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnMtZ3JheS0yMDApO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9zdGFuZGFyZC9CbG9ja1N0cnVjdHVyZS52dWVcIixcIndlYnBhY2s6Ly8uL0Jsb2NrU3RydWN0dXJlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0FGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5zbC1jYXJkLWltYWdlIHtcXG4gIGFzcGVjdC1yYXRpbzogMTYgLyAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMjAwKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiLFwiLnNsLWNhcmQtaW1hZ2Uge1xcbiAgYXNwZWN0LXJhdGlvOiAxNi8xMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJzLWdyYXktMjAwKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5N2E2ZjJkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Njk3YTZmMmQmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL21hZXRodS93ZWJjbG91ZDcvd2NzLnNpbXBsZWxheW91dC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwid2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvQXBwLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2OTdhNmYyZFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzY5N2E2ZjJkJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNjk3YTZmMmQnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3YTZmMmRcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNjk3YTZmMmQnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiA6Y2xhc3M9XCJgc2wtY29udGFpbmVyICR7ZHJhZ2dpbmdDbGFzc31gXCI+XG4gICAgPHRlbXBsYXRlXG4gICAgICB2LWZvcj1cIihyb3csIHJvd0luZGV4KSBpbiBzbC5sYXlvdXRzLml0ZW1zXCJcbiAgICAgIDprZXk9XCJgbGF5b3V0XyR7cm93SW5kZXh9YFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cInNsLXJvd1wiPlxuICAgICAgICA8Um93Q29udHJvbHMgOmluZGV4PVwicm93SW5kZXhcIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB2LWZvcj1cIihjb2x1bW4sIGNvbHVtbkluZGV4KSBpbiByb3cuaXRlbXNcIlxuICAgICAgICAgICAgOmtleT1cImBjb2x1bW5fJHtjb2x1bW5JbmRleH1fJHtyb3dJbmRleH1gXCJcbiAgICAgICAgICAgIDpjbGFzcz1cImBzbC1jb2wgY29sIGNvbC0ke2NvbHVtbi53aWR0aH1gXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29sQ29udHJvbHNcbiAgICAgICAgICAgICAgOnJvd0luZGV4PVwicm93SW5kZXhcIlxuICAgICAgICAgICAgICA6Y29sSW5kZXg9XCJjb2x1bW5JbmRleFwiXG4gICAgICAgICAgICAgIDpjdXJyZW50V2lkdGg9XCJwYXJzZUludChjb2x1bW4ud2lkdGgpXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgICAgdi1iaW5kPVwiZHJhZ09wdGlvbnNcIlxuICAgICAgICAgICAgICA6bGlzdD1cImNvbHVtbi5pdGVtc1wiXG4gICAgICAgICAgICAgIDppdGVtS2V5PVwiKGl0ZW0pID0+IGVsZW1lbnRcIlxuICAgICAgICAgICAgICBAZW5kPVwic2F2ZUxheW91dFwiXG4gICAgICAgICAgICAgIEBzdGFydD1cInN0YXJ0RHJhZ2dpbmdCbG9ja1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cInsgZWxlbWVudCwgaW5kZXggfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbC1ibG9ja1wiIHYtaWY9XCJlbGVtZW50IGluIHNsLmJsb2Nrc1wiPlxuICAgICAgICAgICAgICAgICAgPEJsb2NrUmVuZGVyZXJcbiAgICAgICAgICAgICAgICAgICAgOmFjdGlvbnM9XCJhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgOmJsb2NrPVwic2wuYmxvY2tzW2VsZW1lbnRdXCJcbiAgICAgICAgICAgICAgICAgICAgOnJvd0luZGV4PVwicm93SW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICA6Y29sdW1uSW5kZXg9XCJjb2x1bW5JbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIDpibG9ja0luZGV4PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInNsLWJsb2NrIHNsLWJsb2NrLXBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb2x1bW4uaXRlbXMubGVuZ3RoID09PSAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QmxvY2tSZW5kZXJlclxuICAgICAgICAgICAgICAgICAgICA6YWN0aW9ucz1cImFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA6YmxvY2s9XCJ7fVwiXG4gICAgICAgICAgICAgICAgICAgIDpyb3dJbmRleD1cInJvd0luZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgOmNvbHVtbkluZGV4PVwiY29sdW1uSW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICA6YmxvY2tJbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2RyYWdnYWJsZT5cblxuICAgICAgICAgICAgPENvbENvbnRyb2xzXG4gICAgICAgICAgICAgIHYtaWY9XCJyb3cuaXRlbXMubGVuZ3RoID09PSBjb2x1bW5JbmRleCArIDFcIlxuICAgICAgICAgICAgICA6cm93SW5kZXg9XCJyb3dJbmRleFwiXG4gICAgICAgICAgICAgIDpjb2xJbmRleD1cImNvbHVtbkluZGV4ICsgMVwiXG4gICAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFJvd0NvbnRyb2xzXG4gICAgICAgICAgdi1pZj1cInNsLmxheW91dHMuaXRlbXMubGVuZ3RoID09PSByb3dJbmRleCArIDFcIlxuICAgICAgICAgIDppbmRleD1cInJvd0luZGV4ICsgMVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3RlbXBsYXRlPlxuICA8L2Rpdj5cbiAgPEFkZEJsb2NrTW9kYWwgcmVmPVwiYWRkLW1vZGFsXCIgLz5cbiAgPEVkaXRCbG9ja01vZGFsIHJlZj1cImVkaXQtbW9kYWxcIiAvPlxuICA8RGVsZXRlQmxvY2tNb2RhbCByZWY9XCJkZWxldGUtbW9kYWxcIiAvPlxuICA8SW5mb0Jsb2NrTW9kYWwgcmVmPVwiaW5mby1tb2RhbFwiIC8+XG4gIDxVcGxvYWRNb2RhbCByZWY9XCJ1cGxvYWQtbW9kYWxcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCbG9ja1JlbmRlcmVyIGZyb20gXCJAL2NvbXBvbmVudHMvQmxvY2tSZW5kZXJlci52dWVcIjtcbmltcG9ydCBSb3dDb250cm9scyBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRyb2xzL1Jvd0NvbnRyb2xzLnZ1ZVwiO1xuaW1wb3J0IENvbENvbnRyb2xzIGZyb20gXCJAL2NvbXBvbmVudHMvQ29udHJvbHMvQ29sQ29udHJvbHMudnVlXCI7XG5pbXBvcnQgeyB1c2VTaW1wbGVsYXlvdXRTdG9yZSB9IGZyb20gXCJAL3N0b3JlLmpzXCI7XG5pbXBvcnQgQWRkQmxvY2tNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFscy9BZGRCbG9ja01vZGFsLnZ1ZVwiO1xuaW1wb3J0IEVkaXRCbG9ja01vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWxzL0VkaXRCbG9ja01vZGFsLnZ1ZVwiO1xuaW1wb3J0IERlbGV0ZUJsb2NrTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbHMvRGVsZXRlQmxvY2tNb2RhbC52dWVcIjtcbmltcG9ydCBJbmZvQmxvY2tNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFscy9JbmZvQmxvY2tNb2RhbC52dWVcIjtcbmltcG9ydCBVcGxvYWRNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFscy9VcGxvYWRNb2RhbC52dWVcIjtcbmltcG9ydCBkcmFnZ2FibGUgZnJvbSBcInZ1ZWRyYWdnYWJsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBCbG9ja1JlbmRlcmVyLFxuICAgIFJvd0NvbnRyb2xzLFxuICAgIENvbENvbnRyb2xzLFxuICAgIEFkZEJsb2NrTW9kYWwsXG4gICAgRWRpdEJsb2NrTW9kYWwsXG4gICAgRGVsZXRlQmxvY2tNb2RhbCxcbiAgICBJbmZvQmxvY2tNb2RhbCxcbiAgICBVcGxvYWRNb2RhbCxcbiAgICBkcmFnZ2FibGUsXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHNsID0gdXNlU2ltcGxlbGF5b3V0U3RvcmUoKTtcbiAgICByZXR1cm4geyBzbCB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJBZGRcIixcbiAgICAgICAgICBhY3Rpb246IHRoaXMub3BlbkFkZGFibGVCbG9ja3NNb2RhbCxcbiAgICAgICAgICBlbmFibGVkOiAoKSA9PiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiRWRpdFwiLFxuICAgICAgICAgIGFjdGlvbjogdGhpcy5vcGVuRWRpdEJsb2Nrc01vZGFsLFxuICAgICAgICAgIGVuYWJsZWQ6IChyb3dJbmRleCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNsLmxheW91dHMuaXRlbXNbcm93SW5kZXhdLml0ZW1zW2NvbHVtbkluZGV4XS5pdGVtc1xuICAgICAgICAgICAgICAubGVuZ3RoO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJEZWxldGVcIixcbiAgICAgICAgICBhY3Rpb246IHRoaXMub3BlbkRlbGV0ZUJsb2Nrc01vZGFsLFxuICAgICAgICAgIGVuYWJsZWQ6IChyb3dJbmRleCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNsLmxheW91dHMuaXRlbXNbcm93SW5kZXhdLml0ZW1zW2NvbHVtbkluZGV4XS5pdGVtc1xuICAgICAgICAgICAgICAubGVuZ3RoO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJVcGxvYWRcIixcbiAgICAgICAgICBhY3Rpb246IHRoaXMub3BlblVwbG9hZE1vZGFsLFxuICAgICAgICAgIGVuYWJsZWQ6IChyb3dJbmRleCwgY29sdW1uSW5kZXgsIGJsb2NrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVpZCA9XG4gICAgICAgICAgICAgIHRoaXMuc2wubGF5b3V0cy5pdGVtc1tyb3dJbmRleF0uaXRlbXNbY29sdW1uSW5kZXhdLml0ZW1zW1xuICAgICAgICAgICAgICAgIGJsb2NrSW5kZXhcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgaWYgKCF1aWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhZGRhYmxlID0gdGhpcy5zbC5ibG9ja3NbdWlkXVtcIkBjb21wb25lbnRzXCJdW1widHlwZXNcIl0uZmlsdGVyKFxuICAgICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5hZGRhYmxlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGFkZGFibGUubGVuZ3RoO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJJbmZvcm1hdGlvblwiLFxuICAgICAgICAgIGFjdGlvbjogdGhpcy5vcGVuSW5mb0Jsb2NrTW9kYWwsXG4gICAgICAgICAgZW5hYmxlZDogKHJvd0luZGV4LCBjb2x1bW5JbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2wubGF5b3V0cy5pdGVtc1tyb3dJbmRleF0uaXRlbXNbY29sdW1uSW5kZXhdLml0ZW1zXG4gICAgICAgICAgICAgIC5sZW5ndGg7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkNvbnRlbnMgKExpc3RpbmcpXCIsXG4gICAgICAgICAgYWN0aW9uOiB0aGlzLmdvdG9Gb2xkZXJDb250ZW50cyxcbiAgICAgICAgICBlbmFibGVkOiAocm93SW5kZXgsIGNvbHVtbkluZGV4LCBibG9ja0luZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1aWQgPVxuICAgICAgICAgICAgICB0aGlzLnNsLmxheW91dHMuaXRlbXNbcm93SW5kZXhdLml0ZW1zW2NvbHVtbkluZGV4XS5pdGVtc1tcbiAgICAgICAgICAgICAgICBibG9ja0luZGV4XG4gICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmICghdWlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWRkYWJsZSA9IHRoaXMuc2wuYmxvY2tzW3VpZF1bXCJAY29tcG9uZW50c1wiXVtcInR5cGVzXCJdLmZpbHRlcihcbiAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uYWRkYWJsZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBhZGRhYmxlLmxlbmd0aDtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuc2wuZmV0Y2hCbG9ja3MoKTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBkcmFnZ2luZ0NsYXNzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmcgPyBcInNsLWRyYWdnaW5nXCIgOiBcIlwiO1xuICAgIH0sXG4gICAgZHJhZ09wdGlvbnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhbmltYXRpb246IDIwMCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjbGFzczogXCJzbC1kcmFnZ2FibGUtY29udGFpbmVyXCIsXG4gICAgICAgIGdyb3VwOiBcImJsb2Nrc1wiLFxuICAgICAgICBoYW5kbGU6IFwiLnNsLWhhbmRsZVwiLFxuICAgICAgICBnaG9zdENsYXNzOiBcImdob3N0LXNsLWJsb2NrXCIsXG4gICAgICAgIC8vIGZvcmNlRmFsbGJhY2s6IHRydWUsXG4gICAgICAgIC8vIGZhbGxiYWNrQ2xhc3M6IFwic2wtYmxvY2stZHJhZ2dpbmdcIixcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9wZW5BZGRhYmxlQmxvY2tzTW9kYWwoZXZlbnQpIHtcbiAgICAgIHRoaXMuJHJlZnNbXCJhZGQtbW9kYWxcIl0ub3BlbkFkZGFibGVCbG9ja3NNb2RhbChldmVudCk7XG4gICAgfSxcbiAgICBvcGVuRWRpdEJsb2Nrc01vZGFsKGV2ZW50KSB7XG4gICAgICB0aGlzLiRyZWZzW1wiZWRpdC1tb2RhbFwiXS5vcGVuRWRpdEJsb2NrTW9kYWwoZXZlbnQpO1xuICAgIH0sXG4gICAgb3BlbkRlbGV0ZUJsb2Nrc01vZGFsKGV2ZW50KSB7XG4gICAgICB0aGlzLiRyZWZzW1wiZGVsZXRlLW1vZGFsXCJdLm9wZW5EZWxldGVCbG9ja01vZGFsKGV2ZW50KTtcbiAgICB9LFxuICAgIG9wZW5JbmZvQmxvY2tNb2RhbChldmVudCkge1xuICAgICAgdGhpcy4kcmVmc1tcImluZm8tbW9kYWxcIl0ub3BlbkluZm9CbG9ja01vZGFsKGV2ZW50KTtcbiAgICB9LFxuICAgIG9wZW5VcGxvYWRNb2RhbChldmVudCkge1xuICAgICAgdGhpcy4kcmVmc1tcInVwbG9hZC1tb2RhbFwiXS5vcGVuVXBsb2FkTW9kYWwoZXZlbnQpO1xuICAgIH0sXG4gICAgZ290b0ZvbGRlckNvbnRlbnRzKGV2ZW50KSB7XG4gICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIikpO1xuICAgICAgY29uc3QgY29sdW1uSW5kZXggPSBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIikpO1xuICAgICAgY29uc3QgYmxvY2tJbmRleCA9IHBhcnNlSW50KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJsb2NrXCIpKTtcbiAgICAgIGNvbnN0IHVpZCA9XG4gICAgICAgIHRoaXMuc2wubGF5b3V0cy5pdGVtc1tyb3dJbmRleF0uaXRlbXNbY29sdW1uSW5kZXhdLml0ZW1zW2Jsb2NrSW5kZXhdO1xuICAgICAgd2luZG93Lm9wZW4odGhpcy5zbC5ibG9ja3NbdWlkXVtcIkBpZFwiXSArIFwiL2ZvbGRlcl9jb250ZW50c1wiLCBcIl9zZWxmXCIpO1xuICAgIH0sXG4gICAgc2F2ZUxheW91dDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zbC5tb2RpZnlMYXlvdXRzKHtcbiAgICAgICAgc2xibG9ja3NfbGF5b3V0OiB7IGl0ZW1zOiB0aGlzLnNsLmxheW91dHMuaXRlbXMgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgc3RhcnREcmFnZ2luZ0Jsb2NrKCkge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuI2FwcCB7XG4gIC5zbC1yb3cge1xuICB9XG4gIC5zbC1jb2wge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDAwMDAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLnNsLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnNsLWNvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zbC1ibG9jayB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggIzAwMDAwMDtcbiAgICB9XG4gIH1cbn1cbi5idG4teHMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5naG9zdC1zbC1ibG9jayB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnNsLWRyYWdnYWJsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zbC1ibG9jay1kcmFnZ2luZyB7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgPiAqIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbiNhcHAgLnNsLWNvbnRhaW5lci5zbC1kcmFnZ2luZyB7XG4gIC5zbC1ibG9jayB7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggIzAwMDAwMDtcbiAgICAmLnNsLWJsb2NrLXBsYWNlaG9sZGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5zbC1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQmxvY2tSZW5kZXJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWRmMTc0Y2FcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CbG9ja1JlbmRlcmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9CbG9ja1JlbmRlcmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQmxvY2tSZW5kZXJlci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNWRmMTc0Y2FcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1ZGYxNzRjYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzVkZjE3NGNhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CbG9ja1JlbmRlcmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZGYxNzRjYVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1ZGYxNzRjYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8ZGl2IHYtaWY9XCJnZXRCbG9ja1ZpZXdDb21wb25lbnRCeU5hbWUgIT09IHVuZGVmaW5lZFwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiZ2V0QmxvY2tWaWV3Q29tcG9uZW50QnlOYW1lXCIgdi1iaW5kPVwiJHByb3BzXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXYgdi1lbHNlPlxuICAgIDxCbG9ja0ZhbGxiYWNrVmlldyB2LWJpbmQ9XCIkcHJvcHNcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEJsb2NrRmFsbGJhY2tWaWV3IGZyb20gXCJAL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9CbG9ja0ZhbGxiYWNrVmlldy52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmxvY2tGYWxsYmFja1ZpZXcsXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgYWN0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHJvd0luZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbHVtbkluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGJsb2NrSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYmxvY2s6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYXNCbG9ja1ZpZXdDb21wb25lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ibG9ja1tcIkB0eXBlXCJdIGluIHRoaXMuJGJsb2Nrdmlld3M7XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBnZXRCbG9ja1ZpZXdDb21wb25lbnRCeU5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kYmxvY2t2aWV3c1t0aGlzLmJsb2NrW1wiQHR5cGVcIl1dO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9CbG9ja0NvbnRyb2xzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTRkNDllMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jsb2NrQ29udHJvbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jsb2NrQ29udHJvbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9CbG9ja0NvbnRyb2xzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlNGQ0OWUyJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQ29udHJvbHMvQmxvY2tDb250cm9scy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNGU0ZDQ5ZTJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0ZTRkNDllMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzRlNGQ0OWUyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CbG9ja0NvbnRyb2xzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTRkNDllMlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0ZTRkNDllMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgYmctbGlnaHQgc2wtYWRkLWJsb2NrLWNvbnRyb2xzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzbG90IG5hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIDxCbG9ja1RpdGxlIDpibG9jaz1cImJsb2NrXCIgdi1pZj1cImJsb2NrLnRpdGxlXCIgLz5cbiAgICAgICAgPC9zbG90PlxuICAgICAgPC9zcGFuPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICA6ZGF0YS1icy10YXJnZXQ9XCJgIyR7ZHJvcGRvd25JZE1vYmlsZX1gXCJcbiAgICAgICAgOmFyaWEtY29udHJvbHM9XCJkcm9wZG93bklkTW9iaWxlXCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBlZGl0IG1lbnVcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UganVzdGlmeS1jb250ZW50LWVuZCBmbGV4LXNocmluay0wXCJcbiAgICAgICAgOmlkPVwiZHJvcGRvd25JZE1vYmlsZVwiXG4gICAgICA+XG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAteHNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHYtaWY9XCJibG9ja0luZGV4ID4gLTFcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHNsLWhhbmRsZSBzbC1tb3ZlLWJ1dHRvblwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHYtYmluZD1cIm1vdmVJY29uXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Nb3ZlPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIDppZD1cImRyb3Bkb3duSWRcIlxuICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgIGRhdGEtYnMtYXV0by1jbG9zZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj5BY3Rpb25zPC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIDphcmlhLWxhYmVsbGVkYnk9XCJkcm9wZG93bklkXCI+XG4gICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiYWN0aW9uIGluIGFjdGlvbnNcIiA6a2V5PVwiYWN0aW9uLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYWN0aW9uLmVuYWJsZWQocm93SW5kZXgsIGNvbHVtbkluZGV4LCBibG9ja0luZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50LnN0b3A9XCJhY3Rpb24uYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgOmRhdGEtcm93PVwicm93SW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICA6ZGF0YS1jb2w9XCJjb2x1bW5JbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIDpkYXRhLWJsb2NrPVwiYmxvY2tJbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgPnt7IGFjdGlvbi5sYWJlbCB9fTwvYVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmF2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgeyB1c2VTaW1wbGVsYXlvdXRTdG9yZSB9IGZyb20gXCJAL3N0b3JlLmpzXCI7XG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrVGl0bGUudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBCbG9ja1RpdGxlLFxuICB9LFxuICBwcm9wczoge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICByb3dJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjb2x1bW5JbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBibG9ja0luZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGJsb2NrOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBzbCA9IHVzZVNpbXBsZWxheW91dFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgc2wgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBtb3ZlSWNvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNyYzogYCR7dGhpcy5zbC5wb3J0YWxVUkx9L2ljb25yZXNvbHZlci9hcnJvd3MtbW92ZWAsXG4gICAgICAgIGFsdDogXCJNb3ZlIGJsb2NrXCIsXG4gICAgICAgIHdpZHRoOiBcIjIwXCIsXG4gICAgICAgIHN0eWxlOiBcImZpbHRlcjogaW52ZXJ0KDEpXCIsXG4gICAgICB9O1xuICAgIH0sXG4gICAgZHJvcGRvd25JZCgpIHtcbiAgICAgIHJldHVybiBgYmxvY2tEcm9wZG93bk1lbnVfJHt0aGlzLmNvbHVtbkluZGV4fV8ke3RoaXMucm93SW5kZXh9YDtcbiAgICB9LFxuICAgIGRyb3Bkb3duSWRNb2JpbGUoKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5kcm9wZG93bklkfV9tb2JpbGVfbWVudWA7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnNsLWFkZC1ibG9jay1jb250cm9scyB7XG4gIC5jb250YWluZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5zbC1tb3ZlLWJ1dHRvbiB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gIH1cbiAgei1pbmRleDogMTtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Db2xDb250cm9scy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDE2OWNlZmNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db2xDb250cm9scy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29sQ29udHJvbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Db2xDb250cm9scy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMTY5Y2VmYyZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvbWFldGh1L3dlYmNsb3VkNy93Y3Muc2ltcGxlbGF5b3V0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ3Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL0NvbnRyb2xzL0NvbENvbnRyb2xzLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwMTY5Y2VmY1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzAxNjljZWZjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDE2OWNlZmMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvbENvbnRyb2xzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMTY5Y2VmY1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcwMTY5Y2VmYycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgdi1pZj1cImN1cnJlbnRXaWR0aFwiXG4gICAgY2xhc3M9XCJzbC1yZW1vdmUtY29sLWNvbnRyb2xzXCJcbiAgICA6c3R5bGU9XCJgei1pbmRleDokezEwMDAgLSAxIC0gcm93SW5kZXggKiAyfWBcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAteHNcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdi1pZj1cIiFoYXNCbG9ja3NcIlxuICAgICAgICBjbGFzcz1cImJ0biBidG4teHMgYnRuLWRhbmdlclwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBAY2xpY2s9XCJyZW1vdmVDb2xcIlxuICAgICAgPlxuICAgICAgICBSZW1vdmUgY29sdW1uXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJidG4gZHJvcGRvd24tdG9nZ2xlIGJ0bi1wcmltYXJ5IGJ0bi14c1wiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA6aWQ9XCJkcm9wZG93bklkXCJcbiAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXG4gICAgICAgIGRhdGEtYnMtYXV0by1jbG9zZT1cInRydWVcIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgPlxuICAgICAgICBXaWR0aDoge3sgd2lkdGhzTWFwcGluZ1tjdXJyZW50V2lkdGhdIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiA6YXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25JZFwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJ3aWR0aCBpbiB3aWR0aHNcIiA6a2V5PVwid2lkdGguY29sc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cIigpID0+IG5ld1dpZHRoKHdpZHRoLmNvbHMpXCJcbiAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICA+e3sgd2lkdGgubGFiZWwgfX08L2FcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiA6Y2xhc3M9XCJjc3NDbGFzc2VzXCI+XG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAteHMgc2wtcm93LWNvbnRyb2xzXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IHNsLWNvbC1hZGQtYnV0dG9uXCJcbiAgICAgICAgQGNsaWNrPVwiKCkgPT4gY3JlYXRlQ29sKClcIlxuICAgICAgPlxuICAgICAgICArXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCB7IGNvbHVtbiB9IGZyb20gXCJAL3RlbXBsYXRlLmpzXCI7XG5pbXBvcnQgeyBDb2xXaWR0aHMgfSBmcm9tIFwiQC92b2NhYnMuanNcIjtcbmltcG9ydCB7IHVzZVNpbXBsZWxheW91dFN0b3JlIH0gZnJvbSBcIkAvc3RvcmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0dXAoKSB7XG4gICAgY29uc3Qgc2wgPSB1c2VTaW1wbGVsYXlvdXRTdG9yZSgpO1xuICAgIHJldHVybiB7IHNsIH07XG4gIH0sXG4gIHByb3BzOiB7XG4gICAgcm93SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29sSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY3VycmVudFdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVDb2woKSB7XG4gICAgICB0aGlzLnNsLmFkZENvbHVtblRvUm93KGNvbHVtbigxKSwgdGhpcy5yb3dJbmRleCwgdGhpcy5jb2xJbmRleCk7XG4gICAgfSxcbiAgICByZW1vdmVDb2woKSB7XG4gICAgICB0aGlzLnNsLnJlbW92ZVJvd0Zyb21MYXlvdXQodGhpcy5yb3dJbmRleCwgdGhpcy5jb2xJbmRleCk7XG4gICAgfSxcbiAgICBuZXdXaWR0aChuZXdXaWR0aCkge1xuICAgICAgdGhpcy5zbC5zZXROZXdXaWR0aE9uQ29sdW1uKHRoaXMucm93SW5kZXgsIHRoaXMuY29sSW5kZXgsIG5ld1dpZHRoKTtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHdpZHRocygpIHtcbiAgICAgIHJldHVybiBDb2xXaWR0aHMoKTtcbiAgICB9LFxuICAgIHdpZHRoc01hcHBpbmcoKSB7XG4gICAgICByZXR1cm4gQ29sV2lkdGhzKHRydWUpO1xuICAgIH0sXG4gICAgZHJvcGRvd25JZCgpIHtcbiAgICAgIHJldHVybiBgZHJvcGRvd25NZW51XyR7dGhpcy5jb2xJbmRleH1fJHt0aGlzLnJvd0luZGV4fWA7XG4gICAgfSxcbiAgICBjc3NDbGFzc2VzKCkge1xuICAgICAgbGV0IGNsYXNzZXMgPSBcInNsLWNvbC1jb250cm9sc1wiO1xuICAgICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXMgKyBcIiByaWdodFwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfSxcbiAgICBoYXNCbG9ja3MoKSB7XG4gICAgICBjb25zdCBibG9ja3MgPVxuICAgICAgICB0aGlzLnNsLmxheW91dHMuaXRlbXNbdGhpcy5yb3dJbmRleF0uaXRlbXNbdGhpcy5jb2xJbmRleF0uaXRlbXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIEJvb2xlYW4oYmxvY2tzKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5zbC1jb2wtY29udHJvbHMge1xuICBwYWRkaW5nOiAwLjVlbSAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICA+IC5idG4tZ3JvdXAge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHRvcDogMjUlO1xuICB9XG5cbiAgJi5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cblxuICAuc2wtY29sLWFkZC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLnNsLXJlbW92ZS1jb2wtY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDEwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuICB6LWluZGV4OiAxO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5zbC1yb3c6aG92ZXIge1xuICAuc2wtY29sLWNvbnRyb2xzLFxuICAuc2wtcmVtb3ZlLWNvbC1jb250cm9scyB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1Jvd0NvbnRyb2xzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTcwY2M0OFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jvd0NvbnRyb2xzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Sb3dDb250cm9scy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1Jvd0NvbnRyb2xzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhNzBjYzQ4Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvQ29udHJvbHMvUm93Q29udHJvbHMudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImZhNzBjYzQ4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZmE3MGNjNDgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdmYTcwY2M0OCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUm93Q29udHJvbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZhNzBjYzQ4XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2ZhNzBjYzQ4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzbC1hZGQtcm93LWNvbnRyb2xzXCIgOnN0eWxlPVwiYHotaW5kZXg6JHsxMDAwIC0gKGluZGV4ICogMil9YFwiPlxuICAgIDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWdyb3VwLXhzXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljaz1cIigpID0+IGNyZWF0ZVJvdygxKVwiPlxuICAgICAgICArXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGVcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgOmlkPVwiZHJvcGRvd25JZFwiXG4gICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICBkYXRhLWJzLWF1dG8tY2xvc2U9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gYXJpYS1oYXNwb3B1cD1cInRydWVcIiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgRHJvcGRvd248L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIiA6YXJpYS1sYWJlbGxlZGJ5PVwiZHJvcGRvd25JZFwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJyb3cgaW4gcm93c1wiIDprZXk9XCJyb3cuY29sc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwiKCkgPT4gY3JlYXRlUm93KHJvdy5jb2xzKVwiXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgPnt7IHJvdy5sYWJlbCB9fTwvYVxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHsgcm93IH0gZnJvbSBcIkAvdGVtcGxhdGUuanNcIjtcbmltcG9ydCB7IHVzZVNpbXBsZWxheW91dFN0b3JlIH0gZnJvbSBcIkAvc3RvcmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBpbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3Qgc2wgPSB1c2VTaW1wbGVsYXlvdXRTdG9yZSgpO1xuICAgIHJldHVybiB7IHNsIH07XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvd3M6IFtcbiAgICAgICAgeyBjb2xzOiAyLCBsYWJlbDogXCIyLWNvbHVtbiByb3cgKDUwJSlcIiB9LFxuICAgICAgICB7IGNvbHM6IDMsIGxhYmVsOiBcIjMtY29sdW1uIHJvdyAoMzMlKVwiIH0sXG4gICAgICAgIHsgY29sczogNCwgbGFiZWw6IFwiNC1jb2x1bW4gcm93ICgyNSUpXCIgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNyZWF0ZVJvdyhjb2xzKSB7XG4gICAgICB0aGlzLnNsLmFkZFJvd1RvTGF5b3V0KHJvdyhjb2xzKSwgdGhpcy5pbmRleClcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGRyb3Bkb3duSWQoKSB7XG4gICAgICByZXR1cm4gYGRyb3Bkb3duTWVudV8ke3RoaXMuaW5kZXh9YDtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5zbC1hZGQtcm93LWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XG4gID4gLmJ0bi1ncm91cCB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBsaW5lLWhlaWdodDogMXJlbTtcblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnNsLWNvbnRhaW5lcjpob3ZlciB7XG4gIC5zbC1hZGQtcm93LWNvbnRyb2xzIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQWRkQmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZlOTMxODZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZGRCbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRCbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0FkZEJsb2NrTW9kYWwudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjdmZTkzMTg2XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnN2ZlOTMxODYnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc3ZmU5MzE4NicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkQmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZlOTMxODZcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignN2ZlOTMxODYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIjx0ZW1wbGF0ZT5cbiAgPEJhc2VNb2RhbCA6c3RvcmVBY3Rpb249XCJzdG9yZUFjdGlvblwiIHJlZj1cIm1vZGFsXCIgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFscy9CYXNlTW9kYWwudnVlXCI7XG5pbXBvcnQgeyB1c2VTaW1wbGVsYXlvdXRTdG9yZSB9IGZyb20gXCJAL3N0b3JlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiYWRkLW1vZGFsXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCYXNlTW9kYWwsXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHNsID0gdXNlU2ltcGxlbGF5b3V0U3RvcmUoKTtcbiAgICByZXR1cm4geyBzbCB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRhYmxlQmxvY2tzTW9kYWw6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmFkZGFibGVCbG9ja3NNb2RhbCA9IHRoaXMuJHJlZnNbXCJtb2RhbFwiXS5tb2RhbDtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIG9wZW5BZGRhYmxlQmxvY2tzTW9kYWwoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgcm93SW5kZXg6IHBhcnNlSW50KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKSksXG4gICAgICAgIGNvbHVtbkluZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIikpLFxuICAgICAgICBibG9ja0luZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1ibG9ja1wiKSksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLnNsLmJhc2VVUkx9L0BAc2wtYWRkYWJsZS1ibG9ja3NgO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zaHRtbC5nZXQodXJsKTtcbiAgICAgIHRoaXMuJHJlZnNbXCJtb2RhbFwiXS5yZXBsYWNlTW9kYWxDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuJHJlZnNbXCJtb2RhbFwiXS5oYW5kbGVGb3JtQnV0dG9ucygpO1xuXG4gICAgICBjb25zdCBib2R5ID1cbiAgICAgICAgdGhpcy5hZGRhYmxlQmxvY2tzTW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1ib2R5XCIpO1xuICAgICAgWy4uLmJvZHkucXVlcnlTZWxlY3RvckFsbChcImFcIildLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0aGlzLiRyZWZzW1wibW9kYWxcIl0ub3BlbkZvcm1Nb2RhbChsaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWRkYWJsZUJsb2Nrc01vZGFsLnNob3coKTtcbiAgICB9LFxuICAgIHN0b3JlQWN0aW9uKHBvc2l0aW9uLCBkYXRhKSB7XG4gICAgICB0aGlzLnNsLmFkZEJsb2NrVG9Db2x1bW4oXG4gICAgICAgIHBvc2l0aW9uLnJvd0luZGV4LFxuICAgICAgICBwb3NpdGlvbi5jb2x1bW5JbmRleCxcbiAgICAgICAgcG9zaXRpb24uYmxvY2tJbmRleCArIDEsIC8vIEFsd2F5cyBhZGQgYmxvY2sgYWZ0ZXIgdGhlIGN1cnJlbnQgYmxvY2tcbiAgICAgICAgZGF0YVtcIlVJRFwiXVxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQmFzZU1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNDI0ODcxMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2VNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFzZU1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vQmFzZU1vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWY0MjQ4NzEwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0Jhc2VNb2RhbC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZjQyNDg3MTBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdmNDI0ODcxMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2Y0MjQ4NzEwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CYXNlTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0MjQ4NzEwXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJ2Y0MjQ4NzEwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cIm1vZGFsIGZhZGUgc2wtYmFzZS1tb2RhbFwiXG4gICAgdGFiaW5kZXg9XCItMVwiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtdGl0bGVcIlxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgcmVmPVwic2wtYmFzZS1tb2RhbFwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlIG1vZGFsLXhsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiBpZD1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwidGl0bGVcIiAvPlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPjxzbG90IG5hbWU9XCJib2R5XCIgLz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGlkPVwiZm9ybS1idXR0b25zLWNhbmNlbFwiXG4gICAgICAgICAgICBuYW1lPVwiZm9ybS5idXR0b25zLmNhbmNlbFwiXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IHN0YW5kYWxvbmVcIlxuICAgICAgICAgICAgdmFsdWU9XCJDYW5jZWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgeyB1c2VTaW1wbGVsYXlvdXRTdG9yZSB9IGZyb20gXCJAL3N0b3JlLmpzXCI7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSBcIkBwYXR0ZXJuc2xpYi9wYXR0ZXJuc2xpYi9zcmMvY29yZS9yZWdpc3RyeVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcImJhc2UtbW9kYWxcIixcbiAgcHJvcHM6IHtcbiAgICBjbGVhblVwQm9keToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHRydWUsXG4gICAgfSxcbiAgICBzdG9yZUFjdGlvbjoge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoKSA9PiBudWxsLFxuICAgIH0sXG4gICAgbW9kYWxPcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICBkZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGJhY2tkcm9wOiBcInN0YXRpY1wiLFxuICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHNsID0gdXNlU2ltcGxlbGF5b3V0U3RvcmUoKTtcbiAgICByZXR1cm4geyBzbCB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RhbDogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiB7fSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGNvbnN0IG1vZGFsID0gdGhpcy4kcmVmc1tcInNsLWJhc2UtbW9kYWxcIl07XG4gICAgdGhpcy5tb2RhbCA9IG5ldyB3aW5kb3cualF1ZXJ5LmZuLm1vZGFsLkNvbnN0cnVjdG9yKFxuICAgICAgbW9kYWwsXG4gICAgICB0aGlzLm1vZGFsT3B0aW9uc1xuICAgICk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBvcGVuTW9kYWwodXJsLCBwb3NpdGlvbikge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zaHRtbC5nZXQodXJsKTtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMucmVwbGFjZU1vZGFsQ29udGVudChyZXNwb25zZSk7XG4gICAgICB0aGlzLmhhbmRsZUZvcm1CdXR0b25zKCk7XG4gICAgICB0aGlzLm1vZGFsLnNob3coKTtcbiAgICB9LFxuICAgIGFzeW5jIG9wZW5Gb3JtTW9kYWwodXJsLCBwb3NpdGlvbikge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zaHRtbC5nZXQodXJsKTtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgIHRoaXMucmVwbGFjZU1vZGFsQ29udGVudChyZXNwb25zZSk7XG4gICAgICB0aGlzLmhhbmRsZUZvcm1CdXR0b25zKCk7XG4gICAgICB0aGlzLm1vZGFsLnNob3coKTtcbiAgICB9LFxuICAgIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy5oYW5kbGVUaW55TUNFKCk7XG4gICAgICBjb25zdCBmb3JtID0gdGhpcy5tb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG4gICAgICBjb25zdCB1cmwgPSBmb3JtLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKTtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChidXR0b24uZ2V0QXR0cmlidXRlKFwibmFtZVwiKSwgYnV0dG9uLnZhbHVlKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImV4cGFuZFwiLCBcInR5cGVzXCIpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zaHRtbC5wb3N0KHVybCwgZm9ybURhdGEsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIEFjY2VwdDogXCJ0ZXh0L2h0bWwsYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBpc0pzb24gPSByZXNwb25zZS5oZWFkZXJzW1wiY29udGVudC10eXBlXCJdID09PSBcImFwcGxpY2F0aW9uL2pzb25cIjtcbiAgICAgIGNvbnN0IGlzMjA0ID0gcmVzcG9uc2Uuc3RhdHVzID09PSAyMDQ7XG4gICAgICBpZiAoaXNKc29uIHx8IGlzMjA0KSB7XG4gICAgICAgIC8vIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgdGhpcy5zdG9yZUFjdGlvbih0aGlzLnBvc2l0aW9uLCBkYXRhKTtcbiAgICAgICAgdGhpcy5jbGVhbkJvZHkoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBbnkgZm9ybSB2YWxpZGF0aW9uIGVycm9yIG1lYW5zIHdlIGdvdCBodG1sIGJhY2tcbiAgICAgICAgdGhpcy5yZXBsYWNlTW9kYWxDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQnV0dG9ucygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVwbGFjZU1vZGFsQ29udGVudChyZXNwb25zZSkge1xuICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhyZXNwb25zZS5kYXRhLCBcInRleHQvaHRtbFwiKTtcbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLm1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5tb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXRpdGxlXCIpO1xuICAgICAgdGl0bGUuaW5uZXJIVE1MID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS5pbm5lckhUTUw7XG4gICAgICBkb2MucXVlcnlTZWxlY3RvcihcImgxXCIpLnJlbW92ZSgpO1xuICAgICAgYm9keS5pbm5lckhUTUwgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTDtcbiAgICAgIHJlZ2lzdHJ5LnNjYW4oYm9keSk7XG4gICAgfSxcbiAgICBoYW5kbGVGb3JtQnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLm1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcbiAgICAgIGxldCBjYW5jZWxCdXR0b24gPSBudWxsO1xuICAgICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IG51bGw7XG4gICAgICBpZiAoZm9ybSkge1xuICAgICAgICBjb25zdCBzYXZlQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tYnV0dG9ucy1zYXZlXCIpO1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idXR0b25zLURlbGV0ZVwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uID1cbiAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1idXR0b25zLWNhbmNlbFwiKSB8fFxuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihcIiNmb3JtLWJ1dHRvbnMtQ2FuY2VsXCIpO1xuICAgICAgICBzdWJtaXRCdXR0b24gPSBzYXZlQnV0dG9uIHx8IGRlbGV0ZUJ1dHRvbjtcblxuICAgICAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlU3VibWl0KTtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuaGFuZGxlU3VibWl0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbEJ1dHRvbiA9IHRoaXMubW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIiNmb3JtLWJ1dHRvbnMtY2FuY2VsXCJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNhbmNlbCk7XG5cbiAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMubW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1mb290ZXJcIik7XG4gICAgICB3aGlsZSAoZm9vdGVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZm9vdGVyLnJlbW92ZUNoaWxkKGZvb3Rlci5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdWJtaXRCdXR0b24pIHtcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgICB9XG4gICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICB9LFxuICAgIGhhbmRsZUNhbmNlbChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5jbGVhbkJvZHkoKTtcbiAgICAgIHRoaXMubW9kYWwuaGlkZSgpO1xuICAgIH0sXG4gICAgY2xlYW5Cb2R5KCkge1xuICAgICAgaWYgKCF0aGlzLmNsZWFuVXBCb2R5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLm1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYm9keVwiKTtcbiAgICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlVGlueU1DRSgpIHtcbiAgICAgIFsuLi50aGlzLm1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKV0uZm9yRWFjaChcbiAgICAgICAgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aW55TUNFLmdldChlbGVtZW50LmlkKS5zYXZlKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnNsLWJhc2UtbW9kYWwge1xuICB6LWluZGV4OiAxMDUxICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRGVsZXRlQmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGNkNTY1ODJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EZWxldGVCbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9EZWxldGVCbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0RlbGV0ZUJsb2NrTW9kYWwudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjRjZDU2NTgyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNGNkNTY1ODInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc0Y2Q1NjU4MicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRGVsZXRlQmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGNkNTY1ODJcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNGNkNTY1ODInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIjx0ZW1wbGF0ZT5cbiAgPEJhc2VNb2RhbCA6c3RvcmVBY3Rpb249XCJzdG9yZUFjdGlvblwiIHJlZj1cIm1vZGFsXCIgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFscy9CYXNlTW9kYWwudnVlXCI7XG5pbXBvcnQgeyB1c2VTaW1wbGVsYXlvdXRTdG9yZSB9IGZyb20gXCJAL3N0b3JlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiZGVsZXRlLW1vZGFsXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCYXNlTW9kYWwsXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHNsID0gdXNlU2ltcGxlbGF5b3V0U3RvcmUoKTtcbiAgICByZXR1cm4geyBzbCB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVCbG9ja01vZGFsOiBudWxsLFxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5kZWxldGVCbG9ja01vZGFsID0gdGhpcy4kcmVmc1tcIm1vZGFsXCJdLm1vZGFsO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgb3BlbkRlbGV0ZUJsb2NrTW9kYWwoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgcm93SW5kZXg6IHBhcnNlSW50KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKSksXG4gICAgICAgIGNvbHVtbkluZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIikpLFxuICAgICAgICBibG9ja0luZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1ibG9ja1wiKSksXG4gICAgICB9O1xuICAgICAgdGhpcy5kZWxldGVCbG9ja01vZGFsLmhpZGUoKTtcblxuICAgICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRCbG9ja1VSTChwb3NpdGlvbil9L2RlbGV0ZV9jb25maXJtYXRpb25gO1xuICAgICAgdGhpcy4kcmVmc1tcIm1vZGFsXCJdLm9wZW5Gb3JtTW9kYWwodXJsLCBwb3NpdGlvbik7XG4gICAgICB0aGlzLmRlbGV0ZUJsb2NrTW9kYWwuc2hvdygpO1xuICAgIH0sXG5cbiAgICBnZXRCbG9ja1VSTChwb3NpdGlvbikge1xuICAgICAgY29uc3QgdWlkID1cbiAgICAgICAgdGhpcy5zbC5sYXlvdXRzLml0ZW1zW3Bvc2l0aW9uLnJvd0luZGV4XS5pdGVtc1twb3NpdGlvbi5jb2x1bW5JbmRleF1cbiAgICAgICAgICAuaXRlbXNbcG9zaXRpb24uYmxvY2tJbmRleF07XG4gICAgICByZXR1cm4gdGhpcy5zbC5ibG9ja3NbdWlkXVtcIkBpZFwiXTtcbiAgICB9LFxuICAgIHN0b3JlQWN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnNsLmRlbGV0ZUJsb2NrKHBvc2l0aW9uKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRWRpdEJsb2NrTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5MDZmMjVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdEJsb2NrTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXRCbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL0VkaXRCbG9ja01vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxOTA2ZjI1ZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzE5MDZmMjVlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMTkwNmYyNWUnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXRCbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOTA2ZjI1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxOTA2ZjI1ZScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8QmFzZU1vZGFsIDpzdG9yZUFjdGlvbj1cInN0b3JlQWN0aW9uXCIgcmVmPVwibW9kYWxcIiAvPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvTW9kYWxzL0Jhc2VNb2RhbC52dWVcIjtcbmltcG9ydCB7IHVzZVNpbXBsZWxheW91dFN0b3JlIH0gZnJvbSBcIkAvc3RvcmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJlZGl0LW1vZGFsXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBCYXNlTW9kYWwsXG4gIH0sXG4gIHNldHVwKCkge1xuICAgIGNvbnN0IHNsID0gdXNlU2ltcGxlbGF5b3V0U3RvcmUoKTtcbiAgICByZXR1cm4geyBzbCB9O1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlZGl0QmxvY2tNb2RhbDogbnVsbCxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZWRpdEJsb2NrTW9kYWwgPSB0aGlzLiRyZWZzW1wibW9kYWxcIl0ubW9kYWw7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBvcGVuRWRpdEJsb2NrTW9kYWwoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgcm93SW5kZXg6IHBhcnNlSW50KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKSksXG4gICAgICAgIGNvbHVtbkluZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIikpLFxuICAgICAgICBibG9ja0luZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1ibG9ja1wiKSksXG4gICAgICB9O1xuICAgICAgdGhpcy5lZGl0QmxvY2tNb2RhbC5oaWRlKCk7XG5cbiAgICAgIGNvbnN0IHVybCA9IGAke3RoaXMuZ2V0QmxvY2tVUkwocG9zaXRpb24pfS9lZGl0YDtcbiAgICAgIHRoaXMuJHJlZnNbXCJtb2RhbFwiXS5vcGVuRm9ybU1vZGFsKHVybCwgcG9zaXRpb24pO1xuICAgICAgdGhpcy5lZGl0QmxvY2tNb2RhbC5zaG93KCk7XG4gICAgfSxcblxuICAgIGdldEJsb2NrVVJMKHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCB1aWQgPVxuICAgICAgICB0aGlzLnNsLmxheW91dHMuaXRlbXNbcG9zaXRpb24ucm93SW5kZXhdLml0ZW1zW3Bvc2l0aW9uLmNvbHVtbkluZGV4XVxuICAgICAgICAgIC5pdGVtc1twb3NpdGlvbi5ibG9ja0luZGV4XTtcbiAgICAgIHJldHVybiB0aGlzLnNsLmJsb2Nrc1t1aWRdW1wiQGlkXCJdO1xuICAgIH0sXG4gICAgc3RvcmVBY3Rpb24ocG9zaXRpb24sIGRhdGEpIHtcbiAgICAgIHRoaXMuc2wubW9kaWZ5QmxvY2soZGF0YSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0luZm9CbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODFiMGJmY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZm9CbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmZvQmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvbWFldGh1L3dlYmNsb3VkNy93Y3Muc2ltcGxlbGF5b3V0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ3Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL01vZGFscy9JbmZvQmxvY2tNb2RhbC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMjgxYjBiZmNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyODFiMGJmYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzI4MWIwYmZjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbmZvQmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjgxYjBiZmNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMjgxYjBiZmMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIjx0ZW1wbGF0ZT5cbiAgPEJhc2VNb2RhbCA6bW9kYWxPcHRpb25zPVwib3B0aW9uc1wiIHJlZj1cIm1vZGFsXCIgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEJhc2VNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL01vZGFscy9CYXNlTW9kYWwudnVlXCI7XG5pbXBvcnQgeyB1c2VTaW1wbGVsYXlvdXRTdG9yZSB9IGZyb20gXCJAL3N0b3JlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiaW5mby1tb2RhbFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQmFzZU1vZGFsLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBzbCA9IHVzZVNpbXBsZWxheW91dFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgc2wgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5mb0Jsb2NrTW9kYWw6IG51bGwsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgIGZvY3VzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmluZm9CbG9ja01vZGFsID0gdGhpcy4kcmVmc1tcIm1vZGFsXCJdLm1vZGFsO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgb3BlbkluZm9CbG9ja01vZGFsKGV2ZW50KSB7XG4gICAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgIHJvd0luZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIikpLFxuICAgICAgICBjb2x1bW5JbmRleDogcGFyc2VJbnQoYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpKSxcbiAgICAgICAgYmxvY2tJbmRleDogcGFyc2VJbnQoYnV0dG9uLmdldEF0dHJpYnV0ZShcImRhdGEtYmxvY2tcIikpLFxuICAgICAgfTtcbiAgICAgIHRoaXMuaW5mb0Jsb2NrTW9kYWwuaGlkZSgpO1xuXG4gICAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmdldEJsb2NrVVJMKHBvc2l0aW9uKX1gO1xuICAgICAgdGhpcy4kcmVmc1tcIm1vZGFsXCJdLm9wZW5Nb2RhbCh1cmwpO1xuICAgIH0sXG5cbiAgICBnZXRCbG9ja1VSTChwb3NpdGlvbikge1xuICAgICAgY29uc3QgdWlkID1cbiAgICAgICAgdGhpcy5zbC5sYXlvdXRzLml0ZW1zW3Bvc2l0aW9uLnJvd0luZGV4XS5pdGVtc1twb3NpdGlvbi5jb2x1bW5JbmRleF1cbiAgICAgICAgICAuaXRlbXNbcG9zaXRpb24uYmxvY2tJbmRleF07XG4gICAgICByZXR1cm4gdGhpcy5zbC5ibG9ja3NbdWlkXVtcIkBpZFwiXTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vVXBsb2FkTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMzYzcwYjcwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXBsb2FkTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VwbG9hZE1vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvTW9kYWxzL1VwbG9hZE1vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJjM2M3MGI3MFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2MzYzcwYjcwJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnYzNjNzBiNzAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VwbG9hZE1vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jM2M3MGI3MFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdjM2M3MGI3MCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8QmFzZU1vZGFsIDpjbGVhblVwQm9keT1cImZhbHNlXCIgcmVmPVwibW9kYWxcIj5cbiAgICA8dGVtcGxhdGUgI3RpdGxlPlVwbG9hZDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlICNib2R5PlxuICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZFwiIHJlZj1cInVwbG9hZFwiIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9CYXNlTW9kYWw+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBCYXNlTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9Nb2RhbHMvQmFzZU1vZGFsLnZ1ZVwiO1xuaW1wb3J0IHsgdXNlU2ltcGxlbGF5b3V0U3RvcmUgfSBmcm9tIFwiQC9zdG9yZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcInVwbG9hZC1tb2RhbFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgQmFzZU1vZGFsLFxuICB9LFxuICBzZXR1cCgpIHtcbiAgICBjb25zdCBzbCA9IHVzZVNpbXBsZWxheW91dFN0b3JlKCk7XG4gICAgcmV0dXJuIHsgc2wgfTtcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWRpdEJsb2NrTW9kYWw6IG51bGwsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnVwbG9hZEJsb2NrTW9kYWwgPSB0aGlzLiRyZWZzW1wibW9kYWxcIl0ubW9kYWw7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBvcGVuVXBsb2FkTW9kYWwoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgcm93SW5kZXg6IHBhcnNlSW50KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKSksXG4gICAgICAgIGNvbHVtbkluZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIikpLFxuICAgICAgICBibG9ja0luZGV4OiBwYXJzZUludChidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1ibG9ja1wiKSksXG4gICAgICB9O1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgdXJsOiBgJHt0aGlzLmdldEJsb2NrVVJMKHBvc2l0aW9uKX0vQEBmaWxlVXBsb2FkYCxcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgIH07XG4gICAgICBjb25zdCB1cGxvYWQgPSBuZXcgd2luZG93Ll9fcGF0dGVybnNsaWJfcmVnaXN0cnkucGF0dGVybnMudXBsb2FkKFxuICAgICAgICB0aGlzLiRyZWZzW1widXBsb2FkXCJdLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuXG4gICAgICB0aGlzLnVwbG9hZEJsb2NrTW9kYWwuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImhpZGUuYnMubW9kYWxcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbG9hZEJsb2NrKHBvc2l0aW9uKTtcbiAgICAgICAgdXBsb2FkLmRyb3B6b25lLmRlc3Ryb3koKTtcbiAgICAgICAgdXBsb2FkLiRlbFswXS5yZW1vdmVDaGlsZCh1cGxvYWQuJGVsWzBdLmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb25zb2xlLmluZm8odXBsb2FkKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLiRyZWZzW1wibW9kYWxcIl0uaGFuZGxlRm9ybUJ1dHRvbnMoKTtcbiAgICAgIHRoaXMudXBsb2FkQmxvY2tNb2RhbC5zaG93KCk7XG4gICAgfSxcblxuICAgIGdldEJsb2NrVVJMKHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCB1aWQgPVxuICAgICAgICB0aGlzLnNsLmxheW91dHMuaXRlbXNbcG9zaXRpb24ucm93SW5kZXhdLml0ZW1zW3Bvc2l0aW9uLmNvbHVtbkluZGV4XVxuICAgICAgICAgIC5pdGVtc1twb3NpdGlvbi5ibG9ja0luZGV4XTtcbiAgICAgIHJldHVybiB0aGlzLnNsLmJsb2Nrc1t1aWRdW1wiQGlkXCJdO1xuICAgIH0sXG4gICAgYXN5bmMgcmVsb2FkQmxvY2socG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IHsgcGFyYW1zOiB7IGV4cGFuZDogXCJ0eXBlc1wiIH0gfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5heGlvcy5nZXQodGhpcy5nZXRCbG9ja1VSTChwb3NpdGlvbiksIHBhcmFtcyk7XG4gICAgICB0aGlzLnNsLm1vZGlmeUJsb2NrKHJlc3BvbnNlLmRhdGEpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjM2OGY3ZlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL21hZXRodS93ZWJjbG91ZDcvd2NzLnNpbXBsZWxheW91dC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwid2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxZjM2OGY3ZlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzFmMzY4ZjdmJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMWYzNjhmN2YnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmMzY4ZjdmXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzFmMzY4ZjdmJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCI8dGVtcGxhdGU+XG4gIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb24gZm9yIHRoaXMgbGlzdGluZ1wiIHYtaWY9XCJiYXRjaGluZ1wiPlxuICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cbiAgICAgIDxsaSA6Y2xhc3M9XCJiYXRjaGluZy5wcmV2ID8gJ3BhZ2UtaXRlbScgOiAncGFnZS1pdGVtIGRpc2FibGVkJ1wiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwidHJpZ2dlclByZXZpb3VzXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj5cbiAgICAgICAgICBQcmV2aW91c1xuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIDpjbGFzcz1cImJhdGNoaW5nLm5leHQgPyAncGFnZS1pdGVtJyA6ICdwYWdlLWl0ZW0gZGlzYWJsZWQnXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJ0cmlnZ2VyTmV4dFwiIGNsYXNzPVwicGFnZS1saW5rXCI+IE5leHQgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGJhdGNoaW5nOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB0cmlnZ2VyTmV4dCgpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJuZXh0XCIsIHRoaXMuYmF0Y2hpbmcubmV4dCk7XG4gICAgfSxcbiAgICB0cmlnZ2VyUHJldmlvdXMoKSB7XG4gICAgICB0aGlzLiRlbWl0KFwicHJldmlvdXNcIiwgdGhpcy5iYXRjaGluZy5wcmV2KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg0MDcwMzc4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9tYWV0aHUvd2ViY2xvdWQ3L3djcy5zaW1wbGVsYXlvdXQvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIndjcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9CbG9jay52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiODQwNzAzNzhcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc4NDA3MDM3OCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzg0MDcwMzc4JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODQwNzAzNzhcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignODQwNzAzNzgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIjx0ZW1wbGF0ZT5cbiAgPEJsb2NrU3RydWN0dXJlIHYtYmluZD1cIiRwcm9wc1wiIC8+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBCbG9ja1N0cnVjdHVyZSBmcm9tIFwiQC9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrU3RydWN0dXJlLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmxvY2tTdHJ1Y3R1cmUsXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgYWN0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHJvd0luZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbHVtbkluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGJsb2NrSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYmxvY2s6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9CbG9ja0ZhbGxiYWNrVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWZhM2VjZWFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CbG9ja0ZhbGxiYWNrVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmxvY2tGYWxsYmFja1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL21hZXRodS93ZWJjbG91ZDcvd2NzLnNpbXBsZWxheW91dC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwid2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0Jsb2NrRmFsbGJhY2tWaWV3LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxZmEzZWNlYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzFmYTNlY2VhJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMWZhM2VjZWEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jsb2NrRmFsbGJhY2tWaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmEzZWNlYVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcxZmEzZWNlYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8QmxvY2tTdHJ1Y3R1cmUgdi1iaW5kPVwiJHByb3BzXCIgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEJsb2NrU3RydWN0dXJlIGZyb20gXCJAL2NvbXBvbmVudHMvc3RhbmRhcmQvQmxvY2tTdHJ1Y3R1cmUudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBCbG9ja1N0cnVjdHVyZSxcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcm93SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29sdW1uSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYmxvY2tJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBibG9jazoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZpbGVMaXN0aW5nQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxZjhiNWM0XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZUxpc3RpbmdCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZUxpc3RpbmdCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvbWFldGh1L3dlYmNsb3VkNy93Y3Muc2ltcGxlbGF5b3V0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ3Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvRmlsZUxpc3RpbmdCbG9jay52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjFmOGI1YzRcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2MWY4YjVjNCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzYxZjhiNWM0JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWxlTGlzdGluZ0Jsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MWY4YjVjNFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc2MWY4YjVjNCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8QmxvY2tTdHJ1Y3R1cmUgdi1iaW5kPVwiJHByb3BzXCI+XG4gICAgPHRlbXBsYXRlICNib2R5PlxuICAgICAgdG90YWwge3sgZGF0YS5pdGVtc190b3RhbCB9fVxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlNpemU8L3RoPlxuICAgICAgICAgICAgICA8dGg+TW9kaWZpZWQ8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0ciB2LWZvcj1cImZpbGUgaW4gZGF0YS5pdGVtc1wiIDprZXk9XCJmaWxlLlVJRFwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpbGVbJ0B0eXBlJ10gPT09ICdJbWFnZSdcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgZmlsZS5pbWFnZVtcImNvbnRlbnQtdHlwZVwiXSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJmaWxlLmltYWdlLmRvd25sb2FkXCI+e3sgZmlsZS50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBmaWxlLmltYWdlLnNpemUgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpbGVbJ0B0eXBlJ10gPT09ICdGaWxlJ1wiPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBmaWxlLmZpbGVbXCJjb250ZW50LXR5cGVcIl0gfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZmlsZS5maWxlLmRvd25sb2FkXCI+e3sgZmlsZS50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBmaWxlLmZpbGUuc2l6ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZD57eyBmaWxlLm1vZGlmaWVkIH19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PiBcbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIHYtaWY9XCJkYXRhLmJhdGNoaW5nXCJcbiAgICAgICAgQG5leHQ9XCJmZXRjaE5leHRcIlxuICAgICAgICBAcHJldmlvdXM9XCJmZXRjaFByZXZpb3VzXCJcbiAgICAgICAgOmJhdGNoaW5nPVwiZGF0YS5iYXRjaGluZ1wiXG4gICAgICAvPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvQmxvY2tTdHJ1Y3R1cmU+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBCbG9ja1N0cnVjdHVyZSBmcm9tIFwiQC9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrU3RydWN0dXJlLnZ1ZVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIkAvY29tcG9uZW50cy9QYWdpbmF0aW9uLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmxvY2tTdHJ1Y3R1cmUsXG4gICAgUGFnaW5hdGlvbixcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcm93SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29sdW1uSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYmxvY2tJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBibG9jazoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogeyBpdGVtczogW10sIGJhdGNoaW5nOiBudWxsIH0sXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpO1xuICB9LFxuICB3YXRjaDoge1xuICAgIFwiYmxvY2subW9kaWZpZWRcIigpIHtcbiAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGZldGNoRGF0YSgpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5heGlvcy5nZXQodGhpcy5ibG9jay5jb21wdXRlZF9xdWVyeSk7XG4gICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hOZXh0KHVybCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zLmdldCh1cmwpO1xuICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9LFxuICAgIGFzeW5jIGZldGNoUHJldmlvdXModXJsKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MuZ2V0KHVybCk7XG4gICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9JbWFnZUxpc3RpbmdCbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTI4NDRkY2FcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbWFnZUxpc3RpbmdCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW1hZ2VMaXN0aW5nQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL21hZXRodS93ZWJjbG91ZDcvd2NzLnNpbXBsZWxheW91dC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwid2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0ltYWdlTGlzdGluZ0Jsb2NrLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1Mjg0NGRjYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzUyODQ0ZGNhJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNTI4NDRkY2EnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ltYWdlTGlzdGluZ0Jsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Mjg0NGRjYVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc1Mjg0NGRjYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8QmxvY2tTdHJ1Y3R1cmUgdi1iaW5kPVwiJHByb3BzXCI+XG4gICAgPHRlbXBsYXRlICNib2R5PlxuICAgICAgdG90YWwge3sgZGF0YS5pdGVtc190b3RhbCB9fVxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5UeXBlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlNpemU8L3RoPlxuICAgICAgICAgICAgICA8dGg+TW9kaWZpZWQ8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0ciB2LWZvcj1cImZpbGUgaW4gZGF0YS5pdGVtc1wiIDprZXk9XCJmaWxlLlVJRFwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpbGVbJ0B0eXBlJ10gPT09ICdJbWFnZSdcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3sgZmlsZS5pbWFnZVtcImNvbnRlbnQtdHlwZVwiXSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJmaWxlLmltYWdlLmRvd25sb2FkXCI+e3sgZmlsZS50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBmaWxlLmltYWdlLnNpemUgfX08L3RkPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImZpbGVbJ0B0eXBlJ10gPT09ICdGaWxlJ1wiPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBmaWxlLmZpbGVbXCJjb250ZW50LXR5cGVcIl0gfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiZmlsZS5maWxlLmRvd25sb2FkXCI+e3sgZmlsZS50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57eyBmaWxlLmZpbGUuc2l6ZSB9fTwvdGQ+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZD57eyBmaWxlLm1vZGlmaWVkIH19PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgdi1pZj1cImRhdGEuYmF0Y2hpbmdcIlxuICAgICAgICBAbmV4dD1cImZldGNoTmV4dFwiXG4gICAgICAgIEBwcmV2aW91cz1cImZldGNoUHJldmlvdXNcIlxuICAgICAgICA6YmF0Y2hpbmc9XCJkYXRhLmJhdGNoaW5nXCJcbiAgICAgIC8+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9CbG9ja1N0cnVjdHVyZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEJsb2NrU3RydWN0dXJlIGZyb20gXCJAL2NvbXBvbmVudHMvc3RhbmRhcmQvQmxvY2tTdHJ1Y3R1cmUudnVlXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL1BhZ2luYXRpb24udnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBCbG9ja1N0cnVjdHVyZSxcbiAgICBQYWdpbmF0aW9uLFxuICB9LFxuICBwcm9wczoge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICByb3dJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBjb2x1bW5JbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBibG9ja0luZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGJsb2NrOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7IGl0ZW1zOiBbXSwgYmF0Y2hpbmc6IG51bGwgfSxcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgXCJibG9jay5tb2RpZmllZFwiKCkge1xuICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9LFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZmV0Y2hEYXRhKCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zLmdldCh0aGlzLmJsb2NrLmNvbXB1dGVkX3F1ZXJ5KTtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfSxcbiAgICBhc3luYyBmZXRjaE5leHQodXJsKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MuZ2V0KHVybCk7XG4gICAgICB0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hQcmV2aW91cyh1cmwpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5heGlvcy5nZXQodXJsKTtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05ld3NMaXN0aW5nQmxvY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllMTBhNzE2XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTmV3c0xpc3RpbmdCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTmV3c0xpc3RpbmdCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvbWFldGh1L3dlYmNsb3VkNy93Y3Muc2ltcGxlbGF5b3V0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ3Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvTmV3c0xpc3RpbmdCbG9jay52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiOWUxMGE3MTZcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc5ZTEwYTcxNicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzllMTBhNzE2JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9OZXdzTGlzdGluZ0Jsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZTEwYTcxNlwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc5ZTEwYTcxNicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8QmxvY2tTdHJ1Y3R1cmUgdi1iaW5kPVwiJHByb3BzXCI+XG4gICAgPHRlbXBsYXRlICNib2R5PlxuICAgICAgdG90YWwge3sgZGF0YS5pdGVtc190b3RhbCB9fVxuICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cbiAgICAgICAgICAgICAgPHRoPk1vZGlmaWVkPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJuZXdzIGluIGRhdGEuaXRlbXNcIiA6a2V5PVwibmV3cy5VSURcIj5cbiAgICAgICAgICAgICAgPHRkPnt7IG5ld3MubmV3c19kYXRlIH19PC90ZD5cbiAgICAgICAgICAgICAgPHRkPnt7IG5ld3MudGl0bGUgfX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3sgbmV3cy5tb2RpZmllZCB9fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj4gXG4gICAgICA8UGFnaW5hdGlvblxuICAgICAgICB2LWlmPVwiZGF0YS5iYXRjaGluZ1wiXG4gICAgICAgIEBuZXh0PVwiZmV0Y2hOZXh0XCJcbiAgICAgICAgQHByZXZpb3VzPVwiZmV0Y2hQcmV2aW91c1wiXG4gICAgICAgIDpiYXRjaGluZz1cImRhdGEuYmF0Y2hpbmdcIlxuICAgICAgLz5cbiAgICA8L3RlbXBsYXRlPlxuICA8L0Jsb2NrU3RydWN0dXJlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgQmxvY2tTdHJ1Y3R1cmUgZnJvbSBcIkAvY29tcG9uZW50cy9zdGFuZGFyZC9CbG9ja1N0cnVjdHVyZS52dWVcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnaW5hdGlvbi52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEJsb2NrU3RydWN0dXJlLFxuICAgIFBhZ2luYXRpb24sXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgYWN0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHJvd0luZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbHVtbkluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGJsb2NrSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYmxvY2s6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHsgaXRlbXM6IFtdLCBiYXRjaGluZzogbnVsbCB9LFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBcImJsb2NrLm1vZGlmaWVkXCIoKSB7XG4gICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBmZXRjaERhdGEoKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MuZ2V0KHRoaXMuYmxvY2suY29tcHV0ZWRfcXVlcnkpO1xuICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9LFxuICAgIGFzeW5jIGZldGNoTmV4dCh1cmwpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5heGlvcy5nZXQodXJsKTtcbiAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgfSxcbiAgICBhc3luYyBmZXRjaFByZXZpb3VzKHVybCkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmF4aW9zLmdldCh1cmwpO1xuICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vVmlkZW9CbG9jay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MwODM3YWFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWRlb0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9WaWRlb0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vVmlkZW9CbG9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzA4MzdhYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvbWFldGh1L3dlYmNsb3VkNy93Y3Muc2ltcGxlbGF5b3V0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ3Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvVmlkZW9CbG9jay52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiM2MwODM3YWFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczYzA4MzdhYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzNjMDgzN2FhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WaWRlb0Jsb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzA4MzdhYVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczYzA4MzdhYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8QmxvY2tTdHJ1Y3R1cmUgdi1iaW5kPVwiJHByb3BzXCI+XG4gICAgPHRlbXBsYXRlICN0b3A+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWctdG9wIHNsLWNhcmQtaW1hZ2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwic2wtcGxhY2Vob2xkZXItdmlkZW9cIlxuICAgICAgICAgIDpzdHlsZT1cImBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt0aGlzLnNsLnBvcnRhbFVSTH0vaWNvbnJlc29sdmVyL2NhbWVyYS12aWRlbylgXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gICAgPHRlbXBsYXRlICNib2R5PlxuICAgICAgPGEgOmhyZWY9XCJibG9jay52aWRlb191cmxcIj57eyBibG9jay52aWRlb191cmwgfX08L2E+XG4gICAgPC90ZW1wbGF0ZT5cbiAgPC9CbG9ja1N0cnVjdHVyZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IHsgdXNlU2ltcGxlbGF5b3V0U3RvcmUgfSBmcm9tIFwiQC9zdG9yZS5qc1wiO1xuaW1wb3J0IEJsb2NrU3RydWN0dXJlIGZyb20gXCJAL2NvbXBvbmVudHMvc3RhbmRhcmQvQmxvY2tTdHJ1Y3R1cmUudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBCbG9ja1N0cnVjdHVyZSxcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcm93SW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgY29sdW1uSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYmxvY2tJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgICBibG9jazoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgc2V0dXAoKSB7XG4gICAgY29uc3Qgc2wgPSB1c2VTaW1wbGVsYXlvdXRTdG9yZSgpO1xuICAgIHJldHVybiB7IHNsIH07XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5zbC1wbGFjZWhvbGRlci12aWRlbyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9CbG9ja1N0cnVjdHVyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY4YmY2YTNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CbG9ja1N0cnVjdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmxvY2tTdHJ1Y3R1cmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9CbG9ja1N0cnVjdHVyZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NjhiZjZhMyZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvbWFldGh1L3dlYmNsb3VkNy93Y3Muc2ltcGxlbGF5b3V0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ3Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrU3RydWN0dXJlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI0NjhiZjZhM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzQ2OGJmNmEzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNDY4YmY2YTMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jsb2NrU3RydWN0dXJlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjhiZjZhM1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0NjhiZjZhMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxCbG9ja0NvbnRyb2xzIHYtYmluZD1cIiRwcm9wc1wiIC8+XG4gICAgPHNsb3QgbmFtZT1cInRvcFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1nLXRvcCBzbC1jYXJkLWltYWdlXCIgdi1pZj1cImJsb2NrLmltYWdlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICA6c3JjPVwiYmxvY2suaW1hZ2Uuc2NhbGVzLmdyZWF0LmRvd25sb2FkXCJcbiAgICAgICAgICA6YWx0PVwiYmxvY2suaW1hZ2VfYWx0X3RleHRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zbG90PlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIiB2LWlmPVwiT2JqZWN0LmtleXMoYmxvY2spLmxlbmd0aCAhPT0gMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwiYm9keVwiPlxuICAgICAgICAgIDxkaXYgdi1pZj1cImJsb2NrLnRleHRcIiB2LWh0bWw9XCJibG9jay50ZXh0LmRhdGFcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBCbG9ja0NvbnRyb2xzIGZyb20gXCJAL2NvbXBvbmVudHMvQ29udHJvbHMvQmxvY2tDb250cm9scy52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIEJsb2NrQ29udHJvbHMsXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgYWN0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHJvd0luZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGNvbHVtbkluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIGJsb2NrSW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgYmxvY2s6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5zbC1jYXJkLWltYWdlIHtcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icy1ncmF5LTIwMCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0Jsb2NrVGl0bGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM3ODg4NWYwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmxvY2tUaXRsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmxvY2tUaXRsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvbWFldGh1L3dlYmNsb3VkNy93Y3Muc2ltcGxlbGF5b3V0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ3Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL3N0YW5kYXJkL0Jsb2NrVGl0bGUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImM3ODg4NWYwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYzc4ODg1ZjAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdjNzg4ODVmMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmxvY2tUaXRsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Yzc4ODg1ZjBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignYzc4ODg1ZjAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsIjx0ZW1wbGF0ZT5cbiAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSBkLWlubGluZS1ibG9jayBwZS0yXCI+XG4gICAgICB7eyBibG9jay50aXRsZSB9fVxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhYmxvY2suc2hvd190aXRsZVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImg2IHRleHQtYmxhY2sgdGV4dC1vcGFjaXR5LTUwXCI+KGhpZGRlbiB0aXRsZSk8L3NwYW4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZGl2PlxuICA8L2g0PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgYmxvY2s6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vQmxvY2tSZW5kZXJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9CbG9ja1JlbmRlcmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vQmxvY2tDb250cm9scy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9CbG9ja0NvbnRyb2xzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vQ29sQ29udHJvbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vQ29sQ29udHJvbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9Sb3dDb250cm9scy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9Sb3dDb250cm9scy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0FkZEJsb2NrTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vQWRkQmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0Jhc2VNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9CYXNlTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9EZWxldGVCbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0RlbGV0ZUJsb2NrTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9FZGl0QmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9FZGl0QmxvY2tNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0luZm9CbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0luZm9CbG9ja01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vVXBsb2FkTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vVXBsb2FkTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL1BhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9CbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9CbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0Jsb2NrRmFsbGJhY2tWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0Jsb2NrRmFsbGJhY2tWaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vRmlsZUxpc3RpbmdCbG9jay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9GaWxlTGlzdGluZ0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vSW1hZ2VMaXN0aW5nQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vSW1hZ2VMaXN0aW5nQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9OZXdzTGlzdGluZ0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL05ld3NMaXN0aW5nQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9WaWRlb0Jsb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL1ZpZGVvQmxvY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9CbG9ja1N0cnVjdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbMF0hLi9CbG9ja1N0cnVjdHVyZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVswXSEuL0Jsb2NrVGl0bGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzBdIS4vQmxvY2tUaXRsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsInZhciBtYXAgPSB7XG5cdFwiLi9CbG9jay52dWVcIjogXCIuL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9CbG9jay52dWVcIixcblx0XCIuL0Jsb2NrRmFsbGJhY2tWaWV3LnZ1ZVwiOiBcIi4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL0Jsb2NrRmFsbGJhY2tWaWV3LnZ1ZVwiLFxuXHRcIi4vRmlsZUxpc3RpbmdCbG9jay52dWVcIjogXCIuL3djcy9zaW1wbGVsYXlvdXQvYnJvd3Nlci9zdGF0aWMvanMvc3JjL2NvbXBvbmVudHMvYmxvY2tWaWV3cy9GaWxlTGlzdGluZ0Jsb2NrLnZ1ZVwiLFxuXHRcIi4vSW1hZ2VMaXN0aW5nQmxvY2sudnVlXCI6IFwiLi93Y3Mvc2ltcGxlbGF5b3V0L2Jyb3dzZXIvc3RhdGljL2pzL3NyYy9jb21wb25lbnRzL2Jsb2NrVmlld3MvSW1hZ2VMaXN0aW5nQmxvY2sudnVlXCIsXG5cdFwiLi9OZXdzTGlzdGluZ0Jsb2NrLnZ1ZVwiOiBcIi4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL05ld3NMaXN0aW5nQmxvY2sudnVlXCIsXG5cdFwiLi9WaWRlb0Jsb2NrLnZ1ZVwiOiBcIi4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzL1ZpZGVvQmxvY2sudnVlXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vd2NzL3NpbXBsZWxheW91dC9icm93c2VyL3N0YXRpYy9qcy9zcmMvY29tcG9uZW50cy9ibG9ja1ZpZXdzIHN5bmMgcmVjdXJzaXZlIFxcXFwudnVlJFwiOyIsImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwLnZ1ZVwiO1xuaW1wb3J0IHsgYXhpb3NJbnN0YW5jZSwgYXhpb3NOZXV0cmFsSW5zdGFuY2UgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuaW1wb3J0IFZ1ZUF4aW9zIGZyb20gXCJ2dWUtYXhpb3NcIjtcbmltcG9ydCB7IGNyZWF0ZVBpbmlhIH0gZnJvbSBcInBpbmlhXCI7XG5pbXBvcnQgQmxvY2tWaWV3cyBmcm9tIFwiLi9wbHVnaW5zL0Jsb2NrVmlld3MuanNcIjtcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcCk7XG5hcHAudXNlKFZ1ZUF4aW9zLCB7XG4gIGF4aW9zOiBheGlvc0luc3RhbmNlKCksXG4gIGF4aW9zaHRtbDogYXhpb3NOZXV0cmFsSW5zdGFuY2UoKSxcbn0pO1xuY29uc3QgcGluaWEgPSBjcmVhdGVQaW5pYSgpO1xucGluaWEudXNlKCh7IHN0b3JlIH0pID0+IHtcbiAgc3RvcmUuYXhpb3MgPSBheGlvc0luc3RhbmNlKCk7XG59KTtcblxuYXBwLnVzZShwaW5pYSk7XG5hcHAudXNlKEJsb2NrVmlld3MpO1xuYXBwLm1vdW50KFwiI2FwcFwiKTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgaW5zdGFsbDogKGFwcCkgPT4ge1xuICAgIC8vIGNvbnN0IG1vZHVsZXMgPSBpbXBvcnQubWV0YS5nbG9iRWFnZXIoXCIuLi9jb21wb25lbnRzL2Jsb2NrVmlld3MvKi52dWVcIik7XG4gICAgY29uc3QgbW9kdWxlcyA9IHJlcXVpcmUuY29udGV4dChcIi4uL2NvbXBvbmVudHMvYmxvY2tWaWV3c1wiLCB0cnVlLCAvXFwudnVlJC8pO1xuICAgIGNvbnN0IHZpZXdzID0ge307XG4gICAgT2JqZWN0LmVudHJpZXMobW9kdWxlcykuZm9yRWFjaCgoW3BhdGgsIG1dKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gcGF0aFxuICAgICAgICAuc3BsaXQoXCIvXCIpXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAucmVwbGFjZSgvXFwuXFx3KyQvLCBcIlwiKTtcbiAgICAgIHZpZXdzW25hbWVdID0gbS5kZWZhdWx0O1xuICAgIH0pO1xuICAgIGFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kYmxvY2t2aWV3cyA9IHZpZXdzO1xuICAgIC8vIGFwcC5wcm92aWRlKFwiYmxvY2t2aWV3c1wiLCBvcHRpb25zKTtcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IHsgcm93IH0gZnJvbSBcIkAvdGVtcGxhdGUuanNcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVNpbXBsZWxheW91dFN0b3JlID0gZGVmaW5lU3RvcmUoe1xuICAvLyBpZCBpcyByZXF1aXJlZCBzbyB0aGF0IFBpbmlhIGNhbiBjb25uZWN0IHRoZSBzdG9yZSB0byB0aGUgZGV2dG9vbHNcbiAgaWQ6IFwic2ltcGxlbGF5b3V0U3RvcmVcIixcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgbGF5b3V0czogeyBpdGVtczogW3JvdygpXSB9LFxuICAgIGJsb2Nrczoge30sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgYmFzZVVSTDogZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJhc2UtdXJsXCIpLFxuICAgIGJhc2VBcGlVUkw6IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKFwiZGF0YS1iYXNlLXVybFwiKSArIFwiLysrYXBpKytcIixcbiAgICBwb3J0YWxVUkw6IGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3J0YWwtdXJsXCIpLFxuICAgIHBhcmFtczogeyBleHBhbmQ6IFwidHlwZXNcIiB9LFxuICB9KSxcbiAgZ2V0dGVyczoge30sXG4gIGFjdGlvbnM6IHtcbiAgICBhc3luYyBmZXRjaEJsb2NrcygpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYXhpb3MuZ2V0KHRoaXMuYmFzZUFwaVVSTCwgeyBwYXJhbXM6IHRoaXMucGFyYW1zIH0pO1xuICAgICAgICB0aGlzLmJsb2NrcyA9IHJlc3BvbnNlLmRhdGEuc2xibG9ja3M7XG4gICAgICAgIGNvbnN0IGxheW91dHMgPSByZXNwb25zZS5kYXRhLnNsYmxvY2tzX2xheW91dDtcbiAgICAgICAgaWYgKFwiaXRlbXNcIiBpbiBsYXlvdXRzICYmIGxheW91dHMuaXRlbXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy5sYXlvdXRzID0gcmVzcG9uc2UuZGF0YS5zbGJsb2Nrc19sYXlvdXQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhlcnJvcik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIG1vZGlmeUxheW91dHMoZGF0YSkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5heGlvcy5wYXRjaCh0aGlzLmJhc2VBcGlVUkwsIGRhdGEsIHsgcGFyYW1zOiB0aGlzLnBhcmFtcyB9KTtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSByZXNwb25zZS5kYXRhLnNsYmxvY2tzO1xuICAgICAgICBjb25zdCBsYXlvdXRzID0gcmVzcG9uc2UuZGF0YS5zbGJsb2Nrc19sYXlvdXQ7XG4gICAgICAgIGlmIChcIml0ZW1zXCIgaW4gbGF5b3V0cykge1xuICAgICAgICAgIHRoaXMubGF5b3V0cyA9IHJlc3BvbnNlLmRhdGEuc2xibG9ja3NfbGF5b3V0O1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmluZm8oZXJyb3IpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBhZGRSb3dUb0xheW91dChyb3csIGluZGV4KSB7XG4gICAgICBsZXQgbmV3TGF5b3V0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5sYXlvdXRzLml0ZW1zKSk7XG4gICAgICBuZXdMYXlvdXRzLnNwbGljZShpbmRleCwgMCwgcm93KTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IHNsYmxvY2tzX2xheW91dDogeyBpdGVtczogbmV3TGF5b3V0cyB9IH07XG4gICAgICB0aGlzLm1vZGlmeUxheW91dHMoZGF0YSk7XG4gICAgfSxcbiAgICBhc3luYyByZW1vdmVSb3dGcm9tTGF5b3V0KHJvd0luZGV4LCBjb2xJbmRleCkge1xuICAgICAgbGV0IG5ld0xheW91dHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubGF5b3V0cy5pdGVtcykpO1xuICAgICAgY29uc3Qgcm93ID0gbmV3TGF5b3V0c1tyb3dJbmRleF0uaXRlbXM7XG4gICAgICBpZiAocm93Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBuZXdMYXlvdXRzLnNwbGljZShyb3dJbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjb2xXaWR0aCA9IDEyIC8gKHJvdy5sZW5ndGggLSAxKTtcbiAgICAgICAgcm93LnNwbGljZShjb2xJbmRleCwgMSk7XG4gICAgICAgIHJvdy5tYXAoKGNvbCkgPT4gKGNvbC53aWR0aCA9IGNvbFdpZHRoKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0geyBzbGJsb2Nrc19sYXlvdXQ6IHsgaXRlbXM6IG5ld0xheW91dHMgfSB9O1xuICAgICAgdGhpcy5tb2RpZnlMYXlvdXRzKGRhdGEpO1xuICAgIH0sXG4gICAgYXN5bmMgYWRkQ29sdW1uVG9Sb3coY29sLCByb3dJbmRleCwgY29sSW5kZXgpIHtcbiAgICAgIGxldCBuZXdMYXlvdXRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmxheW91dHMuaXRlbXMpKTtcbiAgICAgIGxldCByb3cgPSBuZXdMYXlvdXRzW3Jvd0luZGV4XS5pdGVtcztcbiAgICAgIGNvbnN0IGNvbFdpZHRoID0gMTIgLyAocm93Lmxlbmd0aCArIDEpO1xuICAgICAgcm93Lm1hcCgoY29sKSA9PiAoY29sLndpZHRoID0gY29sV2lkdGgpKTtcbiAgICAgIGNvbC53aWR0aCA9IGNvbFdpZHRoO1xuICAgICAgbmV3TGF5b3V0c1tyb3dJbmRleF0uaXRlbXMuc3BsaWNlKGNvbEluZGV4LCAwLCBjb2wpO1xuXG4gICAgICBjb25zdCBkYXRhID0geyBzbGJsb2Nrc19sYXlvdXQ6IHsgaXRlbXM6IG5ld0xheW91dHMgfSB9O1xuICAgICAgdGhpcy5tb2RpZnlMYXlvdXRzKGRhdGEpO1xuICAgIH0sXG4gICAgYXN5bmMgYWRkQmxvY2tUb0NvbHVtbihyb3dJbmRleCwgY29sSW5kZXgsIGJsb2NrSW5kZXgsIHV1aWQpIHtcbiAgICAgIGxldCBuZXdMYXlvdXRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmxheW91dHMuaXRlbXMpKTtcbiAgICAgIG5ld0xheW91dHNbcm93SW5kZXhdLml0ZW1zW2NvbEluZGV4XS5pdGVtcy5zcGxpY2UoYmxvY2tJbmRleCwgMCwgdXVpZCk7XG4gICAgICBjb25zdCBkYXRhID0geyBzbGJsb2Nrc19sYXlvdXQ6IHsgaXRlbXM6IG5ld0xheW91dHMgfSB9O1xuICAgICAgdGhpcy5tb2RpZnlMYXlvdXRzKGRhdGEpO1xuICAgIH0sXG4gICAgYXN5bmMgc2V0TmV3V2lkdGhPbkNvbHVtbihyb3dJbmRleCwgY29sSW5kZXgsIG5ld1dpZHRoKSB7XG4gICAgICBsZXQgbmV3TGF5b3V0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5sYXlvdXRzLml0ZW1zKSk7XG4gICAgICBuZXdMYXlvdXRzW3Jvd0luZGV4XS5pdGVtc1tjb2xJbmRleF0ud2lkdGggPSBuZXdXaWR0aDtcblxuICAgICAgY29uc3QgZGF0YSA9IHsgc2xibG9ja3NfbGF5b3V0OiB7IGl0ZW1zOiBuZXdMYXlvdXRzIH0gfTtcbiAgICAgIHRoaXMubW9kaWZ5TGF5b3V0cyhkYXRhKTtcbiAgICB9LFxuICAgIGFzeW5jIG1vZGlmeUJsb2NrKGRhdGEpIHtcbiAgICAgIHRoaXMuYmxvY2tzW2RhdGEuVUlEXSA9IGRhdGE7XG4gICAgfSxcbiAgICBhc3luYyBkZWxldGVCbG9jayhwb3NpdGlvbikge1xuICAgICAgbGV0IG5ld0xheW91dHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubGF5b3V0cy5pdGVtcykpO1xuICAgICAgbmV3TGF5b3V0c1twb3NpdGlvbi5yb3dJbmRleF0uaXRlbXNbcG9zaXRpb24uY29sdW1uSW5kZXhdLml0ZW1zLnNwbGljZShcbiAgICAgICAgcG9zaXRpb24uYmxvY2tJbmRleCxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IHNsYmxvY2tzX2xheW91dDogeyBpdGVtczogbmV3TGF5b3V0cyB9IH07XG4gICAgICB0aGlzLm1vZGlmeUxheW91dHMoZGF0YSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuIiwiZnVuY3Rpb24gY29sdW1uKGNvbCkge1xuICByZXR1cm4ge1xuICAgIFwiQHR5cGVcIjogXCJjb2xcIixcbiAgICB3aWR0aDogYCR7MTIgLyBwYXJzZUludChjb2wpfWAsXG4gICAgaXRlbXM6IFtdLFxuICB9O1xufVxuXG5mdW5jdGlvbiByb3coY29scykge1xuICBjb25zdCBjb2xzQXJyYXkgPSBBcnJheS5mcm9tKG5ldyBBcnJheShjb2xzKSwgKHgsIGkpID0+IGkpO1xuICByZXR1cm4ge1xuICAgIFwiQHR5cGVcIjogXCJyb3dcIixcbiAgICBpdGVtczogY29sc0FycmF5Lm1hcCgoKSA9PiBjb2x1bW4oY29scykpLFxuICB9O1xufVxuXG5leHBvcnQgeyByb3csIGNvbHVtbiB9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5mdW5jdGlvbiBheGlvc0luc3RhbmNlKCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgUHJlZmVyOiBcInJldHVybj1yZXByZXNlbnRhdGlvblwiLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmZ1bmN0aW9uIGF4aW9zTmV1dHJhbEluc3RhbmNlKCkge1xuICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiBcInRleHQvaHRtbFwiLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmV4cG9ydCB7IGF4aW9zSW5zdGFuY2UsIGF4aW9zTmV1dHJhbEluc3RhbmNlIH07XG4iLCJmdW5jdGlvbiBDb2xXaWR0aHMoYXNNYXBwaW5nKSB7XG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICB7IGNvbHM6IDEyLCBsYWJlbDogXCIxMDAlXCIgfSxcbiAgICB7IGNvbHM6IDksIGxhYmVsOiBcIjc1JVwiIH0sXG4gICAgeyBjb2xzOiA2LCBsYWJlbDogXCI1MCVcIiB9LFxuICAgIHsgY29sczogNCwgbGFiZWw6IFwiMzMlXCIgfSxcbiAgICB7IGNvbHM6IDMsIGxhYmVsOiBcIjI1JVwiIH0sXG4gIF07XG5cbiAgaWYgKGFzTWFwcGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHdpZHRocy5yZWR1Y2UoKGEsIGIpID0+ICh7IC4uLmEsIFtiLmNvbHNdOiBiLmxhYmVsIH0pLCB7fSk7XG4gIH1cblxuICByZXR1cm4gd2lkdGhzO1xufVxuXG5leHBvcnQgeyBDb2xXaWR0aHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==