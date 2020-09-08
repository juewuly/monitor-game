const urlType = ['click', 'clickHeatMap'];
const urlTypeReg = new RegExp(`^(${urlType.join('|')})$`);

class urlConfig {
  static get Instance() {
    if (!this._instance) {
      this._instance = new urlConfig();
    }

    return this._instance;
  }
  
  constructor() {
    this._urlObj = {};
  }

  getUrl(type) {
    if (!urlTypeReg.test(type)) {
      return false;
    }
    
    return this._urlObj[type];
  }

  configUrl(urlObj) {
    this._urlObj = urlObj;
  }
}

export default urlConfig.Instance;