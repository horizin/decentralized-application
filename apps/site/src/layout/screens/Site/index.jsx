/* --- Global --- */
import React from 'react';
import {Router} from '@reach/router';
/* --- Local --- */
import {Site} from 'templates';

import {Home, About} from 'pages';
/* --- Component --- */
const IndexPage = () => (
  <Site>
    <Router width="100%" primary={false}>
      <Home path="/" />
      <About path="/about" />
    </Router>
  </Site>
);

export default IndexPage;
