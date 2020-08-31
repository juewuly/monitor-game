import util from './util';
import data from './data';
import ObjectH from './objectH';
import NodeH from './nodeH';
import config from './config';
import log from './log';

const configInstance = config.Instance();
const dataInstance = data.Instance;

const doc = document;

export default class Monitor {
  constructor() {
    
  }

  static Instance() {
    if (!this._instance) {
      this._instance = new Monitor();
    }

    return this._instance;
  }

  version() {
    return 'version v1.0.0';
  }

  util() {
    return util;
  }

  config() {
    return configInstance;
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

  log(params, type) {
    type = type || 'click';

    const url = this.config()[type + 'Url'];
    if (!url) {
      alert('Error : the ' + type + 'url does not exist!');
    }
    this.buildLog(params, url);
  }

  setConf(key, val) {
    let newConfig = {};
    if (!ObjectH.isObject(key)) {
      newConfig[key] = val;
    } else {
      newConfig = key;
    }

    this.config().set(ObjectH.mix(this.config(), newConfig, true));
    return this;
  }

  setProject(prj) {
    if (prj) {
      this.util().getProject = function() {
        return prj;
      };
    }
    return this;
  }

  setId() {
    let areaIds = [];
    let i = 0;
    let argument;

    while (argument = arguments[i++]) {
      if (!ObjectH.isArray(argument)) {
        areaIds.push(argument);
      } else {
        areaIds = areaIds.concat(argument);
      }
    }

    this.setConf('areaIds', areaIds);
    return this;
  }

  getClickAndKeydown() {
    let that = this;
    NodeH.on(doc, 'mousedown', function(e) {
      let params = dataInstance.getClickData(e);
      that.log(params, 'click');
    });

    NodeH.on(doc, 'keydown', function(e) {
      let params = dataInstance.getKeydownData(e);
      that.log(params, 'click');
    });

    return this;
  }
}