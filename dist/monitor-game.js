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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

var _typeof2 = _interopRequireDefault(__webpack_require__(10));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _eventH = _interopRequireDefault(__webpack_require__(11));

var _nodeH = _interopRequireDefault(__webpack_require__(5));

var _element = _interopRequireDefault(__webpack_require__(12));

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
    // 发送打点信息时传递的基础参数
    this._baseData = {};
  }

  (0, _createClass2["default"])(data, [{
    key: "setBaseData",
    value: function setBaseData(params) {
      var type = (0, _typeof2["default"])(params);

      if (type !== 'function' && type !== 'object') {
        console.error('参数类型错误，应该对象或方法。');
      }

      this._baseData = params;
    }
  }, {
    key: "getBaseData",
    value: function getBaseData() {
      if (typeof this._baseData === 'function') {
        return this._baseData();
      }

      return this._baseData;
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

      var containerId = _element["default"].getContainerId(target);

      if (target.type && (target.type == 'submit' || target.type == 'button')) {
        var form = _nodeH["default"].parentNode(target, 'FORM');

        var result = {};

        if (form) {
          var formId = form.id || '';
          var tId = target.id;
          result = {
            // f : form.action,
            // c : 'form:' + (form.name || formId),
            event_key: containerId
          };

          if ((formId == 'search-form' || formId == 'searchForm') && (tId == 'searchBtn' || tId == 'search-btn')) {
            var keywordEl = $('kw') || $('search-kw') || $('kw1');
            result.w = keywordEl ? keywordEl.value : '';
          }
        } else {
          result = {
            // f : util.getHref(target),
            // c : util.getText(target),
            event_key: containerId
          };
        }

        return result;
      } else if (tagName == 'AREA') {
        return {
          // f : util.getHref(target),
          // c : 'area:' + target.parentNode.name,
          event_key: containerId
        };
      } else {
        var img, text;

        if (tagName == 'IMG') {
          img = target;
        }

        target = _nodeH["default"].parentNode(target, 'A');
        if (!target) return false;
        text = _element["default"].getText(target);
        return {
          // f : util.getHref(target),
          // c : text ? text : (img ? img.src.match(/[^\/]+$/) : ''),
          event_key: containerId
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

      var containerId = _element["default"].getContainerId(target);

      if (tagName == 'INPUT') {
        var form = _nodeH["default"].parentNode(target, 'FORM');

        if (form) {
          var formId = form.id || '';
          var tId = target.id;
          var result = {
            // f : form.action,
            // c : 'form:' + (form.name || formId),
            event_key: containerId
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

var _default = data.Instance;
exports["default"] = _default;

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
 * @description: 配置相关参数
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
    // 服务端接收数据的url
    this._serviceUrl = null; // 项目的标识

    this._projectId = null; // 即data-key里的key

    this._dataKey = 'wk';
  }

  (0, _createClass2["default"])(config, [{
    key: "getServiceUrl",
    value: function getServiceUrl() {
      return this._serviceUrl;
    }
  }, {
    key: "setServiceUrl",
    value: function setServiceUrl(url) {
      this._serviceUrl = url;
    }
  }, {
    key: "setDataKey",
    value: function setDataKey(id) {
      this._dataKey = id;
    }
  }, {
    key: "getDataKey",
    value: function getDataKey() {
      return this._dataKey;
    }
  }]);
  return config;
}();

var _default = config.Instance;
exports["default"] = _default;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(8);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var origDefineProperty = Object.defineProperty;

var arePropertyDescriptorsSupported = function() {
  var obj = {};
  try {
    origDefineProperty(obj, "x", { enumerable: false, value: obj });
    for (var _ in obj) {
      return false;
    }
    return obj.x === obj;
  } catch (e) {
    /* this is IE 8. */
    return false;
  }
};
var supportsDescriptors =
  origDefineProperty && arePropertyDescriptorsSupported();

if (!supportsDescriptors) {
  Object.defineProperty = function(a, b, c) {
    //IE8支持修改元素节点的属性
    if (origDefineProperty && a.nodeType == 1) {
      return origDefineProperty(a, b, c);
    } else {
      a[b] = c.value || (c.get && c.get());
    }
  };
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _monitor = _interopRequireDefault(__webpack_require__(9));

var _data = _interopRequireDefault(__webpack_require__(3));

/**
 * @author: liuyang9
 * @description: monitor的api
 */
var _default = {
  // 获取版本号
  version: _monitor["default"].version,
  // 设置项目标识
  setProjectId: _monitor["default"].setProjectId,
  // 设置服务端url
  setServiceUrl: _monitor["default"].setServiceUrl,
  // 监听单击事件的数据采集
  getClickAndKeydown: _monitor["default"].getClickAndKeydown,
  // 发送打点信息
  send: _monitor["default"].send,
  setBaseLogParams: _monitor["default"].setBaseLogParams,
  getCurrentTime: _data["default"].getCurrentTime
};
exports["default"] = _default;

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

var _data = _interopRequireDefault(__webpack_require__(3));

var _nodeH = _interopRequireDefault(__webpack_require__(5));

var _config = _interopRequireDefault(__webpack_require__(4));

var _log = _interopRequireDefault(__webpack_require__(14));

/**
 * @author: liuyang9
 * @description: 新版打点
 */
var Monitor = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Monitor, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new Monitor();
      }

      return this._instance;
    }
  }]);

  function Monitor() {
    (0, _classCallCheck2["default"])(this, Monitor);
  }

  (0, _createClass2["default"])(Monitor, [{
    key: "setProjectId",
    // 设置项目标识
    value: function setProjectId(id) {
      if (id) {
        _config["default"].setProjectId(id);
      }

      return this;
    } // 设置数据发送到的url

  }, {
    key: "setServiceUrl",
    value: function setServiceUrl(url) {
      _config["default"].setServiceUrl(url);

      return this;
    } // 收集点击时的数据

  }, {
    key: "getClickAndKeydown",
    value: function getClickAndKeydown() {
      _nodeH["default"].on(document, 'mousedown', function (e) {
        var params = _data["default"].getClickData(e);

        _log["default"].send(params);
      });

      _nodeH["default"].on(document, 'keydown', function (e) {
        var params = _data["default"].getKeydownData(e);

        _log["default"].send(params);
      });

      return this;
    } // 开放单独发送打点信息

  }, {
    key: "send",
    value: function send(params) {
      _log["default"].send(params);

      return this;
    }
  }, {
    key: "setBaseLogParams",
    value: function setBaseLogParams(params) {
      _data["default"].setBaseData(params);

      return this;
    }
  }, {
    key: "version",
    get: function get() {
      return 'v1.0.0';
    }
  }]);
  return Monitor;
}();

var _default = Monitor.Instance;
exports["default"] = _default;

/***/ }),
/* 10 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(__webpack_require__(4));

var _stringH = _interopRequireDefault(__webpack_require__(13));

function getContainerId(el) {
  var areaStr;
  var name;
  var maxLength = 100;

  if (_config["default"].areaIds) {
    areaStr = new RegExp('^(' + _config["default"].areaIds.join('|') + ')$', 'ig');
  }

  var dataKey = _config["default"].getDataKey();

  while (el) {
    //bk模式
    if (el.attributes && (dataKey in el.attributes || "data-".concat(dataKey) in el.attributes)) {
      name = el.getAttribute(dataKey) || el.getAttribute("data-".concat(dataKey));

      if (name) {
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

function getText(el) {
  var str = "";

  if (el.tagName.toLowerCase() == 'input') {
    str = el.getAttribute('text') || el.getAttribute('data-text') || el.value || el.title || '';
  } else {
    str = el.getAttribute('text') || el.getAttribute('data-text') || el.innerText || el.textContent || el.title || '';
  }

  return _stringH["default"].trim(str).substr(0, 100);
}

var _default = {
  getContainerId: getContainerId,
  getText: getText
};
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(15));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _data = _interopRequireDefault(__webpack_require__(3));

var _config = _interopRequireDefault(__webpack_require__(4));

var _paramsHelper = _interopRequireDefault(__webpack_require__(16));

/**
 * @author: liuyang9
 * @description: 发送采集到的数据
 */
var log = /*#__PURE__*/function () {
  (0, _createClass2["default"])(log, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new log();
      }

      return this._instance;
    }
  }]);

  function log() {
    (0, _classCallCheck2["default"])(this, log);
    this.lastLogParams = '';
    window.__monitor_game_imgs = {};
  }

  (0, _createClass2["default"])(log, [{
    key: "send",
    value: function send(params) {
      if (!this.validateParams(params)) {
        return;
      }

      var extendedParams = this.extendParams(params);
      var url = this.generateUrl(extendedParams);
      this.sendLog(url);
    } // 根据打点参数信息

  }, {
    key: "generateUrl",
    value: function generateUrl(params) {
      var serviceUrl = _config["default"].getServiceUrl();

      var encodeParams = _paramsHelper["default"].encodeParams(params); // 加上时间戳，防止缓存


      encodeParams += '&t=' + +new Date();
      var linkChart = serviceUrl.indexOf('?') > -1 ? '&' : '?';
      var url = "".concat(serviceUrl).concat(linkChart).concat(encodeParams);
      return url;
    } // 扩展参数

  }, {
    key: "extendParams",
    value: function extendParams(params) {
      var otherParams = _data["default"].getBaseData();

      return (0, _extends2["default"])(otherParams, params);
    } // 验证参数的有效性

  }, {
    key: "validateParams",
    value: function validateParams(params) {
      var _this = this;

      var serviceUrl = _config["default"].getServiceUrl();

      var logParams = _paramsHelper["default"].encodeParams(params);

      if (!serviceUrl) {
        alert('Error : the service url does not exist!');
        return false;
      }

      if (!params) {
        return false;
      }

      if (logParams === this.lastLogParams) {
        return false;
      }

      this.lastLogParams = logParams; //100ms后允许发相同数据

      setTimeout(function () {
        _this.lastLogParams = '';
      }, 100);
      return true;
    }
  }, {
    key: "sendLog",
    value: function sendLog(url) {
      var id = 'log_' + +new Date();
      var img = window['__monitor_game_imgs'][id] = new Image();

      img.onload = img.onerror = function () {
        if (window.__monitor_game_imgs && window['__monitor_game_imgs'][id]) {
          window['__monitor_game_imgs'][id] = null;
          delete window["__monitor_game_imgs"][id];
        }
      };

      img.src = url;
    }
  }]);
  return log;
}();

var _default = log.Instance;
exports["default"] = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var paramsHelper = /*#__PURE__*/function () {
  function paramsHelper() {
    (0, _classCallCheck2["default"])(this, paramsHelper);
  }

  (0, _createClass2["default"])(paramsHelper, [{
    key: "encodeParams",

    /**
     * 将Object序列化为key=val键值对字符串，不处理val为数组的情况]
     * @param  {Object} json 需要序列化的对象
     * @return {String}      序列化后的字符串
     */
    value: function encodeParams(obj) {
      var result = [];

      for (var key in obj) {
        if (obj[key] == null) {
          continue;
        }

        result.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }

      return result.join('&');
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new paramsHelper();
      }

      return this._instance;
    }
  }]);
  return paramsHelper;
}();

var _default = paramsHelper.Instance;
exports["default"] = _default;

/***/ })
/******/ ])["default"];
});