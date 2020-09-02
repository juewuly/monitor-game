/**
 * @author: liuyang9
 * @description: 新版打点
 */

import data from './data';
import NodeH from './util/nodeH';
import config from './config';
import log from './log';

const configInstance = config.Instance;
const dataInstance = data.Instance;
const logInstance = log.Instance;

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
    return 'version v1.0.0';
  }

  // 设置项目标识
  setProjectId(id) {
    if (id) {
      configInstance.setProjectId(id);
    }
    return this;
  }

  // 设置数据发送到的url
  setServiceUrl(url) {
    configInstance.setServiceUrl(url);
    return this;
  }

  // 收集点击时的数据
  getClickAndKeydown() {
    NodeH.on(document, 'mousedown', function(e) {
      let params = dataInstance.getClickData(e);
      logInstance.send(params);
    });

    NodeH.on(document, 'keydown', function(e) {
      let params = dataInstance.getKeydownData(e);
      logInstance.send(params);
    });

    return this;
  }

  // 开放单独发送打点信息
  send(params) {
    logInstance.send(params);
  }
}

export default Monitor.Instance;