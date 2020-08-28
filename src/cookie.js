const doc = document;

export default class cookie {
  constructor() {

  }

  static get(key) {
    try {
      let a;
      let reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
      if (a = doc.cookie.match(reg)) {
        return unescape(a[2]);
      } else {
        return "";
      }
    } catch(e) { 
      return "";
    }
  }

  static set(key, val, options) {
    options = options || {};
    let expires = options.expires;

    if (typeof(expires) === "number"){
      expires = new Date();
      expires.setTime(expires.getTime() + options.expires);
    }

    try {
      doc.cookie =
        key + "=" + escape(val)
        + (expires ? ";expires=" + expires.toGMTString() : "")
        + (options.path ? ";path=" + options.path : "")
        + (options.domain ? "; domain=" + options.domain : "");
    } catch (e) {}
  }
}