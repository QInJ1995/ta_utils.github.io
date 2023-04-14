<cn>
#### 页面事件监控
基本使用
</cn>

<us>
#### page-control
base use
</us>

```html
<template>
    <ta-button>点击</ta-button>
</template>
<script>
  import {createListener} from '@yh/ta-utils/pageInfo'
 createListener('click', (e, eventName) => {console.log(eventName, e)})
export default {


}

</script>
```
