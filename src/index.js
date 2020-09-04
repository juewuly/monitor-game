/**
 * @author: liuyang9
 * @description: monitor的api
 */

import monitor from './monitor';
import data from './data';

export default {
  // 获取版本号
  version: monitor.version,

  // 设置服务端url
  setServiceUrl: monitor.setServiceUrl,

  // 监听单击事件的数据采集
  getClickAndKeydown: monitor.getClickAndKeydown,

  // 发送打点信息
  send: monitor.send,

  // 设置发送打点时附加的参数(可为对象或函数，如果为函数，则附加参数为函数的返回值)
  setBaseLogData: monitor.setBaseLogData,

  // 获取当前时间
  getCurrentTime: data.getCurrentTime,

  // 设置打点指标在html标签中的属性名
  setMetricAttributeName: monitor.setMetricAttributeName,

  // 设置打点指标在发送给服务端时的参数名
  setMetricParamName: monitor.setMetricParamName
}