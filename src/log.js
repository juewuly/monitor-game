/**
 * @author: liuyang9
 * @description: 发送采集到的数据
 */

import ObjectH from './util/objectH';
import data from './data';
import config from './config';

class log {
  static get Instance() {
    if (!this._instance) {
      this._instance = new log();
    }

    return this._instance;
  }

  constructor() {
    this.lastLogParams = '';
    window.__monitor_game_imgs = {};
  }

  send(params) {
    if (!this.validateParams(params)) {
      return;
    }

    const extendedParams = this.extendParams(params);
    const url = this.generateUrl(extendedParams);
    this.sendLog(url);
  }

  // 根据打点参数信息
  generateUrl(params) {
    const serviceUrl = config.getServiceUrl();
    let encodeParams = ObjectH.encodeURIJson(params);
    // 加上时间戳，防止缓存
    encodeParams += '&t=' + (+ new Date());
    const linkChart = serviceUrl.indexOf('?') > -1 ? '&' : '?';
    const url = `${serviceUrl}${linkChart}${encodeParams}`;
    return url;
  }

  // 扩展参数
  extendParams(params) {
    let otherParams = data.getBaseData();
    return {
      ...otherParams, 
      ...params
    }
  }

  // 验证参数的有效性
  validateParams(params) {
    const serviceUrl = config.getServiceUrl();
    const logParams = ObjectH.encodeURIJson(params);

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

    this.lastLogParams = logParams
    //100ms后允许发相同数据
    setTimeout(() => {
      console.log('this..lastLogParams.', this.lastLogParams);
      this.lastLogParams = '';
    }, 100);

    return true;
  }

  sendLog(url) {
    let id = 'log_' + (+new Date);
    let img = window['__monitor_game_imgs'][id] = new Image();

    img.onload = img.onerror = function() {
      if(window.__monitor_game_imgs && window['__monitor_game_imgs'][id]) {
        window['__monitor_game_imgs'][id] = null;
        delete window["__monitor_game_imgs"][id];
      }
    };
    img.src = url;
  }
}

export default log.Instance;