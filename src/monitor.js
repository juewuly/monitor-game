import util from './util';
import data from './data';
import ObjectH from './objectH';
import NodeH from './nodeH';
import config from './config';

const configInstance = config.Instance;

const doc = document;
const nav = navigator;
const screen = window.screen;
const domain = document.domain.toLowerCase();
const ua = nav.userAgent.toLowerCase();

export default class Monitor {
  constructor() {
    
  }

  static get Instance() {
    if (!this._instance) {
      this._instance = new Monitor();
    }

    return this._instance;
  }

  test() {
    return 'test monitor';
  }

  get version() {
    return 'version v1.0.0';
  }

  get util() {
    return util;
  }

  get data() {
    return data;
  }

  get config() {
    return configInstance;
  }

  sendLog(url) {
    let id = 'log_' + (+new Date);
    let img = window['__qihoo_monitor_imgs'][id] = new Image();

    img.onload = img.onerror = function() {
      if(window.__qihoo_monitor_imgs && window['__qihoo_monitor_imgs'][id]) {
        window['__qihoo_monitor_imgs'][id] = null;
        delete window["__qihoo_monitor_imgs"][id];
      }
    };
    img.src = url;
  }

  buildLog(params, url) {
    throw new Error('Todo: buildLog');
  }

  log(params, type) {
    type = type || 'click';

    const url = this.config[type + 'Url'];
    if(!url) {
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

    this.config.set(ObjectH.mix(this.config, newConfig, true));
    return this;
  }

  setUrl(url) {
    if (url) {
      this.util.getLocation = function() {
        return url;
      };
    }
    return this;
  }

  setProject(prj) {
    if (prj) {
      this.util.getProject = function() {
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

  getTrack(cookies) {
    // var params = this.data.getTrack(cookies);
    
    // this.log(params, 'track');
    // return this;

    throw new Error('Todo: getTrack');
  }

  /**
   * 热力图
   * @param {*} times 
   * @param {*} minutes 
   */
  getClickHeatmap(times, minutes) {
    throw new Error('Todo: getClickHeatmap');
  }

  getClickAndKeydown() {
    let that = this;
    NodeH.on(doc, 'mousedown', function(e) {
      let params = that.data.getClick(e);
      console.log('click...params', params);
      that.log(params, 'click');
    });

    NodeH.on(doc, 'keydown', function(e) {
      let params = that.data.getKeydown(e);
      that.log(params, 'click');
    });

    return this;
  }
}