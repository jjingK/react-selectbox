import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './components/App';

// styles
import './styles/base.css';

if (module.hot) {
    module.hot.accept();
}

render(<App />, document.getElementById('app'));