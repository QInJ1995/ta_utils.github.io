<script lang="jsx">

import CN from '../index.zh-CN.md'
import US from '../index.en-US.md'
import CrossDomain from './crossDomain.md'
import WebStorage from './web-storage.md'
const md = {
  cn: `# 浏览器工具方法
    浏览器工具方法
     ## 按需引入组件
  \`\`\`bash
   import '@yh/ta-utils/crossDomain'
  \`\`\`
  `,
  us: `# browser util`
}
export default {
  render () {
    return (
      <div>
        <md cn={md.cn} us={md.us}/>
        <CrossDomain/>
        <WebStorage/>
        <api>
          <template slot='cn'>
            <CN/>
          </template>
          <US/>
        </api>
      </div>
    )
  }
}
</script>
