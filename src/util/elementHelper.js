import config from '../config';

class elementHelper {
  static get Instance() {
    if (!this._instance) {
      this._instance = new elementHelper();
    }

    return this._instance;
  }

  constructor() {
    // 埋点信息的最大长度
    this._maxLength = 100;
  }

  getMetricData(element) {
    const dataKey = config.getDataKey();
    let result = '';

    while (element) {
      if (element.attributes && (dataKey in element.attributes || `data-${dataKey}` in element.attributes)) {
        result = element.getAttribute(dataKey) || element.getAttribute(`data-${dataKey}`);
        return result.substr(0, this._maxLength);
      }

      element = element.parentNode;
    }

    return result;
  }
}

export default elementHelper.Instance;