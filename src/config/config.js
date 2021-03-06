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
    // 打点指标在html标签中的属性名称
    this._metricAttributeName = 'data-wk';
    // 设置打点指标的参数名
    this._metricParamName = 'metric';
  }
  
  setMetricAttributeName(name) {
    this._metricAttributeName = name;
  }

  getMetricAttributeName() {
    return this._metricAttributeName;
  }

  setMetricParamName(name) {
    this._metricParamName = name;
  }

  getMetricParamName() {
    return this._metricParamName;
  }
}

export default config.Instance;