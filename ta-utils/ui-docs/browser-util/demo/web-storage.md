<cn>
#### WebStorage
WebStorage 浏览器本地存储使用与管理<br>
<span style="font-size:16px;font-weight: bold;">WebStorage.init</span><br>
WebStorage 初始化一个本地存储实例对象
```
import { createWebStorage, } from '@yh/ta-utils'
createWebStorage('name',{isLocal,failureTime})
// 例子: 初始化一个名字为myStorageName的WebStorage的实例对象，可以直接调用实例对象的方法
 const myWebStorage = createWebStorage('myStorageName')
// 调用myWebStorage的set方法
 myWebStorage.set('key1',object)
```
|参数| 说明 | 类型|
|---|---|---|
| name |存储名称|string|
| isLocal| 是否是本地永久存储默认不是false为`sessionStorage` 存储, 可配置为true `localStorage `|Boolean |
| failureTime| 失效时间, 超过时间限制数据就会失效不可取, 默认跟对应storage生命周期保持一致, 单位秒 | number |
<span style="font-size:16px;font-weight: bold;">WebStorage实例方法</span>
|方法|说明|类型|
|---|---|---|
| set| 存储值 | function (key, value) |
| get| 获取值 | function (key) |
| remove| 删除值 | function (key) |
| getAll | 获取所有值 | function() |
| initData | 初始化数据（重复操作无效） | function() |
| clearData | 清空所有值 | function() |
| cleanFailureData | 清理失效数据 | function() |
| removeData| 清除整个 storage| function() |
</cn>

<us>
#### WebStorage
WebStorage usage and management
</us>

```html
<template>
 <div>

       <ta-button
          id="btn"
          @click="setWebStorageData"
          type="primary"
        >
          设置WebStorage
        </ta-button>
         <ta-button
            id="btn"
            @click="getWebStorageData"
            type="primary"
          >
            获取WebStorage
          </ta-button>
         <ta-button
            id="btn"
            @click="cleanWebStorageData"
            type="primary"
          >
            清理WebStorage
          </ta-button>
 </div>
</template>

<script>
    import { createWebStorage, } from '@yh/ta-utils'
export default {
  data () {
    return {
      storageKey: 'document_storage_key',
      WebStorage: null
    }
  },
  created(){
    this.WebStorage = createWebStorage('document_storage')
  },
  methods: {
     setWebStorageData(){
         this.WebStorage.set(this.storageKey, '文档storage测试')
     },
     getWebStorageData(){
         alert(this.WebStorage.get(this.storageKey))
     },
     cleanWebStorageData(){
         this.WebStorage.cleanData(this.storageKey)
         this.getWebStorageData()
     },

  }

}
</script>

```
