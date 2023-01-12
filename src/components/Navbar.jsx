import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { NavLink } from 'react-router-dom';

import { NavbarCartIconButton } from '../features/NavbarCartIconButton';

export const Navbar = () => (
  <AppBar component="nav" sx={{ backgroundColor: 'error.light' }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <NavLink to="/">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            color: 'common.white',
          }}
        >
          <LocalPizzaIcon sx={{ fontSize: 48 }} />

          <Typography
            sx={{
              fontSize: 48,
              lineHeight: '48px',
              fontWeight: 800,
              textDecoration: 'none',
            }}
          >
            PizzaHub
          </Typography>
        </Box>
      </NavLink>

      <NavLink to="cart">
        <NavbarCartIconButton />
      </NavLink>
    </Toolbar>
  </AppBar>
);
