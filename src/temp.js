
  var version = 'v1.4.0 (2016.01.04)',

    //设置__guid这个cookie存放域，如果为空，就保存在页面当前域，如果为"360.cn"，cookie会被设置到".360.cn"，依此类推
    guidCookieDomains = ['360.cn', 'so.com', 'leidian.com']; 

  var QIHOO_MONITOR = (function(window, undefined) {
    var isLocal;
    //有时候monitor.js会在file://或者res://协议下使用，判断下
    (function() {
      isLocal = true;
      try {
        var protocol = location.protocol.toLowerCase();
        if(protocol == 'http:' || protocol == 'https:') {
          isLocal = false;
        }
      } catch(e) { }
    })();

    var doc = document, 
      nav = navigator,
      screen = window.screen,
      domain = isLocal ? '' : document.domain.toLowerCase(),
      ua = nav.userAgent.toLowerCase();

    /**
     * Cookie读写操作的封装
     * @type {Object}
     */
    var Cookie = {
      get : function(key) {
        try {
          var a, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
          if(a = doc.cookie.match(reg)){
            return unescape(a[2]);
          }else{
            return "";
          }
        } catch(e) { 
          return "";
        }
      }, 
      set : function(key, val, options) {
        options = options || {};
        var expires = options.expires;

        if(typeof(expires) === "number"){
          expires = new Date();
          expires.setTime(expires.getTime() + options.expires);
        }

        try {
          doc.cookie =
            key + "=" + escape(val)
            + (expires ? ";expires=" + expires.toGMTString() : "")
            + (options.path ? ";path=" + options.path : "")
            + (options.domain ? "; domain=" + options.domain : "");
        } catch(e) {}
      }
    };

    /**
     * 配置项
     * @type {Object}
     */
    var config = {
      'trackUrl' : null,
      'clickUrl' : null,
      'areaIds' : null
    };

    var $ = function(str) {
      return document.getElementById(str);
    };

    return {
    }
  })(window);
