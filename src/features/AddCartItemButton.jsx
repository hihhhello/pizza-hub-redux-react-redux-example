import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { cartActions } from '../shared/redux';

export const AddCartItemButton = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddCartItem = () => dispatch(cartActions.cartItemAdded(item));

  return (
    <Button variant="contained" onClick={handleAddCartItem}>
      <Add />
    </Button>
  );
};
