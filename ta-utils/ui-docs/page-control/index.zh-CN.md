## API
监听页面上的某些事件
通过传入需要监听的事件名及事件处理存储的方法

具体使用参考：
在页面入口文件中传入即可

```
import {createListener} from '@yh/ta-utils/pageInfo'
/**
* event: 页面原生事件
* eventName: 事件名称
*/
function f(event, eventName){
    // 在这个回调中可以自行定义获取到event后的任何操作
    () => {console.log(eventName, event)
}
/**
 *
 * @param eventName
 * @param storageCallback (e,eventName)=>{} || false，如果传入这个参数，那么框架会通过storageCallback将事件传入callback，请自行通过callback进行数据处理
 */
createListener('click', f)
```

