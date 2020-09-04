> 打点SDK

* [Features](#features)
* [Installing](#installing)
* [Usage](#usage)
* [API](#api)
* [License](#license)

## Features
页面打点信息采集

## Installing

**NPM**
```bash
$ npm i monitor-game --save
```

**SCRIPT**
```bash
  <script type="text/javascript" src="https://unpkg.com/monitor-game/dist/monitor-game.min.js"></script>
```

## Usage
1. sdk在全局下的变量名是`MonitorGame`。
2. 设置打点信息发送到的服务地址`setServiceUrl('apiUrl')`。
3. 设置打点时传送的基础参数数据`setBaseLogData(Function | Object)`,参数值可为对象或函数，如果为函数，则基础参数为函数的返回值`。
4. 设置打点指标在html标签中的属性名`setMetricAttributeName('data-wk') // 可选，不设置时默认值为'data-wk'`。
5. 设置打点指标在发送给服务端时的参数名`setMetricParamName('event_key') // 可选，默认值为'metric'`。
6. 监听点击事件，并统计打点信息`getClickAndKeydown`。

### Example
```javascript
  MonitorGame
    .setServiceUrl('serviceUrl')
    .setBaseLogData(function() {
      return {
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
        time_str: MonitorGame.getCurrentTime()
      }
    })
    .setMetricParamName('event_key')  // 可选，默认值为“metric”
    .setMetricAttributeName('data-wk') // 可选，默认值为“data-wk”
    .getClickAndKeydown();
```

## API

**设置打点发送到的服务端url**
```javascript
  MonitorGame.setServiceUrl('apiUrl');
```

**设置发送打点信息时传递给服务端的基础参数**
```javascript
  // 参数可为对象或函数，如果为函数，则附加的基础参数为函数的返回值

  MonitorGame
    .setBaseLogData(function() {
      return {
        param1: 'param1',
        param2: 'param2',
        param3: 'param3',
        time_str: MonitorGame.getCurrentTime()
      }
    })

  // or

  MonitorGame
    .setBaseLogData({
      param1: 'param1',
      param2: 'param2',
      param3: 'param3',
    })
```

**设置打点指标在发送给服务端时的参数名**
```javascript
  MonitorGame.setMetricParamName('event_key');
```

**设置打点指标在html标签中的属性名**
```javascript
  MonitorGame.setMetricAttributeName('data-wk')
```

**监听点击事件进行打点**
```javascript
  MonitorGame.getClickAndKeydown();
```
**手动发送打点（可选）**
```javascript
  MonitorGame.send({event_key: 'test'});
```

## License
MIT



