import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './layout/Default';
import Home from './pages/Home';

export default function render(req, res) {
  const homeString = renderToString(<Home />);
  res.send(template({
    body: homeString,
    title: 'FROM THE SERVER',
  }));
}