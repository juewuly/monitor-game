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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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

var _typeof2 = _interopRequireDefault(__webpack_require__(12));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _eventHelper = _interopRequireDefault(__webpack_require__(13));

var _elementHelper = _interopRequireDefault(__webpack_require__(14));

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
      e = _eventHelper["default"].fix(e);
      return _elementHelper["default"].getMetricData(e.target);
    }
  }, {
    key: "getKeydownData",
    value: function getKeydownData(e) {
      e = _eventHelper["default"].fix(e);

      if (e.keyCode != 13) {
        return false;
      }

      return _elementHelper["default"].getMetricData(e.target);
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
    // 打点指标在html标签中的属性名称
    this._metricAttributeName = 'data-wk'; // 设置打点指标的参数名

    this._metricParamName = 'metric';
  }

  (0, _createClass2["default"])(config, [{
    key: "setMetricAttributeName",
    value: function setMetricAttributeName(name) {
      this._metricAttributeName = name;
    }
  }, {
    key: "getMetricAttributeName",
    value: function getMetricAttributeName() {
      return this._metricAttributeName;
    }
  }, {
    key: "setMetricParamName",
    value: function setMetricParamName(name) {
      this._metricParamName = name;
    }
  }, {
    key: "getMetricParamName",
    value: function getMetricParamName() {
      return this._metricParamName;
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


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _urlType = _interopRequireDefault(__webpack_require__(6));

var urlConfig = /*#__PURE__*/function () {
  (0, _createClass2["default"])(urlConfig, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new urlConfig();
      }

      return this._instance;
    }
  }]);

  function urlConfig() {
    (0, _classCallCheck2["default"])(this, urlConfig);
    this._urlObj = {};
  }

  (0, _createClass2["default"])(urlConfig, [{
    key: "getUrl",
    value: function getUrl(type) {
      if (!_urlType["default"][type]) {
        return false;
      }

      return this._urlObj[type];
    }
  }, {
    key: "configUrl",
    value: function configUrl(urlObj) {
      this._urlObj = urlObj;
    }
  }]);
  return urlConfig;
}();

var _default = urlConfig.Instance;
exports["default"] = _default;

/***/ }),
/* 6 */
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
 * 配置的url类型
 */
var urlType = /*#__PURE__*/function () {
  function urlType() {
    (0, _classCallCheck2["default"])(this, urlType);
  }

  (0, _createClass2["default"])(urlType, [{
    key: "click",
    get: function get() {
      return 'click';
    }
  }, {
    key: "clickHeatMap",
    get: function get() {
      return 'clickHeatMap';
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new urlType();
      }

      return this._instance;
    }
  }]);
  return urlType;
}();

var _default = urlType.Instance;
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _monitor = _interopRequireDefault(__webpack_require__(10));

var _data = _interopRequireDefault(__webpack_require__(3));

/**
 * @author: liuyang9
 * @description: 打点sdk的api
 */
var _default = {
  // 获取版本号
  version: _monitor["default"].version,
  // 监听单击事件的数据采集
  getClickAndKeydown: _monitor["default"].getClickAndKeydown,
  // 热力图的数据采集
  getClickHeatmap: _monitor["default"].getClickHeatmap,
  // 发送打点信息
  send: _monitor["default"].send,
  // 设置发送打点时的基础参数(可为对象或函数，如果为函数，则附加参数为函数的返回值)
  setBaseLogData: _monitor["default"].setBaseLogData,
  // 获取当前时间
  getCurrentTime: _data["default"].getCurrentTime,
  // 设置打点指标在html标签中的属性名
  setMetricAttributeName: _monitor["default"].setMetricAttributeName,
  // 设置打点指标在发送给服务端时的参数名
  setMetricParamName: _monitor["default"].setMetricParamName,
  // 配置url
  configUrl: _monitor["default"].configUrl
};
exports["default"] = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(11));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _data = _interopRequireDefault(__webpack_require__(3));

var _config = _interopRequireDefault(__webpack_require__(4));

var _urlConfig = _interopRequireDefault(__webpack_require__(5));

var _urlType = _interopRequireDefault(__webpack_require__(6));

var _log = _interopRequireDefault(__webpack_require__(15));

var _nodeHelper = _interopRequireDefault(__webpack_require__(18));

/**
 * @author: liuyang9
 * @description: 打点sdk
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
    key: "getClickAndKeydown",
    // 收集点击时的数据
    value: function getClickAndKeydown() {
      _nodeHelper["default"].on(document, 'mousedown', function (e) {
        var metricData = _data["default"].getClickData(e);

        if (metricData) {
          _log["default"].send((0, _defineProperty2["default"])({}, _config["default"].getMetricParamName(), metricData), _urlType["default"].click);
        }
      });

      _nodeHelper["default"].on(document, 'keydown', function (e) {
        var metricData = _data["default"].getKeydownData(e);

        if (metricData) {
          _log["default"].send((0, _defineProperty2["default"])({}, _config["default"].getMetricParamName(), metricData), _urlType["default"].click);
        }
      });

      return this;
    } // 热力图打点

  }, {
    key: "getClickHeatmap",
    value: function getClickHeatmap() {
      var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var minutes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
      var positions = [];
      var logTimer = 0;

      var detectSend = function detectSend(ifForceSend) {
        clearTimeout(logTimer);

        if (ifForceSend || positions.length > times) {
          _log["default"].send({
            positions: positions.join(','),
            screenSize: "".concat(screen.width, "x").concat(screen.height)
          }, _urlType["default"].clickHeatMap);

          positions = [];
          return;
        }

        logTimer = setTimeout(function () {
          detectSend(true);
        }, minutes * 60 * 1000);
      };

      _nodeHelper["default"].on(document, 'mousedown', function (e) {
        var pos = e.pageX || e.x + '.' + e.pageY || e.y;
        positions.push(pos);
        detectSend();
      });

      return this;
    } // 开放单独发送打点信息

  }, {
    key: "send",
    value: function send(params) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _urlType["default"].click;

      _log["default"].send(params, type);

      return this;
    }
    /**
     * 设置发送打点时的基础参数(可为对象或函数，如果为函数，则附加参数为函数的返回值)
     * @param {Object || Function} params 
     */

  }, {
    key: "setBaseLogData",
    value: function setBaseLogData(params) {
      _data["default"].setBaseData(params);

      return this;
    } // 设置打点指标在html标签中的属性名

  }, {
    key: "setMetricAttributeName",
    value: function setMetricAttributeName(name) {
      _config["default"].setMetricAttributeName(name);

      return this;
    } // 设置打点指标在发送给服务端时的参数名

  }, {
    key: "setMetricParamName",
    value: function setMetricParamName(name) {
      _config["default"].setMetricParamName(name);

      return this;
    } // 配置url

  }, {
    key: "configUrl",
    value: function configUrl(urlObj) {
      _urlConfig["default"].configUrl(urlObj);

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
/* 11 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 12 */
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

var eventHelper = /*#__PURE__*/function () {
  function eventHelper() {
    (0, _classCallCheck2["default"])(this, eventHelper);
  }

  (0, _createClass2["default"])(eventHelper, [{
    key: "fix",
    // 兼容ie8
    value: function fix(e) {
      if (!('target' in e)) {
        var node = e.srcElement;

        if (node && node.nodeType == 3) {
          node = node.parentNode;
        }

        e.target = node;
      }

      return e;
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new eventHelper();
      }

      return this._instance;
    }
  }]);
  return eventHelper;
}();

var _default = eventHelper.Instance;
exports["default"] = _default;

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

var _config = _interopRequireDefault(__webpack_require__(4));

var elementHelper = /*#__PURE__*/function () {
  (0, _createClass2["default"])(elementHelper, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new elementHelper();
      }

      return this._instance;
    }
  }]);

  function elementHelper() {
    (0, _classCallCheck2["default"])(this, elementHelper);
    // 埋点信息的最大长度
    this._maxLength = 100;
  }

  (0, _createClass2["default"])(elementHelper, [{
    key: "getMetricData",
    value: function getMetricData(element) {
      var attributeName = _config["default"].getMetricAttributeName();

      var result = '';

      while (element) {
        if (element.attributes && (attributeName in element.attributes || "data-".concat(attributeName) in element.attributes)) {
          result = element.getAttribute(attributeName) || element.getAttribute("data-".concat(attributeName));
          return result.substr(0, this._maxLength);
        }

        element = element.parentNode;
      }

      return result;
    }
  }]);
  return elementHelper;
}();

var _default = elementHelper.Instance;
exports["default"] = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(16));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var _data = _interopRequireDefault(__webpack_require__(3));

var _urlConfig = _interopRequireDefault(__webpack_require__(5));

var _paramsHelper = _interopRequireDefault(__webpack_require__(17));

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
    value: function send(params, type) {
      if (!this.validateParams(params, type)) {
        return;
      }

      var extendedParams = this.extendParams(params);
      var url = this.generateUrl(extendedParams, type);
      this.sendLog(url);
    } // 根据打点参数信息

  }, {
    key: "generateUrl",
    value: function generateUrl(params, type) {
      var apiUrl = _urlConfig["default"].getUrl(type);

      var encodeParams = _paramsHelper["default"].encodeParams(params); // 加上时间戳，防止缓存


      encodeParams += '&t=' + +new Date();
      var linkChart = apiUrl.indexOf('?') > -1 ? '&' : '?';
      var url = "".concat(apiUrl).concat(linkChart).concat(encodeParams);
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
    value: function validateParams(params, type) {
      var _this = this;

      var apiUrl = _urlConfig["default"].getUrl(type);

      var logParams = _paramsHelper["default"].encodeParams(params);

      if (!apiUrl) {
        console.error("".concat(type, "\u7684api url\u672A\u914D\u7F6E\uFF01"));
        return false;
      }

      if (Object.prototype.toString.call(params).slice(8, -1) !== 'Object') {
        console.error('参数类型异常，应传Object类型！');
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
/* 16 */
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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(1));

var _createClass2 = _interopRequireDefault(__webpack_require__(2));

var nodeHelper = /*#__PURE__*/function () {
  function nodeHelper() {
    (0, _classCallCheck2["default"])(this, nodeHelper);
  }

  (0, _createClass2["default"])(nodeHelper, [{
    key: "on",
    value: function on(element, type, func) {
      if (!element) {
        return;
      }

      if (element.addEventListener) {
        element.addEventListener(type, func, false);
      } else {
        element.attachEvent('on' + type, func);
      }
    }
  }, {
    key: "parentNode",
    value: function parentNode(element, tagName) {
      var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
      tagName = tagName.toUpperCase();

      while (element && deep-- > 0) {
        if (element.tagName === tagName) {
          return element;
        }

        element = element.parentNode;
      }

      return null;
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new nodeHelper();
      }

      return this._instance;
    }
  }]);
  return nodeHelper;
}();

var _default = nodeHelper.Instance;
exports["default"] = _default;

/***/ })
/******/ ])["default"];
});