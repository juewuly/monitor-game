/**
 * @author: liuyang9
 * @description: 发送采集到的数据
 */

import ObjectH from './util/objectH';
import data from './data';
import config from './config';

const dataInstance = data.Instance;
const configInstance = config.Instance;

let lastLogParams = '';
window.__qihoo_monitor_imgs = {};

export default class log {
  static get Instance() {
    if (!this._instance) {
      this._instance = new log();
    }

    return this._instance;
  }

  constructor() {
  }

  send(params) {
    const serviceUrl = configInstance.getServiceUrl();
    if (!serviceUrl) {
      alert('Error : the service url does not exist!');
      return;
    }

    if (!params) {
      return;
    }

    const newParams = this.updateParams(params);

    if (!this.validateParams(newParams)) {
      return;
    }

    let encodeParams = ObjectH.encodeURIJson(newParams);
    // 加上时间戳，防止缓存
    encodeParams += '&t=' + (+ new Date());
    const linkChart = serviceUrl.indexOf('?') > -1 ? '&' : '?';
    const url = `${serviceUrl}${linkChart}${encodeParams}`;

    this.sendLog(url);
  }

  updateParams(params) {
    let otherParams = dataInstance.getBaseData();
    return ObjectH.mix(otherParams, params || {}, true);
  }

  validateParams(params) {
    const serviceUrl = configInstance.getServiceUrl();
    const logParams = serviceUrl + ObjectH.encodeURIJson(params);
    if (logParams === lastLogParams) {
      return false;
    }

    lastLogParams = logParams
    //100ms后允许发相同数据
    setTimeout(function() {
      lastLogParams = '';
    }, 100);

    return true;
  }

  sendLog(url) {
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