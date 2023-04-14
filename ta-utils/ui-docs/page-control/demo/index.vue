<script lang="jsx">

import CN from '../index.zh-CN.md'
import US from '../index.en-US.md'
import Base from './base.md'

const md = {
  cn: `# 页面操作记录工具
  页面操作记录工具
    ## 引入
  \`\`\`bash
    import {createListener} from '@yh/ta404-ui/es/utils/js/page.control.util'
    createListener('eventName', (e, eventName) => {console.log(eventName, e)})
  \`\`\`
  ## 何时使用
    需要记录页面操作时，
  ## 代码演示
`,
  us: `# page-control`,
}
export default {
  category: 'Components',
  subtitle: '页面操作记录工具',
  type: '工具 API',
  title: 'pageControl',
  render () {
    return (
      <div>
        <md cn={md.cn} us={md.us}/>
        <Base/>
        <api>
          <template slot='cn'>
            <CN/>
          </template>
          <US/>
        </api>
      </div>
    )
  },
}
</script>
