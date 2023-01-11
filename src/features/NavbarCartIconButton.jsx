import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

import { cartSelectors } from '../shared/redux';

export const NavbarCartIconButton = () => {
  const cartItemsCount = useSelector(cartSelectors.selectCartItemsCount);

  return (
    <IconButton>
      <Badge color="primary" badgeContent={cartItemsCount}>
        <ShoppingCartIcon sx={{ color: 'common.white', fontSize: 36 }} />
      </Badge>
    </IconButton>
  );
};
