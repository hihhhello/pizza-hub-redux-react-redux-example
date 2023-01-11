import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { AddCartItemButton } from '../features/AddCartItemButton';
import { RemoveCartItemButton } from '../features/RemoveCartItemButton';
import { cartSelectors } from '../shared/redux';

export const PizzaPreviewCardButtons = ({ pizza, showCount }) => {
  const pizzaCount = useSelector(
    cartSelectors.selectCartItemCountById(pizza.id),
  );

  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <AddCartItemButton item={pizza} />

      {showCount && <Typography>{pizzaCount}</Typography>}

      <RemoveCartItemButton itemId={pizza.id} />
    </Box>
  );
};
