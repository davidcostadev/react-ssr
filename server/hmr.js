import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import weboackHotMiddleware from 'webpack-hot-middleware'
import webpackConfigDev from '../build/webpack.config.dev'


const compiler = webpack(webpackConfigDev)

const HMR = (app) => {
  app.use(webpackDevMiddleware(compiler), {
    noInfo: true,
    hot: true,
    publicPath: webpackConfigDev.ouput.publicPath
  })

  app.use(weboackHotMiddleware(compiler, {
    log: console.log,
    reload: true
  }))
} 

export default HMR
