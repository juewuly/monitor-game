/**
 * @author: liuyang9
 * @description: 打点sdk
 */

import data from './data';
import config from './config/config';
import urlConfig from './config/urlConfig';
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

  // 收集点击时的数据
  getClickAndKeydown() {
    nodeHelper.on(document, 'mousedown', function(e) {
      let metricData = data.getClickData(e);
      if (metricData) {
        log.send({ [config.getMetricParamName()]: metricData }, 'click');
      }
    });

    nodeHelper.on(document, 'keydown', function(e) {
      let metricData = data.getKeydownData(e);
      if (metricData) {
        log.send({ [config.getMetricParamName()]: metricData }, 'click');
      }
    });

    return this;
  }

  // 热力图打点
  getClickHeatmap(times=2, minutes=5) {
    let positions = [];
    let logTimer = 0;
    
    const detectSend = ifForceSend => {
      clearTimeout(logTimer);
      if (ifForceSend || positions.length > times){
        log.send({
          positions: positions.join(','),
          screenSize: `${screen.width}x${screen.height}`
        }, 'clickHeatMap');
        positions = [];
        return;
      }

      logTimer = setTimeout(function(){
        detectSend(true);
      }, minutes * 60 * 1000);
    }

    nodeHelper.on(document, 'mousedown', function(e) {
      console.log('热力。。。。');
      const pos = e.pageX + '.' + e.pageY;
      positions.push(pos);
      detectSend();
    });
    return this;
  }

  // 开放单独发送打点信息
  send(params, type='click') {
    log.send(params, type);
    return this;
  }

  /**
   * 设置发送打点时的基础参数(可为对象或函数，如果为函数，则附加参数为函数的返回值)
   * @param {Object || Function} params 
   */
  setBaseLogData(params) {
    data.setBaseData(params);
    return this;
  }

  // 设置打点指标在html标签中的属性名
  setMetricAttributeName(name) {
    config.setMetricAttributeName(name);
    return this;
  }

  // 设置打点指标在发送给服务端时的参数名
  setMetricParamName(name) {
    config.setMetricParamName(name);
    return this;
  }

  // 配置url
  configUrl(urlObj) {
    urlConfig.configUrl(urlObj);
    return this;
  }
}

export default Monitor.Instance;