/**
 * @function Application
 * @version 0.0.1
 */

import './assets/css/index.css';
import './assets/css/App.css';

/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Site, Dashboard} from '@routes';
import Providers from './providersWithLocation';

/* --- Component --- */
export default () => (
  <Providers>
    <Router width="100%">
      <Site path="/*" />
      <Dashboard path="/dashboard/*" />
    </Router>
  </Providers>
);
