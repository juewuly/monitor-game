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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _guid = _interopRequireDefault(__webpack_require__(10));

var _count = _interopRequireDefault(__webpack_require__(13));

var _config = _interopRequireDefault(__webpack_require__(4));

var _stringH = _interopRequireDefault(__webpack_require__(14));

var guidInstance = _guid["default"].Instance;
var countInstance = _count["default"].Instance;
var configInstance = _config["default"].Instance;
var doc = document;
var nav = navigator;
var screen = window.screen;
var ua = nav.userAgent.toLowerCase();

var util = /*#__PURE__*/function () {
  function util() {
    (0, _classCallCheck2["default"])(this, util);
  }

  (0, _createClass2["default"])(util, null, [{
    key: "test",
    value: function test() {
      return 'test util';
    }
  }, {
    key: "getColorDepth",
    value: function getColorDepth() {
      return screen.colorDepth + '-bit';
    }
    /**
     * 获取语言
     * @return {[type]} [description]
     */

  }, {
    key: "getLanguage",
    value: function getLanguage() {
      return (nav.language || nav.browserLanguage).toLowerCase();
    }
    /**
     * 获取屏幕大小
     * @return {[type]} [description]
     */

  }, {
    key: "getScreenSize",
    value: function getScreenSize() {
      return screen.width + 'x' + screen.height;
    }
  }, {
    key: "getProject",
    value: function getProject() {
      return '';
    }
  }, {
    key: "getReferrer",
    value: function getReferrer() {
      var ref = doc.referrer || '';

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
        if (ua.indexOf(browsers[i]) > -1) {
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

      var result = ua.match(/(msie|chrome|safari|firefox|opera|trident)/);
      result = result ? result[0] : '';

      if (result == 'msie') {
        result = ua.match(/msie[^;]+/) + '';
      } else if (result == 'trident') {
        ua.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/ig, function (a, c) {
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
        url = doc.createElement('a');
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

      if (nav.plugins && nav.mimeTypes.length) {
        var plugin = nav.plugins["Shockwave Flash"];

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

      return _stringH["default"].trim(str).substr(0, 100);
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

exports["default"] = util;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

/**
 * @author: liuyang9
 * @description: 配置相关数据发送的url
 */
var config = /*#__PURE__*/function () {
  (0, _createClass2["default"])(config, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new config();
      }

      return this._instance;
    }
  }]);

  function config() {
    (0, _classCallCheck2["default"])(this, config);
    this._serviceUrl = null;
  }

  (0, _createClass2["default"])(config, [{
    key: "setServiceUrl",
    value: function setServiceUrl(value) {
      this._serviceUrl = value;
    }
  }, {
    key: "serviceUrl",
    get: function get() {
      return this._serviceUrl;
    }
  }]);
  return config;
}();

exports["default"] = config;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _util = _interopRequireDefault(__webpack_require__(3));

var _eventH = _interopRequireDefault(__webpack_require__(15));

var _nodeH = _interopRequireDefault(__webpack_require__(6));

var data = /*#__PURE__*/function () {
  (0, _createClass2["default"])(data, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new data();
      }

      return this._instance;
    }
  }]);

  function data() {
    (0, _classCallCheck2["default"])(this, data);
  }

  (0, _createClass2["default"])(data, [{
    key: "getBaseData",
    value: function getBaseData() {
      return {
        p: _util["default"].getProject(),
        u: _util["default"].getLocation(),
        id: _util["default"].getGuid(),
        guid: _util["default"].getGuid(),
        case_key: _util["default"].getProject(),
        biz_plat: 'term',
        log_name: 'custom_event',
        log_src: 'client',
        time_str: this.getCurrentTime(),
        browser_mid: '',
        event_key: 'click'
      };
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var dtCur = new Date();
      var yearCur = dtCur.getFullYear();
      var monCur = dtCur.getMonth() + 1;
      var dayCur = dtCur.getDate();
      var hCur = dtCur.getHours();
      var mCur = dtCur.getMinutes();
      var sCur = dtCur.getSeconds();
      var timeCur = yearCur + "-" + (monCur < 10 ? "0" + monCur : monCur) + "-" + (dayCur < 10 ? "0" + dayCur : dayCur) + " " + (hCur < 10 ? "0" + hCur : hCur) + ":" + (mCur < 10 ? "0" + mCur : mCur) + ":" + (sCur < 10 ? "0" + sCur : sCur);
      return timeCur;
    }
  }, {
    key: "getClickData",
    value: function getClickData(e) {
      e = _eventH["default"].fix(e || event);
      var target = e.target;
      var tagName = target.tagName;

      var containerId = _util["default"].getContainerId(target);

      if (target.type && (target.type == 'submit' || target.type == 'button')) {
        var form = _nodeH["default"].parentNode(target, 'FORM');

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
            f: _util["default"].getHref(target),
            c: _util["default"].getText(target),
            cId: containerId
          };
        }

        return result;
      } else if (tagName == 'AREA') {
        return {
          f: _util["default"].getHref(target),
          c: 'area:' + target.parentNode.name,
          cId: containerId
        };
      } else {
        var img, text;

        if (tagName == 'IMG') {
          img = target;
        }

        target = _nodeH["default"].parentNode(target, 'A');
        if (!target) return false;
        text = _util["default"].getText(target);
        return {
          f: _util["default"].getHref(target),
          c: text ? text : img ? img.src.match(/[^\/]+$/) : '',
          cId: containerId
        };
      }

      return false;
    }
  }, {
    key: "getKeydownData",
    value: function getKeydownData(e) {
      e = _eventH["default"].fix(e || event);
      if (e.keyCode != 13) return false;
      var target = e.target;
      var tagName = target.tagName;

      var containerId = _util["default"].getContainerId(target);

      if (tagName == 'INPUT') {
        var form = _nodeH["default"].parentNode(target, 'FORM');

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

exports["default"] = data;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
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
};
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(16));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var objectH = /*#__PURE__*/function () {
  function objectH() {
    (0, _classCallCheck2["default"])(this, objectH);
  }

  (0, _createClass2["default"])(objectH, null, [{
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
      return obj !== null && (0, _typeof2["default"])(obj) == 'object';
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

exports["default"] = objectH;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _monitor = _interopRequireDefault(__webpack_require__(9));

var MonitorNew = /*#__PURE__*/function () {
  function MonitorNew() {
    (0, _classCallCheck2["default"])(this, MonitorNew);
  }

  (0, _createClass2["default"])(MonitorNew, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = _monitor["default"].Instance;
      }

      return this._instance;
    }
  }]);
  return MonitorNew;
}();

exports["default"] = MonitorNew;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _util2 = _interopRequireDefault(__webpack_require__(3));

var _data = _interopRequireDefault(__webpack_require__(5));

var _objectH = _interopRequireDefault(__webpack_require__(7));

var _nodeH = _interopRequireDefault(__webpack_require__(6));

var _config = _interopRequireDefault(__webpack_require__(4));

var _log = _interopRequireDefault(__webpack_require__(17));

var configInstance = _config["default"].Instance;
var dataInstance = _data["default"].Instance;
var doc = document;

var Monitor = /*#__PURE__*/function () {
  function Monitor() {
    (0, _classCallCheck2["default"])(this, Monitor);
  }

  (0, _createClass2["default"])(Monitor, [{
    key: "util",
    value: function util() {
      return _util2["default"];
    }
  }, {
    key: "sendLog",
    value: function sendLog(url) {
      _log["default"].sendLog(url);
    }
  }, {
    key: "buildLog",
    value: function buildLog(params, url) {
      console.log('buildLog...', params, url);

      if (params === false) {
        return;
      }

      var requestUrl = _log["default"].buildLog(params, url);

      this.sendLog(requestUrl);
    }
  }, {
    key: "log",
    value: function log(params) {
      var url = configInstance.serviceUrl;

      if (!url) {
        alert('Error : the service url does not exist!');
      }

      this.buildLog(params, url);
    } // 设置项目标识

  }, {
    key: "setProject",
    value: function setProject(prj) {
      if (prj) {
        this.util().getProject = function () {
          return prj;
        };
      }

      return this;
    } // 设置数据发送到的url

  }, {
    key: "setServiceUrl",
    value: function setServiceUrl(url) {
      configInstance.setServiceUrl(url);
      return this;
    }
  }, {
    key: "setId",
    value: function setId() {
      var areaIds = [];
      var i = 0;
      var argument;

      while (argument = arguments[i++]) {
        if (!_objectH["default"].isArray(argument)) {
          areaIds.push(argument);
        } else {
          areaIds = areaIds.concat(argument);
        }
      }

      this.setConf('areaIds', areaIds);
      return this;
    }
  }, {
    key: "getClickAndKeydown",
    value: function getClickAndKeydown() {
      var that = this;

      _nodeH["default"].on(doc, 'mousedown', function (e) {
        var params = dataInstance.getClickData(e);
        that.log(params, 'click');
      });

      _nodeH["default"].on(doc, 'keydown', function (e) {
        var params = dataInstance.getKeydownData(e);
        that.log(params, 'click');
      });

      return this;
    }
  }, {
    key: "version",
    get: function get() {
      return 'version v1.0.0';
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new Monitor();
      }

      return this._instance;
    }
  }]);
  return Monitor;
}();

exports["default"] = Monitor;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _cookie = _interopRequireDefault(__webpack_require__(11));

var _local = _interopRequireDefault(__webpack_require__(12));

var doc = document;
var nav = navigator;
var screen = window.screen;
var domain = _local["default"] ? '' : document.domain.toLowerCase();
var ua = nav.userAgent.toLowerCase();
var guidCookieDomains = ['360.cn', 'so.com', 'leidian.com'];

var guid = /*#__PURE__*/function () {
  function guid() {
    (0, _classCallCheck2["default"])(this, guid);
  }

  (0, _createClass2["default"])(guid, [{
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
    key: "getGuid",
    value: function getGuid() {
      var guidKey = '__guid';

      var id = _cookie["default"].get(guidKey);

      if (!id) {
        id = [this.hash(_local["default"] ? '' : doc.domain), this.guid(), +new Date() + Math.random() + Math.random()].join('.');
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

        _cookie["default"].set(guidKey, id, config);
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
  }, {
    key: "guid",
    get: function get() {
      var s = [nav.appName, nav.version, nav.language || nav.browserLanguage, nav.platform, nav.userAgent, screen.width, 'x', screen.height, screen.colorDepth, doc.referrer].join("");
      var sLen = s.length;
      var hLen = window.history.length;

      while (hLen) {
        s += hLen-- ^ sLen++;
      }

      return (Math.round(Math.random() * 2147483647) ^ this.hash(s)) * 2147483647;
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new guid();
      }

      return this._instance;
    }
  }]);
  return guid;
}();

exports["default"] = guid;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var doc = document;

var cookie = /*#__PURE__*/function () {
  function cookie() {
    (0, _classCallCheck2["default"])(this, cookie);
  }

  (0, _createClass2["default"])(cookie, null, [{
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

exports["default"] = cookie;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var isLocal; //有时候monitor.js会在file://或者res://协议下使用，判断下

isLocal = true;

try {
  var protocol = location.protocol.toLowerCase();

  if (protocol == 'http:' || protocol == 'https:') {
    isLocal = false;
  }
} catch (e) {}

var _default = isLocal;
exports["default"] = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var count = /*#__PURE__*/function () {
  function count() {
    (0, _classCallCheck2["default"])(this, count);
  }

  (0, _createClass2["default"])(count, [{
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

exports["default"] = count;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var stringH = /*#__PURE__*/function () {
  function stringH() {
    (0, _classCallCheck2["default"])(this, stringH);
  }

  (0, _createClass2["default"])(stringH, null, [{
    key: "trim",
    value: function trim(s) {
      return s.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "");
    }
  }]);
  return stringH;
}();

exports["default"] = stringH;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var eventH = /*#__PURE__*/function () {
  function eventH() {
    (0, _classCallCheck2["default"])(this, eventH);
  }
  /**
   * Event相关方法
   * @type {Object}
   */


  (0, _createClass2["default"])(eventH, null, [{
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

exports["default"] = eventH;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _objectH = _interopRequireDefault(__webpack_require__(7));

var _data = _interopRequireDefault(__webpack_require__(5));

var dataInstance = _data["default"].Instance;
var lastLogParams = '';
window.__qihoo_monitor_imgs = {};

var log = /*#__PURE__*/function () {
  function log() {
    (0, _classCallCheck2["default"])(this, log);
  }

  (0, _createClass2["default"])(log, null, [{
    key: "buildLog",
    value: function buildLog(params, url) {
      if (params === false) {
        return;
      }

      params = params || {};
      var baseParams = dataInstance.getBaseData();
      console.log('baseParams...', baseParams);
      params = _objectH["default"].mix(baseParams, params, true);

      var logParams = url + _objectH["default"].encodeURIJson(params);

      if (logParams == lastLogParams) {
        return;
      }

      lastLogParams = logParams;
      setTimeout(function () {
        //100ms后允许发相同数据
        lastLogParams = '';
      }, 100);

      var sendParams = _objectH["default"].encodeURIJson(params);

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

exports["default"] = log;

/***/ })
/******/ ])["default"];
});