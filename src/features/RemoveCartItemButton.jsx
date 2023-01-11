import { Remove } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { cartActions } from '../shared/redux';

export const RemoveCartItemButton = ({ itemId }) => {
  const dispatch = useDispatch();

  const handleRemoveCartItem = () =>
    dispatch(cartActions.cartItemRemoved(itemId));

  return (
    <Button variant="contained" onClick={handleRemoveCartItem}>
      <Remove />
    </Button>
  );
};
