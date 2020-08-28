(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MonitorGame"] = factory();
	else
		root["MonitorGame"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ src_MonitorNew; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/cookie.js


var doc = document;

var cookie_cookie = /*#__PURE__*/function () {
  function cookie() {
    classCallCheck_default()(this, cookie);
  }

  createClass_default()(cookie, null, [{
    key: "get",
    value: function get(key) {
      try {
        var a;
        var reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");

        if (a = doc.cookie.match(reg)) {
          return unescape(a[2]);
        } else {
          return "";
        }
      } catch (e) {
        return "";
      }
    }
  }, {
    key: "set",
    value: function set(key, val, options) {
      options = options || {};
      var expires = options.expires;

      if (typeof expires === "number") {
        expires = new Date();
        expires.setTime(expires.getTime() + options.expires);
      }

      try {
        doc.cookie = key + "=" + escape(val) + (expires ? ";expires=" + expires.toGMTString() : "") + (options.path ? ";path=" + options.path : "") + (options.domain ? "; domain=" + options.domain : "");
      } catch (e) {}
    }
  }]);

  return cookie;
}();


// CONCATENATED MODULE: ./src/local.js
var isLocal; //有时候monitor.js会在file://或者res://协议下使用，判断下

isLocal = true;

try {
  var protocol = location.protocol.toLowerCase();

  if (protocol == 'http:' || protocol == 'https:') {
    isLocal = false;
  }
} catch (e) {}

/* harmony default export */ var local = (isLocal);
// CONCATENATED MODULE: ./src/util/guid.js




var guid_doc = document;
var nav = navigator;
var screen = window.screen;
var domain = local ? '' : document.domain.toLowerCase();
var ua = nav.userAgent.toLowerCase();
var guidCookieDomains = ['360.cn', 'so.com', 'leidian.com'];

var guid_guid = /*#__PURE__*/function () {
  function guid() {
    classCallCheck_default()(this, guid);
  }

  createClass_default()(guid, [{
    key: "hash",
    value: function hash(s) {
      var h = 0;
      var g = 0;
      var i = s.length - 1;

      for (i; i >= 0; i--) {
        var code = parseInt(s.charCodeAt(i), 10);
        h = (h << 6 & 0xfffffff) + code + (code << 14);

        if ((g = h & 0xfe00000) != 0) {
          h = h ^ g >> 21;
        }
      }

      return h;
    }
  }, {
    key: "guid",
    value: function guid() {
      var s = [nav.appName, nav.version, nav.language || nav.browserLanguage, nav.platform, nav.userAgent, screen.width, 'x', screen.height, screen.colorDepth, guid_doc.referrer].join("");
      var sLen = s.length;
      var hLen = window.history.length;

      while (hLen) {
        s += hLen-- ^ sLen++;
      }

      return (Math.round(Math.random() * 2147483647) ^ this.hash(s)) * 2147483647;
    }
  }, {
    key: "getGuid",
    value: function getGuid() {
      var guidKey = '__guid';
      var id = cookie_cookie.get(guidKey);

      if (!id) {
        id = [this.hash(local ? '' : guid_doc.domain), this.guid(), +new Date() + Math.random() + Math.random()].join('.');
        var config = {
          expires: 24 * 3600 * 1000 * 300,
          path: '/'
        }; //如果是设置了guidCookieDomains，__guid放在guidCookieDomain域下

        if (guidCookieDomains.length) {
          for (var i = 0; i < guidCookieDomains.length; i++) {
            var guidCookieDomain = guidCookieDomains[i],
                gDomain = '.' + guidCookieDomain;

            if (domain.indexOf(gDomain) > 0 && domain.lastIndexOf(gDomain) == domain.length - gDomain.length || domain == guidCookieDomain) {
              config.domain = gDomain;
              break;
            }
          }
        }

        cookie_cookie.set(guidKey, id, config);
      }

      return id;
    }
  }, {
    key: "guid",
    value: function guid() {
      if (!this._guid) {
        this._guid = this.getGuid();
      }

      return this._guid;
    }
  }], [{
    key: "Instance",
    value: function Instance() {
      if (!this._instance) {
        this._instance = new guid();
      }

      return this._instance;
    }
  }]);

  return guid;
}();


// CONCATENATED MODULE: ./src/util/count.js



var count_count = /*#__PURE__*/function () {
  function count() {
    classCallCheck_default()(this, count);
  }

  createClass_default()(count, [{
    key: "getCount",
    value: function getCount() {
      var countKey = 'monitor_count';
      var count = Cookie.get(countKey);
      count = (parseInt(count) || 0) + 1;
      Cookie.set(countKey, count, {
        expires: 24 * 3600 * 1000,
        path: '/'
      });
      return count;
    }
  }, {
    key: "count",
    value: function count() {
      if (!this._count) {
        this._count = this.getCount();
      }

      return this._count;
    }
  }], [{
    key: "Instance",
    value: function Instance() {
      if (!this._instance) {
        this._instance = new count();
      }

      return this._instance;
    }
  }]);

  return count;
}();


// CONCATENATED MODULE: ./src/config.js



var config_config = /*#__PURE__*/function () {
  function config() {
    classCallCheck_default()(this, config);

    this._config = {
      clickUrl: null,
      trackUrl: null,
      areaIds: null
    };
  }

  createClass_default()(config, [{
    key: "config",
    value: function config() {
      return this._config;
    }
  }, {
    key: "set",
    value: function set(value) {
      this._config = value;
    }
  }], [{
    key: "Instance",
    value: function Instance() {
      if (!this._instance) {
        this._instance = new config();
      }

      return this._instance;
    }
  }]);

  return config;
}();


// CONCATENATED MODULE: ./src/stringH.js



var stringH_stringH = /*#__PURE__*/function () {
  function stringH() {
    classCallCheck_default()(this, stringH);
  }

  createClass_default()(stringH, null, [{
    key: "trim",
    value: function trim(s) {
      return s.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "");
    }
  }]);

  return stringH;
}();


// CONCATENATED MODULE: ./src/util/index.js






var guidInstance = guid_guid.Instance;
var countInstance = count_count.Instance;
var configInstance = config_config.Instance;
var util_doc = document;
var util_nav = navigator;
var util_screen = window.screen;
var util_ua = util_nav.userAgent.toLowerCase();

var util_util = /*#__PURE__*/function () {
  function util() {
    classCallCheck_default()(this, util);
  }

  createClass_default()(util, null, [{
    key: "test",
    value: function test() {
      return 'test util';
    }
  }, {
    key: "getColorDepth",
    value: function getColorDepth() {
      return util_screen.colorDepth + '-bit';
    }
    /**
     * 获取语言
     * @return {[type]} [description]
     */

  }, {
    key: "getLanguage",
    value: function getLanguage() {
      return (util_nav.language || util_nav.browserLanguage).toLowerCase();
    }
    /**
     * 获取屏幕大小
     * @return {[type]} [description]
     */

  }, {
    key: "getScreenSize",
    value: function getScreenSize() {
      return util_screen.width + 'x' + util_screen.height;
    }
  }, {
    key: "getProject",
    value: function getProject() {
      return '';
    }
  }, {
    key: "getReferrer",
    value: function getReferrer() {
      var ref = util_doc.referrer || '';

      if (ref.indexOf('pass') > -1 || ref.indexOf('pwd') > -1) {
        return '403';
      }

      return ref;
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      var browsers = {
        '360se-ua': '360se',
        'TT': 'tencenttraveler',
        'Maxthon': 'maxthon',
        'GreenBrowser': 'greenbrowser',
        'Sogou': 'se 1.x / se 2.x',
        'TheWorld': 'theworld'
      };

      for (var i in browsers) {
        if (util_ua.indexOf(browsers[i]) > -1) {
          return i;
        }
      }

      var is360se = false;

      try {
        if (+external.twGetVersion(external.twGetSecurityID(window)).replace(/\./g, "") > 1013) {
          is360se = true;
        }
      } catch (e) {}

      if (is360se) {
        return "360se-noua";
      }

      var result = util_ua.match(/(msie|chrome|safari|firefox|opera|trident)/);
      result = result ? result[0] : '';

      if (result == 'msie') {
        result = util_ua.match(/msie[^;]+/) + '';
      } else if (result == 'trident') {
        util_ua.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/ig, function (a, c) {
          result = 'msie ' + c;
        });
      }

      return result;
    }
  }, {
    key: "getLocation",
    value: function getLocation() {
      var url = ''; //避免IE下设置domain后，读取location.href属性报权限错误

      try {
        url = location.href;
      } catch (e) {
        url = util_doc.createElement('a');
        url.href = '';
        url = url.href;
      } //去掉queryString和Hash


      url = url.replace(/[?#].*$/, ''); //如果不是.html .htm .shtml .php结尾的url，补上/

      url = /\.(s?htm|php)/.test(url) ? url : url.replace(/\/$/, '') + '/';
      return url;
    }
  }, {
    key: "getGuid",
    value: function getGuid() {
      return guidInstance.guid;
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return countInstance.count;
    }
  }, {
    key: "getFlashVer",
    value: function getFlashVer() {
      var ver = -1;

      if (util_nav.plugins && util_nav.mimeTypes.length) {
        var plugin = util_nav.plugins["Shockwave Flash"];

        if (plugin && plugin.description) {
          ver = plugin.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0";
        }
      } else if (window.ActiveXObject && !window.opera) {
        try {
          var c = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');

          if (c) {
            var version = c.GetVariable("$version");
            ver = version.replace(/WIN/g, '').replace(/,/g, '.');
          }
        } catch (e) {}
      }

      ver = parseInt(ver, 10);
      return ver;
    }
  }, {
    key: "getContainerId",
    value: function getContainerId(el) {
      var areaStr;
      var name;
      var maxLength = 100;

      if (configInstance.areaIds) {
        areaStr = new RegExp('^(' + configInstance.areaIds.join('|') + ')$', 'ig');
      }

      while (el) {
        //bk模式
        if (el.attributes && ('bk' in el.attributes || 'data-bk' in el.attributes)) {
          name = el.getAttribute('bk') || el.getAttribute('data-bk');

          if (name) {
            name = 'bk:' + name;
            return name.substr(0, maxLength);
          }

          if (el.id) {
            name = el.getAttribute('data-desc') || el.id;
            return name.substr(0, maxLength);
          }
        } else if (areaStr) {
          //setId模式
          if (el.id && areaStr.test(el.id)) {
            name = el.getAttribute('data-desc') || el.id;
            return name.substr(0, maxLength);
          }
        }

        el = el.parentNode;
      }

      return '';
    }
  }, {
    key: "getText",
    value: function getText(el) {
      var str = "";

      if (el.tagName.toLowerCase() == 'input') {
        str = el.getAttribute('text') || el.getAttribute('data-text') || el.value || el.title || '';
      } else {
        str = el.getAttribute('text') || el.getAttribute('data-text') || el.innerText || el.textContent || el.title || '';
      }

      return stringH_stringH.trim(str).substr(0, 100);
    }
  }, {
    key: "getHref",
    value: function getHref(el) {
      try {
        return el.getAttribute('data-href') || el.href || '';
      } catch (e) {
        return '';
      }
    }
  }]);

  return util;
}();


// CONCATENATED MODULE: ./src/eventH.js



var eventH_eventH = /*#__PURE__*/function () {
  function eventH() {
    classCallCheck_default()(this, eventH);
  }
  /**
   * Event相关方法
   * @type {Object}
   */


  createClass_default()(eventH, null, [{
    key: "fix",
    value: function fix(e) {
      if (!('target' in e)) {
        var node = e.srcElement || e.target;

        if (node && node.nodeType == 3) {
          node = node.parentNode;
        }

        e.target = node;
      }

      return e;
    }
  }]);

  return eventH;
}();


// CONCATENATED MODULE: ./src/nodeH.js
/* harmony default export */ var nodeH = ({
  on: function on(el, type, fn) {
    if (el.addEventListener) {
      el && el.addEventListener(type, fn, false);
    } else {
      el && el.attachEvent('on' + type, fn);
    }
  },
  parentNode: function parentNode(el, tagName, deep) {
    deep = deep || 5;
    tagName = tagName.toUpperCase();

    while (el && deep-- > 0) {
      if (el.tagName === tagName) {
        return el;
      }

      el = el.parentNode;
    }

    return null;
  }
});
// CONCATENATED MODULE: ./src/data.js







var data_data = /*#__PURE__*/function () {
  function data() {
    classCallCheck_default()(this, data);
  }

  createClass_default()(data, null, [{
    key: "test",
    value: function test() {
      return 'test data';
    }
  }, {
    key: "getBase",
    value: function getBase() {
      return {
        p: util_util.getProject(),
        u: util_util.getLocation(),
        id: util_util.getGuid(),
        guid: util_util.getGuid()
      };
    }
  }, {
    key: "getTrack",
    value: function getTrack(cookies) {
      var obj = {
        b: util_util.getBrowser(),
        c: util_util.getCount(),
        r: util_util.getReferrer(),
        fl: util_util.getFlashVer(),
        sd: util_util.getColorDepth(),
        sr: util_util.getScreenSize(),
        ul: util_util.getLanguage()
      }; //自定义要获取的 cookie

      if (cookies) {
        cookies = cookies.split(',');
        var cdata = [];

        for (var i = 0, length = cookies.length; i < length; i++) {
          var value = cookie_cookie.get(cookies[i]);
          cdata.push(cookies[i] + '=' + encodeURIComponent(value));
        }

        obj.uc = encodeURIComponent(cdata.join('&'));
      }

      return obj;
    }
  }, {
    key: "getClick",
    value: function getClick(e) {
      e = eventH_eventH.fix(e || event);
      var target = e.target;
      var tagName = target.tagName;
      var containerId = util_util.getContainerId(target);

      if (target.type && (target.type == 'submit' || target.type == 'button')) {
        var form = nodeH.parentNode(target, 'FORM');
        var result = {};

        if (form) {
          var formId = form.id || '';
          var tId = target.id;
          result = {
            f: form.action,
            c: 'form:' + (form.name || formId),
            cId: containerId
          };

          if ((formId == 'search-form' || formId == 'searchForm') && (tId == 'searchBtn' || tId == 'search-btn')) {
            var keywordEl = $('kw') || $('search-kw') || $('kw1');
            result.w = keywordEl ? keywordEl.value : '';
          }
        } else {
          result = {
            f: util_util.getHref(target),
            c: util_util.getText(target),
            cId: containerId
          };
        }

        return result;
      } else if (tagName == 'AREA') {
        return {
          f: util_util.getHref(target),
          c: 'area:' + target.parentNode.name,
          cId: containerId
        };
      } else {
        var img, text;

        if (tagName == 'IMG') {
          img = target;
        }

        target = nodeH.parentNode(target, 'A');
        if (!target) return false;
        text = util_util.getText(target);
        return {
          f: util_util.getHref(target),
          c: text ? text : img ? img.src.match(/[^\/]+$/) : '',
          cId: containerId
        };
      }

      return false;
    }
  }, {
    key: "getKeydown",
    value: function getKeydown(e) {
      e = eventH_eventH.fix(e || event);
      if (e.keyCode != 13) return false;
      var target = e.target;
      var tagName = target.tagName;
      var containerId = util_util.getContainerId(target);

      if (tagName == 'INPUT') {
        var form = nodeH.parentNode(target, 'FORM');

        if (form) {
          var formId = form.id || '';
          var tId = target.id;
          var result = {
            f: form.action,
            c: 'form:' + (form.name || formId),
            cId: containerId
          };

          if (tId == 'kw' || tId == 'search-kw' || tId == 'kw1') {
            result.w = target.value;
          }

          return result;
        }
      }

      return false;
    }
  }]);

  return data;
}();


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(2);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/objectH.js




var objectH_objectH = /*#__PURE__*/function () {
  function objectH() {
    classCallCheck_default()(this, objectH);
  }

  createClass_default()(objectH, null, [{
    key: "getConstructorName",
    value: function getConstructorName(o) {
      //加o.constructor是因为IE下的window和document
      if (o != null && o.constructor != null) {
        return Object.prototype.toString.call(o).slice(8, -1);
      } else {
        return '';
      }
    }
    /**
     * 判断一个变量是否Array对象
     * @param  {Object}  obj 目标变量
     * @return {Boolean}
     */

  }, {
    key: "isArray",
    value: function isArray(obj) {
      return this.getConstructorName(obj) == 'Array';
    }
    /**
     * 判断一个变量是否typeof object
     * @param  {Object}  obj 目标变量
     * @return {Boolean}
     */

  }, {
    key: "isObject",
    value: function isObject(obj) {
      return obj !== null && typeof_default()(obj) == 'object';
    }
    /**
     * 将源对象的属性并入到目标对象
     * @param  {Object} des      目标对象
     * @param  {Object} src      源对象，如果是数组，则依次并入
     * @param  {Boolean} override 是否覆盖已有属性
     * @return {Object}          des
     */

  }, {
    key: "mix",
    value: function mix(des, src, override) {
      for (var i in src) {
        //这里要加一个des[i]，是因为要照顾一些不可枚举的属性
        if (override || !(des[i] || i in des)) {
          des[i] = src[i];
        }
      }

      return des;
    }
    /**
     * 将Object序列化为key=val键值对字符串，不处理val为数组的情况]
     * @param  {Object} json 需要序列化的对象
     * @return {String}      序列化后的字符串
     */

  }, {
    key: "encodeURIJson",
    value: function encodeURIJson(obj) {
      var result = [];

      for (var p in obj) {
        if (obj[p] == null) {
          continue;
        }

        result.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }

      return result.join('&');
    }
  }]);

  return objectH;
}();


// CONCATENATED MODULE: ./src/log.js




var lastLogParams = '';
window.__qihoo_monitor_imgs = {};

var log_log = /*#__PURE__*/function () {
  function log() {
    classCallCheck_default()(this, log);
  }

  createClass_default()(log, null, [{
    key: "buildLog",
    value: function buildLog(params, url) {
      if (params === false) {
        return;
      }

      params = params || {};
      var baseParams = data_data.getBase();
      params = objectH_objectH.mix(baseParams, params, true);
      var logParams = url + objectH_objectH.encodeURIJson(params);

      if (logParams == lastLogParams) {
        return;
      }

      lastLogParams = logParams;
      setTimeout(function () {
        //100ms后允许发相同数据
        lastLogParams = '';
      }, 100);
      var sendParams = objectH_objectH.encodeURIJson(params);
      sendParams += '&t=' + +new Date(); //加上时间戳，防止缓存

      url = url.indexOf('?') > -1 ? url + '&' + sendParams : url + '?' + sendParams;
      return url;
    }
  }, {
    key: "sendLog",
    value: function sendLog(url) {
      var id = 'log_' + +new Date();
      var img = window['__qihoo_monitor_imgs'][id] = new Image();

      img.onload = img.onerror = function () {
        if (window.__qihoo_monitor_imgs && window['__qihoo_monitor_imgs'][id]) {
          window['__qihoo_monitor_imgs'][id] = null;
          delete window["__qihoo_monitor_imgs"][id];
        }
      };

      img.src = url;
    }
  }]);

  return log;
}();


// CONCATENATED MODULE: ./src/monitor.js








var monitor_configInstance = config_config.Instance();
var monitor_doc = document;
var monitor_nav = navigator;

var monitor_Monitor = /*#__PURE__*/function () {
  function Monitor() {
    classCallCheck_default()(this, Monitor);
  }

  createClass_default()(Monitor, [{
    key: "test",
    value: function test() {
      return 'test monitor';
    }
  }, {
    key: "version",
    value: function version() {
      return 'version v1.0.0';
    }
  }, {
    key: "util",
    value: function util() {
      return util_util;
    }
  }, {
    key: "data",
    value: function data() {
      return data_data;
    }
  }, {
    key: "config",
    value: function config() {
      return monitor_configInstance;
    }
  }, {
    key: "sendLog",
    value: function sendLog(url) {
      log_log.sendLog(url);
    }
  }, {
    key: "buildLog",
    value: function buildLog(params, url) {
      console.log('buildLog...', params, url);
      var requestUrl = log_log.buildLog(params, url);
      this.sendLog(requestUrl);
    }
  }, {
    key: "log",
    value: function log(params, type) {
      type = type || 'click';
      var url = this.config()[type + 'Url'];

      if (!url) {
        alert('Error : the ' + type + 'url does not exist!');
      }

      this.buildLog(params, url);
    }
  }, {
    key: "setConf",
    value: function setConf(key, val) {
      var newConfig = {};

      if (!objectH_objectH.isObject(key)) {
        newConfig[key] = val;
      } else {
        newConfig = key;
      }

      this.config().set(objectH_objectH.mix(this.config(), newConfig, true));
      return this;
    }
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      if (url) {
        this.util().getLocation = function () {
          return url;
        };
      }

      return this;
    }
  }, {
    key: "setProject",
    value: function setProject(prj) {
      if (prj) {
        this.util().getProject = function () {
          return prj;
        };
      }

      return this;
    }
  }, {
    key: "setId",
    value: function setId() {
      var areaIds = [];
      var i = 0;
      var argument;

      while (argument = arguments[i++]) {
        if (!objectH_objectH.isArray(argument)) {
          areaIds.push(argument);
        } else {
          areaIds = areaIds.concat(argument);
        }
      }

      this.setConf('areaIds', areaIds);
      return this;
    }
  }, {
    key: "getTrack",
    value: function getTrack(cookies) {
      // var params = this.data.getTrack(cookies);
      // this.log(params, 'track');
      // return this;
      throw new Error('Todo: getTrack');
    }
    /**
     * 热力图
     * @param {*} times 
     * @param {*} minutes 
     */

  }, {
    key: "getClickHeatmap",
    value: function getClickHeatmap(times, minutes) {
      throw new Error('Todo: getClickHeatmap');
    }
  }, {
    key: "getClickAndKeydown",
    value: function getClickAndKeydown() {
      var that = this;
      nodeH.on(monitor_doc, 'mousedown', function (e) {
        var params = that.data().getClick(e);
        that.log(params, 'click');
      }); // NodeH.on(doc, 'keydown', function(e) {
      //   let params = that.data.getKeydown(e);
      //   that.log(params, 'click');
      // });

      return this;
    }
  }], [{
    key: "Instance",
    value: function Instance() {
      if (!this._instance) {
        this._instance = new Monitor();
      }

      return this._instance;
    }
  }]);

  return Monitor;
}();


// CONCATENATED MODULE: ./src/index.js




var src_MonitorNew = /*#__PURE__*/function () {
  function MonitorNew() {
    classCallCheck_default()(this, MonitorNew);
  }

  createClass_default()(MonitorNew, null, [{
    key: "Instance",
    value: function Instance() {
      if (!this._instance) {
        this._instance = monitor_Monitor.Instance();
      }

      return this._instance;
    }
  }, {
    key: "test",
    value: function test() {
      return 'test123';
    }
  }]);

  return MonitorNew;
}();



/***/ })
/******/ ])["default"];
});