import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NavbarCartIconButton = () => {
  const cartItemsCount = undefined;

  return (
    <IconButton>
      <Badge color="primary" badgeContent={cartItemsCount}>
        <ShoppingCartIcon sx={{ color: 'common.white', fontSize: 36 }} />
      </Badge>
    </IconButton>
  );
};
