/**
 * @author: liuyang9
 * @description: 新版打点
 */

import data from './data';
import config from './config';
import log from './log';
import nodeHelper from './util/nodeHelper';


class Monitor {
  static get Instance() {
    if (!this._instance) {
      this._instance = new Monitor();
    }

    return this._instance;
  }

  constructor() {
    
  }

  get version() {
    return 'v1.0.0';
  }

  // 设置数据发送到的url
  setServiceUrl(url) {
    config.setServiceUrl(url);
    return this;
  }

  // 收集点击时的数据
  getClickAndKeydown() {
    nodeHelper.on(document, 'mousedown', function(e) {
      let metricData = data.getClickData(e);
      if (metricData) {
        log.send({ event_key: metricData });
      }
    });

    nodeHelper.on(document, 'keydown', function(e) {
      let metricData = data.getKeydownData(e);
      if (metricData) {
        log.send({ event_key: metricData });
      }
    });

    return this;
  }

  // 开放单独发送打点信息
  send(params) {
    log.send(params);
    return this;
  }

  /**
   * 设置发送打点时附加的参数
   * @param {Object || Function} params 
   */
  setBaseLogData(params) {
    data.setBaseData(params);
    return this;
  }
}

export default Monitor.Instance;