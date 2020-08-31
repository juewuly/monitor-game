/**
 * @author: liuyang9
 * @description: 配置相关数据发送的url
 */

export default class config {
  static get Instance() {
    if (!this._instance) {
      this._instance = new config();
    }

    return this._instance;
  }

  constructor() {
    this._serviceUrl = null;
  }
  
  getServiceUrl() {
    return this._serviceUrl;
  }

  setServiceUrl(value) {
    this._serviceUrl = value;
  }
}