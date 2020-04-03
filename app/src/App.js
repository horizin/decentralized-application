/**
 * @function Application
 * @version 0.0.1
 */

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './assets/css/index.css';
import './assets/css/App.css';
import './assets/css/blueprint.css';

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
