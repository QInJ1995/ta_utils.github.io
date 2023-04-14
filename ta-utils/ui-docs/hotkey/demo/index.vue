<script lang="jsx">

import CN from '../index.zh-CN.md'
import US from '../index.en-US.md'
import Base from './base.md'

const md = {
  cn: `# 热键工具
  热键工具
    ## 引入
  \`\`\`bash
    在使用public-ant/public-ant-modules时均需要手动引入
    import hotkeyDirective from '@yh/ta404-ui/es/utils/js/hotkey.util'
    Vue.use(hotkeyDirective)
  \`\`\`
  ## 何时使用
    需要在某些节点上绑定热键时
  ## 代码演示
`,
  us: `# form-util

  `,
}
export default {
  category: 'Components',
  subtitle: '热键工具',
  type: 'util API',
  title: 'hotkeyTool',
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
