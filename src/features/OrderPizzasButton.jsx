import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions, cartSelectors } from '../shared/redux';

export const OrderPizzasButton = () => {
  const dispatch = useDispatch();

  const isCartItemsEmpty = useSelector(cartSelectors.selectIsCartItemsEmpty);

  const handleCheckOut = () => dispatch(cartActions.cartItemsOrdered());

  return (
    <Button
      variant="contained"
      onClick={handleCheckOut}
      disabled={isCartItemsEmpty}
    >
      Order
    </Button>
  );
};
