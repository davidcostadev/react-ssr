import express from 'express'
import webpack from 'webpack';
// import React from 'react'
// import { renderToString } from 'react-dom/server'
// import Home from '../src/pages/Home'
// import template from '../src/layout/Default'
import webpackConfig from '../webpack/webpack.config.dev-client';

const render = require('../dist/bundle');
const app = express()


const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.get('/', render.default);

// app.get('/', (req, res) => {
//     const appString = renderToString(<Home />)

//     res.send(template({
//         title: 'FROM THE SERVER',
//         body: appString
//     }))
// })


const port = 3000

app.listen(port)

console.log(`Listing on port ${port}`)