import { Container, Box } from '@mui/material';

import { Navbar } from './Navbar';

export const Layout = ({ children }) => (
  <Box sx={{ with: '100vw', height: '100vh' }}>
    <Navbar />

    <Container sx={{ pt: '64px', height: 'calc(100vh - 64px)' }}>
      {children}
    </Container>
  </Box>
);
