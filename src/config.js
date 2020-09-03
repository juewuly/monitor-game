/**
 * @author: liuyang9
 * @description: 配置相关参数
 */

class config {
  static get Instance() {
    if (!this._instance) {
      this._instance = new config();
    }

    return this._instance;
  }

  constructor() {
    // 服务端接收数据的url
    this._serviceUrl = null;
    // 项目的标识
    this._projectId = null;
    // 即data-key里的key
    this._dataKey = 'wk';
  }
  
  getServiceUrl() {
    return this._serviceUrl;
  }

  setServiceUrl(url) {
    this._serviceUrl = url;
  }

  setDataKey(id) {
    this._dataKey = id;
  }

  getDataKey() {
    return this._dataKey;
  }
}

export default config.Instance;