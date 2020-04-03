/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from '@templates';
import {Overview, Settings} from '@screens';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Overview path="/" />
      <Settings path="/settings" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
