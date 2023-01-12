import { Button } from '@mui/material';

export const OrderPizzasButton = () => {
  const isCartItemsEmpty = undefined;

  const handleCheckOut = undefined;

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
