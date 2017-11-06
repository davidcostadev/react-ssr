import express from 'express'
import HMR from './hmr'

// Server Side Render
import {
  renderPage,
  renderDevPage
} from './ssr'


const PRODUCTION = process.env.NODE_ENV === 'production'

const app = express()
const port = 3000

if (PRODUCTION) {
  app.use('/static', express.static('build'))
  app.get('*', renderPage)
} else {
  // Hot Module Reloading
  HMR(app);

  app.get('*', renderDevPage)
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404

  next(err)
})


// development error handler
if (!PRODUCTION) {
  app.use((err, req, res, next) => {
    console.error('error : ', err)

    res.status(err.status || 500)
  })
}


app.use((err, req, res, next) => {
  console.error('error: ', err.message)

  res.status(err.status || 500)
})


app.listen(port)

console.log(`Listing on port: ${port}`)
