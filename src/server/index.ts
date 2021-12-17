import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
// Pluginloader
import roachPluginLoader from './loader'
// Plugin
import ccAuth from '../plugins/core/ccAuth'
import markList from '../plugins/ext/healthMark'
import easyAuth from '../plugins/core/easyAuth'
import ssoAuth from '../plugins/core/ssoAuth'
import eduAuth from '../plugins/core/eduAuth'
import eduSystem from '../plugins/ext/eduSystem'
// chalk
import * as chalker from '../utils/chalkers'

const app = new Koa()
app.use(bodyParser())
const pluginLoader = roachPluginLoader.getInstance(app)
pluginLoader.installer(ccAuth)
pluginLoader.installer(markList)
pluginLoader.installer(easyAuth)
pluginLoader.installer(ssoAuth)
pluginLoader.installer(eduAuth)
// pluginLoader.installer(eduSystem)

app.listen(8800, () => {
  console.log(
    `${
      chalker.successBg(' Roach ') +
      chalker.infoBg(
        ' ' +
          chalker.bold(pluginLoader.pluginloadedInfo.length) +
          ' plugin(s) loaded! '
      )
    } crawling on http://localhost:8800`
  )
})
