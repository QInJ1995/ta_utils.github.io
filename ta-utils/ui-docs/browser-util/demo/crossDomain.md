<cn>
#### html之间传值
项目中多个html之间(多个模块之间)传值<br>
ps:如果在同一个模块(同一个html下)那么使用vuex实现传值<br>
<span style="font-size:16px;font-weight: bold;">sendMessage</span><br>
sendMessage(target, callFun, arg, callBackFun)
向目标html主动发送广播消息
| 参数名 | 说明  | 是否必须| 参数类型 | 默认值 |
| --- | --- | --- | --- | --- |
| target |iframe控件的ID）/object（iframe window,eq:如果是向父页面发送消息,则传window.parent） | 是 | String | - |
| callFun  | 要访问目标html的方法名,一般这个方法是放在window上的 | 是 | - | - |
| arg  | 访问目标iframe的方法的参数 | 否 | Object | - |
| callBackFun  | 消息反馈时调用的方法名,一般这个方法是放在window上的 | 否 | String | - |
<span style="font-size:16px;font-weight: bold;">receiveMessage</span><br>
框架默认处理接收到的信息,自动触发自己的方法callFun,所以你只需要在你的目标页面中实现callFun就行
</cn>

<us>
#### crossDomain
Value transfer between multiple single pages in cli project (it is recommended to use vuex for single page value transfer)
<span style="font-size:16px;font-weight: bold;">sendGlobalMessage/receiveGlobalMessage</span>
```
suggest:
Send value in a.vue page of page a.html:
top.indexTool.sendGlobalMessage(['b.html', 'orguser.html'], {msg: 'XXX'})
Received value in a.vue page of page b.html:
mounted () {
  top.indexTool.receiveGlobalMessage(window, (data) => {
    // do something
    console.log(data)
  })
}
This value has not been saved to localstorage / sessionstorage. If necessary, the developer should add it by himself
```
<span style="font-size:16px;font-weight: bold;">Params of sendGlobalMessage</span>
| Param Name | Introduction  | Require | Type | Default |
| --- | --- | --- | --- | --- |
| sendUrl | Pages that need to receive information can send content to multiple pages at the same time | YES | Array | - |
| sendMessage | message send | YES | - | - |
<span style="font-size:16px;font-weight: bold;">Params of receiveGlobalMessage</span>
| Param Name | Introduction  | Require | Type | Default |
| --- | --- | --- | --- | --- |
| window | Window object of the current page | YES | Object | - |
| callback | Callback (data), which is the received information | YES | Function | - |
</us>

```html
// a.html
<template>
    <ta-button @click="example">将该值传到b.html</ta-button>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    example() {
      sendMessage('b.html', 'Bfn',{a:'111'})
    }
  }
}
</script>
// b.html
<template>
    <div>
      {{message}}
    </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
     window.Bfn=(value)=>{
       console.log(value)
       this.message=value
     }
  }
}
</script>
```
