import { Box } from '@mui/material';

export const Center = ({ children }) => (
  <Box sx={{ display: 'grid', placeItems: 'center', height: 1 }}>
    {children}
  </Box>
);
