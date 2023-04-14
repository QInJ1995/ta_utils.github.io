<cn>
#### 热键使用
基本使用
</cn>

<us>
#### hotkey base
base use
</us>

```html
<template>
    <div v-hotkey="hk">
        <p>div绑定了两个热键：ctrl+shift+k和ctrl+shift+d</p>
        <ta-button v-hotkey="hotkey1" @click="click2">热键绑定：ctrl+shift+s</ta-button>
    </div>
</template>
<script>
  import Vue from 'vue'
  import hotkeyDirective from '@yh/ta-utils/hotKey'
  Vue.use(hotkeyDirective)
  export default {
    data() {
      return {
        dataSource: [],
        // 多个热键绑定到同一个节点，可传入callback，如果不传入callback则触发节点的click事件
        hk: {
          1:{
            // 此处没有传入callback且div上没有click事件，所以这个热键实际上不会生效
            hotkey: ['ctrl', 'shift', 'k'],
            // callback: this.hk1Cb,
          },
          2:{
            // 此处会执行hk2Cb回调
            hotkey: ['ctrl', 'shift', 'd'],
            callback: this.hk2Cb,
          },
        },
        // 一个节点绑定单个热键,默认触发组件的click事件
        hotkey1: ['ctrl', 'shift', 's'],
      }
    },
    methods: {
      /**
       *
       * @param el 绑定hotkey的节点
       * @param e 键盘事件
       */
      hk2Cb(el, e){
        console.log(el)
        console.log(e)
        console.log('fff')
      },
      hk1Cb(el, e){
        console.log(el)
        console.log(e)
        console.log('ddd')
      },
      click2(e){
        console.log(e)
        console.log(222)
      },
    },
  }
</script>

```
