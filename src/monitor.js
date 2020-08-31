import data from './data';
import NodeH from './nodeH';
import config from './config';
import log from './log';

const configInstance = config.Instance;
const dataInstance = data.Instance;

export default class Monitor {
  constructor() {
    
  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new Monitor();
    }

    return this._instance;
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
    let that = this;
    NodeH.on(document, 'mousedown', function(e) {
      let params = dataInstance.getClickData(e);
      that.log(params);
    });

    NodeH.on(document, 'keydown', function(e) {
      let params = dataInstance.getKeydownData(e);
      that.log(params);
    });

    return this;
  }

  sendLog(url) {
    log.sendLog(url);
  }

  buildLog(params, url) {
    console.log('buildLog...', params, url);
    if (params === false) {
      return;
    }
    const requestUrl = log.buildLog(params, url);
    this.sendLog(requestUrl);
  }

  log(params) {
    const url = configInstance.getServiceUrl();
    if (!url) {
      alert('Error : the service url does not exist!');
    }

    this.buildLog(params, url);
  }
}