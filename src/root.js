/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * @emails oncall+i18n_fbt_js
 * @format
 * @noflow
 * @oncall i18n_fbt_js
 */

import './css/root.css';
import Example from './example/Example.react';
import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const root = document.getElementById('root');

if (root == null) {
  throw new Error(`No root element found.`);
}

ReactDOM.render(<Example />, root);