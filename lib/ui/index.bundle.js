/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/DateTimeRange.sass"
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/DateTimeRange.sass ***!
  \*********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
.component-date-time-range {
  position: relative;
  display: inline-block;
}
.component-date-time-range span.relative {
  opacity: 0.7;
}
.component-date-time-range span.progress {
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  bottom: 0;
  height: 16%;
  opacity: 0.7;
  background-color: rgba(17, 20, 24, 0.25);
}
.component-date-time-range span.progress span {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  transition: width 0.5s ease;
  background-color: #ec9a3c;
}
.bp6-dark .component-date-time-range span.progress {
  background-color: rgba(255, 255, 255, 0.25);
}
.bp6-dark .component-date-time-range span.progress span {
  background-color: #fbb360;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/components/DateTimeRange.sass"],"names":[],"mappings":"AAAA;;EAAA;ACEA;EACE,kBAAA;EACA,qBAAA;AAEF;AAAE;EACE,YAAA;AAEJ;AAAE;EACE,kBAAA;EACA,cAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,wCAAA;AAEJ;AAAI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,2BAAA;EACA,yBDeI;ACbV;AAAI;EACE,2CAAA;AAEN;AAAM;EACE,yBDUE;ACRV","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n.component-date-time-range\r\n  position: relative\r\n  display: inline-block\r\n\r\n  span.relative\r\n    opacity: 0.7\r\n\r\n  span.progress\r\n    position: absolute\r\n    display: block\r\n    left: 0\r\n    right: 0\r\n    bottom: 0\r\n    height: 16%\r\n    opacity: 0.7\r\n    background-color: rgba(colors.$black, 0.25)\r\n\r\n    span\r\n      position: absolute\r\n      top: 0\r\n      left: 0\r\n      bottom: 0\r\n      width: 0\r\n      transition: width 0.5s ease\r\n      background-color: colors.$orange4\r\n\r\n    .bp6-dark &\r\n      background-color: rgba(colors.$white, 0.25)\r\n\r\n      span\r\n        background-color: colors.$orange5\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/EPGTable.sass"
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/EPGTable.sass ***!
  \****************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
.component-epg-table {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #dce0e5;
}
.component-epg-table .hide {
  opacity: 0;
  pointer-events: none;
}
.component-epg-table > * {
  position: absolute;
}
.component-epg-table > button.bp6-button {
  z-index: 2;
  backdrop-filter: blur(8px) brightness(1.1);
  border-color: #5f6b7c !important;
  transition: all 0.1s ease 0s;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5) !important;
  color: #111418 !important;
}
.component-epg-table > button.bp6-button .bp6-icon > svg:not([fill]) {
  color: #5f6b7c !important;
}
.component-epg-table > button.bp6-button.jump-to-timeline {
  right: 25px;
  bottom: 25px;
}
.component-epg-table > .header {
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 24px;
  margin-left: 0px;
  background: #404854;
}
.bp6-dark .component-epg-table > .header {
  background: #1c2127;
}
.component-epg-table .epg-table-header-item {
  vertical-align: top;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  font-size: 13px;
  font-weight: 500;
  line-height: 40px;
  width: 170px;
  height: 40px;
  padding: 0 5px;
  color: #edeff2;
}
.component-epg-table .epg-table-header-item.date {
  font-weight: 600;
}
.bp6-dark .component-epg-table .epg-table-header-item {
  color: #e5e8eb;
}
.component-epg-table .epg-table-header-item:last-child {
  margin-right: 24px;
}
.component-epg-table .epg-table-header-item:not(.loading) {
  opacity: 0;
  animation: 0.4s ease 0.2s 1 normal forwards running fade-in;
}
.component-epg-table .epg-table-header-item:not(.loading):hover {
  background: rgb(18.1791202968%, 20.4515103339%, 23.8600953895%);
}
.bp6-dark .component-epg-table .epg-table-header-item:not(.loading):hover {
  background: rgb(16.8311384255%, 19.8366988586%, 23.4433713784%);
}
.component-epg-table .epg-table-header-item > img,
.component-epg-table .epg-table-header-item > div.img {
  width: 32px;
  height: 18px;
  margin-right: 5px;
  border-radius: 1px;
  filter: saturate(80%);
}
.component-epg-table .epg-table-header-item:hover:not(.loading) > img {
  filter: none;
}
.component-epg-table .epg-table-header-item > span {
  text-overflow: ellipsis;
  font-feature-settings: "palt" 1;
  overflow: hidden;
}
.component-epg-table .epg-table-header-item > span.bp6-skeleton {
  display: inline-block;
  width: 100px;
  height: 14px;
}
.component-epg-table > .timescale {
  z-index: 1;
  top: 40px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  margin-top: 0px;
}
.component-epg-table .timeline {
  position: absolute;
  top: -2px;
  right: 0;
  left: 24px;
  height: 2px;
  opacity: 0.5;
  pointer-events: all;
  box-shadow: 0 0 4px #8f99a8;
  background: #abb3bf;
}
.component-epg-table .timeline.today {
  background: #fbb360;
}
.component-epg-table .timeline,
.component-epg-table .timeline > .clock {
  transition: all 0.4s ease 4s;
}
.component-epg-table .timeline:hover, .component-epg-table .timeline.show, .component-epg-table .timeline:hover > .clock, .component-epg-table .timeline.show > .clock {
  opacity: 1;
  transition: opacity 0.1s linear 0s;
}
.component-epg-table .timeline > .clock {
  position: absolute;
  top: -8px;
  left: 0;
  padding: 0 8px;
  line-height: 18px;
  font-size: 13px;
  font-weight: 500;
  background: inherit;
  opacity: 0;
  pointer-events: none;
  color: #111418;
}
.component-epg-table .timescale-item {
  height: 240px;
  border-bottom: 1px dashed rgba(197, 203, 211, 0.5);
}
.component-epg-table .timescale-item > div {
  width: 24px;
  height: calc(100% + 1px);
  padding-top: 6px;
  writing-mode: vertical-rl;
  text-orientation: sideways;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.1em;
  line-height: 24px;
  pointer-events: all;
  border-bottom: 1px solid #8f99a8;
  color: #f6f7f9;
  background: #111418;
}
.component-epg-table .timescale-item:first-child > div {
  border-top: 1px solid #8f99a8;
}
.component-epg-table .timescale-item.hour-0 > div, .component-epg-table .timescale-item.hour-1 > div, .component-epg-table .timescale-item.hour-2 > div {
  background: rgb(0, 51, 127);
}
.component-epg-table .timescale-item.hour-3 > div, .component-epg-table .timescale-item.hour-4 > div, .component-epg-table .timescale-item.hour-5 > div {
  background: rgb(0, 102, 127);
}
.component-epg-table .timescale-item.hour-6 > div, .component-epg-table .timescale-item.hour-7 > div, .component-epg-table .timescale-item.hour-8 > div {
  background: rgb(0, 127, 102);
}
.component-epg-table .timescale-item.hour-9 > div, .component-epg-table .timescale-item.hour-10 > div, .component-epg-table .timescale-item.hour-11 > div {
  background: rgb(102, 127, 0);
}
.component-epg-table .timescale-item.hour-12 > div, .component-epg-table .timescale-item.hour-13 > div, .component-epg-table .timescale-item.hour-14 > div {
  background: rgb(127, 102, 0);
}
.component-epg-table .timescale-item.hour-15 > div, .component-epg-table .timescale-item.hour-16 > div, .component-epg-table .timescale-item.hour-17 > div {
  background: rgb(127, 51, 0);
}
.component-epg-table .timescale-item.hour-18 > div, .component-epg-table .timescale-item.hour-19 > div, .component-epg-table .timescale-item.hour-20 > div {
  background: rgb(127, 0, 102);
}
.component-epg-table .timescale-item.hour-21 > div, .component-epg-table .timescale-item.hour-22 > div, .component-epg-table .timescale-item.hour-23 > div {
  background: rgb(102, 0, 127);
}
.component-epg-table > .timetable {
  display: flex;
  position: absolute;
  top: 40px;
  left: 24px;
  right: 0;
  bottom: 0;
  overflow: auto;
}
.component-epg-table > .timetable > .bp6-spinner {
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  opacity: 0;
}
.component-epg-table > .timetable > .bp6-spinner .bp6-spinner-track {
  stroke: rgba(95, 107, 124, 0.2);
}
.component-epg-table > .timetable > .bp6-spinner .bp6-spinner-head {
  stroke: rgba(95, 107, 124, 0.8);
}
.component-epg-table .timetable-col {
  position: relative;
  width: 170px;
  flex-shrink: 0;
  overflow: hidden;
  border-right: 1px solid #c5cbd3;
  background: #e5e8eb;
  opacity: 0;
  animation: 0.2s ease 0.1s 1 normal forwards running fade-in;
}
.component-epg-table button.timetable-cell {
  position: absolute;
  width: 100%;
  border: 0 transparent;
  text-align: left;
  padding: 0;
  overflow: hidden;
  border-bottom: 1px solid #c5cbd3;
  background: #fff;
  color: #252a31;
}
.component-epg-table button.timetable-cell.no-data {
  cursor: default;
}
.component-epg-table button.timetable-cell.no-data:last-child {
  height: auto !important;
  bottom: 0;
}
.component-epg-table button.timetable-cell:not(.no-data):hover {
  filter: brightness(0.97);
}
.component-epg-table button.timetable-cell.bp6-active {
  z-index: 2;
  box-shadow: inset 0 0 0 4px rgba(17, 20, 24, 0.15);
}
.component-epg-table button.timetable-cell.event-group-shared {
  color: #215db0;
}
.component-epg-table button.timetable-cell.event-group-shared, .component-epg-table button.timetable-cell.no-data {
  opacity: 0.45;
}
.component-epg-table button.timetable-cell > div {
  position: absolute;
  top: 8px;
  right: 8px;
  bottom: 8px;
  left: 8px;
  line-height: 16px;
  font-size: 13px;
  word-break: break-all;
  overflow: hidden;
}
.component-epg-table button.timetable-cell > div time {
  margin-right: 4px;
  font-size: 10px;
  font-weight: 700;
  vertical-align: top;
  color: #738091;
}
.component-epg-table button.timetable-cell > div .description {
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  font-feature-settings: "palt" 1, "pwid" 1;
  line-height: 1.5;
  color: #404854;
}
.component-epg-table button.timetable-cell > div .component-program-genres {
  margin-top: 4px;
}
.component-epg-table button.timetable-cell > div .component-program-genres .caution {
  padding: 0;
  background: none;
  color: #ec9a3c;
}
.component-epg-table button.timetable-cell.short > div {
  position: relative;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  margin: 0 8px;
  white-space: nowrap;
  font-size: 11px;
}
.component-epg-table button.timetable-cell.x-short > div {
  top: 0;
  font-size: 10px;
  line-height: 10px;
}
.component-epg-table button.timetable-cell.x-short > div time {
  vertical-align: inherit;
}
.component-epg-table button.timetable-cell.xx-short > div > * {
  display: none;
}
.component-epg-table button.timetable-cell.long > div {
  word-break: normal;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/components/EPGTable.sass"],"names":[],"mappings":"AAAA;;EAAA;ACSA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,mBDIY;ACTd;AAOE;EACE,UAAA;EACA,oBAAA;AALJ;AAOE;EACE,kBAAA;AALJ;AAOE;EACE,UAAA;EACA,0CAAA;EACA,gCAAA;EACA,4BAAA;EACA,yDAAA;EACA,yBAAA;AALJ;AAOI;EACE,yBAAA;AALN;AAOI;EACE,WAAA;EACA,YAAA;AALN;AAOE;EACE,UAAA;EACA,MAAA;EACA,QAAA;EACA,OAAA;EACA,YAzCY;EA0CZ,mBAAA;EACA,gBAAA;EACA,kBA3Cc;EA4Cd,gBAAA;EACA,mBDvCS;ACkCb;AAOI;EACE,mBD9CO;ACyCb;AAOE;EACE,mBAAA;EACA,oBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBA1DY;EA2DZ,YAzDU;EA0DV,YA5DY;EA6DZ,cAAA;EACA,cD5CU;ACuCd;AAOI;EACE,gBAAA;AALN;AAOI;EACE,cDnDQ;AC8Cd;AAOI;EACE,kBAAA;AALN;AAOI;EACE,UAAA;EACA,2DAAA;AALN;AAOM;EACE,+DAAA;AALR;AAOQ;EACE,+DAAA;AALV;AAOI;;EAEE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;AALN;AAOI;EACE,YAAA;AALN;AAOI;EACE,uBAAA;EACA,+BAAA;EACA,gBAAA;AALN;AAOM;EACE,qBAAA;EACA,YAAA;EACA,YAAA;AALR;AAOE;EACE,UAAA;EACA,SA1GY;EA2GZ,QAAA;EACA,SAAA;EACA,OAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,eAAA;AALJ;AAOE;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBDhHI;AC2GR;AAOI;EACE,mBDxFI;ACmFV;AAOI;;EAEE,4BAAA;AALN;AAOI;EAIE,UAAA;EACA,kCAAA;AARN;AAUI;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,UAAA;EACA,oBAAA;EACA,cDtJE;AC8IR;AAUE;EACE,aAvJW;EAwJX,kDAAA;AARJ;AAUI;EACE,WA7JY;EA8JZ,wBAAA;EACA,gBAAA;EACA,yBAAA;EACA,0BAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBArKY;EAsKZ,mBAAA;EACA,gCAAA;EACA,cDtJQ;ECuJR,mBDzKE;ACiKR;AAUI;EACE,6BAAA;AARN;AAWI;EAGE,2BAAA;AAXN;AAYI;EAGE,4BAAA;AAZN;AAaI;EAGE,4BAAA;AAbN;AAcI;EAGE,4BAAA;AAdN;AAeI;EAGE,4BAAA;AAfN;AAgBI;EAGE,2BAAA;AAhBN;AAiBI;EAGE,4BAAA;AAjBN;AAkBI;EAGE,4BAAA;AAlBN;AAoBE;EACE,aAAA;EACA,kBAAA;EACA,SApNY;EAqNZ,UApNc;EAqNd,QAAA;EACA,SAAA;EACA,cAAA;AAlBJ;AAoBI;EACE,kBAAA;EACA,qBAAA;EACA,sBAAA;EACA,UAAA;AAlBN;AAoBM;EACE,+BAAA;AAlBR;AAoBM;EACE,+BAAA;AAlBR;AAoBE;EACE,kBAAA;EACA,YAtOU;EAuOV,cAAA;EACA,gBAAA;EACA,+BAAA;EACA,mBD3NU;EC4NV,UAAA;EACA,2DAAA;AAlBJ;AAoBE;EACE,kBAAA;EACA,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,UAAA;EACA,gBAAA;EACA,gCAAA;EACA,gBAAA;EACA,cDrPS;ACmOb;AAoBI;EACE,eAAA;AAlBN;AAoBM;EACE,uBAAA;EACA,SAAA;AAlBR;AAoBI;EACE,wBAAA;AAlBN;AAoBI;EACE,UAAA;EACA,kDAAA;AAlBN;AAoBI;EACE,cDlPE;ACgOR;AAoBI;EAEE,aAAA;AAnBN;AAqBI;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,SAAA;EACA,iBAAA;EACA,eAAA;EACA,qBAAA;EACA,gBAAA;AAnBN;AAqBM;EACE,iBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,cDtRA;ACmQR;AAqBM;EACE,eAAA;EACA,eAAA;EACA,gBAAA;EACA,yCAAA;EACA,gBAAA;EACA,cDjSK;AC8Qb;AAqBM;EACE,eAAA;AAnBR;AAqBQ;EACE,UAAA;EACA,gBAAA;EACA,cD1QA;ACuPV;AAqBI;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AAnBN;AAqBI;EACE,MAAA;EACA,eAAA;EACA,iBAAA;AAnBN;AAqBM;EACE,uBAAA;AAnBR;AAsBM;EACE,aAAA;AApBR;AAsBI;EACE,kBAAA;AApBN","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"sass:color\"\r\n@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n$header-height: 40px\r\n$timescale-width: 24px\r\n$block-width: 170px\r\n$block-height: 240px\r\n$timetable-border-color: colors.$gray5\r\n\r\n.component-epg-table\r\n  position: absolute\r\n  top: 0\r\n  right: 0\r\n  bottom: 0\r\n  left: 0\r\n  background: colors.$light-gray2\r\n\r\n  .hide\r\n    opacity: 0\r\n    pointer-events: none\r\n\r\n  > *\r\n    position: absolute\r\n\r\n  > button.bp6-button\r\n    z-index: 2\r\n    backdrop-filter: blur(8px) brightness(1.1)\r\n    border-color: colors.$gray1 !important\r\n    transition: all 0.1s ease 0s\r\n    box-shadow: 0 0 0 1px rgba(colors.$white, 0.5) !important\r\n    color: colors.$black !important\r\n\r\n    .bp6-icon > svg:not([fill])\r\n      color: colors.$gray1 !important\r\n\r\n    &.jump-to-timeline\r\n      right: 25px\r\n      bottom: 25px\r\n\r\n  > .header\r\n    z-index: 1\r\n    top: 0\r\n    right: 0\r\n    left: 0\r\n    height: $header-height\r\n    white-space: nowrap\r\n    overflow: hidden\r\n    padding-left: $timescale-width\r\n    margin-left: 0px // for scroll\r\n    background: colors.$dark-gray5\r\n\r\n    .bp6-dark &\r\n      background: colors.$dark-gray1\r\n\r\n  .epg-table-header-item\r\n    vertical-align: top\r\n    display: inline-flex\r\n    align-items: center\r\n    overflow: hidden\r\n    font-size: 13px\r\n    font-weight: 500\r\n    line-height: $header-height\r\n    width: $block-width\r\n    height: $header-height\r\n    padding: 0 5px\r\n    color: colors.$light-gray4\r\n\r\n    &.date\r\n      font-weight: 600\r\n\r\n    .bp6-dark &\r\n      color: colors.$light-gray3\r\n\r\n    &:last-child\r\n      margin-right: 24px\r\n\r\n    &:not(.loading)\r\n      opacity: 0\r\n      animation: 0.4s ease 0.2s 1 normal forwards running fade-in\r\n\r\n      &:hover\r\n        background: color.adjust(colors.$dark-gray5, $lightness: -8%)\r\n\r\n        .bp6-dark &\r\n          background: color.adjust(colors.$dark-gray1, $lightness: 7%)\r\n\r\n    > img,\r\n    > div.img\r\n      width: 32px\r\n      height: 18px\r\n      margin-right: 5px\r\n      border-radius: 1px\r\n      filter: saturate(80%)\r\n\r\n    &:hover:not(.loading) > img\r\n      filter: none\r\n\r\n    > span\r\n      text-overflow: ellipsis\r\n      font-feature-settings: \"palt\" 1\r\n      overflow: hidden\r\n\r\n      &.bp6-skeleton\r\n        display: inline-block\r\n        width: 100px\r\n        height: 14px\r\n\r\n  > .timescale\r\n    z-index: 1\r\n    top: $header-height\r\n    right: 0\r\n    bottom: 0\r\n    left: 0\r\n    overflow: hidden\r\n    user-select: none\r\n    pointer-events: none\r\n    margin-top: 0px // for scroll\r\n\r\n  .timeline\r\n    position: absolute\r\n    top: -2px\r\n    right: 0\r\n    left: calc($timescale-width)\r\n    height: 2px\r\n    opacity: 0.5\r\n    pointer-events: all\r\n    box-shadow: 0 0 4px colors.$gray3\r\n    background: colors.$gray4\r\n\r\n    &.today\r\n      background: colors.$orange5\r\n\r\n    &,\r\n    > .clock\r\n      transition: all 0.4s ease 4s\r\n\r\n    &:hover,\r\n    &.show,\r\n    &:hover > .clock,\r\n    &.show > .clock\r\n      opacity: 1\r\n      transition: opacity 0.1s linear 0s\r\n\r\n    > .clock\r\n      position: absolute\r\n      top: -8px\r\n      left: 0\r\n      padding: 0 8px\r\n      line-height: 18px\r\n      font-size: 13px\r\n      font-weight: 500\r\n      background: inherit\r\n      opacity: 0\r\n      pointer-events: none\r\n      color: colors.$black\r\n\r\n  .timescale-item\r\n    height: $block-height\r\n    border-bottom: 1px dashed rgba($timetable-border-color, 0.5)\r\n\r\n    > div\r\n      width: $timescale-width\r\n      height: calc(100% + 1px)\r\n      padding-top: 6px\r\n      writing-mode: vertical-rl\r\n      text-orientation: sideways\r\n      font-size: 13px\r\n      font-weight: 400\r\n      letter-spacing: 0.1em\r\n      line-height: $timescale-width\r\n      pointer-events: all\r\n      border-bottom: 1px solid colors.$gray3\r\n      color: colors.$light-gray5\r\n      background: colors.$black\r\n\r\n    &:first-child > div\r\n      border-top: 1px solid colors.$gray3\r\n\r\n    // todo: to variables\r\n    &.hour-0 > div,\r\n    &.hour-1 > div,\r\n    &.hour-2 > div\r\n      background: rgb(0,51,127)\r\n    &.hour-3 > div,\r\n    &.hour-4 > div,\r\n    &.hour-5 > div\r\n      background: rgb(0,102,127)\r\n    &.hour-6 > div,\r\n    &.hour-7 > div,\r\n    &.hour-8 > div\r\n      background: rgb(0,127,102)\r\n    &.hour-9 > div,\r\n    &.hour-10 > div,\r\n    &.hour-11 > div\r\n      background: rgb(102,127,0)\r\n    &.hour-12 > div,\r\n    &.hour-13 > div,\r\n    &.hour-14 > div\r\n      background: rgb(127,102,0)\r\n    &.hour-15 > div,\r\n    &.hour-16 > div,\r\n    &.hour-17 > div\r\n      background: rgb(127,51,0)\r\n    &.hour-18 > div,\r\n    &.hour-19 > div,\r\n    &.hour-20 > div\r\n      background: rgb(127,0,102)\r\n    &.hour-21 > div,\r\n    &.hour-22 > div,\r\n    &.hour-23 > div\r\n      background: rgb(102,0,127)\r\n\r\n  > .timetable\r\n    display: flex\r\n    position: absolute\r\n    top: $header-height\r\n    left: $timescale-width\r\n    right: 0\r\n    bottom: 0\r\n    overflow: auto\r\n\r\n    > .bp6-spinner\r\n      position: absolute\r\n      top: calc(50% - 20px)\r\n      left: calc(50% - 20px)\r\n      opacity: 0\r\n\r\n      .bp6-spinner-track\r\n        stroke: rgba(95, 107, 124, 0.2)\r\n\r\n      .bp6-spinner-head\r\n        stroke: rgba(95, 107, 124, 0.8)\r\n\r\n  .timetable-col\r\n    position: relative\r\n    width: $block-width // for skeleton\r\n    flex-shrink: 0\r\n    overflow: hidden\r\n    border-right: 1px solid $timetable-border-color\r\n    background: colors.$light-gray3\r\n    opacity: 0\r\n    animation: 0.2s ease 0.1s 1 normal forwards running fade-in\r\n\r\n  button.timetable-cell\r\n    position: absolute\r\n    width: 100%\r\n    border: 0 transparent\r\n    text-align: left\r\n    padding: 0\r\n    overflow: hidden\r\n    border-bottom: 1px solid $timetable-border-color\r\n    background: #fff\r\n    color: colors.$dark-gray2\r\n\r\n    &.no-data\r\n      cursor: default\r\n\r\n      &:last-child\r\n        height: auto !important\r\n        bottom: 0\r\n\r\n    &:not(.no-data):hover\r\n      filter: brightness(0.97)\r\n\r\n    &.bp6-active\r\n      z-index: 2\r\n      box-shadow: inset 0 0 0 4px rgba(colors.$black, 0.15)\r\n\r\n    &.event-group-shared\r\n      color: colors.$blue2\r\n\r\n    &.event-group-shared,\r\n    &.no-data\r\n      opacity: 0.45\r\n\r\n    > div\r\n      position: absolute\r\n      top: 8px\r\n      right: 8px\r\n      bottom: 8px\r\n      left: 8px\r\n      line-height: 16px\r\n      font-size: 13px\r\n      word-break: break-all\r\n      overflow: hidden\r\n\r\n      time\r\n        margin-right: 4px\r\n        font-size: 10px\r\n        font-weight: 700\r\n        vertical-align: top\r\n        color: colors.$gray2\r\n\r\n      .description\r\n        margin-top: 4px\r\n        font-size: 12px\r\n        font-weight: 400\r\n        font-feature-settings: \"palt\" 1, \"pwid\" 1\r\n        line-height: 1.5\r\n        color: colors.$dark-gray5\r\n\r\n      .component-program-genres\r\n        margin-top: 4px\r\n\r\n        .caution\r\n          padding: 0\r\n          background: none\r\n          color: colors.$orange4\r\n\r\n    &.short > div\r\n      position: relative\r\n      top: auto\r\n      right: auto\r\n      bottom: auto\r\n      left: auto\r\n      margin: 0 8px\r\n      white-space: nowrap\r\n      font-size: 11px\r\n\r\n    &.x-short > div\r\n      top: 0\r\n      font-size: 10px\r\n      line-height: 10px\r\n\r\n      time\r\n        vertical-align: inherit\r\n\r\n    &.xx-short > div\r\n      > *\r\n        display: none\r\n\r\n    &.long > div\r\n      word-break: normal\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/Nav.sass"
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/Nav.sass ***!
  \***********************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.component-nav.bp6-navbar > .bp6-navbar-group > img.product-icon {
  width: 28px;
  height: 28px;
  margin-right: 10px;
}
.component-nav.bp6-navbar > .bp6-navbar-group > .bp6-navbar-heading.product-name {
  font-size: 18px;
  font-weight: 300;
}
.component-nav.bp6-navbar > .bp6-navbar-group > .bp6-navbar-heading.product-name > .version {
  font-size: 10px;
  font-weight: 400;
  top: -1em;
  color: #ffc126;
}
.bp6-dark .component-nav.bp6-navbar > .bp6-navbar-group > .bp6-navbar-heading.product-name > .version {
  color: #ffd56c;
}
.component-nav.bp6-navbar > .bp6-navbar-group > .bp6-input-group .bp6-input:not(:hover, :focus) {
  box-shadow: none;
}
.component-nav.bp6-navbar > .bp6-navbar-group > .bp6-button span.badge {
  margin-left: 5px;
  font-size: 11px;
  color: #ffc126;
}
.bp6-dark .component-nav.bp6-navbar > .bp6-navbar-group > .bp6-button span.badge {
  color: #ffd56c;
}
.component-nav.bp6-navbar > .bp6-navbar-group > .bp6-button.active {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: 0 2px #ffc126;
}
.bp6-dark .component-nav.bp6-navbar > .bp6-navbar-group > .bp6-button.active {
  box-shadow: 0 2px #ffd56c;
}

@media (max-width: 800px) {
  .component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-left .bp6-navbar-heading {
    display: none;
  }
}
.component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-left .bp6-input-group {
  width: 200px;
}
@media (max-width: 1000px) {
  .component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-left .bp6-input-group {
    width: 180px;
  }
}
@media (max-width: 450px) {
  .component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-left .bp6-input-group {
    width: 130px;
  }
}
@media (max-width: 950px) {
  .component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-right button .bp6-icon:not(:last-child) {
    margin: 0 -7px;
  }
  .component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-right button .bp6-button-text {
    display: none;
  }
}
@media (max-width: 950px) and (min-width: 600px) {
  .component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-right button:hover .bp6-icon:not(:last-child) {
    margin: 0 7px 0 0;
  }
  .component-nav.bp6-navbar > .bp6-navbar-group.bp6-align-right button:hover .bp6-button-text {
    display: block;
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/vars.sass","webpack://./src/ui/components/Nav.sass"],"names":[],"mappings":"AAAA;;EAAA;ACAA;EACE;IACE,UAAA;ECIF;EDHA;IACE,UAAA;ECKF;AACF;ADJA;EACE;IACE,UAAA;ECMF;EDLA;IACE,UAAA;ECOF;AACF;AAbI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAeN;AAbI;EACE,eAAA;EACA,gBAAA;AAeN;AAbM;EACE,eAAA;EACA,gBAAA;EACA,SAAA;EACA,cAAA;AAeR;AAbQ;EACE,cDJW;ACmBrB;AAXQ;EACE,gBAAA;AAaV;AAVM;EACE,gBAAA;EACA,eAAA;EACA,cDdc;AC0BtB;AAVQ;EACE,cDlBW;AC8BrB;AAVI;EACE,6BAAA;EACA,4BAAA;EACA,yBAAA;AAYN;AAVM;EACE,yBAAA;AAYR;;AADM;EADF;IAEI,aAAA;EAKN;AACF;AAJI;EACE,YAAA;AAMN;AAJM;EAHF;IAII,YAAA;EAON;AACF;AANM;EANF;IAOI,YAAA;EASN;AACF;AAPI;EAEI;IACE,cAAA;EAQR;EANM;IACE,aAAA;EAQR;AACF;AAPI;EAEI;IACE,iBAAA;EAQR;EANM;IACE,cAAA;EAQR;AACF","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@keyframes fade-out\r\n  from\r\n    opacity: 1\r\n  to\r\n    opacity: 0\r\n\r\n@keyframes fade-in\r\n  from\r\n    opacity: 0\r\n  to\r\n    opacity: 1\r\n\r\n$invert-filter: brightness(52%) invert(100%) hue-rotate(180deg) saturate(300%) contrast(150%)\r\n\r\n$font-base: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic\", sans-serif\r\n$font-ui: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic UI\", sans-serif\r\n\r\n$theme-dark-primary: #ffd56c\r\n$theme-light-primary: #ffc126\r\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n@use \"../vars\"\r\n\r\n.component-nav.bp6-navbar\r\n  > .bp6-navbar-group\r\n    > img.product-icon\r\n      width: 28px\r\n      height: 28px\r\n      margin-right: 10px\r\n\r\n    > .bp6-navbar-heading.product-name\r\n      font-size: 18px\r\n      font-weight: 300\r\n\r\n      > .version\r\n        font-size: 10px\r\n        font-weight: 400\r\n        top: -1em\r\n        color: vars.$theme-light-primary\r\n\r\n        .bp6-dark &\r\n          color: vars.$theme-dark-primary\r\n\r\n    > .bp6-input-group\r\n      .bp6-input\r\n        &:not(:hover,:focus)\r\n          box-shadow: none\r\n\r\n    > .bp6-button\r\n      span.badge\r\n        margin-left: 5px\r\n        font-size: 11px\r\n        color: vars.$theme-light-primary\r\n\r\n        .bp6-dark &\r\n          color: vars.$theme-dark-primary\r\n\r\n    > .bp6-button.active\r\n      border-bottom-right-radius: 0\r\n      border-bottom-left-radius: 0\r\n      box-shadow: 0 2px vars.$theme-light-primary\r\n\r\n      .bp6-dark &\r\n        box-shadow: 0 2px vars.$theme-dark-primary\r\n\r\n      //&:hover:not(.bp6-popover-target)\r\n      //  background: none\r\n      //  cursor: default\r\n\r\n// responsive\r\n\r\n.component-nav.bp6-navbar\r\n  > .bp6-navbar-group.bp6-align-left\r\n    .bp6-navbar-heading\r\n      @media (max-width: 800px)\r\n        display: none\r\n\r\n    .bp6-input-group\r\n      width: 200px\r\n\r\n      @media (max-width: 1000px)\r\n        width: 180px\r\n\r\n      @media (max-width: 450px)\r\n        width: 130px\r\n\r\n  > .bp6-navbar-group.bp6-align-right\r\n    @media (max-width: 950px)\r\n      button\r\n        .bp6-icon:not(:last-child)\r\n          margin: 0 -7px\r\n\r\n        .bp6-button-text\r\n          display: none\r\n\r\n    @media (max-width: 950px) and (min-width: 600px)\r\n      button:hover\r\n        .bp6-icon:not(:last-child)\r\n          margin: 0 7px 0 0\r\n\r\n        .bp6-button-text\r\n          display: block\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramAVInfo.sass"
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramAVInfo.sass ***!
  \*********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
.component-program-av-info {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 10px;
  font-weight: 600;
  color: #5f6b7c;
}
.component-program-av-info span {
  padding: 2px 4px;
  border-radius: 2px;
  border: 1px solid;
}
.component-program-av-info span.video {
  color: #f0b726;
}
.component-program-av-info span.video.type {
  text-transform: uppercase;
}
.component-program-av-info span.audio {
  color: #eb6847;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/components/ProgramAVInfo.sass"],"names":[],"mappings":"AAAA;;EAAA;ACEA;EACE,aAAA;EACA,eAAA;EACA,QAAA;EACA,eAAA;EACA,gBAAA;EACA,cDIM;ACFR;AAAE;EACE,gBAAA;EACA,kBAAA;EACA,iBAAA;AAEJ;AAAI;EACE,cDqFE;ACnFR;AAAM;EACE,yBAAA;AAER;AAAI;EACE,cD+BO;AC7Bb","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n.component-program-av-info\r\n  display: flex\r\n  flex-wrap: wrap\r\n  gap: 5px\r\n  font-size: 10px\r\n  font-weight: 600\r\n  color: colors.$gray1\r\n\r\n  span\r\n    padding: 2px 4px\r\n    border-radius: 2px\r\n    border: 1px solid\r\n\r\n    &.video\r\n      color: colors.$gold4\r\n\r\n      &.type\r\n        text-transform: uppercase\r\n\r\n    &.audio\r\n      color: colors.$vermilion4\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramCardBase.sass"
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramCardBase.sass ***!
  \***********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
.component-program-card-base > div:not(:last-child):not(:first-child) {
  margin: 10px 0;
}
.component-program-card-base .component-service-link {
  margin-bottom: 10px;
}
.component-program-card-base p.title {
  margin-top: 0;
}
.component-program-card-base .component-program-title {
  font-size: 14px;
  line-height: 17px;
}
.component-program-card-base p.datetime {
  font-size: 12px;
  font-weight: 600;
  color: #738091;
}
.bp6-dark .component-program-card-base p.datetime {
  color: #abb3bf;
}
.component-program-card-base p.description {
  font-size: 13px;
  font-feature-settings: "palt" 1;
}
.bp6-dark .component-program-card-base p.description {
  color: #dce0e5;
}
.component-program-card-base .actions {
  margin-top: 15px;
}
.component-program-card-base .actions > div {
  display: flex;
  column-gap: 5px;
  margin-top: 10px;
}
.component-program-card-base .actions > div > a.more {
  flex-grow: 2;
}
.component-program-card-base .actions > div > a.more > button {
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/components/ProgramCardBase.sass"],"names":[],"mappings":"AAAA;;EAAA;ACGE;EACE,cAAA;AACJ;AACE;EACE,mBAAA;AACJ;AACE;EACE,aAAA;AACJ;AACE;EACE,eAAA;EACA,iBAAA;AACJ;AACE;EACE,eAAA;EACA,gBAAA;EACA,cDNI;ACOR;AACI;EACE,cDPE;ACQR;AACE;EACE,eAAA;EACA,+BAAA;AACJ;AACI;EACE,cDVQ;ACWd;AACE;EACE,gBAAA;AACJ;AACI;EACE,aAAA;EACA,eAAA;EACA,gBAAA;AACN;AACM;EACE,YAAA;AACR;AACQ;EACE,WAAA;AACV","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n.component-program-card-base\r\n  > div:not(:last-child):not(:first-child)\r\n    margin: 10px 0\r\n\r\n  .component-service-link\r\n    margin-bottom: 10px\r\n\r\n  p.title\r\n    margin-top: 0\r\n\r\n  .component-program-title\r\n    font-size: 14px\r\n    line-height: 17px\r\n\r\n  p.datetime\r\n    font-size: 12px\r\n    font-weight: 600\r\n    color: colors.$gray2\r\n\r\n    .bp6-dark &\r\n      color: colors.$gray4\r\n\r\n  p.description\r\n    font-size: 13px\r\n    font-feature-settings: \"palt\" 1\r\n\r\n    .bp6-dark &\r\n      color: colors.$light-gray2\r\n\r\n  .actions\r\n    margin-top: 15px\r\n\r\n    > div\r\n      display: flex\r\n      column-gap: 5px\r\n      margin-top: 10px\r\n\r\n      > a.more\r\n        flex-grow: 2\r\n\r\n        > button\r\n          width: 100%\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramGenres.sass"
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramGenres.sass ***!
  \*********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.component-program-genres {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 11px;
  font-weight: 600;
  font-feature-settings: "palt" 1;
  color: #000;
}
.component-program-genres span {
  padding: 2px 4px;
  border-radius: 2px;
  filter: brightness(52%) invert(100%) hue-rotate(180deg) saturate(300%) contrast(150%);
}
.component-program-genres span.caution {
  filter: none;
  background: #fbb360;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/vars.sass","webpack://./src/ui/components/ProgramGenres.sass"],"names":[],"mappings":"AAAA;;EAAA;ACAA;EACE;IACE,UAAA;ECIF;EDHA;IACE,UAAA;ECKF;AACF;ADJA;EACE;IACE,UAAA;ECMF;EDLA;IACE,UAAA;ECOF;AACF;AAfA;EACE,aAAA;EACA,eAAA;EACA,QAAA;EACA,eAAA;EACA,gBAAA;EACA,+BAAA;EACA,WAAA;AAiBF;AAfE;EACE,gBAAA;EACA,kBAAA;EACA,qFDHY;ACoBhB;AAfI;EACE,YAAA;EACA,mBFuBI;AENV","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@keyframes fade-out\r\n  from\r\n    opacity: 1\r\n  to\r\n    opacity: 0\r\n\r\n@keyframes fade-in\r\n  from\r\n    opacity: 0\r\n  to\r\n    opacity: 1\r\n\r\n$invert-filter: brightness(52%) invert(100%) hue-rotate(180deg) saturate(300%) contrast(150%)\r\n\r\n$font-base: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic\", sans-serif\r\n$font-ui: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic UI\", sans-serif\r\n\r\n$theme-dark-primary: #ffd56c\r\n$theme-light-primary: #ffc126\r\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n@use \"../vars\"\r\n\r\n.component-program-genres\r\n  display: flex\r\n  flex-wrap: wrap\r\n  gap: 5px\r\n  font-size: 11px\r\n  font-weight: 600\r\n  font-feature-settings: \"palt\" 1\r\n  color: #000\r\n\r\n  span\r\n    padding: 2px 4px\r\n    border-radius: 2px\r\n    filter: vars.$invert-filter\r\n\r\n    &.caution\r\n      filter: none\r\n      background: colors.$orange5\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramPopover.sass"
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramPopover.sass ***!
  \**********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.component-program-popover {
  padding: 15px;
  min-width: 300px;
  max-width: 380px;
}`, "",{"version":3,"sources":["webpack://./src/ui/components/ProgramPopover.sass"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,gBAAA;EACA,gBAAA;AACF","sourcesContent":[".component-program-popover\r\n  padding: 15px\r\n  min-width: 300px\r\n  max-width: 380px\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramRelatedLinks.sass"
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramRelatedLinks.sass ***!
  \***************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
.component-program-related-links {
  display: flex;
  gap: 10px;
}
.component-program-related-links > .bp6-section {
  min-width: 300px;
  max-width: 380px;
  background-color: #edeff2;
}
.bp6-dark .component-program-related-links > .bp6-section {
  background-color: #383e47;
}
.component-program-related-links .component-program-card-base {
  padding: 15px;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/components/ProgramRelatedLinks.sass"],"names":[],"mappings":"AAAA;;EAAA;ACEA;EACE,aAAA;EACA,SAAA;AAEF;AAAE;EACE,gBAAA;EACA,gBAAA;EACA,yBDYU;ACVd;AAAI;EACE,yBDHO;ACKb;AAAE;EACE,aAAA;AAEJ","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n.component-program-related-links\r\n  display: flex\r\n  gap: 10px\r\n\r\n  > .bp6-section\r\n    min-width: 300px\r\n    max-width: 380px\r\n    background-color: colors.$light-gray4\r\n\r\n    .bp6-dark &\r\n      background-color: colors.$dark-gray4\r\n\r\n  .component-program-card-base\r\n    padding: 15px\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramTitle.sass"
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramTitle.sass ***!
  \********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
.component-program-title {
  font-size: inherit;
  line-height: inherit;
}
.component-program-title .attribute,
.component-program-title .name,
.component-program-title .bp6-icon {
  margin-right: 2px;
}
.bp6-alert-body .component-program-title .attribute,
.bp6-alert-body .component-program-title .name,
.bp6-alert-body .component-program-title .bp6-icon {
  margin-right: 2px;
}
.component-program-title .name {
  font-weight: 600;
  font-feature-settings: "palt" 1;
}
.component-program-title .attribute {
  border-radius: 1px;
  padding: 0 1px;
  font-size: 80%;
  font-weight: 500;
  vertical-align: 1px;
  background: #738091;
  color: #fff;
}
.component-program-title .bp6-icon {
  vertical-align: -10%;
}
.component-program-title .bp6-icon-tick {
  color: #32a467;
}
.component-program-title .bp6-icon-flag {
  color: #e76a6e;
}
.component-program-title .bp6-icon-record {
  color: #eb6847;
}
.component-program-title .bp6-icon-small-cross {
  color: #8f99a8;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/components/ProgramTitle.sass"],"names":[],"mappings":"AAAA;;EAAA;ACEA;EACE,kBAAA;EACA,oBAAA;AAEF;AAAE;;;EAGE,iBAAA;AAEJ;AAAI;;;EACE,iBAAA;AAIN;AAFE;EACE,gBAAA;EACA,+BAAA;AAIJ;AAFE;EACE,kBAAA;EACA,cAAA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBDXI;ECYJ,WAAA;AAIJ;AAFE;EACE,oBAAA;AAIJ;AAFI;EACE,cDIG;ACAT;AAHI;EACE,cDcC;ACTP;AAJI;EACE,cDkBO;ACZb;AALI;EACE,cDvBE;AC8BR","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n.component-program-title\r\n  font-size: inherit\r\n  line-height: inherit\r\n\r\n  .attribute,\r\n  .name,\r\n  .bp6-icon\r\n    margin-right: 2px\r\n\r\n    .bp6-alert-body &\r\n      margin-right: 2px\r\n\r\n  .name\r\n    font-weight: 600\r\n    font-feature-settings: \"palt\" 1\r\n\r\n  .attribute\r\n    border-radius: 1px\r\n    padding: 0 1px\r\n    font-size: 80%\r\n    font-weight: 500\r\n    vertical-align: 1px\r\n    background: colors.$gray2\r\n    color: #fff\r\n\r\n  .bp6-icon\r\n    vertical-align: -10%\r\n\r\n    &-tick\r\n      color: colors.$green4\r\n    &-flag\r\n      color: colors.$red4\r\n    &-record\r\n      color: colors.$vermilion4\r\n    &-small-cross\r\n      color: colors.$gray3\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ServiceLink.sass"
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ServiceLink.sass ***!
  \*******************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.component-service-link {
  display: flex;
  gap: 10px;
  align-items: center;
}
.component-service-link > img {
  max-height: 18px;
  border-radius: 1px;
}`, "",{"version":3,"sources":["webpack://./src/ui/components/ServiceLink.sass"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AACF;AACE;EACE,gBAAA;EACA,kBAAA;AACJ","sourcesContent":[".component-service-link\r\n  display: flex\r\n  gap: 10px\r\n  align-items: center\r\n\r\n  > img\r\n    max-height: 18px\r\n    border-radius: 1px\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/index.sass"
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/index.sass ***!
  \**************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.bp6-spinner {
  animation: 0.2s ease 0.3s 1 normal forwards running fade-in;
}

.bp6-navbar {
  display: flex;
}
.bp6-navbar .bp6-navbar-group.bp6-align-left {
  flex: 1 1 0;
}
.bp6-navbar .bp6-navbar-group.bp6-align-left,
.bp6-navbar .bp6-navbar-group.bp6-align-left .bp6-navbar-heading {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bp6-non-ideal-state {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  overflow: auto;
  background: #edeff2;
}
.bp6-dark .bp6-non-ideal-state {
  background: #383e47;
}

body {
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Yu Gothic", sans-serif;
  overflow: hidden;
}
body.indiana-dragging {
  cursor: default;
}

.bp6-button > .bp6-button-text,
.bp6-menu-item {
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Yu Gothic UI", sans-serif;
}

select,
button,
.bp6-tabs {
  user-select: none;
}

button:not(.bp6-button) {
  border: none;
  background: inherit;
}
button:not(.bp6-button):not(:disabled) {
  cursor: pointer;
}

a[target=_blank]::after {
  font-family: "blueprint-icons-16";
  content: "\\f2b1";
  margin-left: 4px;
  font-size: 10px;
}

.font-bolder {
  font-weight: bolder !important;
}

.color-warning {
  color: #c87619 !important;
}

.color-danger {
  color: #cd4246 !important;
}

.color-dow-6 {
  color: #2d72d2 !important;
}

.color-dow-7 {
  color: #cd4246 !important;
}

.bg-genre-lv1-0 {
  background: rgb(255, 255, 224) !important;
}

.bg-genre-lv1-1 {
  background: rgb(224, 224, 255) !important;
}

.bg-genre-lv1-2 {
  background: rgb(255, 224, 240) !important;
}

.bg-genre-lv1-3 {
  background: rgb(255, 224, 224) !important;
}

.bg-genre-lv1-4 {
  background: rgb(224, 255, 224) !important;
}

.bg-genre-lv1-5 {
  background: rgb(224, 255, 255) !important;
}

.bg-genre-lv1-6 {
  background: rgb(255, 240, 224) !important;
}

.bg-genre-lv1-7 {
  background: rgb(255, 224, 255) !important;
}

.bg-genre-lv1-8 {
  background: rgb(255, 255, 224) !important;
}

.bg-genre-lv1-9 {
  background: rgb(255, 240, 224) !important;
}

.bg-genre-lv1-10 {
  background: rgb(224, 240, 255) !important;
}

.bg-genre-lv1-11 {
  background: rgb(224, 240, 255) !important;
}

.bg-genre-lv1-15 {
  background: rgb(240, 240, 240) !important;
}

.bg-attribute-新 {
  background: #29a634 !important;
}

.bg-attribute-再 {
  background: #147eb3 !important;
}

.bg-attribute-終 {
  background: #d33d17 !important;
}

.bg-attribute-生 {
  background: #f5498b !important;
}

.bg-attribute-多 {
  background: #db2c6f !important;
}

.bg-attribute-解 {
  background: #af855a !important;
}

.bg-attribute-初 {
  background: #8eb125 !important;
}

.bg-attribute-手 {
  background: #946638 !important;
}

.bg-attribute-字 {
  background: #8f99a8 !important;
}

.bg-attribute-デ,
.bg-attribute-双 {
  background: #9d3f9d !important;
}

.bg-attribute-二 {
  background: #d1980b !important;
}

.bg-attribute-無 {
  background: #00a396 !important;
}

#root {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#dev-header {
  position: absolute;
  top: 0;
  left: 5px;
  font-size: 10px;
  z-index: 9999;
  opacity: 0.5;
}

#main {
  flex-direction: column;
  flex-grow: 1;
  position: relative;
}

#page {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #edeff2;
}
.bp6-dark #page {
  background: #383e47;
}
#page > .route {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
#page > .route > .toolbar.bp6-navbar {
  z-index: 9;
  background: none;
  box-shadow: none;
}
#page > .route > .toolbar.bp6-navbar .bp6-navbar-heading {
  font-weight: 400;
  font-size: 18px;
  font-feature-settings: "palt" 1;
}
#page > .route > .toolbar.bp6-navbar .bp6-navbar-heading .component-program-title .name {
  font-weight: inherit;
}
#page > .route > .toolbar.bp6-navbar .bp6-navbar-heading .component-program-title .attribute {
  font-size: 12px;
  vertical-align: 14%;
}
#page > .route > .toolbar.bp6-navbar .bp6-navbar-heading .bp6-breadcrumb {
  font-weight: inherit;
  font-size: inherit;
}
#page > .route > .toolbar.bp6-navbar > .bp6-navbar-group.bp6-align-right {
  column-gap: 10px;
}
#page > .route > .toolbar.bp6-navbar > .bp6-navbar-group.bp6-align-right .bp6-tab-list {
  column-gap: 20px;
}
#page > .route > .toolbar.bp6-navbar > .bp6-navbar-group.bp6-align-right .bp6-tab-list > .bp6-tab[aria-selected=true] {
  cursor: default;
}
#page > .route > .toolbar.bp6-navbar > .bp6-navbar-group.bp6-align-right .bp6-tab-list > .bp6-tab sup[class*=color-dow-] {
  font-weight: 600;
  margin-left: 2px;
}
#page > .route > .content {
  flex-grow: 1;
  overflow: auto;
  position: relative;
  margin: 0;
  padding: 10px 25px;
}
#page > .route > .content.no-margin {
  padding: 0;
}`, "",{"version":3,"sources":["webpack://./src/ui/index.sass","webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/vars.sass"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;;EAAA;ACAA;EACE;IACE,UAAA;EFKF;EEJA;IACE,UAAA;EFMF;AACF;AELA;EACE;IACE,UAAA;EFOF;EENA;IACE,UAAA;EFQF;AACF;AAhBA;EACE,2DAAA;AAkBF;;AAhBA;EACE,aAAA;AAmBF;AAhBI;EACE,WAAA;AAkBN;AAhBM;;EAEE,gBAAA;EACA,uBAAA;EACA,mBAAA;AAkBR;;AAhBA;EACE,kBAAA;EACA,UAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,mBCRY;AD2Bd;AAjBE;EACE,mBCvBS;AD0Cb;;AAjBA;EACE,+JErBU;EFsBV,gBAAA;AAoBF;AAlBE;EACE,eAAA;AAoBJ;;AAlBA;;EAEE,kKE5BQ;AFiDV;;AAnBA;;;EAGE,iBAAA;AAsBF;;AApBA;EACE,YAAA;EACA,mBAAA;AAuBF;AArBE;EACE,eAAA;AAuBJ;;AArBA;EACE,iCAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;AAwBF;;AAtBA;EACE,8BAAA;AAyBF;;AAvBA;EACE,yBAAA;AA0BF;;AAzBA;EACE,yBAAA;AA4BF;;AA1BA;EACE,yBAAA;AA6BF;;AA5BA;EACE,yBAAA;AA+BF;;AA7BA;EACE,yCAAA;AAgCF;;AA/BA;EACE,yCAAA;AAkCF;;AAjCA;EACE,yCAAA;AAoCF;;AAnCA;EACE,yCAAA;AAsCF;;AArCA;EACE,yCAAA;AAwCF;;AAvCA;EACE,yCAAA;AA0CF;;AAzCA;EACE,yCAAA;AA4CF;;AA3CA;EACE,yCAAA;AA8CF;;AA7CA;EACE,yCAAA;AAgDF;;AA/CA;EACE,yCAAA;AAkDF;;AAjDA;EACE,yCAAA;AAoDF;;AAnDA;EACE,yCAAA;AAsDF;;AArDA;EACE,yCAAA;AAwDF;;AAtDA;EACE,8BAAA;AAyDF;;AAxDA;EACE,8BAAA;AA2DF;;AA1DA;EACE,8BAAA;AA6DF;;AA5DA;EACE,8BAAA;AA+DF;;AA9DA;EACE,8BAAA;AAiEF;;AAhEA;EACE,8BAAA;AAmEF;;AAlEA;EACE,8BAAA;AAqEF;;AApEA;EACE,8BAAA;AAuEF;;AAtEA;EACE,8BAAA;AAyEF;;AAxEA;;EAEE,8BAAA;AA2EF;;AA1EA;EACE,8BAAA;AA6EF;;AA5EA;EACE,8BAAA;AA+EF;;AA7EA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;AAgFF;;AA9EA;EACE,kBAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;AAiFF;;AA/EA;EACE,sBAAA;EACA,YAAA;EAEA,kBAAA;AAiFF;;AA/EA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,mBCvIY;ADyNd;AAhFE;EACE,mBCtJS;ADwOb;AAhFE;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;AAkFJ;AAhFI;EACE,UAAA;EACA,gBAAA;EACA,gBAAA;AAkFN;AAhFM;EACE,gBAAA;EACA,eAAA;EAEA,+BAAA;AAiFR;AA9EU;EACE,oBAAA;AAgFZ;AA/EU;EACE,eAAA;EACA,mBAAA;AAiFZ;AA/EQ;EACE,oBAAA;EACA,kBAAA;AAiFV;AA9EQ;EACE,gBAAA;AAgFV;AA9EU;EACE,gBAAA;AAgFZ;AA7Ec;EACE,eAAA;AA+EhB;AA7Ec;EACE,gBAAA;EACA,gBAAA;AA+EhB;AA7EI;EACE,YAAA;EACA,cAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;AA+EN;AA7EM;EACE,UAAA;AA+ER","sourcesContent":["@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n@use \"./vars\"\r\n\r\n.bp6-spinner\r\n  animation: 0.2s ease 0.3s 1 normal forwards running fade-in\r\n\r\n.bp6-navbar\r\n  display: flex\r\n\r\n  .bp6-navbar-group\r\n    &.bp6-align-left\r\n      flex: 1 1 0\r\n\r\n      &,\r\n      .bp6-navbar-heading\r\n        overflow: hidden\r\n        text-overflow: ellipsis\r\n        white-space: nowrap\r\n\r\n.bp6-non-ideal-state\r\n  position: absolute\r\n  z-index: 2\r\n  top: 0\r\n  left: 0\r\n  right: 0\r\n  bottom: 0\r\n  width: auto\r\n  height: auto\r\n  overflow: auto\r\n  background: colors.$light-gray4\r\n\r\n  .bp6-dark &\r\n    background: colors.$dark-gray4\r\n\r\nbody\r\n  font-family: vars.$font-base\r\n  overflow: hidden\r\n\r\n  &.indiana-dragging\r\n    cursor: default\r\n\r\n.bp6-button > .bp6-button-text,\r\n.bp6-menu-item\r\n  font-family: vars.$font-ui\r\n\r\nselect,\r\nbutton,\r\n.bp6-tabs\r\n  user-select: none\r\n\r\nbutton:not(.bp6-button)\r\n  border: none\r\n  background: inherit\r\n\r\n  &:not(:disabled)\r\n    cursor: pointer\r\n\r\na[target=\"_blank\"]::after\r\n  font-family: \"blueprint-icons-16\"\r\n  content: \"\"\r\n  margin-left: 4px\r\n  font-size: 10px\r\n\r\n.font-bolder\r\n  font-weight: bolder !important\r\n\r\n.color-warning\r\n  color: colors.$orange3 !important\r\n.color-danger\r\n  color: colors.$red3 !important\r\n\r\n.color-dow-6\r\n  color: colors.$blue3 !important\r\n.color-dow-7\r\n  color: colors.$red3 !important\r\n\r\n.bg-genre-lv1-0\r\n  background: rgb(255,255,224) !important\r\n.bg-genre-lv1-1\r\n  background: rgb(224,224,255) !important\r\n.bg-genre-lv1-2\r\n  background: rgb(255,224,240) !important\r\n.bg-genre-lv1-3\r\n  background: rgb(255,224,224) !important\r\n.bg-genre-lv1-4\r\n  background: rgb(224,255,224) !important\r\n.bg-genre-lv1-5\r\n  background: rgb(224,255,255) !important\r\n.bg-genre-lv1-6\r\n  background: rgb(255,240,224) !important\r\n.bg-genre-lv1-7\r\n  background: rgb(255,224,255) !important\r\n.bg-genre-lv1-8\r\n  background: rgb(255,255,224) !important\r\n.bg-genre-lv1-9\r\n  background: rgb(255,240,224) !important\r\n.bg-genre-lv1-10\r\n  background: rgb(224,240,255) !important\r\n.bg-genre-lv1-11\r\n  background: rgb(224,240,255) !important\r\n.bg-genre-lv1-15\r\n  background: rgb(240,240,240) !important\r\n\r\n.bg-attribute-新\r\n  background: colors.$forest3 !important\r\n.bg-attribute-再\r\n  background: colors.$cerulean3 !important\r\n.bg-attribute-終\r\n  background: colors.$vermilion3 !important\r\n.bg-attribute-生\r\n  background: colors.$rose4 !important\r\n.bg-attribute-多\r\n  background: colors.$rose3 !important\r\n.bg-attribute-解\r\n  background: colors.$sepia4 !important\r\n.bg-attribute-初\r\n  background: colors.$lime3 !important\r\n.bg-attribute-手\r\n  background: colors.$sepia3 !important\r\n.bg-attribute-字\r\n  background: colors.$gray3 !important\r\n.bg-attribute-デ,\r\n.bg-attribute-双\r\n  background: colors.$violet3 !important\r\n.bg-attribute-二\r\n  background: colors.$gold3 !important\r\n.bg-attribute-無\r\n  background: colors.$turquoise3 !important\r\n\r\n#root\r\n  display: flex\r\n  flex-direction: column\r\n  width: 100vw\r\n  height: 100vh\r\n  overflow: hidden\r\n\r\n#dev-header\r\n  position: absolute\r\n  top: 0\r\n  left: 5px\r\n  font-size: 10px\r\n  z-index: 9999\r\n  opacity: 0.5\r\n\r\n#main\r\n  flex-direction: column\r\n  flex-grow: 1\r\n  // overflow-y: auto\r\n  position: relative\r\n\r\n#page\r\n  position: absolute\r\n  top: 0\r\n  right: 0\r\n  bottom: 0\r\n  left: 0\r\n  background: colors.$light-gray4\r\n\r\n  .bp6-dark &\r\n    background: colors.$dark-gray4\r\n\r\n  > .route\r\n    position: absolute\r\n    top: 0\r\n    right: 0\r\n    bottom: 0\r\n    left: 0\r\n    display: flex\r\n    flex-direction: column\r\n    flex-grow: 1\r\n\r\n    > .toolbar.bp6-navbar\r\n      z-index: 9\r\n      background: none\r\n      box-shadow: none\r\n\r\n      .bp6-navbar-heading\r\n        font-weight: 400\r\n        font-size: 18px\r\n\r\n        font-feature-settings: \"palt\" 1\r\n\r\n        .component-program-title\r\n          .name\r\n            font-weight: inherit\r\n          .attribute\r\n            font-size: 12px\r\n            vertical-align: 14%\r\n\r\n        .bp6-breadcrumb\r\n          font-weight: inherit\r\n          font-size: inherit\r\n\r\n      > .bp6-navbar-group\r\n        &.bp6-align-right\r\n          column-gap: 10px\r\n\r\n          .bp6-tab-list\r\n            column-gap: 20px\r\n\r\n            > .bp6-tab\r\n              &[aria-selected=\"true\"]\r\n                cursor: default\r\n\r\n              sup[class*=\"color-dow-\"]\r\n                font-weight: 600\r\n                margin-left: 2px\r\n\r\n    > .content\r\n      flex-grow: 1\r\n      overflow: auto\r\n      position: relative\r\n      margin: 0\r\n      padding: 10px 25px\r\n\r\n      &.no-margin\r\n        padding: 0\r\n","/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@keyframes fade-out\r\n  from\r\n    opacity: 1\r\n  to\r\n    opacity: 0\r\n\r\n@keyframes fade-in\r\n  from\r\n    opacity: 0\r\n  to\r\n    opacity: 1\r\n\r\n$invert-filter: brightness(52%) invert(100%) hue-rotate(180deg) saturate(300%) contrast(150%)\r\n\r\n$font-base: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic\", sans-serif\r\n$font-ui: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic UI\", sans-serif\r\n\r\n$theme-dark-primary: #ffd56c\r\n$theme-light-primary: #ffc126\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/AboutView.sass"
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/AboutView.sass ***!
  \*************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-about-view .about-container {
  max-width: 922px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
}
#route-about-view .about-card, #route-about-view .heart-card {
  padding: 24px;
}
#route-about-view .about-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
#route-about-view .about-header .product-icon {
  width: 48px;
  height: 48px;
}
#route-about-view .about-header h3 {
  margin: 0;
}
#route-about-view .about-info {
  margin-top: 16px;
  margin-bottom: 16px;
}
#route-about-view .about-info .info-table {
  width: 100%;
}
#route-about-view .about-info .info-table td:first-child {
  width: 150px;
  font-weight: bold;
}
#route-about-view .warranty-warning {
  background: #f6f7f9;
  border-left: 4px solid #cd4246;
  padding: 12px 16px;
  margin-bottom: 16px;
  border-radius: 0 4px 4px 0;
}
#route-about-view .warranty-warning .warranty-text {
  font-weight: bold;
  color: #ac2f33;
}
#route-about-view .links {
  display: flex;
  gap: 8px;
}
#route-about-view .consent {
  margin-top: 16px;
  padding: 16px;
  background: #f6f7f9;
  border-radius: 4px;
}
#route-about-view .consent p {
  margin-bottom: 12px;
}
#route-about-view .contributors-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
#route-about-view .contributors-list .section h5 {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
#route-about-view .contributors-list .section .text-small {
  font-size: 0.85em;
}
#route-about-view .contributors-list .section .image-container {
  margin-top: 12px;
  overflow-x: auto;
}
#route-about-view .contributors-list .section .opencollective-img {
  max-width: 100%;
  height: auto;
  display: block;
}
#route-about-view .contributors-list .section .sponsors-avatars {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
#route-about-view .contributors-list .section .sponsors-avatars .sponsor-avatar {
  padding: 4px;
  transition: transform 0.2s, box-shadow 0.2s;
}
#route-about-view .contributors-list .section .sponsors-avatars .sponsor-avatar:hover {
  transform: scale(1.05);
}

body.bp6-dark #route-about-view .warranty-warning {
  background: #383e47;
}
body.bp6-dark #route-about-view .warranty-warning .warranty-text {
  color: #e76a6e;
}
body.bp6-dark #route-about-view .consent {
  background: #383e47;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/AboutView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACGE;EACE,gBAAA;EACA,cAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,oBAAA;AACJ;AACE;EACE,aAAA;AACJ;AACE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;AACN;AACI;EACE,SAAA;AACN;AACE;EACE,gBAAA;EACA,mBAAA;AACJ;AACI;EACE,WAAA;AACN;AAAM;EACE,YAAA;EACA,iBAAA;AAER;AAAE;EACE,mBDhBU;ECiBV,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,0BAAA;AAEJ;AAAI;EACE,iBAAA;EACA,cDDC;ACGP;AAAE;EACE,aAAA;EACA,QAAA;AAEJ;AAAE;EACE,gBAAA;EACA,aAAA;EACA,mBDjCU;ECkCV,kBAAA;AAEJ;AADI;EACE,mBAAA;AAGN;AADE;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AAGJ;AAAM;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,QAAA;AAER;AAAM;EACE,iBAAA;AAER;AAAM;EACE,gBAAA;EACA,gBAAA;AAER;AAAM;EACE,eAAA;EACA,YAAA;EACA,cAAA;AAER;AAAM;EACE,gBAAA;EACA,aAAA;EACA,eAAA;EACA,QAAA;AAER;AAAQ;EACE,YAAA;EACA,2CAAA;AAEV;AAAU;EACE,sBAAA;AAEZ;;AAEI;EACE,mBD5FO;AC6Fb;AAAM;EACE,cDxDD;AC0DP;AAAI;EACE,mBDjGO;ACmGb","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-about-view\r\n  .about-container\r\n    max-width: 922px // opencollective img width is 890 + card padding\r\n    margin: 0 auto\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 16px\r\n    padding-bottom: 24px\r\n\r\n  .about-card, .heart-card\r\n    padding: 24px\r\n\r\n  .about-header\r\n    display: flex\r\n    align-items: center\r\n    gap: 16px\r\n    margin-bottom: 16px\r\n\r\n    .product-icon\r\n      width: 48px\r\n      height: 48px\r\n\r\n    h3\r\n      margin: 0\r\n\r\n  .about-info\r\n    margin-top: 16px\r\n    margin-bottom: 16px\r\n\r\n    .info-table\r\n      width: 100%\r\n      td:first-child\r\n        width: 150px\r\n        font-weight: bold\r\n\r\n  .warranty-warning\r\n    background: colors.$light-gray5\r\n    border-left: 4px solid colors.$red3\r\n    padding: 12px 16px\r\n    margin-bottom: 16px\r\n    border-radius: 0 4px 4px 0\r\n\r\n    .warranty-text\r\n      font-weight: bold\r\n      color: colors.$red2\r\n\r\n  .links\r\n    display: flex\r\n    gap: 8px\r\n\r\n  .consent\r\n    margin-top: 16px\r\n    padding: 16px\r\n    background: colors.$light-gray5\r\n    border-radius: 4px\r\n    p\r\n      margin-bottom: 12px\r\n\r\n  .contributors-list\r\n    margin-top: 16px\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 24px\r\n\r\n    .section\r\n      h5\r\n        margin-bottom: 8px\r\n        display: flex\r\n        align-items: center\r\n        gap: 8px\r\n\r\n      .text-small\r\n        font-size: 0.85em\r\n\r\n      .image-container\r\n        margin-top: 12px\r\n        overflow-x: auto\r\n\r\n      .opencollective-img\r\n        max-width: 100%\r\n        height: auto\r\n        display: block\r\n\r\n      .sponsors-avatars\r\n        margin-top: 12px\r\n        display: flex\r\n        flex-wrap: wrap\r\n        gap: 8px\r\n\r\n        .sponsor-avatar\r\n          padding: 4px\r\n          transition: transform 0.2s, box-shadow 0.2s\r\n\r\n          &:hover\r\n            transform: scale(1.05)\r\n\r\nbody.bp6-dark\r\n  #route-about-view\r\n    .warranty-warning\r\n      background: colors.$dark-gray4\r\n      .warranty-text\r\n        color: colors.$red4\r\n\r\n    .consent\r\n      background: colors.$dark-gray4\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ChannelsConfigView.sass"
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ChannelsConfigView.sass ***!
  \**********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-channels-config-view .content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  overflow-y: auto;
}
#route-channels-config-view .channels-table {
  width: 100%;
  border-collapse: collapse;
}
#route-channels-config-view .channels-table th, #route-channels-config-view .channels-table td {
  vertical-align: top !important;
  padding: 12px 8px !important;
}
#route-channels-config-view .channels-table td .bp6-form-group {
  margin-bottom: 8px;
}
#route-channels-config-view .channels-table td .bp6-form-group:last-child {
  margin-bottom: 0;
}
#route-channels-config-view .channels-table td .bp6-label {
  margin-bottom: 3px;
  font-weight: 600;
  font-size: 11px;
  color: #5f6b7c;
}
.bp6-dark #route-channels-config-view .channels-table td .bp6-label {
  color: #abb3bf;
}
#route-channels-config-view .channel-options-grid {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  flex-wrap: wrap;
}
#route-channels-config-view .cmd-vars-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
  flex: 1;
}
#route-channels-config-view .cmd-vars-title {
  font-weight: 600;
  font-size: 11px;
  margin-bottom: 4px;
  color: #5f6b7c;
}
.bp6-dark #route-channels-config-view .cmd-vars-title {
  color: #abb3bf;
}
#route-channels-config-view .cmd-vars-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
#route-channels-config-view .cmd-var-pair {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: rgba(211, 216, 222, 0.4);
  padding: 2px 6px;
  border-radius: 4px;
}
.bp6-dark #route-channels-config-view .cmd-var-pair {
  background-color: rgba(64, 72, 84, 0.4);
}
#route-channels-config-view .cmd-var-pair .cmd-var-key, #route-channels-config-view .cmd-var-pair .cmd-var-value {
  width: 75px;
}
#route-channels-config-view .controls-cell {
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/ChannelsConfigView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,gBAAA;AACJ;AACE;EACE,WAAA;EACA,yBAAA;AACJ;AACI;EACE,8BAAA;EACA,4BAAA;AACN;AAEM;EACE,kBAAA;AAAR;AACQ;EACE,gBAAA;AACV;AACM;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,cDhBA;ACiBR;AACQ;EACE,cDhBF;ACiBR;AACE;EACE,aAAA;EACA,SAAA;EACA,uBAAA;EACA,eAAA;AACJ;AACE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;EACA,gBAAA;EACA,OAAA;AACJ;AACE;EACE,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,cDtCI;ACuCR;AAAI;EACE,cDrCE;ACuCR;AAAE;EACE,aAAA;EACA,eAAA;EACA,QAAA;EACA,mBAAA;AAEJ;AAAE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,0CAAA;EACA,gBAAA;EACA,kBAAA;AAEJ;AADI;EACE,uCAAA;AAGN;AADI;EACE,WAAA;AAGN;AADE;EACE,aAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;AAGJ","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-channels-config-view\r\n  .content\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 16px\r\n    padding: 20px\r\n    overflow-y: auto\r\n\r\n  .channels-table\r\n    width: 100%\r\n    border-collapse: collapse\r\n\r\n    th, td\r\n      vertical-align: top !important\r\n      padding: 12px 8px !important\r\n\r\n    td\r\n      .bp6-form-group\r\n        margin-bottom: 8px\r\n        &:last-child\r\n          margin-bottom: 0\r\n\r\n      .bp6-label\r\n        margin-bottom: 3px\r\n        font-weight: 600\r\n        font-size: 11px\r\n        color: colors.$gray1\r\n\r\n        .bp6-dark &\r\n          color: colors.$gray4\r\n\r\n  .channel-options-grid\r\n    display: flex\r\n    gap: 12px\r\n    align-items: flex-start\r\n    flex-wrap: wrap\r\n\r\n  .cmd-vars-container\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 4px\r\n    min-width: 200px\r\n    flex: 1\r\n\r\n  .cmd-vars-title\r\n    font-weight: 600\r\n    font-size: 11px\r\n    margin-bottom: 4px\r\n    color: colors.$gray1\r\n    .bp6-dark &\r\n      color: colors.$gray4\r\n\r\n  .cmd-vars-list\r\n    display: flex\r\n    flex-wrap: wrap\r\n    gap: 6px\r\n    align-items: center\r\n\r\n  .cmd-var-pair\r\n    display: flex\r\n    align-items: center\r\n    gap: 4px\r\n    background-color: rgba(colors.$light-gray1, 0.4)\r\n    padding: 2px 6px\r\n    border-radius: 4px\r\n    .bp6-dark &\r\n      background-color: rgba(colors.$dark-gray5, 0.4)\r\n\r\n    .cmd-var-key, .cmd-var-value\r\n      width: 75px\r\n\r\n  .controls-cell\r\n    display: flex\r\n    gap: 4px\r\n    justify-content: flex-end\r\n    align-items: center\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/HomeView.sass"
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/HomeView.sass ***!
  \************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#route-home-view .home-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#route-home-view .home-section {
  flex-shrink: 0;
  background: rgba(246, 247, 249, 0.2);
}
#route-home-view .home-section:last-child {
  margin-bottom: 20px;
}
.bp6-dark #route-home-view .home-section {
  background: rgba(17, 20, 24, 0.2);
}
#route-home-view .home-section-content {
  padding: 15px;
}
#route-home-view .bp6-section-header {
  min-height: 40px;
}
#route-home-view .status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 10px;
}
#route-home-view .status-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 4px;
}
#route-home-view .status-label {
  font-size: 12px;
  color: #8f99a8;
  font-weight: 500;
}
.bp6-dark #route-home-view .status-label {
  color: #c5cbd3;
}
#route-home-view .status-value {
  font-size: 14px;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Yu Gothic UI", sans-serif;
  word-break: break-all;
}
#route-home-view .service-filters {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
#route-home-view .service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 5px;
}
#route-home-view .service-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background 0.15s;
}
#route-home-view .service-item:hover {
  background: #e5e8eb;
}
.bp6-dark #route-home-view .service-item:hover {
  background: #252a31;
}
#route-home-view .service-item .bp6-icon {
  vertical-align: baseline;
}
#route-home-view .service-item-main {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 1;
  min-width: 0;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
#route-home-view .service-logo {
  width: 32px;
  height: auto;
  border-radius: 1px;
  flex-shrink: 0;
}
#route-home-view .service-name {
  flex: 1;
  min-width: 0;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#route-home-view .service-epg-status {
  flex-shrink: 0;
}
#route-home-view .service-play {
  flex-shrink: 0;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}
#route-home-view .service-play:hover {
  background: #e5e8eb;
}
.bp6-dark #route-home-view .service-play:hover {
  background: #252a31;
}
#route-home-view .service-tooltip {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Yu Gothic UI", sans-serif;
  line-height: 1.5;
}
.bp6-dark #route-home-view .service-tooltip {
  color: #5f6b7c;
}
#route-home-view .tuner-tree .bp6-tree-node .bp6-tree-node-content {
  height: 35px;
  gap: 10px;
}
#route-home-view .tuner-tree .bp6-tree-node .bp6-tree-node-content:hover {
  background: none;
}
#route-home-view .tuner-tree .bp6-tree-node-label {
  display: flex;
  align-items: center;
  gap: 10px;
}
#route-home-view .tuner-label {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
}
#route-home-view .tuner-device-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Yu Gothic UI", sans-serif;
  color: #5f6b7c;
  white-space: nowrap;
}
#route-home-view .tuner-device-info .bp6-button {
  margin-left: 4px;
  padding: 0 4px;
  min-width: unset;
  min-height: unset;
}
.bp6-dark #route-home-view .tuner-device-info {
  color: #738091;
}
#route-home-view .tuner-user-info {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 12px;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Yu Gothic UI", sans-serif;
  white-space: nowrap;
}
#route-home-view .tuner-user-info-item {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
#route-home-view .stream-info-link {
  color: #2d72d2;
  text-decoration: none;
  cursor: pointer;
}
#route-home-view .stream-info-link:hover {
  text-decoration: underline;
}
#route-home-view .color-epg-ready {
  color: #238551 !important;
}

.stream-info-table {
  width: 100%;
  table-layout: fixed;
  font-size: 12px;
  border-collapse: collapse;
}
.stream-info-table th, .stream-info-table td {
  padding: 4px 12px;
}
.stream-info-table th:nth-child(1), .stream-info-table td:nth-child(1) {
  text-align: left;
}
.stream-info-table th:nth-child(2), .stream-info-table td:nth-child(2),
.stream-info-table th:nth-child(3), .stream-info-table td:nth-child(3) {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
.stream-info-table td.color-danger {
  color: #cd4246;
}

body.bp6-dark #route-home-view .service-item:hover {
  background: #252a31;
}
body.bp6-dark #route-home-view .service-tooltip {
  color: #5f6b7c;
}
body.bp6-dark #route-home-view .tuner-device-info {
  color: #738091;
}
body.bp6-dark #route-home-view .color-epg-ready {
  color: #32a467 !important;
}
body.bp6-dark #route-home-view .stream-info-link {
  color: #4c90f0;
}
body.bp6-dark .stream-info-table td.color-danger {
  color: #e76a6e;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/vars.sass","webpack://./src/ui/routes/HomeView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACAA;EACE;IACE,UAAA;ECIF;EDHA;IACE,UAAA;ECKF;AACF;ADJA;EACE;IACE,UAAA;ECMF;EDLA;IACE,UAAA;ECOF;AACF;AAdE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAgBJ;AAdE;EACE,cAAA;EACA,oCAAA;AAgBJ;AAdI;EACE,mBAAA;AAgBN;AAdI;EACE,iCAAA;AAgBN;AAdE;EACE,aAAA;AAgBJ;AAdE;EACE,gBAAA;AAgBJ;AAbE;EACE,aAAA;EACA,4DAAA;EACA,SAAA;AAeJ;AAbE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;EACA,iBAAA;EACA,kBAAA;AAeJ;AAbE;EACE,eAAA;EACA,cF1BI;EE2BJ,gBAAA;AAeJ;AAbI;EACE,cF5BE;AE2CR;AAbE;EACE,eAAA;EACA,kKDjCM;ECkCN,qBAAA;AAeJ;AAZE;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AAcJ;AAZE;EACE,aAAA;EACA,4DAAA;EACA,QAAA;AAcJ;AAZE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,iBAAA;EACA,kBAAA;EACA,4BAAA;AAcJ;AAZI;EACE,mBFnDQ;AEiEd;AAZM;EACE,mBFnEK;AEiFb;AAZI;EACE,wBAAA;AAcN;AAZE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,OAAA;EACA,YAAA;EACA,cAAA;EACA,qBAAA;EACA,eAAA;AAcJ;AAZE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;AAcJ;AAZE;EACE,OAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AAcJ;AAZE;EACE,cAAA;AAcJ;AAZE;EACE,cAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,4BAAA;AAcJ;AAZI;EACE,mBF/FQ;AE6Gd;AAZM;EACE,mBF/GK;AE6Hb;AAZE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;EACA,eAAA;EACA,kKD9GM;EC+GN,gBAAA;AAcJ;AAZI;EACE,cFrHE;AEmIR;AARM;EACE,YAAA;EACA,SAAA;AAUR;AARM;EACE,gBAAA;AAUR;AARI;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAUN;AARE;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;AAUJ;AARE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;EACA,kKD9IM;EC+IN,cFlJI;EEmJJ,mBAAA;AAUJ;AARI;EACE,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;AAUN;AARI;EACE,cF3JE;AEqKR;AARE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,eAAA;EACA,kKDhKM;ECiKN,mBAAA;AAUJ;AARE;EACE,oBAAA;EACA,mBAAA;EACA,QAAA;AAUJ;AARE;EACE,cF5JI;EE6JJ,qBAAA;EACA,eAAA;AAUJ;AARI;EACE,0BAAA;AAUN;AAPE;EACE,yBAAA;AASJ;;AANA;EACE,WAAA;EACA,mBAAA;EACA,eAAA;EACA,yBAAA;AASF;AAPE;EACE,iBAAA;AASJ;AAPE;EACE,gBAAA;AASJ;AAPE;;EAEE,iBAAA;EACA,kCAAA;AASJ;AAPE;EACE,cFxKG;AEiLP;;AAFM;EACE,mBFvNK;AE4Nb;AAHI;EACE,cFrNE;AE0NR;AAHI;EACE,cFvNE;AE4NR;AAHI;EACE,yBAAA;AAKN;AAHI;EACE,cF7ME;AEkNR;AAHE;EACE,cF9LG;AEmMP","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@keyframes fade-out\r\n  from\r\n    opacity: 1\r\n  to\r\n    opacity: 0\r\n\r\n@keyframes fade-in\r\n  from\r\n    opacity: 0\r\n  to\r\n    opacity: 1\r\n\r\n$invert-filter: brightness(52%) invert(100%) hue-rotate(180deg) saturate(300%) contrast(150%)\r\n\r\n$font-base: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic\", sans-serif\r\n$font-ui: -apple-system, \"BlinkMacSystemFont\", \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Open Sans\", \"Helvetica Neue\", \"Yu Gothic UI\", sans-serif\r\n\r\n$theme-dark-primary: #ffd56c\r\n$theme-light-primary: #ffc126\r\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n@use \"../vars\"\r\n\r\n#route-home-view\r\n  .home-container\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 20px\r\n\r\n  .home-section\r\n    flex-shrink: 0\r\n    background: rgba(colors.$light-gray5, 0.2)\r\n\r\n    &:last-child\r\n      margin-bottom: 20px\r\n\r\n    .bp6-dark &\r\n      background: rgba(colors.$black, 0.2)\r\n\r\n  .home-section-content\r\n    padding: 15px\r\n\r\n  .bp6-section-header\r\n    min-height: 40px\r\n\r\n  // --- Status Section ---\r\n  .status-grid\r\n    display: grid\r\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))\r\n    gap: 10px\r\n\r\n  .status-item\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 5px\r\n    padding: 5px 10px\r\n    border-radius: 4px\r\n\r\n  .status-label\r\n    font-size: 12px\r\n    color: colors.$gray3\r\n    font-weight: 500\r\n\r\n    .bp6-dark &\r\n      color: colors.$gray5\r\n\r\n  .status-value\r\n    font-size: 14px\r\n    font-family: vars.$font-ui\r\n    word-break: break-all\r\n\r\n  // --- Services Section ---\r\n  .service-filters\r\n    display: flex\r\n    gap: 10px\r\n    margin-bottom: 10px\r\n\r\n  .service-grid\r\n    display: grid\r\n    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))\r\n    gap: 5px\r\n\r\n  .service-item\r\n    display: flex\r\n    align-items: center\r\n    gap: 5px\r\n    padding: 5px 10px\r\n    border-radius: 4px\r\n    transition: background 0.15s\r\n\r\n    &:hover\r\n      background: colors.$light-gray3\r\n\r\n      .bp6-dark &\r\n        background: colors.$dark-gray2\r\n\r\n    .bp6-icon\r\n      vertical-align: baseline\r\n\r\n  .service-item-main\r\n    display: flex\r\n    align-items: center\r\n    gap: 5px\r\n    flex: 1\r\n    min-width: 0\r\n    color: inherit\r\n    text-decoration: none\r\n    cursor: pointer\r\n\r\n  .service-logo\r\n    width: 32px\r\n    height: auto\r\n    border-radius: 1px\r\n    flex-shrink: 0\r\n\r\n  .service-name\r\n    flex: 1\r\n    min-width: 0\r\n    font-size: 13px\r\n    font-weight: 500\r\n    white-space: nowrap\r\n    overflow: hidden\r\n    text-overflow: ellipsis\r\n\r\n  .service-epg-status\r\n    flex-shrink: 0\r\n\r\n  .service-play\r\n    flex-shrink: 0\r\n    padding: 4px\r\n    border-radius: 4px\r\n    cursor: pointer\r\n    transition: background 0.15s\r\n\r\n    &:hover\r\n      background: colors.$light-gray3\r\n\r\n      .bp6-dark &\r\n        background: colors.$dark-gray2\r\n\r\n  .service-tooltip\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 5px\r\n    font-size: 12px\r\n    font-family: vars.$font-ui\r\n    line-height: 1.5\r\n\r\n    .bp6-dark &\r\n      color: colors.$gray1\r\n\r\n  // --- Tuners Section ---\r\n  .tuner-tree\r\n\r\n    .bp6-tree-node\r\n      .bp6-tree-node-content\r\n        height: 35px\r\n        gap: 10px\r\n\r\n      .bp6-tree-node-content:hover\r\n        background: none\r\n\r\n    .bp6-tree-node-label\r\n      display: flex\r\n      align-items: center\r\n      gap: 10px\r\n\r\n  .tuner-label\r\n    font-size: 13px\r\n    font-weight: 600\r\n    white-space: nowrap\r\n\r\n  .tuner-device-info\r\n    display: flex\r\n    align-items: center\r\n    gap: 10px\r\n    font-size: 12px\r\n    font-family: vars.$font-ui\r\n    color: colors.$gray1\r\n    white-space: nowrap\r\n\r\n    .bp6-button\r\n      margin-left: 4px\r\n      padding: 0 4px\r\n      min-width: unset\r\n      min-height: unset\r\n\r\n    .bp6-dark &\r\n      color: colors.$gray2\r\n\r\n  .tuner-user-info\r\n    display: flex\r\n    align-items: center\r\n    gap: 16px\r\n    font-size: 12px\r\n    font-family: vars.$font-ui\r\n    white-space: nowrap\r\n\r\n  .tuner-user-info-item\r\n    display: inline-flex\r\n    align-items: center\r\n    gap: 4px\r\n\r\n  .stream-info-link\r\n    color: colors.$blue3\r\n    text-decoration: none\r\n    cursor: pointer\r\n\r\n    &:hover\r\n      text-decoration: underline\r\n\r\n  // --- EPG Ready Color ---\r\n  .color-epg-ready\r\n    color: colors.$green3 !important\r\n\r\n// Stream Info Dialog (rendered via Portal outside #route-home-view)\r\n.stream-info-table\r\n  width: 100%\r\n  table-layout: fixed\r\n  font-size: 12px\r\n  border-collapse: collapse\r\n\r\n  th, td\r\n    padding: 4px 12px\r\n\r\n  th:nth-child(1), td:nth-child(1)\r\n    text-align: left\r\n\r\n  th:nth-child(2), td:nth-child(2),\r\n  th:nth-child(3), td:nth-child(3)\r\n    text-align: right\r\n    font-variant-numeric: tabular-nums\r\n\r\n  td.color-danger\r\n    color: colors.$red3\r\n\r\n// Dark mode adjustments\r\nbody.bp6-dark\r\n  #route-home-view\r\n    .service-item\r\n\r\n      &:hover\r\n        background: colors.$dark-gray2\r\n\r\n    .service-tooltip\r\n      color: colors.$gray1\r\n\r\n    .tuner-device-info\r\n      color: colors.$gray2\r\n\r\n    .color-epg-ready\r\n      color: colors.$green4 !important\r\n\r\n    .stream-info-link\r\n      color: colors.$blue4\r\n\r\n  .stream-info-table td.color-danger\r\n    color: colors.$red4\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/JobsView.sass"
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/JobsView.sass ***!
  \************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-jobs-view .content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#route-jobs-view .content > * {
  flex-shrink: 0;
}
#route-jobs-view .content .bp6-section {
  background: rgba(246, 247, 249, 0.2);
}
.bp6-dark #route-jobs-view .content .bp6-section {
  background: rgba(17, 20, 24, 0.2);
}
.bp6-dark #route-jobs-view .content .bp6-section-header:hover, .bp6-dark #route-jobs-view .content .bp6-section-header:active {
  background: rgba(17, 20, 24, 0.1);
}
#route-jobs-view .content .bp6-collapse-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
#route-jobs-view .content .bp6-navbar,
#route-jobs-view .content .bp6-navbar-group {
  height: 30px;
}
#route-jobs-view .content .bp6-navbar {
  box-shadow: none;
  background: none;
  padding: 0 5px;
}
#route-jobs-view .content .bp6-navbar .bp6-navbar-group {
  gap: 10px;
}
#route-jobs-view .content .bp6-navbar .bp6-navbar-group > span {
  opacity: 0.75;
}
#route-jobs-view .content .bp6-navbar:hover .bp6-navbar-group > span {
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/JobsView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACJ;AACI;EACE,cAAA;AACN;AACI;EACE,oCAAA;AACN;AACM;EACE,iCAAA;AACR;AAKQ;EAEE,iCAAA;AAJV;AAMI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;AAJN;AAMI;;EAEE,YAAA;AAJN;AAMI;EACE,gBAAA;EACA,gBAAA;EACA,cAAA;AAJN;AAMM;EACE,SAAA;AAJR;AAMQ;EACE,aAAA;AAJV;AAMM;EACE,UAAA;AAJR","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-jobs-view\r\n  .content\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 20px\r\n\r\n    > *\r\n      flex-shrink: 0\r\n\r\n    .bp6-section\r\n      background: rgba(colors.$light-gray5, 0.2)\r\n\r\n      .bp6-dark &\r\n        background: rgba(colors.$black, 0.2)\r\n\r\n    .bp6-section-header\r\n\r\n      .bp6-dark &\r\n\r\n        &:hover,\r\n        &:active\r\n          background: rgba(colors.$black, 0.1)\r\n\r\n    .bp6-collapse-body\r\n      display: flex\r\n      flex-direction: column\r\n      gap: 10px\r\n      padding: 10px\r\n\r\n    .bp6-navbar,\r\n    .bp6-navbar-group\r\n      height: 30px\r\n\r\n    .bp6-navbar\r\n      box-shadow: none\r\n      background: none\r\n      padding: 0 5px\r\n\r\n      .bp6-navbar-group\r\n        gap: 10px\r\n\r\n        > span\r\n          opacity: 0.75\r\n\r\n      &:hover .bp6-navbar-group > span\r\n        opacity: 1\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/LogsView.sass"
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/LogsView.sass ***!
  \************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-logs-view {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: scroll;
  overflow-x: hidden;
  background: #252a31;
}
#route-logs-view .logs {
  padding: 8px 0;
  font-family: "Courier New", Courier, monospace;
  font-size: 12px;
  color: #8f99a8;
}
#route-logs-view .logs > div {
  padding: 2px 16px;
  word-break: break-all;
  white-space: break-spaces;
}
#route-logs-view .logs > div:hover {
  background: #1c2127;
}
#route-logs-view .logs > div.latest {
  padding: 0;
}
#route-logs-view .logs > div.level-debug {
  color: #bdadff;
}
#route-logs-view .logs > div.level-info {
  color: #d3d8de;
}
#route-logs-view .logs > div.level-warn {
  color: #c87619;
}
#route-logs-view .logs > div.level-error {
  color: #e76a6e;
}
#route-logs-view .logs > div.level-fatal {
  color: #ffffff;
  background: #cd4246;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/LogsView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACEA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBDHW;ACKb;AAAE;EACE,cAAA;EACA,8CAAA;EACA,eAAA;EACA,cDFI;ACIR;AAAI;EACE,iBAAA;EACA,qBAAA;EACA,yBAAA;AAEN;AAAM;EACE,mBDlBK;ACoBb;AAAI;EACE,UAAA;AAEN;AAAI;EACE,cD0CI;ACxCV;AAAI;EACE,cDfQ;ACiBd;AAAI;EACE,cDII;ACFV;AAAI;EACE,cDQC;ACNP;AAAI;EACE,cDlBE;ECmBF,mBDGC;ACDP","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-logs-view\r\n  position: absolute\r\n  top: 0\r\n  right: 0\r\n  bottom: 0\r\n  left: 0\r\n  overflow: scroll\r\n  overflow-x: hidden\r\n  background: colors.$dark-gray2\r\n\r\n  .logs\r\n    padding: 8px 0\r\n    font-family: 'Courier New', Courier, monospace\r\n    font-size: 12px\r\n    color: colors.$gray3\r\n\r\n    > div\r\n      padding: 2px 16px\r\n      word-break: break-all\r\n      white-space: break-spaces\r\n\r\n      &:hover\r\n        background: colors.$dark-gray1\r\n\r\n    > div.latest\r\n      padding: 0\r\n\r\n    > div.level-debug\r\n      color: colors.$indigo5\r\n\r\n    > div.level-info\r\n      color: colors.$light-gray1\r\n\r\n    > div.level-warn\r\n      color: colors.$orange3\r\n\r\n    > div.level-error\r\n      color: colors.$red4\r\n\r\n    > div.level-fatal\r\n      color: colors.$white\r\n      background: colors.$red3\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ProgramView.sass"
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ProgramView.sass ***!
  \***************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-program-view .content > * {
  margin: 20px 0;
}
#route-program-view .content > *:first-child {
  margin-top: 0;
}
#route-program-view .content > .flex {
  display: flex;
  gap: 15px;
  align-items: center;
}
#route-program-view .content > .flex > .component-date-time-range {
  color: #738091;
}
.bp6-dark #route-program-view .content > .flex > .component-date-time-range {
  color: #abb3bf;
}
#route-program-view .content > p,
#route-program-view .content > .extended > p {
  max-width: 650px;
  white-space: pre-wrap;
  font-feature-settings: "palt" 1;
}
#route-program-view .content > .extended h4 {
  font-size: 13px;
  font-weight: 600;
  margin: 15px 0 10px;
}
#route-program-view .content > .extended p {
  margin-left: 15px;
}
#route-program-view .content > .extended h4 + p {
  margin-top: 10px;
}
#route-program-view .content > p.meta {
  font-size: 11px;
  opacity: 0.5;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/ProgramView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACII;EACE,cAAA;AAAN;AAEM;EACE,aAAA;AAAR;AAEI;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AAAN;AAEM;EACE,cDHA;ACGR;AAEQ;EACE,cDJF;ACIR;AAEI;;EAEE,gBAAA;EACA,qBAAA;EACA,+BAAA;AAAN;AAGM;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;AADR;AAGM;EACE,iBAAA;AADR;AAGM;EACE,gBAAA;AADR;AAGI;EACE,eAAA;EACA,YAAA;AADN","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-program-view\r\n  .content\r\n    > *\r\n      margin: 20px 0\r\n\r\n      &:first-child\r\n        margin-top: 0\r\n\r\n    > .flex\r\n      display: flex\r\n      gap: 15px\r\n      align-items: center\r\n\r\n      > .component-date-time-range\r\n        color: colors.$gray2\r\n\r\n        .bp6-dark &\r\n          color: colors.$gray4\r\n\r\n    > p,\r\n    > .extended > p\r\n      max-width: 650px\r\n      white-space: pre-wrap\r\n      font-feature-settings: \"palt\" 1\r\n\r\n    > .extended\r\n      h4\r\n        font-size: 13px\r\n        font-weight: 600\r\n        margin: 15px 0 10px\r\n\r\n      p\r\n        margin-left: 15px\r\n\r\n      h4 + p\r\n        margin-top: 10px\r\n\r\n    > p.meta\r\n      font-size: 11px\r\n      opacity: 0.5\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/SearchView.sass"
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/SearchView.sass ***!
  \**************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-search-view .content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
#route-search-view .content > .bp6-card {
  max-width: 680px;
  background-color: #edeff2;
}
.bp6-dark #route-search-view .content > .bp6-card {
  background-color: #383e47;
}
#route-search-view .component-program-title {
  font-size: 18px;
  line-height: 1.3em;
}
#route-search-view .component-program-title .name {
  font-weight: 400;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/SearchView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AACJ;AACI;EACE,gBAAA;EACA,yBDWQ;ACVd;AACM;EACE,yBDJK;ACKb;AACE;EACE,eAAA;EACA,kBAAA;AACJ;AACI;EACE,gBAAA;AACN","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-search-view\r\n  .content\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 15px\r\n\r\n    > .bp6-card\r\n      max-width: 680px\r\n      background-color: colors.$light-gray4\r\n\r\n      .bp6-dark &\r\n        background-color: colors.$dark-gray4\r\n\r\n  .component-program-title\r\n    font-size: 18px\r\n    line-height: 1.3em\r\n\r\n    .name\r\n      font-weight: 400\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ServerConfigView.sass"
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ServerConfigView.sass ***!
  \********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-server-config-view .content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 20px;
}
#route-server-config-view .content .config-section {
  flex-shrink: 0;
  background: rgba(246, 247, 249, 0.2);
}
#route-server-config-view .content .config-section:last-child {
  margin-bottom: 20px;
}
.bp6-dark #route-server-config-view .content .config-section {
  background: rgba(17, 20, 24, 0.2);
}
#route-server-config-view .content .config-section .bp6-collapse-body {
  padding: 0;
}
#route-server-config-view .content .config-section > .bp6-section-card {
  padding: 0;
}
#route-server-config-view .content .bp6-section-header {
  min-height: 44px;
}
.bp6-dark #route-server-config-view .content .bp6-section-header:hover, .bp6-dark #route-server-config-view .content .bp6-section-header:active {
  background: rgba(17, 20, 24, 0.1);
}
#route-server-config-view .content .config-form-grid {
  display: flex;
  flex-direction: column;
}
#route-server-config-view .content .config-form-grid .bp6-form-group {
  padding: 14px 20px 16px;
  margin: 0;
  border-top: 1px solid rgba(211, 216, 222, 0.65);
}
.bp6-dark #route-server-config-view .content .config-form-grid .bp6-form-group {
  border-top-color: rgba(64, 72, 84, 0.7);
}
#route-server-config-view .content .config-form-grid .bp6-label {
  margin-bottom: 5px;
  font-weight: 600;
}
#route-server-config-view .content .config-form-grid .bp6-html-select,
#route-server-config-view .content .config-form-grid .bp6-input-group {
  width: min(100%, 200px);
}
#route-server-config-view .content .config-form-grid .bp6-numeric-input {
  width: min(100%, 100px);
}
#route-server-config-view .content .config-form-grid textarea.bp6-input {
  width: min(100%, 400px);
  min-height: 88px;
  resize: vertical;
}
#route-server-config-view .content .config-form-grid .bp6-html-select select,
#route-server-config-view .content .config-form-grid .bp6-input,
#route-server-config-view .content .config-form-grid .bp6-numeric-input .bp6-input-group {
  width: 100%;
}
#route-server-config-view .content .config-form-grid .bp6-numeric-input .bp6-button-group {
  flex-shrink: 0;
}
#route-server-config-view .content .config-form-grid .bp6-control {
  display: flex;
  align-items: center;
  min-height: 30px;
  margin-bottom: 0;
}
#route-server-config-view .content .config-form-grid .bp6-form-helper-text {
  max-width: 680px;
  margin-top: 6px;
  line-height: 1.45;
}
#route-server-config-view .content .config-switch-group .bp6-control {
  width: fit-content;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/ServerConfigView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;AACJ;AACI;EACE,cAAA;EACA,oCAAA;AACN;AACM;EACE,mBAAA;AACR;AACM;EACE,iCAAA;AACR;AACM;EACE,UAAA;AACR;AACM;EACE,UAAA;AACR;AACI;EACE,gBAAA;AACN;AAGQ;EAEE,iCAAA;AAFV;AAII;EACE,aAAA;EACA,sBAAA;AAFN;AAIM;EACE,uBAAA;EACA,SAAA;EACA,+CAAA;AAFR;AAIQ;EACE,uCAAA;AAFV;AAIM;EACE,kBAAA;EACA,gBAAA;AAFR;AAIM;;EAEE,uBAAA;AAFR;AAIM;EACE,uBAAA;AAFR;AAIM;EACE,uBAAA;EACA,gBAAA;EACA,gBAAA;AAFR;AAIM;;;EAGE,WAAA;AAFR;AAKQ;EACE,cAAA;AAHV;AAKM;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;AAHR;AAKM;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;AAHR;AAMM;EACE,kBAAA;AAJR","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-server-config-view\r\n  .content\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 16px\r\n    padding-top: 20px\r\n\r\n    .config-section\r\n      flex-shrink: 0\r\n      background: rgba(colors.$light-gray5, 0.2)\r\n\r\n      &:last-child\r\n        margin-bottom: 20px\r\n\r\n      .bp6-dark &\r\n        background: rgba(colors.$black, 0.2)\r\n\r\n      .bp6-collapse-body\r\n        padding: 0\r\n\r\n      > .bp6-section-card\r\n        padding: 0\r\n\r\n    .bp6-section-header\r\n      min-height: 44px\r\n\r\n      .bp6-dark &\r\n\r\n        &:hover,\r\n        &:active\r\n          background: rgba(colors.$black, 0.1)\r\n\r\n    .config-form-grid\r\n      display: flex\r\n      flex-direction: column\r\n\r\n      .bp6-form-group\r\n        padding: 14px 20px 16px\r\n        margin: 0\r\n        border-top: 1px solid rgba(colors.$light-gray1, 0.65)\r\n\r\n        .bp6-dark &\r\n          border-top-color: rgba(colors.$dark-gray5, 0.7)\r\n\r\n      .bp6-label\r\n        margin-bottom: 5px\r\n        font-weight: 600\r\n\r\n      .bp6-html-select,\r\n      .bp6-input-group\r\n        width: min(100%, 200px)\r\n\r\n      .bp6-numeric-input\r\n        width: min(100%, 100px)\r\n\r\n      textarea.bp6-input\r\n        width: min(100%, 400px)\r\n        min-height: 88px\r\n        resize: vertical\r\n\r\n      .bp6-html-select select,\r\n      .bp6-input,\r\n      .bp6-numeric-input .bp6-input-group\r\n        width: 100%\r\n\r\n      .bp6-numeric-input\r\n        .bp6-button-group\r\n          flex-shrink: 0\r\n\r\n      .bp6-control\r\n        display: flex\r\n        align-items: center\r\n        min-height: 30px\r\n        margin-bottom: 0\r\n\r\n      .bp6-form-helper-text\r\n        max-width: 680px\r\n        margin-top: 6px\r\n        line-height: 1.45\r\n\r\n    .config-switch-group\r\n      .bp6-control\r\n        width: fit-content\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/TunersConfigView.sass"
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/TunersConfigView.sass ***!
  \********************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 */
#route-tuners-config-view .content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  overflow-y: auto;
}
#route-tuners-config-view .tuner-table {
  width: 100%;
  border-collapse: collapse;
}
#route-tuners-config-view .tuner-table th, #route-tuners-config-view .tuner-table td {
  vertical-align: top !important;
  padding: 12px 8px !important;
}
#route-tuners-config-view .tuner-table td .bp6-form-group {
  margin-bottom: 8px;
}
#route-tuners-config-view .tuner-table td .bp6-form-group:last-child {
  margin-bottom: 0;
}
#route-tuners-config-view .tuner-table td .bp6-label {
  margin-bottom: 3px;
  font-weight: 600;
  font-size: 11px;
  color: #5f6b7c;
}
.bp6-dark #route-tuners-config-view .tuner-table td .bp6-label {
  color: #abb3bf;
}
#route-tuners-config-view .types-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
#route-tuners-config-view .types-base {
  display: flex;
  flex-wrap: wrap;
  gap: 2px 8px;
}
#route-tuners-config-view .types-base .bp6-control {
  margin-bottom: 0;
}
#route-tuners-config-view .types-nw-header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  font-size: 11px;
  font-weight: 600;
  color: #5f6b7c;
}
.bp6-dark #route-tuners-config-view .types-nw-header {
  color: #abb3bf;
}
#route-tuners-config-view .types-nw-header .bp6-button {
  min-height: 16px;
  font-size: 10px;
  padding: 0 4px;
}
#route-tuners-config-view .types-nw-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
}
#route-tuners-config-view .types-nw-grid .bp6-control.bp6-checkbox {
  flex: 0 0 36px;
  width: 36px;
  margin-bottom: 2px;
  font-size: 11px;
  padding-left: 20px;
  white-space: nowrap;
}
#route-tuners-config-view .types-nw-grid .bp6-control.bp6-checkbox .bp6-control-indicator {
  width: 14px;
  height: 14px;
  min-width: 14px;
  font-size: 12px;
}
#route-tuners-config-view .remote-mirakurun-group {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  margin-bottom: 8px;
}
#route-tuners-config-view .remote-mirakurun-group .bp6-form-group {
  margin-bottom: 0 !important;
}
#route-tuners-config-view .tuner-options-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
#route-tuners-config-view .controls-cell {
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./node_modules/@blueprintjs/colors/lib/scss/colors.scss","webpack://./src/ui/routes/TunersConfigView.sass"],"names":[],"mappings":"AAAA;;EAAA;ACGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,aAAA;EACA,gBAAA;AACJ;AACE;EACE,WAAA;EACA,yBAAA;AACJ;AACI;EACE,8BAAA;EACA,4BAAA;AACN;AAEM;EACE,kBAAA;AAAR;AACQ;EACE,gBAAA;AACV;AACM;EACE,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,cDhBA;ACiBR;AACQ;EACE,cDhBF;ACiBR;AACE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AACJ;AACE;EACE,aAAA;EACA,eAAA;EACA,YAAA;AACJ;AACI;EACE,gBAAA;AACN;AACE;EACE,aAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,cDzCI;AC0CR;AACI;EACE,cDzCE;AC0CR;AACI;EACE,gBAAA;EACA,eAAA;EACA,cAAA;AACN;AACE;EACE,aAAA;EACA,eAAA;EACA,MAAA;AACJ;AACI;EACE,cAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;AACN;AACM;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;AACR;AACE;EACE,aAAA;EACA,QAAA;EACA,qBAAA;EACA,kBAAA;AACJ;AACI;EACE,2BAAA;AACN;AACE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AACJ;AACE;EACE,aAAA;EACA,QAAA;EACA,yBAAA;EACA,mBAAA;AACJ","sourcesContent":["/*\n * Copyright 2023 Palantir Technologies, Inc. All rights reserved.\n */\n\n$black: #111418 !default;\n\n$dark-gray1: #1c2127 !default;\n$dark-gray2: #252a31 !default;\n$dark-gray3: #2f343c !default;\n$dark-gray4: #383e47 !default;\n$dark-gray5: #404854 !default;\n\n$gray1: #5f6b7c !default;\n$gray2: #738091 !default;\n$gray3: #8f99a8 !default;\n$gray4: #abb3bf !default;\n$gray5: #c5cbd3 !default;\n\n$light-gray1: #d3d8de !default;\n$light-gray2: #dce0e5 !default;\n$light-gray3: #e5e8eb !default;\n$light-gray4: #edeff2 !default;\n$light-gray5: #f6f7f9 !default;\n\n$white: #ffffff !default;\n\n$blue1: #184a90 !default;\n$blue2: #215db0 !default;\n$blue3: #2d72d2 !default;\n$blue4: #4c90f0 !default;\n$blue5: #8abbff !default;\n\n$green1: #165a36 !default;\n$green2: #1c6e42 !default;\n$green3: #238551 !default;\n$green4: #32a467 !default;\n$green5: #72ca9b !default;\n\n$orange1: #77450d !default;\n$orange2: #935610 !default;\n$orange3: #c87619 !default;\n$orange4: #ec9a3c !default;\n$orange5: #fbb360 !default;\n\n$red1: #8e292c !default;\n$red2: #ac2f33 !default;\n$red3: #cd4246 !default;\n$red4: #e76a6e !default;\n$red5: #fa999c !default;\n\n$vermilion1: #96290d !default;\n$vermilion2: #b83211 !default;\n$vermilion3: #d33d17 !default;\n$vermilion4: #eb6847 !default;\n$vermilion5: #ff9980 !default;\n\n$rose1: #a82255 !default;\n$rose2: #c22762 !default;\n$rose3: #db2c6f !default;\n$rose4: #f5498b !default;\n$rose5: #ff66a1 !default;\n\n$violet1: #5c255c !default;\n$violet2: #7c327c !default;\n$violet3: #9d3f9d !default;\n$violet4: #bd6bbd !default;\n$violet5: #d69fd6 !default;\n\n$indigo1: #5642a6 !default;\n$indigo2: #634dbf !default;\n$indigo3: #7961db !default;\n$indigo4: #9881f3 !default;\n$indigo5: #bdadff !default;\n\n$cerulean1: #0c5174 !default;\n$cerulean2: #0f6894 !default;\n$cerulean3: #147eb3 !default;\n$cerulean4: #3fa6da !default;\n$cerulean5: #68c1ee !default;\n\n$turquoise1: #004d46 !default;\n$turquoise2: #007067 !default;\n$turquoise3: #00a396 !default;\n$turquoise4: #13c9ba !default;\n$turquoise5: #7ae1d8 !default;\n\n$forest1: #1d7324 !default;\n$forest2: #238c2c !default;\n$forest3: #29a634 !default;\n$forest4: #43bf4d !default;\n$forest5: #62d96b !default;\n\n$lime1: #43501b !default;\n$lime2: #5a701a !default;\n$lime3: #8eb125 !default;\n$lime4: #b6d94c !default;\n$lime5: #d4f17e !default;\n\n$gold1: #5c4405 !default;\n$gold2: #866103 !default;\n$gold3: #d1980b !default;\n$gold4: #f0b726 !default;\n$gold5: #fbd065 !default;\n\n$sepia1: #5e4123 !default;\n$sepia2: #7a542e !default;\n$sepia3: #946638 !default;\n$sepia4: #af855a !default;\n$sepia5: #d0b090 !default;\n","@use \"~@blueprintjs/colors/lib/scss/colors\"\r\n\r\n#route-tuners-config-view\r\n  .content\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 16px\r\n    padding: 20px\r\n    overflow-y: auto\r\n\r\n  .tuner-table\r\n    width: 100%\r\n    border-collapse: collapse\r\n\r\n    th, td\r\n      vertical-align: top !important\r\n      padding: 12px 8px !important\r\n\r\n    td\r\n      .bp6-form-group\r\n        margin-bottom: 8px\r\n        &:last-child\r\n          margin-bottom: 0\r\n\r\n      .bp6-label\r\n        margin-bottom: 3px\r\n        font-weight: 600\r\n        font-size: 11px\r\n        color: colors.$gray1\r\n\r\n        .bp6-dark &\r\n          color: colors.$gray4\r\n\r\n  .types-section\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 4px\r\n\r\n  .types-base\r\n    display: flex\r\n    flex-wrap: wrap\r\n    gap: 2px 8px\r\n\r\n    .bp6-control\r\n      margin-bottom: 0\r\n\r\n  .types-nw-header\r\n    display: flex\r\n    align-items: center\r\n    gap: 4px\r\n    margin-top: 4px\r\n    font-size: 11px\r\n    font-weight: 600\r\n    color: colors.$gray1\r\n\r\n    .bp6-dark &\r\n      color: colors.$gray4\r\n\r\n    .bp6-button\r\n      min-height: 16px\r\n      font-size: 10px\r\n      padding: 0 4px\r\n\r\n  .types-nw-grid\r\n    display: flex\r\n    flex-wrap: wrap\r\n    gap: 0\r\n\r\n    .bp6-control.bp6-checkbox\r\n      flex: 0 0 36px\r\n      width: 36px\r\n      margin-bottom: 2px\r\n      font-size: 11px\r\n      padding-left: 20px\r\n      white-space: nowrap\r\n\r\n      .bp6-control-indicator\r\n        width: 14px\r\n        height: 14px\r\n        min-width: 14px\r\n        font-size: 12px\r\n\r\n  .remote-mirakurun-group\r\n    display: flex\r\n    gap: 8px\r\n    align-items: flex-end\r\n    margin-bottom: 8px\r\n\r\n    .bp6-form-group\r\n      margin-bottom: 0 !important\r\n\r\n  .tuner-options-grid\r\n    display: flex\r\n    flex-direction: column\r\n    gap: 8px\r\n\r\n  .controls-cell\r\n    display: flex\r\n    gap: 4px\r\n    justify-content: flex-end\r\n    align-items: center\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/ui/components/DateTimeRange.sass"
/*!**********************************************!*\
  !*** ./src/ui/components/DateTimeRange.sass ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_DateTimeRange_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./DateTimeRange.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/DateTimeRange.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_DateTimeRange_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_DateTimeRange_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_DateTimeRange_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_DateTimeRange_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/EPGTable.sass"
/*!*****************************************!*\
  !*** ./src/ui/components/EPGTable.sass ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_EPGTable_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./EPGTable.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/EPGTable.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_EPGTable_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_EPGTable_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_EPGTable_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_EPGTable_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/Nav.sass"
/*!************************************!*\
  !*** ./src/ui/components/Nav.sass ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_Nav_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./Nav.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/Nav.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_Nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_Nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_Nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_Nav_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/ProgramAVInfo.sass"
/*!**********************************************!*\
  !*** ./src/ui/components/ProgramAVInfo.sass ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramAVInfo_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ProgramAVInfo.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramAVInfo.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramAVInfo_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramAVInfo_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramAVInfo_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramAVInfo_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/ProgramCardBase.sass"
/*!************************************************!*\
  !*** ./src/ui/components/ProgramCardBase.sass ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramCardBase_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ProgramCardBase.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramCardBase.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramCardBase_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramCardBase_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramCardBase_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramCardBase_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/ProgramGenres.sass"
/*!**********************************************!*\
  !*** ./src/ui/components/ProgramGenres.sass ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramGenres_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ProgramGenres.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramGenres.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramGenres_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramGenres_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramGenres_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramGenres_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/ProgramPopover.sass"
/*!***********************************************!*\
  !*** ./src/ui/components/ProgramPopover.sass ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramPopover_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ProgramPopover.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramPopover.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramPopover_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramPopover_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramPopover_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramPopover_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/ProgramRelatedLinks.sass"
/*!****************************************************!*\
  !*** ./src/ui/components/ProgramRelatedLinks.sass ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramRelatedLinks_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ProgramRelatedLinks.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramRelatedLinks.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramRelatedLinks_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramRelatedLinks_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramRelatedLinks_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramRelatedLinks_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/ProgramTitle.sass"
/*!*********************************************!*\
  !*** ./src/ui/components/ProgramTitle.sass ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramTitle_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ProgramTitle.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ProgramTitle.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramTitle_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramTitle_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramTitle_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramTitle_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/ServiceLink.sass"
/*!********************************************!*\
  !*** ./src/ui/components/ServiceLink.sass ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServiceLink_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ServiceLink.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/components/ServiceLink.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServiceLink_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServiceLink_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServiceLink_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServiceLink_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/index.sass"
/*!***************************!*\
  !*** ./src/ui/index.sass ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_index_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs/index.js!./index.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/index.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_index_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/AboutView.sass"
/*!**************************************!*\
  !*** ./src/ui/routes/AboutView.sass ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_AboutView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./AboutView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/AboutView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_AboutView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_AboutView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_AboutView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_AboutView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/ChannelsConfigView.sass"
/*!***********************************************!*\
  !*** ./src/ui/routes/ChannelsConfigView.sass ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ChannelsConfigView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ChannelsConfigView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ChannelsConfigView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ChannelsConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ChannelsConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ChannelsConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ChannelsConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/HomeView.sass"
/*!*************************************!*\
  !*** ./src/ui/routes/HomeView.sass ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_HomeView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./HomeView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/HomeView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_HomeView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_HomeView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_HomeView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_HomeView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/JobsView.sass"
/*!*************************************!*\
  !*** ./src/ui/routes/JobsView.sass ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_JobsView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./JobsView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/JobsView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_JobsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_JobsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_JobsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_JobsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/LogsView.sass"
/*!*************************************!*\
  !*** ./src/ui/routes/LogsView.sass ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_LogsView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./LogsView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/LogsView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_LogsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_LogsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_LogsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_LogsView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/ProgramView.sass"
/*!****************************************!*\
  !*** ./src/ui/routes/ProgramView.sass ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ProgramView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ProgramView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ProgramView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/SearchView.sass"
/*!***************************************!*\
  !*** ./src/ui/routes/SearchView.sass ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_SearchView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./SearchView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/SearchView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_SearchView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_SearchView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_SearchView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_SearchView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/ServerConfigView.sass"
/*!*********************************************!*\
  !*** ./src/ui/routes/ServerConfigView.sass ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServerConfigView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./ServerConfigView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/ServerConfigView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServerConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServerConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServerConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_ServerConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/routes/TunersConfigView.sass"
/*!*********************************************!*\
  !*** ./src/ui/routes/TunersConfigView.sass ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_TunersConfigView_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs/index.js!./TunersConfigView.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs/index.js!./src/ui/routes/TunersConfigView.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_TunersConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_TunersConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_TunersConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_index_js_TunersConfigView_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./src/ui/components/DateTimeRange.tsx"
/*!*********************************************!*\
  !*** ./src/ui/components/DateTimeRange.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateTimeRange: () => (/* binding */ DateTimeRange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/common */ "./src/ui/modules/common.ts");
/* harmony import */ var _modules_at__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/at */ "./src/ui/modules/at.ts");
/* harmony import */ var _DateTimeRange_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateTimeRange.sass */ "./src/ui/components/DateTimeRange.sass");






const DateTimeRange = ({ start, end }) => {
    console.debug("components", "DateTimeRange");
    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const nowDate = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.now();
    const startDate = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromMillis(start);
    const endDate = end ? luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.fromMillis(end) : undefined;
    const durationS = endDate ? endDate.diff(startDate, "seconds").seconds : 0;
    const deltaS = nowDate.diff(startDate, "seconds").seconds;
    const progress = end && (0,_modules_common__WEBPACK_IMPORTED_MODULE_2__.inRange)(nowDate, startDate, endDate) ? deltaS / durationS : undefined;
    const relative = progress ? "放送中" : `@${startDate.toRelative({ style: "narrow" })}`;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const schedules = [];
        if (nowDate <= startDate) {
            schedules.push((0,_modules_at__WEBPACK_IMPORTED_MODULE_3__.setSchedule)(startDate.toMillis(), () => setUpdate(Date.now())));
        }
        if (nowDate <= endDate) {
            schedules.push((0,_modules_at__WEBPACK_IMPORTED_MODULE_3__.setSchedule)(endDate.toMillis(), () => setUpdate(Date.now())));
        }
        return () => {
            for (const id of schedules) {
                ;(0,_modules_at__WEBPACK_IMPORTED_MODULE_3__.clearSchedule)(id);
            }
        };
    }, [start, end]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let ms = 10000;
        if (!progress) {
            const diff = Math.abs(deltaS);
            if (diff < 15) {
                ms = 1000;
            }
            else if (diff < 30) {
                ms = 5000;
            }
            else if (diff < 60) {
                ms = 10000;
            }
            else if (diff < 60 * 2) {
                ms = 20000;
            }
            else if (diff < 60 * 5) {
                ms = 30000;
            }
            else if (diff < 60 * 60) {
                ms = 60000;
            }
            else {
                ms = 180000;
            }
        }
        const timeoutId = setTimeout(() => setUpdate(Date.now()), ms);
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [update]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "component-date-time-range", title: startDate.toISO() },
        startDate.toFormat("M/d (ccc) HH:mm"),
        "\u00A0\u2013\u00A0",
        end && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            endDate.toFormat("HH:mm"),
            "\u00A0(",
            durationS / 60,
            "\u5206\u9593)"),
        "\u00A0",
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "relative" }, relative),
        progress && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "progress" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { width: `${progress * 100}%` } })))));
};


/***/ },

/***/ "./src/ui/components/EPGTable.tsx"
/*!****************************************!*\
  !*** ./src/ui/components/EPGTable.tsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPGTable: () => (/* binding */ EPGTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-indiana-drag-scroll */ "./node_modules/react-indiana-drag-scroll/dist/index.es.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/spinner/spinner.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var sift__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sift */ "./node_modules/sift/es5m/index.js");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/common */ "./src/ui/modules/common.ts");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _modules_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/regexp */ "./src/ui/modules/regexp.ts");
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/constants */ "./src/ui/modules/constants.ts");
/* harmony import */ var _ProgramTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProgramTitle */ "./src/ui/components/ProgramTitle.tsx");
/* harmony import */ var _ProgramPopover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProgramPopover */ "./src/ui/components/ProgramPopover.tsx");
/* harmony import */ var _ProgramGenres__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProgramGenres */ "./src/ui/components/ProgramGenres.tsx");
/* harmony import */ var _EPGTable_sass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EPGTable.sass */ "./src/ui/components/EPGTable.sass");















const scrollState = {
    left: {
        GR: -1,
        BS: -1,
        CS: -1,
        SKY: -1,
    },
    top: -1,
};
const EPGTable = ({ date, channelType, globalServiceId, defaultProgramId, defaultTime }) => {
    console.debug("components", "EPGTable");
    const startTime = date.toMillis();
    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const timescaleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const timelineRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const clockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const timetableRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const headerItemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const timescaleItemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const jumpToTimelineRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [reload, setReload] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [dimensions, setDimensions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [programId, setProgramId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProgramId || null);
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultTime || null);
    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [serviceItems, setServiceItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [timetableCols, setTimetableCols] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    if (globalServiceId) {
        if (services) {
            _modules_ui__WEBPACK_IMPORTED_MODULE_9__.setTitle(services[0]?.name);
        }
        else if (error) {
            _modules_ui__WEBPACK_IMPORTED_MODULE_9__.setTitle("エラー");
        }
    }
    ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onUpdated = () => {
            setReload(Date.now());
        };
        const onUpdatedLazy = new _modules_common__WEBPACK_IMPORTED_MODULE_7__.LazyCaller(0, 1000, onUpdated);
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.on("services", onUpdatedLazy.caller);
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.on("programs", onUpdatedLazy.caller);
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.subscribePrograms(true);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.off("services", onUpdatedLazy.caller);
            _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.off("programs", onUpdatedLazy.caller);
            onUpdatedLazy.destroy();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        return () => {
            setError(null);
        };
    }, [_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.location, reload]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        return () => {
            setServices(null);
            setServiceItems(null);
        };
    }, [channelType]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        return () => {
            setTimetableCols(null);
        };
    }, [channelType]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const timescale = timescaleRef.current;
        const headerItem = headerItemRef.current;
        const timescaleItem = timescaleItemRef.current;
        setDimensions({
            timescaleHeight: timescale.scrollHeight,
            blockWidth: headerItem.offsetWidth,
            scaleFactor: timescaleItem.offsetHeight / 60,
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!dimensions) {
            return;
        }
        const header = headerRef.current;
        const timescale = timescaleRef.current;
        const timeline = timelineRef.current;
        const clock = clockRef.current;
        const timetable = timetableRef.current;
        const jumpToTimeline = jumpToTimelineRef.current;
        if (!timetableCols) {
            return;
        }
        const getPosition = () => Math.floor((Date.now() - _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.todayTime) / 1000 / 60 * dimensions.scaleFactor);
        const onScroll = () => {
            scrollState.left[channelType] = header.scrollLeft = timetable.scrollLeft;
            scrollState.top = timescale.scrollTop = timetable.scrollTop;
        };
        timetable.addEventListener("scroll", onScroll);
        timeline.style.opacity = "";
        let showClockTimeout;
        const showClock = () => {
            showClockTimeout = setTimeout(() => timeline.classList.remove("show"), 1000);
            timeline.classList.add("show");
        };
        showClock();
        timetable.scrollLeft = Math.round(scrollState.left[channelType] > -1
            ? scrollState.left[channelType]
            : 0);
        if (time) {
            const position = Math.floor(time / 1000 / 60 * dimensions.scaleFactor);
            timetable.scrollTop = Math.round(position - timetable.clientHeight / 4);
            setTime(null);
        }
        else {
            timetable.scrollTop = Math.round(scrollState.top > -1
                ? scrollState.top
                : (getPosition() - timetable.clientHeight / 4));
        }
        const updateTimeline = () => {
            const position = getPosition();
            const { scrollTop, clientHeight } = timetable;
            if (_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.todayTime === startTime) {
                timeline.classList.add("today");
            }
            else {
                timeline.classList.remove("today");
            }
            timeline.style.top = `${position}px`;
            const clockText = luxon__WEBPACK_IMPORTED_MODULE_5__.DateTime.now().toFormat("HH:mm");
            if (clock.innerText !== clockText) {
                clock.innerText = clockText;
                showClock();
            }
            if (position > scrollTop && position < scrollTop + clientHeight) {
                jumpToTimeline.classList.add("hide");
            }
            else {
                jumpToTimeline.classList.remove("hide");
            }
        };
        const updateTimelineInterval = setInterval(updateTimeline, 1500);
        updateTimeline();
        return () => {
            timetable.removeEventListener("scroll", onScroll);
            clearInterval(updateTimelineInterval);
            clearTimeout(showClockTimeout);
        };
    }, [startTime, timetableCols]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!dimensions) {
            return;
        }
        if (globalServiceId) {
            const _service = _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.services.find(s => s.id === globalServiceId);
            if (!_service) {
                setError({ code: 404, reason: "サービスが見つかりません" });
                return;
            }
            setServices([_service]);
            return;
        }
        const _services = _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.services
            .filter(s => s.type === 1)
            .filter(s => channelType ? s.channel?.[0]?.type === channelType : true);
        _services.sort((a, b) => {
            if (a.remoteControlKeyId && b.remoteControlKeyId) {
                return a.remoteControlKeyId - b.remoteControlKeyId;
            }
            if (a.remoteControlKeyId && !b.remoteControlKeyId) {
                return -1;
            }
            if (!a.remoteControlKeyId && b.remoteControlKeyId) {
                return 1;
            }
            return a.id - b.id;
        });
        setServices(_services);
    }, [channelType, dimensions, reload]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!services || services.length === 0) {
            return;
        }
        console.debug("EPGTable", "services", services);
        const query = {
            startAt: {
                $gte: startTime - 60 * 60 * 2 * 1000,
                $lt: startTime + 60 * 60 * 28 * 1000
            }
        };
        if (channelType) {
            query.serviceId = { $in: services.map(s => s.serviceId) };
        }
        else if (globalServiceId) {
            query.serviceId = services[0].serviceId;
            query.startAt["$lt"] = startTime + 60 * 60 * 24 * 8 * 1000;
        }
        const filteredPrograms = _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.programs.filter((0,sift__WEBPACK_IMPORTED_MODULE_6__["default"])(query));
        console.debug("EPGTable", "filteredPrograms", filteredPrograms);
        const programMap = new Map();
        const _serviceItems = [];
        const cols = [];
        for (let i = 0; i < services.length; i++) {
            const service = services[i];
            const servicePrograms = [];
            let count = 0;
            for (const program of filteredPrograms) {
                if (program.serviceId !== service.serviceId || program.networkId !== service.networkId) {
                    continue;
                }
                if (program.relatedItems?.filter(item => item.type === "shared").length !== 1) {
                    count++;
                    programMap.set(`${program.serviceId}.${program.eventId}`, program);
                }
                servicePrograms.push(program);
            }
            if (count === 0) {
                continue;
            }
            servicePrograms.sort((a, b) => {
                return a.startAt - b.startAt;
            });
            if (!globalServiceId) {
                let className = "epg-table-header-item";
                _serviceItems.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: className, key: service.id, onClick: () => {
                        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate(`/epg/services/${service.id}?date=${date.toISODate()}`);
                    } },
                    service.hasLogoData && react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: `/api/services/${service.id}/logo` }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, service.name)));
            }
            else {
                for (let i = 0; i < 8; i++) {
                    const cur = date.plus({ days: i });
                    _serviceItems.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "epg-table-header-item date", key: `${service.id}-${i}`, onClick: () => {
                            _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate(`/epg?type=${service.channel?.[0]?.type}&date=${cur.toISODate()}`);
                        } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, cur.toFormat("M月d日（ccc）"))));
                }
            }
            const last = servicePrograms[servicePrograms.length - 1];
            servicePrograms.push({
                id: last.id + 0.1,
                eventId: last.eventId + 0.1,
                serviceId: last.serviceId,
                networkId: last.networkId,
                startAt: last.startAt + last.duration,
                duration: 60 * 15 * 1000,
                isFree: false,
                name: service.epgReady ? "(放送休止・未定)" : "(未受信)",
                description: "no-data",
                genres: [],
            });
            const cells = [];
            const splitIndexes = [];
            const maxHeight = 60 * 24 * dimensions.scaleFactor;
            let topOffset = 0;
            for (let i = 0; i < servicePrograms.length; i++) {
                let program = { ...servicePrograms[i] };
                let className = "timetable-cell";
                const prev = servicePrograms[i - 1];
                if (prev && (prev.startAt + prev.duration) !== program.startAt) {
                    program = {
                        id: prev.id + 0.1,
                        eventId: prev.eventId + 0.1,
                        serviceId: prev.serviceId,
                        networkId: prev.networkId,
                        startAt: prev.startAt + prev.duration,
                        duration: program.startAt - (prev.startAt + prev.duration),
                        isFree: false,
                        name: service.epgReady ? "(放送休止・未定)" : "(未受信)",
                        description: "no-data",
                        genres: [],
                    };
                    servicePrograms.splice(i, 0, program);
                }
                if (program.description === "no-data") {
                    className += " no-data";
                    program.description = undefined;
                }
                const programStartTime = program.startAt;
                const programStartDate = new Date(program.startAt);
                let top = Math.floor((programStartTime - startTime) / 1000 / 60 * dimensions.scaleFactor) + topOffset;
                let height = Math.floor(program.duration / 1000 / 60 * dimensions.scaleFactor);
                if (globalServiceId) {
                    if (top + height >= maxHeight) {
                        splitIndexes.push(i + 1);
                        topOffset -= maxHeight;
                        height -= top + height - maxHeight;
                        servicePrograms.splice(i, 0, {
                            ...program,
                        });
                    }
                }
                if (top < 0) {
                    height += top;
                    top = 0;
                }
                const isShort = height <= 40;
                if (isShort) {
                    className += " short";
                    if (height <= 16) {
                        className += " x-short";
                    }
                    if (height <= 10) {
                        className += " xx-short";
                    }
                }
                else {
                    if (height >= 240) {
                        className += " long";
                    }
                }
                if (program.relatedItems && program.relatedItems.filter(item => item.type === "shared").length === 1) {
                    className += " event-group-shared";
                    const ref = programMap.get(`${program.relatedItems[0].serviceId}.${program.relatedItems[0].eventId}`);
                    if (ref) {
                        program.name = program.name || ref.name;
                        program.genres = program.genres || ref.genres;
                        program.description = program.description || "(イベント共有)";
                    }
                }
                const cautions = [];
                if (program.genres && program.genres[0]) {
                    className += ` bg-genre-lv1-${program.genres[0].lv1}`;
                    for (const genre of program.genres) {
                        const un2Text = _modules_constants__WEBPACK_IMPORTED_MODULE_11__.GenreUN2Map[(genre.lv1 * 0x1000) + (genre.lv2 * 0x100) + (genre.un1 * 0x10) + genre.un2];
                        if (un2Text) {
                            cautions.push(genre);
                        }
                    }
                }
                const defaultIsOpen = programId === program.id;
                if (defaultIsOpen) {
                    setProgramId(null);
                }
                cells.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramPopover__WEBPACK_IMPORTED_MODULE_13__.ProgramPopover, { key: `event-${program.eventId}-${program.startAt}`, className: className, program: program, defaultIsOpen: defaultIsOpen, renderTarget: ({ isOpen, ...props }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { style: { top, height }, ...props },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("time", { dateTime: programStartDate.toISOString() }, programStartDate.getMinutes()),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramTitle__WEBPACK_IMPORTED_MODULE_12__.ProgramTitle, { program: program }),
                            !isShort && program.description && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "description" }, program.description.replace(_modules_regexp__WEBPACK_IMPORTED_MODULE_10__.enclosedAttributeUnicode, ""))),
                            !isShort && cautions.length > 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramGenres__WEBPACK_IMPORTED_MODULE_14__.ProgramGenres, { genres: cautions })))) }));
            }
            if (!globalServiceId) {
                cols.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: service.id, className: "timetable-col", style: { width: dimensions.blockWidth, height: dimensions.timescaleHeight } }, cells));
            }
            else {
                for (let i = 0; i < splitIndexes.length; i++) {
                    cols.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: `${service.id}-${i}`, className: "timetable-col", style: { width: dimensions.blockWidth, height: maxHeight } }, cells.slice(splitIndexes[i - 1] || 0, splitIndexes[i] || cells.length)));
                }
            }
        }
        setServiceItems(_serviceItems);
        setTimetableCols(cols);
    }, [startTime, services]);
    const timescaleDateShort = date.toFormat("M/d(ccc)");
    const timescaleDateExtended = date.plus({ days: 1 }).toFormat("M/d(ccc)");
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "component-epg-table" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "header", ref: headerRef },
            !serviceItems && !error && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading", ref: headerItemRef },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "epg-table-header-item loading" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-skeleton img" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-skeleton" }))),
            serviceItems),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale", ref: timescaleRef },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timeline", ref: timelineRef },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "clock", ref: clockRef }, "00:00")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-0", ref: timescaleItemRef },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 0\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-1" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "1")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-2" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "2")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-3" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 3\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-4" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "4")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-5" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "5")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-6" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 6\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-7" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "7")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-8" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "8")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-9" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 9\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-10" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "10")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-11" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "11")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-12" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 12\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-13" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "13")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-14" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "14")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-15" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 15\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-16" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "16")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-17" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "17")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-18" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 18\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-19" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "19")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-20" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "20")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-21" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateShort,
                    " 21\u6642")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-22" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "22")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-23" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "23")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-0" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateExtended,
                    " 0\u6642 (24)")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-1" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "1 (25)")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-2" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "2 (26)")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item hour-3" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    timescaleDateExtended,
                    " 3\u6642 (27)")),
            timetableCols && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "timescale-item reserve" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "outlined", className: "jump-to-timeline hide", ref: jumpToTimelineRef, icon: "selection", text: "\u73FE\u5728\u6642\u523B\u3078", onClick: () => {
                _modules_ui__WEBPACK_IMPORTED_MODULE_9__.blur();
                jumpToTimelineRef.current.classList.add("hide");
                const { clientHeight } = timetableRef.current;
                const { offsetTop } = timelineRef.current;
                timetableRef.current.scrollTop = offsetTop - clientHeight / 4;
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_indiana_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["default"], { className: "timetable", innerRef: timetableRef, hideScrollbars: false, onClick: (a) => {
                _modules_ui__WEBPACK_IMPORTED_MODULE_9__.blur();
            } }, !error && timetableCols === null
            ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Spinner, { intent: "none", size: 40 })
            : timetableCols),
        (_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.programs.length === 0 || _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.services.length === 0) && !error && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.NonIdealState, { icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Spinner, null), title: "\u30ED\u30FC\u30C9\u4E2D", description: "\u30C7\u30FC\u30BF\u3092\u5F85\u6A5F\u3057\u3066\u3044\u307E\u3059..." })) || services?.length === 0 && !error && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.NonIdealState, { icon: "satellite", title: "\u653E\u9001\u30B5\u30FC\u30D3\u30B9\u306A\u3057", description: "\u6307\u5B9A\u3055\u308C\u305F\u653E\u9001\u6CE2\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093" })) || timetableCols?.length === 0 && !error && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.NonIdealState, { icon: "satellite", title: "\u653E\u9001\u30A4\u30D9\u30F3\u30C8\u306A\u3057", description: "\u6307\u5B9A\u3055\u308C\u305F\u65E5\u4ED8\u3068\u653E\u9001\u6CE2\u306E\u756A\u7D44\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093" })),
        error && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.NonIdealState, { icon: "warning-sign", title: `${error.code} Error`, description: error.reason || "エラーが発生しました" }))));
};


/***/ },

/***/ "./src/ui/components/Nav.tsx"
/*!***********************************!*\
  !*** ./src/ui/components/Nav.tsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nav: () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/menu/menu.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/menu/menuDivider.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/menu/menuItem.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/popover/popover.js");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useWebStorageState */ "./src/ui/hooks/useWebStorageState.ts");
/* harmony import */ var _VersionStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VersionStatus */ "./src/ui/components/VersionStatus.tsx");
/* harmony import */ var _Restart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Restart */ "./src/ui/components/Restart.tsx");
/* harmony import */ var _Nav_sass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Nav.sass */ "./src/ui/components/Nav.sass");








const Nav = ({ pathLv1 }) => {
    console.debug("components", "Nav", pathLv1);
    const { navigate, searchParams } = _modules_state__WEBPACK_IMPORTED_MODULE_8__.state;
    const query = searchParams.get("q") || null;
    const [icon, setIcon] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.statusIconSrc);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onStatusIconKey = () => {
            console.log("Nav", "onStatusIconKey", _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.statusIconKey, _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.statusIconSrc);
            setIcon(_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.statusIconSrc);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.on("statusIconKey", onStatusIconKey);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.off("statusIconKey", onStatusIconKey);
        };
    }, []);
    const [version, setVersion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.version);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onVersion = () => {
            console.log("Nav", "onVersion", _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.version);
            setVersion(_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.version);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.on("version", onVersion);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.off("version", onVersion);
        };
    }, []);
    const [dark, setDark] = (0,_hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_9__.useLocalStorageState)("dark", true);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        document.body.classList.toggle("bp6-dark", dark);
    }, [dark]);
    const getNavbarButtonProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((name, className = "") => {
        const props = {
            onClick: () => {
                _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate("/" + name);
            }
        };
        if (name === pathLv1) {
            props.className = `${className} active`.trim();
        }
        return props;
    }, [pathLv1]);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query || "");
    const executeSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate(`/epg/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }, [searchQuery]);
    const [runningJobs, setRunningJobs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.jobs.filter((job) => job.status === "running").length);
    const [restartDialogOpen, setRestartDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onJobs = () => {
            setRunningJobs(_modules_state__WEBPACK_IMPORTED_MODULE_8__.state.jobs.filter((job) => job.status === "running").length);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.on("jobs", onJobs);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.off("jobs", onJobs);
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Navbar, { className: "component-nav" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Alignment.START },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "product-icon", src: icon, alt: _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.statusName }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Navbar.Heading, { className: "product-name" },
                "Mirakurun",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", { className: "version" }, version)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-input-group" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-icon bp6-icon-search" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", className: "bp6-input", placeholder: "\u756A\u7D44\u691C\u7D22...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), onKeyDown: (e) => {
                        if (e.key === "Enter") {
                            executeSearch();
                        }
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "minimal", className: "bp6-intent-primary", icon: "arrow-right", title: "\u691C\u7D22", onClick: executeSearch }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Alignment.END },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "minimal", ...getNavbarButtonProps(""), icon: "home", title: "Home", text: "Home" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "minimal", ...getNavbarButtonProps("epg"), icon: "timeline-events", title: "EPG", text: "EPG" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "minimal", ...getNavbarButtonProps("jobs"), icon: "ninja", title: "\u30B8\u30E7\u30D6", text: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    "\u30B8\u30E7\u30D6",
                    runningJobs !== 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "badge" }, runningJobs)) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Navbar.Divider, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "minimal", ...getNavbarButtonProps("logs"), icon: "pulse", title: "\u30ED\u30B0" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Popover, { minimal: true, interactionKind: "hover", placement: "bottom-end", modifiers: { offset: { enabled: true } }, content: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Menu, null,
                    dark
                        ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { icon: "flash", text: "\u30E9\u30A4\u30C8\u30C6\u30FC\u30DE", onClick: () => { setDark(false); } })
                        : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { icon: "moon", text: "\u30C0\u30FC\u30AF\u30C6\u30FC\u30DE", onClick: () => { setDark(true); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.MenuDivider, null),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { onClick: () => { _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate("/config/server"); }, icon: "wrench", text: "\u30B5\u30FC\u30D0\u30FC\u8A2D\u5B9A" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { onClick: () => { _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate("/config/tuners"); }, icon: "wrench", text: "\u30C1\u30E5\u30FC\u30CA\u30FC\u8A2D\u5B9A" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { onClick: () => { _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate("/config/channels"); }, icon: "wrench", text: "\u30C1\u30E3\u30F3\u30CD\u30EB\u8A2D\u5B9A" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.MenuDivider, null),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { onClick: () => { window.open("/api/debug", "_blank"); }, icon: "document", text: "API Docs" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.MenuDivider, null),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { onClick: () => { _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.navigate("/about"); }, icon: "info-sign", textClassName: "product-name", text: `Mirakurun ${version} について` }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_VersionStatus__WEBPACK_IMPORTED_MODULE_10__.VersionStatus, { asMenuItem: true }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.MenuItem, { icon: "power", intent: "danger", text: "\u518D\u8D77\u52D5...", onClick: () => setRestartDialogOpen(true) })), renderTarget: ({ isOpen, ref, ...props }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { ...props, active: isOpen, ref: ref, variant: "minimal", icon: "cog" })) }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Restart__WEBPACK_IMPORTED_MODULE_11__.Restart, { isOpen: restartDialogOpen, onClose: () => setRestartDialogOpen(false) }))));
};


/***/ },

/***/ "./src/ui/components/ProgramAVInfo.tsx"
/*!*********************************************!*\
  !*** ./src/ui/components/ProgramAVInfo.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramAVInfo: () => (/* binding */ ProgramAVInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constants */ "./src/ui/modules/constants.ts");
/* harmony import */ var _ProgramAVInfo_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgramAVInfo.sass */ "./src/ui/components/ProgramAVInfo.sass");


;

const ProgramAVInfo = ({ video, audios }) => {
    const labels = [];
    if (video) {
        if (video.type !== "mpeg2") {
            labels.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "video.type", className: "video type" }, video.type));
        }
        labels.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "video.resolution", className: "video resolution" }, video.resolution));
    }
    if (audios) {
        let count = 0;
        for (const audio of audios) {
            const trackPrefix = count === 0 ? "主" : "副";
            const type8 = audio.componentType.toString(2).padStart(8, "0");
            const mode = _modules_constants__WEBPACK_IMPORTED_MODULE_1__.audioModeMap[type8.slice(-5)] || "不明なモード";
            const lang = audio.langs.map(lang => _modules_constants__WEBPACK_IMPORTED_MODULE_1__.langMap[lang]).join("＋");
            labels.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: `audios.${count}`, className: "audio" },
                audios.length > 1 && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    trackPrefix,
                    ":\u00A0"),
                mode,
                lang !== "日本語" && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    "\u00A0/\u00A0",
                    lang)));
            count++;
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "component-program-av-info" }, labels));
};


/***/ },

/***/ "./src/ui/components/ProgramCardBase.tsx"
/*!***********************************************!*\
  !*** ./src/ui/components/ProgramCardBase.tsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramCardBase: () => (/* binding */ ProgramCardBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/dom/lib.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/common */ "./src/ui/modules/common.ts");
/* harmony import */ var _modules_at__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/at */ "./src/ui/modules/at.ts");
/* harmony import */ var _modules_regexp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/regexp */ "./src/ui/modules/regexp.ts");
/* harmony import */ var _ServiceLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServiceLink */ "./src/ui/components/ServiceLink.tsx");
/* harmony import */ var _ProgramTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProgramTitle */ "./src/ui/components/ProgramTitle.tsx");
/* harmony import */ var _DateTimeRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DateTimeRange */ "./src/ui/components/DateTimeRange.tsx");
/* harmony import */ var _ProgramGenres__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProgramGenres */ "./src/ui/components/ProgramGenres.tsx");
/* harmony import */ var _ProgramAVInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProgramAVInfo */ "./src/ui/components/ProgramAVInfo.tsx");
/* harmony import */ var _WatchButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WatchButton */ "./src/ui/components/WatchButton.tsx");
/* harmony import */ var _ProgramCardBase_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProgramCardBase.sass */ "./src/ui/components/ProgramCardBase.sass");















const ProgramCardBase = ({ program, noAVInfo, noActions, ...props }) => {
    console.debug("components", "ProgramCardBase", program);
    const now = Date.now();
    const endAt = program.startAt + program.duration;
    const isDummy = !Number.isInteger(program.id);
    const date = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.fromMillis(program.startAt).set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const time = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.fromMillis(program.startAt).diff(date).toMillis();
    const timeForServiceLink = (time > (1000 * 60 * 60 * 24 - 1000 * 60 * 5)) ? 1 : time;
    const [isOnAir, setIsOnAir] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!isDummy && program.startAt <= now && endAt >= now);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isDummy || noActions) {
            return;
        }
        const schedules = [];
        if (now <= program.startAt) {
            schedules.push((0,_modules_at__WEBPACK_IMPORTED_MODULE_5__.setSchedule)(program.startAt, () => setIsOnAir(true)));
        }
        if (now <= endAt) {
            schedules.push((0,_modules_at__WEBPACK_IMPORTED_MODULE_5__.setSchedule)(endAt, () => setIsOnAir(false)));
        }
        return () => {
            for (const id of schedules) {
                ;(0,_modules_at__WEBPACK_IMPORTED_MODULE_5__.clearSchedule)(id);
            }
        };
    }, [program]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "component-program-card-base", ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ServiceLink__WEBPACK_IMPORTED_MODULE_7__.ServiceLink, { globalId: (0,_modules_common__WEBPACK_IMPORTED_MODULE_4__.getGlobalServiceId)(program.networkId, program.serviceId), date: date.toISODate(), time: timeForServiceLink }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "title" },
            noActions && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, { to: `/epg/programs/${program.id}` },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramTitle__WEBPACK_IMPORTED_MODULE_8__.ProgramTitle, { program: program }))),
            !noActions && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramTitle__WEBPACK_IMPORTED_MODULE_8__.ProgramTitle, { program: program }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "datetime" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DateTimeRange__WEBPACK_IMPORTED_MODULE_9__.DateTimeRange, { start: program.startAt, end: endAt })),
        program.description && react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "description" }, program.description.replace(_modules_regexp__WEBPACK_IMPORTED_MODULE_6__.enclosedAttributeUnicode, "")),
        program.genres?.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramGenres__WEBPACK_IMPORTED_MODULE_10__.ProgramGenres, { genres: program.genres })),
        !noAVInfo && (program.video || program.audios) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramAVInfo__WEBPACK_IMPORTED_MODULE_11__.ProgramAVInfo, { video: program.video, audios: program.audios })),
        !noActions && !isDummy && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "actions" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, { className: "more", to: `/epg/programs/${program.id}` },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "outlined", intent: "primary", icon: "arrow-right", text: "\u756A\u7D44\u8A73\u7D30" })),
                (isOnAir) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WatchButton__WEBPACK_IMPORTED_MODULE_12__.WatchButton, { variant: "outlined", popoverPlacement: "top-start", globalServiceId: (0,_modules_common__WEBPACK_IMPORTED_MODULE_4__.getGlobalServiceId)(program.networkId, program.serviceId) })))))));
};


/***/ },

/***/ "./src/ui/components/ProgramGenres.tsx"
/*!*********************************************!*\
  !*** ./src/ui/components/ProgramGenres.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramGenres: () => (/* binding */ ProgramGenres)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constants */ "./src/ui/modules/constants.ts");
/* harmony import */ var _ProgramGenres_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgramGenres.sass */ "./src/ui/components/ProgramGenres.sass");



const ProgramGenres = ({ genres }) => {
    const lv1Set = new Set();
    const labels = [];
    for (const genre of genres) {
        const lv1Text = _modules_constants__WEBPACK_IMPORTED_MODULE_1__.Genre1Map[genre.lv1];
        if (!lv1Text) {
            continue;
        }
        const un2Text = _modules_constants__WEBPACK_IMPORTED_MODULE_1__.GenreUN2Map[(genre.lv1 * 0x1000) + (genre.lv2 * 0x100) + (genre.un1 * 0x10) + genre.un2];
        if (un2Text) {
            const key = (genre.lv1 * 0x1000) + (genre.lv2 * 0x100) + (genre.un1 * 0x10) + genre.un2;
            if (key < 0xE000 || key > 0xE020) {
                continue;
            }
            labels.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: key, className: "caution" }, un2Text));
            continue;
        }
        if (!lv1Set.has(genre.lv1)) {
            lv1Set.add(genre.lv1);
            labels.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: genre.lv1, className: `bg-genre-lv1-${genre.lv1}` }, lv1Text));
        }
        const lv2Text = _modules_constants__WEBPACK_IMPORTED_MODULE_1__.Genre2Map[(genre.lv1 * 0x10) + genre.lv2];
        labels.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: `${genre.lv1}.${genre.lv2}`, className: `bg-genre-lv1-${genre.lv1}` }, lv2Text));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "component-program-genres" }, labels));
};


/***/ },

/***/ "./src/ui/components/ProgramPopover.tsx"
/*!**********************************************!*\
  !*** ./src/ui/components/ProgramPopover.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramPopover: () => (/* binding */ ProgramPopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/popover/popover.js");
/* harmony import */ var _ProgramCardBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgramCardBase */ "./src/ui/components/ProgramCardBase.tsx");
/* harmony import */ var _ProgramPopover_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgramPopover.sass */ "./src/ui/components/ProgramPopover.sass");





const ProgramPopover = ({ program, renderTarget, className = "", defaultIsOpen = false, ...props }) => {
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIsOpen);
    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!active) {
            return;
        }
        setContent(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramCardBase__WEBPACK_IMPORTED_MODULE_2__.ProgramCardBase, { program: program }));
        return () => {
            setContent(null);
        };
    }, [active]);
    if (className) {
        className += " ";
    }
    className += "bp6-dark";
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Popover, { ...props, className: className, renderTarget: renderTarget, defaultIsOpen: active, onOpening: () => setActive(true), onClosed: () => setActive(false), content: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "component-program-popover" }, content) }));
};


/***/ },

/***/ "./src/ui/components/ProgramRelatedLinks.tsx"
/*!***************************************************!*\
  !*** ./src/ui/components/ProgramRelatedLinks.tsx ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramRelatedLinks: () => (/* binding */ ProgramRelatedLinks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/section/section.js");
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/constants */ "./src/ui/modules/constants.ts");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _ProgramCardBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgramCardBase */ "./src/ui/components/ProgramCardBase.tsx");
/* harmony import */ var _ProgramRelatedLinks_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgramRelatedLinks.sass */ "./src/ui/components/ProgramRelatedLinks.sass");







const ProgramRelatedLinks = ({ program }) => {
    console.debug("components", "ProgramRelatedLinks");
    const [links, setLinks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const relatedItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        return program?.relatedItems?.filter(item => {
            if (item.networkId) {
                return item.eventId !== program.eventId || item.serviceId !== program.serviceId || item.networkId !== program.networkId;
            }
            return item.eventId !== program.eventId || item.serviceId !== program.serviceId;
        });
    }, [program]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!relatedItems || relatedItems.length === 0) {
            setLinks([]);
            return;
        }
        console.debug("ProgramRelatedLinks", "relatedItems", relatedItems);
        let abort = false;
        (async () => {
            const _links = [];
            const programs = _modules_state__WEBPACK_IMPORTED_MODULE_3__.state.programs.length > 0 ? _modules_state__WEBPACK_IMPORTED_MODULE_3__.state.programs : await _modules_state__WEBPACK_IMPORTED_MODULE_3__.state.fetchPrograms();
            if (abort) {
                return;
            }
            for (const item of relatedItems) {
                const p = programs.find(p => {
                    if (item.networkId) {
                        return p.eventId === item.eventId && p.serviceId === item.serviceId && p.networkId === item.networkId;
                    }
                    return p.eventId === item.eventId && p.serviceId === item.serviceId;
                });
                if (!p) {
                    continue;
                }
                const link = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Section, { key: `${item.type}-${item.eventId}-${item.serviceId}`, className: `related-item-type-${item.type}`, icon: _modules_constants__WEBPACK_IMPORTED_MODULE_2__.relatedItemTypeIconMap[item.type], title: _modules_constants__WEBPACK_IMPORTED_MODULE_2__.relatedItemTypeMap[item.type], compact: true },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProgramCardBase__WEBPACK_IMPORTED_MODULE_4__.ProgramCardBase, { program: p })));
                _links.push(link);
            }
            setLinks(_links);
        })();
        return () => {
            abort = true;
        };
    }, [relatedItems]);
    if (links.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "component-program-related-links" }, links));
};


/***/ },

/***/ "./src/ui/components/ProgramTitle.tsx"
/*!********************************************!*\
  !*** ./src/ui/components/ProgramTitle.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramTitle: () => (/* binding */ ProgramTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/regexp */ "./src/ui/modules/regexp.ts");
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/constants */ "./src/ui/modules/constants.ts");
/* harmony import */ var _ProgramTitle_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgramTitle.sass */ "./src/ui/components/ProgramTitle.sass");




;

const ProgramTitle = ({ program }) => {
    let name = program.name;
    if (!name) {
        if (program.relatedItems) {
            const isShared = program.relatedItems.some(item => item.type === "shared");
            if (isShared) {
                name = "(イベント共有)";
            }
            else {
                name = "(不明)";
            }
        }
        else {
            name = "(未定)";
        }
    }
    name = name.replace(_modules_regexp__WEBPACK_IMPORTED_MODULE_1__.squaredUnicode, "").replace(_modules_regexp__WEBPACK_IMPORTED_MODULE_1__.legacyAttributeFormat, "");
    const attributes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const attrSet = new Set();
        const attributeSource = (program.name || "") + (program.description || "");
        if (attributeSource) {
            const items = [
                ...attributeSource.match(_modules_regexp__WEBPACK_IMPORTED_MODULE_1__.enclosedAttributeUnicode) || [],
                ...attributeSource.match(_modules_regexp__WEBPACK_IMPORTED_MODULE_1__.legacyAttributeFormat) || [],
            ];
            if (program.networkId >= 0x01 && program.networkId <= 0x0C && program.isFree) {
                items.push("無");
            }
            for (const item of items) {
                const attrKey = item.replace(/[\[\]()［］]/g, "").normalize("NFKC");
                if (_modules_constants__WEBPACK_IMPORTED_MODULE_2__.ProgramAttributeMap[attrKey]) {
                    attrSet.add(attrKey);
                }
            }
        }
        return [...attrSet];
    }, [program.name, program.description]);
    const labels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const pre = [];
        const post = [];
        for (const attribute of attributes) {
            const label = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: `attribute-${attribute}`, className: `attribute bg-attribute-${attribute}`, title: _modules_constants__WEBPACK_IMPORTED_MODULE_2__.ProgramAttributeMap[attribute] }, attribute));
            if (["新", "再", "終", "生"].includes(attribute)) {
                pre.push(label);
            }
            else {
                post.push(label);
            }
        }
        return { pre, post };
    }, [attributes]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "component-program-title" },
        labels.pre,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "name", title: program.name }, name),
        labels.post));
};


/***/ },

/***/ "./src/ui/components/Restart.tsx"
/*!***************************************!*\
  !*** ./src/ui/components/Restart.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Restart: () => (/* binding */ Restart)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialog.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogBody.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogFooter.js");


const Restart = ({ isOpen, onClose }) => {
    const handleRestart = async () => {
        await fetch("/api/restart", { method: "PUT" });
        onClose();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Dialog, { isOpen: isOpen, onClose: onClose, title: "Restart Mirakurun", canEscapeKeyClose: true },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.DialogBody, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Do you want to restart Mirakurun?")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Button, { text: "Cancel", onClick: onClose }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Button, { text: "Restart", intent: "danger", onClick: handleRestart })) })));
};


/***/ },

/***/ "./src/ui/components/ServiceLink.tsx"
/*!*******************************************!*\
  !*** ./src/ui/components/ServiceLink.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceLink: () => (/* binding */ ServiceLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/dom/lib.js");
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/constants */ "./src/ui/modules/constants.ts");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _ServiceLink_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceLink.sass */ "./src/ui/components/ServiceLink.sass");






const ServiceLink = ({ globalId, date, time, ...props }) => {
    console.debug("components", "ServiceLink");
    const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (async () => {
            const _service = _modules_state__WEBPACK_IMPORTED_MODULE_3__.state.services.find(s => s.id === globalId);
            setService(_service);
        })();
        return () => {
            setService(null);
        };
    }, [globalId]);
    let to = "#";
    let className = "component-service-link";
    if (props.className) {
        className += ` ${props.className}`;
    }
    if (service) {
        to = `/epg/services/${service.id}`;
        if (date && time) {
            to += `?date=${date}&time=${time}`;
        }
        else if (time) {
            to += `?time=${time}`;
        }
        else if (date) {
            to += `?date=${date}`;
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, ...props },
        service && service.hasLogoData && react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: `/api/services/${service.id}/logo` }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, { className: service ? null : "bp6-skeleton", title: "EPG \u756A\u7D44\u8868 (\u9031\u9593)", to: to }, service ? `${service.name.normalize("NFKC")} (${_modules_constants__WEBPACK_IMPORTED_MODULE_2__.channelTypeMap[service.channel?.[0]?.type]})` : "サービス名...")));
};


/***/ },

/***/ "./src/ui/components/VersionStatus.tsx"
/*!*********************************************!*\
  !*** ./src/ui/components/VersionStatus.tsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionStatus: () => (/* binding */ VersionStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/menu/menuItem.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semver */ "./node_modules/semver/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");





let cachedVersion = null;
let isFetching = false;
const fetchListeners = [];
const fetchVersion = async () => {
    if (cachedVersion) {
        return cachedVersion;
    }
    if (isFetching) {
        return new Promise((resolve) => {
            fetchListeners.push(resolve);
        });
    }
    isFetching = true;
    try {
        const res = await fetch("/api/version");
        if (res.ok) {
            const data = await res.json();
            cachedVersion = data;
            const listeners = [...fetchListeners];
            fetchListeners.length = 0;
            listeners.forEach((resolve) => resolve(data));
            return data;
        }
    }
    catch (e) {
        console.error("Failed to fetch version", e);
    }
    isFetching = false;
    const listeners = [...fetchListeners];
    fetchListeners.length = 0;
    listeners.forEach((resolve) => resolve(null));
    return null;
};
const VersionStatus = ({ asMenuItem = false }) => {
    const [version, setVersion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cachedVersion);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!cachedVersion);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let isMounted = true;
        if (!cachedVersion) {
            fetchVersion().then((data) => {
                if (isMounted) {
                    setVersion(data);
                    setLoading(false);
                }
            });
        }
        else {
            setLoading(false);
        }
        return () => {
            isMounted = false;
        };
    }, []);
    const hasUpdate = version
        && semver__WEBPACK_IMPORTED_MODULE_2__.valid(version.current)
        && semver__WEBPACK_IMPORTED_MODULE_2__.valid(version.latest)
        && semver__WEBPACK_IMPORTED_MODULE_2__.gt(version.latest, version.current);
    if (asMenuItem) {
        if (loading) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, { icon: "updated", text: "\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u78BA\u8A8D\u4E2D...", disabled: true });
        }
        if (!version) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, { icon: "updated", text: "\u6700\u65B0\u7248\u3092\u5B9F\u884C\u4E2D\u3067\u3059", disabled: true });
        }
        if (hasUpdate) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, { icon: "updated", intent: "primary", text: `最新版 (v${version.latest}) が利用可能です`, onClick: () => {
                    _modules_state__WEBPACK_IMPORTED_MODULE_3__.state.navigate("/about");
                } }));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.MenuItem, { icon: "updated", text: "\u6700\u65B0\u7248\u3092\u5B9F\u884C\u4E2D\u3067\u3059", disabled: true });
    }
    if (loading) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u3092\u78BA\u8A8D\u4E2D...");
    }
    if (!version) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u4E0D\u660E (\u53D6\u5F97\u5931\u6557)");
    }
    if (hasUpdate) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { color: "#2d72d9", fontWeight: "bold" } },
            version.latest,
            " (\u65B0\u3057\u3044\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059)"));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
        version.latest,
        " (\u6700\u65B0\u7248\u3092\u5B9F\u884C\u4E2D\u3067\u3059)");
};


/***/ },

/***/ "./src/ui/components/WatchButton.tsx"
/*!*******************************************!*\
  !*** ./src/ui/components/WatchButton.tsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WatchButton: () => (/* binding */ WatchButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttonGroup.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/menu/menu.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/menu/menuItem.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/popover/popover.js");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/common */ "./src/ui/modules/common.ts");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");





const WatchButton = ({ globalServiceId, popoverPlacement, ...props }) => {
    console.debug("components", "WatchButton");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (async () => {
            if (_modules_state__WEBPACK_IMPORTED_MODULE_7__.state.serverConfig) {
                setLoading(false);
                return;
            }
            await _modules_state__WEBPACK_IMPORTED_MODULE_7__.state.fetchServerConfig();
            if (_modules_state__WEBPACK_IMPORTED_MODULE_7__.state.serverConfig) {
                setLoading(false);
            }
        })();
    }, []);
    const tsplayDisabled = !_modules_state__WEBPACK_IMPORTED_MODULE_7__.state.serverConfig?.tsplayEndpoint || !_modules_state__WEBPACK_IMPORTED_MODULE_7__.state.serverConfig?.allowPNA;
    const streamEndpoint = `${location.protocol}//${location.host}/api/services/${globalServiceId}/stream`;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, { className: loading ? "bp6-skeleton" : "" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Button, { ...props, text: "\u8996\u8074\u30C6\u30B9\u30C8", icon: "play", endIcon: "lab-test", disabled: tsplayDisabled, onPointerUp: e => {
                    if (tsplayDisabled) {
                        return;
                    }
                    const isMiddleButton = e.button === 1 || (e.button === 0 && e.ctrlKey);
                    let features = "noreferrer";
                    if (isMiddleButton) {
                    }
                    else {
                        const width = 1280;
                        const height = 770;
                        const top = window.screenTop + (window.innerHeight / 2) - (height / 2);
                        const left = window.screenLeft + (window.innerWidth / 2) - (width / 2);
                        features += `,popup,width=${width},height=${height},top=${top},left=${left},resizable=yes`;
                    }
                    const openUrl = `${_modules_state__WEBPACK_IMPORTED_MODULE_7__.state.serverConfig.tsplayEndpoint}#${streamEndpoint}`;
                    window.open(openUrl, `_blank`, features);
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Popover, { hasBackdrop: true, onClose: e => {
                    e.preventDefault();
                    e.stopPropagation();
                }, captureDismiss: true, placement: popoverPlacement, positioningStrategy: "absolute", content: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Menu, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, { icon: "clipboard", text: "URL \u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC", onClick: () => {
                            (0,_modules_common__WEBPACK_IMPORTED_MODULE_6__.copyToClipboard)(streamEndpoint);
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, { icon: "desktop", text: "M3U \u30D7\u30EC\u30A4\u30EA\u30B9\u30C8...", onClick: () => {
                            const m3u8Content = (`#EXTM3U\n` +
                                `#EXTINF:-1,\n` +
                                `${streamEndpoint}\n`);
                            const blob = new Blob([m3u8Content], { type: "application/x-mpegURL" });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = `Mirakurun_service_${globalServiceId}.m3u8`;
                            document.body.appendChild(a);
                            a.click();
                            setTimeout(() => {
                                document.body.removeChild(a);
                                URL.revokeObjectURL(url);
                            }, 100);
                        } })), renderTarget: ({ isOpen, ref, ...targetProps }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Button, { ...props, text: "", ...targetProps, active: isOpen, ref: ref, icon: "more", title: "\u518D\u751F\u65B9\u6CD5..." })) }))));
};


/***/ },

/***/ "./src/ui/hooks/useWebStorageState.ts"
/*!********************************************!*\
  !*** ./src/ui/hooks/useWebStorageState.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocalStorageState: () => (/* binding */ useLocalStorageState),
/* harmony export */   useSessionStorageState: () => (/* binding */ useSessionStorageState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_1__);


function useLocalStorageState(key, initState) {
    key = "mirakurun:state:" + key;
    const [stored, setStored] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    if (stored === undefined) {
        const storedState = localStorage.getItem(key);
        if (storedState !== null) {
            initState = JSON.parse(storedState);
        }
        setStored(initState);
        console.debug("hooks", "useLocalStorageState()", "get", key, initState);
    }
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState);
    const setStorageState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newState) => {
        if (fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(newState, state)) {
            return;
        }
        if (newState === undefined) {
            localStorage.removeItem(key);
        }
        else {
            localStorage.setItem(key, JSON.stringify(newState));
        }
        setState(newState);
        setStored(newState);
        console.debug("hooks", "useLocalStorageState()", "set", key, newState);
    }, [state]);
    return [state, setStorageState];
}
function useSessionStorageState(key, initState) {
    key = "mirakurun:state:" + key;
    const [stored, setStored] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    if (stored === undefined) {
        const storedState = sessionStorage.getItem(key);
        if (storedState !== null) {
            initState = JSON.parse(storedState);
        }
        setStored(initState);
        console.debug("hooks", "useSessionStorageState()", "get", key, initState);
    }
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState);
    const setStorageState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newState) => {
        if (fast_deep_equal__WEBPACK_IMPORTED_MODULE_1___default()(newState, state)) {
            return;
        }
        if (newState === undefined) {
            sessionStorage.removeItem(key);
        }
        else {
            sessionStorage.setItem(key, JSON.stringify(newState));
        }
        setState(newState);
        setStored(newState);
        console.debug("hooks", "useSessionStorageState()", "set", key, newState);
    }, [state]);
    return [state, setStorageState];
}


/***/ },

/***/ "./src/ui/index.tsx"
/*!**************************!*\
  !*** ./src/ui/index.tsx ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/hooks.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/components.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/dom/lib.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/accessibility/focusStyleManager.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _modules_at__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/at */ "./src/ui/modules/at.ts");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Nav */ "./src/ui/components/Nav.tsx");
/* harmony import */ var _routes_EPGView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/EPGView */ "./src/ui/routes/EPGView.tsx");
/* harmony import */ var _routes_ProgramView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/ProgramView */ "./src/ui/routes/ProgramView.tsx");
/* harmony import */ var _routes_SearchView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/SearchView */ "./src/ui/routes/SearchView.tsx");
/* harmony import */ var _routes_JobsView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/JobsView */ "./src/ui/routes/JobsView.tsx");
/* harmony import */ var _routes_LogsView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/LogsView */ "./src/ui/routes/LogsView.tsx");
/* harmony import */ var _routes_ServerConfigView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/ServerConfigView */ "./src/ui/routes/ServerConfigView.tsx");
/* harmony import */ var _routes_TunersConfigView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/TunersConfigView */ "./src/ui/routes/TunersConfigView.tsx");
/* harmony import */ var _routes_ChannelsConfigView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/ChannelsConfigView */ "./src/ui/routes/ChannelsConfigView.tsx");
/* harmony import */ var _routes_HomeView__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/HomeView */ "./src/ui/routes/HomeView.tsx");
/* harmony import */ var _routes_AboutView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/AboutView */ "./src/ui/routes/AboutView.tsx");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _blueprintjs_core_lib_css_blueprint_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @blueprintjs/core/lib/css/blueprint.css */ "./node_modules/@blueprintjs/core/lib/css/blueprint.css");
/* harmony import */ var _blueprintjs_icons_lib_css_blueprint_icons_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @blueprintjs/icons/lib/css/blueprint-icons.css */ "./node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css");
/* harmony import */ var _index_sass__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./index.sass */ "./src/ui/index.sass");





_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.FocusStyleManager.onlyShowFocusOnTabs();

luxon__WEBPACK_IMPORTED_MODULE_6__.Settings.defaultZone = "Asia/Tokyo";
luxon__WEBPACK_IMPORTED_MODULE_6__.Settings.defaultLocale = "ja";



_modules_at__WEBPACK_IMPORTED_MODULE_9__.init(5000);















const Index = () => {
    console.debug("Index");
    const navigate = _modules_state__WEBPACK_IMPORTED_MODULE_7__.state.navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
    const location = _modules_state__WEBPACK_IMPORTED_MODULE_7__.state.location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
    const searchParams = _modules_state__WEBPACK_IMPORTED_MODULE_7__.state.searchParams = new URLSearchParams(location.search);
    const pathname = _modules_state__WEBPACK_IMPORTED_MODULE_7__.state.pathname = location.pathname;
    const pathLv1 = pathname.split("/")[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        _modules_ui__WEBPACK_IMPORTED_MODULE_8__.blur();
    }, [location.pathname]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        _modules_state__WEBPACK_IMPORTED_MODULE_7__.state.isDev && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "dev-header" },
                "[dev] ",
                JSON.stringify({
                    pathname,
                    pathLv1,
                    searchParams: searchParams.toString()
                }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_10__.Nav, { pathLv1: pathLv1 }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "main" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "page" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Routes, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "/*", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "not found") }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_HomeView__WEBPACK_IMPORTED_MODULE_19__.HomeView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "epg", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_EPGView__WEBPACK_IMPORTED_MODULE_11__.EPGView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "epg/services/:globalServiceId", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_EPGView__WEBPACK_IMPORTED_MODULE_11__.EPGView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "epg/programs/:programId", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_ProgramView__WEBPACK_IMPORTED_MODULE_12__.ProgramView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "epg/search", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_SearchView__WEBPACK_IMPORTED_MODULE_13__.SearchView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "jobs", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_JobsView__WEBPACK_IMPORTED_MODULE_14__.JobsView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "logs", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_LogsView__WEBPACK_IMPORTED_MODULE_15__.LogsView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "config/server", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_ServerConfigView__WEBPACK_IMPORTED_MODULE_16__.ServerConfigView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "config/tuners", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_TunersConfigView__WEBPACK_IMPORTED_MODULE_17__.TunersConfigView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "config/channels", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_ChannelsConfigView__WEBPACK_IMPORTED_MODULE_18__.ChannelsConfigView, null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Route, { path: "about", element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_routes_AboutView__WEBPACK_IMPORTED_MODULE_20__.AboutView, null) })))));
};
{
    const basename = _modules_state__WEBPACK_IMPORTED_MODULE_7__.state.isDev ? "/dev/" : "";
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("root"));
    root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, { basename: basename },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Index, null)));
}


/***/ },

/***/ "./src/ui/modules/at.ts"
/*!******************************!*\
  !*** ./src/ui/modules/at.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearSchedule: () => (/* binding */ clearSchedule),
/* harmony export */   deinit: () => (/* binding */ deinit),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   setSchedule: () => (/* binding */ setSchedule)
/* harmony export */ });
const map = {};
let count = 0;
let intervalId;
function setSchedule(time, task) {
    const id = (++count).toString(10);
    map[id] = [time, task];
    console.debug("at", "setSchedule()", id, map[id]);
    return id;
}
function clearSchedule(id) {
    console.debug("at", "clearSchedule()", id, map[id]);
    delete map[id];
}
function init(interval = 1000) {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => run(), interval);
}
function deinit() {
    if (intervalId) {
        clearInterval(intervalId);
    }
}
function run() {
    const now = Date.now();
    for (const id in map) {
        const [time, task] = map[id];
        if (time <= now) {
            console.debug("at", "run()", id, map[id]);
            delete map[id];
            task();
        }
    }
}


/***/ },

/***/ "./src/ui/modules/common.ts"
/*!**********************************!*\
  !*** ./src/ui/modules/common.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyCaller: () => (/* binding */ LazyCaller),
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),
/* harmony export */   getGlobalServiceId: () => (/* binding */ getGlobalServiceId),
/* harmony export */   getIdWithHex: () => (/* binding */ getIdWithHex),
/* harmony export */   inRange: () => (/* binding */ inRange),
/* harmony export */   katakanaToHiragana: () => (/* binding */ katakanaToHiragana),
/* harmony export */   normalizeText: () => (/* binding */ normalizeText),
/* harmony export */   sleep: () => (/* binding */ sleep),
/* harmony export */   squaredUnicodeToBrackets: () => (/* binding */ squaredUnicodeToBrackets),
/* harmony export */   textMatch: () => (/* binding */ textMatch)
/* harmony export */ });
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regexp */ "./src/ui/modules/regexp.ts");

async function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
function inRange(value, min, max) {
    return value >= min && value <= max;
}
function getGlobalServiceId(networkId, serviceId) {
    return parseInt(networkId + (serviceId / 100000).toFixed(5).slice(2), 10);
}
function getIdWithHex(id) {
    return `0x${id.toString(16).toUpperCase()} (${id})`;
}
function textMatch(text, queryNormalized) {
    if (normalizeText(text).includes(queryNormalized)) {
        return true;
    }
    return false;
}
function normalizeText(text) {
    return katakanaToHiragana(squaredUnicodeToBrackets(text).normalize("NFKC")).toLowerCase();
}
function squaredUnicodeToBrackets(text) {
    return text.replace(_regexp__WEBPACK_IMPORTED_MODULE_0__.squaredUnicode, (s) => {
        return `[${s.normalize("NFKC")}]`;
    });
}
function katakanaToHiragana(text) {
    return text.replace(_regexp__WEBPACK_IMPORTED_MODULE_0__.katakana, (s) => {
        const code = s.charCodeAt(0) - 0x60;
        return String.fromCharCode(code);
    });
}
class LazyCaller {
    msDelay;
    msSleep;
    fn;
    caller;
    _delayTimeout;
    _activate = null;
    _running = false;
    constructor(msDelay, msSleep, fn) {
        this.msDelay = msDelay;
        this.msSleep = msSleep;
        this.fn = fn;
        const _lazy = this;
        this.caller = function lazyCaller(...args) {
            if (_lazy._running) {
                _lazy._activate = args || [];
                return;
            }
            clearTimeout(_lazy._delayTimeout);
            _lazy._delayTimeout = setTimeout(async () => {
                _lazy._activate = null;
                _lazy._running = true;
                if (_lazy.fn) {
                    await Reflect.apply(_lazy.fn, this, args);
                }
                await sleep(_lazy.msSleep);
                _lazy._running = false;
                if (_lazy._activate && _lazy.caller) {
                    setTimeout(_lazy.caller.apply(this, _lazy._activate), 0);
                }
            }, _lazy.msDelay);
        };
    }
    destroy() {
        clearTimeout(this._delayTimeout);
        this._activate = null;
        delete this.fn;
        delete this.caller;
    }
}
function copyToClipboard(text) {
    const input = document.createElement("input");
    input.setAttribute("readonly", "readonly");
    input.setAttribute("value", text);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}


/***/ },

/***/ "./src/ui/modules/constants.ts"
/*!*************************************!*\
  !*** ./src/ui/modules/constants.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Genre1Map: () => (/* binding */ Genre1Map),
/* harmony export */   Genre2Map: () => (/* binding */ Genre2Map),
/* harmony export */   GenreUN1Map: () => (/* binding */ GenreUN1Map),
/* harmony export */   GenreUN2Map: () => (/* binding */ GenreUN2Map),
/* harmony export */   ProgramAttributeMap: () => (/* binding */ ProgramAttributeMap),
/* harmony export */   audioModeMap: () => (/* binding */ audioModeMap),
/* harmony export */   channelTypeMap: () => (/* binding */ channelTypeMap),
/* harmony export */   detectAreaFromServices: () => (/* binding */ detectAreaFromServices),
/* harmony export */   langMap: () => (/* binding */ langMap),
/* harmony export */   relatedItemTypeIconMap: () => (/* binding */ relatedItemTypeIconMap),
/* harmony export */   relatedItemTypeMap: () => (/* binding */ relatedItemTypeMap)
/* harmony export */ });
const channelTypeMap = {
    GR: "地上",
    BS: "BS",
    CS: "CS",
    SKY: "SKY",
};
const NID_UPPER_TO_AREA = {
    0x7FE: "関東",
    0x7FD: "近畿",
    0x7FC: "東海",
    0x7FB: "北海道",
    0x7FA: "岡山・香川",
    0x7F9: "島根・鳥取",
    0x7F5: "北海道(札幌)",
    0x7F4: "北海道(函館)",
    0x7F3: "北海道(旭川)",
    0x7F2: "北海道(帯広)",
    0x7F1: "北海道(釧路)",
    0x7F0: "北海道(北見)",
    0x7EF: "北海道(室蘭)",
    0x7EE: "宮城",
    0x7ED: "秋田",
    0x7EC: "山形",
    0x7EB: "岩手",
    0x7EA: "福島",
    0x7E9: "青森",
    0x7E8: "東京",
    0x7E7: "神奈川",
    0x7E6: "群馬",
    0x7E5: "茨城",
    0x7E4: "千葉",
    0x7E3: "栃木",
    0x7E2: "埼玉",
    0x7E1: "長野",
    0x7E0: "新潟",
    0x7DF: "山梨",
    0x7DE: "愛知",
    0x7DD: "石川",
    0x7DC: "静岡",
    0x7DB: "福井",
    0x7DA: "富山",
    0x7D9: "三重",
    0x7D8: "岐阜",
    0x7D7: "大阪",
    0x7D6: "京都",
    0x7D5: "兵庫",
    0x7D4: "和歌山",
    0x7D3: "奈良",
    0x7D2: "滋賀",
    0x7D1: "広島",
    0x7D0: "岡山",
    0x7CF: "島根",
    0x7CE: "鳥取",
    0x7CD: "山口",
    0x7CC: "愛媛",
    0x7CB: "香川",
    0x7CA: "徳島",
    0x7C9: "高知",
    0x7C8: "福岡",
    0x7C7: "熊本",
    0x7C6: "長崎",
    0x7C5: "鹿児島",
    0x7C4: "宮崎",
    0x7C3: "大分",
    0x7C2: "佐賀",
    0x7C1: "沖縄",
};
function detectAreaFromServices(services) {
    for (const s of services) {
        const area = NID_UPPER_TO_AREA[s.networkId >> 4];
        if (area)
            return area;
    }
    return null;
}
const relatedItemTypeMap = {
    shared: "イベント共有",
    relay: "イベントリレー",
    movement: "イベント移動"
};
const relatedItemTypeIconMap = {
    shared: "duplicate",
    relay: "one-to-one",
    movement: "flow-linear"
};
const langMap = {
    jpn: "日本語",
    eng: "英語",
    deu: "ドイツ語",
    fra: "フランス語",
    ita: "イタリア語",
    rus: "ロシア語",
    zho: "中国語",
    kor: "韓国語",
    spa: "スペイン語",
    etc: "その他",
};
const audioModeMap = {
    "00001": "モノラル",
    "00010": "デュアルモノ",
    "00011": "ステレオ",
    "00100": "2/1モード",
    "00101": "3/0モード",
    "00110": "2/2モード",
    "00111": "3/1モード",
    "01000": "3/2モード",
    "01001": "5.1ch",
    "01010": "3/3.1モード",
    "01011": "2/0/0-2/0/2-0.1モード",
    "01100": "5/2.1モード",
    "01101": "3/2/2.1モード",
    "01110": "2/0/0-3/0/2-0.1モード",
    "01111": "0/2/0-3/0/2-0.1モード",
    "10000": "2/0/0-3/2/3-0.2モード",
    "10001": "3/3/3-5/2/3-3/0/0.2モード",
};
const ProgramAttributeMap = {
    字: "字幕放送",
    新: "新番組",
    初: "初回放送",
    終: "最終回",
    再: "再放送",
    デ: "番組連動データ放送",
    双: "双方向放送",
    無: "無料放送",
    二: "二ヶ国語放送",
    多: "音声多重放送",
    SS: "サラウンドステレオ",
    生: "生放送",
    前: "前編",
    後: "後編",
    解: "音声解説",
    PPV: "PPV",
    手: "手話通訳放送",
};
const Genre1Map = {
    0x0: "ニュース／報道",
    0x1: "スポーツ",
    0x2: "情報／ワイドショー",
    0x3: "ドラマ",
    0x4: "音楽",
    0x5: "バラエティ",
    0x6: "映画",
    0x7: "アニメ／特撮",
    0x8: "ドキュメンタリー／教養",
    0x9: "劇場／公演",
    0xA: "趣味／教育",
    0xB: "福祉",
    0xC: "予備",
    0xD: "予備",
    0xE: "拡張",
    0xF: "その他",
};
const Genre2Map = {
    0x00: "定時・総合",
    0x01: "天気",
    0x02: "特集・ドキュメント",
    0x03: "政治・国会",
    0x04: "経済・市況",
    0x05: "海外・国際",
    0x06: "解説",
    0x07: "討論・会談",
    0x08: "報道特番",
    0x09: "ローカル・地域",
    0x0A: "交通",
    0x0F: "その他",
    0x10: "スポーツニュース",
    0x11: "野球",
    0x12: "サッカー",
    0x13: "ゴルフ",
    0x14: "その他の球技",
    0x15: "相撲・格闘技",
    0x16: "オリンピック・国際大会",
    0x17: "マラソン・陸上・水泳",
    0x18: "モータースポーツ",
    0x19: "マリン・ウィンタースポーツ",
    0x1A: "競馬・公営競技",
    0x1F: "その他",
    0x20: "芸能・ワイドショー",
    0x21: "ファッション",
    0x22: "暮らし・住まい",
    0x23: "健康・医療",
    0x24: "ショッピング・通販",
    0x25: "グルメ・料理",
    0x26: "イベント",
    0x27: "番組紹介・お知らせ",
    0x2F: "その他",
    0x30: "国内ドラマ",
    0x31: "海外ドラマ",
    0x32: "時代劇",
    0x3F: "その他",
    0x40: "国内ロック・ポップス",
    0x41: "海外ロック・ポップス",
    0x42: "クラシック・オペラ",
    0x43: "ジャズ・フュージョン",
    0x44: "歌謡曲・演歌",
    0x45: "ライブ・コンサート",
    0x46: "ランキング・リクエスト",
    0x47: "カラオケ・のど自慢",
    0x48: "民謡・邦楽",
    0x49: "童謡・キッズ",
    0x4A: "民族音楽・ワールドミュージック",
    0x4F: "その他",
    0x50: "クイズ",
    0x51: "ゲーム",
    0x52: "トークバラエティ",
    0x53: "お笑い・コメディ",
    0x54: "音楽バラエティ",
    0x55: "旅バラエティ",
    0x56: "料理バラエティ",
    0x5F: "その他",
    0x60: "洋画",
    0x61: "邦画",
    0x62: "アニメ",
    0x6F: "その他",
    0x70: "国内アニメ",
    0x71: "海外アニメ",
    0x72: "特撮",
    0x7F: "その他",
    0x80: "社会・時事",
    0x81: "歴史・紀行",
    0x82: "自然・動物・環境",
    0x83: "宇宙・科学・医学",
    0x84: "カルチャー・伝統文化",
    0x85: "文学・文芸",
    0x86: "スポーツ",
    0x87: "ドキュメンタリー全般",
    0x88: "インタビュー・討論",
    0x8F: "その他",
    0x90: "現代劇・新劇",
    0x91: "ミュージカル",
    0x92: "ダンス・バレエ",
    0x93: "落語・演芸",
    0x94: "歌舞伎・古典",
    0x9F: "その他",
    0xA0: "旅・釣り・アウトドア",
    0xA1: "園芸・ペット・手芸",
    0xA2: "音楽・美術・工芸",
    0xA3: "囲碁・将棋",
    0xA4: "麻雀・パチンコ",
    0xA5: "車・オートバイ",
    0xA6: "コンピュータ・ＴＶゲーム",
    0xA7: "会話・語学",
    0xA8: "幼児・小学生",
    0xA9: "中学生・高校生",
    0xAA: "大学生・受験",
    0xAB: "生涯教育・資格",
    0xAC: "教育問題",
    0xAF: "その他",
    0xB0: "高齢者",
    0xB1: "障害者",
    0xB2: "社会福祉",
    0xB3: "ボランティア",
    0xB4: "手話",
    0xB5: "文字（字幕）",
    0xB6: "音声解説",
    0xBF: "その他",
    0xC0: "予備",
    0xD0: "予備",
    0xE0: "BS/地上デジタル放送用番組付属情報",
    0xE1: "広帯域CSデジタル放送用拡張",
    0xE2: "衛星デジタル音声放送用拡張",
    0xE3: "サーバー型番組付属情報",
    0xE4: "IP放送用番組付属情報",
    0xF0: "その他",
    0xFF: "その他",
};
const GenreUN1Map = {
    0xE10: "スポーツ",
    0xE11: "洋画",
    0xE12: "邦画",
};
const GenreUN2Map = {
    0xE000: "中止の可能性あり",
    0xE001: "延長の可能性あり",
    0xE002: "中断の可能性あり",
    0xE003: "同一シリーズの別話数放送の可能性あり",
    0xE004: "編成未定枠",
    0xE005: "繰り上げの可能性あり",
    0xE010: "中断ニュースあり",
    0xE011: "当該イベントに関連する臨時サービスあり",
    0xE020: "当該イベント中に3D映像あり",
    0xE100: "テニス",
    0xE101: "バスケットボール",
    0xE102: "ラグビー",
    0xE103: "アメリカンフットボール",
    0xE104: "ボクシング",
    0xE105: "プロレス",
    0xE10F: "その他",
    0xE110: "アクション",
    0xE111: "ＳＦ／ファンタジー",
    0xE112: "コメディー",
    0xE113: "サスペンス／ミステリー",
    0xE114: "恋愛／ロマンス",
    0xE115: "ホラー／スリラー",
    0xE116: "ウエスタン",
    0xE117: "ドラマ／社会派ドラマ",
    0xE118: "アニメーション",
    0xE119: "ドキュメンタリー",
    0xE11A: "アドベンチャー／冒険",
    0xE11B: "ミュージカル／音楽映画",
    0xE11C: "ホームドラマ",
    0xE11F: "その他",
    0xE120: "アクション",
    0xE121: "ＳＦ／ファンタジー",
    0xE122: "お笑い／コメディー",
    0xE123: "サスペンス／ミステリー",
    0xE124: "恋愛／ロマンス",
    0xE125: "ホラー／スリラー",
    0xE126: "青春／学園／アイドル",
    0xE127: "任侠／時代劇",
    0xE128: "アニメーション",
    0xE129: "ドキュメンタリー",
    0xE12A: "アドベンチャー／冒険",
    0xE12B: "ミュージカル／音楽映画",
    0xE12C: "ホームドラマ",
    0xE12F: "その他",
};


/***/ },

/***/ "./src/ui/modules/regexp.ts"
/*!**********************************!*\
  !*** ./src/ui/modules/regexp.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enclosedAttributeUnicode: () => (/* binding */ enclosedAttributeUnicode),
/* harmony export */   epgHTTPLinkFormat: () => (/* binding */ epgHTTPLinkFormat),
/* harmony export */   epgInstagramLinkFormat: () => (/* binding */ epgInstagramLinkFormat),
/* harmony export */   epgXLinkFormat: () => (/* binding */ epgXLinkFormat),
/* harmony export */   katakana: () => (/* binding */ katakana),
/* harmony export */   legacyAttributeFormat: () => (/* binding */ legacyAttributeFormat),
/* harmony export */   squaredUnicode: () => (/* binding */ squaredUnicode)
/* harmony export */ });
const katakana = /[\u30A1-\u30F6]/ug;
const squaredUnicode = /[\u{1F130}-\u{1F14E}\u{1F201}-\u{1F23B}]/ug;
const enclosedAttributeUnicode = /[\u{1F14D}-\u{1F14E}\u{1F210}-\u{1F222}]/ug;
const legacyAttributeFormat = /(?:[\[［][新生無][\]］]|\([二字]\)|[\[【]無料[\]】])/g;
const epgHTTPLinkFormat = /(?:(https?:\/\/[\x21-\x7e]+)|(ｈｔｔｐｓ?：／／[\uFF01-\uFF5E]+)|(www\.[\x21-\x7e]+))/gi;
const epgXLinkFormat = /(?:Twitter|Ｔｗｉｔｔｅｒ|X|Ｘ)[\s\S]{0,14}([@＠][\da-z_]+)/gi;
const epgInstagramLinkFormat = /(?:Instagram|Ｉｎｓｔａｇｒａｍ|インスタグラム)[\s\S]{0,14}([@＠][\da-z_]+)/gi;


/***/ },

/***/ "./src/ui/modules/state.ts"
/*!*********************************!*\
  !*** ./src/ui/modules/state.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.mjs");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var jsonrpc2_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonrpc2-ws */ "./node_modules/jsonrpc2-ws/lib/index.js");
/* harmony import */ var _at__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./at */ "./src/ui/modules/at.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon.svg */ "./src/ui/icon.svg");
/* harmony import */ var _icon_gray_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon-gray.svg */ "./src/ui/icon-gray.svg");
/* harmony import */ var _icon_active_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon-active.svg */ "./src/ui/icon-active.svg");








const iconSrcMap = {
    normal: _icon_svg__WEBPACK_IMPORTED_MODULE_5__,
    offline: _icon_gray_svg__WEBPACK_IMPORTED_MODULE_6__,
    active: _icon_active_svg__WEBPACK_IMPORTED_MODULE_7__
};
const jobStatusOrderMap = {
    queued: 0,
    standby: 1,
    running: 2,
    finished: 3
};
class State extends eventemitter3__WEBPACK_IMPORTED_MODULE_0__.EventEmitter {
    isDev = /^\/dev\/.*$/.test(location.pathname);
    navigate;
    location;
    pathname;
    searchParams;
    todayTime;
    version = "..";
    statusName = "Loading";
    statusIconKey = "offline";
    status;
    services = [];
    tuners = [];
    jobs = [];
    jobSchedules = [];
    programs = [];
    serverConfig;
    _rpc;
    constructor() {
        super();
        if (!this.isDev) {
            const emptyFunction = function () { };
            if (console?.debug) {
                console.debug = emptyFunction;
            }
            if (console?.log) {
                console.log = emptyFunction;
            }
        }
        this._setTodayTime();
        this._initRPC();
        this.on("tuners", () => this._updateIdleStatus());
        this.on("statusIconKey", key => _ui__WEBPACK_IMPORTED_MODULE_4__.setFavicon(iconSrcMap[key]));
    }
    get statusIconSrc() {
        return iconSrcMap[this.statusIconKey];
    }
    async fetchStatus() {
        this.status = await this._rpc.call("getStatus");
        this.emit("status", this.status);
        if (this.version !== ".." && this.version !== this.status.version) {
            location.reload();
            return;
        }
        this.version = this.status.version;
        this.emit("version", this.version);
        return this.status;
    }
    async fetchServices() {
        this.services = await this._rpc.call("getServices");
        if (this.services.length > 0) {
            this.emit("services", this.services);
        }
        return this.services;
    }
    async fetchTuners() {
        this.tuners.splice(0, this.tuners.length, ...await this._rpc.call("getTuners"));
        if (this.tuners.length > 0) {
            this.emit("tuners", this.tuners);
        }
        return this.tuners;
    }
    async fetchJobs() {
        this.jobs.splice(0, this.jobs.length, ...await this._rpc.call("getJobs"));
        if (this.jobs.length > 0) {
            this._handleJobs();
            this.emit("jobs", this.jobs);
        }
        return this.jobs;
    }
    async fetchJobSchedules() {
        this.jobSchedules = await this._rpc.call("getJobSchedules");
        if (this.jobSchedules.length > 0) {
            this.emit("jobSchedules", this.jobSchedules);
        }
        return this.jobSchedules;
    }
    async fetchPrograms() {
        this.programs = await (await fetch("/api/programs")).json();
        if (this.programs.length > 0) {
            this.emit("programs", this.programs);
        }
        return this.programs;
    }
    _joinProgramEvents;
    async subscribePrograms(forceEmit = false) {
        if (this._joinProgramEvents) {
            if (forceEmit) {
                this.emit("programs", this.programs);
            }
            return;
        }
        this._joinProgramEvents = () => {
            this.fetchPrograms();
            this._rpc.call("join", {
                rooms: ["events:program"],
            });
        };
        this._rpc.on("connected", this._joinProgramEvents);
        if (this._rpc.isConnected()) {
            this._joinProgramEvents();
        }
    }
    async unsubscribePrograms() {
        if (this._rpc.isConnected()) {
            this._rpc.call("leave", {
                rooms: ["events:program"],
            });
        }
        if (this._joinProgramEvents) {
            this._rpc.off("connected", this._joinProgramEvents);
            this._joinProgramEvents = undefined;
        }
    }
    async fetchServerConfig() {
        this.serverConfig = await (await fetch("/api/config/server")).json();
        return this.serverConfig;
    }
    _setTodayTime() {
        console.debug("state", "setTodayTime()");
        const init = !this.todayTime;
        this.todayTime = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.now().startOf("day").toMillis();
        if (!init) {
            this.emit("todayTime", this.todayTime);
        }
        ;(0,_at__WEBPACK_IMPORTED_MODULE_3__.setSchedule)(this.todayTime + 86400000, () => this._setTodayTime());
    }
    _initRPC() {
        const rpc = this._rpc = new jsonrpc2_ws__WEBPACK_IMPORTED_MODULE_2__.Client(`${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/rpc`, {
            protocols: null,
            bufferSendingMessages: false
        });
        rpc.on("connecting", () => {
            console.debug("rpc:connecting");
            this.statusName = "Connecting";
            this.statusIconKey = "offline";
            this.emit("statusName", this.statusName);
            this.emit("statusIconKey", this.statusIconKey);
        });
        let _statusRefreshInterval;
        let _servicesRefreshInterval;
        rpc.on("connected", async () => {
            console.debug("rpc:connected");
            this.programs = [];
            this.statusName = "Connected";
            this.statusIconKey = "normal";
            this.emit("statusName", this.statusName);
            this.emit("statusIconKey", this.statusIconKey);
            await rpc.call("join", {
                rooms: [
                    "events:service",
                    "events:tuner",
                    "events:job",
                    "events:job_schedule"
                ],
            });
            await this.fetchStatus();
            await this.fetchServices();
            await this.fetchTuners();
            await this.fetchJobs();
            await this.fetchJobSchedules();
            _statusRefreshInterval = setInterval(async () => {
                if (document.hidden) {
                    return;
                }
                await this.fetchStatus();
            }, 1000 * 5);
            _servicesRefreshInterval = setInterval(async () => {
                if (document.hidden) {
                    return;
                }
                await this.fetchServices();
            }, 1000 * 60);
        });
        rpc.on("disconnect", () => {
            console.debug("rpc:disconnected");
            if (_statusRefreshInterval) {
                clearInterval(_statusRefreshInterval);
                _statusRefreshInterval = undefined;
            }
            if (_servicesRefreshInterval) {
                clearInterval(_servicesRefreshInterval);
                _servicesRefreshInterval = undefined;
            }
            this.statusName = "Disconnected";
            this.statusIconKey = "offline";
            this.emit("statusName", this.statusName);
            this.emit("statusIconKey", this.statusIconKey);
        });
        rpc.methods.set("events", async (socket, { array }) => {
            let programsUpdated = false;
            let servicesUpdated = false;
            let tunersUpdated = false;
            let jobsUpdated = false;
            let jobSchedulesUpdated = false;
            for (const event of array) {
                switch (event.resource) {
                    case "program": {
                        const program = event.data;
                        const index = this.programs.findIndex(p => p.id === program.id);
                        if (event.type === "remove") {
                            if (index !== -1) {
                                this.programs.splice(index, 1);
                            }
                        }
                        else {
                            if (index === -1) {
                                this.programs.push(program);
                            }
                            else {
                                this.programs.splice(index, 1, program);
                            }
                        }
                        programsUpdated = true;
                        break;
                    }
                    case "service": {
                        const service = event.data;
                        const index = this.services.findIndex(s => s.id === service.id);
                        if (index === -1) {
                            this.services.push(service);
                        }
                        else {
                            this.services[index] = {
                                ...this.services[index],
                                ...service
                            };
                        }
                        servicesUpdated = true;
                        break;
                    }
                    case "tuner": {
                        const tuner = event.data;
                        this.tuners[this.tuners.findIndex(value => value.index === tuner.index)] = tuner;
                        tunersUpdated = true;
                        break;
                    }
                    case "job": {
                        const job = event.data;
                        const index = this.jobs.findIndex(j => j.id === job.id);
                        if (index === -1) {
                            this.jobs.unshift(job);
                        }
                        else {
                            this.jobs.splice(index, 1, job);
                        }
                        jobsUpdated = true;
                        break;
                    }
                    case "job_schedule": {
                        const jobSchedule = event.data;
                        const index = this.jobSchedules.findIndex(j => j.key === jobSchedule.key);
                        if (index === -1) {
                            this.jobSchedules.push(jobSchedule);
                        }
                        else {
                            this.jobSchedules.splice(index, 1, jobSchedule);
                        }
                        jobSchedulesUpdated = true;
                        break;
                    }
                }
            }
            if (programsUpdated) {
                this.emit("programs", this.programs);
            }
            if (servicesUpdated) {
                this.emit("services", this.services);
            }
            if (tunersUpdated) {
                this.emit("tuners", this.tuners);
            }
            if (jobsUpdated) {
                this._handleJobs();
                this.emit("jobs", this.jobs);
            }
            if (jobSchedulesUpdated) {
                this.emit("jobSchedules", this.jobSchedules);
            }
        });
        rpc.methods.set("logs", async (socket, { array }) => {
            this.emit("logs", array, false);
        });
    }
    _handleJobs() {
        this.jobs.sort((a, b) => {
            if (a.status === b.status) {
                if (a.finishedAt && b.finishedAt) {
                    return b.finishedAt - a.finishedAt;
                }
                if (a.startedAt && b.startedAt) {
                    return b.startedAt - a.startedAt;
                }
                if (a.createdAt && b.createdAt) {
                    return b.createdAt - a.createdAt;
                }
                return b.id.localeCompare(a.id);
            }
            return jobStatusOrderMap[a.status] - jobStatusOrderMap[b.status];
        });
        if (this.jobs.length > 200) {
            this.jobs.splice(200, this.jobs.length - 200);
        }
    }
    _updateIdleStatus() {
        let statusName = "Standby";
        let statusIconKey = "normal";
        const isActive = this.tuners.some(tuner => tuner.isUsing === true && tuner.users.some(user => user.priority !== -1));
        if (isActive) {
            statusName = "Active";
            statusIconKey = "active";
        }
        if (this.statusName !== statusName) {
            this.statusName = statusName;
            this.statusIconKey = statusIconKey;
            this.emit("statusName", this.statusName);
            this.emit("statusIconKey", this.statusIconKey);
        }
    }
}
const state = new State();


/***/ },

/***/ "./src/ui/modules/ui.ts"
/*!******************************!*\
  !*** ./src/ui/modules/ui.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _setTitle: () => (/* binding */ _setTitle),
/* harmony export */   autoLink: () => (/* binding */ autoLink),
/* harmony export */   blur: () => (/* binding */ blur),
/* harmony export */   setFavicon: () => (/* binding */ setFavicon),
/* harmony export */   setTitle: () => (/* binding */ setTitle)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/ui/modules/common.ts");
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regexp */ "./src/ui/modules/regexp.ts");


function blur() {
    document.activeElement?.blur();
}
const setTitle = (() => {
    const lazy = new _common__WEBPACK_IMPORTED_MODULE_0__.LazyCaller(100, 0, _setTitle);
    return lazy.caller.bind(undefined);
})();
function _setTitle(title, loading) {
    if (!title) {
        return;
    }
    title = title.replace(_regexp__WEBPACK_IMPORTED_MODULE_1__.squaredUnicode, "").replace(_regexp__WEBPACK_IMPORTED_MODULE_1__.legacyAttributeFormat, "");
    if (!title) {
        return;
    }
    if (!loading) {
        const elements = document.querySelectorAll(".heading-title");
        elements.forEach(element => {
            element.classList.remove("bp6-skeleton");
            element.textContent = title;
        });
    }
    document.title = `${title.normalize("NFKC")} | Mirakurun`;
}
let _faviconElement;
function setFavicon(src) {
    if (!_faviconElement) {
        _faviconElement = document.querySelector("link[rel*='icon']");
    }
    if (_faviconElement) {
        _faviconElement.href = src;
    }
}
function autoLink(text) {
    return text
        .replace(_regexp__WEBPACK_IMPORTED_MODULE_1__.epgHTTPLinkFormat, text => {
        let url = text.normalize("NFKC");
        if (!/^http/.test(url)) {
            url = `https://${url}`;
        }
        return `<a referrerpolicy="no-referrer" target="_blank" href="${url}" title="外部サイト">${text}</a>`;
    })
        .replace(_regexp__WEBPACK_IMPORTED_MODULE_1__.epgXLinkFormat, (text, username) => {
        return text.replace(username, `<a referrerpolicy="no-referrer" target="_blank" href="https://x.com/${username.slice(1)}" title="X">${username}</a>`);
    })
        .replace(_regexp__WEBPACK_IMPORTED_MODULE_1__.epgInstagramLinkFormat, (text, username) => {
        return text.replace(username, `<a referrerpolicy="no-referrer" target="_blank" href="https://instagram.com/${username.slice(1)}" title="Instagram">${username}</a>`);
    });
}


/***/ },

/***/ "./src/ui/routes/AboutView.tsx"
/*!*************************************!*\
  !*** ./src/ui/routes/AboutView.tsx ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutView: () => (/* binding */ AboutView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/card/card.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/elevation.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/divider/divider.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/html/html.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/text/text.js");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _components_VersionStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/VersionStatus */ "./src/ui/components/VersionStatus.tsx");
/* harmony import */ var _AboutView_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AboutView.sass */ "./src/ui/routes/AboutView.sass");







const AboutView = () => {
    console.debug("routes", "AboutView");
    _modules_ui__WEBPACK_IMPORTED_MODULE_11__.setTitle("Mirakurun について");
    const [version, setVersion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_10__.state.version);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onVersion = () => {
            setVersion(_modules_state__WEBPACK_IMPORTED_MODULE_10__.state.version);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_10__.state.on("version", onVersion);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_10__.state.off("version", onVersion);
        };
    }, []);
    const [consented, setConsented] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toolbar = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar, { className: "toolbar" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Heading, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, { items: [
                        {
                            text: "Mirakurun について"
                        }
                    ] })))));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-about-view" },
        toolbar,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "about-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Card, { elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Elevation.ONE, className: "about-card" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "about-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "product-icon", src: _modules_state__WEBPACK_IMPORTED_MODULE_10__.state.statusIconSrc, alt: _modules_state__WEBPACK_IMPORTED_MODULE_10__.state.statusName }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.H3, null, "Mirakurun")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Divider, null),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "about-info" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "bp6-html-table bp6-html-table-striped bp6-html-table-condensed info-table" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Current"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, version)),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Latest"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_VersionStatus__WEBPACK_IMPORTED_MODULE_12__.VersionStatus, null))),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "License"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Apache License 2.0")),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Copyright"),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                                        "Copyright \u00A9 2016-2026 ",
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://github.com/kanreisa", target: "_blank", rel: "noreferrer" }, "kanreisa")))))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "warranty-warning" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Text, { className: "warranty-text" }, "Mirakurun comes with ABSOLUTELY NO WARRANTY. USE AT YOUR OWN RISK.")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "links" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "git-branch", text: "GitHub Repository", onClick: () => window.open("https://github.com/Chinachu/Mirakurun", "_blank"), variant: "minimal" }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "globe", text: "Chinachu Project", onClick: () => window.open("https://chinachu.moe/", "_blank"), variant: "minimal" }))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Card, { elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Elevation.ONE, className: "heart-card" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.H5, null, "Special Thanks"),
                    consented === false ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "consent" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "We sincerely thank you for your continued support."),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null,
                            "This page is attempting to retrieve images from your browser by going directly to",
                            " ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://opencollective.com/", target: "_blank", rel: "noreferrer" }, "opencollective.com"),
                            " ",
                            "in order to display a list of contributors."),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", text: "Continue", onClick: () => setConsented(true) }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "contributors-list" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "section" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.H5, null, "Contributors"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This project exists thanks to all the people who contribute."),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "image-container" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://github.com/Chinachu/Mirakurun/graphs/contributors", target: "_blank", rel: "noreferrer" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: "https://opencollective.com/Mirakurun/contributors.svg?width=890&button=false", alt: "Contributors", className: "opencollective-img" })))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Divider, null),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "section" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.H5, null,
                                "Backers",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-text-muted text-small" },
                                    "[",
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://opencollective.com/Mirakurun#backer", target: "_blank", rel: "noreferrer" }, "Become a backer"),
                                    "]")),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Thank you to all our backers! \uD83D\uDE4F"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "image-container" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://opencollective.com/Mirakurun#backers", target: "_blank", rel: "noreferrer" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: "https://opencollective.com/Mirakurun/backers.svg?width=890", alt: "Backers", className: "opencollective-img" })))),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Divider, null),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "section" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.H5, null,
                                "Sponsors",
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-text-muted text-small" },
                                    "[",
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://opencollective.com/Mirakurun#sponsor", target: "_blank", rel: "noreferrer" }, "Become a sponsor"),
                                    "]")),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Support this project by becoming a sponsor. Your logo will show up here with a link to your website."),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sponsors-avatars" }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { key: i, href: `https://opencollective.com/Mirakurun/sponsor/${i}/website`, target: "_blank", rel: "noreferrer" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: `https://opencollective.com/Mirakurun/sponsor/${i}/avatar.svg`, alt: `Sponsor ${i}`, className: "sponsor-avatar" })))))))))))));
};


/***/ },

/***/ "./src/ui/routes/ChannelsConfigView.tsx"
/*!**********************************************!*\
  !*** ./src/ui/routes/ChannelsConfigView.tsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChannelsConfigView: () => (/* binding */ ChannelsConfigView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/callout/callout.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialog.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogBody.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogFooter.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/controls.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/formGroup.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/inputGroup.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/html-select/htmlSelect.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/html-table/htmlTable.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/progress-bar/progressBar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/spinner/spinner.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _ChannelsConfigView_sass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ChannelsConfigView.sass */ "./src/ui/routes/ChannelsConfigView.sass");







const configAPI = "/api/config/channels";
const typesIndex = ["GR", "BS", "CS", "SKY", "NW1", "NW2", "NW3", "NW4", "NW5", "NW6", "NW7", "NW8", "NW9", "NW10",
    "NW11", "NW12", "NW13", "NW14", "NW15", "NW16", "NW17", "NW18", "NW19", "NW20",
    "NW21", "NW22", "NW23", "NW24", "NW25", "NW26", "NW27", "NW28", "NW29", "NW30",
    "NW31", "NW32", "NW33", "NW34", "NW35", "NW36", "NW37", "NW38", "NW39", "NW40"];
const scanStatusLabels = {
    not_started: "未開始 / Not started",
    scanning: "スキャン中 / Scanning",
    completed: "完了 / Completed",
    cancelled: "キャンセル済み / Cancelled",
    error: "エラー / Error"
};
function sortTypes(types) {
    return types.sort((a, b) => typesIndex.indexOf(a) - typesIndex.indexOf(b));
}
function expandChannelRanges(input) {
    if (!input)
        return "";
    const parts = input.split(",");
    const result = [];
    for (const part of parts) {
        if (part.includes("-")) {
            const [start, end] = part.split("-").map(n => parseInt(n.trim(), 10));
            if (!isNaN(start) && !isNaN(end)) {
                for (let i = start; i <= end; i++) {
                    result.push(i);
                }
            }
        }
        else {
            const num = parseInt(part.trim(), 10);
            if (!isNaN(num)) {
                result.push(num);
            }
        }
    }
    return [...new Set(result)].sort((a, b) => a - b).join(",");
}
function getScanDefaults(type, channels, isWindows) {
    const defaults = type === "GR" ?
        { minCh: "13", maxCh: "62", space: "", useSubCh: true } :
        type === "BS" || type === "BS4K" ?
            { minCh: "1", maxCh: "23", space: "", useSubCh: true } :
            type === "CS" || type === "CS4K" ?
                { minCh: "2", maxCh: "24", space: "", useSubCh: true } :
                { minCh: "0", maxCh: "62", space: "", useSubCh: false };
    if (!isWindows) {
        return defaults;
    }
    const windowsFallbacks = {
        GR: [0, 49, 0],
        BS: [0, 28, 0],
        CS: [0, 11, 1],
        BS4K: [0, 91, 0],
        CS4K: [0, 22, 0]
    };
    const fallback = windowsFallbacks[type] || [0, 62, 0];
    const configured = channels.filter(channel => channel.type === type && /^\d+$/.test(channel.channel));
    const configuredIndexes = configured.map(channel => Number(channel.channel));
    const configuredSpace = configured
        .map(channel => channel.commandVars?.space ?? channel.space)
        .find(value => typeof value === "number");
    return {
        minCh: String(configuredIndexes.length > 0 ? Math.min(...configuredIndexes) : fallback[0]),
        maxCh: String(configuredIndexes.length > 0 ? Math.max(...configuredIndexes) : fallback[1]),
        space: String(configuredSpace ?? fallback[2]),
        useSubCh: false
    };
}
const migrateChannels = (channels) => {
    return channels.map(ch => {
        if ((ch.satellite || ch.space !== undefined || ch.freq !== undefined || ch.polarity) && (!ch.commandVars || Object.keys(ch.commandVars).length === 0)) {
            const commandVars = {};
            if (ch.satellite) {
                commandVars["satellite"] = ch.satellite;
            }
            if (ch.space !== undefined) {
                commandVars["space"] = ch.space;
            }
            if (ch.freq !== undefined) {
                commandVars["freq"] = ch.freq;
            }
            if (ch.polarity) {
                commandVars["polarity"] = ch.polarity;
            }
            return {
                ...ch,
                commandVars
            };
        }
        return ch;
    });
};
const ChannelsConfigView = () => {
    console.debug("routes", "ChannelsConfigView");
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [showSaveDialog, setShowSaveDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [showScanDialog, setShowScanDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scanType, setScanType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("GR");
    const [scanMinCh, setScanMinCh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("13");
    const [scanMaxCh, setScanMaxCh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("62");
    const [scanSpace, setScanSpace] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [scanSkipCh, setScanSkipCh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [scanMinSubCh, setScanMinSubCh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("0");
    const [scanMaxSubCh, setScanMaxSubCh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("3");
    const [scanUseSubCh, setScanUseSubCh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [scanChannelNameFormatEnabled, setScanChannelNameFormatEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scanChannelNameFormat, setScanChannelNameFormat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [scanSetDisabledOnAdd, setScanSetDisabledOnAdd] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scanAutoApply, setScanAutoApply] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scanRefresh, setScanRefresh] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scanStatus, setScanStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [scanInProgress, setScanInProgress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showScanResultDialog, setShowScanResultDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [scanError, setScanError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [serverPlatform, setServerPlatform] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_18__.state.status?.process?.platform);
    _modules_ui__WEBPACK_IMPORTED_MODULE_19__.setTitle("チャンネル設定", isLoading);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onStatus = () => setServerPlatform(_modules_state__WEBPACK_IMPORTED_MODULE_18__.state.status?.process?.platform);
        _modules_state__WEBPACK_IMPORTED_MODULE_18__.state.on("status", onStatus);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_18__.state.off("status", onStatus);
        };
    }, []);
    const applyScanDefaults = (type) => {
        const defaults = getScanDefaults(type, editing || [], serverPlatform === "win32");
        setScanMinCh(defaults.minCh);
        setScanMaxCh(defaults.maxCh);
        setScanSpace(defaults.space);
        setScanUseSubCh(defaults.useSubCh);
    };
    const fetchScanStatus = async () => {
        try {
            const res = await (await fetch("/api/config/channels/scan")).json();
            console.log("ChannelsConfigView", "GET", "/api/config/channels/scan", "->", res);
            setScanStatus(res);
            setScanInProgress(prev => {
                if (res.status === "completed" && prev && !res.isScanning) {
                    setShowScanResultDialog(true);
                }
                return res.isScanning;
            });
        }
        catch (e) {
            console.error("Failed to fetch scan status:", e);
        }
    };
    const startScan = async () => {
        try {
            setScanError("");
            const params = new URLSearchParams();
            params.append("type", scanType);
            params.append("minCh", scanMinCh);
            params.append("maxCh", scanMaxCh);
            if (scanSpace.trim() !== "") {
                params.append("space", scanSpace.trim());
            }
            if (scanSkipCh.trim()) {
                const expandedSkipCh = expandChannelRanges(scanSkipCh.trim());
                params.append("skipCh", expandedSkipCh);
            }
            if ((scanType === "BS" || scanType === "BS4K") && scanUseSubCh) {
                params.append("minSubCh", scanMinSubCh);
                params.append("maxSubCh", scanMaxSubCh);
                params.append("useSubCh", "true");
            }
            else if (scanType === "BS" || scanType === "BS4K") {
                params.append("useSubCh", "false");
            }
            if (!scanAutoApply) {
                params.append("dryRun", "true");
            }
            if (scanChannelNameFormatEnabled && scanChannelNameFormat.trim()) {
                params.append("channelNameFormat", scanChannelNameFormat.trim());
            }
            params.append("setDisabledOnAdd", scanSetDisabledOnAdd ? "true" : "false");
            if (scanRefresh) {
                params.append("refresh", "true");
            }
            params.append("async", "true");
            const url = `/api/config/channels/scan?${params.toString()}`;
            console.log("ChannelsConfigView", "PUT", url);
            const response = await fetch(url, { method: "PUT" });
            const result = await response.json();
            if (response.status === 202) {
                console.log("Scan started:", result);
                setScanInProgress(true);
                setShowScanDialog(false);
                await fetchScanStatus();
            }
            else {
                console.error("Failed to start scan:", result);
                setScanError(result.reason || result.message || `スキャンを開始できませんでした (${response.status})`);
            }
        }
        catch (e) {
            console.error("Error starting scan:", e);
            setScanError(`スキャンを開始できませんでした: ${String(e)}`);
        }
    };
    const stopScan = async () => {
        try {
            const response = await fetch("/api/config/channels/scan", { method: "DELETE" });
            console.log("ChannelsConfigView", "DELETE", "/api/config/channels/scan", "->", await response.json());
            setScanInProgress(false);
        }
        catch (e) {
            console.error("Error stopping scan:", e);
        }
    };
    const applyScanResult = () => {
        if (scanStatus && scanStatus.result) {
            setEditing(JSON.parse(JSON.stringify(scanStatus.result)));
            setShowScanResultDialog(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (saved === true) {
            setTimeout(() => {
            }, 500);
            setSaved(false);
            return;
        }
        (async () => {
            try {
                const res = await (await fetch(configAPI)).json();
                console.log("ChannelsConfigView", "GET", configAPI, "->", res);
                const migrated = migrateChannels(res);
                setEditing(JSON.parse(JSON.stringify(migrated)));
                setCurrent(JSON.parse(JSON.stringify(migrated)));
                setIsLoading(false);
            }
            catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        })();
    }, [saved]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        fetchScanStatus();
    }, [current]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        let intervalId;
        if (scanInProgress) {
            intervalId = setInterval(fetchScanStatus, 5000);
        }
        else {
            intervalId = setInterval(fetchScanStatus, 30000);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [scanInProgress]);
    const hasChanges = editing !== null && current !== null && !fast_deep_equal__WEBPACK_IMPORTED_MODULE_17___default()(editing, current);
    const handleCancel = () => {
        if (current) {
            setEditing(JSON.parse(JSON.stringify(current)));
        }
    };
    const handleSave = async () => {
        if (!editing)
            return;
        setShowSaveDialog(false);
        try {
            console.log("ChannelsConfigView", "PUT", configAPI, "<-", editing);
            await fetch(configAPI, {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify(editing)
            });
            setSaved(true);
        }
        catch (err) {
            console.error(err);
        }
    };
    const handleAddChannel = () => {
        if (!editing)
            return;
        const i = editing.length;
        const newChannel = {
            name: `ch${i}`,
            type: "GR",
            channel: "0",
            isDisabled: true
        };
        setEditing([...editing, newChannel]);
    };
    const updateChannel = (index, updated) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        newEditing[index] = { ...newEditing[index], ...updated };
        setEditing(newEditing);
    };
    const deleteChannelProperty = (index, key) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        const updated = { ...newEditing[index] };
        delete updated[key];
        newEditing[index] = updated;
        setEditing(newEditing);
    };
    const handleUp = (i) => {
        if (!editing || i === 0)
            return;
        const newEditing = [...editing];
        const temp = newEditing[i];
        newEditing[i] = newEditing[i - 1];
        newEditing[i - 1] = temp;
        setEditing(newEditing);
    };
    const handleDown = (i) => {
        if (!editing || i === editing.length - 1)
            return;
        const newEditing = [...editing];
        const temp = newEditing[i];
        newEditing[i] = newEditing[i + 1];
        newEditing[i + 1] = temp;
        setEditing(newEditing);
    };
    const handleRemove = (i) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        newEditing.splice(i, 1);
        setEditing(newEditing);
    };
    const updateCommandVarKey = (chIndex, oldKey, newKey) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        const ch = { ...newEditing[chIndex] };
        const commandVars = { ...(ch.commandVars || {}) };
        const updatedVars = {};
        Object.entries(commandVars).forEach(([k, v]) => {
            if (k === oldKey) {
                updatedVars[newKey] = v;
            }
            else {
                updatedVars[k] = v;
            }
        });
        ch.commandVars = updatedVars;
        newEditing[chIndex] = ch;
        setEditing(newEditing);
    };
    const updateCommandVarValue = (chIndex, key, newValue) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        const ch = { ...newEditing[chIndex] };
        const commandVars = { ...(ch.commandVars || {}) };
        if (newValue === "") {
            commandVars[key] = "";
        }
        else if (newValue === "0") {
            commandVars[key] = 0;
        }
        else if (/^[0-9]+(\.[0-9]+)?$/.test(newValue)) {
            commandVars[key] = parseFloat(newValue);
        }
        else {
            commandVars[key] = newValue;
        }
        ch.commandVars = commandVars;
        newEditing[chIndex] = ch;
        setEditing(newEditing);
    };
    const removeCommandVar = (chIndex, key) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        const ch = { ...newEditing[chIndex] };
        const commandVars = { ...(ch.commandVars || {}) };
        delete commandVars[key];
        if (Object.keys(commandVars).length === 0) {
            delete ch.commandVars;
        }
        else {
            ch.commandVars = commandVars;
        }
        newEditing[chIndex] = ch;
        setEditing(newEditing);
    };
    const addCommandVar = (chIndex) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        const ch = { ...newEditing[chIndex] };
        const commandVars = { ...(ch.commandVars || {}) };
        let newKey = "arg";
        let counter = 1;
        while (commandVars[newKey] !== undefined) {
            newKey = `arg${counter}`;
            counter++;
        }
        commandVars[newKey] = "";
        ch.commandVars = commandVars;
        newEditing[chIndex] = ch;
        setEditing(newEditing);
    };
    const toolbar = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Navbar, { className: "toolbar" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Navbar.Heading, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, { items: [
                        {
                            text: "チャンネル設定"
                        }
                    ] }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.END },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, intent: "success", icon: "add", text: "\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u8FFD\u52A0 / Add Channel", onClick: handleAddChannel }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, intent: "warning", icon: "search", text: "\u30C1\u30E3\u30F3\u30CD\u30EB\u30B9\u30AD\u30E3\u30F3 / Channel Scan", onClick: () => {
                    applyScanDefaults(scanType);
                    setScanError("");
                    setShowScanDialog(true);
                }, disabled: scanInProgress }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Navbar.Divider, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, intent: "danger", icon: "undo", text: "\u5909\u66F4\u3092\u53D6\u308A\u6D88\u3059 / Cancel", disabled: !hasChanges, onClick: handleCancel }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", icon: "saved", text: "\u4FDD\u5B58 / Save", disabled: !hasChanges, onClick: () => setShowSaveDialog(true) }))));
    if (isLoading || !editing) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-channels-config-view" },
            toolbar,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__.NonIdealState, { icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_16__.Spinner, null), title: "\u30ED\u30FC\u30C9\u4E2D", description: "\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059..." })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-channels-config-view" },
        toolbar,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            scanInProgress && scanStatus && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Callout, { intent: "primary", title: `チャンネルスキャン中 / Scanning (${scanStatus.type})` },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_15__.ProgressBar, { value: (scanStatus.progress || 0) / 100 }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                            "\u73FE\u5728\u306E\u30C1\u30E3\u30F3\u30CD\u30EB / Current: ",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, scanStatus.currentChannel || "初期化中 / Initializing..."),
                            " (\u9032\u6357 / Progress: ",
                            scanStatus.progress || 0,
                            "%)",
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { marginLeft: "16px" } },
                                "\u65B0\u898F / New: ",
                                scanStatus.newCount || 0,
                                " / \u5F15\u304D\u7D99\u304E / Existing: ",
                                scanStatus.takeoverCount || 0)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "8px" } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { small: true, icon: "refresh", onClick: fetchScanStatus }, "\u66F4\u65B0 / Refresh"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { small: true, intent: "danger", icon: "stop", onClick: stopScan }, "\u505C\u6B62 / Stop")))))),
            !scanInProgress && scanStatus && (scanStatus.status === "completed" || (scanStatus.scanLog && scanStatus.scanLog.length > 0)) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Callout, { intent: scanStatus.status === "completed" ? "success" : "warning", title: `前回のスキャン結果 / Last Scan (${scanStatus.type})` },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "8px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                        "\u30B9\u30C6\u30FC\u30BF\u30B9 / Status: ",
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, scanStatusLabels[scanStatus.status]),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { marginLeft: "16px" } },
                            "\u65B0\u898F / New: ",
                            scanStatus.newCount || 0,
                            " / \u5F15\u304D\u7D99\u304E / Existing: ",
                            scanStatus.takeoverCount || 0)),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "8px" } },
                        scanStatus.status === "completed" && scanStatus.result && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { small: true, intent: "success", icon: "tick", onClick: applyScanResult }, "\u7D50\u679C\u3092\u9069\u7528 / Apply")),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { small: true, icon: "document", onClick: () => setShowScanResultDialog(true) }, "\u30ED\u30B0\u3092\u8868\u793A / Show Log"))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.HTMLTable, { className: "channels-table", striped: true, interactive: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "80px" } }, "\u6709\u52B9 / Enable"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "160px" } }, "\u540D\u524D / Name"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "100px" } }, "\u7A2E\u5225 / Type"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "120px" } }, "\u30C1\u30E3\u30F3\u30CD\u30EB / Channel"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "\u30AA\u30D7\u30B7\u30E7\u30F3 / Options"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "140px", textAlign: "right" } }))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, editing.map((ch, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: i },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { checked: !ch.isDisabled, onChange: (e) => {
                                updateChannel(i, { isDisabled: !e.currentTarget.checked });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { value: ch.name || "", onChange: (e) => {
                                updateChannel(i, { name: e.target.value });
                            }, onBlur: () => {
                                if (ch.name === "") {
                                    updateChannel(i, { name: `ch${i}` });
                                }
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.HTMLSelect, { value: ch.type, onChange: (e) => {
                                updateChannel(i, { type: e.target.value });
                            }, options: [
                                { value: "GR", label: "GR" },
                                { value: "BS", label: "BS" },
                                { value: "BS4K", label: "BS4K" },
                                { value: "CS", label: "CS" },
                                { value: "CS4K", label: "CS4K" },
                                { value: "SKY", label: "SKY" },
                                ...[...Array(40)].map((_, i) => ({ value: `NW${i + 1}`, label: `NW${i + 1}` }))
                            ] })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { value: ch.channel || "", onChange: (e) => {
                                updateChannel(i, { channel: e.target.value });
                            }, onBlur: () => {
                                if (ch.channel === "") {
                                    updateChannel(i, { channel: "0" });
                                }
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "channel-options-grid" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u30B5\u30FC\u30D3\u30B9ID / Service ID", style: { width: "120px", marginBottom: 0 } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { placeholder: "SID", value: `${ch.serviceId || ""}`, onChange: (e) => {
                                        const val = e.target.value;
                                        if (val === "") {
                                            deleteChannelProperty(i, "serviceId");
                                        }
                                        else if (/^[0-9]+$/.test(val)) {
                                            const sid = parseInt(val, 10);
                                            if (sid <= 65535 && sid > 0) {
                                                updateChannel(i, { serviceId: sid });
                                            }
                                        }
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "TSMF\u76F8\u5BFETS / Relative TS", style: { width: "140px", marginBottom: 0 } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { placeholder: "TsmfRelTs", value: `${ch.tsmfRelTs || ""}`, onChange: (e) => {
                                        const val = e.target.value;
                                        if (val === "") {
                                            deleteChannelProperty(i, "tsmfRelTs");
                                        }
                                        else if (/^[0-9]+$/.test(val)) {
                                            const tsmfRelTs = parseInt(val, 10);
                                            updateChannel(i, { tsmfRelTs });
                                        }
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "cmd-vars-container" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "cmd-vars-title" }, "\u30B3\u30DE\u30F3\u30C9\u5909\u6570 / Command Vars"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "cmd-vars-list" },
                                    ch.commandVars && Object.entries(ch.commandVars).map(([key, value]) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: key, className: "cmd-var-pair" },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { small: true, className: "cmd-var-key", value: key, onChange: (e) => updateCommandVarKey(i, key, e.target.value) }),
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "cmd-var-separator" }, ":"),
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { small: true, className: "cmd-var-value", value: `${value}`, onChange: (e) => updateCommandVarValue(i, key, e.target.value) }),
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { small: true, minimal: true, intent: "danger", icon: "cross", onClick: () => removeCommandVar(i, key) })))),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { small: true, minimal: true, intent: "primary", icon: "plus", text: "\u5909\u6570\u3092\u8FFD\u52A0 / Add Var", onClick: () => addCommandVar(i) }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "controls-cell" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { disabled: i === 0, icon: "chevron-up", onClick: () => handleUp(i), minimal: true }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { disabled: i === editing.length - 1, icon: "chevron-down", onClick: () => handleDown(i), minimal: true }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "trash", intent: "danger", onClick: () => handleRemove(i), minimal: true }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, { isOpen: showSaveDialog, onClose: () => setShowSaveDialog(false), title: "\u8A2D\u5B9A\u306E\u4FDD\u5B58 / Save" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogBody, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "bp6-text-muted" }, "\u9069\u7528\u3059\u308B\u306B\u306F\u518D\u8D77\u52D5\u304C\u5FC5\u8981\u3067\u3059\u3002")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => setShowSaveDialog(false) }, "\u30AD\u30E3\u30F3\u30BB\u30EB / Cancel"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", disabled: !hasChanges, onClick: handleSave }, "\u4FDD\u5B58 / Save")) })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, { isOpen: showScanDialog, onClose: () => setShowScanDialog(false), title: "\u30C1\u30E3\u30F3\u30CD\u30EB\u30B9\u30AD\u30E3\u30F3 / Channel Scan", style: { width: "450px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogBody, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "16px" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u30C1\u30E3\u30F3\u30CD\u30EB\u7A2E\u5225 / Channel Type" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.HTMLSelect, { value: scanType, onChange: (e) => {
                                const newType = e.target.value;
                                setScanType(newType);
                                applyScanDefaults(newType);
                            }, options: [
                                { value: "GR", label: "GR" },
                                { value: "BS", label: "BS" },
                                { value: "BS4K", label: "BS4K" },
                                { value: "CS", label: "CS" },
                                { value: "CS4K", label: "CS4K" },
                                ...[...Array(40)].map((_, i) => ({ value: `NW${i + 1}`, label: `NW${i + 1}` }))
                            ] })),
                    serverPlatform === "win32" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Callout, { intent: "primary", icon: "desktop" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Windows\u7528\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u7BC4\u56F2\u3067\u3059\u3002\u65E2\u5B58\u8A2D\u5B9A\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u305D\u306E\u7BC4\u56F2\u3068Space\u3092\u521D\u671F\u5024\u306B\u3057\u3066\u3044\u307E\u3059\u3002"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Windows channel indexes are used. Existing channel ranges and Space values are used as defaults when available."))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "16px" } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u958B\u59CB\u30C1\u30E3\u30F3\u30CD\u30EB / Min", style: { flex: 1 } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { type: "number", min: 0, step: 1, value: scanMinCh, onChange: (e) => setScanMinCh(e.target.value) })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u7D42\u4E86\u30C1\u30E3\u30F3\u30CD\u30EB / Max", style: { flex: 1 } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { type: "number", min: 0, step: 1, value: scanMaxCh, onChange: (e) => setScanMaxCh(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u30C1\u30E5\u30FC\u30CA\u30FCSpace / Tuner Space", helperText: "BonDriver\u306ESpace\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9\u3067\u3059\u3002\u672A\u6307\u5B9A\u6642\u306F0\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002 / BonDriver Space index. Defaults to 0 when omitted." },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { type: "number", min: 0, step: 1, placeholder: "\u4F8B / Example: 0", value: scanSpace, onChange: (e) => setScanSpace(e.target.value) })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Callout, { intent: "warning", icon: "warning-sign", title: "\u30C1\u30E3\u30F3\u30CD\u30EB\u7A2E\u5225\u3068Space\u306E\u7D44\u307F\u5408\u308F\u305B / Channel Type and Space" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "1\u56DE\u306E\u30B9\u30AD\u30E3\u30F3\u306F\u30011\u3064\u306E\u30C1\u30E3\u30F3\u30CD\u30EB\u7A2E\u5225\u30681\u3064\u306E\u30C1\u30E5\u30FC\u30CA\u30FCSpace\u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u524D\u63D0\u3068\u3057\u307E\u3059\u3002Space\u304C\u7570\u306A\u308B\u30C1\u30E3\u30F3\u30CD\u30EB\u306F\u3001NW1\u30FBNW2\u306A\u3069\u5225\u306E\u7A2E\u5225\u306B\u5206\u3051\u3066\u304F\u3060\u3055\u3044\u3002\u540C\u3058\u7A2E\u5225\u3092\u8907\u6570\u306ESpace\u3067\u4F7F\u7528\u3059\u308B\u3068\u3001\u5225Space\u306E\u8A2D\u5B9A\u304C\u7D50\u679C\u304B\u3089\u9664\u5916\u3055\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Each scan targets one Channel Type and one Tuner Space. Use separate types such as NW1 and NW2 for different spaces. Multiple spaces under the same type may exclude the other spaces from the result.")),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u30B9\u30AD\u30C3\u30D7\u3059\u308B\u30C1\u30E3\u30F3\u30CD\u30EB / Skip Channels", helperText: "\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7BC4\u56F2\u6307\u5B9A\uFF08\u4F8B: 14-16\uFF09\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 / Use commas; ranges such as 14-16 are supported." },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { placeholder: "\u4F8B / Example: 13,14-16,18", value: scanSkipCh, onChange: (e) => {
                                const val = e.target.value;
                                if (val === "" || /^[0-9,\-]+$/.test(val)) {
                                    setScanSkipCh(val);
                                }
                            } })),
                    (scanType === "BS" || scanType === "BS4K") && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "12px" } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { label: `サブチャンネル形式を使用 / Use Subchannel Style (${scanType}01_0)`, checked: scanUseSubCh, onChange: (e) => setScanUseSubCh(e.currentTarget.checked) }),
                        scanUseSubCh && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", gap: "16px" } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u958B\u59CB\u30B5\u30D6\u30C1\u30E3\u30F3\u30CD\u30EB / Min", style: { flex: 1 } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { value: scanMinSubCh, onChange: (e) => setScanMinSubCh(e.target.value) })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u7D42\u4E86\u30B5\u30D6\u30C1\u30E3\u30F3\u30CD\u30EB / Max", style: { flex: 1 } },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { value: scanMaxSubCh, onChange: (e) => setScanMaxSubCh(e.target.value) })))))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { label: "\u30C1\u30E3\u30F3\u30CD\u30EB\u540D\u306E\u66F8\u5F0F\u3092\u6307\u5B9A / Use Name Format", checked: scanChannelNameFormatEnabled, onChange: (e) => setScanChannelNameFormatEnabled(e.currentTarget.checked) }),
                    scanChannelNameFormatEnabled && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "\u30C1\u30E3\u30F3\u30CD\u30EB\u540D\u306E\u66F8\u5F0F / Channel Name Format", helperText: "{ch}\u3001{ch00}\u3001{subch}\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002 / Supports {ch}, {ch00}, and {subch}." },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { placeholder: "\u4F8B / Example: {ch}, BS{ch00}_{subch}", value: scanChannelNameFormat, onChange: (e) => setScanChannelNameFormat(e.target.value) }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { label: "\u7D50\u679C\u3092\u81EA\u52D5\u9069\u7528 / Auto Apply\uFF08\u518D\u8D77\u52D5\u304C\u5FC5\u8981 / Restart required\uFF09", checked: scanAutoApply, onChange: (e) => setScanAutoApply(e.currentTarget.checked) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { label: "\u8FFD\u52A0\u3057\u305F\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u7121\u52B9\u306B\u3059\u308B / Disable New Channels", checked: scanSetDisabledOnAdd, onChange: (e) => setScanSetDisabledOnAdd(e.currentTarget.checked) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { label: "\u65E2\u5B58\u30C1\u30E3\u30F3\u30CD\u30EB\u3092\u518D\u30B9\u30AD\u30E3\u30F3 / Refresh Existing Channels", checked: scanRefresh, onChange: (e) => setScanRefresh(e.currentTarget.checked) }),
                    scanError && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Callout, { intent: "danger" }, scanError))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => setShowScanDialog(false) }, "\u30AD\u30E3\u30F3\u30BB\u30EB / Cancel"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", onClick: startScan }, "\u30B9\u30AD\u30E3\u30F3\u958B\u59CB / Start Scan")) })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, { isOpen: showScanResultDialog, onClose: () => setShowScanResultDialog(false), title: "\u30B9\u30AD\u30E3\u30F3\u7D50\u679C / Scan Results", style: { width: "600px" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogBody, null, scanStatus && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "16px" } },
                scanStatus.status === "completed" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Callout, { intent: "success", title: "\u30B9\u30AD\u30E3\u30F3\u5B8C\u4E86 / Scan Completed" },
                    "\u30B9\u30AD\u30E3\u30F3\u304C\u6B63\u5E38\u306B\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002 / The scan completed successfully.",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                        "\u65B0\u898F / New: ",
                        scanStatus.newCount,
                        " | \u5F15\u304D\u7D99\u304E / Existing: ",
                        scanStatus.takeoverCount))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: {
                        maxHeight: "300px",
                        overflowY: "auto",
                        border: "1px solid rgba(0,0,0,0.1)",
                        padding: "8px",
                        fontFamily: "monospace",
                        fontSize: "12px",
                        whiteSpace: "pre-wrap",
                        backgroundColor: "rgba(0,0,0,0.02)"
                    } }, scanStatus.scanLog && scanStatus.scanLog.length > 0 ? (scanStatus.scanLog.join("\n")) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "\u30ED\u30B0\u304C\u3042\u308A\u307E\u305B\u3093\u3002 / No logs available."))),
                scanStatus.status === "completed" && scanStatus.result && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Callout, { intent: "primary" }, "\u300C\u9069\u7528\u300D\u3092\u62BC\u3059\u3068\u3001\u73FE\u5728\u306E\u30B9\u30AD\u30E3\u30F3\u7D50\u679C\u3092\u8A2D\u5B9A\u3078\u53CD\u6620\u3057\u307E\u3059\u3002 / Select Apply to copy the scan results into the configuration."))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => setShowScanResultDialog(false) }, "\u9589\u3058\u308B / Close"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", onClick: applyScanResult, disabled: scanStatus?.status !== "completed" || !scanStatus?.result }, "\u30B9\u30AD\u30E3\u30F3\u7D50\u679C\u3092\u9069\u7528 / Apply Results")) }))));
};


/***/ },

/***/ "./src/ui/routes/EPGView.tsx"
/*!***********************************!*\
  !*** ./src/ui/routes/EPGView.tsx ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EPGView: () => (/* binding */ EPGView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/constants */ "./src/ui/modules/constants.ts");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/hooks.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/html-select/htmlSelect.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/tabs/tab.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/tabs/tabs.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useWebStorageState */ "./src/ui/hooks/useWebStorageState.ts");
/* harmony import */ var _components_WatchButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/WatchButton */ "./src/ui/components/WatchButton.tsx");
/* harmony import */ var _components_EPGTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/EPGTable */ "./src/ui/components/EPGTable.tsx");











const EPGView = () => {
    console.debug("routes", "EPG");
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const { navigate, searchParams } = _modules_state__WEBPACK_IMPORTED_MODULE_11__.state;
    const [channelType, setChannelType] = (0,_hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_13__.useLocalStorageState)("EPG.channelType", "GR");
    const [programId, setProgramId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [serviceVersion, setServiceVersion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handler = () => setServiceVersion(v => v + 1);
        _modules_state__WEBPACK_IMPORTED_MODULE_11__.state.on("services", handler);
        return () => { _modules_state__WEBPACK_IMPORTED_MODULE_11__.state.off("services", handler); };
    }, []);
    const terrTypeOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
        const typeServicesMap = new Map();
        for (const s of _modules_state__WEBPACK_IMPORTED_MODULE_11__.state.services) {
            const t = s.channel?.[0]?.type;
            if (t === "GR" || t?.startsWith("NW")) {
                if (!typeServicesMap.has(t))
                    typeServicesMap.set(t, []);
                typeServicesMap.get(t).push(s);
            }
        }
        const options = [];
        for (const t of ["GR", ...[...typeServicesMap.keys()].filter(k => k.startsWith("NW")).sort((a, b) => parseInt(a.slice(2)) - parseInt(b.slice(2)))]) {
            if (!typeServicesMap.has(t))
                continue;
            const area = (0,_modules_constants__WEBPACK_IMPORTED_MODULE_1__.detectAreaFromServices)(typeServicesMap.get(t));
            if (area) {
                options.push({ value: t, label: area });
            }
        }
        return options;
    }, [serviceVersion]);
    const globalServiceId = parseInt(params.globalServiceId, 10) || null;
    const programIdQuery = searchParams.get("programId");
    const typeQuery = searchParams.get("type");
    const dateQuery = searchParams.get("date");
    const timeQuery = searchParams.get("time");
    const now = luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.now();
    const isoDate = /^\d{4}-\d{2}-\d{2}$/.test(dateQuery) ? dateQuery : now.toISODate();
    const startDate = now.startOf("day");
    const endDate = startDate.plus({ days: 7 });
    let date = luxon__WEBPACK_IMPORTED_MODULE_10__.DateTime.fromISO(isoDate);
    if (globalServiceId) {
        date = date.set({ day: now.day });
    }
    if (typeQuery) {
        if (typeQuery === "ALL") {
            if (channelType !== null) {
                setChannelType(null);
                return;
            }
        }
        else if (typeQuery !== channelType) {
            setChannelType(typeQuery);
            return;
        }
    }
    else if (!globalServiceId && !programIdQuery && !timeQuery) {
        let to = `?type=${channelType || "ALL"}&date=${isoDate}`;
        setTimeout(() => navigate(to, { replace: true }), 0);
        return;
    }
    let hasRemovedTempParams = false;
    if (programIdQuery) {
        setProgramId(parseInt(programIdQuery, 10));
        searchParams.delete("programId");
        hasRemovedTempParams = true;
    }
    if (timeQuery) {
        setTime(parseInt(timeQuery, 10));
        searchParams.delete("time");
        hasRemovedTempParams = true;
    }
    if (hasRemovedTempParams) {
        setTimeout(() => navigate(`?${searchParams.toString()}`, { replace: true }), 0);
        return;
    }
    if (!globalServiceId) {
        _modules_ui__WEBPACK_IMPORTED_MODULE_12__.setTitle("EPG");
    }
    const toolbarTabs = [];
    if (date >= startDate && date <= endDate && !globalServiceId) {
        for (let i = 0; i <= 7; i++) {
            const cur = startDate.plus({ days: i });
            const id = `epg-toolbar-tabs-item-${cur.toISODate()}`;
            const d = i === 0 ? cur.toFormat("M/d") : cur.toFormat("d");
            const c = cur.toFormat("ccc");
            toolbarTabs.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Tab, { key: id, id: id, title: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    d,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", { className: `color-dow-${cur.weekday}` }, c)) }));
        }
    }
    else {
        const id = `epg-toolbar-tabs-item-${date.toISODate()}`;
        const title = date.toFormat("yyyy/MM/dd(ccc)");
        toolbarTabs.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Tab, { key: id, id: id, title: title }));
    }
    const showTodayButton = (!globalServiceId && toolbarTabs.length === 1) || (globalServiceId && date.toMillis() !== startDate.toMillis());
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-epg" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Navbar, { className: "toolbar" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Alignment.START },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Navbar.Heading, null, globalServiceId
                    ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Breadcrumbs, { items: [
                            { text: "EPG 番組表", onClick: () => {
                                    let to = `/epg?type=${channelType || ""}`;
                                    if (isoDate) {
                                        to += `&date=${isoDate}`;
                                    }
                                    if (time) {
                                        to += `&time=${time}`;
                                    }
                                    navigate(to);
                                } },
                            { text: "週間" },
                            { text: "放送サービス...", className: "heading-title bp6-skeleton" }
                        ] })
                    : "EPG 番組表")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Alignment.END },
                globalServiceId && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_WatchButton__WEBPACK_IMPORTED_MODULE_14__.WatchButton, { variant: "outlined", popoverPlacement: "bottom-start", globalServiceId: globalServiceId }))),
                !globalServiceId && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    showTodayButton && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "minimal", icon: "reset", text: "\u4ECA\u65E5", onClick: () => {
                            navigate("?", { replace: true });
                        } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Tabs, { id: "epg-toolbar-tabs", selectedTabId: `epg-toolbar-tabs-item-${isoDate}`, onChange: (tabId) => {
                            const to = tabId.replace(/^epg-toolbar-tabs-item-/, "");
                            if (isoDate !== to) {
                                navigate(`?date=${to}&type=${channelType || "ALL"}`);
                            }
                        } }, toolbarTabs),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Navbar.Divider, null),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.HTMLSelect, { className: "bp6-outlined", options: [
                            { value: "ALL", label: "全波" },
                            ...terrTypeOptions,
                            { value: "BS" },
                            { value: "CS" },
                            { value: "SKY" },
                        ], value: channelType || "", onChange: event => {
                            _modules_ui__WEBPACK_IMPORTED_MODULE_12__.blur();
                            const type = event.currentTarget.value;
                            let to = `/epg?type=${type}`;
                            if (isoDate) {
                                to += `&date=${isoDate}`;
                            }
                            navigate(to);
                        } }))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content no-margin" }, globalServiceId
            ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_EPGTable__WEBPACK_IMPORTED_MODULE_15__.EPGTable, { date: date, defaultTime: time, globalServiceId: globalServiceId })
            : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_EPGTable__WEBPACK_IMPORTED_MODULE_15__.EPGTable, { date: date, defaultTime: time, defaultProgramId: programId, channelType: channelType }))));
};


/***/ },

/***/ "./src/ui/routes/HomeView.tsx"
/*!************************************!*\
  !*** ./src/ui/routes/HomeView.tsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeView: () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/dom/lib.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialog.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogBody.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogFooter.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/controls.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/icon/icon.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/section/section.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/spinner/spinner.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/tooltip/tooltip.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/tree/tree.js");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _HomeView_sass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./HomeView.sass */ "./src/ui/routes/HomeView.sass");







const summarizeStreamInfo = (streamInfo) => {
    if (!streamInfo) {
        return "-";
    }
    let packets = 0;
    let drops = 0;
    for (const pid in streamInfo) {
        packets += streamInfo[pid].packet;
        drops += streamInfo[pid].drop;
    }
    return `Dropped Pkts: ${drops} / ${packets}`;
};
const isEmptyStreamInfo = (streamInfo) => {
    if (!streamInfo) {
        return true;
    }
    return Object.keys(streamInfo).length === 0;
};
const StatusSection = ({ status }) => {
    if (!status) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Spinner, { size: 20 });
    }
    const dockerStat = status.process?.env?.DOCKER === "YES" ? " 🐋" : "";
    const items = [
        { label: "Platform", text: `${status.process?.platform} (${status.process?.arch})${dockerStat}` },
        { label: "Node.js Version", text: status.process?.versions?.node },
        { label: "Memory (RSS)", text: `${Math.round(status.process?.memoryUsage?.rss / 1024 / 1024)} MB` },
        { label: "EPG Gathering Network IDs", text: status.epg.gatheringNetworks.map(id => `0x${id.toString(16).toUpperCase()}`).join(", ") || "-" },
        { label: "EPG Stored Events", text: `${status.epg.storedEvents} Events` },
        { label: "TunerDevice Streams", text: `${status.streamCount.tunerDevice}` },
        { label: "TSFilter Streams", text: `${status.streamCount.tsFilter}` },
        { label: "Decoder Streams", text: `${status.streamCount.decoder}` },
        { label: "RPC Connections", text: `${status.rpcCount}` }
    ];
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "status-grid" }, items.map((item, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: i, className: "status-item" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "status-label" }, item.label),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "status-value" }, item.text))))));
};
const ServicesSection = ({ status, services, allowPNA, tsplayEndpoint }) => {
    const [showDTV, setShowDTV] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const [showData, setShowData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [showOthers, setShowOthers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const filteredServices = services.filter(service => {
        if (service.type === 0x01 || service.type === 0xAD) {
            return showDTV;
        }
        else if (service.type === 0xC0) {
            return showData;
        }
        return showOthers;
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "service-filters" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Checkbox, { label: "DTV", checked: showDTV, onChange: () => setShowDTV(!showDTV), inline: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Checkbox, { label: "Data", checked: showData, onChange: () => setShowData(!showData), inline: true }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Checkbox, { label: "Others", checked: showOthers, onChange: () => setShowOthers(!showOthers), inline: true })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "service-grid" }, filteredServices.map((service) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__.Tooltip, { key: service.id, content: react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "service-tooltip" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    "#",
                    service.id),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    "SID: 0x",
                    service.serviceId.toString(16).toUpperCase(),
                    " (",
                    service.serviceId,
                    ")"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    "NID: 0x",
                    service.networkId.toString(16).toUpperCase(),
                    " (",
                    service.networkId,
                    ")"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    "Type: 0x",
                    service.type.toString(16).toUpperCase(),
                    " (",
                    service.type,
                    ")"),
                service.channel?.map((ch, idx) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: idx },
                    "Channel: ",
                    ch.type,
                    " / ",
                    ch.channel)))), placement: "bottom", hoverOpenDelay: 300 },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "service-item" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Link, { className: "service-item-main", to: `/epg/services/${service.id}` },
                    service.hasLogoData && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: "service-logo", src: `/api/services/${service.id}/logo`, alt: "" })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "service-name" }, service.name),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "service-epg-status" }, status?.epg.gatheringNetworks.includes(service.networkId) && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "refresh", className: "color-warning", size: 12 }) ||
                        service.epgReady && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "tick", className: "color-epg-ready", size: 12 }) ||
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "time", className: "bp6-text-muted", size: 12 }))),
                service.type === 0x01 && allowPNA && tsplayEndpoint && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "service-play", onClick: (e) => {
                        e.stopPropagation();
                        window.open(`${tsplayEndpoint}#${location.protocol}//${location.host}/api/services/${service.id}/stream?decode=1`, "_blank", "popup");
                    }, title: "TSPlay (Experimental)" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "play", intent: "primary", size: 12 }))))))))));
};
const StreamInfoTable = ({ userId, tuners, initialInfo }) => {
    let currentInfo = initialInfo;
    for (const tuner of tuners) {
        const user = tuner.users.find(u => u.id === userId);
        if (user?.streamInfo) {
            currentInfo = user.streamInfo;
            break;
        }
    }
    const entries = Object.entries(currentInfo || {});
    if (entries.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.NonIdealState, { icon: "info-sign", description: "No stream info available." });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: "bp6-html-table bp6-html-table-striped bp6-html-table-condensed stream-info-table" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "PID"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "numeric" }, "Packets"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: "numeric" }, "Drops"))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, entries.map(([pid, data]) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: pid },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, pid),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: "numeric" }, data.packet.toLocaleString()),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: `numeric${data.drop > 0 ? " color-danger" : ""}` }, data.drop.toLocaleString())))))));
};
const TunersSection = ({ tuners }) => {
    const [killTarget, setKillTarget] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [tunersEx, setTunersEx] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [streamDetail, setStreamDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const interval = setInterval(async () => {
            if (document.hidden) {
                return;
            }
            try {
                const result = await (await fetch("/api/tuners")).json();
                setTunersEx(result);
            }
            catch (e) {
                console.warn(e);
            }
        }, 1000 * 5);
        return () => clearInterval(interval);
    }, []);
    const mergedTuners = tuners.map(tuner => {
        const tunerEx = tunersEx.find(t => t.index === tuner.index);
        if (tunerEx) {
            return {
                ...tuner,
                users: tuner.users.map(user => {
                    const userEx = tunerEx.users.find(u => u.id === user.id);
                    if (userEx?.streamInfo) {
                        return { ...user, streamInfo: userEx.streamInfo };
                    }
                    return user;
                })
            };
        }
        return tuner;
    });
    const treeNodes = mergedTuners.map((tuner) => {
        const tunerLabel = `#${tuner.index}: ${tuner.name} (${tuner.types.join(", ")})`;
        const hasUsers = tuner.users.length > 0;
        let tunerIcon;
        if (tuner.isFault) {
            tunerIcon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "error", intent: "danger" });
        }
        else if (!tuner.isAvailable) {
            tunerIcon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "disable", className: "bp6-text-muted" });
        }
        else if (tuner.isUsing) {
            tunerIcon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "dot", className: "color-epg-ready" });
        }
        else {
            tunerIcon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "dot", className: "bp6-text-muted" });
        }
        const childNodes = [];
        if (tuner.command || tuner.pid) {
            childNodes.push({
                id: `tuner-${tuner.index}-device`,
                icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "console", className: "bp6-text-muted" }),
                label: (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "tuner-device-info" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, tuner.command || "-"),
                    tuner.pid ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-text-muted" },
                        " (pid=",
                        tuner.pid,
                        ")") : null,
                    tuner.command && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "minimal", icon: "cross", intent: "danger", onClick: (e) => {
                            e.stopPropagation();
                            setKillTarget(tuner.index);
                        }, title: "Kill Tuner Process..." })))),
                hasCaret: false
            });
        }
        for (let i = 0; i < tuner.users.length; i++) {
            const user = tuner.users[i];
            const isMirakurun = /Mirakurun/.test(user.id);
            const userInfoItems = [
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "priority", className: "tuner-user-info-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "sort", className: "bp6-text-muted", size: 12 }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, user.priority)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "user", className: "tuner-user-info-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: isMirakurun ? "cog" : "person", className: "bp6-text-muted", size: 12 }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, user.id)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "ch", className: "tuner-user-info-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "mobile-video", className: "bp6-text-muted", size: 12 }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                        user.streamSetting?.channel?.[0]?.type,
                        " / ",
                        user.streamSetting?.channel?.[0]?.channel)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "sid", className: "tuner-user-info-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "filter", className: "bp6-text-muted", size: 12 }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, user.streamSetting?.serviceId ? `0x${user.streamSetting.serviceId.toString(16).toUpperCase()} (${user.streamSetting.serviceId})` : "-"))
            ];
            if (!isEmptyStreamInfo(user.streamInfo)) {
                userInfoItems.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: "stream", className: "tuner-user-info-item" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.Icon, { icon: "cube", className: "bp6-text-muted", size: 12 }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "stream-info-link", onClick: (e) => {
                            e.stopPropagation();
                            setStreamDetail({ userId: user.id, info: user.streamInfo });
                        } }, summarizeStreamInfo(user.streamInfo))));
            }
            childNodes.push({
                id: `tuner-${tuner.index}-user-${i}`,
                label: react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "tuner-user-info" }, userInfoItems),
                hasCaret: false
            });
        }
        return {
            id: `tuner-${tuner.index}`,
            icon: tunerIcon,
            label: react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "tuner-label" }, tunerLabel),
            isExpanded: hasUsers || !!tuner.command,
            childNodes: childNodes.length > 0 ? childNodes : undefined,
            hasCaret: childNodes.length > 0
        };
    });
    const handleNodeCollapse = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_node) => {
    }, []);
    const handleNodeExpand = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((_node) => {
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        mergedTuners.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Spinner, { size: 20 })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_15__.Tree, { contents: treeNodes, onNodeCollapse: handleNodeCollapse, onNodeExpand: handleNodeExpand, className: "tuner-tree" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, { isOpen: killTarget !== null, onClose: () => setKillTarget(null), title: "Kill Tuner Process", icon: "warning-sign" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogBody, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Do you want to kill this running tuner process?")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { text: "Cancel", onClick: () => setKillTarget(null) }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "danger", text: "Kill", onClick: () => {
                            (async () => {
                                await fetch(`/api/tuners/${killTarget}/process`, { method: "DELETE" });
                            })();
                            setKillTarget(null);
                        } })) })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, { isOpen: !!streamDetail, onClose: () => setStreamDetail(null), title: "Stream Info", icon: "cube", style: { width: 500 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogBody, null, streamDetail && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "bp6-text-muted" }, streamDetail.userId),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(StreamInfoTable, { userId: streamDetail.userId, tuners: tunersEx, initialInfo: streamDetail.info })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { text: "Close", onClick: () => setStreamDetail(null) }) }))));
};
const HomeView = () => {
    console.debug("routes", "HomeView");
    _modules_ui__WEBPACK_IMPORTED_MODULE_17__.setTitle("Home");
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.status);
    const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.services);
    const [tuners, setTuners] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.tuners);
    const [allowPNA, setAllowPNA] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [tsplayEndpoint, setTsplayEndpoint] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        (async () => {
            try {
                if (!_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.serverConfig) {
                    await _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.fetchServerConfig();
                }
                if (_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.serverConfig) {
                    setAllowPNA(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.serverConfig.allowPNA);
                    setTsplayEndpoint(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.serverConfig.tsplayEndpoint);
                }
            }
            catch (e) {
                console.error(e);
            }
        })();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onStatus = () => {
            setStatus({ ..._modules_state__WEBPACK_IMPORTED_MODULE_16__.state.status });
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.on("status", onStatus);
        const onServices = () => {
            setServices([..._modules_state__WEBPACK_IMPORTED_MODULE_16__.state.services]);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.on("services", onServices);
        const onTuners = () => {
            setTuners([..._modules_state__WEBPACK_IMPORTED_MODULE_16__.state.tuners]);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.on("tuners", onTuners);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.off("status", onStatus);
            _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.off("services", onServices);
            _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.off("tuners", onTuners);
        };
    }, []);
    const toolbar = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Navbar, { className: "toolbar" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Alignment.START },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Navbar.Heading, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, { items: [
                        {
                            text: "Home"
                        }
                    ] })))));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-home-view" },
        toolbar,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "home-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.Section, { className: "home-section", title: "Status", icon: "dashboard", compact: true },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "home-section-content" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(StatusSection, { status: status }))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.Section, { className: "home-section", title: `Services${services.length > 0 ? ` (${services.length})` : ""}`, icon: "globe-network", compact: true },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "home-section-content" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ServicesSection, { status: status, services: services, allowPNA: allowPNA, tsplayEndpoint: tsplayEndpoint }))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.Section, { className: "home-section", title: `Tuners${tuners.length > 0 ? ` (${tuners.length})` : ""}`, icon: "antenna", compact: true },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "home-section-content" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(TunersSection, { tuners: tuners })))))));
};


/***/ },

/***/ "./src/ui/routes/JobsView.tsx"
/*!************************************!*\
  !*** ./src/ui/routes/JobsView.tsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobsView: () => (/* binding */ JobsView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialog.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogBody.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogFooter.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/icon/icon.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/section/section.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/spinner/spinner.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/tooltip/tooltip.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var _hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../hooks/useWebStorageState */ "./src/ui/hooks/useWebStorageState.ts");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/common */ "./src/ui/modules/common.ts");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _JobsView_sass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./JobsView.sass */ "./src/ui/routes/JobsView.sass");









const JobsView = () => {
    console.debug("routes", "JobsView");
    const [nonIdealState, setNonIdealState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [reload, setReload] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const [jobScheduleIsOpen, setJobScheduleIsOpen] = (0,_hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_14__.useLocalStorageState)("JobsView.jobScheduleIsOpen", true);
    const [queuedIsOpen, setQueuedIsOpen] = (0,_hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_14__.useLocalStorageState)("JobsView.queuedIsOpen", true);
    const [standbyIsOpen, setStandbyIsOpen] = (0,_hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_14__.useLocalStorageState)("JobsView.standbyIsOpen", true);
    const [runningIsOpen, setRunningIsOpen] = (0,_hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_14__.useLocalStorageState)("JobsView.runningIsOpen", true);
    const [finishedIsOpen, setFinishedIsOpen] = (0,_hooks_useWebStorageState__WEBPACK_IMPORTED_MODULE_14__.useLocalStorageState)("JobsView.finishedIsOpen", true);
    const [jobScheduleItems, setJobScheduleItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [queuedJobItems, setQueuedJobItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [standbyJobItems, setStandbyJobItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [runningJobItems, setRunningJobItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [finishedJobItems, setFinishedJobItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ジョブ");
    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [dialogType, setDialogType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [selectedScheduleKey, setSelectedScheduleKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [selectedJobId, setSelectedJobId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [isActionLoading, setIsActionLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [actionError, setActionError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const isLoading = !_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.jobs && !_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.jobSchedules;
    _modules_ui__WEBPACK_IMPORTED_MODULE_17__.setTitle(title, isLoading);
    const runJobSchedule = async (key) => {
        try {
            const res = await fetch(`/api/job-schedules/${encodeURIComponent(key)}/run`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) {
                const errorData = await res.json();
                setActionError(errorData.reason || `Error: ${res.status}`);
                return false;
            }
            await _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.fetchJobs();
            await _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.fetchJobSchedules();
            setActionError(null);
            return true;
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            setActionError(`リクエスト失敗: ${message}`);
            return false;
        }
    };
    const abortJob = async (jobId) => {
        try {
            const res = await fetch(`/api/jobs/${encodeURIComponent(jobId)}/abort`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) {
                const errorData = await res.json();
                setActionError(errorData.reason || `Error: ${res.status}`);
                return false;
            }
            await _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.fetchJobs();
            setActionError(null);
            return true;
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            setActionError(`リクエスト失敗: ${message}`);
            return false;
        }
    };
    const rerunJob = async (jobId) => {
        try {
            const res = await fetch(`/api/jobs/${encodeURIComponent(jobId)}/rerun`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
            });
            if (!res.ok) {
                const errorData = await res.json();
                setActionError(errorData.reason || `Error: ${res.status}`);
                return false;
            }
            await _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.fetchJobs();
            setActionError(null);
            return true;
        }
        catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            setActionError(`リクエスト失敗: ${message}`);
            return false;
        }
    };
    const handleConfirm = async () => {
        setIsActionLoading(true);
        let success = false;
        try {
            if (dialogType === "run_schedule" && selectedScheduleKey) {
                success = await runJobSchedule(selectedScheduleKey);
            }
            else if (dialogType === "abort_job" && selectedJobId) {
                success = await abortJob(selectedJobId);
            }
            else if (dialogType === "rerun_job" && selectedJobId) {
                success = await rerunJob(selectedJobId);
            }
            if (success) {
                setIsDialogOpen(false);
                setDialogType(null);
                setSelectedScheduleKey(null);
                setSelectedJobId(null);
            }
        }
        finally {
            setIsActionLoading(false);
        }
    };
    const openDialog = (type, key) => {
        setActionError(null);
        setDialogType(type);
        if (type === "run_schedule" && key) {
            setSelectedScheduleKey(key);
        }
        else if (type !== "run_schedule" && key) {
            setSelectedJobId(key);
        }
        setIsDialogOpen(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onUpdated = () => {
            setReload(Date.now());
        };
        const onUpdatedLazy = new _modules_common__WEBPACK_IMPORTED_MODULE_15__.LazyCaller(0, 500, onUpdated);
        _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.on("jobs", onUpdatedLazy.caller);
        _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.on("jobSchedules", onUpdatedLazy.caller);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.off("jobs", onUpdatedLazy.caller);
            _modules_state__WEBPACK_IMPORTED_MODULE_16__.state.off("jobSchedules", onUpdatedLazy.caller);
            onUpdatedLazy.destroy();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isLoading) {
            setTitle("ジョブ...");
            setNonIdealState({
                icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.Spinner, null),
                title: "ロード中",
                description: "ジョブを読み込んでいます..."
            });
            return;
        }
        setJobScheduleItems(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.jobSchedules.map(jobSchedule => createJobScheduleItemElement(jobSchedule)));
        setQueuedJobItems(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.jobs.filter(job => job.status === "queued").map(job => createJobItemElement(job)));
        setStandbyJobItems(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.jobs.filter(job => job.status === "standby").map(job => createJobItemElement(job)));
        setRunningJobItems(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.jobs.filter(job => job.status === "running").map(job => createJobItemElement(job)));
        setFinishedJobItems(_modules_state__WEBPACK_IMPORTED_MODULE_16__.state.jobs.filter(job => job.status === "finished").map(job => createJobItemElement(job)));
        setNonIdealState(null);
        return () => {
            setNonIdealState(null);
        };
    }, [reload]);
    const createJobScheduleItemElement = (jobSchedule) => {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar, { key: jobSchedule.key },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", { className: "bp6-code" }, jobSchedule.schedule),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, jobSchedule.job.name)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.END },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "minimal", intent: "warning", icon: "play", text: "\u5B9F\u884C...", onClick: () => openDialog("run_schedule", jobSchedule.key) }))));
    };
    const createJobItemElement = (job) => {
        const statusLabel = getJobStatusLabel(job);
        const statusIcon = getJobStatusIcon(job);
        const statusIntent = getJobStatusIntent(job);
        const detailLines = [
            `ID: ${job.id}`,
            `Key: ${job.key}`
        ];
        if (job.retryMax) {
            detailLines.push(`リトライ: ${job.retryCount}/${job.retryMax}`);
        }
        if (job.startedAt) {
            detailLines.push(`開始: ${luxon__WEBPACK_IMPORTED_MODULE_13__.DateTime.fromMillis(job.startedAt).toFormat("yyyy/MM/dd HH:mm:ss")}`);
        }
        if (job.finishedAt) {
            detailLines.push(`終了: ${luxon__WEBPACK_IMPORTED_MODULE_13__.DateTime.fromMillis(job.finishedAt).toFormat("yyyy/MM/dd HH:mm:ss")}`);
        }
        if (job.duration) {
            const durationSec = Math.round(job.duration / 1000);
            detailLines.push(`実行時間: ${durationSec}秒`);
        }
        if (job.hasFailed && job.error) {
            detailLines.push(`エラー: ${job.error}`);
        }
        if (job.hasAborted) {
            detailLines.push("状態: 中止済み");
        }
        if (job.hasSkipped) {
            detailLines.push("状態: スキップ");
        }
        const detailTooltip = detailLines.join("\n");
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar, { key: job.id },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.Tooltip, { content: detailTooltip, position: "right" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-text-muted", style: { cursor: "help" }, title: "\u8A73\u7D30" }, job.id.split(".").slice(-1)[0])),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { title: job.key, style: { marginLeft: "0.5rem" } }, job.name)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.END },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-text-muted", style: { marginLeft: "0.5rem" } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Icon, { icon: statusIcon, intent: statusIntent }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { marginLeft: "0.35rem" } }, statusLabel)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.Tooltip, { content: luxon__WEBPACK_IMPORTED_MODULE_13__.DateTime.fromMillis(job.updatedAt).toFormat("yyyy/MM/dd HH:mm:ss") },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "bp6-text-muted" }, luxon__WEBPACK_IMPORTED_MODULE_13__.DateTime.fromMillis(job.updatedAt).toRelative())),
                job.status !== "finished" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, small: true, icon: "stop", intent: "danger", onClick: () => openDialog("abort_job", job.id), title: "\u30B8\u30E7\u30D6\u3092\u4E2D\u6B62\u30EA\u30AF\u30A8\u30B9\u30C8", disabled: job.isAborting })),
                job.status === "finished" && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, small: true, icon: "refresh", intent: "primary", onClick: () => openDialog("rerun_job", job.id), title: "\u30B8\u30E7\u30D6\u3092\u518D\u5B9F\u884C", style: { visibility: job.isRerunnable ? undefined : "hidden" } })))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-jobs-view" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar, { className: "toolbar" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Heading, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, { items: [
                            {
                                text: "ジョブ"
                            }
                        ] }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.END })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            !nonIdealState && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Section, { title: "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB", icon: "time", collapsible: true, collapseProps: {
                        isOpen: jobScheduleIsOpen,
                        onToggle: () => setJobScheduleIsOpen(!jobScheduleIsOpen),
                    }, compact: true }, jobScheduleItems.map((item) => item)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Section, { title: "\u30B8\u30E7\u30D6", icon: "ninja", collapsible: true, compact: true },
                    queuedJobItems.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Section, { title: `queued (${queuedJobItems.length})`, icon: "time", collapsible: true, collapseProps: {
                            isOpen: queuedIsOpen,
                            onToggle: () => setQueuedIsOpen(!queuedIsOpen),
                        }, compact: true }, queuedJobItems.map((item) => item))),
                    standbyJobItems.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Section, { title: `standby (${standbyJobItems.length})`, icon: "stopwatch", collapsible: true, collapseProps: {
                            isOpen: standbyIsOpen,
                            onToggle: () => setStandbyIsOpen(!standbyIsOpen),
                        }, compact: true }, standbyJobItems.map((item) => item))),
                    runningJobItems.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Section, { title: `running (${runningJobItems.length})`, icon: "play", collapsible: true, collapseProps: {
                            isOpen: runningIsOpen,
                            onToggle: () => setRunningIsOpen(!runningIsOpen),
                        }, compact: true }, runningJobItems.map((item) => item))),
                    finishedJobItems.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.Section, { title: `finished (${finishedJobItems.length})`, icon: "tick", collapsible: true, collapseProps: {
                            isOpen: finishedIsOpen,
                            onToggle: () => setFinishedIsOpen(!finishedIsOpen),
                        }, compact: true }, finishedJobItems.map((item) => item))))),
            nonIdealState && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.NonIdealState, { ...nonIdealState }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Dialog, { isOpen: isDialogOpen, onClose: () => setIsDialogOpen(false), title: dialogType === "run_schedule" ? "スケジュール実行" :
                dialogType === "abort_job" ? "ジョブ中止" :
                    dialogType === "rerun_job" ? "ジョブ再実行" :
                        "確認", canEscapeKeyClose: !isActionLoading },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.DialogBody, null,
                actionError && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "bp6-text-intent-danger", style: { marginBottom: "16px" } }, actionError)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                    dialogType === "run_schedule" && "このスケジュールのジョブを実行してもよろしいですか？",
                    dialogType === "abort_job" && "このジョブの中止をリクエストしてもよろしいですか？",
                    dialogType === "rerun_job" && "このジョブを再実行してもよろしいですか？")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { text: "\u30AD\u30E3\u30F3\u30BB\u30EB", onClick: () => setIsDialogOpen(false), disabled: isActionLoading }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { text: "\u5B9F\u884C", intent: "primary", onClick: handleConfirm, loading: isActionLoading })) }))));
};
function getJobStatusLabel(job) {
    if (job.status === "queued") {
        return "Queued...";
    }
    if (job.status === "standby") {
        return "Standby...";
    }
    if (job.status === "running") {
        return "Running...";
    }
    if (job.hasFailed) {
        return `Failed${job.duration ? ` (${Math.round(job.duration / 1000)}s)` : ""}`;
    }
    if (job.hasAborted) {
        return "Aborted";
    }
    if (job.hasSkipped) {
        return "Skipped";
    }
    return `Finished${job.duration ? ` (${Math.round(job.duration / 1000)}s)` : ""}`;
}
function getJobStatusIcon(job) {
    if (job.status === "queued")
        return "time";
    if (job.status === "standby")
        return "stopwatch";
    if (job.status === "running")
        return "play";
    if (job.hasFailed)
        return "error";
    if (job.hasAborted)
        return "cross";
    if (job.hasSkipped)
        return "disable";
    return "tick";
}
function getJobStatusIntent(job) {
    if (job.status === "running")
        return "primary";
    if (job.status === "standby")
        return "warning";
    if (job.hasFailed)
        return "danger";
    if (job.hasAborted)
        return "warning";
    return "success";
}


/***/ },

/***/ "./src/ui/routes/LogsView.tsx"
/*!************************************!*\
  !*** ./src/ui/routes/LogsView.tsx ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogsView: () => (/* binding */ LogsView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _LogsView_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogsView.sass */ "./src/ui/routes/LogsView.sass");





let _itemId = 0;
let logListCache = [];
const LogsView = () => {
    console.debug("routes", "LogsView");
    _modules_ui__WEBPACK_IMPORTED_MODULE_2__.setTitle("ログ");
    const [logList, setLogList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const latestRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onLogs = (lines, unshift) => {
        const newList = [];
        for (const line of lines) {
            const parsed = line.match(/^[0-9.T:+-]+ ([a-z]+): /);
            const level = parsed ? parsed[1] : "other";
            newList.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: `logs-list-item${_itemId}`, className: `level-${level}` }, line));
            ++_itemId;
        }
        if (unshift === true) {
            logListCache = [...newList, ...logListCache].slice(-500);
        }
        else {
            logListCache = [...logListCache, ...newList].slice(-500);
        }
        setLogList(logListCache);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const rpc = _modules_state__WEBPACK_IMPORTED_MODULE_1__.state._rpc;
        const join = () => {
            rpc.call("join", { rooms: ["logs"] });
        };
        rpc.on("connected", join);
        if (rpc.isConnected()) {
            join();
        }
        (async () => {
            const lines = await (await fetch("/api/log")).text();
            onLogs(lines.trim().split("\n"), true);
        })();
        const onLogsEvent = (lines, unshift) => {
            onLogs(lines, unshift);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_1__.state.on("logs", onLogsEvent);
        return () => {
            rpc.off("connected", join);
            if (rpc.isConnected()) {
                rpc.call("leave", { rooms: ["logs"] });
            }
            _modules_state__WEBPACK_IMPORTED_MODULE_1__.state.off("logs", onLogsEvent);
            logListCache = [];
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        latestRef.current?.scrollIntoView();
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: "route-logs-view" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "logs" },
            logList,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "latest", ref: latestRef }))));
};


/***/ },

/***/ "./src/ui/routes/ProgramView.tsx"
/*!***************************************!*\
  !*** ./src/ui/routes/ProgramView.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgramView: () => (/* binding */ ProgramView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/development/lib/hooks.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/es6/luxon.mjs");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/common */ "./src/ui/modules/common.ts");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _modules_regexp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../modules/regexp */ "./src/ui/modules/regexp.ts");
/* harmony import */ var _modules_at__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modules/at */ "./src/ui/modules/at.ts");
/* harmony import */ var _components_ProgramTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ProgramTitle */ "./src/ui/components/ProgramTitle.tsx");
/* harmony import */ var _components_WatchButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/WatchButton */ "./src/ui/components/WatchButton.tsx");
/* harmony import */ var _components_DateTimeRange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/DateTimeRange */ "./src/ui/components/DateTimeRange.tsx");
/* harmony import */ var _components_ServiceLink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ServiceLink */ "./src/ui/components/ServiceLink.tsx");
/* harmony import */ var _components_ProgramGenres__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/ProgramGenres */ "./src/ui/components/ProgramGenres.tsx");
/* harmony import */ var _components_ProgramAVInfo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/ProgramAVInfo */ "./src/ui/components/ProgramAVInfo.tsx");
/* harmony import */ var _components_ProgramRelatedLinks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ProgramRelatedLinks */ "./src/ui/components/ProgramRelatedLinks.tsx");
/* harmony import */ var _ProgramView_sass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ProgramView.sass */ "./src/ui/routes/ProgramView.sass");


















const ProgramView = () => {
    console.debug("routes", "ProgramView");
    const [reload, setReload] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Date.now());
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [program, setProgram] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { navigate } = _modules_state__WEBPACK_IMPORTED_MODULE_9__.state;
    const params = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useParams)();
    const programId = parseInt(params.programId, 10);
    const now = Date.now();
    const startTime = program?.startAt;
    const endTime = program ? program.startAt + program.duration : null;
    const isLoading = program === null && error === null;
    const isOnAir = program && startTime <= now && endTime >= now;
    const date = program && luxon__WEBPACK_IMPORTED_MODULE_7__.DateTime.fromMillis(program.startAt).set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    const time = program && luxon__WEBPACK_IMPORTED_MODULE_7__.DateTime.fromMillis(program.startAt).diff(date).toMillis();
    const timeForServiceLink = (time > (1000 * 60 * 60 * 24 - 1000 * 60 * 5)) ? 1 : time;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onPrograms = (programs) => {
            const _program = programs.find(p => p.id === programId);
            if (!_program) {
                setError({
                    code: 404,
                    reason: "番組が見つかりません",
                });
                setProgram(null);
                return;
            }
            setError(null);
            setProgram(_program);
        };
        _modules_state__WEBPACK_IMPORTED_MODULE_9__.state.on("programs", onPrograms);
        _modules_state__WEBPACK_IMPORTED_MODULE_9__.state.subscribePrograms(true);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_9__.state.off("programs", onPrograms);
        };
    }, [programId]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!program) {
            _modules_ui__WEBPACK_IMPORTED_MODULE_10__.setTitle("番組詳細...", true);
            return;
        }
        _modules_ui__WEBPACK_IMPORTED_MODULE_10__.setTitle(program.name);
        const schedules = [];
        if (now <= startTime) {
            schedules.push((0,_modules_at__WEBPACK_IMPORTED_MODULE_12__.setSchedule)(startTime, () => setReload(Date.now())));
        }
        if (now <= endTime) {
            schedules.push((0,_modules_at__WEBPACK_IMPORTED_MODULE_12__.setSchedule)(endTime, () => setReload(Date.now())));
        }
        console.debug("ProgramView", program);
        return () => {
            for (const id of schedules) {
                (0,_modules_at__WEBPACK_IMPORTED_MODULE_12__.clearSchedule)(id);
            }
        };
    }, [program]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-program-view" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Navbar, { className: "toolbar" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Alignment.START },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Navbar.Heading, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, { items: [
                            {
                                text: "EPG",
                                onClick: () => {
                                    navigate(`/epg?date=${date.toISODate()}&time=${time}`);
                                }
                            },
                            {
                                className: isLoading ? "bp6-skeleton" : "",
                                text: isLoading ? "Loading................................." : (error ? "エラー" : (program ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProgramTitle__WEBPACK_IMPORTED_MODULE_13__.ProgramTitle, { program: program }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)))
                            }
                        ] }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Alignment.END },
                isLoading && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Button, { className: "bp6-skeleton", text: "Loading............................" })),
                program && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, isOnAir && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_WatchButton__WEBPACK_IMPORTED_MODULE_14__.WatchButton, { variant: "outlined", popoverPlacement: "bottom-end", globalServiceId: (0,_modules_common__WEBPACK_IMPORTED_MODULE_8__.getGlobalServiceId)(program.networkId, program.serviceId) })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: "outlined", intent: "primary", icon: "timeline-events", text: "\u756A\u7D44\u8868\u3067\u8868\u793A", onClick: () => {
                        let to = "/epg";
                        if (program) {
                            to += `?date=${date.toISODate()}`;
                            if (time) {
                                to += `&time=${time}`;
                            }
                            to += `&programId=${program.id}`;
                        }
                        navigate(to);
                    } }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            program && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "flex" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ServiceLink__WEBPACK_IMPORTED_MODULE_16__.ServiceLink, { globalId: (0,_modules_common__WEBPACK_IMPORTED_MODULE_8__.getGlobalServiceId)(program.networkId, program.serviceId), date: date.toISODate(), time: timeForServiceLink }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_DateTimeRange__WEBPACK_IMPORTED_MODULE_15__.DateTimeRange, { start: program.startAt, end: program.startAt + program.duration })),
                program.description && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "description" }, program.description.replace(_modules_regexp__WEBPACK_IMPORTED_MODULE_11__.enclosedAttributeUnicode, ""))),
                program.extended && Object.entries(program.extended).map(([head, body]) => {
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "extended", key: head },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, head),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { dangerouslySetInnerHTML: { __html: _modules_ui__WEBPACK_IMPORTED_MODULE_10__.autoLink(body.trim()) } }));
                }),
                program.genres?.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProgramGenres__WEBPACK_IMPORTED_MODULE_17__.ProgramGenres, { genres: program.genres })),
                (program.video || program.audios) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProgramAVInfo__WEBPACK_IMPORTED_MODULE_18__.ProgramAVInfo, { video: program.video, audios: program.audios })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "meta" },
                    "Program ID: ",
                    program.id,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                    "event_id: ",
                    (0,_modules_common__WEBPACK_IMPORTED_MODULE_8__.getIdWithHex)(program.eventId),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                    "SID: ",
                    (0,_modules_common__WEBPACK_IMPORTED_MODULE_8__.getIdWithHex)(program.serviceId),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null),
                    "NID: ",
                    (0,_modules_common__WEBPACK_IMPORTED_MODULE_8__.getIdWithHex)(program.networkId)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProgramRelatedLinks__WEBPACK_IMPORTED_MODULE_19__.ProgramRelatedLinks, { program: program })),
            error && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.NonIdealState, { icon: "warning-sign", title: `${error.code} Error`, description: error.reason || "エラーが発生しました" })))));
};


/***/ },

/***/ "./src/ui/routes/SearchView.tsx"
/*!**************************************!*\
  !*** ./src/ui/routes/SearchView.tsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchView: () => (/* binding */ SearchView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/card/card.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/spinner/spinner.js");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/common */ "./src/ui/modules/common.ts");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _components_ProgramCardBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ProgramCardBase */ "./src/ui/components/ProgramCardBase.tsx");
/* harmony import */ var _SearchView_sass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SearchView.sass */ "./src/ui/routes/SearchView.sass");








const SearchView = () => {
    console.debug("routes", "SearchView");
    const [nonIdealState, setNonIdealState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [programs, setPrograms] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("検索");
    const { navigate, searchParams } = _modules_state__WEBPACK_IMPORTED_MODULE_8__.state;
    const query = searchParams.get("q") || null;
    const isLoading = query && !programs;
    _modules_ui__WEBPACK_IMPORTED_MODULE_9__.setTitle(title, isLoading);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const onPrograms = () => {
            const _programs = _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.programs.filter(program => {
                if (program.relatedItems?.filter(item => item.type === "shared").length === 1) {
                    return false;
                }
                return true;
            });
            setPrograms(_programs);
        };
        const onProgramsLazy = new _modules_common__WEBPACK_IMPORTED_MODULE_7__.LazyCaller(0, 1000, onPrograms);
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.on("programs", onProgramsLazy.caller);
        _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.subscribePrograms(true);
        return () => {
            _modules_state__WEBPACK_IMPORTED_MODULE_8__.state.off("programs", onProgramsLazy.caller);
            onProgramsLazy.destroy();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (!query) {
            setTitle("検索");
            setResult([]);
            setNonIdealState({
                icon: "search",
                title: "検索キーワードを入力してください",
                description: "番組名、番組説明、サービス名、ジャンルなどで検索できます"
            });
            return;
        }
        if (!programs) {
            setTitle("検索...");
            setNonIdealState({
                icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.Spinner, null),
                title: "ロード中",
                description: "番組一覧を読み込んでいます..."
            });
            return;
        }
        const q = (0,_modules_common__WEBPACK_IMPORTED_MODULE_7__.normalizeText)(query.trim()).toLowerCase();
        const filteredPrograms = [];
        for (const p of programs) {
            if ((p.name && (0,_modules_common__WEBPACK_IMPORTED_MODULE_7__.textMatch)(p.name, q)) ||
                (p.description && (0,_modules_common__WEBPACK_IMPORTED_MODULE_7__.textMatch)(p.description, q)) ||
                (p.extended && (0,_modules_common__WEBPACK_IMPORTED_MODULE_7__.textMatch)(Object.entries(p.extended).flat().join(" "), q))) {
                filteredPrograms.push(p);
                continue;
            }
        }
        filteredPrograms.sort((a, b) => {
            return a.startAt - b.startAt;
        });
        const _result = filteredPrograms.map(createResultItem);
        setTitle(`検索 "${query}" (${_result.length}件)`);
        setResult(_result);
        setNonIdealState(null);
        return () => {
            setNonIdealState(null);
        };
    }, [programs, query]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-search-view" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Navbar, { className: "toolbar" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Navbar.Heading, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, { items: [
                            {
                                text: "EPG",
                                onClick: () => navigate("/epg")
                            },
                            {
                                text: "検索",
                                className: `heading-title ${isLoading ? "bp6-skeleton" : ""}`.trim(),
                            }
                        ] }))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.END })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            !nonIdealState && result,
            nonIdealState && react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.NonIdealState, { ...nonIdealState })))));
};
function createResultItem(program) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Card, { key: program.id, elevation: 0 },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProgramCardBase__WEBPACK_IMPORTED_MODULE_10__.ProgramCardBase, { program: program, noAVInfo: true, noActions: true })));
}


/***/ },

/***/ "./src/ui/routes/ServerConfigView.tsx"
/*!********************************************!*\
  !*** ./src/ui/routes/ServerConfigView.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerConfigView: () => (/* binding */ ServerConfigView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/intent.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialog.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogBody.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogFooter.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/controls.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/formGroup.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/inputGroup.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/numericInput.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/textArea.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/html-select/htmlSelect.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/section/section.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/spinner/spinner.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ip_num__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ip-num */ "./node_modules/ip-num/dist/src/index.js");
/* harmony import */ var ip_num__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ip_num__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../modules/state */ "./src/ui/modules/state.ts");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _ServerConfigView_sass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ServerConfigView.sass */ "./src/ui/routes/ServerConfigView.sass");








const configAPI = "/api/config/server";
const multilineConfigValue = (values) => (values ?? []).join("\n");
const parseMultilineConfigValue = (value) => {
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
        return null;
    }
    return trimmedValue.split("\n").map(line => line.trim());
};
const ServerConfigView = () => {
    console.debug("routes", "ServerConfigView");
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [showSaveDialog, setShowSaveDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    _modules_ui__WEBPACK_IMPORTED_MODULE_21__.setTitle("サーバー設定", isLoading);
    const [allowIPv4CidrRangesText, setAllowIPv4CidrRangesText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [allowIPv6CidrRangesText, setAllowIPv6CidrRangesText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [allowOriginsText, setAllowOriginsText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const syncMultilineConfigValues = (config) => {
        setAllowIPv4CidrRangesText(multilineConfigValue(config.allowIPv4CidrRanges));
        setAllowIPv6CidrRangesText(multilineConfigValue(config.allowIPv6CidrRanges));
        setAllowOriginsText(multilineConfigValue(config.allowOrigins));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (saved === true) {
            setTimeout(() => {
            }, 500);
            setSaved(false);
            return;
        }
        (async () => {
            try {
                const res = await (await fetch(configAPI)).json();
                console.log("ServerConfigView", "GET", configAPI, "->", res);
                setEditing({ ...res });
                setCurrent({ ...res });
                syncMultilineConfigValues(res);
                setIsLoading(false);
            }
            catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        })();
    }, [saved]);
    const docker = _modules_state__WEBPACK_IMPORTED_MODULE_20__.state.status?.process?.env?.DOCKER === "YES";
    const ipv6Ready = docker === false || _modules_state__WEBPACK_IMPORTED_MODULE_20__.state.status?.process?.env?.DOCKER_NETWORK === "host";
    let invalid = false;
    let invalidEpgGatheringJobSchedule = false;
    let invalidAllowIPv4CidrRanges = false;
    let invalidAllowIPv6CidrRanges = false;
    if (editing) {
        if (editing.epgGatheringJobSchedule) {
            if (!isValidCronExpression(editing.epgGatheringJobSchedule)) {
                invalid = true;
                invalidEpgGatheringJobSchedule = true;
            }
        }
        if (editing.allowIPv4CidrRanges) {
            for (const range of editing.allowIPv4CidrRanges) {
                const [valid] = ip_num__WEBPACK_IMPORTED_MODULE_19__.Validator.isValidIPv4CidrRange(range);
                if (!valid) {
                    invalid = true;
                    invalidAllowIPv4CidrRanges = true;
                    break;
                }
            }
        }
        if (!invalid && editing.allowIPv6CidrRanges) {
            for (const range of editing.allowIPv6CidrRanges) {
                const [valid] = ip_num__WEBPACK_IMPORTED_MODULE_19__.Validator.isValidIPv6CidrRange(range);
                if (!valid) {
                    invalid = true;
                    invalidAllowIPv6CidrRanges = true;
                    break;
                }
            }
        }
    }
    const hasChanges = editing !== null && current !== null && !fast_deep_equal__WEBPACK_IMPORTED_MODULE_18___default()(editing, current);
    const handleCancel = () => {
        if (current) {
            setEditing({ ...current });
            syncMultilineConfigValues(current);
        }
    };
    const handleSave = async () => {
        if (!editing) {
            return;
        }
        setShowSaveDialog(false);
        try {
            const payload = { ...editing };
            for (const key of Object.keys(payload)) {
                if (payload[key] === null) {
                    delete payload[key];
                }
            }
            console.log("ServerConfigView", "PUT", configAPI, "<-", payload);
            await fetch(configAPI, {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify(payload)
            });
            setSaved(true);
        }
        catch (err) {
            console.error(err);
        }
    };
    const toolbar = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__.Navbar, { className: "toolbar" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__.Navbar.Heading, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, { items: [
                        {
                            text: "サーバー設定"
                        }
                    ] }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_14__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.END },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, intent: "danger", icon: "undo", text: "Cancel", disabled: !hasChanges, onClick: handleCancel }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", icon: "saved", text: "Save", disabled: !hasChanges || invalid, onClick: () => setShowSaveDialog(true) }))));
    if (isLoading || !editing) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-server-config-view" },
            toolbar,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_15__.NonIdealState, { icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_17__.Spinner, null), title: "\u30ED\u30FC\u30C9\u4E2D", description: "\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059..." })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-server-config-view" },
        toolbar,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_16__.Section, { className: "config-section", title: "Basic Config", icon: "settings", compact: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "config-form-grid" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "Log Level", labelFor: "log-level", helperText: "\u30ED\u30B0\u51FA\u529B\u8A2D\u5B9A\u3002\u901A\u5E38\u904B\u7528\u3067\u306F WARN \u3092\u63A8\u5968\u3057\u307E\u3059\u3002\u554F\u984C\u304C\u767A\u751F\u3057\u305F\u6642\u306B\u5909\u66F4\u3057\u3001\u30ED\u30B0\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.HTMLSelect, { id: "log-level", value: editing.logLevel ?? 2, onChange: (e) => {
                                setEditing({ ...editing, logLevel: parseInt(e.target.value, 10) });
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "-1" }, "FATAL (-1)"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "0" }, "ERROR (0)"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "1" }, "WARN (1)"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "2" }, "INFO (2)"),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "3" }, "DEBUG (3)"))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "Hostname", labelFor: "hostname", helperText: "Web UI \u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u305F\u3081\u306E\u30DB\u30B9\u30C8\u540D\u3092\u8A2D\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4EFB\u610F\u306E\u30DB\u30B9\u30C8\u540D\u30FB\u30C9\u30E1\u30A4\u30F3\u4E0A\u306E\u30DA\u30FC\u30B8\u304B\u3089\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u7981\u6B62\u3057\u3066\u3044\u307E\u3059\u3002 (DNS Rebinding / CSRF \u653B\u6483\u5BFE\u7B56)" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { id: "hostname", value: editing.hostname ?? "", onChange: (e) => {
                                setEditing({ ...editing, hostname: e.target.value });
                            } })),
                    ipv6Ready && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { className: "config-switch-group", labelFor: "disable-ipv6", helperText: "IPv6 \u306E\u7121\u52B9\u5316 (\u3088\u304F\u5206\u304B\u3089\u306A\u3044\u5834\u5408\u306F ON)" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { id: "disable-ipv6", checked: editing.disableIPv6 ?? false, label: "Disable IPv6", onChange: (e) => {
                                setEditing({ ...editing, disableIPv6: e.currentTarget.checked });
                            } }))))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_16__.Section, { className: "config-section", title: "Advanced Config", icon: "wrench", compact: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "config-form-grid" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "Job Max Running", labelFor: "job-max-running", helperText: "\u540C\u6642\u5B9F\u884C\u3067\u304D\u308B\u6700\u5927\u30B8\u30E7\u30D6\u6570" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.NumericInput, { id: "job-max-running", value: editing.jobMaxRunning ?? "", placeholder: "100", min: 1, max: 100, onValueChange: (value, _) => {
                                if (value === null) {
                                    delete editing.jobMaxRunning;
                                }
                                else {
                                    editing.jobMaxRunning = value;
                                }
                                setEditing({ ...editing });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "Job Max Standby", labelFor: "job-max-standby", helperText: "\u540C\u6642\u5B9F\u884C\u3067\u304D\u308B\u6700\u5927\u30B8\u30E7\u30D6\u6E96\u5099\u6570" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.NumericInput, { id: "job-max-standby", value: editing.jobMaxStandby ?? "", placeholder: "100", min: 1, max: 100, onValueChange: (value, _) => {
                                if (value === null) {
                                    delete editing.jobMaxStandby;
                                }
                                else {
                                    editing.jobMaxStandby = value;
                                }
                                setEditing({ ...editing });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "EPG Gathering Job Schedule (Cron)", labelFor: "epg-gathering-schedule", helperText: invalidEpgGatheringJobSchedule ? "Cron expression is invalid." : "EPG 収集スケジュール (cron 風形式)", intent: invalidEpgGatheringJobSchedule ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.DANGER : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.NONE },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { id: "epg-gathering-schedule", value: editing.epgGatheringJobSchedule ?? "", placeholder: "20,50 * * * *", onChange: (e) => {
                                editing.epgGatheringJobSchedule = e.target.value;
                                setEditing({ ...editing });
                            }, intent: invalidEpgGatheringJobSchedule ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.DANGER : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.NONE })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "Max Buffer Bytes Before Ready (MB)", labelFor: "max-buffer-bytes", helperText: "\u756A\u7D44\u30A4\u30D9\u30F3\u30C8\u691C\u51FA\u524D\u306E\u6700\u5927\u30D0\u30C3\u30D5\u30A1\u30B5\u30A4\u30BA (\u30D0\u30A4\u30C8) \u203B\u756A\u7D44\u958B\u59CB\u306E\u982D\u304C\u6B20\u3051\u308B\u5834\u5408\u306F\u5897\u3084\u3059" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.NumericInput, { id: "max-buffer-bytes", value: editing.maxBufferBytesBeforeReady ? Math.round(editing.maxBufferBytesBeforeReady / 1024 / 1024) : "", placeholder: "8", min: 1, max: 64, onValueChange: (value, _) => {
                                if (value === null) {
                                    delete editing.maxBufferBytesBeforeReady;
                                }
                                else {
                                    editing.maxBufferBytesBeforeReady = value * 1024 * 1024;
                                }
                                setEditing({ ...editing });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "Event End Timeout (sec)", labelFor: "event-end-timeout", helperText: "\u756A\u7D44\u30A4\u30D9\u30F3\u30C8\u7D42\u4E86\u30BF\u30A4\u30E0\u30A2\u30A6\u30C8 (\u30DF\u30EA\u79D2) \u203B\u756A\u7D44\u7D42\u4E86\u304C\u8AA4\u5224\u5B9A\u3055\u308C\u308B\u5834\u5408\u306F\u9577\u304F\u3059\u308B" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.NumericInput, { id: "event-end-timeout", value: editing.eventEndTimeout ?? "", placeholder: "1000", min: 1, max: 10000, onValueChange: (value, _) => {
                                if (value === null) {
                                    delete editing.eventEndTimeout;
                                }
                                else {
                                    editing.eventEndTimeout = value;
                                }
                                setEditing({ ...editing });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { className: "config-switch-group", labelFor: "disable-eit-parsing", helperText: "EIT \u89E3\u6790\u306E\u7121\u52B9\u5316 (EPG \u95A2\u9023\u6A5F\u80FD\u304C\u7121\u52B9\u306B\u306A\u308A\u307E\u3059)", intent: editing.disableEITParsing ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.WARNING : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.NONE },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { id: "disable-eit-parsing", checked: editing.disableEITParsing ?? false, label: "Disable EIT Parsing \u26A0\uFE0F", onChange: (e) => {
                                setEditing({ ...editing, disableEITParsing: e.currentTarget.checked ? true : undefined });
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_16__.Section, { className: "config-section", title: "Network Config", icon: "globe-network", compact: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "config-form-grid" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { className: "config-form-wide", label: "Allow IPv4 CIDR Ranges \u26A0\uFE0F", labelFor: "allow-ipv4-cidrs", helperText: invalidAllowIPv4CidrRanges ? "IPv4 CIDR range is invalid." : "アクセスを許可する IPv4 CIDR 範囲を1行に1つずつ指定 ⚠️ 最大限の注意が必要な設定です (グローバル IPv4 アドレスを指定しないでください)", intent: invalidAllowIPv4CidrRanges ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.DANGER : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.NONE },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.TextArea, { id: "allow-ipv4-cidrs", value: allowIPv4CidrRangesText, onChange: (e) => {
                                const newValue = e.target.value;
                                setAllowIPv4CidrRangesText(newValue);
                                setEditing({ ...editing, allowIPv4CidrRanges: parseMultilineConfigValue(newValue) });
                            }, rows: 3, intent: invalidAllowIPv4CidrRanges ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.DANGER : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.NONE })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { className: "config-form-wide", label: "Allow IPv6 CIDR Ranges \u26A0\uFE0F", labelFor: "allow-ipv6-cidrs", helperText: invalidAllowIPv6CidrRanges ? "IPv6 CIDR range is invalid." : "アクセスを許可する IPv6 CIDR 範囲を1行に1つずつ指定 ⚠️ 最大限の注意が必要な設定です (グローバル IPv6 アドレスを指定しないでください)", intent: invalidAllowIPv6CidrRanges ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.DANGER : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.NONE },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.TextArea, { id: "allow-ipv6-cidrs", value: allowIPv6CidrRangesText, onChange: (e) => {
                                const newValue = e.target.value;
                                setAllowIPv6CidrRangesText(newValue);
                                setEditing({ ...editing, allowIPv6CidrRanges: parseMultilineConfigValue(newValue) });
                            }, rows: 3, intent: invalidAllowIPv6CidrRanges ? _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.DANGER : _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Intent.NONE })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { className: "config-form-wide", label: "Allow Origins \u26A0\uFE0F\uD83E\uDDEA", labelFor: "allow-origins", helperText: "\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF\u3059\u308B Origin \u30921\u884C\u306B1\u3064\u305A\u3064\u6307\u5B9A" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.TextArea, { id: "allow-origins", value: allowOriginsText, onChange: (e) => {
                                const newValue = e.target.value;
                                setAllowOriginsText(newValue);
                                setEditing({ ...editing, allowOrigins: parseMultilineConfigValue(newValue) });
                            }, rows: 3 })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { className: "config-switch-group", labelFor: "allow-pna", helperText: "Private Network Access / Local Network Access \u3092\u8A31\u53EF (\u30D6\u30E9\u30A6\u30B6\u3067\u4FDD\u8B77\u3055\u308C\u305F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304B\u3089\u306E\u30A2\u30AF\u30BB\u30B9\u3092\u8A8D\u53EF\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059)" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.Switch, { id: "allow-pna", checked: editing.allowPNA ?? true, label: "Allow PNA/LNA \uD83E\uDDEA", onChange: (e) => {
                                setEditing({ ...editing, allowPNA: e.currentTarget.checked });
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_16__.Section, { className: "config-section", title: "Other Config", icon: "more", compact: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "config-form-grid" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.FormGroup, { label: "TSPlay Endpoint \uD83E\uDDEA", labelFor: "tsplay-endpoint", helperText: "TSPlay \u3067\u4F7F\u7528\u3059\u308B\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8 URL (\u4FDD\u8B77\u3055\u308C\u305F\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8)" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.InputGroup, { id: "tsplay-endpoint", value: editing.tsplayEndpoint ?? "", onChange: (e) => {
                                const newValue = e.target.value.trim();
                                if (newValue === "") {
                                    setEditing({ ...editing, tsplayEndpoint: null });
                                }
                                else {
                                    setEditing({ ...editing, tsplayEndpoint: newValue });
                                }
                            } }))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.Dialog, { isOpen: showSaveDialog, onClose: () => setShowSaveDialog(false), title: "Save" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogBody, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "bp6-text-muted" }, "\u9069\u7528\u3059\u308B\u306B\u306F\u518D\u8D77\u52D5\u304C\u5FC5\u8981\u3067\u3059\u3002")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => setShowSaveDialog(false) }, "\u30AD\u30E3\u30F3\u30BB\u30EB"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", disabled: !hasChanges || invalid, onClick: handleSave }, "\u4FDD\u5B58")) }))));
};
function isValidCronExpression(cronExpression) {
    const cronParts = cronExpression.split(" ");
    if (cronParts.length !== 5) {
        return false;
    }
    try {
        const patterns = [
            /^(\*|([0-9]|[1-5][0-9])((-[0-9]|[1-5][0-9]))?)(\/([1-9]|[1-5][0-9]))?$/,
            /^(\*|([0-9]|1[0-9]|2[0-3])((-[0-9]|1[0-9]|2[0-3]))?)(\/([1-9]|1[0-9]|2[0-3]))?$/,
            /^(\*|([1-9]|[12][0-9]|3[01])((-[1-9]|[12][0-9]|3[01]))?)(\/([1-9]|[12][0-9]|3[01]))?$/,
            /^(\*|([1-9]|1[0-2])((-[1-9]|1[0-2]))?)(\/([1-9]|1[0-2]))?$/,
            /^(\*|([0-6])((-[0-6]))?)(\/([1-6]))?$/
        ];
        for (let i = 0; i < 5; i++) {
            const parts = cronParts[i].split(",");
            for (const part of parts) {
                if (part === "" || !patterns[i].test(part)) {
                    return false;
                }
            }
        }
        return true;
    }
    catch (err) {
        return false;
    }
}


/***/ },

/***/ "./src/ui/routes/TunersConfigView.tsx"
/*!********************************************!*\
  !*** ./src/ui/routes/TunersConfigView.tsx ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TunersConfigView: () => (/* binding */ TunersConfigView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/common/alignment.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/button/buttons.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialog.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogBody.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/dialog/dialogFooter.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/controls.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/formGroup.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/forms/inputGroup.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/html-table/htmlTable.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/navbar/navbar.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/non-ideal-state/nonIdealState.js");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/components/spinner/spinner.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modules/ui */ "./src/ui/modules/ui.ts");
/* harmony import */ var _TunersConfigView_sass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TunersConfigView.sass */ "./src/ui/routes/TunersConfigView.sass");






const configAPI = "/api/config/tuners";
const typesIndex = ["GR", "BS", "BS4K", "CS", "SKY", "NW1", "NW2", "NW3", "NW4", "NW5", "NW6", "NW7", "NW8", "NW9", "NW10",
    "NW11", "NW12", "NW13", "NW14", "NW15", "NW16", "NW17", "NW18", "NW19", "NW20",
    "NW21", "NW22", "NW23", "NW24", "NW25", "NW26", "NW27", "NW28", "NW29", "NW30",
    "NW31", "NW32", "NW33", "NW34", "NW35", "NW36", "NW37", "NW38", "NW39", "NW40"];
function sortTypes(types) {
    return types.sort((a, b) => typesIndex.indexOf(a) - typesIndex.indexOf(b));
}
const TunersConfigView = () => {
    console.debug("routes", "TunersConfigView");
    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [editing, setEditing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [showSaveDialog, setShowSaveDialog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    _modules_ui__WEBPACK_IMPORTED_MODULE_15__.setTitle("チューナー設定", isLoading);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (saved === true) {
            setTimeout(() => {
            }, 500);
            setSaved(false);
            return;
        }
        (async () => {
            try {
                const res = await (await fetch(configAPI)).json();
                console.log("TunersConfigView", "GET", configAPI, "->", res);
                setEditing(JSON.parse(JSON.stringify(res)));
                setCurrent(JSON.parse(JSON.stringify(res)));
                setIsLoading(false);
            }
            catch (e) {
                console.error(e);
                setIsLoading(false);
            }
        })();
    }, [saved]);
    const hasChanges = editing !== null && current !== null && !fast_deep_equal__WEBPACK_IMPORTED_MODULE_14___default()(editing, current);
    const handleCancel = () => {
        if (current) {
            setEditing(JSON.parse(JSON.stringify(current)));
        }
    };
    const handleSave = async () => {
        if (!editing) {
            return;
        }
        setShowSaveDialog(false);
        try {
            console.log("TunersConfigView", "PUT", configAPI, "<-", editing);
            await fetch(configAPI, {
                method: "PUT",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: JSON.stringify(editing)
            });
            setSaved(true);
        }
        catch (err) {
            console.error(err);
        }
    };
    const handleAddTuner = () => {
        if (!editing)
            return;
        const i = editing.length;
        const newTuner = {
            name: `adapter${i}`,
            types: [],
            command: `dvbv5-zap -a ${i} -c ./config/dvbconf-for-isdb/conf/dvbv5_channels_isdbs.conf -r -P <channel>`,
            dvbDevicePath: `/dev/dvb/adapter${i}/dvr0`,
            decoder: "arib-b25-stream-test",
            isDisabled: true
        };
        setEditing([...editing, newTuner]);
    };
    const updateTuner = (index, updated) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        newEditing[index] = { ...newEditing[index], ...updated };
        setEditing(newEditing);
    };
    const deleteTunerProperty = (index, key) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        const updated = { ...newEditing[index] };
        delete updated[key];
        newEditing[index] = updated;
        setEditing(newEditing);
    };
    const handleUp = (i) => {
        if (!editing || i === 0)
            return;
        const newEditing = [...editing];
        const temp = newEditing[i];
        newEditing[i] = newEditing[i - 1];
        newEditing[i - 1] = temp;
        setEditing(newEditing);
    };
    const handleDown = (i) => {
        if (!editing || i === editing.length - 1)
            return;
        const newEditing = [...editing];
        const temp = newEditing[i];
        newEditing[i] = newEditing[i + 1];
        newEditing[i + 1] = temp;
        setEditing(newEditing);
    };
    const handleRemove = (i) => {
        if (!editing)
            return;
        const newEditing = [...editing];
        newEditing.splice(i, 1);
        setEditing(newEditing);
    };
    const toolbar = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.Navbar, { className: "toolbar" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.START },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.Navbar.Heading, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__.Breadcrumbs, { items: [
                        {
                            text: "チューナー設定"
                        }
                    ] }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.Navbar.Group, { align: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_2__.Alignment.END },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, intent: "success", icon: "add", text: "Add Tuner", onClick: handleAddTuner }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_11__.Navbar.Divider, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, intent: "danger", icon: "undo", text: "Cancel", disabled: !hasChanges, onClick: handleCancel }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", icon: "saved", text: "Save", disabled: !hasChanges, onClick: () => setShowSaveDialog(true) }))));
    if (isLoading || !editing) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-tuners-config-view" },
            toolbar,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_12__.NonIdealState, { icon: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_13__.Spinner, null), title: "\u30ED\u30FC\u30C9\u4E2D", description: "\u8A2D\u5B9A\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059..." })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "route", id: "route-tuners-config-view" },
        toolbar,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_10__.HTMLTable, { className: "tuner-table", striped: true, interactive: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "80px" } }, "Enable"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "180px" } }, "Name"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "280px" } }, "Types"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, "Options"),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { style: { width: "140px", textAlign: "right" } }))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, editing.map((tuner, i) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: i },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Switch, { checked: !tuner.isDisabled, onChange: (e) => {
                                updateTuner(i, { isDisabled: !e.currentTarget.checked });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.InputGroup, { value: tuner.name || "", onChange: (e) => {
                                updateTuner(i, { name: e.target.value });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "types-section" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "types-base" }, ["GR", "BS", "BS4K", "CS", "SKY"].map((type) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Checkbox, { key: type, label: type, checked: tuner.types?.includes(type) ?? false, inline: true, onChange: (e) => {
                                    let newTypes = [...(tuner.types || [])];
                                    if (e.currentTarget.checked) {
                                        newTypes.push(type);
                                        newTypes = sortTypes(newTypes);
                                    }
                                    else {
                                        newTypes = newTypes.filter(t => t !== type);
                                    }
                                    updateTuner(i, { types: newTypes });
                                } })))),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "types-nw-header" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "NW"),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, small: true, text: "\u5168\u9078\u629E", onClick: () => {
                                        const nwTypes = [...Array(40)].map((_, n) => `NW${n + 1}`);
                                        const base = (tuner.types || []).filter(t => !t.startsWith("NW"));
                                        updateTuner(i, { types: sortTypes([...base, ...nwTypes]) });
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { minimal: true, small: true, text: "\u5168\u89E3\u9664", onClick: () => {
                                        updateTuner(i, { types: (tuner.types || []).filter(t => !t.startsWith("NW")) });
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "types-nw-grid" }, [...Array(40)].map((_, n) => {
                                const type = `NW${n + 1}`;
                                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Checkbox, { key: type, label: `${n + 1}`, title: type, checked: tuner.types?.includes(type) ?? false, onChange: (e) => {
                                        let newTypes = [...(tuner.types || [])];
                                        if (e.currentTarget.checked) {
                                            newTypes.push(type);
                                            newTypes = sortTypes(newTypes);
                                        }
                                        else {
                                            newTypes = newTypes.filter(t => t !== type);
                                        }
                                        updateTuner(i, { types: newTypes });
                                    } }));
                            })))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tuner-options-grid" },
                            !tuner.remoteMirakurunHost && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.FormGroup, { label: "Command" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.InputGroup, { value: tuner.command || "", onChange: (e) => {
                                            const val = e.target.value;
                                            if (val === "") {
                                                deleteTunerProperty(i, "command");
                                            }
                                            else {
                                                updateTuner(i, { command: val });
                                            }
                                        } })),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.FormGroup, { label: "DVB Device Path" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.InputGroup, { value: tuner.dvbDevicePath || "", onChange: (e) => {
                                            const val = e.target.value;
                                            if (val === "") {
                                                deleteTunerProperty(i, "dvbDevicePath");
                                            }
                                            else {
                                                updateTuner(i, { dvbDevicePath: val });
                                            }
                                        } })))),
                            !tuner.command && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "remote-mirakurun-group" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.FormGroup, { label: "Remote Mirakurun Host", style: { flex: 1 } },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.InputGroup, { value: tuner.remoteMirakurunHost || "", onChange: (e) => {
                                                const val = e.target.value;
                                                if (val === "") {
                                                    deleteTunerProperty(i, "remoteMirakurunHost");
                                                }
                                                else if (/^[0-9a-z\.]+$/.test(val)) {
                                                    updateTuner(i, { remoteMirakurunHost: val });
                                                }
                                            } })),
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.FormGroup, { label: "Port", style: { width: "90px" } },
                                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.InputGroup, { placeholder: "40772", value: `${tuner.remoteMirakurunPort || ""}`, onChange: (e) => {
                                                const val = e.target.value;
                                                if (val === "") {
                                                    deleteTunerProperty(i, "remoteMirakurunPort");
                                                }
                                                else if (/^[0-9]+$/.test(val)) {
                                                    const port = parseInt(val, 10);
                                                    if (port <= 65535 && port > 0) {
                                                        updateTuner(i, { remoteMirakurunPort: port });
                                                    }
                                                }
                                            } }))),
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { marginBottom: "8px" } },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_7__.Checkbox, { label: "Decode (Remote Mirakurun Decoder)", checked: tuner.remoteMirakurunDecoder || false, onChange: (e) => {
                                            if (e.currentTarget.checked) {
                                                updateTuner(i, { remoteMirakurunDecoder: true });
                                            }
                                            else {
                                                deleteTunerProperty(i, "remoteMirakurunDecoder");
                                            }
                                        } })))),
                            (!tuner.remoteMirakurunHost || !tuner.remoteMirakurunDecoder) && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_8__.FormGroup, { label: "Decoder" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_9__.InputGroup, { value: tuner.decoder || "", onChange: (e) => {
                                        const val = e.target.value;
                                        if (val === "") {
                                            deleteTunerProperty(i, "decoder");
                                        }
                                        else {
                                            updateTuner(i, { decoder: val });
                                        }
                                    } }))))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "controls-cell" },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { disabled: i === 0, icon: "chevron-up", onClick: () => handleUp(i), minimal: true }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { disabled: i === editing.length - 1, icon: "chevron-down", onClick: () => handleDown(i), minimal: true }),
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "trash", intent: "danger", onClick: () => handleRemove(i), minimal: true }))))))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_4__.Dialog, { isOpen: showSaveDialog, onClose: () => setShowSaveDialog(false), title: "Save" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_5__.DialogBody, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u8A2D\u5B9A\u3092\u4FDD\u5B58\u3057\u307E\u3059\u304B\uFF1F"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "bp6-text-muted" }, "\u9069\u7528\u3059\u308B\u306B\u306F\u518D\u8D77\u52D5\u304C\u5FC5\u8981\u3067\u3059\u3002")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_6__.DialogFooter, { actions: react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: () => setShowSaveDialog(false) }, "\u30AD\u30E3\u30F3\u30BB\u30EB"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__.Button, { intent: "primary", disabled: !hasChanges, onClick: handleSave }, "\u4FDD\u5B58")) }))));
};


/***/ },

/***/ "./src/ui/icon-active.svg"
/*!********************************!*\
  !*** ./src/ui/icon-active.svg ***!
  \********************************/
(module) {

module.exports = "data:image/svg+xml;base64,PCEtLQ0KICBDb3B5cmlnaHQgMjAyMCBrYW5yZWlzYQ0KICBDQyBCWS1TQSA0LjANCiAgVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIGEgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIExpY2Vuc2UuDQogIGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvDQotLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmEgew0KICAgICAgICBmaWxsOiBub25lOw0KICAgICAgfQ0KDQogICAgICAuYiB7DQogICAgICAgIGZpbGw6ICNmZmUxOGE7DQogICAgICB9DQoNCiAgICAgIC5jIHsNCiAgICAgICAgZmlsbDogI2ZmZjsNCiAgICAgIH0NCg0KICAgICAgLmQgew0KICAgICAgICBjbGlwLXBhdGg6IHVybCgjYSk7DQogICAgICB9DQoNCiAgICAgIC5lIHsNCiAgICAgICAgZmlsbDogI2ZmZDU2YzsNCiAgICAgIH0NCg0KICAgICAgLmYgew0KICAgICAgICBmaWxsOiAjY2UzODUxOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogICAgPGNsaXBQYXRoIGlkPSJhIj4NCiAgICAgIDxwYXRoIGNsYXNzPSJhIiBkPSJNOC4yNDU3My44ODkzOWMyLjExMTU4LDQuMjU4ODUsMi40NjIxMiw0LjUzNTY4LDcuMjExMzYsNS4yMzY4NWEuMjc0LjI3NCwwLDAsMSwuMTQ3NDcuNDY2Yy0zLjM5Nzg5LDMuMzI0MjktMy41NTI4NiwzLjc0MzIxLTIuNzUyMTEsOC40NzY2OGEuMjc0LjI3NCwwLDAsMS0uMzk3NjEuMjg0MjZjLTQuMjExNTMtMi4yMDQzLTQuNjU3ODktMi4yMjIyNS04LjkxMjA3LjAwMTkyYS4yNzI1NC4yNzI1NCwwLDAsMS0uMzk0MDgtLjI4NjE4Yy43OTU3NC00LjY5MDQyLjY3NTc5LTUuMTE5Ny0yLjc1NTI3LTguNDc5NDZBLjI3NC4yNzQsMCwwLDEsLjU0OCw2LjEyNTc4YzQuNzAyOTItLjY5MjE4LDUuMDc0NTItLjk0LDcuMjA5LTUuMjQwMTNBLjI3NC4yNzQsMCwwLDEsOC4yNDU3My44ODkzOVoiLz4NCiAgICA8L2NsaXBQYXRoPg0KICA8L2RlZnM+DQogIDxnPg0KICAgIDxwYXRoIGNsYXNzPSJiIiBkPSJNOC4yNDU3My44ODkzOWMyLjExMTU4LDQuMjU4ODUsMi40NjIxMiw0LjUzNTY4LDcuMjExMzYsNS4yMzY4NWEuMjc0LjI3NCwwLDAsMSwuMTQ3NDcuNDY2Yy0zLjM5Nzg5LDMuMzI0MjktMy41NTI4NiwzLjc0MzIxLTIuNzUyMTEsOC40NzY2OGEuMjc0LjI3NCwwLDAsMS0uMzk3NjEuMjg0MjZjLTQuMjExNTMtMi4yMDQzLTQuNjU3ODktMi4yMjIyNS04LjkxMjA3LjAwMTkyYS4yNzI1NC4yNzI1NCwwLDAsMS0uMzk0MDgtLjI4NjE4Yy43OTU3NC00LjY5MDQyLjY3NTc5LTUuMTE5Ny0yLjc1NTI3LTguNDc5NDZBLjI3NC4yNzQsMCwwLDEsLjU0OCw2LjEyNTc4YzQuNzAyOTItLjY5MjE4LDUuMDc0NTItLjk0LDcuMjA5LTUuMjQwMTNBLjI3NC4yNzQsMCwwLDEsOC4yNDU3My44ODkzOVoiLz4NCiAgICA8cGF0aCBjbGFzcz0iYyIgZD0iTTcuODgwMTIsMTIuNjc5NzdDNi44NSwxMC42MDIwNiw2LjY3OSwxMC40NjcsNC4zNjIsMTAuMTI0OTNhLjEzMzY2LjEzMzY2LDAsMCwxLS4wNzE5NS0uMjI3MzRDNS45NDc3NSw4LjI3NTgyLDYuMDIzMzUsOC4wNzE0NCw1LjYzMjcsNS43NjIxOGEuMTMzNjYuMTMzNjYsMCwwLDEsLjE5NC0uMTM4NjdjMi4wNTQ2MywxLjA3NTM4LDIuMjcyMzksMS4wODQxNCw0LjM0NzgyLS4wMDA5NGEuMTMzLjEzMywwLDAsMSwuMTkyMjYuMTM5NjJjLS4zODgyMSwyLjI4ODI1LS4zMjk2OSwyLjQ5NzY4LDEuMzQ0MTgsNC4xMzY3NmEuMTMzNjcuMTMzNjcsMCwwLDEtLjA3NTQyLjIyNjIxYy0yLjI5NDM2LjMzNzY4LTIuNDc1NjQuNDU4NTktMy41MTY5NSwyLjU1NjQzQS4xMzM2Ni4xMzM2NiwwLDAsMSw3Ljg4MDEyLDEyLjY3OTc3WiIvPg0KICAgIDxnIGNsYXNzPSJkIj4NCiAgICAgIDxjaXJjbGUgY2xhc3M9ImUiIGN4PSI1LjEzNzU1IiBjeT0iNC44NjM0MiIgcj0iMC43OTk5NSIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iZSIgY3g9IjEwLjg2MjQ1IiBjeT0iNC44NjM0MiIgcj0iMC44Ii8+DQogICAgICA8Y2lyY2xlIGNsYXNzPSJlIiBjeD0iOCIgY3k9IjEzLjY5MzYxIiByPSIwLjgiLz4NCiAgICAgIDxjaXJjbGUgY2xhc3M9ImUiIGN4PSIzLjM0MzM5IiBjeT0iMTAuMzE2MjciIHI9IjAuOCIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iZSIgY3g9IjEyLjY1NjYxIiBjeT0iMTAuMzE2MjciIHI9IjAuOCIvPg0KICAgIDwvZz4NCiAgPC9nPg0KICA8Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTMuODc1MzgiIGN5PSIyLjU0ODY3IiByPSIxLjgxMTI5Ii8+DQo8L3N2Zz4NCg==";

/***/ },

/***/ "./src/ui/icon-gray.svg"
/*!******************************!*\
  !*** ./src/ui/icon-gray.svg ***!
  \******************************/
(module) {

module.exports = "data:image/svg+xml;base64,PCEtLQ0KICBDb3B5cmlnaHQgMjAyMCBrYW5yZWlzYQ0KICBDQyBCWS1TQSA0LjANCiAgVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIGEgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIExpY2Vuc2UuDQogIGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvDQotLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmEgew0KICAgICAgICBmaWxsOiBub25lOw0KICAgICAgfQ0KDQogICAgICAuYiB7DQogICAgICAgIGZpbGw6ICNlMGUwZTA7DQogICAgICB9DQoNCiAgICAgIC5jIHsNCiAgICAgICAgZmlsbDogI2ZmZjsNCiAgICAgIH0NCg0KICAgICAgLmQgew0KICAgICAgICBjbGlwLXBhdGg6IHVybCgjYSk7DQogICAgICB9DQoNCiAgICAgIC5lIHsNCiAgICAgICAgZmlsbDogI2Q2ZDZkNjsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICAgIDxjbGlwUGF0aCBpZD0iYSI+DQogICAgICA8cGF0aCBjbGFzcz0iYSIgZD0iTTguMjQ1NzMuODg5MzljMi4xMTE1OCw0LjI1ODg1LDIuNDYyMTIsNC41MzU2OCw3LjIxMTM2LDUuMjM2ODVhLjI3NC4yNzQsMCwwLDEsLjE0NzQ3LjQ2NmMtMy4zOTc4OSwzLjMyNDI5LTMuNTUyODYsMy43NDMyMS0yLjc1MjExLDguNDc2NjhhLjI3NC4yNzQsMCwwLDEtLjM5NzYxLjI4NDI2Yy00LjIxMTUzLTIuMjA0My00LjY1Nzg5LTIuMjIyMjUtOC45MTIwNy4wMDE5MmEuMjcyNTQuMjcyNTQsMCwwLDEtLjM5NDA4LS4yODYxOGMuNzk1NzQtNC42OTA0Mi42NzU3OS01LjExOTctMi43NTUyNy04LjQ3OTQ2QS4yNzQuMjc0LDAsMCwxLC41NDgsNi4xMjU3OGM0LjcwMjkyLS42OTIxOCw1LjA3NDUyLS45NCw3LjIwOS01LjI0MDEzQS4yNzQuMjc0LDAsMCwxLDguMjQ1NzMuODg5MzlaIi8+DQogICAgPC9jbGlwUGF0aD4NCiAgPC9kZWZzPg0KICA8Zz4NCiAgICA8cGF0aCBjbGFzcz0iYiIgZD0iTTguMjQ1NzMuODg5MzljMi4xMTE1OCw0LjI1ODg1LDIuNDYyMTIsNC41MzU2OCw3LjIxMTM2LDUuMjM2ODVhLjI3NC4yNzQsMCwwLDEsLjE0NzQ3LjQ2NmMtMy4zOTc4OSwzLjMyNDI5LTMuNTUyODYsMy43NDMyMS0yLjc1MjExLDguNDc2NjhhLjI3NC4yNzQsMCwwLDEtLjM5NzYxLjI4NDI2Yy00LjIxMTUzLTIuMjA0My00LjY1Nzg5LTIuMjIyMjUtOC45MTIwNy4wMDE5MmEuMjcyNTQuMjcyNTQsMCwwLDEtLjM5NDA4LS4yODYxOGMuNzk1NzQtNC42OTA0Mi42NzU3OS01LjExOTctMi43NTUyNy04LjQ3OTQ2QS4yNzQuMjc0LDAsMCwxLC41NDgsNi4xMjU3OGM0LjcwMjkyLS42OTIxOCw1LjA3NDUyLS45NCw3LjIwOS01LjI0MDEzQS4yNzQuMjc0LDAsMCwxLDguMjQ1NzMuODg5MzlaIi8+DQogICAgPHBhdGggY2xhc3M9ImMiIGQ9Ik03Ljg4MDEyLDEyLjY3OTc3QzYuODUsMTAuNjAyMDYsNi42NzksMTAuNDY3LDQuMzYyLDEwLjEyNDkzYS4xMzM2Ni4xMzM2NiwwLDAsMS0uMDcxOTUtLjIyNzM0QzUuOTQ3NzUsOC4yNzU4Miw2LjAyMzM1LDguMDcxNDQsNS42MzI3LDUuNzYyMThhLjEzMzY2LjEzMzY2LDAsMCwxLC4xOTQtLjEzODY3YzIuMDU0NjMsMS4wNzUzOCwyLjI3MjM5LDEuMDg0MTQsNC4zNDc4Mi0uMDAwOTRhLjEzMy4xMzMsMCwwLDEsLjE5MjI2LjEzOTYyYy0uMzg4MjEsMi4yODgyNS0uMzI5NjksMi40OTc2OCwxLjM0NDE4LDQuMTM2NzZhLjEzMzY3LjEzMzY3LDAsMCwxLS4wNzU0Mi4yMjYyMWMtMi4yOTQzNi4zMzc2OC0yLjQ3NTY0LjQ1ODU5LTMuNTE2OTUsMi41NTY0M0EuMTMzNjYuMTMzNjYsMCwwLDEsNy44ODAxMiwxMi42Nzk3N1oiLz4NCiAgICA8ZyBjbGFzcz0iZCI+DQogICAgICA8Y2lyY2xlIGNsYXNzPSJlIiBjeD0iNS4xMzc1NSIgY3k9IjQuODYzNDIiIHI9IjAuNzk5OTUiLz4NCiAgICAgIDxjaXJjbGUgY2xhc3M9ImUiIGN4PSIxMC44NjI0NSIgY3k9IjQuODYzNDIiIHI9IjAuOCIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iZSIgY3g9IjgiIGN5PSIxMy42OTM2MSIgcj0iMC44Ii8+DQogICAgICA8Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMy4zNDMzOSIgY3k9IjEwLjMxNjI3IiByPSIwLjgiLz4NCiAgICAgIDxjaXJjbGUgY2xhc3M9ImUiIGN4PSIxMi42NTY2MSIgY3k9IjEwLjMxNjI3IiByPSIwLjgiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K";

/***/ },

/***/ "./src/ui/icon.svg"
/*!*************************!*\
  !*** ./src/ui/icon.svg ***!
  \*************************/
(module) {

module.exports = "data:image/svg+xml;base64,PCEtLQ0KICBDb3B5cmlnaHQgMjAyMCBrYW5yZWlzYQ0KICBDQyBCWS1TQSA0LjANCiAgVGhpcyB3b3JrIGlzIGxpY2Vuc2VkIHVuZGVyIGEgQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIExpY2Vuc2UuDQogIGh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS80LjAvDQotLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDE2IDE2Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmEgew0KICAgICAgICBmaWxsOiBub25lOw0KICAgICAgfQ0KDQogICAgICAuYiB7DQogICAgICAgIGZpbGw6ICNmZmUxOGE7DQogICAgICB9DQoNCiAgICAgIC5jIHsNCiAgICAgICAgZmlsbDogI2ZmZjsNCiAgICAgIH0NCg0KICAgICAgLmQgew0KICAgICAgICBjbGlwLXBhdGg6IHVybCgjYSk7DQogICAgICB9DQoNCiAgICAgIC5lIHsNCiAgICAgICAgZmlsbDogI2ZmZDU2YzsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICAgIDxjbGlwUGF0aCBpZD0iYSI+DQogICAgICA8cGF0aCBjbGFzcz0iYSIgZD0iTTguMjQ1NzMuODg5MzljMi4xMTE1OCw0LjI1ODg1LDIuNDYyMTIsNC41MzU2OCw3LjIxMTM2LDUuMjM2ODVhLjI3NC4yNzQsMCwwLDEsLjE0NzQ3LjQ2NmMtMy4zOTc4OSwzLjMyNDI5LTMuNTUyODYsMy43NDMyMS0yLjc1MjExLDguNDc2NjhhLjI3NC4yNzQsMCwwLDEtLjM5NzYxLjI4NDI2Yy00LjIxMTUzLTIuMjA0My00LjY1Nzg5LTIuMjIyMjUtOC45MTIwNy4wMDE5MmEuMjcyNTQuMjcyNTQsMCwwLDEtLjM5NDA4LS4yODYxOGMuNzk1NzQtNC42OTA0Mi42NzU3OS01LjExOTctMi43NTUyNy04LjQ3OTQ2QS4yNzQuMjc0LDAsMCwxLC41NDgsNi4xMjU3OGM0LjcwMjkyLS42OTIxOCw1LjA3NDUyLS45NCw3LjIwOS01LjI0MDEzQS4yNzQuMjc0LDAsMCwxLDguMjQ1NzMuODg5MzlaIi8+DQogICAgPC9jbGlwUGF0aD4NCiAgPC9kZWZzPg0KICA8Zz4NCiAgICA8cGF0aCBjbGFzcz0iYiIgZD0iTTguMjQ1NzMuODg5MzljMi4xMTE1OCw0LjI1ODg1LDIuNDYyMTIsNC41MzU2OCw3LjIxMTM2LDUuMjM2ODVhLjI3NC4yNzQsMCwwLDEsLjE0NzQ3LjQ2NmMtMy4zOTc4OSwzLjMyNDI5LTMuNTUyODYsMy43NDMyMS0yLjc1MjExLDguNDc2NjhhLjI3NC4yNzQsMCwwLDEtLjM5NzYxLjI4NDI2Yy00LjIxMTUzLTIuMjA0My00LjY1Nzg5LTIuMjIyMjUtOC45MTIwNy4wMDE5MmEuMjcyNTQuMjcyNTQsMCwwLDEtLjM5NDA4LS4yODYxOGMuNzk1NzQtNC42OTA0Mi42NzU3OS01LjExOTctMi43NTUyNy04LjQ3OTQ2QS4yNzQuMjc0LDAsMCwxLC41NDgsNi4xMjU3OGM0LjcwMjkyLS42OTIxOCw1LjA3NDUyLS45NCw3LjIwOS01LjI0MDEzQS4yNzQuMjc0LDAsMCwxLDguMjQ1NzMuODg5MzlaIi8+DQogICAgPHBhdGggY2xhc3M9ImMiIGQ9Ik03Ljg4MDEyLDEyLjY3OTc3QzYuODUsMTAuNjAyMDYsNi42NzksMTAuNDY3LDQuMzYyLDEwLjEyNDkzYS4xMzM2Ni4xMzM2NiwwLDAsMS0uMDcxOTUtLjIyNzM0QzUuOTQ3NzUsOC4yNzU4Miw2LjAyMzM1LDguMDcxNDQsNS42MzI3LDUuNzYyMThhLjEzMzY2LjEzMzY2LDAsMCwxLC4xOTQtLjEzODY3YzIuMDU0NjMsMS4wNzUzOCwyLjI3MjM5LDEuMDg0MTQsNC4zNDc4Mi0uMDAwOTRhLjEzMy4xMzMsMCwwLDEsLjE5MjI2LjEzOTYyYy0uMzg4MjEsMi4yODgyNS0uMzI5NjksMi40OTc2OCwxLjM0NDE4LDQuMTM2NzZhLjEzMzY3LjEzMzY3LDAsMCwxLS4wNzU0Mi4yMjYyMWMtMi4yOTQzNi4zMzc2OC0yLjQ3NTY0LjQ1ODU5LTMuNTE2OTUsMi41NTY0M0EuMTMzNjYuMTMzNjYsMCwwLDEsNy44ODAxMiwxMi42Nzk3N1oiLz4NCiAgICA8ZyBjbGFzcz0iZCI+DQogICAgICA8Y2lyY2xlIGNsYXNzPSJlIiBjeD0iNS4xMzc1NSIgY3k9IjQuODYzNDIiIHI9IjAuNzk5OTUiLz4NCiAgICAgIDxjaXJjbGUgY2xhc3M9ImUiIGN4PSIxMC44NjI0NSIgY3k9IjQuODYzNDIiIHI9IjAuOCIvPg0KICAgICAgPGNpcmNsZSBjbGFzcz0iZSIgY3g9IjgiIGN5PSIxMy42OTM2MSIgcj0iMC44Ii8+DQogICAgICA8Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMy4zNDMzOSIgY3k9IjEwLjMxNjI3IiByPSIwLjgiLz4NCiAgICAgIDxjaXJjbGUgY2xhc3M9ImUiIGN4PSIxMi42NTY2MSIgY3k9IjEwLjMxNjI3IiByPSIwLjgiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23111418%27 d=%27M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1%27/%3e%3c/svg%3e"
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23111418%27 d=%27M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23111418%27 d=%27M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23111418%27 d=%27M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5%27/%3e%3c/svg%3e"
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23111418%27 d=%27M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23111418%27 d=%27M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%235f6b7c%27 d=%27M2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4%27/%3e%3c/svg%3e"
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%235f6b7c%27 d=%27M2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%235f6b7c%27 d=%27M2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%235f6b7c%27 d=%27m10.71 7.29-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71s-.11-.53-.29-.71%27/%3e%3c/svg%3e"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%235f6b7c%27 d=%27m10.71 7.29-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71s-.11-.53-.29-.71%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%235f6b7c%27 d=%27m10.71 7.29-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71s-.11-.53-.29-.71%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23abb3bf%27 d=%27M2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4%27/%3e%3c/svg%3e"
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23abb3bf%27 d=%27M2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23abb3bf%27 d=%27M2 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23abb3bf%27 d=%27m10.71 7.29-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71s-.11-.53-.29-.71%27/%3e%3c/svg%3e"
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23abb3bf%27 d=%27m10.71 7.29-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71s-.11-.53-.29-.71%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27%23abb3bf%27 d=%27m10.71 7.29-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71s-.11-.53-.29-.71%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27white%27 d=%27M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1%27/%3e%3c/svg%3e"
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27white%27 d=%27M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27white%27 d=%27M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1%27/%3e%3c/svg%3e";

/***/ },

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27white%27 d=%27M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5%27/%3e%3c/svg%3e"
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27white%27 d=%27M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
(module) {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27white%27 d=%27M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5%27/%3e%3c/svg%3e";

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		const getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		let leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			const ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			const def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunk_stuayu_mirakurun"] = self["webpackChunk_stuayu_mirakurun"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/ui/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map