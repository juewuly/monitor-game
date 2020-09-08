/**
 * @author: liuyang9
 * @description: 发送采集到的数据
 */

import data from './data';
import urlConfig from './config/urlConfig';
import paramsHelper from './util/paramsHelper';

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

  send(params, type) {
    if (!this.validateParams(params, type)) {
      return;
    }

    const extendedParams = this.extendParams(params);
    const url = this.generateUrl(extendedParams, type);
    this.sendLog(url);
  }

  // 根据打点参数信息
  generateUrl(params, type) {
    const apiUrl = urlConfig.getUrl(type)
    let encodeParams = paramsHelper.encodeParams(params);
    // 加上时间戳，防止缓存
    encodeParams += '&t=' + (+ new Date());
    const linkChart = apiUrl.indexOf('?') > -1 ? '&' : '?';
    const url = `${apiUrl}${linkChart}${encodeParams}`;
    return url;
  }

  // 扩展参数
  extendParams(params) {
    let otherParams = data.getBaseData();
    return Object.assign(otherParams, params);
  }

  // 验证参数的有效性
  validateParams(params, type) {
    const apiUrl = urlConfig.getUrl(type);
    const logParams = paramsHelper.encodeParams(params);

    if (!apiUrl) {
      console.error(`${type}的api url未配置！`);
      return false;
    }

    if (Object.prototype.toString.call(params).slice(8, -1) !== 'Object') {
      console.error('参数类型异常，应传Object类型！');
      return false;
    }

    if (logParams === this.lastLogParams) {
      return false;
    }

    this.lastLogParams = logParams
    //100ms后允许发相同数据
    setTimeout(() => {
      this.lastLogParams = '';
    }, 100);

    return true;
  }

  sendLog(url) {
    const id = 'log_' + (+new Date);
    const img = window['__monitor_game_imgs'][id] = new Image();

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