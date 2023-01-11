import { CssBaseline } from '@mui/material';

import { Layout } from '../components';
import { Router } from '../pages';

export const App = () => (
  <>
    <CssBaseline />

    <Layout>
      <Router />
    </Layout>
  </>
);
