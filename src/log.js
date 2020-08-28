import ObjectH from './objectH';
import data from './data';

let lastLogParams = '';
window.__qihoo_monitor_imgs = {};

export default class log {
  constructor() {

  }

  static buildLog(params, url) {
    if (params === false) {
      return;
    }

    params = params || {};
    let baseParams = data.getBase();
    params = ObjectH.mix(baseParams, params, true);
    const logParams = url + ObjectH.encodeURIJson(params);
    if (logParams == lastLogParams) {
      return;
    }

    lastLogParams = logParams;
    setTimeout(function() { //100ms后允许发相同数据
      lastLogParams = '';
    }, 100);

    let sendParams = ObjectH.encodeURIJson(params);
    sendParams += '&t=' + (+ new Date()); //加上时间戳，防止缓存

    url = url.indexOf('?') > -1 ? 
      url + '&' + sendParams :
      url + '?' + sendParams;

    return url;
  }

  static sendLog(url) {
    let id = 'log_' + (+new Date);
    let img = window['__qihoo_monitor_imgs'][id] = new Image();

    img.onload = img.onerror = function() {
      if(window.__qihoo_monitor_imgs && window['__qihoo_monitor_imgs'][id]) {
        window['__qihoo_monitor_imgs'][id] = null;
        delete window["__qihoo_monitor_imgs"][id];
      }
    };
    img.src = url;
  }
}