/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {Dashboard} from 'templates';
import {Overview, Contracts, Users} from 'pages';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Overview path="/" />
      <Contracts path="/contracts" />
      <Users path="/users" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
