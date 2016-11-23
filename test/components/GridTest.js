/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Grid from 'components//Grid.js';

describe('Grid', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Grid);
  });
});
