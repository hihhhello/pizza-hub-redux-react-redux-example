import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { AddCartItemButton } from '../features/AddCartItemButton';
import { RemoveCartItemButton } from '../features/RemoveCartItemButton';

export const PizzaPreviewCardButtons = ({ pizza, showCount }) => {
  const pizzaCount = undefined;

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
