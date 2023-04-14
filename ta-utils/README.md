## 引入方式

----

### 一般引入方式

这种引入方式在打包时会将整个`@yh/ta-utils`打包到最终的js文件中

- `import TaUtils from '@yh/ta-util'`
- `import { add, } from '@yh/ta-util'`

例如,应用仅引入函数`add`时,最终打包出的`ta-utils.js`文件有`200kB`.

### 按需引入

这种引入方式只会将使用了的js函数打包到最终的js文件中

- `import add from '@yh/ta-util/add'`

例如,应用仅引入函数`add`时,最终打包出的`ta-utils.js`文件仅`2kB`.
